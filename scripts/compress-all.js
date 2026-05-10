#!/usr/bin/env node
/**
 * Unified image compression script for /public folder.
 * Uses sharp (no external CLI dependencies).
 *
 * Actions:
 *   - JPEG → recompress (quality 85, progressive, strip metadata)
 *   - PNG  → recompress (palette if <256 colors, otherwise adaptive filtering)
 *   - JPEG/PNG → create WebP sibling (quality 85)
 *   - Existing WebP → recompress (quality 85)
 *
 * Originals are backed up to public/.originals-backup/
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const BACKUP_DIR = path.join(__dirname, "..", "public", ".originals-backup");

const SUPPORTED = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function findImages(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== ".originals-backup") {
      findImages(fullPath, files);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (SUPPORTED.has(ext)) files.push(fullPath);
    }
  }
  return files;
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

async function compressJpeg(imgPath, backupPath) {
  const tmpPath = imgPath + ".tmp";
  await sharp(imgPath)
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(tmpPath);
  fs.renameSync(tmpPath, imgPath);
}

async function compressPng(imgPath, backupPath) {
  const tmpPath = imgPath + ".tmp";
  const metadata = await sharp(imgPath).metadata();
  const isPalette = metadata.palette || false;

  if (isPalette || metadata.channels === 1) {
    await sharp(imgPath)
      .png({ compressionLevel: 9, adaptiveFiltering: true, palette: true })
      .toFile(tmpPath);
  } else {
    // Try palette optimization first; if not smaller, fall back to standard
    const paletteTmp = imgPath + ".palette.tmp";
    await sharp(imgPath)
      .png({ compressionLevel: 9, adaptiveFiltering: true, palette: true })
      .toFile(paletteTmp);

    const origSize = fs.statSync(imgPath).size;
    const paletteSize = fs.statSync(paletteTmp).size;

    if (paletteSize < origSize) {
      fs.renameSync(paletteTmp, tmpPath);
    } else {
      fs.unlinkSync(paletteTmp);
      await sharp(imgPath)
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(tmpPath);
    }
  }
  fs.renameSync(tmpPath, imgPath);
}

async function compressWebp(imgPath, backupPath) {
  const tmpPath = imgPath + ".tmp";
  await sharp(imgPath)
    .webp({ quality: 85, effort: 6 })
    .toFile(tmpPath);
  fs.renameSync(tmpPath, imgPath);
}

async function createWebp(sourcePath) {
  const webpPath = sourcePath.replace(/\.(jpe?g|png)$/i, ".webp");
  if (fs.existsSync(webpPath)) return null; // skip if already exists

  await sharp(sourcePath)
    .webp({ quality: 85, effort: 6 })
    .toFile(webpPath);

  return webpPath;
}

async function main() {
  console.log("Scanning public folder for images...\n");
  const images = findImages(PUBLIC_DIR);

  if (images.length === 0) {
    console.log("No images found.");
    process.exit(0);
  }

  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }

  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;
  let webpCreated = 0;
  let errors = 0;

  for (const imgPath of images) {
    const relPath = path.relative(PUBLIC_DIR, imgPath);
    const ext = path.extname(imgPath).toLowerCase();
    const beforeSize = fs.statSync(imgPath).size;

    // Backup original
    const backupPath = path.join(BACKUP_DIR, relPath);
    const backupDir = path.dirname(backupPath);
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
    fs.copyFileSync(imgPath, backupPath);

    try {
      if (ext === ".jpg" || ext === ".jpeg") {
        await compressJpeg(imgPath, backupPath);
        const webpPath = await createWebp(imgPath);
        if (webpPath) {
          const webpSize = fs.statSync(webpPath).size;
          const webpRel = path.relative(PUBLIC_DIR, webpPath);
          const saved = beforeSize - webpSize;
          const pct = ((saved / beforeSize) * 100).toFixed(1);
          console.log(`  ${relPath} → ${webpRel}: ${formatBytes(beforeSize)} → ${formatBytes(webpSize)} (-${formatBytes(saved)}, ${pct}%)`);
          webpCreated++;
        }
      } else if (ext === ".png") {
        await compressPng(imgPath, backupPath);
        const webpPath = await createWebp(imgPath);
        if (webpPath) {
          const webpSize = fs.statSync(webpPath).size;
          const webpRel = path.relative(PUBLIC_DIR, webpPath);
          const saved = beforeSize - webpSize;
          const pct = ((saved / beforeSize) * 100).toFixed(1);
          console.log(`  ${relPath} → ${webpRel}: ${formatBytes(beforeSize)} → ${formatBytes(webpSize)} (-${formatBytes(saved)}, ${pct}%)`);
          webpCreated++;
        }
      } else if (ext === ".webp") {
        await compressWebp(imgPath, backupPath);
      }

      const afterSize = fs.statSync(imgPath).size;
      const saved = beforeSize - afterSize;
      if (ext !== ".webp" || webpCreated === 0) {
        // Only log recompression for webps; jpg/png logged above with webp creation
        if (ext === ".webp") {
          const pct = ((saved / beforeSize) * 100).toFixed(1);
          const status = saved >= 0 ? `-${formatBytes(saved)} (${pct}%)` : `+${formatBytes(-saved)}`;
          console.log(`  ${relPath}: ${formatBytes(beforeSize)} → ${formatBytes(afterSize)}  ${status}`);
        }
      }

      totalBefore += beforeSize;
      totalAfter += afterSize;
      processed++;
    } catch (err) {
      errors++;
      console.error(`  ERROR: ${relPath} — ${err.message}`);
      fs.copyFileSync(backupPath, imgPath);
    }
  }

  const totalSaved = totalBefore - totalAfter;
  const totalPct = totalBefore > 0 ? ((totalSaved / totalBefore) * 100).toFixed(1) : "0";

  console.log(`\n${"=".repeat(60)}`);
  console.log(`Done: ${processed} images recompressed, ${webpCreated} WebP siblings created, ${errors} errors`);
  console.log(`Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)}  (-${formatBytes(totalSaved)}, ${totalPct}%)`);
  console.log(`Originals backed up to: public/.originals-backup/`);
  console.log(`${"=".repeat(60)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
