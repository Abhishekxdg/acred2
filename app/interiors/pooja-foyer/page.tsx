import type { Metadata } from "next";
import { PoojaFoyerPage } from "@/components/sections/pooja-foyer-page";

export const metadata: Metadata = {
  title: "Pooja & Foyer",
  description:
    "Traditional and contemporary pooja units, entryway consoles, and shoe cabinets by ACRED — designed with Vastu awareness and modern aesthetic appeal.",
};

export default function PoojaFoyerRoute() {
  return <PoojaFoyerPage />;
}
