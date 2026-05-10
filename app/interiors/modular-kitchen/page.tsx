import type { Metadata } from "next";
import { ModularKitchenPage } from "@/components/sections/modular-kitchen-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Modular Kitchen · ACRED",
  description:
    "Custom modular kitchen design by ACRED — precision-built cabinetry, premium finishes, smart storage, and seamless installation for homes in Bengaluru and beyond.",
  path: "/interiors/modular-kitchen",
  keywords: [
    "modular kitchen",
    "modular kitchen Bangalore",
    "custom kitchen design",
    "kitchen cabinets",
    "smart kitchen storage",
    "kitchen interiors",
  ],
});

export default function ModularKitchenRoute() {
  return <ModularKitchenPage />;
}
