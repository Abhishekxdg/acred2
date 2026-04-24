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
      <section ref={heroRef} className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-acred grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="gsap-reveal lg:col-span-7">
            <p className="eyebrow mb-6">{discipline.label}</p>
            <h1 className="font-serif text-display-xl text-bone whitespace-pre-line text-balance">
              {discipline.title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone-soft">
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
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section ref={introRef} className="container-acred py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="gsap-reveal lg:col-span-5">
            <p className="eyebrow">How we work</p>
          </div>
          <div className="gsap-reveal lg:col-span-7">
            <p className="font-serif text-display-md text-balance text-bone">
              {discipline.detailIntro}
            </p>
            <p className="mt-8 text-base leading-relaxed text-bone-soft">
              {discipline.description}
            </p>

            <div className="mt-12 rule" />
            <p className="mt-8 eyebrow">Capabilities</p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {discipline.capabilities.map((c) => (
                <li
                  key={c}
                  className="gsap-reveal flex items-start gap-3 border-b border-bone/10 pb-3 text-bone"
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

      <section ref={processRef} className="container-acred py-20 md:py-28">
        <div className="gsap-reveal">
          <p className="eyebrow mb-4">Process</p>
          <h2 className="font-serif text-display-lg text-bone text-balance">
            Four moves. No shortcuts.
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-2 lg:grid-cols-4">
          {discipline.processSteps.map((step, i) => (
            <div
              key={step.title}
              className="gsap-reveal bg-ink p-8 md:p-10"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                0{i + 1}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-bone">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-bone-soft">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section ref={relatedRef} className="container-acred py-20 md:py-28">
        <div className="flex items-end justify-between">
          <div className="gsap-reveal">
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="font-serif text-display-lg text-bone">
              Where this shows up.
            </h2>
          </div>
          <div className="gsap-reveal hidden md:block">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-bone hover:text-gold transition-colors"
            >
              All projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featured.map((p) => (
            <div key={p.slug} className="gsap-reveal">
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink-soft">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                    {p.location} · {p.year}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-bone transition-colors group-hover:text-gold">
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
