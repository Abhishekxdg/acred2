#!/usr/bin/env node
/**
 * Create WebP versions of all JPEGs in /public for better compression.
 * Keeps originals. Quality 90 = visually identical, typically 15-25% smaller.
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

function findJpegs(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== ".originals-backup") {
      findJpegs(fullPath, files);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === ".jpg" || ext === ".jpeg") {
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
  console.log("Converting JPEGs to WebP (quality 90)...\n");
  const jpegs = findJpegs(PUBLIC_DIR);

  if (jpegs.length === 0) {
    console.log("No JPEGs found.");
    process.exit(0);
  }

  let totalJpeg = 0;
  let totalWebp = 0;
  let processed = 0;
  let skipped = 0;
  let errors = 0;

  for (const jpegPath of jpegs) {
    const relPath = path.relative(PUBLIC_DIR, jpegPath);
    const webpPath = jpegPath.replace(/\.jpe?g$/i, ".webp");

    if (fs.existsSync(webpPath)) {
      console.log(`  SKIP: ${relPath} — WebP already exists`);
      skipped++;
      continue;
    }

    const jpegSize = fs.statSync(jpegPath).size;

    try {
      execSync(`cwebp -q 90 -mt "${jpegPath}" -o "${webpPath}"`, { stdio: "pipe" });
      const webpSize = fs.statSync(webpPath).size;
      const saved = jpegSize - webpSize;
      const pct = ((saved / jpegSize) * 100).toFixed(1);
      totalJpeg += jpegSize;
      totalWebp += webpSize;
      processed++;
      console.log(`  ${relPath}: ${formatBytes(jpegSize)} → ${formatBytes(webpSize)}  (-${formatBytes(saved)}, ${pct}%)`);
    } catch (err) {
      errors++;
      console.error(`  ERROR: ${relPath} — ${err.message}`);
    }
  }

  const totalSaved = totalJpeg - totalWebp;
  const totalPct = totalJpeg > 0 ? ((totalSaved / totalJpeg) * 100).toFixed(1) : "0";

  console.log(`\n${"=".repeat(60)}`);
  console.log(`Done: ${processed} converted, ${skipped} skipped, ${errors} errors`);
  console.log(`Total: ${formatBytes(totalJpeg)} → ${formatBytes(totalWebp)}  (-${formatBytes(totalSaved)}, ${totalPct}%)`);
  console.log(`\nTo use: update image references from .jpg/.jpeg to .webp`);
  console.log(`Example:  src="/modular/Modular 1.jpeg"  →  src="/modular/Modular 1.webp"`);
  console.log(`${"=".repeat(60)}`);
}

main();
