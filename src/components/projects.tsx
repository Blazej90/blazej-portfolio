"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useLanguage } from "@/context/language-context";
import { projectsLocales } from "@/locales/projects";

const projects = [
  {
    githubUrl: "https://github.com/Blazej90/lern-react",
    liveDemoUrl: "https://lern-react.vercel.app",
    image: "/images/projects/learn-react.jpg",
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
    githubUrl: "https://github.com/Blazej90/form",
    liveDemoUrl: "https://form-eta-three.vercel.app/",
    image: "/images/projects/form.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn"],
  },
  {
    githubUrl: "https://github.com/Blazej90/goit-react-hw-05-movies",
    liveDemoUrl: "https://blazej90.github.io/goit-react-hw-05-movies/",
    image: "/images/projects/movie.jpg",
    technologies: ["React", "CSS Modules", "REST API", "TMDB API"],
  },
  {
    githubUrl: "https://github.com/Blazej90/hangman-game/tree/master",
    liveDemoUrl: "https://game-for-boredom.netlify.app",
    image: "/images/projects/hangman.jpg",
    technologies: ["React", "Vite", "CSS Modules"],
  },
  {
    githubUrl: "https://github.com/Blazej90/goit-react-hw-03-image-finder",
    liveDemoUrl: "https://blazej90.github.io/goit-react-hw-03-image-finder/",
    image: "/images/projects/picture.jpg",
    technologies: ["React", "CSS Modules", "REST API", "Pixabay API"],
  },
  {
    githubUrl: "https://github.com/Blazej90/taxi-test",
    liveDemoUrl: "https://blazej90.github.io/taxi-test/",
    image: "/images/projects/taxi.jpg",
    technologies: ["HTML", "JavaScript", "CSS"],
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const t = projectsLocales[language];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto text-center relative"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
        className="text-4xl font-bold text-gray-200"
      >
        {t.title}
      </motion.h2>

      <div className="mt-10 relative">
        <Carousel className="w-full max-w-5xl mx-auto relative">
          <CarouselPrevious className="hidden sm:flex absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 transition" />
          <CarouselNext className="hidden sm:flex absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 transition" />

          <CarouselContent className="-ml-2">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-2 sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
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
                          alt={t.projects[index].title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-t-lg hover:opacity-80 transition"
                        />
                      </div>
                    </a>

                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-white">
                        {t.projects[index].title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col flex-grow min-h-[250px]">
                      <p className="text-gray-400 flex-grow">
                        {t.projects[index].description}
                      </p>

                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-white border-gray-600 px-2 py-1"
                          >
                            {tech}
                          </Badge>
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
