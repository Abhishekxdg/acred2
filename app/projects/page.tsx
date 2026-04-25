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
        <div className="h-[70vh] min-h-[480px] max-h-[800px] w-full overflow-hidden rounded-sm">
          <FlowingMenu
            items={flowingItems}
            speed={18}
            bgColor="#0F0F0D"
            textColor="#F8F5EF"
            marqueeBgColor="#B8925A"
            marqueeTextColor="#0F0F0D"
            borderColor="#2E2E2B"
          />
        </div>
      </section>

      <ProjectsIndex />
    </>
  );
}
