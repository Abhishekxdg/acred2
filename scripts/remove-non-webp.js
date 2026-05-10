#!/usr/bin/env node
/**
 * Remove JPEG/PNG images from /public that have a WebP sibling.
 * Keeps files without a matching .webp counterpart.
 */

const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

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
  const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

let removed = 0;
let kept = 0;
let totalSaved = 0;
let totalKeptSize = 0;

for (const imgPath of findImages(PUBLIC_DIR)) {
  const ext = path.extname(imgPath).toLowerCase();
  const basePath = imgPath.slice(0, -ext.length);
  const webpPath = basePath + ".webp";

  const relPath = path.relative(PUBLIC_DIR, imgPath);

  if (fs.existsSync(webpPath)) {
    const size = fs.statSync(imgPath).size;
    fs.unlinkSync(imgPath);
    totalSaved += size;
    removed++;
    console.log(`  REMOVE: ${relPath} (${formatBytes(size)})`);
  } else {
    const size = fs.statSync(imgPath).size;
    totalKeptSize += size;
    kept++;
    console.log(`  KEEP (no WebP sibling): ${relPath}`);
  }
}

console.log(`\n${"=".repeat(60)}`);
console.log(`Done: ${removed} images removed, ${kept} images kept (no WebP sibling)`);
console.log(`Freed: ${formatBytes(totalSaved)}`);
console.log(`Kept: ${formatBytes(totalKeptSize)}`);
console.log(`${"=".repeat(60)}`);
