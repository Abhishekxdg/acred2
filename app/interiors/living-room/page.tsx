import type { Metadata } from "next";
import { LivingRoomPage } from "@/components/sections/living-room-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Living Room Interiors · ACRED",
  description:
    "Custom living room interiors by ACRED — TV units, seating, lighting, and curated décor designed for comfort, conversation, and everyday living.",
  path: "/interiors/living-room",
  keywords: [
    "living room design",
    "living room interiors Bangalore",
    "TV unit design",
    "seating design",
    "home décor",
  ],
});

export default function LivingRoomRoute() {
  return <LivingRoomPage />;
}
