"use client";

import { useState, useEffect } from "react";
import { FloatingDock as FloatingDockUI } from "@/components/ui/floating-dock";
import {
  IconBuildingSkyscraper,
  IconHammer,
  IconHome2,
  IconSettings2,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Interiors",
    icon: (
      <IconBuildingSkyscraper className="h-full w-full text-bone-muted" />
    ),
    href: "/interiors",
  },
  {
    title: "Build",
    icon: (
      <IconHammer className="h-full w-full text-bone-muted" />
    ),
    href: "/construction",
  },
  {
    title: "Estate",
    icon: (
      <IconHome2 className="h-full w-full text-bone-muted" />
    ),
    href: "/real-estate",
  },
  {
    title: "Engineer",
    icon: (
      <IconSettings2 className="h-full w-full text-bone-muted" />
    ),
    href: "/engineering",
  },
];

export function FloatingDock() {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const onPopupOpen = () => setPopupOpen(true);
    const onPopupClose = () => setPopupOpen(false);
    window.addEventListener("popupOpen", onPopupOpen);
    window.addEventListener("popupClose", onPopupClose);
    return () => {
      window.removeEventListener("popupOpen", onPopupOpen);
      window.removeEventListener("popupClose", onPopupClose);
    };
  }, []);

  return (
    <div className={cn("fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-opacity duration-300", popupOpen && "pointer-events-none opacity-0")}>
      <FloatingDockUI
        items={items}
        desktopClassName="backdrop-blur-xl"
      />
    </div>
  );
}
