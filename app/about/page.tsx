import type { Metadata } from "next";
import Image from "next/image";
import { MotionReveal } from "@/components/motion-reveal";
import { site, disciplines } from "@/lib/content";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "ACRED is an integrated studio spanning architecture, construction, real estate, engineering, and development.",
};

const principles = [
  {
    n: "01",
    title: "Read before you draw.",
    body: "Every project begins with a walk and a written brief. We don't moodboard our way into a design.",
  },
  {
    n: "02",
    title: "Same hand, drawing to site.",
    body: "The architect on the page is the architect on the walk-through. Quality doesn't survive handoffs.",
  },
  {
    n: "03",
    title: "Engineer the promise.",
    body: "We don't promise what our engineers can't stand behind with signed drawings.",
  },
  {
    n: "04",
    title: "Price the risk, not the dream.",
    body: "Our advisory numbers are conservative on purpose. Our clients stay with us for decades because of it.",
  },
  {
    n: "05",
    title: "Skin in the game.",
    body: "On our own developments, we invest alongside our partners. Incentives shouldn't need explaining.",
  },
];

export default function AboutPage() {
  const visibleDisciplines = disciplines.filter((d) => d.slug !== "development");

  return (
    <>
      {/* Hero */}
      <section className="container-acred pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-16 lg:pt-36">
        <div className="grid gap-7 lg:grid-cols-12 lg:gap-14">
          <MotionReveal className="lg:col-span-8">
            <p className="section-label mb-5 sm:mb-6">The studio</p>
            <h1 className="text-balance">
              <span className="block font-sans font-bold text-display-lg leading-[0.95] tracking-tight text-bone sm:text-display-xl">One practice.</span>
              <span className="block font-serif italic text-display-lg leading-[1.05] text-bone/85 sm:text-display-xl">Many kinds of ground.</span>
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.15} className="flex flex-col justify-end lg:col-span-4">
            <p className="text-sm leading-relaxed text-bone-soft sm:text-base">
              {site.description} We&apos;re small on purpose: architects,
              engineers, builders, and advisors working close enough that the
              drawing, the cost, and the site stay in conversation.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 border-y border-ink-line py-4">
              <div>
                <p className="font-serif text-3xl leading-none text-bone">04</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                  Disciplines
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl leading-none text-bone">01</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                  Accountable team
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="container-acred pb-10 sm:pb-12 md:pb-16">
        <MotionReveal>
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
              alt="ACRED studio workspace"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </MotionReveal>
      </section>

      {/* Manifesto principles */}
      <section className="container-acred py-10 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <MotionReveal className="lg:col-span-4">
            <p className="section-label mb-6">The ACRED manifesto</p>
            <h2 className="text-balance">
              <span className="block font-sans font-bold text-display-lg leading-[0.95] tracking-tight text-bone">Five things</span>
              <span className="block font-serif italic text-display-lg leading-[1.05] text-bone/85">we believe.</span>
            </h2>
          </MotionReveal>

          <div className="lg:col-span-8">
            <div className="divide-y divide-ink-line border-y border-ink-line">
            {principles.map((p, i) => (
              <MotionReveal
                key={p.n}
                delay={i * 0.08}
                className="grid gap-3 py-5 sm:grid-cols-12 sm:gap-8 sm:py-6"
              >
                <div className="sm:col-span-2">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                    {p.n}
                  </p>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-serif text-2xl leading-tight text-bone">
                    {p.title}
                  </h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-sm leading-relaxed text-bone-soft">
                    {p.body}
                  </p>
                </div>
              </MotionReveal>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image grid */}
      <section className="container-acred py-6 sm:py-10 lg:py-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <MotionReveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
                alt="Concrete and timber detail"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Steel structure at dusk"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Disciplines summary */}
      <section className="container-acred py-10 sm:py-16 lg:py-20">
        <MotionReveal>
          <p className="section-label mb-4">Disciplines</p>
          <h2 className="text-balance">
            <span className="block font-sans font-bold text-display-lg leading-[0.95] tracking-tight text-bone">What sits</span>
            <span className="block font-serif italic text-display-lg leading-[1.05] text-bone/85">under the roof.</span>
          </h2>
        </MotionReveal>

        <div className="mt-8 divide-y divide-bone/10 border-y border-bone/10 sm:mt-12">
          {visibleDisciplines.map((d, i) => (
            <MotionReveal
              key={d.slug}
              delay={i * 0.05}
              className="group flex flex-col gap-4 py-7 sm:gap-6 sm:py-10 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                  {d.index}
                </span>
                <h3 className="font-serif text-2xl text-bone transition-colors group-hover:text-gold sm:text-3xl">
                  {d.label}
                </h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-bone-soft">
                {d.tagline}
              </p>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Numbers */}
      <section className="container-acred pb-14 sm:pb-24">
        <MotionReveal>
          <div className="grid grid-cols-2 gap-6 border-y border-ink-line py-8 sm:gap-8 sm:py-10 md:grid-cols-4">
            {[
              { n: "12", l: "Years practising" },
              { n: "48", l: "Projects delivered" },
              { n: "3.1M", l: "Sq. ft. built" },
              { n: "100%", l: "On-time handovers" },
            ].map((stat) => (
              <div key={stat.l}>
                <p className="font-serif text-display-md text-bone">{stat.n}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                  {stat.l}
                </p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </section>
    </>
  );
}
