"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import type { Discipline } from "@/lib/content";
import { projects } from "@/lib/projects";

export function DisciplinePage({ discipline }: { discipline: Discipline }) {
  const related = projects
    .filter((p) => p.role.toLowerCase().includes(discipline.slug.replace("-", " ")))
    .slice(0, 3);

  // Fallback — show three most recent if nothing matches role text
  const featured = related.length ? related : projects.slice(0, 3);

  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sections = [heroRef.current, introRef.current, processRef.current, relatedRef.current];
      sections.forEach((sec) => {
        if (!sec) return;
        const items = sec.querySelectorAll(".gsap-reveal");
        gsap.from(items, {
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { dependencies: [discipline.slug] }
  );

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28 flex items-center">
        <div className="container-acred grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="gsap-reveal lg:col-span-7">
            <p className="section-label mb-4 sm:mb-6">{discipline.label}</p>
            <h1 className="whitespace-pre-line text-balance">
              <span className="block font-sans font-bold text-display-lg sm:text-display-xl leading-[0.95] tracking-tight text-bone">
                {discipline.title.split(" ").slice(0, -1).join(" ")}
              </span>
              <span className="block font-serif italic text-display-lg sm:text-display-xl leading-[1.05] text-bone/85">
                {discipline.title.split(" ").slice(-1)[0]}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">
              {discipline.tagline}
            </p>
          </div>

          <div className="gsap-reveal lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-soft">
              <Image
                src={discipline.heroImage}
                alt={discipline.heroImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section ref={introRef} className="container-acred min-h-screen py-16 md:py-20 lg:py-28 flex items-center">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="gsap-reveal lg:col-span-5">
            <p className="section-label">How we work</p>
          </div>
          <div className="gsap-reveal lg:col-span-7">
            <p className="font-serif text-display-md text-balance text-bone/90 leading-snug">
              {discipline.detailIntro}
            </p>
            <p className="mt-6 text-base leading-relaxed text-bone-soft sm:mt-8">
              {discipline.description}
            </p>

            <div className="mt-10 rule sm:mt-12" />
            <p className="mt-6 section-label sm:mt-8">Capabilities</p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {discipline.capabilities.map((c) => (
                <li
                  key={c}
                  className="gsap-reveal flex items-start gap-3 border-b border-ink-line pb-3 text-bone"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                    ✦
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section ref={processRef} className="container-acred min-h-screen py-16 md:py-20 lg:py-28 flex items-center">
        <div className="gsap-reveal">
          <p className="section-label mb-4">Process</p>
          <h2 className="text-balance">
            <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Four moves.</span>
            <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">No shortcuts.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-px bg-bone/10 md:grid-cols-2 lg:grid-cols-4 sm:mt-16">
          {discipline.processSteps.map((step, i) => (
            <div
              key={step.title}
              className="gsap-reveal border border-ink-line bg-ink-soft p-6 sm:p-8 md:p-10"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                0{i + 1}
              </p>
              <h3 className="mt-4 font-serif text-xl sm:text-2xl text-bone">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-bone-soft">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section ref={relatedRef} className="container-acred min-h-screen py-16 pb-20 md:py-20 md:pb-24 lg:py-28 lg:pb-32 flex items-center">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="gsap-reveal">
            <p className="section-label mb-4">Selected work</p>
            <h2>
              <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Where this</span>
              <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">shows up.</span>
            </h2>
          </div>
          <div className="gsap-reveal">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2.5 rounded-full border border-bone/15 px-5 py-2 font-sans text-sm text-bone-muted transition-all hover:border-bone hover:text-bone cursor-hover"
            >
              All projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 sm:mt-12">
          {featured.map((p) => (
            <div key={p.slug} className="gsap-reveal">
              <Link href={`/projects/${p.slug}`} className="group block cursor-hover">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-ink-muted">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="mt-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                    {p.location} · {p.year}
                  </p>
                  <h3 className="mt-2 font-serif text-xl sm:text-2xl text-bone transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
