import type { Metadata } from "next";
import { PackagesPage } from "@/components/sections/packages-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Construction Packages · ACRED",
  description:
    "Compare ACRED construction packages — Classic, Luxury, Premium, Super Luxury, Platinum, and Platinum Plus. Transparent pricing for 2, 3, and 4 BHK homes with zero hidden costs.",
  path: "/packages",
  keywords: [
    "construction packages",
    "home construction cost",
    "2 BHK construction",
    "3 BHK construction",
    "4 BHK construction",
    "Bangalore construction price",
  ],
});

export default function PackagesRoutePage() {
  return <PackagesPage />;
}
