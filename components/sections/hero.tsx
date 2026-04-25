"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

const disciplineList = ["Architecture", "Construction", "Real Estate", "Engineering"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl
        .from(imgRef.current, { scale: 1.06, duration: 2.2, ease: "power2.out" }, 0)
        .from(line1Ref.current, { yPercent: 110, duration: 1.2, ease: "power4.out" }, 0.15)
        .from(line2Ref.current, { yPercent: 110, duration: 1.2, ease: "power4.out" }, 0.3)
        .from(descRef.current, { opacity: 0, y: 20, duration: 0.9 }, 0.75)
        .from(ctaRef.current, { opacity: 0, y: 14, duration: 0.7 }, 0.95);

      gsap.to(imgRef.current, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night"
    >
      {/* Background image with parallax wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={imgRef} className="absolute inset-[-8%]">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90"
            alt="ACRED — architectural excellence"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/75 via-night/40 to-night/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="h-24 shrink-0" />

        <div className="mt-auto container-acred pb-16 sm:pb-20 lg:pb-24">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">

            {/* Headline */}
            <div className="lg:col-span-7">
              <div className="space-y-0">
                <div className="overflow-hidden">
                  <div ref={line1Ref}>
                    <span className="block font-sans text-[clamp(4rem,13vw,10rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white">
                      Building
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div ref={line2Ref}>
                    <span className="block font-serif text-[clamp(4rem,13vw,10rem)] italic leading-[1.05] tracking-[-0.01em] text-white/85">
                      beyond.
                    </span>
                  </div>
                </div>
              </div>

              <div ref={descRef} className="mt-8 max-w-lg">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest2 text-white/35">
                  Architecture can mean
                </p>
                <p className="text-[13px] leading-[1.75] text-white/50">
                  {site.description}
                </p>
              </div>

              <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4 sm:mt-12">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-sans text-[13px] font-medium text-white backdrop-blur-sm transition-all hover:bg-white hover:text-night hover:border-transparent cursor-hover"
                >
                  Contact us
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/architecture"
                  className="font-mono text-[10px] uppercase tracking-widest2 text-white/40 transition-colors hover:text-white/70 cursor-hover"
                >
                  Explore our work
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
