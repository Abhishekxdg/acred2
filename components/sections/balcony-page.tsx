"use client";

import { Sun, Layers, ShieldCheck, Wrench } from "lucide-react";
import { InteriorDesignPage, type DesignItem, type FeatureItem, type ProcessStep } from "./interior-design-template";

const designs: DesignItem[] = [
  {
    id: "design-1",
    title: "Compact 2BHK Reading Nook",
    subtitle: "with Cane Furniture",
    mainImage: "/balcony/image 1/Design 1.webp",
    features: [
      "Single cane-and-walnut armchair with cream linen cushion",
      "Small low solid walnut side table",
      "Wall-mounted brass coat hooks for towels and throws",
      "Five terracotta planters with mixed greenery",
      "Single warm 2700K wall sconce for evening reading",
      "Hanging cane planter with trailing pothos",
    ],
    specs: [
      { label: "Size", value: "5ft x 4ft" },
      { label: "Layout", value: "Compact apartment balcony with railing" },
      { label: "Colour Story", value: "Natural Cane + Walnut + Cream + Soft Sage" },
      { label: "Flooring", value: "Honed travertine tile" },
      { label: "Railing", value: "Slim matte black metal with horizontal slim rails" },
      { label: "Wall Finish", value: "Lime-wash plaster warm cream" },
      { label: "Plants", value: "Areca palm + monstera + trailing pothos + tulsi" },
    ],
  },
  {
    id: "design-2",
    title: "Premium Apartment: Outdoor Dining",
    subtitle: "for Four",
    mainImage: "/balcony/image 2/Design 2.webp",
    features: [
      "4-seater rectangular outdoor solid teak dining table",
      "Four cane-and-teak dining chairs with cream cotton cushions",
      "Vertical creeper trellis on side wall with jasmine vine",
      "Three woven rattan pendant lights overhead",
      "Hand-painted Athangudi tile flooring with traditional Indian pattern",
      "Built-in low planter box along railing with mixed herbs",
    ],
    specs: [
      { label: "Size", value: "10ft x 6ft" },
      { label: "Layout", value: "Premium apartment balcony with full-height railing" },
      { label: "Colour Story", value: "Warm Teak + Cream + Brushed Brass + Greenery" },
      { label: "Flooring", value: "Hand-painted Athangudi tile in muted ochre and indigo" },
      { label: "Railing", value: "Slim antique brass metal with vertical rails" },
      { label: "Wall Finish", value: "Birla Opus warm cream PU paint" },
      { label: "Plants", value: "Multiple potted plants + creeper trellis" },
    ],
  },
  {
    id: "design-3",
    title: "Indian Jhula Swing Balcony",
    subtitle: "Traditional Vibe",
    mainImage: "/balcony/image 3/Design 3.webp",
    features: [
      "Traditional carved teak Indian jhula (swing) suspended from ceiling",
      "Cream cotton mattress and bolsters on the swing",
      "Floor cushions in indigo block-printed cotton",
      "Polished Kota stone flooring",
      "Carved teak wooden railing with detail",
      "Tulsi, jasmine, mango sapling and marigolds",
    ],
    specs: [
      { label: "Size", value: "8ft x 5ft" },
      { label: "Layout", value: "Apartment balcony with traditional Indian feel" },
      { label: "Colour Story", value: "Carved Teak + Brass + Cream + Marigold Orange" },
      { label: "Flooring", value: "Polished Kota stone" },
      { label: "Railing", value: "Carved teak wooden railing" },
      { label: "Wall Finish", value: "Lime-wash plaster warm cream" },
      { label: "Plants", value: "Tulsi + jasmine + mango sapling + marigolds" },
    ],
  },
  {
    id: "design-4",
    title: "Modern Minimalist Balcony",
    subtitle: "with Sleek Lounger",
    mainImage: "/balcony/image 4/Design 4.webp",
    features: [
      "Single sleek modern outdoor lounger in charcoal weatherproof fabric",
      "Small black metal-and-pale-oak side table",
      "Sleek vertical wall planter with sculptural ZZ plant",
      "Single oversized concrete planter with potted olive tree",
      "Frameless glass railing for unobstructed view",
      "Hidden warm LED strip lighting along base of railing",
    ],
    specs: [
      { label: "Size", value: "7ft x 5ft" },
      { label: "Layout", value: "Compact modern balcony" },
      { label: "Colour Story", value: "Charcoal + Pale Oak + Cream + Sage Green" },
      { label: "Flooring", value: "Charcoal porcelain wood-look tile" },
      { label: "Railing", value: "Frameless toughened glass with stainless steel base" },
      { label: "Wall Finish", value: "Smooth charcoal PU paint" },
      { label: "Plants", value: "Snake plant + ZZ plant + small olive tree" },
    ],
  },
  {
    id: "design-5",
    title: "Vertical Garden Sanctuary",
    subtitle: "Lush Living Wall Balcony",
    mainImage: "/balcony/image 5/Design 5.webp",
    features: [
      "Floor-to-ceiling vertical living green wall on one side",
      "Single woven cane-and-rattan papasan chair with cream cushion",
      "Small carved teak side table",
      "Multiple potted plants in mixed terracotta and ceramic pots",
      "Cane hanging chair for additional seating",
      "Hidden drip irrigation system for green wall",
    ],
    specs: [
      { label: "Size", value: "8ft x 5ft" },
      { label: "Layout", value: "Apartment balcony focused on greenery as hero" },
      { label: "Colour Story", value: "Lush Green + Terracotta + Cream + Walnut" },
      { label: "Flooring", value: "Honed travertine tile" },
      { label: "Railing", value: "Slim antique brass metal with horizontal rails" },
      { label: "Wall Finish", value: "Lush vertical green wall (living wall)" },
      { label: "Plants", value: "Vertical living wall + 12+ assorted potted plants" },
    ],
  },
  {
    id: "design-6",
    title: "Coffee Bar Balcony",
    subtitle: "Compact Bistro Setup",
    mainImage: "/balcony/image 6/Design 6.webp",
    features: [
      "Wall-mounted floating walnut bar counter",
      "Two slim cane-and-walnut bar stools",
      "Small built-in shelf for coffee accessories",
      "Vertical creeper with fresh jasmine vine",
      "Two small terracotta pots with fresh herbs",
      "Single brass-and-glass pendant overhead",
    ],
    specs: [
      { label: "Size", value: "6ft x 4ft" },
      { label: "Layout", value: "Compact apartment balcony as morning coffee zone" },
      { label: "Colour Story", value: "Cream + Walnut + Brushed Brass + Indigo" },
      { label: "Flooring", value: "Hand-painted Athangudi tile in muted indigo and cream" },
      { label: "Railing", value: "Slim antique brass with vertical rails" },
      { label: "Wall Finish", value: "Lime-wash plaster cream" },
      { label: "Plants", value: "Coffee plant + small herbs + jasmine vine" },
    ],
  },
  {
    id: "design-7",
    title: "Family Outdoor Living",
    subtitle: "with Sectional Sofa",
    mainImage: "/balcony/image 7/Design 7.webp",
    features: [
      "L-shaped outdoor weatherproof sectional sofa in cream",
      "Cream marble round outdoor coffee table",
      "Two outdoor lounge chairs in cane and weatherproof fabric",
      "Built-in low planter wall along one edge",
      "Hidden warm LED strip lighting under sectional and along railing",
      "Outdoor floor lamp with woven shade",
    ],
    specs: [
      { label: "Size", value: "12ft x 8ft" },
      { label: "Layout", value: "Spacious villa-style outdoor living balcony" },
      { label: "Colour Story", value: "Soft Cream + Walnut + Soft Sage + Cream Marble" },
      { label: "Flooring", value: "Wide-format cream porcelain tile" },
      { label: "Railing", value: "Slim antique brass metal with vertical rails" },
      { label: "Wall Finish", value: "Birla Opus warm cream PU paint" },
      { label: "Plants", value: "Generous greenery throughout" },
    ],
  },
  {
    id: "design-8",
    title: "Compact Utility-Cum-Garden",
    subtitle: "Dual-Purpose Balcony",
    mainImage: "/balcony/image 8/Design 8.webp",
    features: [
      "Stainless steel washing machine with concealed plumbing",
      "Wall-mounted matte white instant geyser",
      "Vertical wall-mounted planter with kitchen herb garden",
      "Compact stainless steel utility sink with brushed-stainless tap",
      "Folding wall-mounted drying rack",
      "Small wall-mounted shelf for utility items",
    ],
    specs: [
      { label: "Size", value: "5ft x 4ft" },
      { label: "Layout", value: "Compact utility balcony with dual purpose" },
      { label: "Colour Story", value: "Cream + Stainless Steel + Greenery" },
      { label: "Flooring", value: "Anti-slip porcelain tile in warm beige" },
      { label: "Railing", value: "Slim white powder-coated metal with mosquito mesh" },
      { label: "Wall Finish", value: "Glossy off-white PU paint (utility-grade)" },
      { label: "Plants", value: "Kitchen herb garden + curry leaf tree + flowering plants" },
    ],
  },
  {
    id: "design-9",
    title: "Penthouse Terrace",
    subtitle: "Sunset View Lounge",
    mainImage: "/balcony/image 9/Design 9.webp",
    features: [
      "L-shaped outdoor sectional with cream weatherproof cushions",
      "Built-in fire pit table with travertine surround",
      "Outdoor bar counter with two stools",
      "Built-in planter beds with Mediterranean garden",
      "String lights and brass pendant lighting overhead",
      "Outdoor pizza oven or grill nook (optional luxury feature)",
    ],
    specs: [
      { label: "Size", value: "16ft x 10ft" },
      { label: "Layout", value: "Expansive penthouse terrace" },
      { label: "Colour Story", value: "Travertine + Walnut + Cream + Sage" },
      { label: "Flooring", value: "Honed travertine in large-format slabs" },
      { label: "Railing", value: "Frameless toughened glass with brass base" },
      { label: "Wall Feature", value: "Fire-pit element + outdoor bar" },
      { label: "Plants", value: "Mediterranean garden — olive tree, lavender, rosemary" },
    ],
  },
];

const features: FeatureItem[] = [
  { icon: Sun, title: "Weatherproof Materials", desc: "Travertine, Athangudi tile, marine-grade teak and weatherproof fabrics chosen for monsoon and sun." },
  { icon: Layers, title: "Vertical Garden Systems", desc: "Living walls, drip irrigation, and built-in planters that bring greenery into the smallest balconies." },
  { icon: ShieldCheck, title: "Safe Railing & Drainage", desc: "Frameless glass, carved teak, brass metal — every railing engineered for safety and proper water runoff." },
  { icon: Wrench, title: "Integrated Lighting", desc: "Hidden LED strips, brass sconces, string lights and rattan pendants paired for day-to-night usability." },
];

const processSteps: ProcessStep[] = [
  { step: "01", title: "Sun & Wind Audit", body: "We measure direct sun, monsoon spray, wind direction and views — every choice is shaped by what the balcony actually faces." },
  { step: "02", title: "Layout Design", body: "Reading nook, dining, lounge, jhula, utility-cum-garden — the brief decides the layout, not a template." },
  { step: "03", title: "3D Visualisation", body: "See the planters, swing, sectional and lighting before anything is bought or built." },
  { step: "04", title: "Material Selection", body: "Travertine, Athangudi, Kota stone, weatherproof fabrics and rust-treated metals — chosen for the climate." },
  { step: "05", title: "Build & Install", body: "Joinery, planter boxes, lighting, irrigation and railings installed by our crew with proper waterproofing." },
  { step: "06", title: "Plant & Style", body: "We hand-pick plants, set up the irrigation, and dress the balcony so it is ready to use from day one." },
];

export function BalconyPage() {
  return (
    <InteriorDesignPage
      sectionLabel="Interiors / Balcony"
      heroTitle={{ line1: "Balconies that earn", line2: "their square footage." }}
      heroDescription="ACRED turns balconies — compact 2BHK ledges to penthouse terraces — into reading nooks, dining zones, jhula corners, vertical gardens and outdoor living rooms. Weatherproof materials, smart drainage, integrated lighting and plants that actually thrive."
      heroImage="/balcony/hero.webp"
      heroImageAlt="ACRED balcony design showcase"
      intro={{
        label: "Why ACRED Balconies?",
        line1: "The most underused",
        line2: "room in your home.",
        body: "Most balconies are storage. Ours are destinations. We design around your sun direction, monsoon exposure and how you actually want to use the space — quiet morning coffee, family dinners, weekend lounging, a jhula corner or a working utility-cum-garden. Weatherproof, plant-friendly, and built to last every season.",
      }}
      designs={designs}
      galleryHeadline="Balconies we have transformed."
      designTag="Balcony"
      featuresSectionTitle="Features & Amenities"
      featuresLabel="What You Get"
      featuresHeadline="Outdoor rooms designed for Indian weather."
      features={features}
      processLabel="How It Works"
      processHeadline={{ line1: "From bare ledge", line2: "to favourite room." }}
      processSteps={processSteps}
      ctaLabel="Start your balcony"
      ctaHeadline="Ready to claim back your balcony?"
      ctaBody="Book a free consultation. We will visit, audit the sun and wind, understand how you want to use the space, and deliver a 3D balcony design with a transparent quote within 48 hours."
    />
  );
}
