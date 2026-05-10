import pytesseract
from PIL import Image
import os
import json

base = "/Users/abhishek/Downloads/acred/public/modular"

# Design folder mapping
folders = [
    ("DESIGN 1", "design-1", "KITECHEN DESIGN 1.jpeg", "Screenshot 2026-05-03 104848.png", ["SPEC.png"]),
    ("DESIGN 2", "design-2", "design 2.jpeg", "DES.png", ["SPEC.png"]),
    ("DESIGN 3", "design-3", "DESIGN3.jpeg", "FEAT.png", ["SPEC.png"]),
    ("DESIGN 4", "design-4", "design 4.jpeg", "STORAGE.png", ["SPEC.png"]),
    ("DESIGN 5", "design-5", "DESIGN 5.jpeg", "FEAT.png", ["SPEC.png"]),
    ("DESIGN 6", "design-6", "DESIGN 6.jpeg", "STORGAE.png", ["SPEC.png"]),
    ("DESIGN 7", "design-7", "DESIGN 7.jpeg", "STORAGE.png", ["Screenshot 2026-05-03 115258.png"]),
    ("DESIGN 8", "design-8", "design 8.jpeg", "storage.png", ["DESIGN 9 CLAUDE SPEC.png"]),
    ("DESIGN 9", "design-9", "design 10.jpeg", "DESIGN.png", ["SPEC.png", "DEISGN 10.jpeg"]),
    ("DESIGN 10", "design-10", None, "STOR.png", ["SPEC.png"]),  # uses parent folder image
    ("DESIGN11", "design-11", "design 11.jpeg", "DESIGN.png", ["SPEC.png"]),
    ("design 12", "design-12", "design 12.jpeg", "Screenshot 2026-05-03 124243.png", ["Screenshot 2026-05-03 124152.png"]),
    ("DESIGN 13", "design-13", "DESIGN 13.jpeg", "STORAGE.png", ["SPEC.png"]),
    ("DESIGN 14", "design-14", "DESIGN 14.jpeg", "Screenshot 2026-05-03 131711.png", ["Screenshot 2026-05-03 131628.png", "intro-pic (1).jpg"]),
]

results = {}

for folder, design_id, main_img, text_img, detail_imgs in folders:
    folder_path = os.path.join(base, folder)
    print(f"\n=== {design_id} ===")

    # OCR text image
    text_path = os.path.join(folder_path, text_img)
    if os.path.exists(text_path):
        img = Image.open(text_path)
        text = pytesseract.image_to_string(img)
        print(f"\n--- TEXT IMAGE ({text_img}) ---")
        print(text)
    else:
        print(f"MISSING: {text_path}")

    # OCR detail images
    for detail in detail_imgs:
        detail_path = os.path.join(folder_path, detail)
        if os.path.exists(detail_path):
            img = Image.open(detail_path)
            text = pytesseract.image_to_string(img)
            print(f"\n--- DETAIL ({detail}) ---")
            print(text)
        else:
            print(f"MISSING: {detail_path}")

