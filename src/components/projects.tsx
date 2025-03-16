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

const projects = [
  {
    title: "Ucz się React.js z AI",
    description:
      "Aplikacja losuje pytania z React.js, pozwala na nagrywanie odpowiedzi głosowej i weryfikację przez AI. Po skończonej odpowiedzi AI ocenia poprawność i daje wskazówki.",
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
  {
    title: "Gra Wisielec",
    description:
      "Klasyczna gra Wisielec w wersji webowej! Użytkownik wybiera poziom trudności i zgaduje litery. Możliwość gry po angielsku z dedykowanymi hasłami.",
    image: "/images/projects/hangman.jpg",
    githubUrl: "https://github.com/Blazej90/hangman-game/tree/master",
    liveDemoUrl: "https://game-for-boredom.netlify.app",
    technologies: ["React", "Vite", "CSS Modules"],
  },
  {
    title: "Wyszukiwarka obrazów",
    description:
      "Aplikacja do wyszukiwania i przeglądania obrazów według słów kluczowych. Wykorzystuje Pixabay API jako backend.",
    image: "/images/projects/picture.jpg",
    githubUrl: "https://github.com/Blazej90/goit-react-hw-03-image-finder",
    liveDemoUrl: "https://blazej90.github.io/goit-react-hw-03-image-finder/",
    technologies: ["React", "CSS Modules", "REST API", "Pixabay API"],
  },
  {
    title: "Taxi Test",
    description:
      "Aplikacja służy do obliczania wartości błędu taksometru podczas jego legalizacji. Użytkownik wprowadza wartości, otrzymuje wynik testu i może zapisać wyniki w localStorage.",
    image: "/images/projects/taxi.jpg",
    githubUrl: "https://github.com/Blazej90/taxi-test",
    liveDemoUrl: "https://blazej90.github.io/taxi-test/",
    technologies: ["HTML", "JavaScript", "CSS"],
  },
];

export default function Projects() {
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
        Moje Projekty
      </motion.h2>

      <div className="mt-10 relative">
        <Carousel className="w-full max-w-5xl mx-auto relative">
          <CarouselPrevious className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 transition hidden sm:flex" />
          <CarouselNext className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 transition hidden sm:flex" />

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

                    <CardContent className="flex flex-col flex-grow min-h-[250px]">
                      <p className="text-gray-400 flex-grow">
                        {project.description}
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
