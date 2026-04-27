import type { Metadata } from "next";
import { BathroomPage } from "@/components/sections/bathroom-page";

export const metadata: Metadata = {
  title: "Bathroom Interiors",
  description:
    "Modern bathroom interiors by ACRED — premium fittings, tile layouts, vanity units, waterproof storage, and spa-like design for everyday luxury.",
};

export default function BathroomRoute() {
  return <BathroomPage />;
}
