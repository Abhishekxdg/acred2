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
    <section className="container-acred pt-32 pb-24 md:pt-40">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
        <MotionReveal className="lg:col-span-5">
          <p className="eyebrow mb-6">Start the conversation</p>
          <h1 className="font-serif text-display-xl text-bone text-balance">
            Write to the studio.
          </h1>
          <p className="mt-8 text-base leading-relaxed text-bone-soft">
            Tell us about the site, the brief, or the instinct. We reply within
            two business days — and we&apos;ll tell you if we&apos;re not the right fit.
          </p>

          <div className="mt-16 space-y-10">
            <div>
              <p className="eyebrow mb-2">Email</p>
              <p className="font-serif text-2xl text-bone">
                {site.contact.email}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2">Studio</p>
              <p className="text-base leading-relaxed text-bone-soft">
                {site.contact.address}
              </p>
              <p className="mt-1 text-base text-bone-soft">
                {site.contact.phone}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2">Hours</p>
              <p className="text-base text-bone-soft">
                Mon–Fri · 10:00 – 19:00 IST
              </p>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className="lg:col-span-7" delay={0.15}>
          <ContactForm />
        </MotionReveal>
      </div>
    </section>
  );
}
