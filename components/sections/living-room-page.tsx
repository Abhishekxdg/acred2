"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sofa, Lamp, Palette, ShieldCheck, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryImages = [
  { src: "/living-room/image 13.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 4.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 19.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 2.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 15.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 8.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 21.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 6.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 11.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 1.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 18.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 5.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 14.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 3.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 20.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 7.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 16.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 10.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 9.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 17.webp", alt: "Living room interior by ACRED" },
  { src: "/living-room/image 12.webp", alt: "Living room interior by ACRED" },
];

const features = [
  { icon: Sofa, title: "Custom Seating", desc: "Tailored sofas, sectionals, and lounge chairs built to your dimensions and fabric preferences." },
  { icon: Lamp, title: "Layered Lighting", desc: "Ambient, task, and accent lighting designed together for mood and function in every hour." },
  { icon: Palette, title: "Curated Décor", desc: "Wall treatments, art placement, rugs, and accessories that reflect your personal style." },
  { icon: ShieldCheck, title: "10-Year Warranty", desc: "All built-in furniture, TV units, and storage come with a full decade of coverage." },
];

const processSteps = [
  { step: "01", title: "Lifestyle Interview", body: "We learn how you use the space — entertaining, family time, work-from-home — so the design fits your real life." },
  { step: "02", title: "Space Planning", body: "Furniture layouts optimised for flow, conversation zones, and natural light paths." },
  { step: "03", title: "3D Visualisation", body: "Photorealistic renders of your living room before any material is ordered." },
  { step: "04", title: "Material & Fabric Selection", body: "Visit our studio to touch and see every finish, textile, and hardware option." },
  { step: "05", title: "Fabrication & Install", body: "Precision-built TV units, seating, and storage installed by our trained crew." },
  { step: "06", title: "Styling & Handover", body: "We place every cushion, frame, and plant. You walk into a finished room, not a work site." },
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

export function LivingRoomPage() {
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
              <p className="section-label mb-4 sm:mb-6">Interiors / Living Room</p>
              <h1 className="whitespace-pre-line text-balance">
                <span className="block font-sans font-bold text-display-lg sm:text-display-xl leading-[0.95] tracking-tight text-bone">Where your family</span>
                <span className="block font-serif italic text-display-lg sm:text-display-xl leading-[1.05] text-bone/85">gathers and memories unfold.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">ACRED designs living spaces that balance beauty with everyday comfort. From TV units and seating arrangements to lighting and décor, every element is curated to reflect your lifestyle and taste.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover">Get a free design quote<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                <a href="#gallery" className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover">View designs</a>
              </div>
            </div>
            <div className="gsap-reveal lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-soft">
                <Image src="/living-room/hero.webp" alt="ACRED living room interior showcase" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={introRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">Why ACRED Living Rooms?</p>
            <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Designed for living,</span><span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">not just looking good.</span></h2>
            <p className="mt-6 text-base leading-relaxed text-bone-soft sm:text-lg">A living room should work as hard as you do — morning coffee, evening conversations, weekend movie marathons. We plan every zone with intention: seating that invites dialogue, lighting that shifts with the day, and storage that hides the clutter while keeping essentials within reach. The result is a space that feels effortless because every detail was considered.</p>
          </div>
        </div>
      </section>

      <section ref={galleryRef} id="gallery" className="container-acred py-16 md:py-20 lg:py-28">
        <div className="gsap-reveal mb-10 sm:mb-12">
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Living rooms we have brought to life.</span></h2>
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
                        <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold mb-1">Living Room</p>
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
            <p className="text-bone-muted">Images coming soon. Add your living room photos to <code className="font-mono text-sm text-gold">/public/living-room/</code>.</p>
          </div>
        )}
      </section>

      <section ref={featuresRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mb-10 sm:mb-12">
            <p className="section-label mb-4">What You Get</p>
            <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Comfort, craft, and character.</span></h2>
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
          <h2 className="text-balance"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">From blank canvas to</span><span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">your favourite room.</span></h2>
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
            <p className="section-label mb-4">Start your living room</p>
            <h2 className="text-balance max-w-2xl"><span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Ready for a living room you actually want to live in?</span></h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-bone-soft">Book a free consultation. We will visit your space, understand how you use it, and deliver a 3D design with a transparent quote within 48 hours.</p>
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
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">Living Room</p>
            <p className="mt-1 font-sans text-sm font-medium text-white/90">{galleryImages[lightboxIndex].alt}</p>
            <p className="mt-1 font-mono text-[10px] text-white/50">{lightboxIndex + 1} / {galleryImages.length}</p>
          </div>
        </div>
      )}
    </>
  );
}
