"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

// Deterministic pseudo-random generator (mulberry32) — pure, stable across
// renders and between server/client, so meteors don't jump on re-render.
const seededRandom = (seed: number) => {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

export const Meteors = ({
  number = 30,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn("absolute inset-0 w-full h-full", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {Array.from({ length: number }).map((_, idx) => {
        const position = seededRandom(idx * 3) * 100;
        const duration = Math.floor(seededRandom(idx * 3 + 1) * 5 + 5);
        const delay = seededRandom(idx * 3 + 2) * 5;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
            )}
            style={{
              top: "-40px",
              left: `${position}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </motion.div>
  );
};
