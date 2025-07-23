// "use client";

// import { motion } from "framer-motion";
// import { Github, Linkedin, ChevronDown } from "lucide-react";
// import { Meteors } from "@/components/ui/meteors";
// import { useLanguage } from "@/context/language-context";
// import { aboutMeLocales } from "@/locales/about-me";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

// import {
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiRedux,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiHtml5,
//   SiCss3,
//   SiNodedotjs,
//   SiMongodb,
//   SiDocker,
//   SiGit,
//   SiGithub,
//   SiSupabase,
//   SiVite,
// } from "@icons-pack/react-simple-icons";

// const technologies = [
//   {
//     id: 1,
//     name: "JavaScript",
//     icon: <SiJavascript className="text-yellow-400 w-6 h-6" />,
//   },
//   {
//     id: 2,
//     name: "TypeScript",
//     icon: <SiTypescript className="text-blue-500 w-6 h-6" />,
//   },
//   {
//     id: 3,
//     name: "React.js",
//     icon: <SiReact className="text-cyan-400 w-6 h-6" />,
//   },
//   {
//     id: 4,
//     name: "Redux",
//     icon: <SiRedux className="text-purple-500 w-6 h-6" />,
//   },
//   {
//     id: 5,
//     name: "Next.js",
//     icon: <SiNextdotjs className="text-white w-6 h-6" />,
//   },
//   {
//     id: 6,
//     name: "Tailwind CSS",
//     icon: <SiTailwindcss className="text-blue-300 w-6 h-6" />,
//   },
//   { id: 7, name: "Vite", icon: <SiVite className="text-purple-400 w-6 h-6" /> },
//   {
//     id: 8,
//     name: "HTML",
//     icon: <SiHtml5 className="text-orange-500 w-6 h-6" />,
//   },
//   { id: 9, name: "CSS", icon: <SiCss3 className="text-blue-600 w-6 h-6" /> },
//   {
//     id: 10,
//     name: "Node.js",
//     icon: <SiNodedotjs className="text-green-600 w-6 h-6" />,
//   },
//   {
//     id: 11,
//     name: "MongoDB",
//     icon: <SiMongodb className="text-green-400 w-6 h-6" />,
//   },
//   {
//     id: 12,
//     name: "Supabase",
//     icon: <SiSupabase className="text-emerald-400 w-6 h-6" />,
//   },
//   {
//     id: 13,
//     name: "Docker",
//     icon: <SiDocker className="text-blue-400 w-6 h-6" />,
//   },
//   { id: 14, name: "Git", icon: <SiGit className="text-orange-400 w-6 h-6" /> },
//   { id: 15, name: "GitHub", icon: <SiGithub className="text-white w-6 h-6" /> },
// ];

// export default function About() {
//   const { language } = useLanguage();
//   const t = aboutMeLocales[language];

//   return (
//     <section
//       id="about"
//       className="scroll-mt-32 py-20 px-6 max-w-5xl mx-auto text-center relative"
//     >
//         <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
//           <Meteors number={30} className="top-0 left-0 w-full h-full" />
//         </div>

//       <motion.h2
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.3 }}
//         className="text-4xl font-bold text-gray-200"
//       >
//         {t.title}
//       </motion.h2>

//       <TextGenerateEffect
//         key={language}
//         words={t.description || ""}
//         className="mt-4 max-w-3xl mx-auto text-lg text-gray-400"
//         duration={0.8}
//       />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 1 }}
//         viewport={{ once: false, amount: 0.3 }}
//         className="mt-10 flex justify-center"
//       >
//         <InfiniteMovingCards
//           items={technologies}
//           direction="left"
//           speed="slow"
//         />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 1.2 }}
//         viewport={{ once: false, amount: 0.3 }}
//         className="mt-12 flex justify-center flex-wrap gap-4 max-w-2xl mx-auto"
//       >
//         <HoverBorderGradient
//           as="a"
//           href="https://github.com/Blazej90"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center space-x-2 text-white text-lg px-6 py-2"
//         >
//           <Github size={22} />
//           <span>{t.github}</span>
//         </HoverBorderGradient>

//         <HoverBorderGradient
//           as="a"
//           href="https://www.linkedin.com/in/błażej-bartoszewski-36b7162b7"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center space-x-2 text-white text-lg px-6 py-2"
//         >
//           <Linkedin size={22} />
//           <span>{t.linkedin}</span>
//         </HoverBorderGradient>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="mt-10 sm:mt-16 text-gray-400 flex justify-center"
//       >
//         <a href="#projects" aria-label="Scroll to projects">
//           <ChevronDown className="w-6 h-6 animate-bounce" />
//         </a>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
import { useLanguage } from "@/context/language-context";
import { aboutMeLocales } from "@/locales/about-me";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiSupabase,
  SiVite,
} from "@icons-pack/react-simple-icons";

const technologies = [
  {
    id: 1,
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 w-6 h-6" />,
  },
  {
    id: 2,
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 w-6 h-6" />,
  },
  {
    id: 3,
    name: "React.js",
    icon: <SiReact className="text-cyan-400 w-6 h-6" />,
  },
  {
    id: 4,
    name: "Redux",
    icon: <SiRedux className="text-purple-500 w-6 h-6" />,
  },
  {
    id: 5,
    name: "Next.js",
    icon: <SiNextdotjs className="text-white w-6 h-6" />,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-blue-300 w-6 h-6" />,
  },
  { id: 7, name: "Vite", icon: <SiVite className="text-purple-400 w-6 h-6" /> },
  {
    id: 8,
    name: "HTML",
    icon: <SiHtml5 className="text-orange-500 w-6 h-6" />,
  },
  { id: 9, name: "CSS", icon: <SiCss3 className="text-blue-600 w-6 h-6" /> },
  {
    id: 10,
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600 w-6 h-6" />,
  },
  {
    id: 11,
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 w-6 h-6" />,
  },
  {
    id: 12,
    name: "Supabase",
    icon: <SiSupabase className="text-emerald-400 w-6 h-6" />,
  },
  {
    id: 13,
    name: "Docker",
    icon: <SiDocker className="text-blue-400 w-6 h-6" />,
  },
  { id: 14, name: "Git", icon: <SiGit className="text-orange-400 w-6 h-6" /> },
  { id: 15, name: "GitHub", icon: <SiGithub className="text-white w-6 h-6" /> },
];

export default function About() {
  const { language } = useLanguage();
  const t = aboutMeLocales[language];

  return (
    <section
      id="about"
      className="scroll-mt-32 py-20 px-6 text-center relative overflow-hidden"
    >
      {/* Meteory na cały ekran */}
      <div className="absolute inset-0 w-screen h-full -z-10 pointer-events-none">
        <Meteors number={30} className="top-0 left-0 w-full h-full" />
      </div>

      {/* Ograniczenie szerokości dopiero tutaj */}
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-bold text-gray-200"
        >
          {t.title}
        </motion.h2>

        <TextGenerateEffect
          key={language}
          words={t.description || ""}
          className="mt-4 max-w-3xl mx-auto text-lg text-gray-400"
          duration={0.8}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <InfiniteMovingCards
            items={technologies}
            direction="left"
            speed="slow"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-12 flex justify-center flex-wrap gap-4 max-w-2xl mx-auto"
        >
          <HoverBorderGradient
            as="a"
            href="https://github.com/Blazej90"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white text-lg px-6 py-2"
          >
            <Github size={22} />
            <span>{t.github}</span>
          </HoverBorderGradient>

          <HoverBorderGradient
            as="a"
            href="https://www.linkedin.com/in/błażej-bartoszewski-36b7162b7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white text-lg px-6 py-2"
          >
            <Linkedin size={22} />
            <span>{t.linkedin}</span>
          </HoverBorderGradient>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 sm:mt-16 text-gray-400 flex justify-center"
        >
          <a href="#projects" aria-label="Scroll to projects">
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
