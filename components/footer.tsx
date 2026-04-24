"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navigation, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (colsRef.current) {
        const cols = colsRef.current.children;
        gsap.from(cols, {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: colsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (bottomRef.current) {
        gsap.from(bottomRef.current, {
          opacity: 0,
          y: 12,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="mt-24 border-t border-ink-line bg-ink-soft sm:mt-32">
      <div className="container-acred py-16 sm:py-20">
        {/* Giant type */}
        <div ref={ctaRef} className="mb-16">
          <p className="eyebrow mb-6">Build with us</p>
          <h2 className="max-w-4xl font-serif text-[clamp(2rem,8vw,4.5rem)] text-balance">
            Have a site, a brief, or an instinct?
            <br />
            <span className="text-bone-muted">Write to the studio.</span>
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex max-w-full items-center gap-3 break-all font-mono text-[11px] uppercase tracking-[0.22em] text-bone transition-colors hover:text-gold cursor-hover sm:text-xs sm:tracking-widest2"
          >
            studio@acred.example
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rule" />

        <div ref={colsRef} className="grid gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-4">
          <div className="space-y-4">
            <p className="eyebrow">Studio</p>
            <p className="text-sm leading-relaxed text-bone-soft">
              {site.contact.address}
            </p>
            <p className="text-sm text-bone-soft">{site.contact.phone}</p>
          </div>

          <div className="space-y-4">
            <p className="eyebrow">Navigate</p>
            <ul className="space-y-2">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone-soft hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="eyebrow">More</p>
            <ul className="space-y-2">
              {navigation.slice(4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone-soft hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="eyebrow">Offices</p>
            <ul className="space-y-2">
              {site.offices.map((o) => (
                <li key={o.city} className="text-sm text-bone-soft">
                  <span className="text-bone">{o.city}</span>{" "}
                  <span className="text-bone-muted">· {o.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule" />

        <div ref={bottomRef} className="flex flex-col gap-3 pt-8 text-xs leading-relaxed text-bone-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.22em] sm:tracking-widest2">
            {site.promise}
          </p>
        </div>
      </div>
    </footer>
  );
}
