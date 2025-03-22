"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Github, ExternalLink } from "lucide-react";
import { useState, useRef, useId, useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import { projectsLocales } from "@/locales/projects";

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
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
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
        className="flex flex-1 flex-col items-center justify-end relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[90vw] sm:w-[70vmin] h-[90vw] sm:h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x)/30), calc(var(--y)/30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{ opacity: current === index ? 1 : 0.5 }}
            alt={title}
            src={src}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
          <article className="absolute bottom-0 left-0 w-full bg-black/70 mt-4 p-6 z-10">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-2">
              {title}
            </h2>
            <p className="text-sm text-gray-300 mb-4 max-w-[90%] mx-auto">
              {description}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition text-sm"
              >
                <Github size={16} /> <span>GitHub</span>
              </a>
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-600 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition text-sm"
              >
                <ExternalLink size={16} /> <span>Live Demo</span>
              </a>
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

  const slides = [
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
  ];

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto text-center relative"
    >
      <h2 className="text-4xl font-bold text-gray-200 mb-10">{t.title}</h2>

      <div
        className="relative w-[90vw] sm:w-[70vmin] h-[90vw] sm:h-[70vmin] mx-auto"
        aria-labelledby={`carousel-heading-${id}`}
      >
        <ul
          className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
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

        <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
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
    </section>
  );
}
