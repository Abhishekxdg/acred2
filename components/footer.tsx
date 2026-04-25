"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";
import Image from "next/image";

export function Footer() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      // Force refresh ScrollTrigger to ensure triggers are calculated correctly
      ScrollTrigger.refresh();

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { y: 30 },
          {
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }

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
        {/* CTA Section - only on homepage */}
        {isHomepage && (
          <>
            <div ref={ctaRef} className="mb-10 grid items-center gap-8 sm:mb-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="eyebrow mb-4 sm:mb-6">Start your project</p>
                <h2 className="text-balance">
                  <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">Have a vision,</span>
                  <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">a property, or a blueprint?</span>
                </h2>
                <p className="mt-4 max-w-lg font-serif text-lg text-bone-muted sm:mt-6 sm:text-xl">
                  Let&apos;s engineer the reality.
                </p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="mt-6 inline-flex max-w-full items-center gap-3 break-all font-mono text-[10px] uppercase tracking-widest2 text-bone transition-colors hover:text-gold cursor-hover sm:mt-8"
                >
                  {site.contact.email}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* ACRED Logo */}
              <div className="hidden lg:flex items-center justify-center min-h-[320px]">
                <Image
                  src="/black_text_logo.png"
                  alt="ACRED Logo"
                  width={320}
                  height={320}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="rule" />
          </>
        )}

        <div ref={colsRef} className="grid gap-8 py-8 sm:gap-8 sm:py-10 md:grid-cols-3">
          <div className="space-y-4 sm:space-y-6">
            <Image
              src="/black_text_logo.png"
              alt="ACRED"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <div className="space-y-3 sm:space-y-4">
              <p className="eyebrow">Address</p>
              <p className="text-sm leading-relaxed text-bone-soft">
                {site.contact.address}
              </p>
              <p className="text-sm text-bone-soft">{site.contact.phone}</p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="eyebrow">Navigate</p>
            <ul className="space-y-1.5 sm:space-y-2">
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
          <p className="font-mono text-[10px] uppercase leading-relaxed tracking-widest2 text-bone-muted">
            {site.promise}
          </p>
        </div>
      </div>

      <div className="pointer-events-none relative mx-auto -mt-2 w-full max-w-[1440px] px-0 sm:-mt-8 sm:px-6 md:px-10 lg:px-16">
        <Image
          src="/footer_big_text.png"
          alt=""
          width={1613}
          height={512}
          sizes="100vw"
          className="mx-auto h-auto w-[150vw] max-w-none -translate-x-[18vw] opacity-85 sm:w-full sm:max-w-[1200px] sm:translate-x-0"
        />
      </div>
    </footer>
  );
}
