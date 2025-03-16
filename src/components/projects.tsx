"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Ucz się React.js z AI",
    description:
      "Aplikacja losuje pytania z React.js, pozwala na nagrywanie odpowiedzi głosowej i weryfikację przez AI.",
    image: "/images/projects/learn-react.jpg",
    githubUrl: "https://github.com/Blazej90/lern-react",
    liveDemoUrl: "https://lern-react.vercel.app",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn",
      "Clerk",
      "OpenAI API",
    ],
  },
  {
    title: "Kreator formularza",
    description:
      "Aplikacja do tworzenia dynamicznych formularzy. Użytkownik może samodzielnie konfigurować pola według własnych potrzeb.",
    image: "/images/projects/form.jpg",
    githubUrl: "https://github.com/Blazej90/form",
    liveDemoUrl: "https://form-eta-three.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn"],
  },
  {
    title: "Wyszukiwarka filmów",
    description:
      "Aplikacja pozwala na wyszukiwanie filmów po tytule, przeglądanie recenzji i obsady. Pokazuje najpopularniejsze filmy na podstawie TMDB API.",
    image: "/images/projects/movie.jpg",
    githubUrl: "https://github.com/Blazej90/goit-react-hw-05-movies",
    liveDemoUrl: "https://blazej90.github.io/goit-react-hw-05-movies/",
    technologies: ["React", "CSS Modules", "REST API", "TMDB API"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
        className="text-4xl font-bold text-gray-200"
      >
        Moje Projekty
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            <Card className="bg-gray-900 shadow-lg rounded-lg h-full flex flex-col border-0">
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full h-48 cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg hover:opacity-80 transition"
                  />
                </div>
              </a>

              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-400 flex-grow">{project.description}</p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-white text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition"
                  >
                    <Github size={18} /> <span>GitHub</span>
                  </a>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-600 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition"
                  >
                    <ExternalLink size={18} /> <span>Live Demo</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
