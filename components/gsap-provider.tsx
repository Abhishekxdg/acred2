"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, type ReactNode } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export function GsapProvider({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.defaults({
        markers: false,
      });

      ScrollTrigger.refresh();
    },
    { scope: container }
  );

  return <div ref={container}>{children}</div>;
}
