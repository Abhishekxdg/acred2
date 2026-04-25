import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { MotionReveal } from "@/components/motion-reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to the ACRED studio with a site, a brief, or an instinct.",
};

export default function ContactPage() {
  return (
    <section className="container-acred pt-24 pb-14 sm:pt-28 sm:pb-20 md:pt-32 lg:pt-36">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
        <MotionReveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="section-label mb-5 sm:mb-6">Start the conversation</p>
            <h1 className="text-balance">
              <span className="block font-sans font-bold text-display-lg leading-[0.95] tracking-tight text-bone sm:text-display-xl">Write to</span>
              <span className="block font-serif italic text-display-lg leading-[1.05] text-bone/85 sm:text-display-xl">the studio.</span>
            </h1>

            <p className="mt-5 text-sm leading-relaxed text-bone-soft sm:mt-6 sm:text-base">
              Tell us about the site, the brief, or the instinct. We reply within
              two business days, and we&apos;ll tell you clearly if we&apos;re not the right fit.
            </p>

            <div className="mt-6 divide-y divide-ink-line border-y border-ink-line">
              {[
                { label: "Email", value: site.contact.email },
                { label: "Studio", value: site.contact.address },
                { label: "Phone", value: site.contact.phone },
                { label: "Hours", value: "Mon-Fri · 10:00 - 19:00 IST" },
              ].map((item) => (
                <div key={item.label} className="py-3.5 sm:py-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                    {item.label}
                  </p>
                  <p className="mt-1.5 break-words font-serif text-lg leading-tight text-bone sm:text-xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className="lg:col-span-8" delay={0.15}>
          <div className="border-y border-ink-line py-6 sm:py-8 lg:px-8">
            <ContactForm />
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
