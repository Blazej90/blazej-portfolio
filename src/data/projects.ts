export interface Project {
  src: string;
  githubUrl: string;
  liveDemoUrl: string;
  clientUrl?: string;
  title: { pl: string; en: string };
  description: { pl: string; en: string };
}

export const projects: Project[] = [
  {
    src: "/images/projects/task-flow.jpg",
    githubUrl: "https://github.com/Blazej90/taskflow",
    liveDemoUrl: "https://taskflow-two-ebon.vercel.app",
    title: { pl: "TaskFlow", en: "TaskFlow" },
    description: {
      pl: "Aplikacja do zarządzania zadaniami z interfejsem drag & drop. Zbudowana w Angular 21 z Firebase Authentication i Firestore.",
      en: "Task management application with drag & drop interface. Built with Angular 21, Firebase Authentication and Firestore.",
    },
  },
  {
    src: "/images/projects/english-platform.png",
    githubUrl: "https://github.com/Blazej90/english-platform",
    liveDemoUrl: "https://english-platform-eight.vercel.app",
    title: {
      pl: "Platforma do nauki angielskiego",
      en: "English Learning Platform",
    },
    description: {
      pl: "Platforma do umawiania lekcji angielskiego z wideo czatem i integracją z Google Calendar.",
      en: "English lesson booking platform with video chat and calendar integration.",
    },
  },
  {
    src: "/images/projects/learn-react.jpg",
    githubUrl: "https://github.com/Blazej90/lern-react",
    liveDemoUrl: "https://lern-react.vercel.app",
    title: { pl: "Ucz się React.js z AI", en: "Learn React.js with AI" },
    description: {
      pl: "Aplikacja losuje pytania z React.js, pozwala na nagrywanie odpowiedzi głosowej i weryfikację przez AI. Po skończonej odpowiedzi AI ocenia poprawność i daje wskazówki.",
      en: "The app generates random React.js questions, allows voice recording of answers, and verifies them using AI. AI evaluates accuracy and provides feedback.",
    },
  },
  {
    src: "/images/projects/form.jpg",
    githubUrl: "https://github.com/Blazej90/form",
    liveDemoUrl: "https://form-eta-three.vercel.app/",
    title: { pl: "Kreator formularza", en: "Form Creator" },
    description: {
      pl: "Aplikacja do tworzenia dynamicznych formularzy. Użytkownik może samodzielnie konfigurować pola według własnych potrzeb.",
      en: "An application for creating dynamic forms. Users can configure fields according to their own needs.",
    },
  },
  {
    src: "/images/projects/movie.jpg",
    githubUrl: "https://github.com/Blazej90/goit-react-hw-05-movies",
    liveDemoUrl: "https://blazej90.github.io/goit-react-hw-05-movies/",
    title: { pl: "Wyszukiwarka filmów", en: "Movie Search" },
    description: {
      pl: "Aplikacja pozwala na wyszukiwanie filmów po tytule, przeglądanie recenzji i obsady. Pokazuje najpopularniejsze filmy na podstawie TMDB API.",
      en: "An application that allows users to search for movies by title, browse reviews and cast. Displays the most popular movies based on the TMDB API.",
    },
  },
  {
    src: "/images/projects/hangman.jpg",
    githubUrl: "https://github.com/Blazej90/hangman-game/tree/master",
    liveDemoUrl: "https://game-for-boredom.netlify.app",
    title: { pl: "Gra Wisielec", en: "Hangman Game" },
    description: {
      pl: "Klasyczna gra Wisielec w wersji webowej! Użytkownik wybiera poziom trudności i zgaduje litery. Możliwość gry po angielsku z dedykowanymi hasłami.",
      en: "Classic Hangman game in a web version! Users select difficulty levels and guess letters. Option to play in English with dedicated words.",
    },
  },
  {
    src: "/images/projects/picture.jpg",
    githubUrl: "https://github.com/Blazej90/goit-react-hw-03-image-finder",
    liveDemoUrl: "https://blazej90.github.io/goit-react-hw-03-image-finder/",
    title: { pl: "Wyszukiwarka obrazów", en: "Image Search" },
    description: {
      pl: "Aplikacja do wyszukiwania i przeglądania obrazów według słów kluczowych. Wykorzystuje Pixabay API jako backend.",
      en: "An application for searching and browsing images by keywords. Uses the Pixabay API as a backend.",
    },
  },
  {
    src: "/images/projects/taxi.jpg",
    githubUrl: "https://github.com/Blazej90/taxi-test",
    liveDemoUrl: "https://blazej90.github.io/taxi-test/",
    title: { pl: "Taxi Test", en: "Taxi Test" },
    description: {
      pl: "Aplikacja służy do obliczania wartości błędu taksometru podczas jego legalizacji. Użytkownik wprowadza wartości, otrzymuje wynik testu i może zapisać wyniki w localStorage.",
      en: "An application used to calculate the error value of a taximeter during its verification. Users enter values, get test results, and can save data in localStorage.",
    },
  },
  {
    src: "/images/projects/styroapin-calculator.jpg",
    githubUrl: "https://github.com/Blazej90/styroapin-calculator",
    liveDemoUrl: "https://blazej90.github.io/styroapin-calculator/",
    clientUrl:
      "https://remontomaniak.pl/pl/p/Genderka-FASADA-EXTRA-PLUS-styropian-fasadowy-EPS-lambda-0%2C31-10-cm-grafitowy-/2442",
    title: { pl: "Kalkulator styropianu", en: "Styrofoam Calculator" },
    description: {
      pl: "Aplikacja webowa stworzona dla firmy budowlanej. Umożliwia klientom obliczenie zapotrzebowania na styropian. W pełni responsywna i łatwa do osadzenia na stronie Shoper.",
      en: "A web app built for a construction supply company. Allows customers to calculate how much styrofoam they need. Fully responsive and embeddable in a Shoper-based site.",
    },
  },
];
