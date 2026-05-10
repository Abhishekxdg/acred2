import type { Metadata } from "next";
import { FoyerPage } from "@/components/sections/foyer-page";

export const metadata: Metadata = {
  title: "Foyer Interiors",
  description:
    "Contemporary entryway consoles, shoe cabinets, and foyer designs by ACRED — crafted for first impressions, smart storage, and everyday durability.",
};

export default function FoyerRoute() {
  return <FoyerPage />;
}
