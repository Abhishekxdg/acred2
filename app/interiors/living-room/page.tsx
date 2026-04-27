import type { Metadata } from "next";
import { LivingRoomPage } from "@/components/sections/living-room-page";

export const metadata: Metadata = {
  title: "Living Room Interiors",
  description:
    "Custom living room interiors by ACRED — TV units, seating, lighting, and curated décor designed for comfort, conversation, and everyday living.",
};

export default function LivingRoomRoute() {
  return <LivingRoomPage />;
}
