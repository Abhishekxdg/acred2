import type { Metadata } from "next";
import { DisciplinePage } from "@/components/sections/discipline-page";
import { disciplineBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Development",
  description:
    "Land to launch — we originate, capitalize, and deliver our own projects, selectively.",
};

export default function DevelopmentPage() {
  const discipline = disciplineBySlug("development");
  if (!discipline) notFound();
  return <DisciplinePage discipline={discipline} />;
}
