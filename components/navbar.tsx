"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { site } from "@/lib/content";
import FlowingMenu from "@/components/flowing-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Interiors", href: "/interiors" },
  { label: "Design tool", href: "/design-home" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const menuItems = [
  {
    link: "/design-home",
    text: "Design Tool",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    link: "/projects",
    text: "Work",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
  },
  {
    link: "/interiors",
    text: "Interiors",
    image:
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    link: "/construction",
    text: "Construction & Architecture",
    image:
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    link: "/real-estate",
    text: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
  },
  {
    link: "/engineering",
    text: "Engineering",
    image:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80",
  },
  {
    link: "/about",
    text: "About",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    link: "/contact",
    text: "Contact",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const hidden = useRef(false);
  const pathname = usePathname();
  const isHeroPage = pathname === "/";

  useEffect(() => {
    const onPopupOpen = () => setPopupOpen(true);
    const onPopupClose = () => setPopupOpen(false);
    window.addEventListener("popupOpen", onPopupOpen);
    window.addEventListener("popupClose", onPopupClose);
    return () => {
      window.removeEventListener("popupOpen", onPopupOpen);
      window.removeEventListener("popupClose", onPopupClose);
    };
  }, []);

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
        scrolled ? "px-3 pt-3 sm:px-6" : "px-3 pt-4 sm:px-6 sm:pt-5",
        popupOpen && "pointer-events-none opacity-0",
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-[1000px] items-center justify-between gap-3 rounded-full px-4 py-2.5 transition-all duration-500 sm:gap-4 sm:px-5",
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
            src={useLightAssets ? "/white_text_logo.webp" : "/black_text_logo.webp"}
            alt={`${site.name} — home`}
            width={88}
            height={28}
            className="h-[1.7rem] w-auto object-contain transition-opacity duration-500 sm:h-[2.15rem]"
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
            href="/design-home"
            className={cn(
              "hidden items-center gap-2 rounded-full px-5 py-2 font-sans text-[13px] font-medium transition-all cursor-hover sm:inline-flex",
              useLightAssets
                ? "bg-white text-night hover:bg-white/90"
                : "bg-bone text-ink-soft hover:bg-bone/80",
            )}
          >
            Design home
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
            <SheetContent className="max-w-none overflow-hidden border-l-0 bg-night p-0 shadow-none [&>button]:right-6 [&>button]:top-6 [&>button]:z-20 [&>button]:text-white/60 [&>button:hover]:text-white">
              <div className="flex h-full flex-col bg-night">
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
                  <Link
                    href="/"
                    className="cursor-hover"
                    aria-label={`${site.name} — home`}
                  >
                    <Image
                      src="/white_text_logo.webp"
                      alt={`${site.name} — home`}
                      width={104}
                      height={34}
                      className="h-9 w-auto object-contain"
                    />
                  </Link>
                  <a
                    href="/design-home"
                    className="mr-12 hidden cursor-hover items-center gap-2 rounded-full bg-white px-5 py-2 font-sans text-sm font-medium text-night transition-colors hover:bg-white/90 sm:inline-flex"
                  >
                    Design home
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div className="min-h-0 flex-1">
                  <FlowingMenu
                    items={menuItems}
                    speed={18}
                    bgColor="#0F0F0D"
                    textColor="#F8F5EF"
                    marqueeBgColor="#B8925A"
                    marqueeTextColor="#0F0F0D"
                    borderColor="#2E2E2B"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
