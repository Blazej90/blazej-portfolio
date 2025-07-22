"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number = 30,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHasMounted(true);
    setWidth(window.innerWidth);
  }, []);

  if (!hasMounted) return null;

  return (
    <motion.div
      className={cn("absolute inset-0 w-full h-full", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {Array.from({ length: number }).map((_, idx) => {
        const position = Math.random() * width;
        const duration = Math.floor(Math.random() * 5 + 5);
        const delay = Math.random() * 5;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
            )}
            style={{
              top: "-40px",
              left: `${position}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </motion.div>
  );
};
