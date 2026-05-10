import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Architecture · ACRED",
  description:
    "Seamless architectural design and immersive interiors by ACRED — creating homes that look beautiful and feel effortless to live in.",
  robots: { index: true, follow: true },
};

export default function ArchitecturePage() {
  redirect("/interiors");
}
