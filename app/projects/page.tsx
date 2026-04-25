import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/sections/projects-index";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by ACRED — residential, commercial, mixed-use, hospitality, and industrial.",
};

export default function ProjectsPage() {
  return <ProjectsIndex />;
}
