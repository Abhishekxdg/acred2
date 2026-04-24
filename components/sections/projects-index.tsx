"use client";

import { useMemo, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { projects, categories, type ProjectCategory } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectsIndex() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  const headerRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      [headerRef.current, galleryRef.current].forEach((sec) => {
        if (!sec) return;
        const items = sec.querySelectorAll(".gsap-reveal");
        gsap.from(items, {
          y: 36,
          opacity: 0,
          stagger: 0.08,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { dependencies: [active] }
  );

  return (
    <>
      <section ref={headerRef} className="container-acred pt-24 pb-10 sm:pt-28 md:pt-40 md:pb-12">
        <p className="gsap-reveal eyebrow mb-6">Work index</p>
        <h1 className="gsap-reveal max-w-5xl font-serif text-[clamp(2.6rem,11vw,6.5rem)] text-bone text-balance">
          Every project is a contract
          <br />
          <span className="text-bone-muted">with a piece of land.</span>
        </h1>
      </section>

      {/* Filter chips */}
      <section className="container-acred">
        <div className="-mx-6 overflow-x-auto border-y border-ink-line px-6 py-4 sm:mx-0 sm:px-0 sm:py-5">
          <div className="flex min-w-max gap-2 sm:flex-wrap">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "shrink-0 whitespace-nowrap px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors sm:px-4 sm:tracking-widest2",
                active === c
                  ? "bg-bone text-ink"
                  : "text-bone-muted hover:text-bone",
              )}
            >
              {c}
            </button>
          ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section ref={galleryRef} className="container-acred pb-20 pt-10 sm:pb-24 sm:pt-12">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((p, i) => (
              <motion.article
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href={`/projects/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-soft sm:aspect-[3/4]">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/70 sm:left-4 sm:top-4 sm:tracking-widest2">
                      [ {p.number} ]
                    </div>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-3 sm:mt-5 sm:gap-4">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-bone-muted sm:tracking-widest2">
                        {p.location} · {p.category} · {p.year}
                      </p>
                      <h3 className="mt-2 font-serif text-[1.65rem] leading-tight text-bone transition-colors group-hover:text-gold sm:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-bone-soft line-clamp-3 sm:line-clamp-2">
                        {p.summary}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-bone-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold sm:h-5 sm:w-5" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-bone-muted">
            No projects in this category yet.
          </p>
        )}
      </section>
    </>
  );
}
