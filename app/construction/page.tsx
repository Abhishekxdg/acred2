import type { Metadata } from "next";
import { ConstructionDetailPage } from "@/components/sections/construction-detail-page";

export const metadata: Metadata = {
  title: "Construction & Architecture",
  description:
    "Design-build practice — from master planning to final handover. ACRED architects and builders work as one team.",
};

export default function ConstructionPage() {
  return <ConstructionDetailPage />;
}
