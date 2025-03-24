"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
      const { currentTarget, clientX, clientY } = event;
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
              #3b82f6,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <input
          type={type}
          ref={ref}
          className={cn(
            `
              shadow-input
              flex h-10 w-full
              rounded-md border-none
              bg-[#27272a]
              px-3 py-2 text-sm
              placeholder:text-neutral-400
              text-[oklch(0.371_0_0)]
              transition duration-300
              group-hover/input:shadow-none
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
              file:border-0 file:bg-transparent file:text-sm file:font-medium
              disabled:cursor-not-allowed disabled:opacity-50
            `,
            className
          )}
          {...props}
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";
export { Input };
