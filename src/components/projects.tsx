"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { projectsLocales } from "@/locales/projects";
import { projects, type Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

const featuredProjects = projects.filter((p) => p.featured);
const moreProjects = projects.filter((p) => !p.featured);

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const linkClasses =
  "inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-brand-ink";

function ProjectLinks({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = projectsLocales[language];

  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        <Github className="size-4" />
        {t.github}
      </a>
      <a
        href={project.liveDemoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
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
          className={linkClasses}
        >
          <ExternalLink className="size-4" />
          {t.seeInProduction}
        </a>
      )}
    </div>
  );
}

// Large horizontal card; image side alternates on desktop.
function FeaturedProjectCard({
  project,
  reversed,
}: {
  project: Project;
  reversed: boolean;
}) {
  const { language } = useLanguage();

  return (
    <motion.article
      variants={card}
      className="group grid overflow-hidden rounded-xl border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:grid-cols-2"
    >
      <div
        className={`relative aspect-video overflow-hidden md:aspect-auto md:min-h-72 ${
          reversed ? "md:order-last" : ""
        }`}
      >
        <Image
          src={project.src}
          alt={project.title[language]}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <h3 className="text-2xl font-semibold tracking-tight">
          {project.title[language]}
        </h3>
        <p className="mt-3 text-muted-foreground">
          {project.description[language]}
        </p>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();

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
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight">
          {project.title[language]}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {project.description[language]}
        </p>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { language } = useLanguage();
  const t = projectsLocales[language];
  const [showMore, setShowMore] = useState(false);

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
          className="mt-12 flex flex-col gap-8"
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.src}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </motion.div>

        <Button
          variant="outline"
          size="lg"
          className="mt-12"
          aria-expanded={showMore}
          aria-controls="more-projects"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? t.fewerProjects : `${t.moreProjects} (${moreProjects.length})`}
          <ChevronDown
            className={`size-4 transition-transform duration-300 ${
              showMore ? "rotate-180" : ""
            }`}
          />
        </Button>

        <AnimatePresence initial={false}>
          {showMore && (
            <motion.div
              id="more-projects"
              key="more-projects"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-6 pt-10 pb-2 sm:grid-cols-2 lg:grid-cols-3"
              >
                {moreProjects.map((project) => (
                  <ProjectCard key={project.src} project={project} />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
