"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { aboutMeLocales } from "@/locales/about-me";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const technologies = [
  { id: 1, quote: "TypeScript", name: "", title: "" },
  { id: 2, quote: "React.js", name: "", title: "" },
  { id: 3, quote: "Redux", name: "", title: "" },
  { id: 4, quote: "Next.js", name: "", title: "" },
  { id: 5, quote: "Tailwind CSS", name: "", title: "" },
  { id: 6, quote: "HTML", name: "", title: "" },
  { id: 7, quote: "CSS", name: "", title: "" },
  { id: 8, quote: "JavaScript", name: "", title: "" },
  { id: 9, quote: "Node.js", name: "", title: "" },
  { id: 10, quote: "MongoDB", name: "", title: "" },
  { id: 11, quote: "Docker", name: "", title: "" },
  { id: 12, quote: "GitHub", name: "", title: "" },
  { id: 13, quote: "Git", name: "", title: "" },
  { id: 14, quote: "REST API", name: "", title: "" },
];

export default function About() {
  const { language } = useLanguage();
  const t = aboutMeLocales[language];

  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl font-bold text-gray-200"
      >
        {t.title}
      </motion.h2>

      <TextGenerateEffect
        key={language}
        words={t.description || ""}
        className="mt-4 max-w-3xl mx-auto text-lg text-gray-400"
        duration={0.8}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-12"
      >
        <InfiniteMovingCards
          items={technologies}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-12 flex justify-center space-x-6"
      >
        <a
          href="https://github.com/Blazej90"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-gray-800 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition text-lg"
        >
          <Github size={22} /> <span>{t.github}</span>
        </a>

        <a
          href="https://www.linkedin.com/in/błażej-bartoszewski-36b7162b7"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-gray-800 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition text-lg"
        >
          <Linkedin size={22} /> <span>{t.linkedin}</span>
        </a>
      </motion.div>
    </section>
  );
}
