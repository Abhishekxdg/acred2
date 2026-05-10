"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Ruler, Palette, ShieldCheck, Clock, X, Eye, Info } from "lucide-react";
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
    title: "Sage Green & Walnut L-Shape",
    subtitle: "with Fluted Wood Backsplash",
    mainImage: "/modular/DESIGN 1/KITECHEN DESIGN 1.webp",
    storageFeatures: [
      "5 base cabinets with tandem-box drawers, handle-less push-to-open",
      "3 wall-mounted overhead units with 1 lift-up door",
      "1 corner magic-corner unit at L-junction",
      "1 full-height pantry tower in walnut veneer with internal pull-outs",
      "Integrated dustbin pull-out under sink",
      "1 open walnut spice shelf above cooktop",
    ],
    specs: [
      { label: "Size", value: "11ft x 12ft" },
      { label: "Layout", value: "L-Shaped" },
      { label: "Shutter Finish", value: "PU Matt Pro + Solid Walnut Veneer" },
      { label: "Colour Story", value: "Matte Sage Green + Warm Walnut + Cream Quartz" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint and Walnut Veneer" },
      { label: "Countertop", value: "Cream quartz with subtle warm veining" },
      { label: "Backsplash", value: "Vertical fluted solid walnut wood panels" },
      { label: "Hardware", value: "Brushed brass slim pull rebates" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-2",
    title: "Charcoal & Calacatta Marble",
    subtitle: "Premium Kitchen with Island",
    mainImage: "/modular/DESIGN 2/design 2.webp",
    storageFeatures: [
      "6 base cabinets with tandem-box drawers",
      "4 wall-mounted overhead units with 2 lift-up doors",
      "1 corner magic-corner unit",
      "1 full-height pantry tower with internal pull-outs",
      "Integrated dustbin pull-out under sink",
      "Marble-clad central island with waterfall edge and 2 cane-and-walnut bar stools",
      "Hidden coffee-station drawer integrated into island",
    ],
    specs: [
      { label: "Size", value: "14ft x 12ft" },
      { label: "Layout", value: "L-Shaped with Central Island" },
      { label: "Shutter Finish", value: "PU Matt Pro" },
      { label: "Colour Story", value: "Matte Deep Charcoal + Calacatta Marble + Brushed Brass" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint" },
      { label: "Countertop", value: "Book-matched Italian Calacatta marble" },
      { label: "Backsplash", value: "Continuous Calacatta marble (matched with countertop)" },
      { label: "Hardware", value: "Slim brushed-brass linear handles" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-3",
    title: "Cream, Terracotta & Cane",
    subtitle: "Indo-Modern with Athangudi Tiles",
    mainImage: "/modular/DESIGN 3/DESIGN3.webp",
    storageFeatures: [
      "4 base cabinets with tandem-box drawers",
      "3 wall-mounted overhead units with cane inlay panels and walnut trim",
      "1 corner magic-corner unit",
      "1 full-height pantry tower in matching cream PU",
      "Integrated dustbin pull-out under sink",
      "1 open walnut floating shelf above cooktop for brass and copper vessels",
    ],
    specs: [
      { label: "Size", value: "10ft x 9ft" },
      { label: "Layout", value: "L-Shaped" },
      { label: "Shutter Finish", value: "PU Matt + Cane Inlay + Walnut Trim" },
      { label: "Colour Story", value: "Matte Cream + Terracotta + Natural Rattan + Walnut" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint and Cane Inlay" },
      { label: "Countertop", value: "Honed beige terrazzo with cream, terracotta, ochre aggregate" },
      { label: "Backsplash", value: "Hand-painted Athangudi tiles in muted ochre, indigo, cream" },
      { label: "Hardware", value: "Brushed-brass ring handles" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-4",
    title: "Forest Green & Zellige Tile",
    subtitle: "Compact Galley Kitchen",
    mainImage: "/modular/DESIGN 4/design 4.webp",
    storageFeatures: [
      "4 base cabinets with tandem-box drawers (left run with sink)",
      "4 base cabinets with tandem-box drawers (right run with hob)",
      "4 wall-mounted overhead units with handle-less push-to-open",
      "Integrated dustbin pull-out under sink",
      "1 open walnut floating shelf above hob",
    ],
    specs: [
      { label: "Size", value: "8ft x 7ft" },
      { label: "Layout", value: "Parallel Galley" },
      { label: "Shutter Finish", value: "PU Matt Pro" },
      { label: "Colour Story", value: "Matte Deep Forest Green + Antique Brass + Black Soapstone" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint" },
      { label: "Countertop", value: "Honed black soapstone" },
      { label: "Backsplash", value: "Hand-glazed dark forest green zellige subway tile" },
      { label: "Hardware", value: "Antique-brass slim handles" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-5",
    title: "Smart-Home Walnut & Cream",
    subtitle: "U-Shape Premium Kitchen",
    mainImage: "/modular/DESIGN 5/DESIGN 5.webp",
    storageFeatures: [
      "7 base cabinets with motorized push-to-open tandem-box drawers",
      "6 wall-mounted overhead units with motorized push-to-open",
      "1 corner magic-corner unit",
      "1 full-height pantry tower with internal pull-outs",
      "Integrated dustbin pull-out under sink",
      "Hidden coffee-station drawer with integrated coffee machine",
      "Built-in oven and microwave",
    ],
    specs: [
      { label: "Size", value: "11ft x 9ft" },
      { label: "Layout", value: "U-Shaped" },
      { label: "Shutter Finish", value: "PU Matt Pro + Fluted Smoked Walnut" },
      { label: "Colour Story", value: "Matte Cream + Smoked Walnut + Calacatta Marble" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint and Walnut Veneer" },
      { label: "Countertop", value: "Continuous Italian Calacatta marble" },
      { label: "Backsplash", value: "Calacatta marble matched with countertop" },
      { label: "Hardware", value: "Brushed nickel sensor handles, push-to-open" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-6",
    title: "Japandi Pale Oak & Olive",
    subtitle: "U-Shape Kitchen",
    mainImage: "/modular/DESIGN 6/DESIGN 6.webp",
    storageFeatures: [
      "5 base cabinets with tandem-box drawers, handle-less push-to-open",
      "3 wall-mounted overhead units in light ash-oak veneer",
      "1 corner magic-corner unit at L-junction",
      "1 full-height pantry tower in soft olive laminate",
      "Integrated dustbin pull-out under sink",
      "1 solid oak floating shelf above cooktop with linen pendant overhead",
    ],
    specs: [
      { label: "Size", value: "10ft x 8ft" },
      { label: "Layout", value: "U-Shaped" },
      { label: "Shutter Finish", value: "Light Ash-Oak Veneer + Matte Olive Laminate" },
      { label: "Colour Story", value: "Pale Oak + Soft Olive + Cream Quartz" },
      { label: "Cabinet Material", value: "BWP Plywood with Veneer and Laminate" },
      { label: "Countertop", value: "Cream quartz with subtle veining" },
      { label: "Backsplash", value: "Continuous cream quartz (matched with countertop)" },
      { label: "Hardware", value: "Handle-less push-to-open with finger-pull rebate" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-7",
    title: "Traditional South Indian Teak & Cane",
    subtitle: "with Brass",
    mainImage: "/modular/DESIGN 7/DESIGN 7.webp",
    storageFeatures: [
      "5 base cabinets in carved teak with brass cup-pulls",
      "3 wall-mounted overhead units with cane inlay panels framed in teak",
      "1 corner magic-corner unit",
      "1 full-height pantry tower in deep polished teak",
      "Integrated dustbin pull-out under sink",
      "Open solid teak shelf above hob for brass and copper vessels",
      "Small wall-mounted brass pooja niche at entry",
    ],
    specs: [
      { label: "Size", value: "11ft x 9ft" },
      { label: "Layout", value: "L-Shaped" },
      { label: "Shutter Finish", value: "Polished Teak Veneer + Cane Inlay" },
      { label: "Colour Story", value: "Deep Polished Teak + Natural Cane + Black Cudappah" },
      { label: "Cabinet Material", value: "BWP Plywood with Solid Teak Veneer" },
      { label: "Countertop", value: "Honed black Cudappah stone" },
      { label: "Backsplash", value: "Hand-painted Athangudi tiles in cream and indigo" },
      { label: "Hardware", value: "Polished brass cup-pulls" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-8",
    title: "Open-Plan Modern Family Kitchen",
    subtitle: "with Breakfast Peninsula",
    mainImage: "/modular/DESIGN 8/design 8.webp",
    storageFeatures: [
      "6 base cabinets with tandem-box drawers",
      "4 wall-mounted overhead units with handle-less push-to-open",
      "1 corner magic-corner unit",
      "1 full-height pantry tower",
      "Integrated dustbin pull-out under sink",
      "Breakfast peninsula in book-matched walnut veneer with waterfall edge",
      "3 cane-and-walnut bar stools tucked under peninsula",
      "Small wine refrigerator and pull-out drawer storage in peninsula",
    ],
    specs: [
      { label: "Size", value: "13ft x 11ft" },
      { label: "Layout", value: "U-Shaped with Breakfast Peninsula" },
      { label: "Shutter Finish", value: "PU Matt Pro + Walnut Veneer Waterfall" },
      { label: "Colour Story", value: "Matte Off-White + Smoked Walnut + Cream Quartz" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint and Walnut Veneer" },
      { label: "Countertop", value: "Cream quartz with subtle veining" },
      { label: "Backsplash", value: "Cream quartz matched with countertop" },
      { label: "Hardware", value: "Handle-less push-to-open" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-9",
    title: "Compact 2BHK Honest L-Shape",
    subtitle: "with White & Walnut",
    mainImage: "/modular/DESIGN 9/design 10.webp",
    storageFeatures: [
      "4 base cabinets with tandem-box drawers",
      "3 wall-mounted overhead units with handle-less push-to-open",
      "1 corner magic-corner unit",
      "1 full-height pantry tower in walnut veneer",
      "Integrated dustbin pull-out under sink",
      "Single open walnut shelf above sink with three labelled glass spice jars",
    ],
    specs: [
      { label: "Size", value: "8ft x 7ft" },
      { label: "Layout", value: "Compact L-Shaped" },
      { label: "Shutter Finish", value: "PU Matt Pro + Walnut Veneer" },
      { label: "Colour Story", value: "Matte Off-White + Warm Walnut + Cream Quartz" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint and Walnut Veneer" },
      { label: "Countertop", value: "Cream quartz with soft veining" },
      { label: "Backsplash", value: "White matte ceramic subway tile with thin grey grout" },
      { label: "Hardware", value: "Slim brushed-stainless steel handles" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-10",
    title: "Charcoal & Walnut",
    subtitle: "U-Shape with Calacatta Island",
    mainImage: "/modular/image 10.webp",
    storageFeatures: [
      "7 base cabinets with tandem-box drawers",
      "5 wall-mounted overhead units with 2 lift-up doors",
      "2 corner magic-corner units (one at each L-junction)",
      "1 full-height pantry tower in smoked walnut veneer",
      "Integrated dustbin pull-out under sink",
      "Built-in oven and microwave column",
      "Hidden coffee-station drawer",
    ],
    specs: [
      { label: "Size", value: "12ft x 10ft" },
      { label: "Layout", value: "U-Shaped" },
      { label: "Shutter Finish", value: "PU Matt Pro + Smoked Walnut Veneer" },
      { label: "Colour Story", value: "Matte Charcoal + Smoked Walnut + Calacatta Marble" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint and Walnut Veneer" },
      { label: "Countertop", value: "Book-matched Italian Calacatta marble" },
      { label: "Backsplash", value: "Calacatta marble matched with countertop" },
      { label: "Hardware", value: "Slim brushed-brass linear handles" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-11",
    title: "Sage Green & Brass",
    subtitle: "U-Shape with Fluted Walnut Accents",
    mainImage: "/modular/DESIGN11/design 11.webp",
    storageFeatures: [
      "6 base cabinets with tandem-box drawers",
      "4 wall-mounted overhead units with 1 lift-up door",
      "2 corner magic-corner units",
      "1 full-height pantry tower in walnut veneer",
      "Integrated dustbin pull-out under sink",
      "Open walnut spice shelf above cooktop with handcrafted ceramic spice jars",
    ],
    specs: [
      { label: "Size", value: "11ft x 9ft" },
      { label: "Layout", value: "U-Shaped" },
      { label: "Shutter Finish", value: "PU Matt Pro + Solid Walnut Veneer" },
      { label: "Colour Story", value: "Matte Sage Green + Walnut + Cream Quartz" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint and Walnut Veneer" },
      { label: "Countertop", value: "Cream quartz with subtle warm veining" },
      { label: "Backsplash", value: "Vertical fluted solid walnut wood panels" },
      { label: "Hardware", value: "Brushed brass slim pull rebates" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-12",
    title: "All-White Minimalist",
    subtitle: "with Wood Floor",
    mainImage: "/modular/design 12/design 12.webp",
    storageFeatures: [
      "6 base cabinets with tandem-box drawers",
      "5 wall-mounted overhead units with handle-less push-to-open",
      "2 corner magic-corner units",
      "1 full-height pantry tower",
      "Integrated dustbin pull-out under sink",
      "Single open pale oak shelf above sink",
    ],
    specs: [
      { label: "Size", value: "11ft x 9ft" },
      { label: "Layout", value: "U-Shaped" },
      { label: "Shutter Finish", value: "PU Matt Pro" },
      { label: "Colour Story", value: "Matte White + Pale Oak Floor + Cream Quartz" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint" },
      { label: "Countertop", value: "Cream quartz with soft veining" },
      { label: "Backsplash", value: "White matte ceramic subway tile with thin grey grout" },
      { label: "Hardware", value: "Slim brushed-stainless steel handles" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-13",
    title: "Cream & Cane",
    subtitle: "with Athangudi Floor",
    mainImage: "/modular/DESIGN 13/DESIGN 13.webp",
    storageFeatures: [
      "6 base cabinets with tandem-box drawers",
      "5 wall-mounted overhead units with cane inlay panels framed in walnut",
      "2 corner magic-corner units",
      "1 full-height pantry tower in matte cream PU",
      "Integrated dustbin pull-out under sink",
      "Open walnut shelf above hob with brass and copper vessels",
    ],
    specs: [
      { label: "Size", value: "11ft x 9ft" },
      { label: "Layout", value: "U-Shaped" },
      { label: "Shutter Finish", value: "PU Matt + Cane Inlay + Walnut Trim" },
      { label: "Colour Story", value: "Matte Cream + Natural Cane + Walnut" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint and Cane Inlay" },
      { label: "Countertop", value: "Honed beige terrazzo with cream and ochre aggregate" },
      { label: "Backsplash", value: "Hand-painted Athangudi tiles in muted cream and indigo" },
      { label: "Hardware", value: "Brushed brass cup-pulls" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
  {
    id: "design-14",
    title: "Sandstone & Cream",
    subtitle: "with Brass and Open Shelving",
    mainImage: "/modular/DESIGN 14/DESIGN 14.webp",
    storageFeatures: [
      "6 base cabinets with tandem-box drawers",
      "4 wall-mounted overhead units with handle-less push-to-open",
      "2 corner magic-corner units",
      "1 full-height pantry tower",
      "Integrated dustbin pull-out under sink",
      "Open walnut shelf with brass spice jars",
    ],
    specs: [
      { label: "Size", value: "12ft x 10ft" },
      { label: "Layout", value: "U-Shaped" },
      { label: "Shutter Finish", value: "PU Matt + Sandstone-Look Laminate" },
      { label: "Colour Story", value: "Soft Cream + Sandstone Beige + Brushed Brass" },
      { label: "Cabinet Material", value: "BWP Plywood with PU Paint and Stone-Look Laminate" },
      { label: "Countertop", value: "Cream-and-beige quartz with sandstone vein" },
      { label: "Backsplash", value: "Sandstone-look ceramic large-format slab" },
      { label: "Hardware", value: "Brushed brass slim handles" },
      { label: "Properties", value: "Scratch / Stain / Moisture / Heat Resistant" },
      { label: "Durability", value: "15+ Years" },
    ],
  },
];

const features = [
  {
    icon: Ruler,
    title: "Space-Optimized Layouts",
    desc: "Every inch planned with the kitchen triangle in mind — prep, cook, and serve flow seamlessly.",
  },
  {
    icon: Palette,
    title: "Premium Finishes",
    desc: "Choose from acrylic, laminate, PU paint, or veneer. Hardware by Hettich, Blum, and Grass.",
  },
  {
    icon: ShieldCheck,
    title: "10-Year Warranty",
    desc: "Our cabinetry, hinges, and finishes are covered for a full decade — no questions asked.",
  },
  {
    icon: Clock,
    title: "45-Day Delivery",
    desc: "From finalised design to installed kitchen — our factory-to-site pipeline is strict and swift.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Site Measurement",
    body: "Our designer visits your home to measure every wall, column, and pipeline. Accuracy at this stage saves days later.",
  },
  {
    step: "02",
    title: "3D Design & Render",
    body: "See your kitchen in photorealistic 3D before a single board is cut. Change colours, layouts, and finishes in real time.",
  },
  {
    step: "03",
    title: "Material Selection",
    body: "Pick from curated swatches at our studio — countertops, shutters, handles, and basket systems tailored to your budget.",
  },
  {
    step: "04",
    title: "Factory Production",
    body: "CNC-precision cutting, edge-banding, and assembly in our quality-controlled factory environment.",
  },
  {
    step: "05",
    title: "Installation",
    body: "Trained crew installs, levels, and tests every drawer, hinge, and shelf. We leave only when it is perfect.",
  },
  {
    step: "06",
    title: "Handover & Care",
    body: "A detailed walk-through, care guide, and our care team on speed dial for anything you need post-install.",
  },
];

export function ModularKitchenPage() {
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

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

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28">
        <div className="container-acred">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="gsap-reveal lg:col-span-7">
              <p className="section-label mb-4 sm:mb-6">Interiors / Modular Kitchen</p>
              <h1 className="whitespace-pre-line text-balance">
                <span className="block font-sans font-bold text-display-lg sm:text-display-xl leading-[0.95] tracking-tight text-bone">
                  The heart of your home,
                </span>
                <span className="block font-serif italic text-display-lg sm:text-display-xl leading-[1.05] text-bone/85">
                  built around how you cook.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">
                ACRED designs modular kitchens that are as functional as they are beautiful.
                From compact city apartments to expansive villa layouts, every unit is precision-built
                to fit your space, your habits, and your taste.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover"
                >
                  Get a free kitchen quote
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#gallery"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover"
                >
                  View designs
                </a>
              </div>
            </div>
            <div className="gsap-reveal lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-soft">
                <Image
                  src="/modular/Modular 1.webp"
                  alt="ACRED modular kitchen showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section ref={introRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">Why Modular?</p>
            <h2 className="text-balance">
              <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
                Built in the factory.
              </span>
              <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">
                Perfected in your home.
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-bone-soft sm:text-lg">
              Unlike traditional carpentry, modular kitchens are manufactured in a controlled environment
              using CNC machines for millimetre-perfect cuts. This means faster installation, zero on-site mess,
              and the ability to disassemble or expand your kitchen in the future. Every cabinet, drawer, and shelf
              is engineered to last — and designed to impress.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={galleryRef} id="gallery" className="container-acred py-16 md:py-20 lg:py-28">
        <div className="gsap-reveal mb-10 sm:mb-12">
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="text-balance">
            <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
              Explore Designs
            </span>
          </h2>
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
                      <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-1">
                        Kitchen
                      </p>
                      <p className="font-sans text-sm font-medium text-white leading-snug max-w-[80%]">
                        {design.title}
                      </p>
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

      {/* Features */}
      <section ref={featuresRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mb-10 sm:mb-12">
            <p className="section-label mb-4">What You Get</p>
            <h2 className="text-balance">
              <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
                Precision, quality, and peace of mind.
              </span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="gsap-reveal rounded-xl border border-ink-line bg-ink p-6 sm:p-8"
              >
                <f.icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-sans text-base font-medium text-bone">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="container-acred py-16 md:py-20 lg:py-28">
        <div className="gsap-reveal mb-10 sm:mb-12">
          <p className="section-label mb-4">How It Works</p>
          <h2 className="text-balance">
            <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
              From first sketch to first meal,
            </span>
            <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">
              six steps. Zero stress.
            </span>
          </h2>
        </div>
        <div className="grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <div
              key={s.step}
              className="gsap-reveal border border-ink-line bg-ink-soft p-6 sm:p-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                {s.step}
              </p>
              <h3 className="mt-3 font-sans text-base font-medium text-bone">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="border-t border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal flex flex-col items-center text-center">
            <p className="section-label mb-4">Start your kitchen</p>
            <h2 className="text-balance max-w-2xl">
              <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
                Ready to cook in a kitchen you love?
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-bone-soft">
              Book a free consultation with our kitchen designers. We will measure your space,
              understand your cooking style, and deliver a 3D design with a transparent quote —
              all within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover"
              >
                Book free consultation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+916361889281"
                className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-7 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover"
              >
                Call +91 63618 89281
              </a>
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
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">Modular Kitchen</p>
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
