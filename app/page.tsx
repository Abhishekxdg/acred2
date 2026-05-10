import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { PracticeOverview } from "@/components/sections/practice-overview";
import { LandingCTA } from "@/components/sections/landing-cta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ACRED — Imagined with art. Engineered with truth. Forged in earth.",
  description:
    "ACRED is an integrated studio spanning architecture, construction, real estate, engineering, and development. We read the site before we draw a line.",
  path: "/",
  keywords: [
    "home",
    "landing",
    "architecture firm",
    "interior designers Bangalore",
    "construction company",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <PracticeOverview />

      <LandingCTA />
    </>
  );
}
