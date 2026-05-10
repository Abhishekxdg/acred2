import type { Metadata } from "next";
import { BathroomPage } from "@/components/sections/bathroom-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Bathroom Interiors · ACRED",
  description:
    "Modern bathroom interiors by ACRED — premium fittings, tile layouts, vanity units, waterproof storage, and spa-like design for everyday luxury.",
  path: "/interiors/bathroom",
  keywords: [
    "bathroom design",
    "bathroom interiors Bangalore",
    "vanity unit",
    "modern bathroom",
    "spa bathroom",
  ],
});

export default function BathroomRoute() {
  return <BathroomPage />;
}
