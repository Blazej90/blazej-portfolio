"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Docker",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
        className="text-4xl font-bold text-gray-200"
      >
        O mnie
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ amount: 0.3 }}
        className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto"
      >
        Jestem Frontend Developerem z pasją do tworzenia nowoczesnych aplikacji
        internetowych. Specjalizuję się w ekosystemie React, a także posiadam
        doświadczenie w tworzeniu pełnych aplikacji Fullstack.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ amount: 0.3 }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-white border-gray-600 px-3 py-1 text-sm"
          >
            {tech}
          </Badge>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ amount: 0.3 }}
        className="mt-8 flex justify-center space-x-6"
      >
        <a
          href="https://github.com/Blazej90"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-gray-800 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition text-lg"
        >
          <Github size={22} /> <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/błażej-bartoszewski-36b7162b7"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-gray-800 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition text-lg"
        >
          <Linkedin size={22} /> <span>LinkedIn</span>
        </a>
      </motion.div>
    </section>
  );
}
