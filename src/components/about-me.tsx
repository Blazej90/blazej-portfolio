"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithub,
  SiSupabase,
  SiVite,
  SiClaude,
  type IconType,
} from "@icons-pack/react-simple-icons";

type Technology = { name: string; icon: IconType; core?: boolean };
type TechnologyGroup = "frontend" | "backend" | "tools";

// `core` marks the main stack — highlighted in the list.
const technologies: Record<TechnologyGroup, Technology[]> = {
  frontend: [
    { name: "React", icon: SiReact, core: true },
    { name: "TypeScript", icon: SiTypescript, core: true },
    { name: "Next.js", icon: SiNextdotjs, core: true },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Angular", icon: SiAngular },
    { name: "Redux", icon: SiRedux },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Supabase", icon: SiSupabase },
    { name: "Firebase", icon: SiFirebase },
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Docker", icon: SiDocker },
    { name: "Vite", icon: SiVite },
    { name: "Claude", icon: SiClaude },
  ],
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const subheadingClasses =
  "text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground";

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

        <div className="mt-10 grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto w-56 sm:w-64"
          >
            {/* lime offset block — same highlighter motif as the logo */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-brand"
            />
            <Image
              src="/images/about/blazej_foto.jpg"
              alt={t.photoAlt}
              width={800}
              height={800}
              sizes="(max-width: 640px) 224px, 256px"
              className="relative aspect-square rounded-2xl border border-border object-cover dark:brightness-[0.85]"
            />
          </motion.div>

          <TextGenerateEffect
            key={language}
            words={t.description || ""}
            className="text-lg text-muted-foreground md:text-left"
            duration={0.8}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className={`mt-16 ${subheadingClasses}`}
        >
          {t.experienceTitle}
        </motion.p>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-8 max-w-3xl mx-auto space-y-10 border-l border-border pl-8 text-left"
        >
          {t.experience.map((job) => (
            <motion.li
              key={job.company}
              variants={item}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute -left-[37px] top-1.5 size-2.5 rounded-full bg-brand ring-4 ring-background"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold">
                  {job.role}{" "}
                  <span className="text-muted-foreground font-normal">·</span>{" "}
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t.visitWebsite}
                      className="inline-flex items-center gap-1 underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand-ink"
                    >
                      {job.company}
                      <ExternalLink className="size-3.5" />
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <span className="text-xs font-medium text-muted-foreground">
                  {job.period}
                </span>
              </div>
              {job.product && (
                <p className="mt-1 text-sm italic text-muted-foreground">
                  {job.product}
                </p>
              )}
              <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-muted-foreground marker:text-brand-ink">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {job.stack && (
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-card px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </motion.ol>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className={`mt-16 ${subheadingClasses}`}
        >
          {t.technologiesTitle}
        </motion.p>

        <div className="mt-8 grid gap-10 text-left md:grid-cols-3 md:gap-8">
          {(Object.keys(technologies) as TechnologyGroup[]).map((group) => (
            <div key={group}>
              <h3 className="text-sm font-semibold">
                {t.technologyGroups[group]}
              </h3>
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {technologies[group].map((tech) => (
                  <motion.li
                    key={tech.name}
                    variants={item}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                      tech.core
                        ? "border-brand-ink/40 bg-brand/10 text-foreground"
                        : "border-border bg-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <tech.icon
                      className={`size-3.5 ${tech.core ? "text-brand-ink" : ""}`}
                      color="currentColor"
                    />
                    {tech.name}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
