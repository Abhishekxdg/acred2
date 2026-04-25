import { Hero } from "@/components/sections/hero";
import { DisciplineBlock } from "@/components/sections/discipline-block";
import { SignatureProjects } from "@/components/sections/signature-projects";
import { Marquee } from "@/components/marquee";
import { disciplines } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee
        items={[
          "Architecture",
          "Construction",
          "Real Estate",
          "Engineering",
          "One partner, four disciplines",
        ]}
      />

      {/* Discipline loops, alternating image side */}
      {disciplines
        .filter((d) => d.slug !== "development")
        .map((d, i) => (
          <DisciplineBlock key={d.slug} discipline={d} reverse={i % 2 === 1} />
        ))}

      <SignatureProjects />
    </>
  );
}
