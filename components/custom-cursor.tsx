"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current || !ringRef.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMove = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "power2.out",
      });
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const onEnterInteractive = () => {
      gsap.to(dot, { scale: 3, duration: 0.3, ease: "power2.out" });
      gsap.to(ring, { scale: 1.5, opacity: 0.4, duration: 0.3, ease: "power2.out" });
    };

    const onLeaveInteractive = () => {
      gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(ring, { scale: 1, opacity: 0.15, duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, .cursor-hover"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-5 -mt-5 h-10 w-10 rounded-full border border-bone/25 opacity-15"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-gold"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
