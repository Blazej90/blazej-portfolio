"use client";

import React, { useState, useEffect, ElementType } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

type HoverBorderGradientProps<T extends ElementType> = {
  as?: T;
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children"> & {
    children: React.ReactNode;
  };

export function HoverBorderGradient<T extends ElementType = "button">({
  children,
  containerClassName,
  className,
  as,
  duration = 1,
  clockwise = true,
  ...props
}: HoverBorderGradientProps<T>) {
  const Tag = as || "button";
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (current: Direction): Direction => {
    const order: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const idx = order.indexOf(current);
    return clockwise
      ? order[(idx - 1 + order.length) % order.length]
      : order[(idx + 1) % order.length];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.1% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, rotateDirection]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20",
        "items-center flex-col flex-nowrap h-min justify-center overflow-visible p-px decoration-clone w-fit",
        "rounded-l-full rounded-r-full",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-neutral-800 px-6 py-2 text-lg font-semibold rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>

      <motion.div
        className="absolute inset-0 overflow-hidden z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />

      <div className="bg-black absolute inset-[2px] rounded-[inherit]" />
    </Tag>
  );
}
