#!/usr/bin/env python3
"""
Process /Users/abhishek/Downloads/New images / contents:
  - Convert JPEGs to WebP into /public/<slug>/image N/Design N.webp
  - Pick design 1 as hero.webp
  - OCR all PNGs (desc + spec) into scripts/new_images_ocr.txt
"""
import os
import re
import shutil
import subprocess
from pathlib import Path
from PIL import Image
import pytesseract

SRC = Path("/Users/abhishek/Downloads/New images ")
PUB = Path("/Users/abhishek/Downloads/acred/public")
OUT_OCR = Path("/Users/abhishek/Downloads/acred/scripts/new_images_ocr.txt")

# (source_folder, public_slug, replace_existing)
JOBS = [
    ("KIDS BEDROOM", "kids-bedroom", True),
    ("balcony", "balcony", True),
    ("dining", "dining", True),
    ("wall panels", "wall-panels", True),
    ("wardrobes", "wardrobe", True),
]


def folder_index(name: str) -> int:
    """Sort key for folder names like 'design 1', 'design2', 'image 10'."""
    m = re.search(r"(\d+)", name)
    if not m:
        return 0
    base = 0 if name.lower().startswith("design") else 100
    return base + int(m.group(1))


def main():
    out_lines = []
    for src_name, slug, replace in JOBS:
        src_folder = SRC / src_name
        pub_folder = PUB / slug
        if replace and pub_folder.exists():
            # back up hero only if exists, then clear image subfolders
            for sub in pub_folder.iterdir():
                if sub.is_dir():
                    shutil.rmtree(sub)
        pub_folder.mkdir(parents=True, exist_ok=True)

        out_lines.append(f"\n{'='*70}\n# {slug.upper()}\n{'='*70}")

        subdirs = sorted(
            [d for d in src_folder.iterdir() if d.is_dir()],
            key=lambda d: folder_index(d.name),
        )
        for i, sub in enumerate(subdirs, start=1):
            dest_sub = pub_folder / f"image {i}"
            dest_sub.mkdir(exist_ok=True)
            jpegs = sorted([f for f in sub.iterdir() if f.suffix.lower() in (".jpg", ".jpeg")])
            pngs = sorted([f for f in sub.iterdir() if f.suffix.lower() == ".png"])

            # Convert main JPEG -> Design N.webp
            webp_path = None
            if jpegs:
                webp_path = dest_sub / f"Design {i}.webp"
                subprocess.run(
                    ["cwebp", "-q", "85", "-mt", str(jpegs[0]), "-o", str(webp_path)],
                    check=True,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL,
                )

            # Use design 1 as hero
            if i == 1 and webp_path:
                hero = pub_folder / "hero.webp"
                shutil.copy(webp_path, hero)

            out_lines.append(f"\n## image {i}  ({sub.name})")
            out_lines.append(f"main: /{slug}/image {i}/Design {i}.webp")

            for png in pngs:
                kind = "spec" if "spec" in png.name.lower() or (pngs.index(png) == 1 and len(pngs) >= 2) else "desc"
                # OCR
                try:
                    text = pytesseract.image_to_string(Image.open(png))
                except Exception as e:
                    text = f"[OCR ERROR: {e}]"
                out_lines.append(f"\n--- {kind} ({png.name}) ---")
                out_lines.append(text.strip())

    OUT_OCR.write_text("\n".join(out_lines))
    print(f"Done. OCR -> {OUT_OCR}")


if __name__ == "__main__":
    main()
