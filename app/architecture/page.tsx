import type { Metadata } from "next";
import { DisciplinePage } from "@/components/sections/discipline-page";
import { disciplineBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Master planning, concept, and interior architecture — ACRED reads the site before it draws a line.",
};

export default function ArchitecturePage() {
  const discipline = disciplineBySlug("architecture");
  if (!discipline) notFound();
  return <DisciplinePage discipline={discipline} />;
}
