"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Wrap any block to fade/slide it in once it enters the viewport.
 * Respects prefers-reduced-motion.
 */
export function MotionReveal({
  as = "div",
  delay = 0,
  y = 24,
  className,
  children,
}: Props) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  const MotionTag = motion(as as any) as React.ComponentType<any>;
  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
