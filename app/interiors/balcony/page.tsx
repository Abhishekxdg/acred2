import type { Metadata } from "next";
import { BalconyPage } from "@/components/sections/balcony-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Balcony Design · ACRED",
  description:
    "ACRED transforms balconies into reading nooks, outdoor dining, jhula corners, vertical gardens and penthouse terraces — weatherproof materials, integrated lighting, plants that thrive.",
  path: "/interiors/balcony",
  keywords: [
    "balcony design Bangalore",
    "outdoor balcony interiors",
    "vertical garden balcony",
    "jhula swing balcony",
    "balcony dining design",
    "penthouse terrace design",
  ],
});

export default function BalconyRoute() {
  return <BalconyPage />;
}
