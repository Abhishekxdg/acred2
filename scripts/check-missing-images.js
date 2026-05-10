#!/usr/bin/env node
const fs = require("fs");
const { execSync } = require("child_process");

const output = execSync(
  "rg -o '\"/[^\"]+\\.(webp|jpeg|jpg|png)\"' app components lib -g '*.tsx' -g '*.ts' -g '*.css'",
  { cwd: "/Users/abhishek/Downloads/acred", encoding: "utf-8" }
);

const lines = output.split("\n").filter(Boolean);
const refs = new Set();

for (const line of lines) {
  const match = line.match(/"(\/[^"]+\.(webp|jpeg|jpg|png))"/);
  if (match) refs.add(match[1]);
}

let missing = 0;
for (const ref of [...refs].sort()) {
  if (ref.startsWith("http")) continue;
  const path = "/Users/abhishek/Downloads/acred/public" + ref;
  if (!fs.existsSync(path)) {
    console.log(`MISSING: ${ref}`);
    missing++;
  }
}

if (missing === 0) console.log("All referenced images exist.");
