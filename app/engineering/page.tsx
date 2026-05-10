import type { Metadata } from "next";
import { EngineeringDetailPage } from "@/components/sections/engineering-detail-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Engineering · ACRED",
  description:
    "Structural, MEP, geotechnical, and building performance engineering by ACRED — truth under every surface. BIM coordination and digital engineering.",
  path: "/engineering",
  keywords: [
    "structural engineering",
    "MEP coordination",
    "geotechnical engineering",
    "BIM",
    "building performance",
  ],
});

export default function EngineeringPage() {
  return <EngineeringDetailPage />;
}
