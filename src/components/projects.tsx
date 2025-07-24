"use client";

import { Button } from "@/components/ui/button";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Github, ExternalLink } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
import { useState, useRef, useId, useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import { projectsLocales } from "@/locales/projects";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

interface SlideData {
  src: string;
  githubUrl: string;
  liveDemoUrl: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  title: string;
  description: string;
  handleSlideClick: (index: number) => void;
}

const Slide = ({
  slide,
  index,
  current,
  title,
  description,
  handleSlideClick,
}: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + r.width / 2);
    yRef.current = event.clientY - (r.top + r.height / 2);
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, githubUrl, liveDemoUrl } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-end relative text-center text-white transition-all duration-300 ease-in-out w-[90vw] sm:w-[70vmin] h-[90vw] sm:h-[70vmin] mx-auto z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="relative w-full h-full bg-[#1D1F2F] overflow-hidden transition-all duration-150 ease-out rounded-xl"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x)/30), calc(var(--y)/30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover transition-opacity duration-600 ease-in-out"
            style={{ opacity: current === index ? 1 : 0.5 }}
            alt={title}
            src={src}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}

          <article className="absolute bottom-0 left-0 w-full bg-black/70 p-6 z-10">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-2">
              {title}
            </h2>
            <p className="text-sm text-gray-300 mb-4 max-w-[90%] mx-auto">
              {description}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                asChild
                className="group/btn relative h-10 px-4 rounded-md bg-[#1f1f1f] text-white font-medium dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                  <Github size={16} className="inline ml-2" />
                  <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
                  <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
                </a>
              </Button>

              <Button
                asChild
                className="group/btn relative h-10 px-4 rounded-md bg-[#1f1f1f] text-white font-medium dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              >
                <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ExternalLink size={16} className="inline ml-2" />
                  <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
                  <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
                </a>
              </Button>
            </div>
          </article>
        </div>
      </li>
    </div>
  );
};

const CarouselControl = ({
  type,
  title,
  handleClick,
}: {
  type: string;
  title: string;
  handleClick: () => void;
}) => (
  <button
    className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
      type === "previous" ? "rotate-180" : ""
    }`}
    title={title}
    onClick={handleClick}
  >
    <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
  </button>
);

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();
  const t = projectsLocales[language];

  const slides: SlideData[] = [
    {
      src: "/images/projects/english-platform.png",
      githubUrl: "https://github.com/Blazej90/english-platform",
      liveDemoUrl: "https://english-platform-eight.vercel.app",
    },
    {
      src: "/images/projects/learn-react.jpg",
      githubUrl: "https://github.com/Blazej90/lern-react",
      liveDemoUrl: "https://lern-react.vercel.app",
    },
    {
      src: "/images/projects/form.jpg",
      githubUrl: "https://github.com/Blazej90/form",
      liveDemoUrl: "https://form-eta-three.vercel.app/",
    },
    {
      src: "/images/projects/movie.jpg",
      githubUrl: "https://github.com/Blazej90/goit-react-hw-05-movies",
      liveDemoUrl: "https://blazej90.github.io/goit-react-hw-05-movies/",
    },
    {
      src: "/images/projects/hangman.jpg",
      githubUrl: "https://github.com/Blazej90/hangman-game/tree/master",
      liveDemoUrl: "https://game-for-boredom.netlify.app",
    },
    {
      src: "/images/projects/picture.jpg",
      githubUrl: "https://github.com/Blazej90/goit-react-hw-03-image-finder",
      liveDemoUrl: "https://blazej90.github.io/goit-react-hw-03-image-finder/",
    },
    {
      src: "/images/projects/taxi.jpg",
      githubUrl: "https://github.com/Blazej90/taxi-test",
      liveDemoUrl: "https://blazej90.github.io/taxi-test/",
    },
    {
      src: "/images/projects/styroapin-calculator.jpg",
      githubUrl: "https://github.com/Blazej90/styroapin-calculator",
      liveDemoUrl: "https://blazej90.github.io/styroapin-calculator/",
    },
  ];

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePreviousClick,
    trackMouse: true,
  });

  const id = useId();

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.3 }}
      className="scroll-mt-32 py-20 px-4 sm:px-6 md:px-10 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 w-screen h-full -z-10 pointer-events-none">
        <Meteors number={30} className="top-0 left-0 w-full h-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-gray-200 mb-12">{t.title}</h2>

        <div
          className="relative w-[90vw] sm:w-[70vmin] h-[90vw] sm:h-[70vmin] mx-auto"
          aria-labelledby={`carousel-heading-${id}`}
          {...swipeHandlers}
        >
          <ul
            className="absolute flex transition-transform duration-1000 ease-in-out overflow-hidden"
            style={{
              transform: `translateX(-${current * (100 / slides.length)}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <Slide
                key={index}
                slide={slide}
                index={index}
                current={current}
                handleSlideClick={handleSlideClick}
                title={t.projects[index].title}
                description={t.projects[index].description}
              />
            ))}
          </ul>

          <div className="absolute flex justify-center w-full top-[calc(100%+1.5rem)]">
            <CarouselControl
              type="previous"
              title="Poprzedni"
              handleClick={handlePreviousClick}
            />
            <CarouselControl
              type="next"
              title="Następny"
              handleClick={handleNextClick}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
