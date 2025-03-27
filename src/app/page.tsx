"use client";

import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import ParticlesBackground from "@/components/ui/particles-background";
import { lazy, Suspense } from "react";
import { useLanguage } from "@/context/language-context";
import { pageLocales } from "@/locales/page";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ChevronDown } from "lucide-react";

const About = lazy(() => import("@/components/about-me"));
const Projects = lazy(() => import("@/components/projects"));
const Contact = lazy(() => import("@/components/contact"));

export default function Home() {
  const { language } = useLanguage();
  const t = pageLocales[language];

  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-[6rem] sm:pt-0 sm:pb-16">
        <Parallax speed={-10}>
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20" />
        </Parallax>

        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
          <ParticlesBackground />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
          className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200"
        >
          {t.role}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ amount: 0.3 }}
          className="relative text-base sm:text-lg text-gray-400"
        >
          Błażej Bartoszewski
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="relative mt-4 text-sm sm:text-lg text-gray-400 max-w-xs sm:max-w-md md:max-w-2xl"
        >
          {t.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ amount: 0.3 }}
          className="relative mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 w-full"
        >
          <HoverBorderGradient
            as="a"
            href="#projects"
            className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg"
          >
            {t.projectsButton}
          </HoverBorderGradient>

          <HoverBorderGradient
            as="a"
            href="#contact"
            className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg"
          >
            {t.contactButton}
          </HoverBorderGradient>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 sm:mt-auto sm:absolute sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 text-gray-400"
        >
          <a href="#about" aria-label="Scroll down">
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </main>

      <Suspense
        fallback={<p className="text-gray-400 text-center">{t.loading}</p>}
      >
        <About />
      </Suspense>

      <Suspense
        fallback={
          <p className="text-gray-400 text-center">{t.projectsLoading}</p>
        }
      >
        <Projects />
      </Suspense>

      <Suspense
        fallback={<p className="text-gray-400 text-center">{t.loading}</p>}
      >
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
}
