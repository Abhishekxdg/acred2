"use client";

import { Utensils, Layers, ShieldCheck, Wrench } from "lucide-react";
import { InteriorDesignPage, type DesignItem, type FeatureItem, type ProcessStep } from "./interior-design-template";

const designs: DesignItem[] = [
  {
    id: "design-1",
    title: "Modern Indian: Walnut Table & Cane Chairs",
    subtitle: "with Brass Pendants",
    mainImage: "/dining/image 1/Design 1.webp",
    features: [
      "6-seater rectangular dining table in solid warm walnut veneer",
      "Six cane-back chairs in solid walnut with cream cotton cushions",
      "Storage sideboard with three cabinet doors and three drawers",
      "Open display shelf above sideboard for decorative objects",
      "Built-in wine storage drawer in sideboard",
    ],
    specs: [
      { label: "Size", value: "12ft x 10ft" },
      { label: "Layout", value: "Open-plan dining adjacent to living room" },
      { label: "Colour Story", value: "Warm Walnut + Cream + Brushed Brass" },
      { label: "Table", value: "6-seater solid walnut veneer with brass-tipped legs" },
      { label: "Chairs", value: "Six cane-back solid walnut chairs with cream cushions" },
      { label: "Lighting", value: "Three slim brushed-brass cylindrical pendants" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Wall Feature", value: "Display unit/sideboard for crockery storage" },
    ],
  },
  {
    id: "design-2",
    title: "Premium Marble & Brass",
    subtitle: "Tufted Velvet Chairs",
    mainImage: "/dining/image 2/Design 2.webp",
    features: [
      "8-seater rectangular dining table with book-matched Calacatta marble top",
      "Eight tufted charcoal velvet upholstered dining chairs with slim brushed-brass legs",
      "Built-in floor-to-ceiling glass-fronted display cabinet for crockery and barware",
      "Concealed wine storage drawer",
      "Built-in bar nook integrated into display cabinet",
    ],
    specs: [
      { label: "Size", value: "14ft x 12ft" },
      { label: "Layout", value: "Formal dining room" },
      { label: "Colour Story", value: "Calacatta Marble + Brushed Brass + Charcoal Velvet" },
      { label: "Table", value: "8-seater Calacatta marble-top with brass base" },
      { label: "Chairs", value: "Eight charcoal velvet tufted chairs with brass legs" },
      { label: "Lighting", value: "Statement brass and crystal chandelier" },
      { label: "Flooring", value: "Honed Italian Calacatta marble" },
      { label: "Wall Feature", value: "Built-in glass-fronted display cabinet" },
    ],
  },
  {
    id: "design-3",
    title: "Compact 2BHK Round Dining",
    subtitle: "for Four",
    mainImage: "/dining/image 3/Design 3.webp",
    features: [
      "4-seater round dining table in solid walnut with single pedestal base",
      "Four cane-back chairs with cream cotton cushions",
      "Wall-mounted slim storage cabinet with two doors",
      "Open shelves above for daily-use items",
      "Single rattan pendant overhead",
    ],
    specs: [
      { label: "Size", value: "8ft x 8ft" },
      { label: "Layout", value: "Compact dining nook" },
      { label: "Colour Story", value: "Soft Cream + Warm Walnut + Cane" },
      { label: "Table", value: "4-seater round solid walnut" },
      { label: "Chairs", value: "Four cane-back chairs" },
      { label: "Lighting", value: "Single woven rattan pendant" },
      { label: "Flooring", value: "Vitrified tile in warm beige" },
      { label: "Wall Feature", value: "Compact wall-mounted shelf-and-cabinet unit" },
    ],
  },
  {
    id: "design-4",
    title: "Indo-Contemporary Dining",
    subtitle: "with Athangudi Tile Backdrop",
    mainImage: "/dining/image 4/Design 4.webp",
    features: [
      "6-seater rectangular dining table in solid carved teak",
      "Six dining chairs in solid teak with carved backs and woven cane seats",
      "Carved teak sideboard for crockery and serving ware",
      "Hand-painted Athangudi tile backdrop on one feature wall",
      "Open carved teak shelf above sideboard",
    ],
    specs: [
      { label: "Size", value: "12ft x 10ft" },
      { label: "Layout", value: "Open-plan dining with kitchen entry on one side" },
      { label: "Colour Story", value: "Athangudi Tile + Warm Teak + Cream + Polished Brass" },
      { label: "Table", value: "6-seater solid teak" },
      { label: "Chairs", value: "Six carved teak chairs with woven cane seats" },
      { label: "Lighting", value: "Three hand-painted ceramic-shade pendants" },
      { label: "Flooring", value: "Honed Kota stone" },
      { label: "Wall Feature", value: "Hand-painted Athangudi tile feature wall" },
    ],
  },
  {
    id: "design-5",
    title: "Open-Plan Dining-Living",
    subtitle: "Marble & Cane Mix",
    mainImage: "/dining/image 5/Design 5.webp",
    features: [
      "6-seater oval dining table with cream marble top and brushed-brass base",
      "Six rattan-and-walnut dining chairs with cream cotton cushions",
      "Floating walnut sideboard with brass cup-pulls",
      "Open walnut shelves above sideboard",
      "Sage-green painted accent wall with framed art",
    ],
    specs: [
      { label: "Size", value: "13ft x 11ft (dining zone in open-plan)" },
      { label: "Layout", value: "Open-plan dining flowing into living room" },
      { label: "Colour Story", value: "Cream Marble + Walnut + Cane + Soft Sage" },
      { label: "Table", value: "6-seater oval marble-top with brass base" },
      { label: "Chairs", value: "Six rattan-and-walnut dining chairs" },
      { label: "Lighting", value: "Linear brushed-brass pendant with three globes" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Wall Feature", value: "Sage-green PU painted accent wall with art" },
    ],
  },
  {
    id: "design-6",
    title: "Moody Modern Dining",
    subtitle: "Charcoal Walls + Walnut & Brass",
    mainImage: "/dining/image 6/Design 6.webp",
    features: [
      "6-seater rectangular dining table in solid walnut with thin brass edge trim",
      "Six cognac leather upholstered dining chairs with slim brushed-brass legs",
      "Built-in walnut sideboard with antique brass handles",
      "Open shelves above sideboard for displays",
      "Statement art gallery on charcoal feature wall",
    ],
    specs: [
      { label: "Size", value: "12ft x 10ft" },
      { label: "Layout", value: "Formal dining with painted accent walls" },
      { label: "Colour Story", value: "Deep Charcoal + Walnut + Cognac Leather + Antique Brass" },
      { label: "Table", value: "6-seater solid walnut with brass-trim edge" },
      { label: "Chairs", value: "Six cognac leather upholstered chairs" },
      { label: "Lighting", value: "Brass-and-glass cluster pendant" },
      { label: "Flooring", value: "Wide-plank dark engineered oak" },
      { label: "Wall Feature", value: "Charcoal painted feature wall with framed art gallery" },
    ],
  },
  {
    id: "design-7",
    title: "Minimalist Japandi Dining",
    subtitle: "Pale Oak & Linen",
    mainImage: "/dining/image 7/Design 7.webp",
    features: [
      "4-seater rectangular dining table in pale oak with simple straight legs",
      "Four pale oak Wishbone-style chairs with woven paper-cord seats",
      "Floating pale oak sideboard",
      "Single slim shelf above sideboard for sculptural display",
      "Single large rice-paper sphere pendant overhead",
    ],
    specs: [
      { label: "Size", value: "11ft x 9ft" },
      { label: "Layout", value: "Minimalist dining with Japandi aesthetic" },
      { label: "Colour Story", value: "Pale Oak + Soft Olive + Cream Linen + Black" },
      { label: "Table", value: "4-seater pale oak" },
      { label: "Chairs", value: "Four pale oak Wishbone-style chairs" },
      { label: "Lighting", value: "Single rice-paper lantern pendant" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Wall Feature", value: "Slim pale oak floating shelf with sculptural objects" },
    ],
  },
  {
    id: "design-8",
    title: "Boho Eclectic Dining",
    subtitle: "Terracotta & Indigo Vintage Mix",
    mainImage: "/dining/image 8/Design 8.webp",
    features: [
      "6-seater rectangular solid teak dining table with character",
      "Six mixed dining chairs (four cane-and-teak, two hand-painted indigo)",
      "Vintage carved teak sideboard with hand-painted detail",
      "Open teak shelves above sideboard with brass and ceramic collection",
      "Lime-wash terracotta-cream walls with eclectic gallery wall",
    ],
    specs: [
      { label: "Size", value: "12ft x 10ft" },
      { label: "Layout", value: "Eclectic open dining with vintage character" },
      { label: "Colour Story", value: "Lime-wash Terracotta + Indigo + Walnut + Brass" },
      { label: "Table", value: "6-seater solid teak with vintage character" },
      { label: "Chairs", value: "Six mixed-style chairs (cane-and-teak + painted blue)" },
      { label: "Lighting", value: "Vintage brass cluster chandelier" },
      { label: "Flooring", value: "Hand-painted Athangudi tile" },
      { label: "Wall Feature", value: "Lime-wash terracotta-cream wall with vintage gallery" },
    ],
  },
  {
    id: "design-9",
    title: "Smart-Home Modern Dining",
    subtitle: "with Hidden Bar",
    mainImage: "/dining/image 9/Design 9.webp",
    features: [
      "6-seater extendable smoky walnut dining table (extends to 8 seats)",
      "Six fluted-back ivory velvet upholstered dining chairs",
      "Built-in floor-to-ceiling integrated bar unit with hidden coffee station",
      "Backlit glass shelving for premium glassware display",
      "Hidden wine fridge built into bar",
    ],
    specs: [
      { label: "Size", value: "13ft x 11ft" },
      { label: "Layout", value: "Modern dining with integrated smart-home bar" },
      { label: "Colour Story", value: "Smoky Walnut + Cream + Brushed Nickel + Black" },
      { label: "Table", value: "6-seater extendable smoky walnut" },
      { label: "Chairs", value: "Six fluted-back velvet chairs in muted ivory" },
      { label: "Lighting", value: "Linear brushed-nickel pendant with five globes" },
      { label: "Flooring", value: "Wide-plank dark engineered oak" },
      { label: "Wall Feature", value: "Built-in bar with backlit shelving" },
    ],
  },
  {
    id: "design-10",
    title: "Villa Indoor-Outdoor Dining",
    subtitle: "with Garden View",
    mainImage: "/dining/image 10/Design 10.webp",
    features: [
      "8-seater rectangular travertine-top dining table with carved teak base",
      "Eight cane-and-teak dining chairs with cream linen seat cushions",
      "Built-in carved teak sideboard with brass hardware",
      "Open carved teak shelves above sideboard with brass collection",
      "Indoor-outdoor flow through full-height sliding glass doors",
    ],
    specs: [
      { label: "Size", value: "14ft x 12ft" },
      { label: "Layout", value: "Villa-style dining opening to garden" },
      { label: "Colour Story", value: "Travertine + Warm Teak + Natural Cane + Cream" },
      { label: "Table", value: "8-seater honed travertine top with carved teak base" },
      { label: "Chairs", value: "Eight cane-and-teak chairs with cream linen cushions" },
      { label: "Lighting", value: "Three woven rattan dome pendants" },
      { label: "Flooring", value: "Honed travertine with real veining" },
      { label: "Wall Feature", value: "Floor-to-ceiling sliding glass doors to garden" },
    ],
  },
];

const features: FeatureItem[] = [
  { icon: Utensils, title: "Sized for Real Meals", desc: "Tables planned around how many you actually host — Sunday lunch with the family or twelve at Diwali." },
  { icon: Layers, title: "Sideboards That Earn Their Place", desc: "Crockery storage, wine drawers, hidden bars and display cabinets — every centimetre put to work." },
  { icon: ShieldCheck, title: "Surfaces Built to Last", desc: "Solid walnut, honed marble, teak with hand-rubbed oils — finishes chosen to survive daily dinners." },
  { icon: Wrench, title: "Lighting That Sets the Mood", desc: "Brass clusters, rattan domes, linear pendants — paired with dimmable warm LEDs for every occasion." },
];

const processSteps: ProcessStep[] = [
  { step: "01", title: "Lifestyle Brief", body: "How do you eat? Quick weekday meals or formal evenings? Six or sixteen? Every detail shapes the layout." },
  { step: "02", title: "Layout Planning", body: "Table size, chair clearance, sideboard depth and traffic flow — drawn before any joinery starts." },
  { step: "03", title: "3D Visualisation", body: "See the table in your room with finishes, art, lighting and bedding — adjust live before you commit." },
  { step: "04", title: "Material Selection", body: "Choose marble veining, teak grain, cane weave and chair fabrics from our curated studio collection." },
  { step: "05", title: "Factory Build", body: "Tables, chairs and sideboards crafted in our workshop with premium hardware and protective finishes." },
  { step: "06", title: "Install & Style", body: "We deliver, install, dress the table for the first time and walk you through care for every surface." },
];

export function DiningPage() {
  return (
    <InteriorDesignPage
      sectionLabel="Interiors / Dining Rooms"
      heroTitle={{ line1: "Dining rooms made", line2: "for long, easy evenings." }}
      heroDescription="ACRED designs dining rooms that feel as good on a Tuesday as they do at Diwali. Tables sized to your gatherings, sideboards planned around your crockery, and lighting that makes every meal feel a little special."
      heroImage="/dining/hero.webp"
      heroImageAlt="ACRED dining room showcase"
      intro={{
        label: "Why ACRED Dining Rooms?",
        line1: "The room where",
        line2: "the family actually meets.",
        body: "Every dining design we deliver is planned around how you eat — not a generic six-seater. We size tables, plan sideboards, route lighting and pick chair finishes so the room works for quick breakfasts, long Sunday lunches, and the festival dinners where everyone shows up.",
      }}
      designs={designs}
      galleryHeadline="Dining rooms we have designed."
      designTag="Dining"
      featuresSectionTitle="Storage & Features"
      featuresLabel="What You Get"
      featuresHeadline="Every detail planned around the table."
      features={features}
      processLabel="How It Works"
      processHeadline={{ line1: "From layout sketch", line2: "to first dinner." }}
      processSteps={processSteps}
      ctaLabel="Start your dining room"
      ctaHeadline="Ready to design the room everyone gathers in?"
      ctaBody="Book a free consultation. We will measure your space, understand how you host, and deliver a 3D dining design with a transparent quote within 48 hours."
    />
  );
}
