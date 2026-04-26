import type { Metadata } from "next";
import { HomeDesignerTool } from "@/components/sections/home-designer-tool";

export const metadata: Metadata = {
  title: "Design Your Home",
  description:
    "Use ACRED's interactive home design tool to assemble a concept from room and site blocks.",
};

export default function DesignHomePage() {
  return <HomeDesignerTool />;
}
