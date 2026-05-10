import pytesseract
from PIL import Image
import os

base = "/Users/abhishek/Downloads/acred/public/wardrobe"
output_path = "/Users/abhishek/Downloads/acred/scripts/wardrobe_ocr_output.txt"

out_lines = []

for folder in sorted(os.listdir(base)):
    folder_path = os.path.join(base, folder)
    if not os.path.isdir(folder_path):
        continue

    webps = sorted([f for f in os.listdir(folder_path) if f.endswith('.webp')])
    pngs = sorted([f for f in os.listdir(folder_path) if f.endswith('.png')])

    if not webps or not pngs:
        continue

    out_lines.append(f"\n=== {folder} ===")
    out_lines.append(f"Main image: {webps[0]}")

    for png in pngs:
        png_path = os.path.join(folder_path, png)
        try:
            img = Image.open(png_path)
            text = pytesseract.image_to_string(img)
            out_lines.append(f"\n--- {png} ---")
            out_lines.append(text)
        except Exception as e:
            out_lines.append(f"ERROR reading {png}: {e}")

out_lines.append("\n\n=== TOP-LEVEL IMAGES (no subfolder content) ===")
for f in sorted(os.listdir(base)):
    if f.endswith('.webp') and os.path.isfile(os.path.join(base, f)):
        out_lines.append(f"Top-level: {f}")

with open(output_path, "w") as f:
    f.write("\n".join(out_lines))

print(f"Output written to {output_path}")
