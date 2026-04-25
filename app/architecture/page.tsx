import type { Metadata } from "next";
import { ArchitectureDetailPage } from "@/components/sections/architecture-detail-page";

export const metadata: Metadata = {
  title: "Architecture & Interior Design",
  description:
    "End-to-end architectural design and interior solutions. From modular kitchens to complete home interiors — designed by experts, delivered on time.",
};

export default function ArchitecturePage() {
  return <ArchitectureDetailPage />;
}
