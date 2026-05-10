import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { AcredLogo } from "@/components/acred-logo";
import { HeroSlider } from "@/components/hero-slider";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Brochure · ACRED Interiors",
  description:
    "Download the ACRED Interiors brochure. Design is not decoration — it is intention. End-to-end home interiors, modular kitchens, living rooms, and complete home design.",
  path: "/brochure",
  keywords: [
    "brochure",
    "interiors brochure",
    "home design brochure",
    "ACRED brochure",
  ],
});

/* ─────────────── helpers ─────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[10px] uppercase tracking-widest2 text-gold sm:mb-6">
      {children}
    </p>
  );
}

function Hairline({ className = "" }: { className?: string }) {
  return <div className={`h-px w-12 bg-gold/60 ${className}`} />;
}

function SectionTag({ n, label }: { n: string; label: string }) {
  return (
    <p className="mb-4 font-mono text-[10px] uppercase tracking-widest2 text-gold sm:mb-6">
      {n} — {label}
    </p>
  );
}

function PlayfairHead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-serif leading-[1.05] tracking-tight text-bone ${className}`}>
      {children}
    </h2>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-sm leading-[1.75] text-bone/60 sm:text-base ${className}`}>
      {children}
    </p>
  );
}

/* ─────────────── images ─────────────── */

const I = {
  p1: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
  p2: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
  p3: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
  p4a: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  p4b: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop",
  p4c: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop",
  p4d: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
  p5a: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  p5b: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop",
  p5c: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
  p5d: "https://images.unsplash.com/photo-1556909114-f6e7ad563af4?q=80&w=800&auto=format&fit=crop",
  p6a: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
  p6b: "https://images.unsplash.com/photo-1556909114-7e05a76a13b9?q=80&w=800&auto=format&fit=crop",
  p6c: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  p7: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  p8a: "https://images.unsplash.com/photo-1556909114-f6e7ad563af4?q=80&w=600&auto=format&fit=crop",
  p8b: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
  p8c: "https://images.unsplash.com/photo-1556909114-7e05a76a13b9?q=80&w=600&auto=format&fit=crop",
  p8d: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=600&auto=format&fit=crop",
  p8e: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600&auto=format&fit=crop",
  p9a: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  p9b: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
  p10a: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  p10b: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
  p10c: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
  p10d: "https://images.unsplash.com/photo-1556909114-f6e7ad563af4?q=80&w=800&auto=format&fit=crop",
  p11: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  p12: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
};

/* ════════════════════════════════════════ */

export default function BrochurePage() {
  return (
    <div className="bg-ink text-bone">
      {/* ═════════════════ P1 — COVER ═════════════════ */}
      <section className="relative min-h-[100dvh] overflow-hidden">
        <HeroSlider />
        <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/50 to-transparent" />

        <div className="relative z-10 flex h-[100dvh] flex-col justify-between p-6 sm:p-10 md:p-16">
          <div>
            <AcredLogo className="w-[180px] sm:w-[220px]" variant="white" />
          </div>

          <div className="max-w-xl">
            <MotionReveal>
              <h1 className="font-serif text-[clamp(2.8rem,9vw,5.5rem)] font-light leading-[0.95] tracking-tight text-ink">
                Spaces that speak to your soul.
              </h1>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/70 sm:text-base">
                Where architectural precision meets the warmth of Indian living.
              </p>
              <Link
                href="#philosophy"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-gold transition-colors hover:text-gold-soft"
              >
                Discover Our Approach <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* ═════════════════ P2 — PHILOSOPHY ═════════════════ */}
      <section id="philosophy" className="min-h-[100dvh]">
        <div className="grid min-h-[100dvh] lg:grid-cols-2">
          {/* Left — dark panel */}
          <div className="flex flex-col justify-between bg-night p-8 sm:p-12 md:p-16">
            <div>
              <SectionTag n="02" label="Our Philosophy" />
              <PlayfairHead className="text-display-lg sm:text-display-xl text-ink">
                Design is not decoration.
                <br />
                <span className="italic text-ink/85">It is intention.</span>
              </PlayfairHead>
              <Hairline className="mt-6" />
              <Body className="mt-6 max-w-md text-ink/50">
                Interior design is the art and science of shaping the spaces where life unfolds. At ACRED, we believe every home is a story — and great design is the language it speaks.
              </Body>
              <Body className="mt-4 max-w-md text-ink/50">
                We listen first. We plan with precision. We execute with care.
              </Body>
              <Body className="mt-4 max-w-md text-ink/50">
                From a 1 BHK in Pune to a sprawling villa in Bengaluru, our approach is constant: understand the family, honour the space, and create a home that grows with you.
              </Body>
            </div>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-widest2 text-gold">
              200+ Projects · 15+ Cities
            </p>
          </div>

          {/* Right — image */}
          <div className="relative min-h-[50vh] lg:min-h-full">
            <Image src={I.p2} alt="" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-night to-transparent lg:w-32" />
          </div>
        </div>
      </section>

      {/* ═════════════════ P3 — WHAT IS DESIGN? ═════════════════ */}
      <section className="min-h-[100dvh]">
        <div className="grid min-h-[100dvh] lg:grid-cols-2">
          {/* Left — warm beige */}
          <div className="flex flex-col justify-between bg-ink p-8 sm:p-12 md:p-16">
            <div>
              <SectionTag n="03" label="What Is Interior Design?" />
              <PlayfairHead className="text-display-lg text-bone">
                Your home is your most personal canvas.
              </PlayfairHead>
              <Body className="mt-6 max-w-lg">
                Interior design goes far beyond choosing paint colours or furniture styles. It is the disciplined practice of planning, coordinating, and managing every element within a space — light, scale, material, flow, and emotion.
              </Body>
            </div>

            {/* Three-question bar */}
            <div className="mt-10 grid grid-cols-3 gap-px bg-bone/10 sm:mt-14">
              {[
                { q: "How does it look?", a: "Aesthetics" },
                { q: "How does it work?", a: "Function" },
                { q: "How does it feel?", a: "Emotion" },
              ].map((item) => (
                <div key={item.a} className="bg-ink p-4 text-center sm:p-6">
                  <p className="font-serif text-lg text-bone sm:text-xl">{item.q}</p>
                  <div className="mx-auto mt-2 h-px w-8 bg-gold" />
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-gold">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative min-h-[50vh] lg:min-h-full">
            <Image src={I.p3} alt="" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      {/* ═════════════════ P4 — FOUR PILLARS ═════════════════ */}
      <section className="bg-ink px-6 py-16 sm:px-10 sm:py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <MotionReveal>
            <p className="text-center font-mono text-[10px] uppercase tracking-widest2 text-gold">
              What we plan before anything else is chosen.
            </p>
            <h2 className="mt-4 text-center font-serif text-display-lg text-bone">
              The Four Pillars of Design
            </h2>
          </MotionReveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              { n: "01", title: "Space Planning", desc: "Optimal furniture layout for movement, comfort, and daily flow.", img: I.p4a },
              { n: "02", title: "Light Architecture", desc: "Layered lighting that sets the mood for every hour of the day.", img: I.p4b },
              { n: "03", title: "Colour & Texture", desc: "Cohesive palettes that age gracefully and feel distinctly yours.", img: I.p4c },
              { n: "04", title: "Material Intelligence", desc: "Materials chosen for durability, beauty, and climate suitability.", img: I.p4d, wide: true },
            ].map((p) => (
              <MotionReveal key={p.n} delay={Number(p.n) * 0.05}>
                <div className={`${p.wide ? "lg:bg-gold/5 lg:px-4 lg:py-2" : ""}`}>
                  <div className="relative aspect-square w-full overflow-hidden bg-ink-line">
                    <Image src={p.img} alt="" fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                  </div>
                  <p className="mt-4 font-serif text-4xl text-gold/20">{p.n}</p>
                  <h3 className="mt-1 font-serif text-xl text-bone sm:text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone/60">{p.desc}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════ P5 — HARD TRUTHS I ═════════════════ */}
      <section className="bg-ink px-6 py-16 sm:px-10 sm:py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionTag n="05" label="The Hard Truths" />
          <PlayfairHead className="max-w-2xl text-display-md italic text-bone sm:text-display-lg">
            Mistakes that cost Indian homeowners lakhs — and years of regret.
          </PlayfairHead>
          <Body className="mt-4 max-w-xl">
            Most homeowners discover these errors only after moving in. At ACRED, we flag every single one before your project begins.
          </Body>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                n: "01",
                title: "Starting Without a Master Plan",
                body: "Deciding room by room creates a disconnected home. By the time you realise, it's too late to alter the plumbing, wiring, or load-bearing walls.",
                fix: "We begin every project with a full-home blueprint — no room is designed in isolation.",
                img: I.p5a,
              },
              {
                n: "02",
                title: "One Bulb. One Room. One Regret.",
                body: "The classic Indian flat — one bright white tube light per room. Lighting is emotion. Ambient, task, and accent layers transform a space entirely.",
                fix: "Every space gets a dedicated lighting plan — designed before a single fixture is purchased.",
                img: I.p5b,
              },
              {
                n: "03",
                title: "Wrong-Scale Furniture",
                body: "Indian urban apartments demand precise proportion planning — not showroom templates.",
                fix: "Every piece measured and modelled in 3D before ordering.",
                img: I.p5c,
              },
              {
                n: "04",
                title: "Afterthought Electrical Points",
                body: "Electrical planning is invisible when done right — catastrophic when ignored.",
                fix: "Layouts drawn room-by-room, mapping every daily habit.",
                img: I.p5d,
              },
            ].map((m) => (
              <MotionReveal key={m.n}>
                <div className="relative overflow-hidden border border-ink-line bg-ink-soft">
                  <div className="relative h-48 w-full sm:h-56">
                    <Image src={m.img} alt="" fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="absolute right-4 top-4 font-serif text-5xl text-bone/[0.04] sm:right-6 sm:top-6 sm:text-6xl">
                      {m.n}
                    </p>
                    <h3 className="font-serif text-xl text-bone sm:text-2xl">{m.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-bone/60">{m.body}</p>
                    <div className="mt-4 border-l-2 border-gold bg-gold/5 p-4">
                      <p className="text-sm leading-relaxed text-bone/80">
                        <span className="text-gold">ACRED: </span>{m.fix}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════ P6 — HARD TRUTHS II ═════════════════ */}
      <section className="bg-ink px-6 py-16 sm:px-10 sm:py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                n: "05",
                title: "Copying Instagram Blindly",
                body: "That glossy white kitchen photographed in Milan doesn't survive Indian cooking, humidity, or a family of four. Trends are inspiration — not instruction.",
                fix: "We adapt global trends to Indian lifestyles — localised for climate, cooking habits, and daily use.",
                img: I.p6a,
              },
              {
                n: "06",
                title: "Underestimating Storage",
                body: "Beautiful open shelves become clutter magnets within months. Indian households need intelligently hidden storage for festival items, spare linen, and the thousand things life accumulates.",
                fix: "We build storage strategies into the initial design — not as an afterthought.",
                img: I.p6b,
              },
            ].map((m) => (
              <MotionReveal key={m.n}>
                <div className="relative overflow-hidden border border-ink-line bg-ink-soft">
                  <div className="relative h-48 w-full sm:h-56">
                    <Image src={m.img} alt="" fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="absolute right-4 top-4 font-serif text-5xl text-bone/[0.04] sm:right-6 sm:top-6 sm:text-6xl">{m.n}</p>
                    <h3 className="font-serif text-xl text-bone sm:text-2xl">{m.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-bone/60">{m.body}</p>
                    <div className="mt-4 border-l-2 border-gold bg-gold/5 p-4">
                      <p className="text-sm leading-relaxed text-bone/80"><span className="text-gold">ACRED: </span>{m.fix}</p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* Gallery strip */}
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {[I.p5c, I.p6b, I.p6c].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] w-full overflow-hidden bg-ink-line">
                <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>

          {/* Mistake 08 — full width */}
          <MotionReveal>
            <div className="mt-6 overflow-hidden border border-ink-line bg-ink-soft p-6 sm:p-10 md:p-12">
              <p className="font-serif text-6xl text-bone/[0.04] sm:text-8xl">08</p>
              <h3 className="mt-2 font-serif text-2xl text-bone sm:text-3xl">Chasing Trends Over Timelessness</h3>
              <Body className="mt-4 max-w-3xl">
                Trendy finishes feel exciting today and look dated in three years. Homes built on timeless principles — neutral foundations, quality materials, flexible accents — remain beautiful for decades, not seasons.
              </Body>
              <div className="mt-4 inline-block border-l-2 border-gold bg-gold/5 p-4">
                <p className="text-sm leading-relaxed text-bone/80"><span className="text-gold">ACRED: </span>We design for the long view. Trends inform our accents; they never drive our structure.</p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* ═════════════════ P7 — CLIMATE ═════════════════ */}
      <section className="relative min-h-[100dvh] overflow-hidden">
        <Image src={I.p7} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-night/40" />

        <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end p-6 sm:p-10 md:p-16">
          <div className="max-w-3xl">
            <SectionTag n="07" label="Climate, Ventilation & Solar" />
            <PlayfairHead className="text-display-lg text-ink sm:text-display-xl">
              Homes that breathe intelligently.
            </PlayfairHead>
            <Body className="mt-5 max-w-xl text-ink/70">
              A dark material absorbing heat in Chennai. A west-facing living room with no glare control. A kitchen with no cross-ventilation in Mumbai&apos;s monsoon. Most homeowners live with these failures for decades.
            </Body>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Sun-Path Analysis", body: "We map exactly how sunlight moves through your unit across every season before any material or layout is finalised." },
                { title: "Wind-Flow Studies", body: "We design natural ventilation pathways that keep your home cooler in summer and warmer in winter — without relying entirely on air conditioning." },
                { title: "Climate-Responsive Materials", body: "Every material is chosen for the specific climate of the city you live in. Standard in every ACRED project." },
              ].map((c) => (
                <div key={c.title} className="border border-gold/30 bg-night/60 p-5 backdrop-blur-sm">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">✦ {c.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{c.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 font-serif text-xl italic text-ink/90 sm:text-2xl">
              “The result? Homes that breathe intelligently.”
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════ P8 — MATERIALS ═════════════════ */}
      <section className="bg-ink px-6 py-16 sm:px-10 sm:py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <MotionReveal>
            <PlayfairHead className="text-display-md text-bone sm:text-display-lg">
              Material Intelligence
            </PlayfairHead>
            <Body className="mt-2 max-w-lg italic">
              What you choose lives with you forever.
            </Body>
          </MotionReveal>

          {/* Gallery row */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
            {[
              { src: I.p8a, label: "Floor" },
              { src: I.p8b, label: "Finish" },
              { src: I.p8c, label: "Kitchen" },
              { src: I.p8d, label: "Walls" },
              { src: I.p8e, label: "Hardware" },
            ].map((m) => (
              <div key={m.label}>
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink-line">
                  <Image src={m.src} alt="" fill className="object-cover" sizes="(min-width: 640px) 20vw, 50vw" />
                </div>
                <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-widest text-gold">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Five columns */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {[
              { title: "Flooring", body: "Marble: timeless, high-maintenance. Vitrified: practical for kitchens & balconies. Engineered wood: warmth without warping — ideal for bedrooms." },
              { title: "Finish", body: "High-gloss: luxurious but shows fingerprints. Matte: hides wear — ideal for Indian families. Satin: the balance — cleanable, refined, reflective." },
              { title: "Kitchen", body: "Laminates: durable, budget-friendly. Acrylic: premium look, moderate upkeep. PU Paint: richest finish — choose based on cooking intensity." },
              { title: "Walls", body: "High-quality emulsion is the backbone. Textured finishes add depth. Wood or stone accent panels: use on one focal wall only — never all four." },
              { title: "Hardware", body: "Soft-close hinges, stainless steel channels, anti-termite treatments, moisture-resistant boards. Invisible investments. Determines whether your interior ages gracefully or deteriorates in five years.", verdict: true },
            ].map((c) => (
              <MotionReveal key={c.title}>
                <div>
                  <h4 className="font-serif text-lg text-bone">{c.title}</h4>
                  <p className={`mt-2 text-sm leading-relaxed ${c.verdict ? "text-gold" : "text-bone/60"}`}>{c.body}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════ P9 — SMART SPACE ═════════════════ */}
      <section className="min-h-[100dvh]">
        <div className="grid min-h-[100dvh] lg:grid-cols-2">
          {/* Left — dark panel */}
          <div className="flex flex-col justify-between bg-night p-8 sm:p-12 md:p-16">
            <div>
              <SectionTag n="09" label="Smart Space Utilisation" />
              <PlayfairHead className="text-display-lg text-ink">
                Every inch, considered.
              </PlayfairHead>

              <div className="mt-8 space-y-6">
                {[
                  { n: "①", title: "The 30-Inch Rule", body: "Every walkway needs a minimum 30 inches of clearance." },
                  { n: "②", title: "Vertical Space Is Untapped Gold", body: "Floor-to-ceiling units can double your storage without taking floor area." },
                  { n: "③", title: "Zone Your Open-Plan Living", body: "Use rugs, lighting zones, and level changes without erecting walls." },
                  { n: "④", title: "Multi-Functional Furniture", body: "Every piece in an Indian apartment should ideally serve two purposes." },
                  { n: "⑤", title: "The Balcony — Your Forgotten Room", body: "With the right flooring and compact furniture, it becomes the most loved corner." },
                ].map((tip) => (
                  <div key={tip.n} className="border-b border-gold/20 pb-5">
                    <h4 className="font-serif text-lg text-ink">{tip.n} {tip.title}</h4>
                    <p className="mt-1 text-sm text-ink/50">{tip.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lighting rule box */}
            <div className="mt-8 border border-gold/30 p-5 sm:mt-10 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">The ACRED Lighting Rule</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Every room: <span className="text-ink">Ambient</span> (overall glow) + <span className="text-ink">Task</span> (work & cooking) + <span className="text-ink">Accent</span> (textures & art). Non-negotiable in any premium interior.
              </p>
            </div>
          </div>

          {/* Right — stacked images */}
          <div className="relative flex flex-col min-h-[50vh] lg:min-h-full">
            <div className="relative flex-[2] w-full">
              <Image src={I.p9a} alt="" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative flex-1 w-full">
              <Image src={I.p9b} alt="" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-night to-transparent lg:w-32" />
          </div>
        </div>
      </section>

      {/* ═════════════════ P10 — TRENDS ═════════════════ */}
      <section className="bg-ink px-6 py-16 sm:px-10 sm:py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionTag n="10" label="What Is Current" />
          <PlayfairHead className="text-display-md text-bone sm:text-display-lg">
            Design directions for India in 2025–26.
          </PlayfairHead>

          {/* Trend gallery */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { src: I.p10a, n: "01", title: "Warm Minimalism", body: "Warm creams, sand tones, terracotta accents, and natural wood — a palette that feels calm, grounded, and deeply liveable." },
              { src: I.p10b, n: "02", title: "Biophilic Design", body: "Indoor plants, natural stone, jute textures, large windows — clinically proven to reduce stress. Indian homes are embracing this wholeheartedly." },
              { src: I.p10c, n: "03", title: "Indian Craft Revival", body: "Brass fixtures, Rajasthani jaali screens, Kalamkari upholstery, Madhubani wall art. Heritage craft over imported sameness." },
              { src: I.p10d, n: "04", title: "Hidden Smart Home", body: "Concealed wiring, recessed panels, flush-mounted devices. The best smart homes look like they have none." },
            ].map((t) => (
              <MotionReveal key={t.n}>
                <div className="relative">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink-line">
                    <Image src={t.src} alt="" fill className="object-cover" sizes="(min-width: 640px) 25vw, 50vw" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/80 to-transparent p-3 sm:p-4">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-gold">{t.n} — {t.title}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-bone/60">{t.body}</p>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* Bottom split */}
          <div className="mt-12 grid lg:grid-cols-2">
            {/* Vastu — dark */}
            <div className="bg-night p-8 sm:p-12 md:p-16">
              <h3 className="font-serif text-2xl text-ink sm:text-3xl">Vastu Shastra</h3>
              <Body className="mt-4 max-w-md text-ink/50">
                Vastu Shastra is integral to the Indian home. Modern design and Vastu need not conflict. We design spaces that honour Vastu principles — orientation, room placement, energy flow — while achieving a clean, contemporary aesthetic. No compromise needed. Both can coexist beautifully.
              </Body>
            </div>

            {/* Checklist — warm */}
            <div className="bg-ink-muted p-8 sm:p-12 md:p-16">
              <h3 className="font-serif text-2xl text-bone sm:text-3xl">Pre-Execution Checklist</h3>
              <ul className="mt-6 space-y-3">
                {[
                  "Budget buffer: 15%.",
                  "Lock materials early.",
                  "Lifestyle brief shared.",
                  "Visit site twice.",
                  "Warranty in writing.",
                  "Plan forgotten rooms.",
                  "Test colours in daylight.",
                  "Insist on 3D render.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-bone/70">
                    <span className="text-gold">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ P11 — WHY ACRED ═════════════════ */}
      <section className="relative overflow-hidden">
        {/* Full bleed top */}
        <div className="relative h-[65vh] overflow-hidden">
          <Image src={I.p11} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-10 md:p-16">
            <PlayfairHead className="max-w-2xl text-display-lg italic text-ink sm:text-display-xl">
              We don&apos;t just design homes.
              <br />
              We design lives.
            </PlayfairHead>
          </div>
        </div>

        {/* Positioning statement */}
        <div className="bg-ink px-6 py-10 sm:px-10 md:px-16 md:py-14">
          <Body className="mx-auto max-w-3xl text-center">
            Every family is different. Every home is different. ACRED was built on one belief: the best interior design is not the most expensive — it is the most understood.
          </Body>
        </div>

        {/* 2x2 cards */}
        <div className="bg-ink px-6 pb-16 sm:px-10 sm:pb-24 md:px-16 md:pb-32">
          <div className="mx-auto max-w-[1440px] grid gap-4 sm:grid-cols-2">
            {[
              { title: "End-to-End Ownership", body: "From concept to keys — design, procurement, execution, quality checks under one roof. No blame-shifting. No chaos." },
              { title: "Transparent Pricing", body: "Itemised quotations. No hidden costs. What we quote is what you pay — backed by signed contracts." },
              { title: "Design Before Décor", body: "Space, light, and structure planned first. Furniture comes last. This separates interior designers from interior decorators." },
              { title: "Multidisciplinary Expertise", body: "Architecture, engineering, and design as one team. Sun-path analysis, material science, and structural planning — standard in every ACRED project." },
            ].map((c, i) => (
              <MotionReveal key={c.title} delay={i * 0.06}>
                <div className="border border-ink-line bg-night p-6 sm:p-8">
                  <h4 className="font-serif text-xl text-gold sm:text-2xl">{c.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{c.body}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════ P12 — PROMISE & CTA ═════════════════ */}
      <section className="min-h-[100dvh]">
        <div className="grid min-h-[100dvh] lg:grid-cols-2">
          {/* Left — dark promises */}
          <div className="flex flex-col justify-between bg-night p-8 sm:p-12 md:p-16">
            <div>
              <p className="font-serif text-2xl italic text-gold sm:text-3xl">The ACRED Promise</p>
              <Hairline className="mt-4" />

              <ul className="mt-8 space-y-5">
                {[
                  "One dedicated design lead — brief to handover.",
                  "Full 3D visualisation before a single nail is hammered.",
                  "Climate-engineered design — sun-path analysis and wind studies, every city.",
                  "Vastu-sensitive layouts that honour beliefs without compromising aesthetics.",
                  "A post-handover relationship — always a call away.",
                  "Curated material sourcing — no substitutions without your approval.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-ink/60 sm:text-base">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — image + CTA */}
          <div className="relative flex flex-col">
            <div className="relative flex-[2] w-full">
              <Image src={I.p12} alt="" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="flex-1 bg-ink-muted p-8 sm:p-12 md:p-16">
              <PlayfairHead className="text-display-md text-bone sm:text-display-lg">
                Begin Your Home Journey
              </PlayfairHead>
              <Body className="mt-4 max-w-md">
                Every remarkable home starts with a single conversation. Let us have ours — over tea, if you prefer.
              </Body>

              <div className="mt-8 space-y-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-gold">Phone</p>
                  <p className="mt-1 font-serif text-lg text-bone">+91 63618 89281</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-gold">Email</p>
                  <p className="mt-1 font-serif text-lg text-bone">info@acred.in</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-gold">Website</p>
                  <p className="mt-1 font-serif text-lg text-bone">www.acred.in</p>
                </div>
              </div>

              <p className="mt-10 font-serif text-sm text-bone/40">© 2025 ACRED</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
