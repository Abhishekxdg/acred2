import type { Metadata } from "next";
import { DisciplinePage } from "@/components/sections/discipline-page";
import { disciplineBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Real Estate",
  description:
    "Advisory and transactions for buyers, sellers, and investors — due diligence past the brochure.",
};

export default function RealEstatePage() {
  const discipline = disciplineBySlug("real-estate");
  if (!discipline) notFound();
  return <DisciplinePage discipline={discipline} />;
}
