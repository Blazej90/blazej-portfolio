"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-gray-200"
      >
        Cześć, jestem <span className="text-gray-400">Błażej</span> 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-lg text-gray-400 max-w-2xl"
      >
        Jestem Frontend Developerem z pasją do nowoczesnych technologii
        webowych. Tworzę responsywne i szybkie aplikacje internetowe.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-6 flex space-x-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          Zobacz moje projekty
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Skontaktuj się ze mną
        </a>
      </motion.div>
    </main>
  );
}
