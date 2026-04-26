"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  "/hero/Cinematic_architectural_photograph_202604261757.jpeg",
  "/hero/Cinematic_architectural_photograph_202604261757 (1).jpeg",
  "/hero/Award-winning_architectural_photography_202604261803.jpeg",
  "/hero/Hyper-realistic_architectural_twilight_202604261757.jpeg",
];

const INTERVAL = 3000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        key={index}
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      >
        <Image
          src={SLIDES[index]}
          alt=""
          fill
          className="object-cover"
          priority={index === 0}
          sizes="100vw"
        />
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index
                ? "w-6 bg-gold"
                : "w-1.5 bg-bone/40 hover:bg-bone/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
