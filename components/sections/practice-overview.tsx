import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { disciplines } from "@/lib/content";
import { MotionReveal } from "@/components/motion-reveal";

const visibleDisciplines = disciplines.filter((d) => d.slug !== "development");

const leadImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85";

const linksBySlug: Record<string, string> = {
  architecture: "/interiors",
  construction: "/construction",
  "real-estate": "/real-estate",
  engineering: "/engineering",
};

const labelsBySlug: Record<string, string> = {
  architecture: "Interiors",
  construction: "Construction & Architecture",
  "real-estate": "Real Estate",
  engineering: "Engineering",
};

export function PracticeOverview() {
  return (
    <section className="border-y border-ink-line bg-ink-muted">
      <div className="container-acred py-14 sm:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <MotionReveal className="lg:col-span-5">
            <p className="section-label mb-5 sm:mb-6">The ACRED practice</p>
            <h2 className="max-w-4xl text-balance">
              <span className="block font-sans font-bold text-display-lg leading-[0.95] tracking-tight text-bone">
                One studio,
              </span>
              <span className="block font-serif italic text-display-lg leading-[1.05] text-bone/85">
                every layer of place.
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone-soft sm:mt-6 sm:text-base">
              ACRED holds design, construction, advisory, and engineering close
              together. The result is a project team that can read the site, draw
              the building, test the numbers, and stay with the work until handover.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-ink-line py-5">
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

          <MotionReveal delay={0.1} className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-ink-soft sm:aspect-[16/10]">
              <Image
                src={leadImage}
                alt="Warm modern residence showing architecture and landscape"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-white/60">
                  From land to legacy
                </p>
                <p className="mt-2 max-w-lg font-serif text-2xl leading-tight text-white sm:text-3xl">
                  The drawing, the cost, the site, and the asset strategy are
                  treated as one conversation.
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {visibleDisciplines.map((discipline, index) => (
            <MotionReveal key={discipline.slug} delay={index * 0.06}>
              <Link
                href={linksBySlug[discipline.slug] ?? `/${discipline.slug}`}
                className="group block cursor-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-ink-soft">
                  <Image
                    src={discipline.heroImage}
                    alt={discipline.heroImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-white/70 backdrop-blur-sm">
                    {discipline.index}
                  </div>
                  <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-white/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-serif text-2xl leading-tight text-white">
                      {labelsBySlug[discipline.slug] ?? discipline.label}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-bone-muted line-clamp-2">
                  {discipline.tagline}
                </p>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
