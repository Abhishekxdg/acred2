"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      // Force refresh ScrollTrigger to ensure triggers are calculated correctly
      ScrollTrigger.refresh();

      if (colsRef.current) {
        const cols = colsRef.current.children;
        gsap.fromTo(
          cols,
          { y: 20 },
          {
            y: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: colsRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (bottomRef.current) {
        gsap.fromTo(
          bottomRef.current,
          { y: 10 },
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bottomRef.current,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="relative z-50 overflow-hidden border-t border-ink-line bg-ink-muted pb-6 sm:pb-10">
      <div className="container-acred py-10 sm:py-16 md:py-20">
        <div ref={colsRef} className="grid gap-8 py-8 sm:gap-8 sm:py-10 md:grid-cols-3">
          <div className="space-y-4 sm:space-y-6">
            <Image
              src="/black_text_logo.webp"
              alt="ACRED"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <div className="space-y-3 sm:space-y-4">
              <p className="eyebrow">Contact</p>
              <p className="text-sm text-bone-soft">{site.contact.phone}</p>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-sm text-bone-soft hover:text-gold transition-colors cursor-hover"
              >
                {site.contact.email}
              </a>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="eyebrow">Navigate</p>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/design-home"
                  className="text-sm text-bone-soft hover:text-gold transition-colors cursor-hover"
                >
                  Design your home
                </Link>
              </li>
              <li>
                <Link
                  href="/interiors"
                  className="text-sm text-bone-soft hover:text-gold transition-colors cursor-hover"
                >
                  Interiors
                </Link>
              </li>
              <li>
                <Link
                  href="/construction"
                  className="text-sm text-bone-soft hover:text-gold transition-colors cursor-hover"
                >
                  Construction & Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate"
                  className="text-sm text-bone-soft hover:text-gold transition-colors cursor-hover"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering"
                  className="text-sm text-bone-soft hover:text-gold transition-colors cursor-hover"
                >
                  Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-bone-soft hover:text-gold transition-colors cursor-hover"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-bone-soft hover:text-gold transition-colors cursor-hover"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="eyebrow">Offices</p>
            <ul className="space-y-1.5 sm:space-y-2">
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

        <div ref={bottomRef} className="flex flex-col gap-3 pt-6 sm:gap-6 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-relaxed text-bone-muted">
            © {year} {site.name}. All rights reserved.
          </p>
          <nav className="flex gap-5 text-sm text-bone-muted">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors cursor-hover">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors cursor-hover">Terms</Link>
            <Link href="/data-deletion" className="hover:text-gold transition-colors cursor-hover">Data Deletion</Link>
          </nav>
          <p className="font-mono text-[10px] uppercase leading-relaxed tracking-widest2 text-bone-muted">
            {site.promise}
          </p>
        </div>
      </div>

      <div className="pointer-events-none relative mx-auto -mt-2 w-full max-w-[1440px] overflow-hidden px-0 sm:-mt-8 sm:px-6 md:px-10 lg:px-16">
        <Image
          src="/footer_big_text.webp"
          alt=""
          width={1613}
          height={512}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="mx-auto opacity-85 sm:max-w-[1200px]"
          priority
        />
      </div>
    </footer>
  );
}
