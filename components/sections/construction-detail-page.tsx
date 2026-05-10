"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Clock, Users, Wrench } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const services = [
  {
    title: "Turnkey Residential",
    desc: "Complete home construction from foundation to finish — one contract, one partner, zero handoff gaps.",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/packages",
  },
  {
    title: "Commercial Build-outs",
    desc: "Office spaces, retail stores, and hospitality interiors delivered on spec and on schedule.",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Structural Framing",
    desc: "Steel and concrete structural systems engineered by our in-house team for maximum integrity.",
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "MEP & Services",
    desc: "Mechanical, electrical, and plumbing coordination built into the construction sequence from day one.",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Finishes & Interiors",
    desc: "Flooring, ceilings, joinery, and paint executed by our own crew to architectural intent.",
    image: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Architectural Design",
    desc: "Master planning, 3D visualization, and detailed construction documentation under the same roof.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Pre-Construction",
    body: "Value engineering, site surveys, and permitting handled before the first concrete pour. No surprises.",
  },
  {
    step: "02",
    title: "Architectural Lock",
    body: "Drawings signed off by our architects and engineers. What is drawn is what is built — guaranteed.",
  },
  {
    step: "03",
    title: "Foundation & Structure",
    body: "Groundwork, framing, and core structure executed by our senior crew with real-time photo reporting.",
  },
  {
    step: "04",
    title: "MEP Integration",
    body: "Mechanical, electrical, and plumbing installed with full BIM coordination. Clashes are solved in the model.",
  },
  {
    step: "05",
    title: "Finishes & QC",
    body: "Joinery, tiling, paint, and fixtures installed by our own team. Every detail checked against the drawing.",
  },
  {
    step: "06",
    title: "Handover & Support",
    body: "Final walk-through, snag-list completion, and handover. Our care team stays on call post-installation.",
  },
];

const faqs = [
  {
    q: "Do you handle both design and construction?",
    a: "Yes. ACRED operates as a design-build practice. Our architects and construction team work side-by-side, eliminating the traditional gap between drawing and site.",
  },
  {
    q: "What is the typical timeline for a residential project?",
    a: "A standard 3-bedroom home takes 8–12 months from architectural sign-off to handover. Larger commercial projects range from 12–24 months depending on scope.",
  },
  {
    q: "How do you ensure quality on site?",
    a: "Weekly photo reports, stage-wise third-party inspections, and a red-flag column in every site report. Our senior partners visit active sites unannounced.",
  },
  {
    q: "Is there a warranty on construction work?",
    a: "Yes. All structural work carries a 10-year warranty. Finishes and MEP systems carry a 2-year warranty with annual maintenance check-ups included.",
  },
  {
    q: "Can you work with our existing architect?",
    a: "Absolutely. We regularly collaborate with external architects and designers. Our role shifts to general contractor with full MEP and finish execution.",
  },
];

gsap.registerPlugin(ScrollTrigger);

export function ConstructionDetailPage() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sections = [
        heroRef,
        statsRef,
        servicesRef,
        processRef,
        faqRef,
        ctaRef,
      ];
      sections.forEach((ref) => {
        if (!ref.current) return;
        const items = ref.current.querySelectorAll(".gsap-reveal");
        gsap.from(items, {
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
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28"
      >
        <div className="container-acred">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="gsap-reveal lg:col-span-7">
              <p className="section-label mb-4 sm:mb-6">
                Construction & Architecture
              </p>
              <h1 className="whitespace-pre-line text-balance">
                <span className="block font-sans font-bold text-display-lg sm:text-display-xl leading-[0.95] tracking-tight text-bone">
                  Design. Build.
                </span>
                <span className="block font-serif italic text-display-lg sm:text-display-xl leading-[1.05] text-bone/85">
                  Under one roof.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">
                From the first site walk to the final handover, ACRED architects
                and builders work as a single team. No drawings lost in
                translation. No finger-pointing.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#services"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover"
                >
                  Explore services
                </Link>
              </div>
            </div>

            <div className="gsap-reveal lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink-soft sm:aspect-[4/5]">
                <Image
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Construction site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-10 sm:py-12">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                label: "10 Year Warranty",
                desc: "On structural work",
              },
              {
                icon: Clock,
                label: "On-Time Delivery",
                desc: "Milestone-based tracking",
              },
              {
                icon: Users,
                label: "50+ Site Experts",
                desc: "In-house crew",
              },
              {
                icon: Wrench,
                label: "Design-Build",
                desc: "Single point of contact",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="gsap-reveal flex items-start gap-3"
              >
                <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-sans text-sm font-medium text-bone">
                    {s.label}
                  </p>
                  <p className="text-xs text-bone-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        ref={servicesRef}
        id="services"
        className="container-acred py-16 md:py-20 lg:py-28"
      >
        <div className="gsap-reveal mb-10 sm:mb-12">
          <p className="section-label mb-4">Our Services</p>
          <h2 className="text-balance">
            <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
              Every stage of the build,
            </span>
            <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">
              executed by us.
            </span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const CardBody = (
              <>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink-soft">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {s.href && (
                    <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold opacity-0 transition-opacity group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4 text-bone" />
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="font-sans text-base font-medium text-bone transition-colors group-hover:text-gold">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-bone-muted">
                    {s.desc}
                  </p>
                </div>
              </>
            );
            return s.href ? (
              <Link key={s.title} href={s.href} className="gsap-reveal group cursor-hover block">
                {CardBody}
              </Link>
            ) : (
              <div key={s.title} className="gsap-reveal group cursor-hover">
                {CardBody}
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section
        ref={processRef}
        className="container-acred py-16 md:py-20 lg:py-28"
      >
        <div className="gsap-reveal mb-10 sm:mb-12">
          <p className="section-label mb-4">How We Work</p>
          <h2 className="text-balance">
            <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
              From blueprint
            </span>
            <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">
              to brass tacks.
            </span>
          </h2>
        </div>
        <div className="grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <div
              key={s.step}
              className="gsap-reveal border border-ink-line bg-ink-soft p-6 sm:p-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                {s.step}
              </p>
              <h3 className="mt-3 font-sans text-base font-medium text-bone">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        ref={faqRef}
        className="container-acred py-16 md:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <div className="gsap-reveal mb-10 sm:mb-12 text-center">
            <p className="section-label mb-4">Frequently Asked Questions</p>
            <h2 className="font-sans font-bold text-display-md leading-[0.95] tracking-tight text-bone">
              Everything you need to know.
            </h2>
          </div>
          <div className="gsap-reveal">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
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

      {/* CTA */}
      <section ref={ctaRef} className="border-t border-ink-line bg-ink-muted">
        <div className="container-acred py-16 md:py-20 lg:py-28">
          <div className="gsap-reveal flex flex-col items-center text-center">
            <p className="section-label mb-4">Start your project</p>
            <h2 className="text-balance max-w-2xl">
              <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
                Have a floor plan or a vision?
              </span>
              <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">
                Let&apos;s build it together.
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-bone-soft">
              Book a free consultation. We&apos;ll visit your site, understand
              your needs, and deliver a detailed plan with a transparent quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover"
              >
                Book free consultation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+916361889281"
                className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-7 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover"
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
