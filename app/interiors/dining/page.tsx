import type { Metadata } from "next";
import { DiningPage } from "@/components/sections/dining-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Dining Room Design · ACRED",
  description:
    "Modern Indian dining room interiors by ACRED — solid walnut & marble tables, cane and velvet chairs, sideboards and crockery storage built around how you actually host.",
  path: "/interiors/dining",
  keywords: [
    "dining room design",
    "dining table design Bangalore",
    "modern Indian dining",
    "marble dining table",
    "crockery sideboard",
    "open-plan dining",
  ],
});

export default function DiningRoute() {
  return <DiningPage />;
}
