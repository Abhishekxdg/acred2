"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Cpu,
  Gauge,
  Layers3,
  Ruler,
  ShieldCheck,
  Wrench,
  Zap,
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
    title: "Structural Engineering",
    desc: "RCC, steel, grids, spans, load paths, lateral systems, and structural detailing aligned with architecture.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Foundation & Geotechnical Strategy",
    desc: "Soil reports, foundation options, retaining systems, basement strategy, and ground-condition risk review.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "MEP Coordination",
    desc: "Electrical, plumbing, fire, HVAC, drainage, shafts, ceilings, and service routes coordinated before site work.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Civil & Site Infrastructure",
    desc: "Stormwater, grading, access, utilities, external works, and site systems planned around the building.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Building Performance",
    desc: "Daylight, thermal comfort, ventilation, envelope decisions, and efficiency targets set early enough to matter.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Engineering",
    desc: "BIM coordination, clash review, drawing control, schedules, and model-led checks that reduce site surprises.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  },
];

const engineeringGroups = [
  {
    label: "Structure",
    title: "Strength without waste",
    items: [
      "Structural grids and spans",
      "RCC and steel design",
      "Foundation coordination",
      "Load-path clarity",
      "Constructability review",
      "Site-stage inspections",
    ],
  },
  {
    label: "Services",
    title: "Systems that fit",
    items: [
      "Electrical load planning",
      "Plumbing and drainage routes",
      "HVAC and ventilation strategy",
      "Fire and life-safety inputs",
      "Shaft and ceiling coordination",
      "Testing and commissioning",
    ],
  },
  {
    label: "Performance",
    title: "Measured comfort",
    items: [
      "Daylight and glare review",
      "Thermal comfort targets",
      "Envelope decisions",
      "Water and energy efficiency",
      "Material performance inputs",
      "Operational handover notes",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Targets & Constraints",
    body: "We define structural, services, comfort, budget, site, approval, and construction constraints before engineering begins.",
  },
  {
    step: "02",
    title: "System Strategy",
    body: "Grids, foundations, shafts, MEP routes, envelope logic, and performance goals are resolved with the design team.",
  },
  {
    step: "03",
    title: "Coordinated Drawings",
    body: "Structural, MEP, civil, and architectural drawings are checked together so clashes are solved before the site inherits them.",
  },
  {
    step: "04",
    title: "Quantity & Buildability Review",
    body: "We review quantities, sequencing, procurement risk, access, tolerances, and details that affect cost and execution.",
  },
  {
    step: "05",
    title: "Site Engineering Support",
    body: "During construction, our engineers respond to site conditions, inspect critical stages, and keep drawings current.",
  },
  {
    step: "06",
    title: "Testing & Handover",
    body: "Systems are tested, defects are closed, and the handover includes the technical notes needed to operate the building.",
  },
];

const faqs = [
  {
    q: "Do you provide standalone engineering services?",
    a: "Yes. ACRED can provide engineering as a standalone scope or as part of a full architecture and construction mandate.",
  },
  {
    q: "Do your engineers work with external architects?",
    a: "Yes. We can coordinate with an external architect, review the design, prepare engineering drawings, and support construction-stage clarifications.",
  },
  {
    q: "What does MEP coordination include?",
    a: "It includes electrical, plumbing, drainage, HVAC, fire inputs, shaft planning, ceiling coordination, equipment locations, and clash review.",
  },
  {
    q: "Can you review an existing design for buildability?",
    a: "Yes. We can review structural logic, services routes, foundation assumptions, cost risks, site constraints, and execution sequencing.",
  },
  {
    q: "Do you support site execution?",
    a: "Yes. We provide stage inspections, drawing clarifications, site-condition responses, testing support, and commissioning checks.",
  },
];

const featured = projects
  .filter((project) =>
    ["Engineering", "Construction", "Development"].some((term) =>
      project.role.toLowerCase().includes(term.toLowerCase())
    )
  )
  .slice(0, 3);

export function EngineeringDetailPage() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const offeringsRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<HTMLElement>(null);
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
        scopeRef,
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
              <p className="section-label mb-4 sm:mb-6">Engineering</p>
              <h1 className="text-balance">
                <span className="block font-sans text-display-lg font-bold leading-[0.95] tracking-tight text-bone sm:text-display-xl">
                  Calculated reality,
                </span>
                <span className="block font-serif text-display-lg italic leading-[1.05] text-bone/85 sm:text-display-xl">
                  under every surface.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">
                ACRED engineers structure, services, site systems, and building
                performance alongside architecture and construction, so technical
                decisions support the design instead of fighting it on site.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="group inline-flex cursor-hover items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3"
                >
                  Discuss a project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#offerings"
                  className="group inline-flex cursor-hover items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone"
                >
                  Explore engineering
                </a>
              </div>
            </div>

            <div className="gsap-reveal lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink-soft sm:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1600&q=80"
                  alt="Precise engineered steel joint detail"
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
              { icon: Ruler, label: "Structural Logic", desc: "Grids, spans, load paths" },
              { icon: Zap, label: "MEP Coordination", desc: "Services resolved early" },
              { icon: Gauge, label: "Performance Targets", desc: "Comfort and efficiency" },
              { icon: ShieldCheck, label: "Site Verification", desc: "Inspections and testing" },
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
              Engineering that holds
            </span>
            <span className="block font-serif text-display-md italic leading-[1.05] text-bone/85 sm:text-display-lg">
              the whole building together.
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

      <section ref={scopeRef} className="container-acred py-16 md:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="gsap-reveal lg:col-span-4">
            <p className="section-label mb-4">Technical Scope</p>
            <h2 className="text-balance">
              <span className="block font-sans text-display-md font-bold leading-[0.95] tracking-tight text-bone sm:text-display-lg">
                Structure.
              </span>
              <span className="block font-serif text-display-md italic leading-[1.05] text-bone/85 sm:text-display-lg">
                Services. Performance.
              </span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-bone-muted sm:text-base">
              The technical package is split clearly, but coordinated as one building
              system so design, cost, and construction stay aligned.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3 lg:col-span-8">
            {engineeringGroups.map((group) => (
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
              From first constraint
            </span>
            <span className="block font-serif text-display-md italic leading-[1.05] text-bone/85 sm:text-display-lg">
              to tested handover.
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
                Where technical thinking
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
            <p className="section-label mb-4">Start engineering</p>
            <h2 className="max-w-3xl text-balance">
              <span className="block font-sans text-display-md font-bold leading-[0.95] tracking-tight text-bone sm:text-display-lg">
                Bring us the drawing,
              </span>
              <span className="block font-serif text-display-md italic leading-[1.05] text-bone/85 sm:text-display-lg">
                we will test the reality.
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-bone-soft">
              Share your site, concept, drawings, or technical problem. We will map the
              engineering scope, risks, and next decisions clearly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex cursor-hover items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3"
              >
                Book engineering call
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
