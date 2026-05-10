import type { Metadata } from "next";
import { InteriorsDetailPage } from "@/components/sections/architecture-detail-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Interiors · ACRED",
  description:
    "End-to-end home interiors by ACRED — modular kitchens, living rooms, wardrobes, bedrooms, bathrooms, pooja rooms, and complete home design.",
  path: "/interiors",
  keywords: [
    "home interiors",
    "interior design Bangalore",
    "modular kitchen",
    "living room design",
    "wardrobe design",
    "bedroom interiors",
  ],
});

export default function InteriorsPage() {
  return <InteriorsDetailPage />;
}
