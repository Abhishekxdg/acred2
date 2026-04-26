"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Bath,
  BedDouble,
  Building2,
  Car,
  ChefHat,
  Check,
  Compass,
  DoorOpen,
  Home,
  LampDesk,
  Layers3,
  Leaf,
  Map,
  Minus,
  Plus,
  Ruler,
  Send,
  Sofa,
  Sparkles,
  Sun,
  Utensils,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceType = {
  id: string;
  name: string;
  range: string;
  mode: string;
  description: string;
  recommended: string[];
};

type Block = {
  id: string;
  name: string;
  zone: string;
  area: number;
  weight: number;
  icon: React.ComponentType<{ className?: string }>;
  note: string;
};

type PlanningChoice = {
  label: string;
  value: string;
};

const whatsappNumber = "916361889281";

const serviceTypes: ServiceType[] = [
  {
    id: "architecture",
    name: "Architecture",
    range: "Concept to drawings",
    mode: "Design",
    description:
      "Site-led planning, massing, floor plans, elevations, and execution-ready architectural drawings.",
    recommended: ["site-study", "concept-plan", "floor-plan", "facade", "working-drawings", "courtyard"],
  },
  {
    id: "interiors",
    name: "Interiors",
    range: "Rooms to full home",
    mode: "Finish",
    description:
      "Room layouts, furniture, lighting, wardrobes, kitchens, materials, and on-site interior execution.",
    recommended: [
      "living",
      "dining",
      "kitchen",
      "primary-bed",
      "kids-bed",
      "guest-bed",
      "bath",
      "puja",
      "utility",
      "material-board",
    ],
  },
  {
    id: "construction",
    name: "Construction",
    range: "Foundation to handover",
    mode: "Build",
    description:
      "Civil work, RCC, masonry, MEP coordination, finishes, site supervision, and handover closure.",
    recommended: [
      "excavation",
      "rcc",
      "masonry",
      "mep-site",
      "waterproofing",
      "finishes",
      "quality-checks",
      "handover",
    ],
  },
  {
    id: "engineering",
    name: "Engineering",
    range: "Structure + MEP",
    mode: "Resolve",
    description:
      "Structural systems, MEP routes, technical coordination, quantities, compliance, and buildability checks.",
    recommended: ["structure", "mep-design", "coordination", "boq", "compliance", "site-inspection"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    range: "Land to transaction",
    mode: "Develop",
    description:
      "Property discovery, feasibility, market fit, development strategy, documentation, and transaction support.",
    recommended: ["property-search", "feasibility", "market-study", "due-diligence", "development-mix", "transaction"],
  },
];

const blocks: Block[] = [
  { id: "site-study", name: "Site study", zone: "Architecture", area: 120, weight: 2, icon: Map, note: "Orientation, access, setbacks, sun, wind, privacy, and context mapping." },
  { id: "concept-plan", name: "Concept plan", zone: "Architecture", area: 260, weight: 3, icon: Home, note: "Early room relationships, circulation, massing, and zoning intent." },
  { id: "floor-plan", name: "Floor plans", zone: "Architecture", area: 320, weight: 4, icon: Layers3, note: "Detailed plans with dimensions, openings, and spatial hierarchy." },
  { id: "facade", name: "Facade design", zone: "Architecture", area: 220, weight: 3, icon: Building2, note: "Elevation language, openings, shade, materials, and street presence." },
  { id: "working-drawings", name: "Working drawings", zone: "Architecture", area: 280, weight: 4, icon: Ruler, note: "Execution-ready drawings for site coordination and construction." },
  { id: "arrival", name: "Arrival court", zone: "Entry", area: 180, weight: 2, icon: DoorOpen, note: "A calm threshold before the home opens up." },
  { id: "parking", name: "Parking bay", zone: "Entry", area: 260, weight: 2, icon: Car, note: "Car, bike, drop-off, and entry movement planning." },
  { id: "living", name: "Living room", zone: "Social", area: 280, weight: 3, icon: Sofa, note: "Main gathering space with media and conversation zones." },
  { id: "dining", name: "Dining", zone: "Social", area: 160, weight: 2, icon: Utensils, note: "Formal or everyday dining close to kitchen flow." },
  { id: "family-lounge", name: "Family lounge", zone: "Social", area: 220, weight: 3, icon: Home, note: "Informal upper lounge, TV room, or children-facing space." },
  { id: "primary-bed", name: "Primary suite", zone: "Private", area: 320, weight: 4, icon: BedDouble, note: "Bedroom, wardrobe edge, and attached bath planning." },
  { id: "kids-bed", name: "Kids bedroom", zone: "Private", area: 220, weight: 3, icon: BedDouble, note: "Flexible room that can grow with the family." },
  { id: "guest-bed", name: "Guest bedroom", zone: "Private", area: 220, weight: 3, icon: BedDouble, note: "Independent guest room or parent suite." },
  { id: "study", name: "Study / work room", zone: "Quiet", area: 120, weight: 2, icon: LampDesk, note: "Focused work, library, homework, or retreat room." },
  { id: "puja", name: "Puja / niche", zone: "Quiet", area: 60, weight: 1, icon: Sparkles, note: "Compact sacred or contemplative corner." },
  { id: "kitchen", name: "Kitchen", zone: "Service", area: 180, weight: 3, icon: ChefHat, note: "Modular, island, L-shaped, or parallel kitchen block." },
  { id: "bath", name: "Bathroom core", zone: "Service", area: 90, weight: 1, icon: Bath, note: "Wet area block for plumbing-efficient stacking." },
  { id: "utility", name: "Utility + laundry", zone: "Service", area: 90, weight: 1, icon: Building2, note: "Back-of-house storage, wash, and service support." },
  { id: "material-board", name: "Material palette", zone: "Interiors", area: 80, weight: 2, icon: Sparkles, note: "Finishes, colors, lighting temperature, hardware, and surface direction." },
  { id: "courtyard", name: "Courtyard", zone: "Outdoor", area: 180, weight: 2, icon: Sun, note: "Light, air, and a visual pause inside the plan." },
  { id: "deck", name: "Deck / terrace", zone: "Outdoor", area: 220, weight: 2, icon: Leaf, note: "Outdoor living connected to social spaces." },
  { id: "excavation", name: "Excavation + foundation", zone: "Construction", area: 260, weight: 4, icon: Building2, note: "Earthwork, footing strategy, substructure, and plinth planning." },
  { id: "rcc", name: "RCC frame", zone: "Construction", area: 360, weight: 5, icon: Layers3, note: "Columns, beams, slabs, reinforcement, shuttering, and concrete sequencing." },
  { id: "masonry", name: "Masonry + plaster", zone: "Construction", area: 260, weight: 3, icon: Home, note: "Walling, plastering, openings, levels, and surface readiness." },
  { id: "mep-site", name: "Site MEP works", zone: "Construction", area: 220, weight: 3, icon: Ruler, note: "Electrical, plumbing, drainage, sleeves, and site coordination." },
  { id: "waterproofing", name: "Waterproofing", zone: "Construction", area: 140, weight: 2, icon: Bath, note: "Terraces, wet areas, balconies, and preventive detailing." },
  { id: "finishes", name: "Finishes package", zone: "Construction", area: 260, weight: 3, icon: Sparkles, note: "Flooring, tiling, ceiling, painting, doors, windows, and final surfaces." },
  { id: "quality-checks", name: "Quality checks", zone: "Construction", area: 100, weight: 2, icon: Check, note: "Stage-wise inspection points for structure, MEP, finishes, and handover." },
  { id: "handover", name: "Snag-list handover", zone: "Construction", area: 80, weight: 1, icon: DoorOpen, note: "Final snag closure, documentation, and site handover readiness." },
  { id: "structure", name: "Structural design", zone: "Engineering", area: 300, weight: 5, icon: Building2, note: "Load path, framing, foundation logic, and structural drawings." },
  { id: "mep-design", name: "MEP design", zone: "Engineering", area: 260, weight: 4, icon: Ruler, note: "Electrical, plumbing, drainage, HVAC intent, and route planning." },
  { id: "coordination", name: "Technical coordination", zone: "Engineering", area: 180, weight: 3, icon: Compass, note: "Architecture, structure, MEP, and site teams aligned before execution." },
  { id: "boq", name: "BOQ + quantities", zone: "Engineering", area: 140, weight: 2, icon: Map, note: "Approximate quantities, scope clarity, and procurement planning." },
  { id: "compliance", name: "Compliance review", zone: "Engineering", area: 120, weight: 2, icon: Check, note: "Code, safety, feasibility, and documentation checks." },
  { id: "site-inspection", name: "Site inspection", zone: "Engineering", area: 120, weight: 2, icon: Sun, note: "On-site technical checks for quality, deviations, and buildability." },
  { id: "property-search", name: "Property search", zone: "Real Estate", area: 160, weight: 2, icon: Map, note: "Location, asset type, access, budget, and shortlist criteria." },
  { id: "feasibility", name: "Feasibility study", zone: "Real Estate", area: 220, weight: 3, icon: Ruler, note: "Plot potential, yield, risks, timelines, and practical development fit." },
  { id: "market-study", name: "Market study", zone: "Real Estate", area: 160, weight: 2, icon: Compass, note: "Demand, pricing, competition, buyer profile, and market positioning." },
  { id: "due-diligence", name: "Due diligence", zone: "Real Estate", area: 180, weight: 3, icon: Check, note: "Documentation, ownership, approvals, legal flags, and transaction readiness." },
  { id: "development-mix", name: "Development mix", zone: "Real Estate", area: 220, weight: 3, icon: Building2, note: "Use mix, unit planning, amenity logic, and revenue-facing decisions." },
  { id: "transaction", name: "Transaction support", zone: "Real Estate", area: 120, weight: 2, icon: DoorOpen, note: "Negotiation inputs, documentation flow, and closure support." },
];

const zoneOrder = [
  "Architecture",
  "Interiors",
  "Entry",
  "Social",
  "Private",
  "Quiet",
  "Service",
  "Outdoor",
  "Construction",
  "Engineering",
  "Real Estate",
];

const styleOptions: PlanningChoice[] = [
  { label: "Warm minimal", value: "Warm minimal" },
  { label: "Modern Indian", value: "Modern Indian" },
  { label: "Courtyard-led", value: "Courtyard-led" },
  { label: "Resort calm", value: "Resort calm" },
];

const plotOptions: PlanningChoice[] = [
  { label: "30 x 40", value: "30 x 40 site" },
  { label: "40 x 60", value: "40 x 60 site" },
  { label: "Custom", value: "Custom / larger site" },
];

const floorOptions: PlanningChoice[] = [
  { label: "Single", value: "Single floor" },
  { label: "G + 1", value: "Ground + 1" },
  { label: "G + 2", value: "Ground + 2" },
];

const orientationOptions: PlanningChoice[] = [
  { label: "North", value: "North-facing" },
  { label: "East", value: "East-facing" },
  { label: "South", value: "South-facing" },
  { label: "West", value: "West-facing" },
];

const priorityOptions: PlanningChoice[] = [
  { label: "Light", value: "Light and ventilation" },
  { label: "Vastu", value: "Vastu-sensitive planning" },
  { label: "Storage", value: "Storage and utility" },
  { label: "Outdoor", value: "Outdoor living" },
];

const plannerRows = [
  { label: "Site", icon: Map, options: plotOptions },
  { label: "Floors", icon: Layers3, options: floorOptions },
  { label: "Facing", icon: Compass, options: orientationOptions },
  { label: "Priority", icon: Ruler, options: priorityOptions },
  { label: "Language", icon: Sparkles, options: styleOptions },
];

export function HomeDesignerTool() {
  const [serviceId, setServiceId] = useState(serviceTypes[0].id);
  const [selected, setSelected] = useState<string[]>(serviceTypes[0].recommended);
  const [plot, setPlot] = useState(plotOptions[1].value);
  const [floors, setFloors] = useState(floorOptions[1].value);
  const [orientation, setOrientation] = useState(orientationOptions[1].value);
  const [priority, setPriority] = useState(priorityOptions[0].value);
  const [style, setStyle] = useState(styleOptions[1].value);

  const serviceType = serviceTypes.find((item) => item.id === serviceId) ?? serviceTypes[0];
  const serviceBlockIds = useMemo(() => {
    const ids = new Set(serviceType.recommended);
    if (serviceId === "architecture") {
      ["arrival", "parking", "deck"].forEach((id) => ids.add(id));
    }
    if (serviceId === "interiors") {
      ["study", "puja", "deck"].forEach((id) => ids.add(id));
    }
    return ids;
  }, [serviceId, serviceType.recommended]);
  const visibleBlocks = blocks.filter((block) => serviceBlockIds.has(block.id));
  const selectedBlocks = blocks.filter((block) => selected.includes(block.id));
  const selectedArea = selectedBlocks.reduce((sum, block) => sum + block.area, 0);
  const designWeight = selectedBlocks.reduce((sum, block) => sum + block.weight, 0);
  const estimatedTimeline = Math.max(5, Math.round(designWeight * 0.72));
  const complexity =
    designWeight < 18 ? "Simple" : designWeight < 31 ? "Layered" : "Signature";

  const selectedByZone = useMemo(
    () =>
      zoneOrder
        .map((zone) => ({
          zone,
          items: selectedBlocks.filter((block) => block.zone === zone),
        }))
        .filter((group) => group.items.length > 0),
    [selectedBlocks]
  );

  const planningNotes = useMemo(() => {
    const ids = new Set(selected);
    const notes = [
      `Start the ${serviceType.name.toLowerCase()} brief with the ${orientation.toLowerCase()} site or asset study.`,
      `Use ${priority.toLowerCase()} as the first filter when ACRED develops the scope.`,
    ];

    if ((serviceId === "architecture" || serviceId === "construction" || serviceId === "engineering") && floors !== "Single floor") {
      notes.push("Fix the stair position early so structure, circulation, and future privacy do not fight each other.");
    }

    if (ids.has("courtyard") || ids.has("deck")) {
      notes.push("Connect outdoor rooms to living and dining areas so the plan feels larger than its built-up area.");
    }

    if (ids.has("kitchen") && ids.has("utility")) {
      notes.push("Keep kitchen, utility, and wet cores close enough for clean service movement and plumbing efficiency.");
    }

    if (ids.has("primary-bed") && (ids.has("kids-bed") || ids.has("guest-bed"))) {
      notes.push("Separate private bedrooms from the louder social zones with a corridor, court, or storage buffer.");
    }

    if (serviceId === "construction") {
      notes.push("Lock drawings, BOQ, and stage-wise quality checks before major procurement begins.");
    }

    if (serviceId === "engineering") {
      notes.push("Coordinate structural and MEP decisions before site work to avoid late-stage clashes.");
    }

    if (serviceId === "real-estate") {
      notes.push("Validate title, market demand, development potential, and exit strategy before commitment.");
    }

    return notes.slice(0, 5);
  }, [floors, orientation, priority, selected, serviceId, serviceType.name]);

  const whatsappMessage = useMemo(() => {
    const zoneLines = selectedByZone
      .map((group) => `- ${group.zone}: ${group.items.map((item) => item.name).join(", ")}`)
      .join("\n");

    const noteLines = planningNotes.map((note) => `- ${note}`).join("\n");

    return [
      "Hello ACRED, I created a home concept using the Design Your Home tool.",
      "",
      "SERVICE",
      `- ${serviceType.name}`,
      `- Style: ${style}`,
      `- Site / Asset: ${plot}`,
      `- Floors: ${floors}`,
      `- Orientation: ${orientation}`,
      `- Priority: ${priority}`,
      "",
      "SCOPE BLOCKS",
      zoneLines || "- No blocks selected yet",
      "",
      "ESTIMATE",
      `- Approx scope scale: ${selectedArea.toLocaleString()} sq ft`,
      `- Scope complexity: ${complexity}`,
      `- Planning timeline: ${estimatedTimeline}-${estimatedTimeline + 3} weeks`,
      "",
      "PLANNING NOTES",
      noteLines,
      "",
      "Please help me turn this into a site-specific scope and next-step plan.",
    ].join("\n");
  }, [
    complexity,
    estimatedTimeline,
    floors,
    serviceType.name,
    orientation,
    planningNotes,
    plot,
    priority,
    selectedArea,
    selectedByZone,
    style,
  ]);

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const toggleBlock = (id: string) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const chooseService = (id: string) => {
    const next = serviceTypes.find((item) => item.id === id);
    if (!next) return;
    setServiceId(id);
    setSelected(next.recommended);
  };

  const setPlanningValue = (label: string, value: string) => {
    if (label === "Site") setPlot(value);
    if (label === "Floors") setFloors(value);
    if (label === "Facing") setOrientation(value);
    if (label === "Priority") setPriority(value);
    if (label === "Language") setStyle(value);
  };

  const activeValueFor = (label: string) => {
    if (label === "Site") return plot;
    if (label === "Floors") return floors;
    if (label === "Facing") return orientation;
    if (label === "Priority") return priority;
    return style;
  };

  return (
    <section className="container-acred pt-24 pb-14 sm:pt-28 sm:pb-20 md:pt-32">
      <div className="grid gap-6 border-b border-ink-line pb-7 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-9">
        <div className="lg:col-span-7">
          <p className="section-label mb-4">ACRED planning tool</p>
          <h1 className="text-balance">
            <span className="block font-sans text-display-md font-bold leading-[0.95] tracking-tight text-bone sm:text-display-lg">
              Build your brief
            </span>
            <span className="block font-serif text-display-md italic leading-[1.05] text-bone/85 sm:text-display-lg">
              across every discipline.
            </span>
          </h1>
        </div>

        <div className="lg:col-span-5">
          <p className="max-w-xl text-sm leading-relaxed text-bone-soft">
            Choose a discipline, set the site assumptions, and select the scope
            blocks you need. The tool turns it into a structured WhatsApp brief
            for ACRED.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-px bg-ink-line p-px">
            {[
              ["Scale", `${selectedArea.toLocaleString()} sq ft`],
              ["Blocks", selectedBlocks.length.toString().padStart(2, "0")],
              ["Timeline", `${estimatedTimeline}-${estimatedTimeline + 3} wk`],
            ].map(([label, value]) => (
              <div key={label} className="bg-ink px-3 py-3">
                <p className="font-serif text-xl leading-none text-bone sm:text-2xl">
                  {value}
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-widest2 text-bone-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
        <div className="lg:col-span-8">
          <div className="grid gap-px bg-ink-line p-px sm:grid-cols-3">
            {serviceTypes.map((type) => {
              const isActive = serviceId === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => chooseService(type.id)}
                  className={cn(
                    "group flex min-h-[9.5rem] w-full cursor-hover flex-col justify-between bg-ink p-4 text-left transition-colors sm:p-5",
                    isActive ? "bg-ink-soft" : "hover:bg-ink-soft/70"
                  )}
                >
                  <span>
                    <span
                      className={cn(
                        "font-serif text-xl leading-tight transition-colors sm:text-2xl",
                        isActive ? "text-gold" : "text-bone group-hover:text-gold"
                      )}
                    >
                      {type.name}
                    </span>
                    <span className="mt-2 line-clamp-3 block text-sm leading-relaxed text-bone-soft">
                      {type.description}
                    </span>
                  </span>
                  <span className="mt-5 flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                      {type.range}
                    </span>
                    <span
                      className={cn(
                        "inline-flex h-7 w-7 items-center justify-center rounded-full border",
                        isActive
                          ? "border-gold bg-gold text-night"
                          : "border-ink-line text-bone-muted"
                      )}
                    >
                      <Check className="h-4 w-4" />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-7">
            <div className="mb-4 flex items-end justify-between gap-4">
              <p className="section-label">Planning inputs</p>
              <p className="hidden font-mono text-[9px] uppercase tracking-widest2 text-bone-muted sm:block">
                Site assumptions
              </p>
            </div>
            <div className="grid gap-px bg-ink-line p-px sm:grid-cols-2">
              {plannerRows.map((row) => {
                const Icon = row.icon;
                const activeValue = activeValueFor(row.label);
                return (
                  <div key={row.label} className="bg-ink px-4 py-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-gold" />
                      <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                        {row.label}
                      </p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {row.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setPlanningValue(row.label, option.value)}
                          className={cn(
                            "cursor-hover rounded-full border px-3 py-1.5 font-sans text-xs transition-all",
                            activeValue === option.value
                              ? "border-bone bg-bone text-ink-soft"
                              : "border-ink-line text-bone-muted hover:border-bone/30 hover:text-bone"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-7">
            <div className="mb-4 flex items-end justify-between gap-4">
              <p className="section-label">Scope blocks</p>
              <p className="font-mono text-[9px] uppercase tracking-widest2 text-bone-muted">
                {selectedBlocks.length} selected
              </p>
            </div>
            <div className="grid gap-px bg-ink-line p-px sm:grid-cols-2 xl:grid-cols-3">
              {visibleBlocks.map((block) => {
                const Icon = block.icon;
                const isActive = selected.includes(block.id);
                return (
                  <button
                    key={block.id}
                    onClick={() => toggleBlock(block.id)}
                    className={cn(
                      "cursor-hover grid min-h-[8.5rem] grid-cols-[2rem_1fr_auto] gap-3 bg-ink p-3 text-left transition-all sm:p-4",
                      isActive ? "bg-ink-soft" : "hover:bg-ink-soft/60"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full",
                        isActive ? "bg-gold/10 text-gold" : "bg-ink-muted text-bone-muted"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-sans text-sm font-medium text-bone">
                        {block.name}
                      </span>
                      <span className="mt-1 block font-mono text-[9px] uppercase tracking-widest2 text-gold/80">
                        {block.zone} / {block.area} sq ft
                      </span>
                      <span className="mt-2 line-clamp-2 block text-xs leading-relaxed text-bone-soft">
                        {block.note}
                      </span>
                    </span>
                    <span className="pt-0.5 text-bone-muted">
                      {isActive ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="border-y border-ink-line bg-ink-soft">
              <div className="p-5">
                <p className="section-label mb-3">Planning brief</p>
                <h2 className="font-serif text-2xl leading-tight text-bone sm:text-3xl">
                  {serviceType.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-bone-soft">
                  {serviceType.mode} scope with a {style.toLowerCase()} language for a {plot.toLowerCase()}.
                </p>
              </div>

              <div className="space-y-3 border-y border-ink-line p-5">
                {[
                  ["Scope scale", `${selectedArea.toLocaleString()} sq ft`],
                  ["Scope complexity", complexity],
                  ["Planning timeline", `${estimatedTimeline}-${estimatedTimeline + 3} weeks`],
                  ["Primary priority", priority],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-5 border-b border-ink-line pb-2.5 last:border-b-0 last:pb-0">
                    <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                      {label}
                    </span>
                    <span className="max-w-[10rem] text-right font-serif text-lg leading-tight text-bone">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-5">
                <div className="max-h-40 overflow-y-auto border-l border-gold/60 bg-ink p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                    Notes for ACRED
                  </p>
                  <ul className="mt-3 space-y-2">
                    {planningNotes.map((note) => (
                      <li key={note} className="flex gap-2 text-xs leading-relaxed text-bone-soft">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 border-y border-ink-line py-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                    Selected scope
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-bone-soft">
                    {selectedBlocks.length
                      ? selectedBlocks.map((block) => block.name).join(", ")
                      : "Add blocks to begin your concept plan."}
                  </p>
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-4 inline-flex w-full cursor-hover items-center justify-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-gold hover:gap-3"
                >
                  <Send className="h-4 w-4" />
                  Send plan on WhatsApp
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <p className="text-center font-mono text-[9px] uppercase tracking-widest2 text-bone-muted">
                  Sends to +91 6361-889281
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
