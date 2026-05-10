import type { Metadata } from "next";
import { HomeDesignerTool } from "@/components/sections/home-designer-tool";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ACRED Planning Tool",
  description:
    "Use ACRED's interactive planning tool to assemble a structured brief for architecture, interiors, construction, engineering, and real estate.",
  path: "/design-home",
  keywords: [
    "planning tool",
    "home design tool",
    "interior design calculator",
    "budget planner",
  ],
});

export default function DesignHomePage() {
  return <HomeDesignerTool />;
}
