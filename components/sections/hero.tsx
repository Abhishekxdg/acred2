"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import { HeroSlider } from "@/components/hero-slider";

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
        .from(line1Ref.current, { yPercent: 110, duration: 1.2, ease: "power4.out" }, 0.15)
        .from(line2Ref.current, { yPercent: 110, duration: 1.2, ease: "power4.out" }, 0.3)
        .from(descRef.current, { opacity: 0, y: 20, duration: 0.9 }, 0.75)
        .from(ctaRef.current, { opacity: 0, y: 14, duration: 0.7 }, 0.95);
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
        <HeroSlider />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/75 via-night/40 to-night/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="h-14 shrink-0 sm:h-20 lg:h-24" />

        <div className="flex flex-1 flex-col justify-center container-acred pb-10 translate-y-[12%] sm:mt-auto sm:flex-none sm:translate-y-0 sm:pb-16 lg:pb-24">
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-16">

            {/* Headline */}
            <div className="lg:col-span-7">
              <div className="space-y-0">
                <div className="overflow-hidden pb-[0.08em]">
                  <div ref={line1Ref}>
                    <span className="block font-sans text-[clamp(3.25rem,10vw,10rem)] font-bold leading-[0.95] tracking-normal text-white">
                      Building
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div ref={line2Ref}>
                    <span className="block font-serif text-[clamp(3.25rem,10vw,10rem)] italic leading-[1.05] tracking-normal text-white/85">
                      beyond.
                    </span>
                  </div>
                </div>
              </div>

              <div ref={descRef} className="mt-6 max-w-xl sm:mt-8">
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-white/35 leading-relaxed whitespace-nowrap">
                  Architecture · Engineering · Construction · Real Estate · Development
                </p>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-widest2 text-white/55 whitespace-nowrap">
                  One Integrated Studio · Zero Compromise
                </p>
              </div>

              <div ref={ctaRef} className="mt-8 sm:mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-sans text-[13px] font-medium text-white backdrop-blur-sm transition-all hover:bg-white hover:text-night hover:border-transparent cursor-hover sm:px-7 sm:py-3.5"
                >
                  Contact us
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
