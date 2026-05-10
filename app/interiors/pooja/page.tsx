import type { Metadata } from "next";
import { PoojaPage } from "@/components/sections/pooja-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pooja Room Interiors · ACRED",
  description:
    "Traditional and contemporary pooja units, mandirs, and prayer rooms by ACRED — designed with Vastu awareness, sacred geometry, and modern aesthetic appeal.",
  path: "/interiors/pooja",
  keywords: [
    "pooja room design",
    "mandir design",
    "prayer room interiors",
    "Vastu pooja room",
    "pooja unit Bangalore",
  ],
});

export default function PoojaRoute() {
  return <PoojaPage />;
}
