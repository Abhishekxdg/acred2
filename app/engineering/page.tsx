import type { Metadata } from "next";
import { EngineeringDetailPage } from "@/components/sections/engineering-detail-page";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Structural, MEP, and building performance — truth under every surface.",
};

export default function EngineeringPage() {
  return <EngineeringDetailPage />;
}
