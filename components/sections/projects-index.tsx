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

const categoryLabels = ["All", ...categories] as const;

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
      <section ref={headerRef} className="container-acred pt-28 pb-8 sm:pt-32 sm:pb-10 md:pt-40 md:pb-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="gsap-reveal lg:col-span-8">
            <p className="section-label mb-5 sm:mb-6">Work index</p>
            <h1 className="max-w-5xl text-balance">
              <span className="block font-sans font-bold text-display-xl leading-[0.95] tracking-tight text-bone">
                Every project is a contract
              </span>
              <span className="block font-serif italic text-display-xl leading-[1.05] text-bone/85">
                with a piece of land.
              </span>
            </h1>
          </div>

          <div className="gsap-reveal flex flex-col justify-end lg:col-span-4">
            <p className="max-w-md text-sm leading-relaxed text-bone-soft sm:text-base">
              A working archive of homes, commercial buildings, mixed-use places,
              hospitality retreats, and technical sites shaped by ACRED.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-ink-line py-5">
              <div>
                <p className="font-serif text-3xl leading-none text-bone">{projects.length}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                  Projects
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl leading-none text-bone">{categories.length}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                  Typologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter chips */}
      <section className="container-acred">
        <div className="border-y border-ink-line py-4 sm:py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
              Showing {filtered.length.toString().padStart(2, "0")} of{" "}
              {projects.length.toString().padStart(2, "0")}
            </p>

            <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:overflow-visible sm:px-0">
              <div className="flex w-max gap-2 pr-5 sm:w-auto sm:flex-wrap sm:justify-end sm:pr-0">
                {categoryLabels.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={cn(
                      "shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-widest2 transition-all cursor-hover sm:px-5 sm:py-1.5",
                      active === c
                        ? "bg-bone text-ink-soft"
                        : "text-bone-muted hover:bg-bone/5 hover:text-bone",
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section ref={galleryRef} className="container-acred pb-14 pt-8 sm:pb-24 sm:pt-12">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
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
                className={cn(i % 3 === 1 ? "lg:pt-10" : "", i % 3 === 2 ? "lg:pt-20" : "")}
              >
                <Link href={`/projects/${p.slug}`} className="group block cursor-hover">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-ink-muted sm:aspect-[3/4]">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
                    <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-white/70 backdrop-blur-sm sm:left-4 sm:top-4">
                      [ {p.number} ]
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                      <p className="font-mono text-[10px] uppercase tracking-widest2 text-white/55">
                        {p.location} · {p.year}
                      </p>
                      <h2 className="mt-2 font-serif text-[1.75rem] leading-none text-white sm:text-3xl">
                        {p.title}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-3 sm:mt-5 sm:gap-4">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase leading-relaxed tracking-widest2 text-bone-muted">
                        {p.category} · {p.area}
                      </p>
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
