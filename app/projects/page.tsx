import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/sections/projects-index";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work · ACRED",
  description:
    "Selected projects by ACRED — residential, commercial, mixed-use, hospitality, and industrial architecture and interiors in Bengaluru and beyond.",
  path: "/projects",
  keywords: [
    "projects",
    "portfolio",
    "residential projects",
    "commercial architecture",
    "Bengaluru projects",
  ],
});

export default function ProjectsPage() {
  return <ProjectsIndex />;
}
