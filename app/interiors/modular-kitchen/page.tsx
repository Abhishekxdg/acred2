import type { Metadata } from "next";
import { ModularKitchenPage } from "@/components/sections/modular-kitchen-page";

export const metadata: Metadata = {
  title: "Modular Kitchen",
  description:
    "Custom modular kitchen design by ACRED — precision-built cabinetry, premium finishes, smart storage, and seamless installation for homes in Bengaluru and beyond.",
};

export default function ModularKitchenRoute() {
  return <ModularKitchenPage />;
}
