"use client";

import { Sparkles, Layers, ShieldCheck, Wrench } from "lucide-react";
import { InteriorDesignPage, type DesignItem, type FeatureItem, type ProcessStep } from "./interior-design-template";

const designs: DesignItem[] = [
  {
    id: "design-1",
    title: "Foyer: Parametric Wave Panel",
    subtitle: "Smoked Walnut with Brass Inlay",
    mainImage: "/wall-panels/image 1/Design 1.webp",
    features: [
      "Continuous flowing parametric wave field — irregular, mathematically generated curves",
      "Slim 3mm brushed brass inlay traces ridge lines, catching warm light",
      "Variable carving depth from 5mm at valleys to 25mm at peaks for real shadow play",
      "Wall-grazing warm LED at top creates dramatic relief",
      "Hand-rubbed wax topcoat over matte PU lacquer",
    ],
    specs: [
      { label: "Room", value: "Foyer / Entry" },
      { label: "Panel Size", value: "7ft tall x 5ft wide" },
      { label: "Material", value: "18mm smoked walnut MDF with veneer face" },
      { label: "CNC Technique", value: "3D parametric relief, 5–25mm variable depth" },
      { label: "Pattern", value: "Flowing organic wave field" },
      { label: "Inlay", value: "Slim brushed brass at peak ridges" },
      { label: "Finish", value: "Matte PU lacquer + hand-rubbed wax topcoat" },
      { label: "Lighting", value: "Wall-grazing warm LED strip at top" },
    ],
  },
  {
    id: "design-2",
    title: "Master Bedroom: Lotus Petal Headboard",
    subtitle: "Cream Lacquer with Walnut Reveals",
    mainImage: "/wall-panels/image 2/Design 2.webp",
    features: [
      "Three stacked CNC-cut MDF layers create deep tessellated lotus petal pattern",
      "Top and middle layers in matte cream lacquer with progressive 20mm reveals",
      "Deepest layer in warm walnut veneer visible through petal openings",
      "Concealed warm LED strip lighting in reveals casts soft glow on walnut backdrop",
      "Bedside sconces complete the layered illumination",
    ],
    specs: [
      { label: "Room", value: "Master Bedroom" },
      { label: "Panel Size", value: "8ft tall x 9ft wide" },
      { label: "Material", value: "25mm MDF in three layered planes" },
      { label: "CNC Technique", value: "Multi-layer 2.5D pocket carving" },
      { label: "Pattern", value: "Abstracted lotus petal repeat with deep relief" },
      { label: "Reveals", value: "Hidden warm walnut wood reveals between layers" },
      { label: "Finish", value: "Matte cream PU + walnut veneer reveals" },
      { label: "Lighting", value: "Concealed warm LED in reveals + bedside sconces" },
    ],
  },
  {
    id: "design-3",
    title: "Kids' Bedroom: Mountain Range Topographic",
    subtitle: "Sage & Cream Layered Panel",
    mainImage: "/wall-panels/image 3/Design 3.webp",
    features: [
      "Five stacked CNC-cut MDF layers in mountain peak silhouettes",
      "Five gradient lacquer tones from deep forest sage to soft cream",
      "Stepped reveals between each layer create misty atmospheric depth",
      "Concealed warm LED behind deepest peak makes the horizon glow like sunrise",
      "Topographic relief feels like a paper-cut mountain range frozen in lacquered wood",
    ],
    specs: [
      { label: "Room", value: "Kids' Bedroom" },
      { label: "Panel Size", value: "7ft tall x 8ft wide" },
      { label: "Material", value: "Five stacked layers of CNC-cut MDF" },
      { label: "CNC Technique", value: "Topographic contour stacking" },
      { label: "Pattern", value: "Mountain range silhouette with layered contour lines" },
      { label: "Finish", value: "Five gradient lacquer tones — deep sage to soft cream" },
      { label: "Lighting", value: "Concealed warm LED behind deepest peak" },
    ],
  },
  {
    id: "design-4",
    title: "Guest Bedroom: Geometric Jaali Lattice",
    subtitle: "Carved Solid Teak",
    mainImage: "/wall-panels/image 4/Design 4.webp",
    features: [
      "Through-cut hexagonal star tessellation across 25mm solid teak",
      "Modern reinterpretation of classic Indian jaali latticework",
      "Panel mounted 50mm proud of soft cream wall behind",
      "Concealed warm LED in cavity radiates through lattice openings",
      "Hand-rubbed natural teak oil topcoat for warm depth without gloss",
    ],
    specs: [
      { label: "Room", value: "Guest Bedroom" },
      { label: "Panel Size", value: "7ft tall x 6ft wide" },
      { label: "Material", value: "25mm solid warm teak board" },
      { label: "CNC Technique", value: "Through-cut geometric jaali" },
      { label: "Pattern", value: "Hexagonal star tessellation" },
      { label: "Backing", value: "Cream PU painted wall with concealed LED" },
      { label: "Finish", value: "Matte natural teak with hand-rubbed oil" },
      { label: "Lighting", value: "Concealed warm LED behind panel" },
    ],
  },
  {
    id: "design-5",
    title: "Secondary Bedroom: Origami Fold Panel",
    subtitle: "Charcoal Lacquer with Brass Edges",
    mainImage: "/wall-panels/image 5/Design 5.webp",
    features: [
      "Continuous field of asymmetric angular polygon facets like sculptural origami",
      "Facets vary in size and angle to catch light differently across the surface",
      "Selective 2mm brushed brass strips trace key fold lines",
      "Matte charcoal lacquer absorbs light in recesses while planes catch warm light",
      "Strategic directional spot creates dramatic chiaroscuro shadow play",
    ],
    specs: [
      { label: "Room", value: "Secondary Master / Teen Bedroom" },
      { label: "Panel Size", value: "8ft tall x 7ft wide" },
      { label: "Material", value: "30mm MDF with veneer + lacquer faces" },
      { label: "CNC Technique", value: "Faceted angular plane carving" },
      { label: "Pattern", value: "Asymmetric crystalline polygon faceting" },
      { label: "Finish", value: "Matte charcoal grey PU + selective brass facet edges" },
      { label: "Lighting", value: "Directional spot for dramatic shadow play" },
    ],
  },
  {
    id: "design-6",
    title: "Living Room: Sacred Banyan with Buddha",
    subtitle: "Cascading Water Feature",
    mainImage: "/wall-panels/image 6/Design 6.webp",
    features: [
      "5-axis CNC deep relief carving in premium American black walnut veneer",
      "4ft solid Burma teak Buddha statue carved in Padmasana with Dhyana Mudra",
      "Three-tier cascading bowl water feature with hidden recirculating pump",
      "Honed cream granite reservoir with river pebbles, live moss and dwarf bamboo",
      "Four lighting layers — brass dome pendants, water glow, root reveals, rattan floor lamp",
      "Deep relief functions as natural acoustic diffuser for meditation",
    ],
    specs: [
      { label: "Room", value: "Premium Living Room / Meditation Room" },
      { label: "Wall Size", value: "10ft tall x 16ft wide (full feature wall)" },
      { label: "Substrate", value: "30mm Action Tesa HDHMR Premium (4 panels joined)" },
      { label: "Surface", value: "American Black Walnut veneer with natural grain" },
      { label: "CNC Technique", value: "Multi-axis 5-axis CNC deep relief carving" },
      { label: "Carving Depth", value: "8mm tips to 65mm Buddha forward projection" },
      { label: "Buddha Material", value: "Solid Burma teak with warm walnut stain" },
      { label: "Mounting", value: "Wall-recessed 100mm into structural wall" },
    ],
  },
  {
    id: "design-7",
    title: "Living Room (No-TV): Sound-Wave Frequency",
    subtitle: "Cream & Walnut Acoustic Panel",
    mainImage: "/wall-panels/image 7/Design 7.webp",
    features: [
      "Variable-amplitude vertical bands derived from real audio waveform",
      "Alternating matte cream PU lacquer and natural walnut veneer bands",
      "Variable depth (8mm to 35mm) creates dramatic shadow play under raking light",
      "Acoustic-grade MDF with irregular depth genuinely improves room sound diffusion",
      "Wall-grazing warm LED at top + framed art print spotlight",
    ],
    specs: [
      { label: "Room", value: "Living Room (designed for music & conversation)" },
      { label: "Panel Size", value: "9ft tall x 11ft wide" },
      { label: "Material", value: "25mm MDF with cream lacquer + walnut veneer bands" },
      { label: "CNC Technique", value: "Parametric sound-wave frequency pattern" },
      { label: "Pattern", value: "Audio waveform translated into vertical bands" },
      { label: "Acoustic Function", value: "Acoustic-grade MDF acts as diffuser" },
      { label: "Finish", value: "Alternating matte cream PU + natural walnut veneer" },
      { label: "Lighting", value: "Wall-grazing warm LED + art spotlight" },
    ],
  },
  {
    id: "design-8",
    title: "Dining Room: Honeycomb Hexagonal Grid",
    subtitle: "Brass & Cream Lacquer",
    mainImage: "/wall-panels/image 8/Design 8.webp",
    features: [
      "Precision tessellated hexagonal grid — every hexagon 100mm, recessed 12mm",
      "30% of hexagons inset with solid brushed antique brass following golden-ratio placement",
      "Brass hexagons sit flush, catching warm light from dining pendants for sparkle pattern",
      "Matte cream lacquer surrounds absorb light, letting brass do the talking",
      "Dining pendants overhead create reflected brass sparkle across the panel",
    ],
    specs: [
      { label: "Room", value: "Dining Room (full feature wall)" },
      { label: "Panel Size", value: "8ft tall x 10ft wide" },
      { label: "Material", value: "30mm MDF with cream lacquer + brass inlays" },
      { label: "CNC Technique", value: "Precision hexagonal grid with brass insets" },
      { label: "Pattern", value: "Tessellated honeycomb with golden-ratio placement" },
      { label: "Inlay", value: "12mm brushed brass hexagonal inserts" },
      { label: "Finish", value: "Matte cream PU + brushed antique brass" },
      { label: "Lighting", value: "Spot-lit by dining pendants from above" },
    ],
  },
  {
    id: "design-9",
    title: "Dining: Carved Mandala Behind Buffet",
    subtitle: "Lime-Wash Plaster Effect",
    mainImage: "/wall-panels/image 9/Design 9.webp",
    features: [
      "Sacred mandala carved with concentric circles of progressive geometric detail",
      "Variable carving depth from 3mm outermost ring to 25mm innermost lotus core",
      "Hand-trowelled lime-wash plaster surface gives genuine artisanal texture",
      "Looks like an ancient hand-carved temple stone wall, not a manufactured panel",
      "Two warm picture lights cast downward grazing light",
    ],
    specs: [
      { label: "Room", value: "Dining Room (behind buffet sideboard)" },
      { label: "Panel Size", value: "6ft tall x 7ft wide" },
      { label: "Material", value: "30mm MDF with hand-trowelled lime-wash" },
      { label: "CNC Technique", value: "Variable-depth carving in plaster effect" },
      { label: "Pattern", value: "Sacred geometric mandala with layered detail" },
      { label: "Finish", value: "Hand-trowelled lime-wash plaster surface" },
      { label: "Lighting", value: "Two warm picture lights overhead" },
    ],
  },
  {
    id: "design-10",
    title: "Foyer Passage: Verticality Reed Panel",
    subtitle: "Black Lacquer with Brass Threads",
    mainImage: "/wall-panels/image 10/Design 10.webp",
    features: [
      "Reeds vary in width and projection following parametric rhythm",
      "Deep matte black lacquer instead of typical oak — sophisticated and dramatic",
      "Slim 4mm brushed antique brass vertical threads inset between selected reeds",
      "Floor-level uplighters cast warm light upward for grazing illumination",
      "Reads like Japanese sudare bamboo screen with calligraphic vertical music",
    ],
    specs: [
      { label: "Room", value: "Foyer / Entry passage corridor" },
      { label: "Panel Size", value: "9ft tall x 14ft wide" },
      { label: "Material", value: "30mm MDF with matte black lacquer + brass" },
      { label: "CNC Technique", value: "Vertical reed fluting + brass threads" },
      { label: "Pattern", value: "Rhythmic vertical reeds with brass thread accents" },
      { label: "Finish", value: "Matte black lacquer + brushed brass inlays" },
      { label: "Lighting", value: "Floor-level uplighters for upward grazing" },
    ],
  },
  {
    id: "design-11",
    title: "Pooja Room: Sacred Sri Yantra & Lotus",
    subtitle: "White Marble Effect with Brass",
    mainImage: "/wall-panels/image 11/Design 11.webp",
    features: [
      "Sri Yantra at centre — nine interlocking triangles creating 43 sub-triangles",
      "108-petal lotus mandala radiates outward (sacred Hindu number)",
      "Solid brushed antique brass at all triangular intersections and lotus petal tips",
      "Hand-polished white marble effect mimics carved Makrana marble",
      "Concealed warm LED in mandir niche + brass diya lamps + brass chandelier",
    ],
    specs: [
      { label: "Room", value: "Dedicated Pooja Room" },
      { label: "Panel Size", value: "6ft tall x 5ft wide" },
      { label: "Material", value: "30mm MDF + hand-polished white marble effect" },
      { label: "CNC Technique", value: "Variable-depth sacred geometry" },
      { label: "Pattern", value: "Sri Yantra + 108-petal lotus mandala" },
      { label: "Inlay", value: "Solid brushed antique brass at intersections" },
      { label: "Finish", value: "Polished marble effect + epoxy + brass" },
      { label: "Lighting", value: "Warm LED + diyas + brass chandelier" },
    ],
  },
  {
    id: "design-12",
    title: "Pooja Room: Carved Temple Gopuram",
    subtitle: "Warm Teak with Brass Domes",
    mainImage: "/wall-panels/image 12/Design 12.webp",
    features: [
      "Five stepped tiers of South Indian temple gopuram architecture in miniature",
      "Hand-carved deity niches, lotus capitals, kalashas and sacred symbols at each tier",
      "Polished solid brass domes (kalasha) at each tier top catching warm light",
      "Hand-rubbed natural teak oil with selective brass inlays",
      "Warm LED uplighters at base + concealed LED behind brass domes + small diyas",
    ],
    specs: [
      { label: "Room", value: "Dedicated Pooja Room" },
      { label: "Panel Size", value: "7ft tall x 5ft wide" },
      { label: "Material", value: "35mm solid warm carved teak board" },
      { label: "CNC Technique", value: "Multi-tiered relief carving" },
      { label: "Pattern", value: "Stepped temple gopuram tower with deity niches" },
      { label: "Inlay", value: "Solid polished brass domes + brass deity outlines" },
      { label: "Finish", value: "Hand-rubbed natural teak oil + brass inlays" },
      { label: "Lighting", value: "Warm LED uplighters + diyas + concealed LED" },
    ],
  },
  {
    id: "design-13",
    title: "Living Room / Den: Roaring Lion",
    subtitle: "Bronze Patina Sculptural Panel",
    mainImage: "/wall-panels/image 13/Design 13.webp",
    features: [
      "Single magnificent male lion captured in mid-roar dominating entire panel",
      "Variable carving depth from 8mm at mane edges to 50mm at brow ridge and jaw",
      "Flowing mane radiates outward in deeply carved waves like a halo of power",
      "Multi-layer hand-applied bronze patina — burnished bronze + brass highlights + verdigris",
      "Strategic warm directional spot creates dramatic chiaroscuro across sculptural depth",
    ],
    specs: [
      { label: "Room", value: "Premium Living Room or Den" },
      { label: "Panel Size", value: "8ft tall x 7ft wide" },
      { label: "Material", value: "35mm MDF + hand-applied bronze patina" },
      { label: "CNC Technique", value: "Deep dimensional sculptural relief" },
      { label: "Pattern", value: "Powerful male lion in mid-roar with flowing mane" },
      { label: "Finish", value: "Multi-layer bronze patina (bronze + brass + verdigris)" },
      { label: "Lighting", value: "Warm directional spot for chiaroscuro" },
    ],
  },
  {
    id: "design-14",
    title: "Master Bedroom: Galloping Wild Horses",
    subtitle: "Walnut & Brass Headboard Panel",
    mainImage: "/wall-panels/image 14/Design 14.webp",
    features: [
      "Five wild horses galloping in unison from left to right",
      "Lead horse carved at maximum 45mm depth, flanking horses progressively flatter",
      "Every flowing mane and tail strand individually carved with brass motion-line inlay",
      "Vastu-friendly composition — horses facing entry door bring prosperity",
      "Wall-grazing warm LED at top + concealed LED behind panel + bedside sconces",
    ],
    specs: [
      { label: "Room", value: "Premium Master Bedroom" },
      { label: "Panel Size", value: "8ft tall x 9ft wide" },
      { label: "Material", value: "30mm MDF + warm walnut veneer + brass" },
      { label: "CNC Technique", value: "Dynamic sculptural relief" },
      { label: "Pattern", value: "Five wild horses galloping in unison" },
      { label: "Finish", value: "Matte warm walnut + brushed antique brass inlays" },
      { label: "Lighting", value: "Wall-grazing LED + concealed LED + sconces" },
    ],
  },
  {
    id: "design-15",
    title: "Powder Room: Vertical Garden Hydroponic",
    subtitle: "HDHMR Marine Grade Living Wall",
    mainImage: "/wall-panels/image 15/Design 15.webp",
    features: [
      "Botanical leaf motif CNC-carved with intentional cavities housing real living plants",
      "Hidden hydroponic irrigation system with self-watering drippers and drainage",
      "Concealed warm grow-light LEDs behind the panel",
      "Hand-applied tadelakt-effect plaster (Moroccan moisture-resistant lime plaster)",
      "BWP-rated HDHMR Marine Grade — only board that survives daily bathroom moisture",
    ],
    specs: [
      { label: "Room", value: "Powder Room / Half-Bath" },
      { label: "Panel Size", value: "8ft tall x 6ft wide" },
      { label: "Material", value: "30mm Greenpanel HDHMR Marine Grade" },
      { label: "CNC Technique", value: "Integrated planting cavities with hidden irrigation" },
      { label: "Pattern", value: "Botanical leaf motif with real living plants" },
      { label: "Finish", value: "Hand-applied tadelakt-effect lime plaster" },
      { label: "Functional", value: "Living vertical garden with self-watering + grow lights" },
    ],
  },
];

const features: FeatureItem[] = [
  { icon: Sparkles, title: "CNC Sculptural Detail", desc: "5-axis CNC carving, deep relief, parametric patterns and through-cut jaali — design that catches light." },
  { icon: Layers, title: "Layered Material Stories", desc: "Walnut veneer, brass inlay, lime-wash plaster, tadelakt, marble effect — finishes engineered together." },
  { icon: ShieldCheck, title: "HDHMR & Marine Grade", desc: "Premium HDHMR for sharp edges and structural mechanisms; BWP marine grade for wet zones." },
  { icon: Wrench, title: "Integrated Lighting", desc: "Concealed warm LEDs in reveals, behind panels and along ridges — lighting designed with the carving." },
];

const processSteps: ProcessStep[] = [
  { step: "01", title: "Wall Survey", body: "We assess the wall, the lighting, sight lines and how the room will use the panel — sacred, dramatic or quietly textured." },
  { step: "02", title: "Pattern Design", body: "Parametric, geometric, sculptural or sacred — we design the pattern to your room and your story." },
  { step: "03", title: "3D Render", body: "See the panel rendered in your room with lighting and finishes before any board is cut." },
  { step: "04", title: "Material Selection", body: "MDF, HDHMR, marine grade, solid teak — chosen by depth, finish, moisture and structural needs." },
  { step: "05", title: "CNC Fabrication", body: "5-axis precision carving in our partner factory with hand-finishing and brass inlay work." },
  { step: "06", title: "Install & Light", body: "Recess, mount and integrate concealed LEDs — leaving you a wall that looks alive under every light." },
];

export function WallPanelsPage() {
  return (
    <InteriorDesignPage
      sectionLabel="Interiors / Wall Panels"
      heroTitle={{ line1: "Walls that hold", line2: "their own stories." }}
      heroDescription="ACRED designs CNC-carved wall panels that turn flat surfaces into sculpture. Parametric waves, sacred geometry, layered topography, brass-inlaid jaali, gopuram relief and living hydroponic gardens — every panel engineered to your wall, your light, and your story."
      heroImage="/wall-panels/hero.webp"
      heroImageAlt="ACRED CNC sculptural wall panel showcase"
      intro={{
        label: "Why ACRED Wall Panels?",
        line1: "More than decor —",
        line2: "architecture in miniature.",
        body: "Each panel is designed for the wall it lives on. We choose the substrate (MDF, HDHMR, marine grade, solid teak) for what the design demands. We engineer the lighting into the carving from day one. We finish in lacquer, lime-wash, tadelakt or hand-rubbed oil so the surface reads exactly the way the design wants to be read. The result is a wall that holds the room together.",
      }}
      designs={designs}
      galleryHeadline="Wall panels we have crafted."
      designTag="Wall Panel"
      featuresSectionTitle="Features & Pattern Detail"
      featuresLabel="What You Get"
      featuresHeadline="Sculpture, light, and craft engineered together."
      features={features}
      processLabel="How It Works"
      processHeadline={{ line1: "From parametric pattern", line2: "to lit installation." }}
      processSteps={processSteps}
      ctaLabel="Start your wall panel"
      ctaHeadline="Ready to turn a wall into the centrepiece of the room?"
      ctaBody="Book a free consultation. We will study your wall, your lighting and your story, and deliver a 3D-rendered panel design with a transparent quote within 48 hours."
    />
  );
}
