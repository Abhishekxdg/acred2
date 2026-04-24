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
    <>
      {/* Scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-ink">
        <div className="h-full bg-gold transition-[width] duration-100 ease-linear" style={{ width: `${progress * 100}%` }} />
      </div>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] bg-ink/95 backdrop-blur-xl"
          >
            <div className="container-acred pt-24 md:pt-32">
              <div className="flex items-center gap-3 border-b border-ink-line pb-4">
                <Search className="h-5 w-5 text-bone-muted" />
                <input
                  autoFocus
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search projects, locations, categories..."
                  className="flex-1 bg-transparent font-serif text-2xl text-bone placeholder:text-bone/30 outline-none md:text-3xl"
                />
                <button onClick={() => { setSearchOpen(false); setQuery(""); }} className="rounded-full p-2 text-bone-muted hover:text-gold transition-colors cursor-hover">
                  <X className="h-5 w-5" />
                </button>
              </div>
              {results.length > 0 && (
                <div className="mt-6 space-y-3">
                  {results.map(p => (
                    <Link key={p.slug} href={`/projects/${p.slug}`} onClick={() => { setSearchOpen(false); setQuery(""); }} className="group flex items-center gap-4 rounded-sm p-3 transition-colors hover:bg-ink-line cursor-hover">
                      <div className="h-14 w-20 shrink-0 rounded-sm bg-cover bg-center" style={{ backgroundImage: `url(${p.heroImage})` }} />
                      <div className="min-w-0">
                        <p className="truncate font-serif text-lg text-bone group-hover:text-gold">{p.title}</p>
                        <p className="truncate font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">{p.location} · {p.category} · {p.year}</p>
                      </div>
                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-bone-muted group-hover:text-gold" />
                    </Link>
                  ))}
                </div>
              )}
              {query.trim() && results.length === 0 && (
                <p className="mt-8 text-bone-muted">No projects found.</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        ref={headerRef}
        className={cn("fixed inset-x-0 top-[2px] z-40 transition-colors duration-500", scrolled ? "bg-ink/85 backdrop-blur-xl border-b border-ink-line" : "bg-transparent")}
      >
        {/* Utility bar */}
        <div className={cn("border-b border-ink-line transition-all duration-300 overflow-hidden", scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100")}>
          <div className="container-acred flex h-9 items-center justify-between text-[10px] text-bone-muted">
            <div className="hidden items-center gap-4 sm:flex">
              <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Bengaluru, IN</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {time} IST</span>
            </div>
            <div className="flex items-center gap-4">
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-1.5 hover:text-gold transition-colors cursor-hover"><Mail className="h-3 w-3" /><span className="hidden sm:inline">{site.contact.email}</span></a>
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-gold transition-colors cursor-hover"><Phone className="h-3 w-3" /><span className="hidden sm:inline">{site.contact.phone}</span></a>
              <div className="flex items-center gap-2 border-l border-ink-line pl-3">
                <a href={`https://instagram.com/${site.contact.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors cursor-hover"><Instagram className="h-3.5 w-3.5" /></a>
                <a href={`https://linkedin.com/${site.contact.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gold transition-colors cursor-hover"><Linkedin className="h-3.5 w-3.5" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className="container-acred flex h-14 items-center justify-between md:h-16 lg:h-[72px]">
          <Link href="/" className="font-serif text-base tracking-[0.22em] text-bone transition-colors hover:text-gold cursor-hover sm:text-lg sm:tracking-[0.28em] md:text-xl md:tracking-[0.35em]" aria-label={`${site.name} — home`}>
            {site.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 xl:flex">
            {navigation.map(item => {
              const active = pathname === item.href || pathname.startsWith(item.href);
              const isWork = item.label === "Work";
              return (
                <div key={item.href} className="relative" onMouseEnter={isWork ? openMega : undefined} onMouseLeave={isWork ? closeMega : undefined}>
                  <Link href={item.href} className={cn("font-mono text-[11px] uppercase tracking-widest2 transition-colors cursor-hover py-2", active ? "text-gold" : "text-bone hover:text-gold")}>
                    {item.label}
                  </Link>
                  {isWork && (
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="absolute left-1/2 top-full mt-3 w-[520px] -translate-x-1/2 rounded-sm border border-ink-line bg-ink/95 p-5 backdrop-blur-xl shadow-2xl" onMouseEnter={openMega} onMouseLeave={closeMega}>
                          <p className="eyebrow mb-4">Featured Projects</p>
                          <div className="space-y-3">
                            {featured.map(p => (
                              <Link key={p.slug} href={`/projects/${p.slug}`} className="group flex items-center gap-3 rounded-sm p-2 transition-colors hover:bg-ink-line cursor-hover">
                                <div className="h-12 w-16 shrink-0 rounded-sm bg-cover bg-center" style={{ backgroundImage: `url(${p.heroImage})` }} />
                                <div className="min-w-0">
                                  <p className="truncate font-serif text-sm text-bone group-hover:text-gold">{p.title}</p>
                                  <p className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">{p.location} · {p.category} · {p.year}</p>
                                </div>
                                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-bone-muted group-hover:text-gold" />
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 border-t border-ink-line pt-3">
                            <Link href="/projects" className="link-underline flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-muted hover:text-gold cursor-hover">
                              View all projects <ChevronRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <button onClick={() => setSearchOpen(true)} aria-label="Search" className="inline-flex h-9 w-9 items-center justify-center rounded-full text-bone transition-colors hover:bg-ink-line hover:text-gold cursor-hover">
              <Search className="h-4 w-4" />
            </button>
            <Link href="/contact" className="hidden items-center gap-2 rounded-full border border-bone/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest2 text-bone transition-all hover:border-gold hover:bg-gold hover:text-ink sm:inline-flex cursor-hover">
              Start a project <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Sheet>
              <SheetTrigger aria-label="Open menu" className="inline-flex h-9 w-9 items-center justify-center rounded-full text-bone transition-colors hover:bg-ink-line lg:hidden cursor-hover">
                <Menu className="h-4 w-4" />
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <div className="mt-14 flex flex-col gap-6">
                  <p className="eyebrow">Menu</p>
                  {navigation.map((item, i) => (
                    <SheetClose asChild key={item.href}>
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                        <Link href={item.href} className="group flex items-center justify-between font-serif text-[2rem] leading-none text-bone transition-colors hover:text-gold sm:text-3xl">
                          {item.label}
                          <ArrowUpRight className="h-5 w-5 text-bone-muted opacity-0 transition-all group-hover:opacity-100 group-hover:text-gold" />
                        </Link>
                      </motion.div>
                    </SheetClose>
                  ))}
                  <div className="mt-6 space-y-4 border-t border-ink-line pt-6">
                    <p className="eyebrow">Featured Work</p>
                    <div className="grid grid-cols-2 gap-3">
                      {featured.map(p => (
                        <SheetClose asChild key={p.slug}>
                          <Link href={`/projects/${p.slug}`} className="group block cursor-hover">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${p.heroImage})` }} />
                              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                              <p className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-widest2 text-bone/80">{p.number}</p>
                            </div>
                            <p className="mt-1.5 font-serif text-xs text-bone group-hover:text-gold">{p.title}</p>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 space-y-3 border-t border-ink-line pt-6">
                    <p className="eyebrow">Studio</p>
                    <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 text-sm text-bone-muted hover:text-gold"><Mail className="h-3.5 w-3.5" />{site.contact.email}</a>
                    <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-bone-muted hover:text-gold"><Phone className="h-3.5 w-3.5" />{site.contact.phone}</a>
                    <div className="flex items-center gap-3 pt-1">
                      <a href={`https://instagram.com/${site.contact.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-bone-muted hover:text-gold"><Instagram className="h-4 w-4" /></a>
                      <a href={`https://linkedin.com/${site.contact.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-bone-muted hover:text-gold"><Linkedin className="h-4 w-4" /></a>
                    </div>
                  </div>
                  <div className="mt-2 border-t border-ink-line pt-6">
                    <SheetClose asChild>
                      <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-gold bg-gold px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest2 text-ink transition-all hover:bg-bone hover:text-ink cursor-hover">
                        Start a project <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
