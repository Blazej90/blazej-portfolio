"use client";

import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { aboutMeLocales } from "@/locales/about-me";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithub,
  SiSupabase,
  SiVite,
  type IconType,
} from "@icons-pack/react-simple-icons";

const technologies: { name: string; icon: IconType }[] = [
  // Core languages
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  // Frontend frameworks
  { name: "React", icon: SiReact },
  { name: "Angular", icon: SiAngular },
  { name: "Redux", icon: SiRedux },
  { name: "Next.js", icon: SiNextdotjs },
  // Styling & tooling
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  // Backend
  { name: "Node.js", icon: SiNodedotjs },
  // Databases / BaaS
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
  // DevOps & version control
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  const { language } = useLanguage();
  const t = aboutMeLocales[language];

  return (
    <section
      id="about"
      className="scroll-mt-32 py-20 px-6 text-center relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold tracking-tight"
        >
          {t.title}
        </motion.h2>

        <TextGenerateEffect
          key={language}
          words={t.description || ""}
          className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground"
          duration={0.8}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground"
        >
          {t.technologiesTitle}
        </motion.p>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 max-w-3xl mx-auto"
        >
          {technologies.map((tech) => (
            <motion.li
              key={tech.name}
              variants={item}
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-brand"
            >
              <tech.icon className="size-6" color="currentColor" />
              <span className="text-xs font-medium group-hover:text-foreground transition-colors duration-200">
                {tech.name}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-3"
        >
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com/Blazej90"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-5" />
              <span>{t.github}</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://www.linkedin.com/in/błażej-bartoszewski-36b7162b7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-5" />
              <span>{t.linkedin}</span>
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.3, 0.8, 0.3] }}
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="mt-16 inline-block text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronDown className="size-6" />
      </motion.a>
    </section>
  );
}
