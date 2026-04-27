import type { Metadata } from "next";
import { WardrobePage } from "@/components/sections/wardrobe-page";

export const metadata: Metadata = {
  title: "Wardrobe & Storage",
  description:
    "Custom wardrobes and smart storage by ACRED — floor-to-ceiling closets, walk-ins, and organisers that maximise every square foot of your home.",
};

export default function WardrobeRoute() {
  return <WardrobePage />;
}
