"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, Info, type LucideIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export interface DesignItem {
  id: string;
  title: string;
  subtitle: string;
  mainImage: string;
  /** Bulleted list — e.g. storage features, amenities, pattern description */
  features: string[];
  /** Key-value reference specifications */
  specs: { label: string; value: string }[];
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface InteriorDesignPageProps {
  /** breadcrumb-style label e.g. "Interiors / Kids Bedrooms" */
  sectionLabel: string;
  /** Hero h1 — broken into two lines, second is italic serif */
  heroTitle: { line1: string; line2: string };
  /** Body paragraph under hero h1 */
  heroDescription: string;
  /** Hero side image */
  heroImage: string;
  heroImageAlt: string;
  /** Intro band label + h2 + body */
  intro: { label: string; line1: string; line2: string; body: string };
  /** Designs to show in the gallery + popup */
  designs: DesignItem[];
  /** Headline above gallery grid */
  galleryHeadline: string;
  /** Tag shown over each gallery card and inside the popup */
  designTag: string;
  /** Section heading inside popup for the bullet list */
  featuresSectionTitle: string;
  /** Features grid */
  featuresLabel: string;
  featuresHeadline: string;
  features: FeatureItem[];
  /** Process timeline */
  processLabel: string;
  processHeadline: { line1: string; line2: string };
  processSteps: ProcessStep[];
  /** CTA */
  ctaLabel: string;
  ctaHeadline: string;
  ctaBody: string;
  ctaPrimary?: { label: string; href: string };
  ctaPhone?: string;
}

export function InteriorDesignPage(props: InteriorDesignPageProps) {
  const {
    sectionLabel,
    heroTitle,
    heroDescription,
    heroImage,
    heroImageAlt,
    intro,
    designs,
    galleryHeadline,
    designTag,
    featuresSectionTitle,
    featuresLabel,
    featuresHeadline,
    features,
    processLabel,
    processHeadline,
    processSteps,
    ctaLabel,
    ctaHeadline,
    ctaBody,
    ctaPrimary = { label: "Book free consultation", href: "/contact" },
    ctaPhone = "+91 63618 89281",
  } = props;

  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useGSAP(() => {
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
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" },
      });
    });

    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll(".gsap-reveal");
      gsap.from(items, {
        y: 50,
        opacity: 0,
        scale: 0.96,
        stagger: { each: 0.1, from: "start" },
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: galleryRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });
      items.forEach((item) => {
        const img = item.querySelector(".gallery-img");
        if (img) {
          gsap.to(img, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true },
          });
        }
      });
    }
  }, {});

  const [activeDesign, setActiveDesign] = useState<DesignItem | null>(null);

  const openPopup = useCallback((design: DesignItem) => {
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
    if (!activeDesign) return;
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
              <p className="section-label mb-4 sm:mb-6">{sectionLabel}</p>
              <h1 className="whitespace-pre-line text-balance">
                <span className="block font-sans font-bold text-display-lg sm:text-display-xl leading-[0.95] tracking-tight text-bone">{heroTitle.line1}</span>
                <span className="block font-serif italic text-display-lg sm:text-display-xl leading-[1.05] text-bone/85">{heroTitle.line2}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">{heroDescription}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={ctaPrimary.href} className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover">
                  {ctaPrimary.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <a href="#gallery" className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover">View designs</a>
              </div>
            </div>
            <div className="gsap-reveal lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-soft">
                <Image src={heroImage} alt={heroImageAlt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={introRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">{intro.label}</p>
            <h2 className="text-balance">
              <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">{intro.line1}</span>
              <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">{intro.line2}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-bone-soft sm:text-lg">{intro.body}</p>
          </div>
        </div>
      </section>

      {designs.length > 0 && (
        <section ref={galleryRef} id="gallery" className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mb-10 sm:mb-12">
            <p className="section-label mb-4">Portfolio</p>
            <h2 className="text-balance">
              <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">{galleryHeadline}</span>
            </h2>
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
                        <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-1">{designTag}</p>
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
            <p className="section-label mb-4">{featuresLabel}</p>
            <h2 className="text-balance">
              <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">{featuresHeadline}</span>
            </h2>
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
          <p className="section-label mb-4">{processLabel}</p>
          <h2 className="text-balance">
            <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">{processHeadline.line1}</span>
            <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">{processHeadline.line2}</span>
          </h2>
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
            <p className="section-label mb-4">{ctaLabel}</p>
            <h2 className="text-balance max-w-2xl">
              <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">{ctaHeadline}</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-bone-soft">{ctaBody}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={ctaPrimary.href} className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover">
                {ctaPrimary.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a href={`tel:${ctaPhone.replace(/\s+/g, "")}`} className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-7 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover">Call {ctaPhone}</a>
            </div>
          </div>
        </div>
      </section>

      {activeDesign && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/85 backdrop-blur-sm p-0 sm:p-6 overflow-y-auto" onClick={closePopup}>
          <div className="relative w-full max-w-5xl bg-ink border border-ink-line my-0 sm:my-10 rounded-none sm:rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={closePopup} className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60 cursor-hover" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-ink-soft">
                <Image src={activeDesign.mainImage} alt={activeDesign.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
              </div>
              <div className="p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[60vh] md:max-h-[80vh]">
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-2">{designTag}</p>
                <h3 className="font-sans text-xl sm:text-2xl font-medium text-bone leading-snug">{activeDesign.title}</h3>
                <p className="mt-1 text-sm text-bone-muted">{activeDesign.subtitle}</p>
                <div className="mt-6 space-y-5">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-3">{featuresSectionTitle}</h4>
                    <ul className="space-y-2">
                      {activeDesign.features.map((f, i) => (
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
                    Enquire about this design
                    <ArrowUpRight className="h-4 w-4" />
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
