import type { Metadata } from "next";
import Image from "next/image";
import { MotionReveal } from "@/components/motion-reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What our clients say about working with ACRED.",
};

const testimonial = {
  name: "Prajwal & Shivani",
  location: "Bangalore",
  quote: "Building our dream home with ACRED felt less like a construction project and more like a partnership. They listened to our story, understood our vision, and delivered something that exceeded every expectation. Every morning, as we share coffee in our sunlit living room, we&apos;re reminded of the care and craftsmanship that went into making this house our home.",
  story: `When we first met the ACRED team, we had been searching for the right architects for over a year. We had seen dozens of portfolios, sat through countless presentations, but something always felt missing.

Then came our first meeting with ACRED. They didn&apos;t start with blueprints or mood boards. They started with questions—about how we lived, what brought us joy, what our Sunday mornings looked like, what we imagined our future would feel like.

Prajwal and I had just returned from our honeymoon, still glowing from the memories of sharing milkshakes at that little café in Jaipur. We spoke about that moment—how simple, how perfect it felt—and how we wanted our home to capture that same sense of ease and connection.

Six months later, as we stood in our completed living room, watching the golden hour light spill across the floors, we realized they had done exactly that. Our home isn't just beautiful—it's us.

The kitchen where we cook together on weekends. The reading nook where Prajwal escapes with his books. The balcony where I grow my herbs. Every space tells a part of our story, thoughtfully designed by people who took the time to understand it.

Working with ACRED taught us that great architecture isn't about imposing a vision—it's about discovering what's already there and bringing it to life. They didn't just build us a house; they gave us a backdrop for the life we're still building together.`,
  project: "Residential Home, Indiranagar",
  duration: "8 months",
  year: "2024",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-acred pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-16 lg:pt-36">
        <MotionReveal>
          <p className="section-label mb-5 sm:mb-6">Testimonials</p>
          <h1 className="text-balance">
            <span className="block font-sans font-bold text-display-lg leading-[0.95] tracking-tight text-bone sm:text-display-xl">Stories from</span>
            <span className="block font-serif italic text-display-lg leading-[1.05] text-bone/85 sm:text-display-xl">those who call it home.</span>
          </h1>
        </MotionReveal>
      </section>

      {/* Featured testimonial */}
      <section className="container-acred pb-10 sm:pb-12 md:pb-16">
        <MotionReveal delay={0.1}>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                <Image
                  src="/testimonial-couple.jpg"
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-bone-muted">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                  {testimonial.year}
                </span>
                <span>•</span>
                <span>{testimonial.project}</span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-6">
                <p className="font-serif text-2xl leading-relaxed text-bone sm:text-3xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="mb-8 border-y border-ink-line py-6">
                <p className="text-sm leading-relaxed text-bone-soft whitespace-pre-line">
                  {testimonial.story}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-xl text-bone">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-bone-muted">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
                    Project duration
                  </p>
                  <p className="mt-1 text-sm text-bone">{testimonial.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* CTA */}
      <section className="container-acred py-10 sm:py-16 lg:py-20">
        <MotionReveal delay={0.2}>
          <div className="border-y border-ink-line py-8 text-center">
            <p className="section-label mb-4">Start your story</p>
            <h2 className="text-balance mb-6">
              <span className="block font-sans font-bold text-display-md leading-[0.95] tracking-tight text-bone">Let&apos;s build</span>
              <span className="block font-serif italic text-display-md leading-[1.05] text-bone/85">something meaningful.</span>
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 font-sans text-sm font-medium text-ink-soft transition-colors hover:bg-bone/80"
            >
              Get in touch
            </a>
          </div>
        </MotionReveal>
      </section>
    </>
  );
}
