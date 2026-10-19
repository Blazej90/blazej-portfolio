export interface ExperienceItem {
  role: string;
  company: string;
  url?: string;
  period: string;
  product?: string;
  points: string[];
  stack?: string[];
}

const startupStack = [
  "TypeScript",
  "NestJS",
  "React 19",
  "PostgreSQL",
  "Drizzle ORM",
  "Redis/BullMQ",
  "Claude API & Agent SDK",
  "Tailwind/shadcn",
  "Docker",
  "GitHub Actions",
  "Vitest",
  "Playwright",
];

export const aboutMeLocales = {
  pl: {
    title: "O mnie",
    photoAlt: "Błażej Bartoszewski",
    description:
      "Tworzę nowoczesne, intuicyjne aplikacje webowe jako Frontend Developer z elementami Backend. Obecnie pracuję jako Developer w startupie objętym NDA, gdzie buduję funkcje full-stack i integracje, a równolegle rozwijam platformę CodeWorlds. Wcześniej tworzyłem aplikację Justfitup. Moje umiejętności techniczne kształtowałem na kursach programistycznych oraz testowania manualnego. Eksploruję nowe technologie i uwielbiam rozwiązywać złożone problemy. W wolnym czasie pasjonuję się motocyklami typu „chopper”, jazdą na rowerze gravelowym, siatkówką oraz odkrywaniem kuchni świata.",
    experienceTitle: "Doświadczenie",
    experience: [
      {
        role: "Developer",
        company: "Startup (NDA)",
        period: "05/2026 – obecnie",
        points: [
          "Integracje z Twilio, Notion, Zoom i MS Teams oparte na OAuth 2.0, webhookach, szyfrowanych tokenach i synchronizacji danych z PostgreSQL.",
          "Agenci AI oparci na Claude z tool callingiem do obsługi SMS-ów, notatek i spotkań, z osobnymi politykami uprawnień narzędzi dla każdego agenta.",
          "Funkcje full-stack w NestJS i React 19 — wyszukiwanie rozmyte w notatkach, widoki konwersacji SMS i globalne wyszukiwanie — oraz automatyzacja lokalnego środowiska z tunelowaniem i samonaprawiającymi się webhookami.",
        ],
        stack: startupStack,
      },
      {
        role: "Developer (part-time)",
        company: "CodeWorlds",
        url: "https://www.codeworlds.com/",
        period: "2021 – obecnie",
        product: "Grywalizowana platforma do nauki programowania",
        points: [
          "Zbudowałem responsywny navbar i sekcję „O nas” działającej platformy, a na bieżąco dostarczam usprawnienia UI/UX, nowe funkcje i poprawki produkcyjne na podstawie opinii użytkowników i zespołu.",
        ],
      },
      {
        role: "Developer",
        company: "Justfitup",
        period: "2018 – 2021",
        product: "Platforma dla trenerów, dietetyków i ich klientów",
        points: [
          "Zbudowałem navbar, dashboardy oparte na danych i responsywne landing page’e platformy fitness i wellness oraz wprowadzałem bieżące usprawnienia UI w działającej aplikacji.",
        ],
      },
    ] as ExperienceItem[],
    visitWebsite: "Odwiedź stronę",
    technologiesTitle: "Technologie",
    technologyGroups: {
      frontend: "Frontend",
      backend: "Backend i bazy danych",
      tools: "Narzędzia",
    },
  },
  en: {
    title: "About Me",
    photoAlt: "Błażej Bartoszewski",
    description:
      "I build modern, intuitive web applications as a Frontend Developer with Backend elements. I currently work as a Developer at a startup under NDA, building full-stack features and integrations, while also developing the CodeWorlds platform. Before that, I worked on the Justfitup app. I have shaped my technical skills through programming and manual testing courses. I love exploring new technologies and solving complex problems. In my free time, I am passionate about chopper motorcycles, gravel biking, volleyball, and discovering world cuisines.",
    experienceTitle: "Experience",
    experience: [
      {
        role: "Developer",
        company: "Confidential Startup (NDA)",
        period: "05/2026 – present",
        points: [
          "Built integrations with Twilio, Notion, Zoom and MS Teams using OAuth 2.0, webhooks, encrypted tokens and PostgreSQL data synchronization.",
          "Developed Claude-powered AI agents with tool calling for SMS, notes and meeting access, including per-agent tool permission policies.",
          "Built full-stack features in NestJS and React 19, including fuzzy-search notes, SMS conversation views and global search, and automated the local development environment with tunneling and self-healing webhooks.",
        ],
        stack: startupStack,
      },
      {
        role: "Developer (part-time)",
        company: "CodeWorlds",
        url: "https://www.codeworlds.com/",
        period: "2021 – present",
        product: "Gamified platform for learning programming",
        points: [
          "Built the responsive navbar and the About Us section of a live gamified learning platform, and deliver UI/UX improvements, new features and production fixes based on user and team feedback.",
        ],
      },
      {
        role: "Developer",
        company: "Justfitup",
        period: "2018 – 2021",
        product: "Platform for trainers, nutritionists and their clients",
        points: [
          "Built the navbar, data-driven dashboards and responsive landing pages for a fitness and wellness platform, and delivered ongoing UI improvements across the live application.",
        ],
      },
    ] as ExperienceItem[],
    visitWebsite: "Visit website",
    technologiesTitle: "Technologies",
    technologyGroups: {
      frontend: "Frontend",
      backend: "Backend & databases",
      tools: "Tools",
    },
  },
};
