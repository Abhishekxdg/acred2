import type { Metadata } from "next";
import { ConstructionDetailPage } from "@/components/sections/construction-detail-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Construction & Architecture · ACRED",
  description:
    "Turnkey residential construction and design-build practice by ACRED — from master planning to final handover. Architects and builders work as one team.",
  path: "/construction",
  keywords: [
    "construction",
    "turnkey construction",
    "residential construction Bangalore",
    "design build",
    "general contracting",
    "construction management",
  ],
});

export default function ConstructionPage() {
  return <ConstructionDetailPage />;
}
