"use client";

import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import React from "react";

export function HoverEffectWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const radius = 100;
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${
              visible ? radius + "px" : "0px"
            } circle at ${mouseX}px ${mouseY}px,
            rgba(99, 102, 241, 0.15),
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`group/input rounded-lg p-[2px] transition duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
