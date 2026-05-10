import { Hero } from "@/components/sections/hero";
import { PracticeOverview } from "@/components/sections/practice-overview";
import { LandingCTA } from "@/components/sections/landing-cta";

export default function HomePage() {
  return (
    <>
      <Hero />

      <PracticeOverview />

      <LandingCTA />
    </>
  );
}
