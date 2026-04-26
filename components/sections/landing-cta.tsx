import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { site } from "@/lib/content";

export function LandingCTA() {
  return (
    <section className="container-acred pb-14 pt-4 sm:pb-20 lg:pb-28">
      <MotionReveal>
        <div className="relative overflow-hidden rounded-lg bg-night text-white">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
            alt="Modern residence at dusk"
            fill
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />

          <div className="relative z-10 grid min-h-[520px] gap-10 p-6 sm:min-h-[560px] sm:p-10 md:p-12 lg:grid-cols-12 lg:p-16">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-white/55">
                  Start your project
                </p>
                <h2 className="mt-5 max-w-4xl text-balance">
                  <span className="block font-sans text-display-lg font-bold leading-[0.95] tracking-normal text-white sm:text-display-xl">
                    Bring us a site,
                  </span>
                  <span className="block font-serif text-display-lg italic leading-[1.05] tracking-normal text-white/85 sm:text-display-xl">
                    a plan, or a first instinct.
                  </span>
                </h2>
              </div>

              <div className="mt-10 grid gap-4 border-y border-white/15 py-5 sm:grid-cols-3">
                {[
                  ["01", "Share the brief"],
                  ["02", "Map the path"],
                  ["03", "Build with clarity"],
                ].map(([n, label]) => (
                  <div key={n}>
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                      {n}
                    </p>
                    <p className="mt-2 font-serif text-xl leading-tight text-white">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-end lg:col-span-5">
              <p className="max-w-md text-base leading-relaxed text-white/70">
                Tell us what you are trying to create. ACRED will help you
                understand the design, engineering, construction, advisory, and
                timeline decisions before the project gathers speed.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="group inline-flex cursor-hover items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-sans text-sm font-medium text-night transition-all hover:bg-gold hover:gap-3"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="group inline-flex cursor-hover items-center justify-center gap-2.5 rounded-full border border-white/20 px-7 py-3.5 font-sans text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Call studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
