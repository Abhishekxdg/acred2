import type { Metadata } from "next";
import { PoojaFoyerPage } from "@/components/sections/pooja-foyer-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pooja & Foyer · ACRED",
  description:
    "Traditional and contemporary pooja units, entryway consoles, and shoe cabinets by ACRED — designed with Vastu awareness and modern aesthetic appeal.",
  path: "/interiors/pooja-foyer",
  keywords: [
    "pooja and foyer",
    "entryway design",
    "mandir with foyer",
    "Vastu design",
  ],
});

export default function PoojaFoyerRoute() {
  return <PoojaFoyerPage />;
}
