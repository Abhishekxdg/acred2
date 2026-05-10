import type { Metadata } from "next";
import { KidsBedroomPage } from "@/components/sections/kids-bedroom-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kids Bedroom Design · ACRED",
  description:
    "Fun, safe, and functional kids bedroom interiors by ACRED — playful storage, study nooks, durable finishes, and designs that grow with your child.",
  path: "/interiors/kids-bedroom",
  keywords: [
    "kids bedroom design",
    "children room interiors",
    "kids room Bangalore",
    "study nook design",
    "playful storage",
    "kids wardrobe",
  ],
});

export default function KidsBedroomRoute() {
  return <KidsBedroomPage />;
}
