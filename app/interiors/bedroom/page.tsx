import type { Metadata } from "next";
import { BedroomPage } from "@/components/sections/bedroom-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Bedroom Design · ACRED",
  description:
    "Master and guest bedroom interiors by ACRED — custom bed frames, side tables, dressing units, wardrobes, and ambient lighting for restful sanctuaries.",
  path: "/interiors/bedroom",
  keywords: [
    "bedroom design",
    "bedroom interiors Bangalore",
    "master bedroom",
    "guest bedroom",
    "wardrobe design",
    "dressing unit",
  ],
});

export default function BedroomRoute() {
  return <BedroomPage />;
}
