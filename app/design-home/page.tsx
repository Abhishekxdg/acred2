import type { Metadata } from "next";
import { HomeDesignerTool } from "@/components/sections/home-designer-tool";

export const metadata: Metadata = {
  title: "ACRED Planning Tool",
  description:
    "Use ACRED's interactive planning tool to assemble a structured brief for architecture, interiors, construction, engineering, and real estate.",
};

export default function DesignHomePage() {
  return <HomeDesignerTool />;
}
