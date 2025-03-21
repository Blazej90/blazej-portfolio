"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

type InfiniteMovingCardsProps = {
  items: { id: number; name: string; icon: React.ReactElement }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const setDirection = useCallback(() => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  }, [direction]);

  const setSpeed = useCallback(() => {
    const duration =
      speed === "fast" ? "25s" : speed === "normal" ? "50s" : "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setDirection();
      setSpeed();
      setStart(true);
    }
  }, [setDirection, setSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-6",
          start && "animate-scroll"
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="shrink-0 flex items-center gap-3 text-white text-base sm:text-lg group"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
