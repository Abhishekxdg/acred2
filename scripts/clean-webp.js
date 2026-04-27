#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

function findWebps(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== ".originals-backup") {
      findWebps(fullPath, files);
    } else if (entry.isFile() && fullPath.endsWith(".webp")) {
      files.push(fullPath);
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

let kept = 0;
let removed = 0;
let totalSaved = 0;

for (const webpPath of findWebps(PUBLIC_DIR)) {
  const jpegPath = webpPath.replace(/\.webp$/, ".jpeg");
  const jpgPath = webpPath.replace(/\.webp$/, ".jpg");
  const originalPath = fs.existsSync(jpegPath) ? jpegPath : jpgPath;

  if (!fs.existsSync(originalPath)) continue;

  const origSize = fs.statSync(originalPath).size;
  const webpSize = fs.statSync(webpPath).size;
  const saved = origSize - webpSize;

  if (saved > 1024) {
    kept++;
    totalSaved += saved;
    console.log(`  KEEP: ${path.relative(PUBLIC_DIR, webpPath)}  (-${formatBytes(saved)})`);
  } else {
    fs.unlinkSync(webpPath);
    removed++;
    console.log(`  REMOVE: ${path.relative(PUBLIC_DIR, webpPath)}  (+${formatBytes(-saved)})`);
  }
}

console.log(`\nDone: ${kept} WebP files kept, ${removed} removed`);
console.log(`Total saved if using WebP versions: ${formatBytes(totalSaved)}`);
