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
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setPrevIndex(index);
    setIndex((i) => (i + 1) % SLIDES.length);
    setIsTransitioning(true);
  }, [index, isTransitioning]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Previous slide (for crossfade) */}
      {isTransitioning && (
        <div className="absolute inset-0 transition-opacity duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0">
          <Image
            src={SLIDES[prevIndex]}
            alt=""
            fill
            className="object-cover scale-105"
            priority={prevIndex === 0}
            sizes="100vw"
          />
        </div>
      )}

      {/* Current slide */}
      <div
        key={index}
        className="absolute inset-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
      >
        <Image
          src={SLIDES[index]}
          alt=""
          fill
          className="object-cover scale-105"
          priority={index === 0}
          sizes="100vw"
        />
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (isTransitioning) return;
              setPrevIndex(index);
              setIndex(i);
              setIsTransitioning(true);
            }}
            className={`h-1.5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              i === index
                ? "w-6 bg-gold scale-110"
                : "w-1.5 bg-bone/40 hover:bg-bone/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
