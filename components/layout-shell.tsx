"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { FloatingDock } from "./floating-dock";
import { Footer } from "./footer";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBrochure = pathname === "/brochure";

  return (
    <>
      {!isBrochure && <Navbar />}
      <main className="relative z-[2] flex-1 pb-20 md:pb-0">{children}</main>
      {!isBrochure && <FloatingDock />}
      {!isBrochure && <Footer />}
    </>
  );
}
