"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BedDouble, Sun, Palette, ShieldCheck, Eye, X, Info } from "lucide-react";
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
    title: "Walnut & Cream Warm Modern",
    subtitle: "Master Bedroom with Balcony",
    mainImage: "/bedroom/image 11/image 11.webp",
    storageFeatures: [
      "6-shutter sliding-door wardrobe in solid walnut veneer with internal pull-outs, drawers, hanging rods, and integrated LED strip lighting",
      "Hydraulic-lift storage under the bed",
      "Bedside drawer-cabinets with two drawers each",
      "Dressing zone integrated at one end of wardrobe with full-length mirror",
      "Built-in study nook beneath windowsill with one drawer",
    ],
    specs: [
      { label: "Size", value: "14ft x 12ft" },
      { label: "Layout", value: "Master bedroom with attached balcony on long wall" },
      { label: "Colour Story", value: "Warm Walnut + Soft Cream + Deep Olive Accents" },
      { label: "Wardrobe Finish", value: "Solid walnut veneer with brushed-brass handles" },
      { label: "Headboard Wall", value: "Fluted vertical walnut wood panelling" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Bed Size", value: "King (6ft x 6.5ft)" },
    ],
  },
  {
    id: "design-2",
    title: "Premium Lacquered Charcoal & Marble",
    subtitle: "Master Bedroom with Balcony",
    mainImage: "/bedroom/image 12/image 12.webp",
    storageFeatures: [
      "8-shutter sliding-door lacquered wardrobe with internal LED-lit pull-outs, drawers, hanging rods, and dedicated shoe storage",
      "Hydraulic-lift storage under the bed",
      "Floating bedside cabinets in matching lacquered charcoal with brushed-brass insets",
      "Built-in dressing console with integrated full-length mirror at one end",
      "Smart-home control panel beside bed",
    ],
    specs: [
      { label: "Size", value: "16ft x 14ft" },
      { label: "Layout", value: "Master bedroom with attached balcony" },
      { label: "Colour Story", value: "High-Gloss Lacquered Charcoal + Calacatta Marble + Brushed Brass" },
      { label: "Wardrobe Finish", value: "High-gloss charcoal PU lacquer with handle-less push-to-open" },
      { label: "Headboard Wall", value: "Book-matched honed Italian Calacatta marble" },
      { label: "Flooring", value: "Wide-plank dark engineered oak" },
      { label: "Bed Size", value: "King (6.5ft x 7ft)" },
    ],
  },
  {
    id: "design-3",
    title: "Indo-Contemporary Sage & Cane",
    subtitle: "Master Bedroom with Balcony",
    mainImage: "/bedroom/image 13/without_reducing_the_image_quality,_202605101527.webp",
    storageFeatures: [
      "6-shutter sliding-door wardrobe in solid walnut veneer with woven natural cane inlay panels framed in walnut trim",
      "Hydraulic-lift storage under the bed",
      "Bedside drawer-cabinets in solid walnut with cane inlay drawer fronts",
      "Dressing zone with full-length cane-framed mirror",
    ],
    specs: [
      { label: "Size", value: "13ft x 11ft" },
      { label: "Layout", value: "Master bedroom with attached balcony" },
      { label: "Colour Story", value: "Soft Sage Green + Natural Cane + Warm Walnut" },
      { label: "Wardrobe Finish", value: "Solid walnut veneer with woven cane inlay panels" },
      { label: "Headboard Wall", value: "Soft sage green PU paint with carved teak detail" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Bed Size", value: "King (6ft x 6.5ft)" },
    ],
  },
  {
    id: "design-4",
    title: "Lacquered Sage Green & Brass",
    subtitle: "Master Bedroom with Balcony",
    mainImage: "/bedroom/image 14/without_reducing_the_image_quality_202605101533.webp",
    storageFeatures: [
      "6-shutter sliding-door lacquered wardrobe with internal LED-lit pull-outs, drawers, hanging rods",
      "Hydraulic-lift storage under the bed",
      "Bedside drawer-cabinets in matching high-gloss sage lacquer",
      "Dressing zone with full-length brass-framed mirror at one end",
    ],
    specs: [
      { label: "Size", value: "14ft x 12ft" },
      { label: "Layout", value: "Master bedroom with attached balcony" },
      { label: "Colour Story", value: "High-Gloss Lacquered Sage + Brushed Brass + Cream" },
      { label: "Wardrobe Finish", value: "High-gloss sage green PU lacquer with brushed-brass slim handles" },
      { label: "Headboard Wall", value: "Cream upholstered tufted headboard with brass studs" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Bed Size", value: "King (6ft x 6.5ft)" },
    ],
  },
  {
    id: "design-5",
    title: "Japandi Pale Oak & Olive",
    subtitle: "Master Bedroom with Balcony",
    mainImage: "/bedroom/image 15/remove_the_black_spots_on_202605101542.webp",
    storageFeatures: [
      "5-shutter sliding-door wardrobe in light ash-oak veneer with handle-less push-to-open",
      "Hydraulic-lift storage under the bed",
      "Floating bedside drawer-cabinets in matching light ash-oak",
      "Dressing zone with full-length pale oak framed mirror",
    ],
    specs: [
      { label: "Size", value: "13ft x 11ft" },
      { label: "Layout", value: "Master bedroom with attached balcony" },
      { label: "Colour Story", value: "Pale Ash-Oak + Soft Olive + Cream" },
      { label: "Wardrobe Finish", value: "Light ash-oak veneer with handle-less push-to-open" },
      { label: "Headboard Wall", value: "Soft olive matte laminate with recessed-LED feature line" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Bed Size", value: "Queen-king (5.5ft x 6.5ft)" },
    ],
  },
  {
    id: "design-6",
    title: "Lacquered Cream & Walnut Premium",
    subtitle: "Bedroom No Balcony",
    mainImage: "/bedroom/image 16/remove_the_pot_on_the_202605101550.webp",
    storageFeatures: [
      "6-shutter sliding-door lacquered wardrobe with internal LED-lit pull-outs, drawers, hanging rods",
      "Hydraulic-lift storage under the bed",
      "Bedside drawer-cabinets in matching high-gloss cream lacquer",
      "Dressing zone with full-length brass-framed mirror",
    ],
    specs: [
      { label: "Size", value: "13ft x 11ft" },
      { label: "Layout", value: "Master bedroom, no balcony, with two windows" },
      { label: "Colour Story", value: "High-Gloss Lacquered Cream + Warm Walnut + Cream" },
      { label: "Wardrobe Finish", value: "High-gloss cream PU lacquer with brushed-brass handles" },
      { label: "Headboard Wall", value: "Solid walnut veneer floor-to-ceiling panel" },
      { label: "Flooring", value: "Wide-plank pale oak engineered wood" },
      { label: "Bed Size", value: "King (6ft x 6.5ft)" },
    ],
  },
  {
    id: "design-7",
    title: "Compact 2BHK Sage Green Modern",
    subtitle: "Bedroom No Balcony",
    mainImage: "/bedroom/image 17/change_the_windows,_i_want_202605101608.webp",
    storageFeatures: [
      "4-shutter sliding-door wardrobe in matte sage green laminate",
      "Drawer-storage bed (3 deep drawers along one side)",
      "Floating bedside drawer in warm walnut veneer",
      "Built-in study desk integrated at end of wardrobe",
    ],
    specs: [
      { label: "Size", value: "11ft x 10ft" },
      { label: "Layout", value: "Compact bedroom, no balcony, single window" },
      { label: "Colour Story", value: "Soft Sage Green + Cream + Warm Walnut Accents" },
      { label: "Wardrobe Finish", value: "Matte sage green laminate with handle-less push-to-open" },
      { label: "Headboard Wall", value: "Soft sage green PU paint with horizontal walnut accent band" },
      { label: "Flooring", value: "Vitrified tile in warm beige" },
      { label: "Bed Size", value: "Queen (5ft x 6.5ft)" },
    ],
  },
  {
    id: "design-8",
    title: "Lacquered Navy Blue & Brass Premium",
    subtitle: "Bedroom No Balcony",
    mainImage: "/bedroom/image 18/remove_all_the_items_on_202605101621.webp",
    storageFeatures: [
      "6-shutter sliding-door lacquered wardrobe with internal LED-lit pull-outs, drawers, hanging rods, dedicated shoe storage",
      "Hydraulic-lift storage under the bed",
      "Bedside drawer-cabinets in matching high-gloss navy blue lacquer",
      "Dressing zone with full-length brushed-brass framed mirror",
    ],
    specs: [
      { label: "Size", value: "13ft x 12ft" },
      { label: "Layout", value: "Master bedroom, no balcony, single tall window" },
      { label: "Colour Story", value: "High-Gloss Lacquered Navy Blue + Brushed Brass + Cream" },
      { label: "Wardrobe Finish", value: "High-gloss navy blue PU lacquer with brushed-brass slim handles" },
      { label: "Headboard Wall", value: "Cream upholstered tufted headboard with brass nailhead trim" },
      { label: "Flooring", value: "Wide-plank dark engineered oak" },
      { label: "Bed Size", value: "King (6ft x 6.5ft)" },
    ],
  },
  {
    id: "design-9",
    title: "Boho Eclectic Cream & Terracotta",
    subtitle: "Bedroom No Balcony",
    mainImage: "/bedroom/image 19/without_reducing_the_image_quality_202605101633.webp",
    storageFeatures: [
      "5-shutter sliding-door wardrobe in solid walnut veneer with two painted accent panels",
      "Hydraulic-lift storage under the bed",
      "Bedside cabinets in solid walnut veneer with brass cup-pulls",
      "Dressing zone with full-length carved-teak-framed mirror",
    ],
    specs: [
      { label: "Size", value: "12ft x 10ft" },
      { label: "Layout", value: "Bedroom, no balcony, single window" },
      { label: "Colour Story", value: "Cream + Terracotta + Indigo + Warm Walnut" },
      { label: "Wardrobe Finish", value: "Solid walnut veneer with hand-painted ceramic-tile-look detail panels" },
      { label: "Headboard Wall", value: "Lime-wash plaster in warm terracotta-cream tone" },
      { label: "Flooring", value: "Hand-painted Athangudi tile" },
      { label: "Bed Size", value: "Queen (5ft x 6.5ft)" },
    ],
  },
  {
    id: "design-10",
    title: "Compact Modern White & Walnut",
    subtitle: "Bedroom No Balcony",
    mainImage: "/bedroom/image 20/remove_all_the_pots_in_202605101635.webp",
    storageFeatures: [
      "3-shutter sliding-door wardrobe in matte white laminate with handle-less push-to-open",
      "Hydraulic-lift storage under the bed",
      "Single floating bedside shelf in warm walnut veneer",
      "Compact study nook with floating walnut desk integrated at end of wardrobe",
    ],
    specs: [
      { label: "Size", value: "10ft x 9ft" },
      { label: "Layout", value: "Compact bedroom, no balcony, single window" },
      { label: "Colour Story", value: "Soft White + Warm Walnut + Cream Quartz" },
      { label: "Wardrobe Finish", value: "Matte white laminate with handle-less push-to-open" },
      { label: "Headboard Wall", value: "Soft warm off-white with single horizontal walnut shelf" },
      { label: "Flooring", value: "Vitrified tile in warm beige" },
      { label: "Bed Size", value: "Single-king (4.5ft x 6.5ft)" },
    ],
  },
];

const features = [
  { icon: BedDouble, title: "Custom Bed Frames", desc: "Platform beds, storage beds, and upholstered headboards built to your mattress size and style preference." },
  { icon: Sun, title: "Ambient Lighting", desc: "Bedside, cove, and task lighting layered to create a calming atmosphere for rest and reading." },
  { icon: Palette, title: "Coordinated Finishes", desc: "Bed frames, side tables, dressing units, and wardrobes in a unified material and colour palette." },
  { icon: ShieldCheck, title: "10-Year Warranty", desc: "All bedroom furniture and built-ins are covered for material and workmanship." },
];

const processSteps = [
  { step: "01", title: "Sleep & Lifestyle Audit", body: "We ask about your sleep habits, reading routines, and storage needs so the room works for your real life." },
  { step: "02", title: "Layout & Flow", body: "Bed placement, wardrobe access, dressing area, and circulation planned for comfort and calm." },
  { step: "03", title: "3D Visualisation", body: "See your bedroom in photorealistic renders before any furniture is ordered." },
  { step: "04", title: "Material & Finish Selection", body: "Woods, fabrics, handles, and lighting chosen together for a cohesive, restful palette." },
  { step: "05", title: "Precision Fabrication", body: "Bed frames, side tables, dressing units, and wardrobes built in our quality-controlled factory." },
  { step: "06", title: "Install & Dress", body: "Our crew installs, levels, and tests every element. We dress the room so you sleep in it the same night." },
];

export function BedroomPage() {
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
        gsap.from(items, {
          y: 30,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Gallery grid entrance
      if (galleryRef.current) {
        const items = galleryRef.current.querySelectorAll(".gsap-reveal");
        gsap.from(items, {
          y: 50,
          opacity: 0,
          scale: 0.96,
          stagger: {
            each: 0.1,
            from: "start",
          },
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Parallax on gallery images
        items.forEach((item) => {
          const img = item.querySelector(".gallery-img");
          if (img) {
            gsap.to(img, {
              yPercent: -6,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
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
              <p className="section-label mb-4 sm:mb-6">Interiors / Bedroom Design</p>
              <h1 className="whitespace-pre-line text-balance">
                <span className="block font-sans font-bold text-display-lg sm:text-display-xl leading-[0.95] tracking-tight text-bone">A room designed</span>
                <span className="block font-serif italic text-display-lg sm:text-display-xl leading-[1.05] text-bone/85">for deep rest.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">ACRED designs master and guest bedrooms that feel like sanctuaries. From custom bed frames and side tables to dressing units, wardrobes, and ambient lighting — every element is chosen to help you unwind.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover">Get a free bedroom quote<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                <a href="#gallery" className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover">View designs</a>
              </div>
            </div>
            <div className="gsap-reveal lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-soft">
                <Image src="/bedroom/hero.webp" alt="ACRED bedroom interior showcase" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={introRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">Why ACRED Bedrooms?</p>
            <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Sleep is architecture</span><span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">for the body and mind.</span></h2>
            <p className="mt-6 text-base leading-relaxed text-bone-soft sm:text-lg">Your bedroom is the first thing you see in the morning and the last at night. We design for calm — warm materials, soft lighting, and clutter-free surfaces. Every detail, from the headboard height to the bedside switch placement, is considered so the room serves you without demanding attention.</p>
          </div>
        </div>
      </section>

      <section ref={galleryRef} id="gallery" className="container-acred py-16 md:py-20 lg:py-28">
        <div className="gsap-reveal mb-10 sm:mb-12">
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Bedrooms we have designed.</span></h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <div
              key={design.id}
              className="gsap-reveal group relative overflow-hidden rounded-xl bg-ink-soft cursor-hover"
              onClick={() => openPopup(design)}
            >
              <div className="relative w-full overflow-hidden aspect-[4/3]">
                <Image
                  src={design.mainImage}
                  alt={design.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="gallery-img object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-1">Bedroom</p>
                      <p className="font-sans text-sm font-medium text-white leading-snug max-w-[80%]">{design.title}</p>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      <Eye className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">
                    <Info className="h-4 w-4 text-white" />
                    <span className="text-xs font-medium text-white">View Details</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={featuresRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mb-10 sm:mb-12">
            <p className="section-label mb-4">What You Get</p>
            <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Rest, refined.</span></h2>
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
          <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">From sleep audit</span><span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">to sanctuary.</span></h2>
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
            <p className="section-label mb-4">Start your bedroom</p>
            <h2 className="text-balance max-w-2xl"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Ready to sleep in a room designed for rest?</span></h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-bone-soft">Book a free consultation. We will understand your sleep habits, measure your space, and deliver a 3D bedroom design with a transparent quote within 48 hours.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover">Book free consultation<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
              <a href="tel:+916361889281" className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-7 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover">Call +91 63618 89281</a>
            </div>
          </div>
        </div>
      </section>

      {/* Design Detail Popup */}
      {activeDesign && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/85 backdrop-blur-sm p-0 sm:p-6 overflow-y-auto"
          onClick={closePopup}
        >
          <div
            className="relative mt-0 sm:mt-12 mb-0 sm:mb-8 w-full max-w-4xl overflow-hidden rounded-none sm:rounded-2xl border-0 sm:border border-ink-line bg-ink"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink-line bg-ink/95 backdrop-blur-sm px-5 py-4 sm:px-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">Bedroom Design</p>
                <h3 className="mt-1 font-sans text-sm font-medium text-bone sm:text-lg max-w-[calc(100%-3rem)]">
                  {activeDesign.title}
                  {activeDesign.subtitle && <span className="text-bone/60"> — {activeDesign.subtitle}</span>}
                </h3>
              </div>
              <button
                onClick={closePopup}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-bone/10 text-bone transition-colors hover:bg-bone/20 cursor-hover shrink-0"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 p-4 sm:p-8">
              {/* Main Image */}
              <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl aspect-[3/4] sm:aspect-[4/3] bg-ink-soft">
                <Image
                  src={activeDesign.mainImage}
                  alt={activeDesign.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>

              {/* Storage Features */}
              <div className="rounded-lg sm:rounded-xl border border-ink-line bg-ink-soft p-4 sm:p-7">
                <p className="section-label mb-5">Storage Features</p>
                <ul className="space-y-3">
                  {activeDesign.storageFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span className="text-sm leading-relaxed text-bone-soft">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <p className="section-label mb-5">Reference Specifications</p>
                <div className="rounded-xl border border-ink-line overflow-hidden">
                  <div className="divide-y divide-ink-line">
                    {activeDesign.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 px-5 py-3.5 bg-ink-soft"
                      >
                        <span className="sm:w-40 shrink-0 text-xs font-medium uppercase tracking-wider text-bone-muted">
                          {spec.label}
                        </span>
                        <span className="text-sm leading-relaxed text-bone">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
