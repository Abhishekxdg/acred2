"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import type { Discipline } from "@/lib/content";
import { cn } from "@/lib/utils";

type Props = {
  discipline: Discipline;
  reverse?: boolean;
};

export function DisciplineBlock({ discipline, reverse }: Props) {
  const {
    index,
    label,
    title,
    tagline,
    capabilities,
    heroImage,
    heroImageAlt,
    slug,
  } = discipline;

  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textWrapRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const capsRef = useRef<HTMLUListElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      // Image clip-path reveal
      if (imageWrapRef.current) {
        tl.from(
          imageWrapRef.current,
          {
            clipPath: reverse
              ? "inset(0 0 0 100%)"
              : "inset(0 100% 0 0)",
            duration: 1.4,
            ease: "power4.inOut",
          },
          0
        );
      }

      // Image inner parallax
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Label
      if (labelRef.current) {
        tl.from(
          labelRef.current,
          { opacity: 0, x: reverse ? 40 : -40, duration: 0.8 },
          0.4
        );
      }

      // Title line reveal
      if (titleRef.current) {
        tl.from(
          titleRef.current,
          { opacity: 0, y: 60, duration: 1, ease: "power4.out" },
          0.5
        );
      }

      // Tagline
      if (taglineRef.current) {
        tl.from(
          taglineRef.current,
          { opacity: 0, y: 30, duration: 0.9 },
          0.7
        );
      }

      // Capabilities stagger
      if (capsRef.current) {
        const items = capsRef.current.querySelectorAll("li");
        tl.from(
          items,
          { opacity: 0, y: 16, stagger: 0.08, duration: 0.6 },
          0.9
        );
      }

      // Link
      if (linkRef.current) {
        tl.from(
          linkRef.current,
          { opacity: 0, y: 20, duration: 0.6 },
          1.1
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="container-acred py-16 sm:py-20 md:py-28">
      <div
        className={cn(
          "grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16",
          reverse ? "lg:[&>div:first-child]:order-2" : "",
        )}
      >
        {/* Image column */}
        <div className="lg:col-span-6">
          <div
            ref={imageWrapRef}
            className="group relative aspect-[1/1.08] w-full overflow-hidden bg-ink-soft sm:aspect-[4/5]"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            <div className="absolute left-3 top-3 z-10 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/70 sm:left-4 sm:top-4 sm:tracking-widest2">
              ✦ Loop · {index}
            </div>
            <div ref={imageRef} className="absolute inset-0 scale-110">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
            <div className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60 sm:bottom-4 sm:right-4 sm:tracking-widest2">
              {label.split("/")[1]?.trim()} · ✦
            </div>
          </div>
        </div>

        {/* Text column */}
        <div ref={textWrapRef} className="lg:col-span-6">
          <p ref={labelRef} className="eyebrow mb-6">{label}</p>
          <h2
            ref={titleRef}
            className="font-serif text-[clamp(2rem,8vw,4.5rem)] text-bone whitespace-pre-line text-balance"
          >
            {title}
          </h2>
          <p
            ref={taglineRef}
            className="mt-6 max-w-xl text-sm leading-relaxed text-bone-soft sm:mt-8 sm:text-base"
          >
            {tagline}
          </p>

          <ul
            ref={capsRef}
            className="mt-8 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-muted sm:mt-10 sm:gap-x-6 sm:tracking-widest2"
          >
            {capabilities.map((c, i) => (
              <li key={c} className="flex items-center gap-4 sm:gap-6">
                {c}
                {i < capabilities.length - 1 && (
                  <span className="text-bone/20">·</span>
                )}
              </li>
            ))}
          </ul>

          <Link
            ref={linkRef}
            href={`/${slug}`}
            className="group mt-10 inline-flex items-center gap-3 border-b border-bone/30 pb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bone transition-colors hover:border-gold hover:text-gold cursor-hover sm:mt-12 sm:text-xs sm:tracking-widest2"
          >
            Explore {discipline.slug.replace("-", " ")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
