"use client";

import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "@/components/ui/particles-background";
import { lazy, Suspense, useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { pageLocales } from "@/locales/page";
import { ChevronDown } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Navbar from "@/components/navbar";

const About = lazy(() => import("@/components/about-me"));
const Projects = lazy(() => import("@/components/projects"));
const Contact = lazy(() => import("@/components/contact"));

export default function Home() {
  const { language } = useLanguage();
  const t = pageLocales[language];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />

      <main
        className={`relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-[6rem] sm:pt-0 sm:pb-16 transition-all duration-300 ${
          scrolled ? "pt-[4rem]" : "pt-[6rem]"
        }`}
      >
        <Parallax speed={-10}>
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20" />
        </Parallax>

        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
          <ParticlesBackground />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-base sm:text-lg text-gray-400"
        >
          {t.hello}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
        >
          Błażej Bartoszewski
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg sm:text-xl text-blue-400 font-medium mt-2"
        >
          <Typewriter
            words={t.typewriter}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 max-w-xs sm:max-w-md md:max-w-2xl text-sm sm:text-lg text-gray-400"
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
          <a
            href="#projects"
            className="relative px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-md transition-all overflow-hidden group"
          >
            <span className="relative z-10">{t.projectsButton}</span>
            <span className="absolute inset-0 bg-black/30 z-0 origin-right scale-x-100 group-hover:scale-x-0 transition-transform duration-700 ease-out" />
          </a>

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
