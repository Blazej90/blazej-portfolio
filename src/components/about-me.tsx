"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { aboutMeLocales } from "@/locales/about-me";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";

const technologies = [
  {
    id: 1,
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 w-6 h-6" />,
  },
  {
    id: 2,
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 w-6 h-6" />,
  },
  {
    id: 3,
    name: "React.js",
    icon: <SiReact className="text-cyan-400 w-6 h-6" />,
  },
  {
    id: 4,
    name: "Redux",
    icon: <SiRedux className="text-purple-500 w-6 h-6" />,
  },
  {
    id: 5,
    name: "Next.js",
    icon: <SiNextdotjs className="text-white w-6 h-6" />,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-blue-300 w-6 h-6" />,
  },
  {
    id: 7,
    name: "HTML",
    icon: <SiHtml5 className="text-orange-500 w-6 h-6" />,
  },
  { id: 8, name: "CSS", icon: <SiCss3 className="text-blue-600 w-6 h-6" /> },
  {
    id: 9,
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600 w-6 h-6" />,
  },
  {
    id: 10,
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 w-6 h-6" />,
  },
  {
    id: 11,
    name: "Docker",
    icon: <SiDocker className="text-blue-400 w-6 h-6" />,
  },
  { id: 12, name: "Git", icon: <SiGit className="text-orange-400 w-6 h-6" /> },
  { id: 13, name: "GitHub", icon: <SiGithub className="text-white w-6 h-6" /> },
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
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-12"
      >
        <InfiniteMovingCards
          items={technologies}
          direction="left"
          speed="slow"
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
