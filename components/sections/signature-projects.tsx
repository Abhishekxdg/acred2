"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function SignatureProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Header reveal
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Grid items wave stagger
      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll("article");
        gsap.from(items, {
          y: 60,
          opacity: 0,
          scale: 0.96,
          stagger: {
            each: 0.12,
            from: "start",
          },
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Parallax for each card image on scroll
        items.forEach((item) => {
          const img = item.querySelector(".project-img");
          if (img) {
            gsap.to(img, {
              yPercent: -6,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        });
      }

      // CTA reveal
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="container-acred pt-24 pb-24 md:pt-32 md:pb-32">
      <div ref={headerRef}>
        <p className="section-label mb-5">Selected work</p>
        <h2>
          <span className="block font-sans font-bold text-display-xl leading-[0.95] tracking-tight text-bone">Signature</span>
          <span className="block font-serif italic text-display-xl leading-[1.05] text-bone/85">projects.</span>
        </h2>
      </div>

      <div ref={gridRef} className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 6).map((p) => (
          <article key={p.slug}>
            <Link href={`/projects/${p.slug}`} className="group block cursor-hover">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-ink-muted">
                <div className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-widest2 text-white/50">
                  [ {p.number} ]
                </div>
                <div className="project-img absolute inset-0 scale-110">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-90 transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                    {p.location} · {p.category}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-bone transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-bone-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div ref={ctaRef} className="mt-16 flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-8 py-3 font-sans text-sm font-medium text-bone transition-all hover:bg-bone hover:text-ink-soft hover:border-transparent hover:gap-3 cursor-hover"
        >
          View all work
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
