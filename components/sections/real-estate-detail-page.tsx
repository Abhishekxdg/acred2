"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  FileSearch,
  ShieldCheck,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const offerings = [
  {
    title: "Buyer Advisory",
    desc: "Shortlisting, pricing checks, site visits, negotiation support, and technical review before you commit.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Seller Representation",
    desc: "Positioning, documentation readiness, valuation logic, buyer qualification, and transaction coordination.",
    image:
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Investment Underwriting",
    desc: "Yield, absorption, exit scenarios, cost assumptions, and downside risk mapped before capital moves.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Land & Development Advisory",
    desc: "Plot feasibility, development potential, approvals path, access, infrastructure, and buildability review.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Leasing Strategy",
    desc: "Tenant fit, rent benchmarking, commercial terms, lock-in structure, and handover readiness.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Portfolio Review",
    desc: "Hold, sell, refurbish, lease, or redevelop decisions backed by market evidence and technical context.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
];

const advisoryGroups = [
  {
    label: "For buyers",
    title: "Confidence before commitment",
    items: [
      "Micro-market comparison",
      "Fair-value assessment",
      "Site and access review",
      "Developer and project checks",
      "Negotiation support",
      "Closing coordination",
    ],
  },
  {
    label: "For sellers",
    title: "A sharper path to market",
    items: [
      "Pricing and positioning",
      "Document readiness",
      "Buyer filtering",
      "Marketing narrative",
      "Offer comparison",
      "Transaction support",
    ],
  },
  {
    label: "For investors",
    title: "Risk priced before return",
    items: [
      "Acquisition thesis",
      "Yield and exit modelling",
      "Development feasibility",
      "Lease and demand review",
      "Capex assumptions",
      "Hold-phase advisory",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Brief & Mandate",
    body: "We define the asset type, budget, risk appetite, location logic, timing, and decision criteria.",
  },
  {
    step: "02",
    title: "Market Mapping",
    body: "Comparable assets, current supply, demand signals, pricing bands, rentals, and absorption are mapped clearly.",
  },
  {
    step: "03",
    title: "Technical Diligence",
    body: "Our architects and engineers review site conditions, access, buildability, services, and improvement potential.",
  },
  {
    step: "04",
    title: "Title & Document Review",
    body: "Ownership documents, approvals, RERA status, encumbrances, and transaction dependencies are checked with counsel.",
  },
  {
    step: "05",
    title: "Negotiation & Structure",
    body: "We compare offers, shape terms, manage red flags, and keep the transaction aligned with the real asset value.",
  },
  {
    step: "06",
    title: "Close & Hold Strategy",
    body: "After closing, we support leasing, refurbishment, development planning, or long-term asset management decisions.",
  },
];

const faqs = [
  {
    q: "Do you help both buyers and sellers?",
    a: "Yes. ACRED advises buyers, sellers, landowners, investors, and families. The mandate is defined upfront so our role, scope, and conflict boundaries are clear.",
  },
  {
    q: "How is ACRED different from a broker?",
    a: "We combine market mapping with architecture, engineering, and construction judgement. That means we look beyond price and evaluate buildability, future capex, approvals, and real use potential.",
  },
  {
    q: "Do you handle legal due diligence?",
    a: "We coordinate document review with legal counsel and help identify title, approval, RERA, encumbrance, and transaction risks before a deal moves forward.",
  },
  {
    q: "Can you evaluate land for development?",
    a: "Yes. We review plot dimensions, access, zoning, infrastructure, saleable potential, approval path, construction cost assumptions, and exit scenarios.",
  },
  {
    q: "Do you support after purchase?",
    a: "Yes. Depending on the asset, we can support leasing, renovation, construction, repositioning, and hold-phase asset decisions.",
  },
];

const featured = projects
  .filter((project) =>
    ["Development", "Real Estate", "Commercial", "Mixed-Use"].some((term) =>
      `${project.role} ${project.category}`.toLowerCase().includes(term.toLowerCase())
    )
  )
  .slice(0, 3);

export function RealEstateDetailPage() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const offeringsRef = useRef<HTMLElement>(null);
  const advisoryRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const selectedRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sections = [
        heroRef,
        statsRef,
        offeringsRef,
        advisoryRef,
        processRef,
        selectedRef,
        faqRef,
        ctaRef,
      ];

      sections.forEach((ref) => {
        if (!ref.current) return;

        gsap.from(ref.current.querySelectorAll(".gsap-reveal"), {
          y: 30,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    {}
  );

  return (
    <>
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28"
      >
        <div className="container-acred">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="gsap-reveal lg:col-span-7">
              <p className="section-label mb-4 sm:mb-6">Real Estate Advisory</p>
              <h1 className="text-balance">
                <span className="block font-sans text-display-lg font-bold leading-[0.95] tracking-tight text-bone sm:text-display-xl">
                  True value,
                </span>
                <span className="block font-serif text-display-lg italic leading-[1.05] text-bone/85 sm:text-display-xl">
                  mapped and verified.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">
                ACRED advises buyers, sellers, landowners, and investors with the
                discipline of a studio that understands design, approvals, construction,
                and long-term asset value.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="group inline-flex cursor-hover items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3"
                >
                  Discuss an asset
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#offerings"
                  className="group inline-flex cursor-hover items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone"
                >
                  Explore advisory
                </a>
              </div>
            </div>

            <div className="gsap-reveal lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink-soft sm:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80"
                  alt="Tower at dusk with warm interior lights"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-10 sm:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: FileSearch, label: "Diligence First", desc: "Documents, site, market, and risk" },
              { icon: BarChart3, label: "Market Mapping", desc: "Comparable pricing and demand" },
              { icon: ShieldCheck, label: "RERA-Aware Review", desc: "Approval and compliance checks" },
              { icon: Building2, label: "Built-Asset Lens", desc: "Architecture and construction insight" },
            ].map((item) => (
              <div key={item.label} className="gsap-reveal flex items-start gap-3">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-sans text-sm font-medium text-bone">{item.label}</p>
                  <p className="text-xs text-bone-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={offeringsRef}
        id="offerings"
        className="container-acred py-16 md:py-20 lg:py-28"
      >
        <div className="gsap-reveal mb-10 max-w-4xl sm:mb-12">
          <p className="section-label mb-4">Our Offerings</p>
          <h2 className="text-balance">
            <span className="block font-sans text-display-md font-bold leading-[0.95] tracking-tight text-bone sm:text-display-lg">
              Real estate decisions,
            </span>
            <span className="block font-serif text-display-md italic leading-[1.05] text-bone/85 sm:text-display-lg">
              grounded in evidence.
            </span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering) => (
            <article key={offering.title} className="gsap-reveal group cursor-hover">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink-soft">
                <Image
                  src={offering.image}
                  alt={offering.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="font-sans text-base font-medium text-bone transition-colors group-hover:text-gold">
                  {offering.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-bone-muted">
                  {offering.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section ref={advisoryRef} className="container-acred py-16 md:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="gsap-reveal lg:col-span-4">
            <p className="section-label mb-4">Mandates</p>
            <h2 className="text-balance">
              <span className="block font-sans text-display-md font-bold leading-[0.95] tracking-tight text-bone sm:text-display-lg">
                Different clients.
              </span>
              <span className="block font-serif text-display-md italic leading-[1.05] text-bone/85 sm:text-display-lg">
                Same discipline.
              </span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-bone-muted sm:text-base">
              Each mandate is scoped around the decision in front of you: acquire,
              sell, lease, hold, renovate, or develop.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3 lg:col-span-8">
            {advisoryGroups.map((group) => (
              <div key={group.title} className="gsap-reveal">
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                  {group.label}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-bone sm:text-3xl">
                  {group.title}
                </h3>
                <div className="mt-6 rule" />
                <ul className="mt-6 grid gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-ink-line pb-3 text-sm leading-relaxed text-bone-soft"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                        *
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={processRef} className="container-acred py-16 md:py-20 lg:py-28">
        <div className="gsap-reveal mb-10 max-w-4xl sm:mb-12">
          <p className="section-label mb-4">How It Works</p>
          <h2 className="text-balance">
            <span className="block font-sans text-display-md font-bold leading-[0.95] tracking-tight text-bone sm:text-display-lg">
              From first brief
            </span>
            <span className="block font-serif text-display-md italic leading-[1.05] text-bone/85 sm:text-display-lg">
              to confident close.
            </span>
          </h2>
        </div>
        <div className="grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="gsap-reveal border border-ink-line bg-ink-soft p-6 sm:p-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                {step.step}
              </p>
              <h3 className="mt-4 font-serif text-xl text-bone sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-bone-soft">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={selectedRef} className="container-acred py-16 md:py-20 lg:py-28">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="gsap-reveal">
            <p className="section-label mb-4">Selected Work</p>
            <h2 className="text-balance">
              <span className="block font-sans text-display-md font-bold leading-[0.95] tracking-tight text-bone sm:text-display-lg">
                Where asset thinking
              </span>
              <span className="block font-serif text-display-md italic leading-[1.05] text-bone/85 sm:text-display-lg">
                shows up.
              </span>
            </h2>
          </div>
          <div className="gsap-reveal">
            <Link
              href="/projects"
              className="group inline-flex cursor-hover items-center gap-2.5 rounded-full border border-bone/15 px-5 py-2 font-sans text-sm text-bone-muted transition-all hover:border-bone hover:text-bone"
            >
              All projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3">
          {featured.map((project) => (
            <div key={project.slug} className="gsap-reveal">
              <Link href={`/projects/${project.slug}`} className="group block cursor-hover">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-ink-muted">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="mt-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                    {project.location} · {project.year}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-bone transition-colors group-hover:text-gold sm:text-2xl">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section ref={faqRef} className="container-acred py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="gsap-reveal mb-10 text-center sm:mb-12">
            <p className="section-label mb-4">Frequently Asked Questions</p>
            <h2 className="font-sans text-display-md font-bold leading-[0.95] tracking-tight text-bone">
              Everything you need to know.
            </h2>
          </div>
          <div className="gsap-reveal">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`item-${index}`}>
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-bone sm:text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-bone-soft sm:text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="border-t border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal flex flex-col items-center text-center">
            <p className="section-label mb-4">Start a mandate</p>
            <h2 className="max-w-3xl text-balance">
              <span className="block font-sans text-display-md font-bold leading-[0.95] tracking-tight text-bone sm:text-display-lg">
                Bring us the asset,
              </span>
              <span className="block font-serif text-display-md italic leading-[1.05] text-bone/85 sm:text-display-lg">
                we will map the risk.
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-bone-soft">
              Share the property, land parcel, portfolio, or investment brief. We will
              clarify the advisory path before you spend time or capital in the wrong place.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex cursor-hover items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3"
              >
                Book advisory call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+916361889281"
                className="group inline-flex cursor-hover items-center gap-2.5 rounded-full border border-bone/20 px-7 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone"
              >
                Call +91 63618 89281
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
