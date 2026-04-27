"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Ruler, Palette, ShieldCheck, Clock } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryImages = [
  { src: "/modular/Modular 1.jpeg", alt: "Modern white modular kitchen with island counter" },
  { src: "/modular/modular 2.jpeg", alt: "Sleek contemporary modular kitchen design" },
  { src: "/modular/modular 3.jpeg", alt: "Elegant modular kitchen with premium finishes" },
  { src: "/modular/modular 4.jpeg", alt: "Spacious modular kitchen layout" },
  { src: "/modular/modular 5.jpeg", alt: "Modular kitchen with smart storage solutions" },
  { src: "/modular/modular 6.jpeg", alt: "Custom modular kitchen cabinetry" },
  { src: "/modular/image 9.jpeg", alt: "Modular kitchen interior detail" },
  { src: "/modular/image 10.jpeg", alt: "Contemporary kitchen design by ACRED" },
  { src: "/modular/image 11.jpeg", alt: "Premium modular kitchen installation" },
  { src: "/modular/image 13.jpeg", alt: "Designer modular kitchen space" },
  { src: "/modular/image 14.jpeg", alt: "Modern kitchen with optimized workflow" },
  { src: "/modular/image 16.jpeg", alt: "Luxury modular kitchen finish" },
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

  useGSAP(
    () => {
      const sections = [heroRef, introRef, galleryRef, featuresRef, processRef, ctaRef];
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
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover"
                >
                  Get a free kitchen quote
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
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
                  src="/modular/Modular 1.jpeg"
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
              Kitchens we have crafted.
            </span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gsap-reveal group relative overflow-hidden rounded-xl bg-ink-soft ${
                i === 0 || i === 5 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className={`relative w-full ${i === 0 || i === 5 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
              <a
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover"
              >
                Book free consultation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
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
    </>
  );
}
