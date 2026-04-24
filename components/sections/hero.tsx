"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { site } from "@/lib/content";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const subtaglineRef = useRef<HTMLParagraphElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (wordmarkRef.current) {
        const splitName = new SplitText(wordmarkRef.current, { type: "chars" });
        tl.from(
          splitName.chars,
          {
            yPercent: 120,
            opacity: 0,
            stagger: 0.03,
            duration: 1.2,
            ease: "power4.out",
          },
          0
        );
      }

      if (subtitleRef.current) {
        tl.from(
          subtitleRef.current,
          { opacity: 0, y: 20, duration: 0.8 },
          0.6
        );
      }

      if (manifestoRef.current) {
        tl.from(
          manifestoRef.current,
          { opacity: 0, y: 30, duration: 0.9 },
          0.9
        );
      }

      if (taglineRef.current) {
        const splitTagline = new SplitText(taglineRef.current, { type: "words" });
        tl.from(
          splitTagline.words,
          {
            yPercent: 100,
            opacity: 0,
            stagger: 0.04,
            duration: 1,
            ease: "power4.out",
          },
          1.1
        );
      }

      if (subtaglineRef.current) {
        tl.from(
          subtaglineRef.current,
          { opacity: 0, y: 20, duration: 0.8 },
          1.5
        );
      }

      if (scrollCueRef.current) {
        tl.from(scrollCueRef.current, { opacity: 0, duration: 1 }, 2);
        gsap.to(scrollCueRef.current, {
          y: 12,
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: "sine.inOut",
        });
      }

      // Parallax fade on scroll
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 80,
        opacity: 0.3,
        ease: "none",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16"
    >
      {/* Wordmark */}
      <div className="w-full max-w-6xl text-center">
        <h1
          ref={wordmarkRef}
          className="font-serif text-[clamp(2.9rem,15vw,10rem)] leading-none tracking-[0.18em] text-bone sm:tracking-[0.24em] md:tracking-[0.35em]"
        >
          {site.name}
        </h1>
        <p
          ref={subtitleRef}
          className="mx-auto mt-5 max-w-[22rem] text-pretty font-mono text-[9px] uppercase leading-relaxed tracking-[0.22em] text-bone-muted sm:mt-6 sm:max-w-none sm:text-[10px] sm:tracking-widest2 md:text-xs"
        >
          Architecture · Construction · Real Estate · Engineering · Development
        </p>
      </div>

      {/* Manifesto lead */}
      <div ref={manifestoRef} className="mx-auto mt-16 max-w-4xl text-center sm:mt-24">
        <p className="eyebrow mb-6 sm:mb-8">
          <span className="text-gold">✦</span>&nbsp;&nbsp;{site.manifesto}
        </p>
        <p
          ref={taglineRef}
          className="font-serif text-[clamp(1.85rem,8vw,3rem)] text-balance text-bone"
        >
          {site.tagline}
        </p>
        <p
          ref={subtaglineRef}
          className="mt-3 font-serif text-[clamp(1.6rem,7vw,3rem)] text-balance text-bone-muted sm:mt-4"
        >
          {site.subtagline}
        </p>

        <p className="mx-auto mt-10 max-w-[24rem] text-pretty font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-bone-muted sm:mt-12 sm:max-w-none sm:text-xs sm:tracking-widest2">
          One partner &nbsp;<span className="text-gold">✦</span>&nbsp; Five disciplines &nbsp;
          <span className="text-gold">✦</span>&nbsp; From land to legacy
        </p>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
          Scroll
        </span>
      </div>
    </section>
  );
}
