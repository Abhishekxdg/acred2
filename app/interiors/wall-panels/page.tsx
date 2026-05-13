import type { Metadata } from "next";
import { WallPanelsPage } from "@/components/sections/wall-panels-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "CNC Wall Panels Design · ACRED",
  description:
    "Sculptural CNC-carved wall panels by ACRED — parametric waves, sacred geometry, jaali lattice, gopuram relief, sound-wave acoustic panels and living hydroponic walls.",
  path: "/interiors/wall-panels",
  keywords: [
    "wall panels design",
    "CNC wall panels Bangalore",
    "parametric wall panel",
    "jaali lattice panel",
    "Sri Yantra panel",
    "sculptural wall art",
    "HDHMR wall panel",
  ],
});

export default function WallPanelsRoute() {
  return <WallPanelsPage />;
}
