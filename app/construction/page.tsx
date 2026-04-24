import type { Metadata } from "next";
import { DisciplinePage } from "@/components/sections/discipline-page";
import { disciplineBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Construction",
  description:
    "Turnkey construction with in-house quality control — built to the drawing.",
};

export default function ConstructionPage() {
  const discipline = disciplineBySlug("construction");
  if (!discipline) notFound();
  return <DisciplinePage discipline={discipline} />;
}
