"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers, Ruler, ShieldCheck, Wrench, Eye, X, Info } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Design {
  id: string;
  title: string;
  subtitle: string;
  mainImage: string;
  storageFeatures: string[];
  specs: { label: string; value: string }[];
}

const designs: Design[] = [
  {
    id: "design-1",
    title: "Sliding-Door Lacquered Charcoal",
    subtitle: "Premium Master Wardrobe with LED",
    mainImage: "/wardrobe/image 1/Design 1.webp",
    storageFeatures: [
      "1 dedicated hanging-rod section for full-length garments (3 ft wide)",
      "1 dedicated hanging-rod section for shirts and tops (3 ft wide)",
      "4 internal pull-out drawer compartments",
      "1 dedicated pull-out shoe rack with 12 pairs capacity",
      "1 dedicated jewellery drawer with velvet-lined compartments",
      "Internal warm 2700K LED strip lighting along all shelves",
      "1 full-length integrated mirror panel on inside of one shutter",
      "Hidden tie-and-belt pull-out rack",
    ],
    specs: [
      { label: "Size", value: "10ft x 9ft (floor-to-ceiling)" },
      { label: "Depth", value: "24 inches" },
      { label: "Layout", value: "4-shutter sliding door" },
      { label: "Finish", value: "High-gloss charcoal PU lacquer" },
      { label: "Hardware", value: "Brushed-brass slim recessed handles" },
      { label: "Internal Material", value: "White-laminate internal carcass with walnut veneer accents" },
      { label: "Properties", value: "Scratch / Stain / Moisture Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-2",
    title: "Sliding-Door Lacquered Cream",
    subtitle: "with Brass Linear Inlay Detail",
    mainImage: "/wardrobe/image 2/Design 2.webp",
    storageFeatures: [
      "2 dedicated hanging-rod sections (3 ft wide each)",
      "6 internal pull-out drawer compartments with soft-close",
      "1 dedicated pull-out shoe rack",
      "1 dedicated pull-out tie-and-belt rack",
      "Internal warm 2700K LED strip lighting",
      "1 full-length integrated mirror panel",
      "Hidden valuables drawer with combination lock",
    ],
    specs: [
      { label: "Size", value: "8ft x 9ft (floor-to-ceiling)" },
      { label: "Depth", value: "24 inches" },
      { label: "Layout", value: "3-shutter sliding door" },
      { label: "Finish", value: "High-gloss cream PU lacquer with brushed-brass linear inlay" },
      { label: "Hardware", value: "Brushed-brass slim recessed handles" },
      { label: "Internal Material", value: "Walnut veneer internal carcass" },
      { label: "Properties", value: "Scratch / Stain / Moisture Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-3",
    title: "Walk-In Wardrobe",
    subtitle: "with Walnut & Brass",
    mainImage: "/wardrobe/image 3/Design 3.webp",
    storageFeatures: [
      "3 walls of floor-to-ceiling open and closed walnut wardrobe units",
      "Open garment hanging rods displaying outfits like a boutique",
      "Glass-fronted display sections with internal warm LED lighting",
      "Pull-out drawers with velvet-lined compartments",
      "Pull-out shoe rack with 24 pairs capacity",
      "Marble-topped freestanding centre island for accessories",
      "Full-length brushed-brass framed standing mirror",
      "Pull-out jewellery panel with hooks",
    ],
    specs: [
      { label: "Room Size", value: "7ft x 6ft walk-in dressing room" },
      { label: "Layout", value: "U-shaped configuration with three walls of storage" },
      { label: "Finish", value: "Solid warm walnut veneer with brushed-brass handles" },
      { label: "Hardware", value: "Brushed-brass slim ring handles + handle-less push-to-open" },
      { label: "Centerpiece", value: "Marble-topped freestanding island with two drawers" },
      { label: "Properties", value: "Premium hardware throughout" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-4",
    title: "Sliding-Door Walnut Veneer",
    subtitle: "with Woven Cane Inlay",
    mainImage: "/wardrobe/image 4/Design 4.webp",
    storageFeatures: [
      "2 hanging-rod sections (one for full-length, one for shirts/tops)",
      "4 internal pull-out drawer compartments",
      "1 dedicated shoe rack",
      "Internal warm 2700K LED strip lighting",
      "Hidden tie and belt pull-outs",
    ],
    specs: [
      { label: "Size", value: "8ft x 8ft" },
      { label: "Depth", value: "24 inches" },
      { label: "Layout", value: "4-shutter sliding door" },
      { label: "Finish", value: "Solid warm walnut veneer with woven natural cane inlay panels framed in slim walnut trim" },
      { label: "Hardware", value: "Brushed-brass slim ring handles" },
      { label: "Internal Material", value: "Cream laminate carcass" },
      { label: "Properties", value: "Scratch / Moisture Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-5",
    title: "Open Wardrobe",
    subtitle: "Boutique-Style Display Storage",
    mainImage: "/wardrobe/image 5/Design 5.webp",
    storageFeatures: [
      "Open hanging-rod sections displaying outfits boutique-style",
      "Open shelves for folded garments and accessories",
      "3 closed lower drawer cabinets with brass handles",
      "Glass-fronted display section with internal warm LED lighting",
      "Hidden valuables drawer",
      "Integrated full-length mirror at one end",
    ],
    specs: [
      { label: "Size", value: "10ft x 9ft (floor-to-ceiling)" },
      { label: "Depth", value: "24 inches" },
      { label: "Layout", value: "Open boutique-style display wardrobe" },
      { label: "Finish", value: "Solid walnut veneer shelving with slim antique-brass metal frame" },
      { label: "Hardware", value: "Antique-brass linear handles on the closed sections" },
      { label: "Internal Material", value: "Solid walnut shelving" },
      { label: "Properties", value: "Premium hardware throughout" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-6",
    title: "Compact 2BHK Sliding Wardrobe",
    subtitle: "Matte White & Walnut",
    mainImage: "/wardrobe/image 6/Design 6.webp",
    storageFeatures: [
      "1 hanging-rod section for full-length garments",
      "1 hanging-rod section for shirts and tops",
      "4 internal pull-out drawer compartments",
      "1 small dedicated shoe rack at base",
      "Integrated full-length mirror on inside of one shutter",
      "Compact internal LED lighting",
    ],
    specs: [
      { label: "Size", value: "7ft x 8ft (floor-to-ceiling)" },
      { label: "Depth", value: "22 inches (compact)" },
      { label: "Layout", value: "3-shutter sliding door" },
      { label: "Finish", value: "Matte white laminate with vertical warm walnut veneer accent strip on middle shutter" },
      { label: "Hardware", value: "Slim brushed-stainless inset handles" },
      { label: "Internal Material", value: "White laminate carcass" },
      { label: "Properties", value: "Scratch / Moisture Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-7",
    title: "Lacquered Sage Green",
    subtitle: "with Vertical Fluted Detail",
    mainImage: "/wardrobe/image 7/Design 7.webp",
    storageFeatures: [
      "2 hanging-rod sections",
      "6 internal pull-out drawer compartments",
      "1 dedicated pull-out shoe rack",
      "1 dedicated pull-out tie-and-belt rack",
      "Internal warm 2700K LED strip lighting",
      "1 full-length integrated mirror panel",
      "Hidden valuables drawer",
    ],
    specs: [
      { label: "Size", value: "10ft x 9ft (floor-to-ceiling)" },
      { label: "Depth", value: "24 inches" },
      { label: "Layout", value: "4-shutter sliding door" },
      { label: "Finish", value: "High-gloss sage green PU lacquer with vertical fluted detail panels at edges" },
      { label: "Hardware", value: "Brushed-brass slim recessed handles" },
      { label: "Internal Material", value: "Solid walnut veneer carcass" },
      { label: "Properties", value: "Scratch / Stain / Moisture Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-8",
    title: "Walk-In Wardrobe",
    subtitle: "Lacquered Cream & Marble Island",
    mainImage: "/wardrobe/image 8/Design 8.webp",
    storageFeatures: [
      "3 walls of floor-to-ceiling lacquered wardrobe units",
      "Open hanging rods displaying outfits boutique-style",
      "Glass-fronted display sections with internal warm LED lighting",
      "Pull-out drawers with velvet-lined compartments",
      "Pull-out shoe rack with 24 pairs capacity",
      "Calacatta marble-topped freestanding centre island",
      "Full-length brushed-brass framed standing mirror",
    ],
    specs: [
      { label: "Room Size", value: "8ft x 7ft walk-in dressing room" },
      { label: "Layout", value: "U-shaped configuration" },
      { label: "Finish", value: "High-gloss cream PU lacquer + Calacatta marble centre island" },
      { label: "Hardware", value: "Brushed-brass slim recessed handles" },
      { label: "Centerpiece", value: "Calacatta marble-topped freestanding island with hidden drawers" },
      { label: "Properties", value: "Premium hardware throughout" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-9",
    title: "Storage / Crockery Cabinet",
    subtitle: "with Display Section",
    mainImage: "/wardrobe/image 9/Design 9.webp",
    storageFeatures: [
      "Lower section: 4 closed cabinets in walnut veneer with brass cup-pulls for crockery storage",
      "Middle section: Open walnut shelves for display of vases, books, decorative objects",
      "Upper section: 3 glass-fronted display cabinets in cream PU with warm LED interior lighting for premium glassware/cutlery",
      "Hidden bar drawer with bottle storage and small fridge cavity",
      "Internal pull-out trays for cutlery storage",
      "Slim drawer for table linens",
    ],
    specs: [
      { label: "Size", value: "8ft x 7ft (floor-to-ceiling)" },
      { label: "Depth", value: "18 inches" },
      { label: "Layout", value: "Combined display + storage cabinet" },
      { label: "Finish", value: "Solid warm walnut veneer with cream PU painted upper section" },
      { label: "Hardware", value: "Brushed-brass slim cup-pulls" },
      { label: "Display Section", value: "Glass-fronted upper cabinets with internal LED lighting" },
      { label: "Properties", value: "Scratch / Moisture Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-10",
    title: "Foyer Storage Unit",
    subtitle: "Shoe Rack & Coat Hooks",
    mainImage: "/wardrobe/image 10/Design 10.webp",
    storageFeatures: [
      "Lower section: Pull-out shoe rack with 16 pairs capacity (4 levels)",
      "Middle section: Console with two pull-out drawers for keys and small items",
      "Upper section: Closed cabinet with handle-less push-to-open for stored handbags or seasonal items",
      "Open shelf at console height for daily items and decorative pieces",
      "Five brushed-brass coat hooks mounted along right side",
      "Integrated full-length mirror on left side",
      "Slim recessed warm LED lighting under upper cabinet for console wash",
    ],
    specs: [
      { label: "Size", value: "6ft x 8ft (floor-to-ceiling)" },
      { label: "Depth", value: "16 inches" },
      { label: "Layout", value: "Foyer entry unit with mixed shoe storage, coat hooks, and console" },
      { label: "Finish", value: "Solid teak veneer with handle-less push-to-open" },
      { label: "Hardware", value: "Concealed push-to-open + brass coat hooks" },
      { label: "Display Section", value: "Open shelf above console for keys, photographs, daily items" },
      { label: "Properties", value: "Scratch / Moisture Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
];

const features = [
  { icon: Layers, title: "Smart Storage Systems", desc: "Pull-out baskets, trouser racks, tie holders, and shoe organisers — every accessory planned." },
  { icon: Ruler, title: "Floor-to-Ceiling Fit", desc: "Wardrobes measured to exact millimetres, making use of every vertical inch including awkward corners." },
  { icon: Wrench, title: "Premium Hardware", desc: "Soft-close hinges, sliding mechanisms by Hettich and Blum, and durable channel systems." },
  { icon: ShieldCheck, title: "10-Year Warranty", desc: "All cabinetry, finishes, and hardware are covered for a full decade." },
];

const processSteps = [
  { step: "01", title: "Wardrobe Audit", body: "We count your shoes, measure your longest coat, and note every accessory so nothing is left to guesswork." },
  { step: "02", title: "Layout Design", body: "Shelves, hanging rods, drawers, and baskets arranged for your daily routine — not a generic template." },
  { step: "03", title: "3D Visualisation", body: "See your wardrobe inside and out before it is built. Adjust finishes, handles, and internals in real time." },
  { step: "04", title: "Material Selection", body: "Choose shutter finishes, internal laminates, and handles from our curated studio collection." },
  { step: "05", title: "Factory Build", body: "CNC-cut panels, edge-banded and drilled with precision in our quality-controlled factory." },
  { step: "06", title: "Install & Organise", body: "Our crew installs, tests every slide and hinge, and leaves your wardrobe ready to use from day one." },
];

export function WardrobePage() {
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sections = [heroRef, introRef, featuresRef, processRef, ctaRef];
      sections.forEach((ref) => {
        if (!ref.current) return;
        const items = ref.current.querySelectorAll(".gsap-reveal");
        gsap.from(items, { y: 30, opacity: 0, stagger: 0.08, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" } });
      });

      if (galleryRef.current) {
        const items = galleryRef.current.querySelectorAll(".gsap-reveal");
        gsap.from(items, { y: 50, opacity: 0, scale: 0.96, stagger: { each: 0.1, from: "start" }, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: galleryRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
        items.forEach((item) => {
          const img = item.querySelector(".gallery-img");
          if (img) {
            gsap.to(img, { yPercent: -6, ease: "none", scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true } });
          }
        });
      }
    },
    {}
  );

  const [activeDesign, setActiveDesign] = useState<Design | null>(null);

  const openPopup = useCallback((design: Design) => {
    setActiveDesign(design);
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent("popupOpen"));
  }, []);

  const closePopup = useCallback(() => {
    setActiveDesign(null);
    document.body.style.overflow = "";
    window.dispatchEvent(new CustomEvent("popupClose"));
  }, []);

  useEffect(() => {
    if (activeDesign === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeDesign, closePopup]);

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28">
        <div className="container-acred">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="gsap-reveal lg:col-span-7">
              <p className="section-label mb-4 sm:mb-6">Interiors / Wardrobe & Storage</p>
              <h1 className="whitespace-pre-line text-balance">
                <span className="block font-sans font-bold text-display-lg sm:text-display-xl leading-[0.95] tracking-tight text-bone">Storage that fits</span>
                <span className="block font-serif italic text-display-lg sm:text-display-xl leading-[1.05] text-bone/85">your life perfectly.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">ACRED designs wardrobes and storage systems that maximise every square foot. From walk-in closets to compact sliding-door units, every shelf, drawer, and hanger is planned around what you actually own.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover">Get a free wardrobe quote<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                <a href="#gallery" className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover">View designs</a>
              </div>
            </div>
            <div className="gsap-reveal lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-soft">
                <Image src="/wardrobe/hero.webp" alt="ACRED wardrobe and storage showcase" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={introRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">Why ACRED Wardrobes?</p>
            <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Organised living</span><span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">starts behind closed doors.</span></h2>
            <p className="mt-6 text-base leading-relaxed text-bone-soft sm:text-lg">A well-designed wardrobe saves you minutes every morning and keeps your bedroom serene. We design for your actual inventory — long dresses, folded shirts, accessories, luggage, and seasonal storage — so there is a place for everything, and everything is easy to reach. No dead space. No awkward corners. Just smart, beautiful storage.</p>
          </div>
        </div>
      </section>

      {designs.length > 0 && (
        <section ref={galleryRef} id="gallery" className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mb-10 sm:mb-12">
            <p className="section-label mb-4">Portfolio</p>
            <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Wardrobes we have crafted.</span></h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {designs.map((design) => (
              <div key={design.id} className="gsap-reveal group relative overflow-hidden rounded-xl bg-ink-soft cursor-hover" onClick={() => openPopup(design)}>
                <div className="relative w-full aspect-[4/3]">
                  <Image src={design.mainImage} alt={design.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="gallery-img object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-1">Wardrobe</p>
                        <p className="font-sans text-sm font-medium text-white leading-snug max-w-[80%]">{design.title}</p>
                      </div>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                        <Info className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section ref={featuresRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mb-10 sm:mb-12">
            <p className="section-label mb-4">What You Get</p>
            <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Smart storage, built to last.</span></h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="gsap-reveal rounded-xl border border-ink-line bg-ink p-6 sm:p-8">
                <f.icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-sans text-base font-medium text-bone">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={processRef} className="container-acred py-16 md:py-20 lg:py-28">
        <div className="gsap-reveal mb-10 sm:mb-12">
          <p className="section-label mb-4">How It Works</p>
          <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">From wardrobe audit</span><span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">to organised bliss.</span></h2>
        </div>
        <div className="grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <div key={s.step} className="gsap-reveal border border-ink-line bg-ink-soft p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">{s.step}</p>
              <h3 className="mt-3 font-sans text-base font-medium text-bone">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={ctaRef} className="border-t border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal flex flex-col items-center text-center">
            <p className="section-label mb-4">Start your wardrobe</p>
            <h2 className="text-balance max-w-2xl"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Tired of clutter? Let us design your storage.</span></h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-bone-soft">Book a free consultation. We will audit your current storage, measure your space, and deliver a 3D wardrobe design with a transparent quote within 48 hours.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover">Book free consultation<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
              <a href="tel:+916361889281" className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-7 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover">Call +91 63618 89281</a>
            </div>
          </div>
        </div>
      </section>

      {activeDesign && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/85 backdrop-blur-sm p-0 sm:p-6 overflow-y-auto" onClick={closePopup}>
          <div className="relative w-full max-w-5xl bg-ink border border-ink-line my-0 sm:my-10 rounded-none sm:rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={closePopup} className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60 cursor-hover" aria-label="Close"><X className="h-5 w-5" /></button>
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-ink-soft">
                <Image src={activeDesign.mainImage} alt={activeDesign.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
              </div>
              <div className="p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[60vh] md:max-h-[80vh]">
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-2">Wardrobe Design</p>
                <h3 className="font-sans text-xl sm:text-2xl font-medium text-bone leading-snug">{activeDesign.title}</h3>
                <p className="mt-1 text-sm text-bone-muted">{activeDesign.subtitle}</p>
                <div className="mt-6 space-y-5">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-3">Storage Features</h4>
                    <ul className="space-y-2">
                      {activeDesign.storageFeatures.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-bone-soft leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-ink-line pt-5">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-3">Specifications</h4>
                    <dl className="grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-2">
                      {activeDesign.specs.map((s, i) => (
                        <div key={i} className="flex justify-between gap-2 border-b border-ink-line/50 pb-2">
                          <dt className="text-xs text-bone-muted">{s.label}</dt>
                          <dd className="text-xs text-bone text-right">{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-2.5 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 cursor-hover">
                    Enquire about this design<ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
