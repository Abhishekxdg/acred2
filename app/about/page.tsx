import type { Metadata } from "next";
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
  return (
    <>
      {/* Hero */}
      <section className="container-acred pt-32 pb-16 md:pt-40 md:pb-24">
        <MotionReveal>
          <p className="eyebrow mb-6">The studio</p>
          <h1 className="font-serif text-display-xl text-bone text-balance">
            One practice.
            <br />
            <span className="text-bone-muted">Five disciplines held together by hand.</span>
          </h1>
        </MotionReveal>

        <MotionReveal delay={0.15} className="mt-12 max-w-3xl">
          <p className="text-lg leading-relaxed text-bone-soft">
            {site.description} We&apos;re small on purpose — a senior team of
            architects, engineers, builders, and advisors who would rather turn
            down a project than take on one we can&apos;t see through with our own
            hands.
          </p>
        </MotionReveal>
      </section>

      {/* Manifesto principles */}
      <section className="border-y border-ink-line bg-ink-soft">
        <div className="container-acred py-24">
          <MotionReveal>
            <p className="eyebrow mb-6">✦ The ACRED manifesto</p>
            <h2 className="font-serif text-display-lg text-bone text-balance">
              Five things we believe.
            </h2>
          </MotionReveal>

          <div className="mt-16 grid gap-px bg-bone/10 md:grid-cols-2 lg:grid-cols-5">
            {principles.map((p, i) => (
              <MotionReveal
                key={p.n}
                delay={i * 0.08}
                className="bg-ink-soft p-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                  {p.n}
                </p>
                <h3 className="mt-4 font-serif text-xl text-bone">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-bone-soft">
                  {p.body}
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines summary */}
      <section className="container-acred py-24">
        <MotionReveal>
          <p className="eyebrow mb-4">Disciplines</p>
          <h2 className="font-serif text-display-lg text-bone">
            What sits under the roof.
          </h2>
        </MotionReveal>

        <div className="mt-12 divide-y divide-bone/10 border-y border-bone/10">
          {disciplines.map((d, i) => (
            <MotionReveal
              key={d.slug}
              delay={i * 0.05}
              className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                  {d.index}
                </span>
                <h3 className="font-serif text-3xl text-bone">
                  {d.slug.replace("-", " ")}
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
      <section className="container-acred pb-24">
        <MotionReveal>
          <div className="grid gap-8 border-y border-bone/10 py-10 md:grid-cols-4">
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
