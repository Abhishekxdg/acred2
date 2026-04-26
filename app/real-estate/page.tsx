import type { Metadata } from "next";
import { RealEstateDetailPage } from "@/components/sections/real-estate-detail-page";

export const metadata: Metadata = {
  title: "Real Estate Advisory",
  description:
    "Real estate advisory for buyers, sellers, landowners, and investors — market mapping, diligence, negotiation, and asset strategy.",
};

export default function RealEstatePage() {
  return <RealEstateDetailPage />;
}
