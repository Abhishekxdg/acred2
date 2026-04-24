"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

type Props = {
  items: string[];
  duration?: number;
};

/**
 * Infinite horizontal marquee powered by GSAP for butter-smooth motion.
 */
export function Marquee({ items, duration = 40 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const repeated = [...items, ...items, ...items];

  useEffect(() => {
    if (!trackRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const track = trackRef.current;
    const tween = gsap.to(track, {
      xPercent: -33.333,
      ease: "none",
      duration,
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [duration]);

  return (
    <div className="overflow-hidden border-y border-ink-line py-6">
      <div
        ref={trackRef}
        className="flex gap-16 whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs uppercase tracking-widest2 text-bone-muted"
          >
            {item}
            <span className="ml-16 text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
