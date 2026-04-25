"use client";

import { FloatingDock as FloatingDockUI } from "@/components/ui/floating-dock";
import {
  IconBuildingSkyscraper,
  IconHammer,
  IconHome2,
  IconSettings2,
} from "@tabler/icons-react";

const items = [
  {
    title: "Interiors",
    icon: (
      <IconBuildingSkyscraper className="h-full w-full text-bone-muted" />
    ),
    href: "/interiors",
  },
  {
    title: "Construction & Architecture",
    icon: (
      <IconHammer className="h-full w-full text-bone-muted" />
    ),
    href: "/construction",
  },
  {
    title: "Real Estate",
    icon: (
      <IconHome2 className="h-full w-full text-bone-muted" />
    ),
    href: "/real-estate",
  },
  {
    title: "Engineering",
    icon: (
      <IconSettings2 className="h-full w-full text-bone-muted" />
    ),
    href: "/engineering",
  },
];

export function FloatingDock() {
  return (
    <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <FloatingDockUI
        items={items}
        desktopClassName="backdrop-blur-xl"
      />
    </div>
  );
}
