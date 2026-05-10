import type { Metadata } from "next";
import { WardrobePage } from "@/components/sections/wardrobe-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Wardrobe & Storage · ACRED",
  description:
    "Custom wardrobes and smart storage by ACRED — floor-to-ceiling closets, walk-ins, and organisers that maximise every square foot of your home.",
  path: "/interiors/wardrobe",
  keywords: [
    "wardrobe design",
    "custom wardrobe Bangalore",
    "walk-in closet",
    "smart storage",
    "closet organisers",
    "bedroom storage",
  ],
});

export default function WardrobeRoute() {
  return <WardrobePage />;
}
