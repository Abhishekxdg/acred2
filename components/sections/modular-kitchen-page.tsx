"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Ruler, Palette, ShieldCheck, Clock, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryImages = [
  { src: "/modular/Modular 1.webp", alt: "Modern white modular kitchen with island counter" },
  { src: "/modular/modular 2.webp", alt: "Sleek contemporary modular kitchen design" },
  { src: "/modular/modular 3.webp", alt: "Elegant modular kitchen with premium finishes" },
  { src: "/modular/modular 4.webp", alt: "Spacious modular kitchen layout" },
  { src: "/modular/modular 5.webp", alt: "Modular kitchen with smart storage solutions" },
  { src: "/modular/modular 6.webp", alt: "Custom modular kitchen cabinetry" },
  { src: "/modular/image 9.jpeg", alt: "Modular kitchen interior detail" },
  { src: "/modular/image 10.jpeg", alt: "Contemporary kitchen design by ACRED" },
  { src: "/modular/image 11.webp", alt: "Premium modular kitchen installation" },
  { src: "/modular/image 13.webp", alt: "Designer modular kitchen space" },
  { src: "/modular/image 14.webp", alt: "Modern kitchen with optimized workflow" },
  { src: "/modular/image 16.webp", alt: "Luxury modular kitchen finish" },
  { src: "/modular/image 17.webp", alt: "Polished modular kitchen with accent lighting" },
  { src: "/modular/image 18.webp", alt: "Warm-toned modular kitchen design" },
  { src: "/modular/image 19.webp", alt: "Compact city apartment kitchen layout" },
  { src: "/modular/image 20.webp", alt: "Grand island kitchen for entertaining" },
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

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null || prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null || prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

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
              Kitchens we have crafted.
            </span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className="gsap-reveal group relative overflow-hidden rounded-xl bg-ink-soft cursor-hover"
              onClick={() => openLightbox(i)}
            >
              <div className="relative w-full overflow-hidden aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="gallery-img object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-1">
                        Kitchen
                      </p>
                      <p className="font-sans text-sm font-medium text-white leading-snug max-w-[80%]">
                        {img.alt}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      <Eye className="h-4 w-4 text-white" />
                    </div>
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

      {/* Lightbox */}
      {lightboxIndex !== null && galleryImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-hover"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-hover sm:left-6"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-hover sm:right-6"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            className="relative mx-16 aspect-[4/3] w-full max-w-5xl sm:mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
              Kitchen
            </p>
            <p className="mt-1 font-sans text-sm font-medium text-white/90">
              {galleryImages[lightboxIndex].alt}
            </p>
            <p className="mt-1 font-mono text-[10px] text-white/50">
              {lightboxIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
