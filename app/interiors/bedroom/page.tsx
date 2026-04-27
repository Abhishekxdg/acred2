import type { Metadata } from "next";
import { BedroomPage } from "@/components/sections/bedroom-page";

export const metadata: Metadata = {
  title: "Bedroom Design",
  description:
    "Master and guest bedroom interiors by ACRED — custom bed frames, side tables, dressing units, wardrobes, and ambient lighting for restful sanctuaries.",
};

export default function BedroomRoute() {
  return <BedroomPage />;
}
