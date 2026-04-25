import type { Metadata } from "next";
import { InteriorsDetailPage } from "@/components/sections/architecture-detail-page";

export const metadata: Metadata = {
  title: "Interiors",
  description:
    "End-to-end home interiors — modular kitchens, living rooms, wardrobes, bedrooms, and complete home design by ACRED.",
};

export default function InteriorsPage() {
  return <InteriorsDetailPage />;
}
