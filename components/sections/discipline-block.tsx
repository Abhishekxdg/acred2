"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import type { Discipline } from "@/lib/content";
import { cn } from "@/lib/utils";

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
  );
  if (!match) return null;
  const id = match[1];
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&playsinline=1&modestbranding=1&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&vq=hd2160`;
}

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
    capabilityLinks,
    heroImage,
    heroImageAlt,
    heroVideo,
    slug,
  } = discipline;

  const youtubeEmbed = heroVideo ? getYouTubeEmbedUrl(heroVideo) : null;

  const sectionRef = useRef<HTMLElement>(null);
  const mediaWrapRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
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

      // Media opacity reveal
      if (mediaWrapRef.current) {
        tl.from(
          mediaWrapRef.current,
          {
            opacity: 0,
            duration: 1.4,
            ease: "power4.inOut",
          },
          0
        );
      }

      // Media inner parallax (images only)
      if (mediaRef.current && !heroVideo) {
        gsap.to(mediaRef.current, {
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

      // Label fade-in-up
      if (labelRef.current) {
        tl.from(
          labelRef.current,
          { opacity: 0, y: 20, duration: 0.8 },
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
    <section ref={sectionRef} className="container-acred py-10 sm:py-12 md:py-16 lg:py-20">
      <div
        className={cn(
          "grid items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-16",
          reverse ? "lg:[&>div:first-child]:order-2" : "",
        )}
      >
        {/* Media column */}
        <div className="lg:col-span-6 border-0">
          <div
            ref={mediaWrapRef}
            className={cn(
              "group relative w-full overflow-hidden border-0",
              "aspect-[4/5]"
            )}
          >
            {heroVideo ? (
              youtubeEmbed ? (
                <iframe
                  src={youtubeEmbed}
                  allow="autoplay; encrypted-media"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
                  style={{
                    width: '400%',
                    height: '400%',
                    pointerEvents: 'none',
                    opacity: '0.999'
                  }}
                  tabIndex={-1}
                  loading="eager"
                />
              ) : (
                <div className="absolute inset-0">
                  <video
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                    poster={heroImage}
                    muted
                    disablePictureInPicture
                    controls={false}
                    controlsList="nodownload nofullscreen noremoteplayback"
                  >
                    <source src={heroVideo} type="video/mp4" />
                  </video>
                  {/* Transparent overlay blocks native browser video controls */}
                  <div className="absolute inset-0 z-10" />
                </div>
              )
            ) : (
              <>
                <div className="absolute left-3 top-3 z-10 font-mono text-[10px] uppercase tracking-widest2 text-white/60 sm:left-4 sm:top-4">
                  ✦ Loop · {index}
                </div>
                <div ref={mediaRef} className="absolute inset-0 scale-110">
                  <Image
                    src={heroImage}
                    alt={heroImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" />
                <div className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-widest2 text-white/50 sm:bottom-4 sm:right-4">
                  {label.split("/")[1]?.trim() || label} · ✦
                </div>
              </>
            )}
          </div>
        </div>

        {/* Text column */}
        <div ref={textWrapRef} className="lg:col-span-6">
          <p ref={labelRef} className="section-label mb-4 sm:mb-6">
            {label}
          </p>
          <h2 ref={titleRef} className="whitespace-pre-line text-balance">
            <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
              {title.split(" ").slice(0, -1).join(" ")}
            </span>
            <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">
              {title.split(" ").slice(-1)[0]}
            </span>
          </h2>
          <p
            ref={taglineRef}
            className="mt-4 max-w-xl text-sm leading-relaxed text-bone-soft sm:mt-6 sm:text-base"
          >
            {tagline}
          </p>

          <ul
            ref={capsRef}
            className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-muted sm:mt-8 sm:gap-x-6"
          >
            {capabilities.map((c, i) => {
              const capLink = capabilityLinks?.[i];
              return (
                <li key={c} className="flex items-center gap-3 sm:gap-6">
                  {capLink ? (
                    <Link href={capLink} className="hover:text-gold transition-colors opacity-75 hover:opacity-100 cursor-hover">
                      {c}
                    </Link>
                  ) : (
                    <span>{c}</span>
                  )}
                  {i < capabilities.length - 1 && (
                    <span className="text-bone/20">·</span>
                  )}
                </li>
              );
            })}
          </ul>

          <Link
            ref={linkRef}
            href={`/${slug}`}
            className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-bone px-5 py-2.5 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover sm:mt-10 sm:px-6"
          >
            Explore {discipline.slug.replace("-", " ")}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
