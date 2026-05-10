import type { Metadata } from "next";
import { PoojaPage } from "@/components/sections/pooja-page";

export const metadata: Metadata = {
  title: "Pooja Room Interiors",
  description:
    "Traditional and contemporary pooja units, mandirs, and prayer rooms by ACRED — designed with Vastu awareness, sacred geometry, and modern aesthetic appeal.",
};

export default function PoojaRoute() {
  return <PoojaPage />;
}
