"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, DoorOpen, Sparkles, Palette, ShieldCheck, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryImages: { src: string; alt: string }[] = [
  { src: "/foyer/IMAGE%201.webp", alt: "Foyer design 1" },
  { src: "/foyer/IMAGE%202.webp", alt: "Foyer design 2" },
  { src: "/foyer/IMAGE%203.webp", alt: "Foyer design 3" },
  { src: "/foyer/IMAGE%204%20.webp", alt: "Foyer design 4" },
  { src: "/foyer/IMAGE%205.webp", alt: "Foyer design 5" },
  { src: "/foyer/IMAGE%206.webp", alt: "Foyer design 6" },
  { src: "/foyer/IMAGE%207.webp", alt: "Foyer design 7" },
  { src: "/foyer/IMAGE%208.webp", alt: "Foyer design 8" },
  { src: "/foyer/IMAGE%209.webp", alt: "Foyer design 9" },
  { src: "/foyer/IMAGE%2010.webp", alt: "Foyer design 10" },
  { src: "/foyer/IMAGE%2012.webp", alt: "Foyer design 12" },
  { src: "/foyer/IMAGE%2013.webp", alt: "Foyer design 13" },
];

const features = [
  { icon: DoorOpen, title: "Smart Entryways", desc: "Foyer consoles and shoe cabinets that make a first impression while hiding clutter." },
  { icon: Sparkles, title: "Statement Design", desc: "Mirrors, lighting, and surfaces that welcome guests with warmth and style." },
  { icon: Palette, title: "Material Harmony", desc: "Woods, stones, and metals balancing contemporary aesthetics with everyday durability." },
  { icon: ShieldCheck, title: "10-Year Warranty", desc: "All foyer cabinetry, finishes, and hardware covered for a full decade." },
];

const processSteps = [
  { step: "01", title: "Lifestyle Interview", body: "We understand how you enter, store, and greet before sketching a single line." },
  { step: "02", title: "Flow Planning", body: "Entryway circulation, storage zones, and visual focal points planned for convenience." },
  { step: "03", title: "3D Visualisation", body: "Photorealistic renders of your foyer with lighting, materials, and furniture layouts." },
  { step: "04", title: "Material Selection", body: "Surfaces, handles, mirrors, and lighting chosen together at our studio." },
  { step: "05", title: "Precision Build", body: "Consoles, cabinets, and wall panels built to exact dimensions and finish specs." },
  { step: "06", title: "Welcoming Handover", body: "Installed, styled, and ready to greet every guest who walks through your door." },
];

function useReveal(refs: React.RefObject<HTMLElement | null>[]) {
  useGSAP(() => {
    refs.forEach((ref) => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll(".gsap-reveal");
      gsap.from(items, { y: 30, opacity: 0, stagger: 0.08, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" } });
    });
  }, {});
}

export function FoyerPage() {
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  useReveal([heroRef, introRef, galleryRef, featuresRef, processRef, ctaRef]);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent("popupOpen"));
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
    window.dispatchEvent(new CustomEvent("popupClose"));
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

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28">
        <div className="container-acred">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="gsap-reveal lg:col-span-7">
              <p className="section-label mb-4 sm:mb-6">Interiors / Foyer</p>
              <h1 className="whitespace-pre-line text-balance">
                <span className="block font-sans font-bold text-display-lg sm:text-display-xl leading-[0.95] tracking-tight text-bone">The first impression</span>
                <span className="block font-serif italic text-display-lg sm:text-display-xl leading-[1.05] text-bone/85">that welcomes you home.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">ACRED designs foyer spaces that set the tone for your entire home. From sleek entryway consoles to hidden shoe storage — every piece balances beauty with the practicality of daily arrivals and departures.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover">Get a free design quote<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                <a href="#gallery" className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover">View designs</a>
              </div>
            </div>
            <div className="gsap-reveal lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-soft">
                <Image src="/foyer/hero.webp" alt="ACRED foyer interior showcase" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={introRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">Why ACRED Foyer?</p>
            <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Where function</span><span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">meets first impressions.</span></h2>
            <p className="mt-6 text-base leading-relaxed text-bone-soft sm:text-lg">The foyer is the first space guests see and the last one you use before leaving. We design entryways that make a statement — with intelligent storage, welcoming lighting, and surfaces that stay pristine through daily wear. Every console and cabinet is crafted to hide clutter while showcasing your personal style.</p>
          </div>
        </div>
      </section>

      <section ref={galleryRef} id="gallery" className="container-acred py-16 md:py-20 lg:py-28">
        <div className="gsap-reveal mb-10 sm:mb-12">
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Entryways we have designed.</span></h2>
        </div>
        {galleryImages.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div key={img.src} className="gsap-reveal group relative overflow-hidden rounded-xl bg-ink-soft cursor-hover" onClick={() => openLightbox(i)}>
                <div className="relative w-full aspect-[4/3]">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-1">Foyer</p>
                        <p className="font-sans text-sm font-medium text-white leading-snug max-w-[80%]">{img.alt}</p>
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
        ) : (
          <div className="gsap-reveal rounded-xl border border-ink-line bg-ink-soft p-12 text-center">
            <p className="text-bone-muted">Images coming soon. Add your foyer photos to <code className="font-mono text-sm text-gold">/public/foyer/</code>.</p>
          </div>
        )}
      </section>

      <section ref={featuresRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mb-10 sm:mb-12">
            <p className="section-label mb-4">What You Get</p>
            <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Style and storage, unified.</span></h2>
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
          <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">From lifestyle audit</span><span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">to welcoming space.</span></h2>
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
            <p className="section-label mb-4">Start your foyer</p>
            <h2 className="text-balance max-w-2xl"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Ready to make an entrance that lasts?</span></h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-bone-soft">Book a free consultation. We will assess your entryway, understand your daily flow, and deliver a 3D design with a transparent quote within 48 hours.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover">Book free consultation<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
              <a href="tel:+916361889281" className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-7 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover">Call +91 63618 89281</a>
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && galleryImages[lightboxIndex] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closeLightbox}>
          <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-hover" aria-label="Close"><X className="h-5 w-5" /></button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-hover sm:left-6" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-hover sm:right-6" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
          <div className="relative mx-4 aspect-[3/4] sm:aspect-[4/3] w-full max-w-5xl sm:mx-20" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].alt} fill sizes="100vw" className="object-contain" priority loading="eager" />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">Foyer</p>
            <p className="mt-1 font-sans text-sm font-medium text-white/90">{galleryImages[lightboxIndex].alt}</p>
            <p className="mt-1 font-mono text-[10px] text-white/50">{lightboxIndex + 1} / {galleryImages.length}</p>
          </div>
        </div>
      )}
    </>
  );
}
