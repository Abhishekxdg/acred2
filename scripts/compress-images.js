#!/usr/bin/env node
/**
 * Lossless image compression script for /public folder.
 * - JPEGs: optimized with jpegtran (Huffman optimization, progressive, metadata stripped)
 * - PNGs: optimized with optipng
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const BACKUP_DIR = path.join(__dirname, "..", "public", ".originals-backup");

function findImages(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== ".originals-backup") {
      findImages(fullPath, files);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
        files.push(fullPath);
      }
    }
  }
  return files;
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function main() {
  console.log("Scanning public folder for images...\n");
  const images = findImages(PUBLIC_DIR);

  if (images.length === 0) {
    console.log("No JPEG/PNG images found.");
    process.exit(0);
  }

  // Create backup directory
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }

  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;
  let errors = 0;

  for (const imgPath of images) {
    const relPath = path.relative(PUBLIC_DIR, imgPath);
    const ext = path.extname(imgPath).toLowerCase();
    const beforeSize = fs.statSync(imgPath).size;

    // Backup original
    const backupPath = path.join(BACKUP_DIR, relPath);
    const backupDir = path.dirname(backupPath);
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    fs.copyFileSync(imgPath, backupPath);

    try {
      if (ext === ".png") {
        // Lossless PNG optimization with optipng
        execSync(`optipng -o2 -strip all "${imgPath}"`, { stdio: "pipe" });
      } else {
        // Lossless JPEG optimization with jpegtran
        const tmpFile = imgPath + ".tmp";
        execSync(
          `jpegtran -optimize -progressive -copy none -outfile "${tmpFile}" "${imgPath}"`,
          { stdio: "pipe" }
        );
        fs.renameSync(tmpFile, imgPath);
      }

      const afterSize = fs.statSync(imgPath).size;
      const saved = beforeSize - afterSize;
      const pct = ((saved / beforeSize) * 100).toFixed(1);
      totalBefore += beforeSize;
      totalAfter += afterSize;
      processed++;

      const status = saved >= 0 ? `-${formatBytes(saved)} (${pct}%)` : `+${formatBytes(-saved)}`;
      console.log(`  ${relPath}: ${formatBytes(beforeSize)} → ${formatBytes(afterSize)}  ${status}`);
    } catch (err) {
      errors++;
      console.error(`  ERROR: ${relPath} — ${err.message}`);
      // Restore from backup on error
      fs.copyFileSync(backupPath, imgPath);
    }
  }

  const totalSaved = totalBefore - totalAfter;
  const totalPct = ((totalSaved / totalBefore) * 100).toFixed(1);

  console.log(`\n${"=".repeat(60)}`);
  console.log(`Done: ${processed} images processed, ${errors} errors`);
  console.log(`Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)}  (-${formatBytes(totalSaved)}, ${totalPct}%)`);
  console.log(`\nOriginals backed up to: public/.originals-backup/`);
  console.log(`${"=".repeat(60)}`);
}

main();
