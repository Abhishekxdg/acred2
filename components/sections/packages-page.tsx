"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, X, ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Feature = { text: string; included: boolean };
type PackageTier = { id: string; name: string; pricePerSqft: number; tagline: string; popular?: boolean; features: Feature[] };

const packages: PackageTier[] = [
  {
    id: "standard",
    name: "Standard",
    pricePerSqft: 2300,
    tagline: "Essential construction with standard finishes — perfect for a solid first home.",
    features: [
      { text: "Architectural floor plan & 3D elevation", included: true },
      { text: "Structural design by certified engineer", included: true },
      { text: "Standard RCC structure", included: true },
      { text: "Basic electrical layout & fittings", included: true },
      { text: "Standard plumbing with PVC pipes", included: true },
      { text: "Vitrified tile flooring (living & bedrooms)", included: true },
      { text: "Ceramic tile flooring (kitchen & bath)", included: true },
      { text: "Standard flush doors with laminate finish", included: true },
      { text: "UPVC windows with mosquito mesh", included: true },
      { text: "Standard emulsion paint (interior)", included: true },
      { text: "Weatherproof exterior paint", included: true },
      { text: "Basic kitchen platform with granite", included: true },
      { text: "Standard sanitaryware (Hindware/Parryware)", included: true },
      { text: "Modular kitchen cabinets", included: false },
      { text: "Designer false ceiling", included: false },
      { text: "Smart home wiring", included: false },
      { text: "Premium imported fittings", included: false },
      { text: "Home automation", included: false },
      { text: "Landscaping & compound wall", included: false },
      { text: "Structural warranty — 5 years", included: true },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    pricePerSqft: 3200,
    tagline: "Branded materials, smarter layouts, and a home that reflects your taste.",
    popular: true,
    features: [
      { text: "Custom architectural design with revisions", included: true },
      { text: "Structural design with soil testing", included: true },
      { text: "RCC structure (M25 concrete with FE-500 steel)", included: true },
      { text: "Modular electrical with Legrand/Anchor switches", included: true },
      { text: "Concealed plumbing with Jaquar fittings", included: true },
      { text: "Double-charged vitrified tiles (living & bedrooms)", included: true },
      { text: "Designer tiles (kitchen & bath)", included: true },
      { text: "Teakwood frame doors with veneer + polish", included: true },
      { text: "Premium aluminium windows with toughened glass", included: true },
      { text: "Asian Paints Royale or equivalent (interior)", included: true },
      { text: "Exterior texture paint or cladding", included: true },
      { text: "Granite + modular kitchen (Hettich/Blum hardware)", included: true },
      { text: "Premium sanitaryware (Kohler/Roca/Grohe)", included: true },
      { text: "Full modular kitchen with soft-close drawers", included: true },
      { text: "Designer false ceiling (living + dining)", included: true },
      { text: "Smart home wiring conduit + basic automation", included: true },
      { text: "Branded imported fittings", included: true },
      { text: "Home automation (lights & fans)", included: true },
      { text: "Landscaping with walkway & lighting", included: true },
      { text: "Structural warranty — 10 years", included: true },
    ],
  },
];

export function PackagesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const packagesRef = useRef<HTMLElement>(null);
  const comparisonRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    [heroRef, packagesRef, comparisonRef, ctaRef].forEach((ref) => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll(".gsap-reveal");
      gsap.from(items, {
        y: 30, opacity: 0, stagger: 0.08, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" },
      });
    });
  }, {});

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28">
        <div className="container-acred">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="gsap-reveal lg:col-span-7">
              <p className="section-label mb-4 sm:mb-6">Construction Packages</p>
              <h1 className="whitespace-pre-line text-balance">
                <span className="block font-sans font-bold text-display-lg sm:text-display-xl leading-[0.95] tracking-tight text-bone">
                  Priced per sqft.
                </span>
                <span className="block font-serif italic text-display-lg sm:text-display-xl leading-[1.05] text-bone/85">
                  No surprises, ever.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">
                Two carefully defined packages — Standard and Premium. Every rupee accounts for something you can see and touch. No bundled padding, no hidden line items.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-ink-line bg-ink-muted px-5 py-2.5">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">Starts from</span>
                <span className="font-sans text-xl font-bold text-gold">₹2,300 <span className="text-sm font-medium text-bone-muted">/ sqft</span></span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#packages" className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover">
                  View packages
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <Link href="/contact" className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover">
                  Talk to an architect
                </Link>
              </div>
            </div>
            <div className="gsap-reveal lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink-soft sm:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="ACRED home construction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                  <div className="rounded-lg bg-black/40 px-3 py-2 backdrop-blur-sm">
                    <p className="font-mono text-[9px] uppercase tracking-widest2 text-white/60">Standard</p>
                    <p className="font-sans text-base font-bold text-white">₹2,300 <span className="text-xs font-normal text-white/60">/ sqft</span></p>
                  </div>
                  <div className="rounded-lg bg-gold px-3 py-2 backdrop-blur-sm">
                    <p className="font-mono text-[9px] uppercase tracking-widest2 text-bone/70">Premium</p>
                    <p className="font-sans text-base font-bold text-bone">₹3,200 <span className="text-xs font-normal text-bone/60">/ sqft</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section ref={packagesRef} id="packages" className="container-acred py-16 md:py-20 lg:py-28">
        <div className="gsap-reveal mb-10 sm:mb-12">
          <p className="section-label mb-4">Our packages</p>
          <h2 className="text-balance">
            <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
              Pick the right build
            </span>
            <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">
              for your home.
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-muted sm:text-base">
            Every price is per square foot of built-up area. No extra charges for the items listed — what you see is what you pay.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {packages.map((pkg) => {
            const isOpen = expandedId === pkg.id;
            const visible = pkg.features.slice(0, 10);
            const hidden = pkg.features.slice(10);
            return (
              <div
                key={pkg.id}
                className={cn(
                  "gsap-reveal relative flex flex-col rounded-xl border overflow-hidden",
                  pkg.popular ? "border-gold/40 bg-ink" : "border-ink-line bg-ink-soft"
                )}
              >
                {pkg.popular && (
                  <div className="bg-gold px-6 py-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone font-medium">Recommended</span>
                  </div>
                )}

                {/* Price header */}
                <div className="px-6 pt-6 pb-5 border-b border-ink-line sm:px-8 sm:pt-8 sm:pb-6">
                  <h3 className="font-sans text-xl font-semibold text-bone sm:text-2xl">{pkg.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-bone-muted">{pkg.tagline}</p>
                  <div className="mt-5 flex items-end gap-2">
                    <span className={cn("font-sans text-4xl font-bold leading-none tracking-tight sm:text-5xl", pkg.popular ? "text-gold" : "text-bone")}>
                      ₹{pkg.pricePerSqft.toLocaleString("en-IN")}
                    </span>
                    <span className="mb-1 font-sans text-sm font-medium text-bone-muted">/ sqft</span>
                  </div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                    Built-up area · No hidden charges
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-col flex-1 px-6 pt-5 pb-4 sm:px-8 sm:pt-6">
                  <div className="space-y-2.5">
                    {visible.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        {f.included
                          ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          : <X className="mt-0.5 h-4 w-4 shrink-0 text-bone-dim" />
                        }
                        <span className={cn("text-sm leading-snug", f.included ? "text-bone-soft" : "text-bone-dim line-through")}>
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  {hidden.length > 0 && (
                    <>
                      {isOpen && (
                        <div className="mt-2.5 space-y-2.5 border-t border-ink-line pt-3">
                          {hidden.map((f, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              {f.included
                                ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                                : <X className="mt-0.5 h-4 w-4 shrink-0 text-bone-dim" />
                              }
                              <span className={cn("text-sm leading-snug", f.included ? "text-bone-soft" : "text-bone-dim line-through")}>
                                {f.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                      <button
                        onClick={() => setExpandedId(isOpen ? null : pkg.id)}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-soft cursor-hover"
                      >
                        {isOpen ? "Show less" : `+${hidden.length} more inclusions`}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                      </button>
                    </>
                  )}
                </div>

                {/* CTA */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <Link
                    href="/contact"
                    className={cn(
                      "group flex w-full items-center justify-center gap-2.5 rounded-full py-3 font-sans text-sm font-medium transition-all cursor-hover",
                      pkg.popular
                        ? "bg-bone text-ink-soft hover:bg-bone/80"
                        : "border border-ink-line text-bone hover:border-bone"
                    )}
                  >
                    Get a quote
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison table */}
      <section ref={comparisonRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal mb-10 sm:mb-12">
            <p className="section-label mb-4">Side by side</p>
            <h2 className="text-balance">
              <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
                What changes
              </span>
              <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">
                between tiers.
              </span>
            </h2>
          </div>
          <div className="gsap-reveal">
            {/* Desktop: horizontal-scroll table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse">
                <thead>
                  <tr className="border-b border-ink-line">
                    <th className="pb-4 text-left font-sans text-xs font-medium uppercase tracking-widest2 text-bone-muted w-[44%]">Category</th>
                    <th className="pb-4 text-left font-sans text-xs font-medium uppercase tracking-widest2 text-bone-muted w-[28%]">
                      Standard
                      <span className="block mt-0.5 font-sans text-sm font-bold normal-case tracking-normal text-gold">₹2,300 / sqft</span>
                    </th>
                    <th className="pb-4 text-left font-sans text-xs font-medium uppercase tracking-widest2 text-bone-muted w-[28%]">
                      Premium
                      <span className="block mt-0.5 font-sans text-sm font-bold normal-case tracking-normal text-gold">₹3,200 / sqft</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Architectural design", "Floor plan & 3D elevation", "Custom design with unlimited revisions"],
                    ["Structure", "Standard RCC", "M25 concrete with FE-500 steel"],
                    ["Electrical", "Basic layout & fittings", "Legrand / Anchor modular switches"],
                    ["Plumbing", "PVC pipes, standard fittings", "Concealed CPVC with Jaquar"],
                    ["Flooring", "Standard vitrified tiles", "Double-charged vitrified + designer tiles"],
                    ["Doors", "Flush doors with laminate", "Teakwood frame with veneer & polish"],
                    ["Windows", "UPVC with mosquito mesh", "Premium aluminium, toughened glass"],
                    ["Paint", "Standard emulsion", "Asian Paints Royale or equivalent"],
                    ["Kitchen", "Granite platform", "Full modular (Hettich / Blum hardware)"],
                    ["False ceiling", "—", "Living + dining rooms"],
                    ["Sanitaryware", "Hindware / Parryware", "Kohler / Roca / Grohe"],
                    ["Smart wiring", "—", "Conduit + basic automation"],
                    ["Landscaping", "—", "Walkway & garden lighting"],
                    ["Warranty", "5 years structural", "10 years structural"],
                  ].map(([category, std, prem], i) => (
                    <tr key={i} className="border-b border-ink-line">
                      <td className="py-3.5 pr-4 font-sans text-sm font-medium text-bone">{category}</td>
                      <td className="py-3.5 pr-4 text-sm text-bone-muted">{std}</td>
                      <td className="py-3.5 text-sm font-medium text-bone-soft">{prem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile: stacked cards */}
            <div className="sm:hidden space-y-3">
              {[
                ["Architectural design", "Floor plan & 3D elevation", "Custom design with unlimited revisions"],
                ["Structure", "Standard RCC", "M25 concrete with FE-500 steel"],
                ["Electrical", "Basic layout & fittings", "Legrand / Anchor modular switches"],
                ["Plumbing", "PVC pipes, standard fittings", "Concealed CPVC with Jaquar"],
                ["Flooring", "Standard vitrified tiles", "Double-charged vitrified + designer tiles"],
                ["Doors", "Flush doors with laminate", "Teakwood frame with veneer & polish"],
                ["Windows", "UPVC with mosquito mesh", "Premium aluminium, toughened glass"],
                ["Paint", "Standard emulsion", "Asian Paints Royale or equivalent"],
                ["Kitchen", "Granite platform", "Full modular (Hettich / Blum hardware)"],
                ["False ceiling", "—", "Living + dining rooms"],
                ["Sanitaryware", "Hindware / Parryware", "Kohler / Roca / Grohe"],
                ["Smart wiring", "—", "Conduit + basic automation"],
                ["Landscaping", "—", "Walkway & garden lighting"],
                ["Warranty", "5 years structural", "10 years structural"],
              ].map(([category, std, prem], i) => (
                <div key={i} className="rounded-xl border border-ink-line bg-ink p-4">
                  <p className="font-sans text-sm font-medium text-bone">{category}</p>
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-bone-muted">Standard</p>
                      <p className="mt-0.5 text-sm text-bone-muted">{std}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-bone-muted">Premium</p>
                      <p className="mt-0.5 text-sm font-medium text-bone-soft">{prem}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="border-t border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal flex flex-col items-center text-center">
            <p className="section-label mb-4">Not sure which package fits?</p>
            <h2 className="text-balance max-w-2xl">
              <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
                Let us size it for your plot.
              </span>
              <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">
                No commitment needed.
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-bone-soft">
              Share your plot area and we will send you a detailed scope and cost estimate — at no charge. Our architects will walk you through every line item.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover">
                Get a free estimate
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a href="tel:+916361889281" className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-7 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover">
                Call +91 63618 89281
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
