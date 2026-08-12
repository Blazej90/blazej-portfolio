"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { pageLocales } from "@/locales/page";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
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
      {/* soft indigo blur orb */}
      <div
        aria-hidden
        className="absolute -z-10 top-1/4 left-1/2 -translate-x-1/2 size-72 sm:size-96 rounded-full bg-brand opacity-[0.08] blur-3xl"
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
          variants={item}
          className="mt-4 text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight"
        >
          Błażej Bartoszewski
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
        >
          {t.taglineStart} <span className="text-brand">{t.taglineAccent}</span>{" "}
          {t.taglineEnd}
        </motion.p>

        <motion.p
          variants={item}
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
            className="bg-brand text-white hover:bg-brand-hover"
          >
            <a href="#projects">{t.projectsButton}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">{t.contactButton}</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label={t.scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{
          delay: 1.6,
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronDown className="size-6" />
      </motion.a>
    </main>
  );
}
