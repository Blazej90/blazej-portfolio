"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { projectsLocales } from "@/locales/projects";
import { projects, type Project } from "@/data/projects";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = projectsLocales[language];

  return (
    <motion.article
      variants={card}
      className="group flex flex-col overflow-hidden rounded-xl border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.src}
          alt={project.title[language]}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-center">
          {project.title[language]}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground text-center">
          {project.description[language]}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-brand"
          >
            <Github className="size-4" />
            {t.github}
          </a>
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-brand"
          >
            <ExternalLink className="size-4" />
            {t.liveDemo}
          </a>
          {project.clientUrl && (
            <a
              href={project.clientUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t.productionTitle}
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-brand"
            >
              <ExternalLink className="size-4" />
              {t.seeInProduction}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { language } = useLanguage();
  const t = projectsLocales[language];

  return (
    <section
      id="projects"
      className="scroll-mt-32 py-20 px-4 sm:px-6 md:px-10 text-center relative overflow-hidden"
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.src} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
