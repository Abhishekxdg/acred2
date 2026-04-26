"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Bath,
  BedDouble,
  Building2,
  Car,
  ChefHat,
  Check,
  DoorOpen,
  Home,
  LampDesk,
  Leaf,
  Minus,
  Plus,
  Sofa,
  Sparkles,
  Sun,
  Utensils,
} from "lucide-react";
import { cn } from "@/lib/utils";

type HomeType = {
  id: string;
  name: string;
  area: string;
  budget: string;
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

const homeTypes: HomeType[] = [
  {
    id: "compact",
    name: "Compact urban home",
    area: "900-1,300 sq ft",
    budget: "Efficient",
    description: "A lean apartment or city home with flexible rooms and disciplined storage.",
    recommended: ["living", "kitchen", "primary-bed", "bath", "study", "utility"],
  },
  {
    id: "family",
    name: "Family residence",
    area: "1,800-3,200 sq ft",
    budget: "Balanced",
    description: "A full-time family home with privacy, shared spaces, guest capacity, and outdoor breathing room.",
    recommended: ["living", "dining", "kitchen", "primary-bed", "kids-bed", "guest-bed", "bath", "puja", "utility", "courtyard"],
  },
  {
    id: "villa",
    name: "Villa / independent house",
    area: "3,500-6,000 sq ft",
    budget: "Signature",
    description: "A site-led home with layered living, landscape, arrival, staff/service routes, and generous outdoor rooms.",
    recommended: ["arrival", "living", "dining", "kitchen", "primary-bed", "kids-bed", "guest-bed", "family-lounge", "bath", "deck", "courtyard", "parking"],
  },
];

const blocks: Block[] = [
  { id: "arrival", name: "Arrival court", zone: "Entry", area: 180, weight: 2, icon: DoorOpen, note: "A clear threshold before the home opens up." },
  { id: "living", name: "Living room", zone: "Social", area: 280, weight: 3, icon: Sofa, note: "Main gathering space with media and conversation zones." },
  { id: "dining", name: "Dining", zone: "Social", area: 160, weight: 2, icon: Utensils, note: "Formal or everyday dining close to kitchen flow." },
  { id: "kitchen", name: "Kitchen", zone: "Service", area: 180, weight: 3, icon: ChefHat, note: "Modular, island, or parallel kitchen block." },
  { id: "primary-bed", name: "Primary suite", zone: "Private", area: 320, weight: 4, icon: BedDouble, note: "Bedroom, wardrobe edge, and attached bath planning." },
  { id: "kids-bed", name: "Kids bedroom", zone: "Private", area: 220, weight: 3, icon: BedDouble, note: "Flexible room that can grow with the family." },
  { id: "guest-bed", name: "Guest bedroom", zone: "Private", area: 220, weight: 3, icon: BedDouble, note: "Independent guest room or parent suite." },
  { id: "bath", name: "Bathroom core", zone: "Service", area: 90, weight: 1, icon: Bath, note: "Wet area block for plumbing-efficient stacking." },
  { id: "study", name: "Study / work room", zone: "Quiet", area: 120, weight: 2, icon: LampDesk, note: "Focused work, library, or homework room." },
  { id: "family-lounge", name: "Family lounge", zone: "Social", area: 220, weight: 3, icon: Home, note: "Informal upper lounge or shared TV room." },
  { id: "puja", name: "Puja / niche", zone: "Quiet", area: 60, weight: 1, icon: Sparkles, note: "Compact sacred or contemplative corner." },
  { id: "utility", name: "Utility + laundry", zone: "Service", area: 90, weight: 1, icon: Building2, note: "Back-of-house storage, wash, and service support." },
  { id: "courtyard", name: "Courtyard", zone: "Outdoor", area: 180, weight: 2, icon: Sun, note: "Light, air, and a visual pause inside the plan." },
  { id: "deck", name: "Deck / terrace", zone: "Outdoor", area: 220, weight: 2, icon: Leaf, note: "Outdoor living connected to social spaces." },
  { id: "parking", name: "Parking bay", zone: "Entry", area: 260, weight: 2, icon: Car, note: "Car, bike, and arrival movement planning." },
];

const zoneOrder = ["Entry", "Social", "Private", "Quiet", "Service", "Outdoor"];

const styleOptions = ["Warm minimal", "Modern Indian", "Courtyard-led", "Resort calm"];

export function HomeDesignerTool() {
  const [homeTypeId, setHomeTypeId] = useState(homeTypes[1].id);
  const [selected, setSelected] = useState<string[]>(homeTypes[1].recommended);
  const [style, setStyle] = useState(styleOptions[1]);

  const homeType = homeTypes.find((item) => item.id === homeTypeId) ?? homeTypes[1];
  const selectedBlocks = blocks.filter((block) => selected.includes(block.id));
  const selectedArea = selectedBlocks.reduce((sum, block) => sum + block.area, 0);
  const designWeight = selectedBlocks.reduce((sum, block) => sum + block.weight, 0);
  const estimatedTimeline = Math.max(4, Math.round(designWeight * 0.7));

  const groupedBlocks = useMemo(
    () =>
      zoneOrder.map((zone) => ({
        zone,
        items: blocks.filter((block) => block.zone === zone),
      })),
    []
  );

  const toggleBlock = (id: string) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const chooseHomeType = (id: string) => {
    const next = homeTypes.find((item) => item.id === id);
    if (!next) return;
    setHomeTypeId(id);
    setSelected(next.recommended);
  };

  return (
    <section className="container-acred pt-28 pb-16 sm:pt-32 sm:pb-24 md:pt-40">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="section-label mb-5">Design tool</p>
          <h1 className="text-balance">
            <span className="block font-sans text-display-lg font-bold leading-[0.95] tracking-tight text-bone sm:text-display-xl">
              Build your home
            </span>
            <span className="block font-serif text-display-lg italic leading-[1.05] text-bone/85 sm:text-display-xl">
              from simple blocks.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-bone-soft sm:text-base">
            Choose a home type, add the spaces you need, and use the live plan
            summary to start a clearer design conversation with ACRED.
          </p>
        </div>

        <div className="grid gap-4 lg:col-span-7 sm:grid-cols-3">
          {homeTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => chooseHomeType(type.id)}
              className={cn(
                "cursor-hover rounded-lg border p-5 text-left transition-all",
                homeTypeId === type.id
                  ? "border-bone bg-bone text-ink"
                  : "border-ink-line bg-ink-soft text-bone hover:border-bone/30"
              )}
            >
              <p className={cn("font-serif text-2xl leading-tight", homeTypeId === type.id ? "text-ink" : "text-bone")}>
                {type.name}
              </p>
              <p className={cn("mt-3 font-mono text-[10px] uppercase tracking-widest2", homeTypeId === type.id ? "text-ink/60" : "text-bone-muted")}>
                {type.area} · {type.budget}
              </p>
              <p className={cn("mt-4 text-sm leading-relaxed", homeTypeId === type.id ? "text-ink/70" : "text-bone-soft")}>
                {type.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="border-y border-ink-line py-5">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
              Choose blocks
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {styleOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setStyle(option)}
                  className={cn(
                    "cursor-hover rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-widest2 transition-all",
                    style === option
                      ? "bg-bone text-ink"
                      : "bg-ink-soft text-bone-muted hover:text-bone"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-8">
            {groupedBlocks.map((group) => (
              <div key={group.zone}>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                  {group.zone}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((block) => {
                    const Icon = block.icon;
                    const isActive = selected.includes(block.id);
                    return (
                      <button
                        key={block.id}
                        onClick={() => toggleBlock(block.id)}
                        className={cn(
                          "cursor-hover flex items-start gap-4 rounded-lg border p-4 text-left transition-all",
                          isActive
                            ? "border-bone bg-ink-soft"
                            : "border-ink-line bg-transparent hover:border-bone/30 hover:bg-ink-soft"
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border",
                            isActive
                              ? "border-gold bg-gold/10 text-gold"
                              : "border-ink-line text-bone-muted"
                          )}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-start justify-between gap-3">
                            <span className="font-sans text-sm font-medium text-bone">
                              {block.name}
                            </span>
                            <span className="mt-0.5 text-bone-muted">
                              {isActive ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                            </span>
                          </span>
                          <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                            approx. {block.area} sq ft
                          </span>
                          <span className="mt-2 block text-sm leading-relaxed text-bone-soft">
                            {block.note}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="sticky top-28 overflow-hidden rounded-lg border border-ink-line bg-ink-soft">
            <div className="border-b border-ink-line p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                Your concept
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight text-bone">
                {homeType.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-bone-soft">
                {style} · {selectedBlocks.length} blocks selected
              </p>
            </div>

            <div className="grid grid-cols-3 gap-px bg-ink-line p-px">
              {selectedBlocks.slice(0, 12).map((block, index) => {
                const Icon = block.icon;
                return (
                  <div
                    key={block.id}
                    className={cn(
                      "min-h-24 bg-ink p-3",
                      block.weight >= 3 ? "col-span-2" : "",
                      index === 0 ? "row-span-2" : ""
                    )}
                  >
                    <Icon className="h-4 w-4 text-gold" />
                    <p className="mt-3 font-serif text-lg leading-tight text-bone">
                      {block.name}
                    </p>
                    <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-bone-muted">
                      {block.zone}
                    </p>
                  </div>
                );
              })}
              {selectedBlocks.length === 0 && (
                <div className="col-span-3 bg-ink p-8 text-center text-sm text-bone-muted">
                  Add blocks to begin your concept plan.
                </div>
              )}
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              {[
                ["Estimated area", `${selectedArea.toLocaleString()} sq ft`],
                ["Design complexity", designWeight < 18 ? "Simple" : designWeight < 30 ? "Layered" : "Signature"],
                ["Planning timeline", `${estimatedTimeline}-${estimatedTimeline + 3} weeks`],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-6 border-b border-ink-line pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                    {label}
                  </span>
                  <span className="text-right font-serif text-xl text-bone">
                    {value}
                  </span>
                </div>
              ))}

              <div className="rounded-lg bg-ink p-4">
                <p className="flex items-start gap-2 text-sm leading-relaxed text-bone-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  This is a concept starter, not a final architectural plan.
                  ACRED can turn it into site-specific layouts, structure,
                  costing, and execution drawings.
                </p>
              </div>

              <Link
                href={`/contact?project=${encodeURIComponent(`${homeType.name} - ${selectedBlocks.length} blocks - ${selectedArea} sq ft`)}`}
                className="group inline-flex w-full cursor-hover items-center justify-center gap-2.5 rounded-full bg-bone px-7 py-3.5 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-gold hover:gap-3"
              >
                Send this concept
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
