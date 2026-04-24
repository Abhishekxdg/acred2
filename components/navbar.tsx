"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState, useCallback } from "react";
import {
  Menu, Search, X, Instagram, Linkedin, Mail, Phone,
  ArrowUpRight, ChevronRight, Clock, MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { navigation, site } from "@/lib/content";
import { projects } from "@/lib/projects";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement.scrollHeight - window.innerHeight;
      setP(d > 0 ? window.scrollY / d : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

function useTime() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" });
    setT(f());
    const id = setInterval(() => setT(f()), 30000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const hidden = useRef(false);
  const megaTimer = useRef<NodeJS.Timeout | null>(null);
  const progress = useScrollProgress();
  const time = useTime();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (!headerRef.current) return;
      if (y > lastScrollY.current && y > 120 && !hidden.current) {
        gsap.to(headerRef.current, { y: -140, duration: 0.4, ease: "power3.inOut" });
        hidden.current = true;
      } else if ((y < lastScrollY.current || y < 120) && hidden.current) {
        gsap.to(headerRef.current, { y: 0, duration: 0.4, ease: "power3.inOut" });
        hidden.current = false;
      }
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = useCallback(() => { if (megaTimer.current) clearTimeout(megaTimer.current); setMegaOpen(true); }, []);
  const closeMega = useCallback(() => { megaTimer.current = setTimeout(() => setMegaOpen(false), 180); }, []);

  const featured = projects.slice(0, 3);
  const results = query.trim()
    ? projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.location.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-ink-line"
          : "bg-transparent",
      )}
      >
      <div className="container-acred flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="font-serif text-base tracking-[0.22em] text-bone transition-colors hover:text-gold cursor-hover sm:text-lg sm:tracking-[0.28em] md:text-xl md:tracking-[0.35em]"
          aria-label={`${site.name} — home`}
        >
          {site.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-[11px] uppercase tracking-widest2 transition-colors cursor-hover",
                  active ? "text-gold" : "text-bone hover:text-gold",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile nav trigger */}
        <Sheet>
          <SheetTrigger
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center text-bone lg:hidden cursor-hover"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent>
            <AnimatePresence>
              <motion.nav
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-16 flex flex-col gap-5 sm:mt-20 sm:gap-6"
              >
                <p className="eyebrow">Menu</p>
                {navigation.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="font-serif text-[2rem] leading-none text-bone transition-colors hover:text-gold sm:text-3xl"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-12 space-y-2 border-t border-ink-line pt-8">
                  <p className="eyebrow">Studio</p>
                  <p className="text-sm text-bone-muted">{site.contact.email}</p>
                  <p className="text-sm text-bone-muted">{site.contact.phone}</p>
                </div>
              </motion.nav>
            </AnimatePresence>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
