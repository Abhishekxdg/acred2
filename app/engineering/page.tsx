import type { Metadata } from "next";
import { DisciplinePage } from "@/components/sections/discipline-page";
import { disciplineBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Structural, MEP, and building performance — truth under every surface.",
};

export default function EngineeringPage() {
  const discipline = disciplineBySlug("engineering");
  if (!discipline) notFound();
  return <DisciplinePage discipline={discipline} />;
}
