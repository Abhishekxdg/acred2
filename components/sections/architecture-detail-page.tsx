"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Clock, Users, Wrench } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const services = [
  {
    title: "Modular Kitchen",
    desc: "Custom-designed kitchen units with premium finishes, soft-close hardware, and space-optimized layouts.",
    image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
  },
  {
    title: "Living Room Interiors",
    desc: "Complete living spaces with TV units, seating arrangements, lighting, and décor curated to your style.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
  },
  {
    title: "Wardrobe & Storage",
    desc: "Floor-to-ceiling wardrobes, walk-in closets, and smart storage that maximizes every square foot.",
    image: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
  },
  {
    title: "Bedroom Design",
    desc: "Master and guest bedrooms with custom bed frames, side tables, dressing units, and ambient lighting.",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
  },
  {
    title: "Bathroom Interiors",
    desc: "Modern bathrooms with premium fittings, tile layouts, vanity units, and waterproof storage.",
    image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
  },
  {
    title: "Pooja & Foyer",
    desc: "Traditional and contemporary prayer units, entryway consoles, and shoe cabinets with aesthetic appeal.",
    image: "https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Meet Your Designer",
    body: "Share your ideas and floor plan. Get personalised 3D designs and an instant quote for your space.",
  },
  {
    step: "02",
    title: "Book Your Order",
    body: "Pay a small advance to lock your designer and schedule. Your project is now in our system.",
  },
  {
    step: "03",
    title: "Finalise Your Design",
    body: "Choose materials, finishes, and colours. We lock the design and begin site masking and quality checks.",
  },
  {
    step: "04",
    title: "Send to Factory",
    body: "Modular cabinets are precision-cut, finished, and assembled at our factory with strict QC at every stage.",
  },
  {
    step: "05",
    title: "Dispatch & Install",
    body: "Units are dispatched to site. Our trained crew installs, aligns, and tests every hinge and handle.",
  },
  {
    step: "06",
    title: "Handover & Support",
    body: "Final walk-through, snag-list completion, and handover. Our care team stays on call post-installation.",
  },
];

const faqs = [
  {
    q: "How do I get started with ACRED Architecture?",
    a: "Fill out the contact form or call us directly. We'll schedule a free consultation at your site or our studio to understand your space, budget, and preferences.",
  },
  {
    q: "What is the typical timeline for a project?",
    a: "Standard modular interiors are completed in 45–60 days from design finalisation. Larger architectural projects involving structural changes may take 3–6 months depending on scope.",
  },
  {
    q: "Are the designs customisable?",
    a: "Every design is tailor-made to your floor plan, lifestyle, and taste. You can change layouts, materials, colours, and finishes until you are completely satisfied.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes. All our woodwork and modular installations come with a 10-year warranty on material and workmanship. We also provide annual maintenance check-ups.",
  },
  {
    q: "Can I visit your studio to see materials?",
    a: "Absolutely. Our Bengaluru studio has live displays of kitchens, wardrobes, finishes, and hardware. Book a virtual or in-person walkthrough with our team.",
  },
];

export function InteriorsDetailPage() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sections = [heroRef, statsRef, servicesRef, processRef, faqRef, ctaRef];
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
      <section ref={heroRef} className="relative overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28">
        <div className="container-acred">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="gsap-reveal lg:col-span-7">
              <p className="section-label mb-4 sm:mb-6">Interiors</p>
              <h1 className="whitespace-pre-line text-balance">
                <span className="block font-sans font-bold text-display-lg sm:text-display-xl leading-[0.95] tracking-tight text-bone">
                  <span className="whitespace-nowrap">End-to-end</span> home
                </span>
                <span className="block font-serif italic text-display-lg sm:text-display-xl leading-[1.05] text-bone/85">
                  interiors, designed by experts.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft sm:mt-8 sm:text-lg">
                From modular kitchens to complete home interiors — we design, build, and install
                every element to transform your space into something you love.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover"
                >
                  Get free estimate
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 font-sans text-sm font-medium text-bone transition-all hover:border-bone hover:text-bone cursor-hover"
                >
                  Explore services
                </a>
              </div>
            </div>
            <div className="gsap-reveal lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-soft">
                <Image
                  src="/A_real_photograph_202604261852 copy.jpeg"
                  alt="Modern interior living space"
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

      {/* Stats / Trust bar */}
      <section ref={statsRef} className="border-y border-ink-line bg-ink-muted">
        <div className="container-acred py-10 sm:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: ShieldCheck, label: "10 Year Warranty", desc: "On all woodwork" },
              { icon: Clock, label: "45-60 Day Delivery", desc: "Guaranteed timeline" },
              { icon: Users, label: "50+ Design Experts", desc: "In-house team" },
              { icon: Wrench, label: "Post-Install Support", desc: "Annual check-ups" },
            ].map((s) => (
              <div key={s.label} className="gsap-reveal flex items-start gap-3">
                <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-sans text-sm font-medium text-bone">{s.label}</p>
                  <p className="text-xs text-bone-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section ref={servicesRef} id="services" className="container-acred py-16 md:py-20 lg:py-28">
        <div className="gsap-reveal mb-10 sm:mb-12">
          <p className="section-label mb-4">Our Offerings</p>
          <h2 className="text-balance">
            <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
              Every corner of your home,
            </span>
            <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">
              designed with intention.
            </span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="gsap-reveal group cursor-hover">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink-soft">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="font-sans text-base font-medium text-bone transition-colors group-hover:text-gold">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-bone-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="container-acred py-16 md:py-20 lg:py-28">
        <div className="gsap-reveal mb-10 sm:mb-12">
          <p className="section-label mb-4">How It Works</p>
          <h2 className="text-balance">
            <span className="block font-sans font-bold text-display-md sm:text-display-lg leading-[0.95] tracking-tight text-bone">
              From design to move-in,
            </span>
            <span className="block font-serif italic text-display-md sm:text-display-lg leading-[1.05] text-bone/85">
              we handle it all.
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
              <h3 className="mt-3 font-sans text-base font-medium text-bone">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="container-acred py-16 md:py-20 lg:py-28">
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
                Let&apos;s design it together.
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-bone-soft">
              Book a free consultation with our design team. We&apos;ll visit your site,
              understand your needs, and deliver a detailed 3D design with a transparent quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-7 py-3 font-sans text-sm font-medium text-ink-soft transition-all hover:bg-bone/80 hover:gap-3 cursor-hover"
              >
                Book free consultation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
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
