"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { pageLocales } from "@/locales/page";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Text stays visible from the first paint (LCP, Speed Index) — only slides into place.
const headline: Variants = {
  hidden: { y: 12 },
  show: { y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const { language } = useLanguage();
  const t = pageLocales[language];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* subtle dot grid with radial mask */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_30%,transparent_75%)]"
      />
      {/* drifting blur orbs — pure CSS keyframes (compositor), no main-thread JS */}
      <div
        aria-hidden
        className="absolute -z-10 top-1/4 left-1/2 -translate-x-1/2 size-80 sm:size-[28rem] rounded-full bg-brand opacity-[0.15] blur-3xl motion-safe:animate-orb-a"
      />
      <div
        aria-hidden
        className="absolute -z-10 bottom-[18%] left-[12%] size-72 sm:size-96 rounded-full bg-brand-secondary opacity-[0.13] blur-3xl motion-safe:animate-orb-b"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.p
          variants={item}
          className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground"
        >
          {t.role}
        </motion.p>

        <motion.h1
          variants={headline}
          className="mt-4 text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight"
        >
          Błażej Bartoszewski
        </motion.h1>

        <motion.p
          variants={headline}
          className="mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
        >
          {t.taglineStart} <span className="highlight">{t.taglineAccent}</span>{" "}
          {t.taglineEnd}
        </motion.p>

        <motion.p
          variants={headline}
          className="mt-6 max-w-md sm:max-w-xl text-base sm:text-lg text-muted-foreground"
        >
          {t.description}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="bg-brand text-brand-foreground hover:bg-brand-hover"
          >
            <a href="#projects">{t.projectsButton}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">{t.contactButton}</a>
          </Button>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label={t.scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors motion-safe:animate-scroll-hint"
      >
        <ChevronDown className="size-6" />
      </a>
    </main>
  );
}
