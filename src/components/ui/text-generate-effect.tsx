"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.08),
      }
    );
  }, [words]);

  return (
    <motion.div
      key={words}
      ref={scope}
      className={cn(
        "inline-block leading-relaxed text-lg text-gray-400",
        className
      )}
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(6px)" }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="inline-block opacity-0"
          style={{ marginRight: "6px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
