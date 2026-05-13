"use client";

import { Sparkles, Layers, ShieldCheck, Wrench } from "lucide-react";
import { InteriorDesignPage, type DesignItem, type FeatureItem, type ProcessStep } from "./interior-design-template";

const designs: DesignItem[] = [
  {
    id: "design-1",
    title: "Boy's Bedroom: Navy Blue & Walnut",
    subtitle: "with Brass Constellations",
    mainImage: "/kids-bedroom/image 1/Design 1.webp",
    features: [
      "4-shutter sliding wardrobe in matte navy with antique brass slim handles",
      "Hydraulic-lift storage under the bed",
      "Open walnut bookshelf with three shelves above headboard",
      "Built-in study desk in walnut veneer with single drawer",
      "Floating walnut bedside drawer",
    ],
    specs: [
      { label: "Size", value: "12ft x 10ft" },
      { label: "Layout", value: "Single bed against long wall, study desk under window" },
      { label: "Colour Story", value: "Deep Navy + Warm Walnut + Cream + Brass" },
      { label: "Wardrobe Finish", value: "Matte navy laminate, push-to-open" },
      { label: "Headboard Wall", value: "Cream PU with hand-painted brass constellations" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Bed Size", value: "Single (3.5ft x 6.5ft)" },
      { label: "Bunk Bed", value: "No" },
    ],
  },
  {
    id: "design-2",
    title: "Girl's Bedroom: Soft Pink & Cream",
    subtitle: "with Cane Headboard",
    mainImage: "/kids-bedroom/image 2/Design 2.webp",
    features: [
      "4-shutter sliding wardrobe in matte cream PU with cane inlay on three shutters",
      "Hydraulic-lift storage under bed",
      "Bedside drawer in walnut with cane drawer front",
      "Built-in study nook with cane-back chair",
      "Open walnut bookshelf above bed",
    ],
    specs: [
      { label: "Size", value: "12ft x 10ft" },
      { label: "Layout", value: "Single bed centred on long wall" },
      { label: "Colour Story", value: "Soft Blush Pink + Cream + Natural Cane + Walnut" },
      { label: "Wardrobe Finish", value: "Matte cream PU with cane inlay panels" },
      { label: "Headboard", value: "Round cane archway in walnut frame" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Bed Size", value: "Single (3.5ft x 6.5ft)" },
      { label: "Bunk Bed", value: "No" },
    ],
  },
  {
    id: "design-3",
    title: "Twin Boys' Bunk Bedroom",
    subtitle: "Sage Green & Walnut",
    mainImage: "/kids-bedroom/image 3/Design 3.webp",
    features: [
      "Solid walnut bunk bed with built-in safety rail and integrated ladder",
      "Side-mounted reading lights on each bunk with brass swing arms",
      "4-shutter sliding wardrobe in matte sage green laminate",
      "Built-in shared walnut study desk under window with two integrated drawers",
      "Two cane-back chairs at study desk",
      "Open walnut wall-mounted bookshelves between wardrobe and bunk",
    ],
    specs: [
      { label: "Size", value: "12ft x 11ft" },
      { label: "Layout", value: "Bunk bed against long wall, shared study desk under window" },
      { label: "Colour Story", value: "Soft Sage Green + Warm Walnut + Cream" },
      { label: "Wardrobe Finish", value: "Matte sage green laminate" },
      { label: "Bed Type", value: "Solid walnut bunk bed with side ladder & safety rail" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Bed Size", value: "Two singles (3.5ft x 6.5ft each)" },
      { label: "Bunk Bed", value: "Yes" },
    ],
  },
  {
    id: "design-4",
    title: "Compact 2BHK Boy's Bedroom",
    subtitle: "Smoky Blue & Walnut",
    mainImage: "/kids-bedroom/image 4/Design 4.webp",
    features: [
      "3-shutter sliding wardrobe in matte smoky blue laminate",
      "Drawer-storage bed with three deep drawers along one side",
      "Floating walnut bedside drawer",
      "Compact built-in study desk integrated at end of wardrobe",
      "Open walnut wall-mounted shelf above headboard",
    ],
    specs: [
      { label: "Size", value: "11ft x 9ft" },
      { label: "Layout", value: "Single bed against long wall, compact study desk" },
      { label: "Colour Story", value: "Smoky Blue + Warm Walnut + Cream" },
      { label: "Wardrobe Finish", value: "Matte smoky blue laminate" },
      { label: "Headboard Wall", value: "Vertical fluted walnut accent panel behind bed" },
      { label: "Flooring", value: "Vitrified tile in warm beige" },
      { label: "Bed Size", value: "Single with drawer storage (3.5ft x 6.5ft)" },
      { label: "Bunk Bed", value: "No" },
    ],
  },
  {
    id: "design-5",
    title: "Toddler's Bedroom: Cream & Olive",
    subtitle: "with Mountain Mural",
    mainImage: "/kids-bedroom/image 5/Design 5.webp",
    features: [
      "3-shutter sliding wardrobe in matte cream PU",
      "Hydraulic-lift storage under bed",
      "Floating walnut bedside drawer",
      "Low-height open walnut play-storage with three open cubbies",
      "Cane reading nook chair with cream cotton cushion",
    ],
    specs: [
      { label: "Size", value: "11ft x 10ft" },
      { label: "Layout", value: "Single bed against long wall, low-height storage and play zone" },
      { label: "Colour Story", value: "Soft Cream + Soft Olive + Cane" },
      { label: "Wardrobe Finish", value: "Matte cream PU" },
      { label: "Headboard Wall", value: "Hand-painted watercolour mountain mural in muted olive and cream" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Bed Size", value: "Single (3.5ft x 6.5ft)" },
      { label: "Bunk Bed", value: "No" },
    ],
  },
  {
    id: "design-6",
    title: 'Boy\'s Bedroom: Sanderson "Mickey in the Clouds"',
    subtitle: "Bonbon Blue Wallpaper Feature",
    mainImage: "/kids-bedroom/image 6/Design 6.webp",
    features: [
      "4-shutter sliding wardrobe in matte cream PU with handle-less push-to-open",
      "Hydraulic-lift storage under bed",
      "Floating walnut bedside drawer",
      "Open walnut bookshelf above bed",
      "Built-in study desk under window",
    ],
    specs: [
      { label: "Size", value: "12ft x 10ft" },
      { label: "Layout", value: "Single bed against feature wall, study desk under window" },
      { label: "Wallpaper", value: 'Sanderson "Mickey in the Clouds" — Bonbon Blue with cotton candy clouds' },
      { label: "Wardrobe Finish", value: "Matte cream PU" },
      { label: "Flooring", value: "Wide-plank pale oak" },
      { label: "Bed Size", value: "Single (3.5ft x 6.5ft)" },
      { label: "Bunk Bed", value: "No" },
    ],
  },
  {
    id: "design-7",
    title: 'Girl\'s Bedroom: Sanderson "Bambi"',
    subtitle: "Whipped Cream Wallpaper Feature",
    mainImage: "/kids-bedroom/image 7/Design 7.webp",
    features: [
      "4-shutter sliding wardrobe in matte sage green PU with cane inlay panels",
      "Hydraulic-lift storage under bed",
      "Bedside drawer in walnut with cane drawer front",
      "Built-in study nook with cane chair",
      "Open walnut bookshelf above bed",
    ],
    specs: [
      { label: "Size", value: "12ft x 10ft" },
      { label: "Layout", value: "Single bed against feature wall, study desk under window" },
      { label: "Wallpaper", value: 'Sanderson "Bambi" — Whipped Cream with woodland deer, rabbits, butterflies' },
      { label: "Wardrobe Finish", value: "Matte sage green PU with cane inlay" },
      { label: "Flooring", value: "Wide-plank pale oak" },
      { label: "Bed Size", value: "Single (3.5ft x 6.5ft)" },
      { label: "Bunk Bed", value: "No" },
    ],
  },
  {
    id: "design-8",
    title: 'Twin Bunk Bedroom: "Hundred Acre Wood"',
    subtitle: "Sanderson Pooh Wallpaper",
    mainImage: "/kids-bedroom/image 8/Design 8.webp",
    features: [
      "Solid walnut bunk bed with built-in safety rail and integrated side ladder",
      "Two brass swing-arm reading lights at each bunk",
      "4-shutter sliding wardrobe in matte botanical green laminate",
      "Built-in shared walnut study desk under window with two drawers",
      "Two cane-back chairs at study desk",
      "Open walnut shelves on the wallpaper feature wall",
    ],
    specs: [
      { label: "Size", value: "13ft x 11ft" },
      { label: "Layout", value: "Bunk bed against perpendicular wall, shared study desk under window" },
      { label: "Wallpaper", value: 'Sanderson "Hundred Acre Wood" — Pooh, Piglet, Tigger, Eeyore' },
      { label: "Wardrobe Finish", value: "Matte botanical green laminate" },
      { label: "Bed Type", value: "Solid walnut bunk bed with side ladder" },
      { label: "Flooring", value: "Wide-plank pale oak" },
      { label: "Bed Size", value: "Two singles (3.5ft x 6.5ft each)" },
      { label: "Bunk Bed", value: "Yes" },
    ],
  },
  {
    id: "design-9",
    title: 'Boy\'s Bedroom: Sanderson "Peter Pan"',
    subtitle: "Midnight Blue Mural Feature",
    mainImage: "/kids-bedroom/image 9/Design 9.webp",
    features: [
      "4-shutter sliding wardrobe in matte deep navy laminate",
      "Hydraulic-lift storage under bed",
      "Floating walnut bedside drawer",
      "Built-in study desk under window",
      "Open walnut shelves on perpendicular wall",
    ],
    specs: [
      { label: "Size", value: "12ft x 11ft" },
      { label: "Layout", value: "Single bed against feature mural wall, study desk perpendicular" },
      { label: "Wallpaper", value: 'Sanderson "Peter Pan" — Midnight Blue night sky over moonlit London' },
      { label: "Wardrobe Finish", value: "Matte deep navy laminate with brass handles" },
      { label: "Flooring", value: "Wide-plank dark engineered oak" },
      { label: "Bed Size", value: "Single (3.5ft x 6.5ft)" },
      { label: "Bunk Bed", value: "No" },
    ],
  },
  {
    id: "design-10",
    title: 'Twin Bunk Bedroom: "101 Dalmatians"',
    subtitle: "Sanderson Whipped Cream Wallpaper",
    mainImage: "/kids-bedroom/image 10/Design 10.webp",
    features: [
      "Solid walnut bunk bed with built-in safety rail and integrated side ladder",
      "Two brass swing-arm reading lights at each bunk",
      "4-shutter sliding wardrobe in matte cream PU",
      "Built-in shared walnut study desk under window",
      "Open walnut shelves on the wallpaper feature wall",
    ],
    specs: [
      { label: "Size", value: "13ft x 11ft" },
      { label: "Layout", value: "Bunk bed against perpendicular wall, shared study desk under window" },
      { label: "Wallpaper", value: 'Sanderson "101 Dalmatians" — vintage park scenes with walkers and dogs' },
      { label: "Wardrobe Finish", value: "Matte cream PU with brass handles" },
      { label: "Bed Type", value: "Solid walnut bunk bed with side ladder" },
      { label: "Flooring", value: "Wide-plank pale oak" },
      { label: "Bed Size", value: "Two singles (3.5ft x 6.5ft each)" },
      { label: "Bunk Bed", value: "Yes" },
    ],
  },
];

const features: FeatureItem[] = [
  { icon: Sparkles, title: "Imagination Built-In", desc: "Murals, themed wallpapers and bunk beds that turn the room into a story your child loves to live in." },
  { icon: Layers, title: "Smart Storage", desc: "Wardrobes, hydraulic beds and toy cubbies sized for actual clothes, books and toys — not generic shells." },
  { icon: ShieldCheck, title: "Child-Safe Materials", desc: "Low-VOC paints, rounded edges, sturdy ladders and fall-safe rails on every bunk and study desk." },
  { icon: Wrench, title: "Grow-With-Them Design", desc: "Modular study units and adjustable shelves built to evolve from toddler to teenager." },
];

const processSteps: ProcessStep[] = [
  { step: "01", title: "Family Consultation", body: "We sit with parents and kids — understand age, hobbies, favourite colours and how the room is actually used." },
  { step: "02", title: "Theme & Layout", body: "Single, twin or bunk; study nook position; play zone; storage volume — drawn together before any joinery starts." },
  { step: "03", title: "3D Walkthrough", body: "Walk the room virtually with wallpaper, paint and bedding swatches — kids approve the final look themselves." },
  { step: "04", title: "Material Selection", body: "Pick from curated child-safe laminates, paints, fabrics and Sanderson-grade wallpapers from our studio collection." },
  { step: "05", title: "Factory Build", body: "Wardrobes, study units and bunk frames are CNC-cut and edge-banded in our quality-controlled factory." },
  { step: "06", title: "Install & Style", body: "Crew installs everything, dresses the bed, hangs the art and leaves the room ready for bedtime stories." },
];

export function KidsBedroomPage() {
  return (
    <InteriorDesignPage
      sectionLabel="Interiors / Kids Bedrooms"
      heroTitle={{ line1: "Bedrooms built", line2: "around their imagination." }}
      heroDescription="ACRED designs kids' bedrooms that grow with the child — themed wallpapers, bunk beds with safety rails, study nooks and storage that fits the toys they actually own. Safe materials, smart layouts, and finishes that survive everyday play."
      heroImage="/kids-bedroom/hero.webp"
      heroImageAlt="ACRED kids bedroom showcase"
      intro={{
        label: "Why ACRED Kids Bedrooms?",
        line1: "Magical to live in,",
        line2: "easy to keep tidy.",
        body: "Every kids bedroom we deliver is planned around the child today — and the teenager they will become. From hand-painted murals and Sanderson wallpapers to hydraulic-lift beds, study desks with cable management and child-height open cubbies, every detail is built to be used, not just admired.",
      }}
      designs={designs}
      galleryHeadline="Kids bedrooms we have created."
      designTag="Kids Bedroom"
      featuresSectionTitle="Storage & Features"
      featuresLabel="What You Get"
      featuresHeadline="Designed for the way kids actually live."
      features={features}
      processLabel="How It Works"
      processHeadline={{ line1: "From first sketch", line2: "to bedtime story." }}
      processSteps={processSteps}
      ctaLabel="Start your kids bedroom"
      ctaHeadline="Ready to design a room they will love?"
      ctaBody="Book a free consultation. We will visit, measure, understand your child, and deliver a 3D design with a transparent quote within 48 hours."
      ctaPrimary={{ label: "Book free consultation", href: "/contact" }}
    />
  );
}
