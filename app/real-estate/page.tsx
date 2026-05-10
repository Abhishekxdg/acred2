import type { Metadata } from "next";
import { RealEstateDetailPage } from "@/components/sections/real-estate-detail-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Real Estate Advisory · ACRED",
  description:
    "Real estate advisory for buyers, sellers, landowners, and investors — market mapping, diligence, negotiation, and asset strategy. RERA registered.",
  path: "/real-estate",
  keywords: [
    "real estate advisory",
    "property consultancy",
    "RERA registered",
    "Bangalore real estate",
    "asset strategy",
    "property investment",
  ],
});

export default function RealEstatePage() {
  return <RealEstateDetailPage />;
}
