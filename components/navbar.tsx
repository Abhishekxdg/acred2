"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { Menu, Mail, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { site } from "@/lib/content";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Interiors", href: "/interiors" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const menuItems = [
  { label: "About", href: "/about" },
  { label: "Interiors", href: "/interiors" },
  { label: "Construction & Architecture", href: "/construction" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Engineering", href: "/engineering" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const hidden = useRef(false);
  const pathname = usePathname();
  const isHeroPage = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      setScrolled(y > 60);
      setPastHero(y > vh * 0.75);
      if (!headerRef.current) return;
      if (y > lastScrollY.current && y > 160 && !hidden.current) {
        gsap.to(headerRef.current, { y: -100, duration: 0.4, ease: "power3.inOut" });
        hidden.current = true;
      } else if ((y < lastScrollY.current || y < 160) && hidden.current) {
        gsap.to(headerRef.current, { y: 0, duration: 0.4, ease: "power3.inOut" });
        hidden.current = false;
      }
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !pastHero && isHeroPage;
  // Only use white logo/assets when on the hero dark overlay.
  // All other states use the dark logo on the light ink/cream background.
  const useLightAssets = onDark;

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex justify-center transition-all duration-500",
        scrolled ? "px-4 pt-3 sm:px-6" : "px-4 pt-5 sm:px-6",
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-[1000px] items-center justify-between gap-4 rounded-full px-5 py-2.5 transition-all duration-500",
          scrolled
            ? "bg-ink/96 shadow-[0_2px_24px_rgba(14,13,11,0.07)] border border-ink-line backdrop-blur-xl"
            : onDark
            ? "bg-night/25 border border-white/10 backdrop-blur-sm"
            : "bg-ink/75 border border-ink-line backdrop-blur-md",
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 cursor-hover"
          aria-label={`${site.name} — home`}
        >
          <Image
            src={useLightAssets ? "/white_textlogo.png" : "/black_text_logo.png"}
            alt={`${site.name} — home`}
            width={88}
            height={28}
            className="h-10 w-auto object-contain transition-opacity duration-500"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-1.5 font-sans text-[13px] transition-all cursor-hover",
                pathname.startsWith(item.href) && item.href !== "/"
                  ? useLightAssets
                    ? "text-white font-medium"
                    : "text-bone font-medium"
                  : useLightAssets
                  ? "text-white/55 hover:text-white/90 hover:bg-white/8"
                  : "text-bone-muted hover:text-bone hover:bg-bone/5",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              "hidden items-center gap-2 rounded-full px-5 py-2 font-sans text-[13px] font-medium transition-all cursor-hover sm:inline-flex",
              useLightAssets
                ? "bg-white text-night hover:bg-white/90"
                : "bg-bone text-ink-soft hover:bg-bone/80",
            )}
          >
            Get started
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <Sheet>
            <SheetTrigger
              aria-label="Open navigation"
              className={cn(
                "inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors cursor-hover",
                useLightAssets
                  ? "text-white/65 hover:bg-white/10 hover:text-white"
                  : "text-bone-muted hover:bg-bone/8 hover:text-bone",
              )}
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <div className="mt-14 flex flex-col gap-5">
                <p className="eyebrow">Navigation</p>
                {menuItems.map((item, i) => (
                  <SheetClose asChild key={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between font-serif text-[1.85rem] leading-none text-bone transition-colors hover:text-gold"
                      >
                        {item.label}
                        <ArrowUpRight className="h-4 w-4 text-bone-muted opacity-0 transition-all group-hover:opacity-100 group-hover:text-gold" />
                      </Link>
                    </motion.div>
                  </SheetClose>
                ))}
                <div className="mt-6 space-y-3 border-t border-ink-line pt-6">
                  <p className="eyebrow">Studio</p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-center gap-2 text-sm text-bone-muted transition-colors hover:text-gold"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {site.contact.email}
                  </a>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-bone-muted transition-colors hover:text-gold"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {site.contact.phone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}