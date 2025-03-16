"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { lazy, Suspense } from "react";

const About = lazy(() => import("@/components/about-me"));
const Projects = lazy(() => import("@/components/projects"));

export default function Home() {
  return (
    <>
      <main className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <Parallax speed={-10}>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/background.jpg')] bg-cover bg-center opacity-20"></div>
        </Parallax>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
          className="relative text-5xl md:text-6xl font-bold text-gray-200"
        >
          Cześć, jestem <span className="text-gray-400">Błażej</span> 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ amount: 0.3 }}
          className="relative mt-4 text-lg text-gray-400 max-w-2xl"
        >
          Jestem Frontend Developerem z pasją do nowoczesnych technologii
          webowych. Tworzę responsywne i szybkie aplikacje internetowe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ amount: 0.3 }}
          className="relative mt-6 flex space-x-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Zobacz moje projekty
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Skontaktuj się ze mną
          </motion.a>
        </motion.div>
      </main>

      <Suspense
        fallback={<p className="text-gray-400 text-center">Ładowanie...</p>}
      >
        <About />
      </Suspense>

      <Suspense
        fallback={
          <p className="text-gray-400 text-center">Ładowanie projektów...</p>
        }
      >
        <Projects />
      </Suspense>
    </>
  );
}
