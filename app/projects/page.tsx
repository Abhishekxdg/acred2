import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/sections/projects-index";
import FlowingMenu from "@/components/flowing-menu";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by ACRED — residential, commercial, mixed-use, hospitality, and industrial.",
};

const flowingItems = projects.map((p) => ({
  link: `/projects/${p.slug}`,
  text: p.title,
  image: p.heroImage,
}));

export default function ProjectsPage() {
  return (
    <>
      <section className="container-acred pt-32 pb-8 md:pt-40">
        <p className="eyebrow mb-6">Work index</p>
        <h1 className="font-serif text-display-xl text-bone text-balance">
          Every project is a contract
          <br />
          <span className="text-bone-muted">with a piece of land.</span>
        </h1>
      </section>

      <section className="container-acred pb-16">
        <div className="h-[70vh] min-h-[480px] max-h-[800px] w-full overflow-hidden rounded-sm">
          <FlowingMenu
            items={flowingItems}
            speed={18}
            bgColor="#0A0A0A"
            textColor="#EDE6D6"
            marqueeBgColor="#B8925A"
            marqueeTextColor="#0A0A0A"
            borderColor="#1A1A1A"
          />
        </div>
      </section>

      <ProjectsIndex />
    </>
  );
}
