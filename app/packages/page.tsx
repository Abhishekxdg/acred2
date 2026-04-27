import type { Metadata } from "next";
import { PackagesPage } from "@/components/sections/packages-page";

export const metadata: Metadata = {
  title: "Construction Packages",
  description:
    "Compare ACRED construction packages — Classic, Luxury, Premium, Super Luxury, Platinum, and Platinum Plus. Transparent pricing for 2, 3, and 4 BHK homes with zero hidden costs.",
};

export default function PackagesRoutePage() {
  return <PackagesPage />;
}
