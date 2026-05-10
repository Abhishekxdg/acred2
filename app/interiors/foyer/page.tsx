import type { Metadata } from "next";
import { FoyerPage } from "@/components/sections/foyer-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Foyer Interiors · ACRED",
  description:
    "Contemporary entryway consoles, shoe cabinets, and foyer designs by ACRED — crafted for first impressions, smart storage, and everyday durability.",
  path: "/interiors/foyer",
  keywords: [
    "foyer design",
    "entryway design",
    "shoe cabinet",
    "console table",
    "foyer interiors Bangalore",
  ],
});

export default function FoyerRoute() {
  return <FoyerPage />;
}
