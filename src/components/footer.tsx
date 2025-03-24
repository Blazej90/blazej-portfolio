"use client";

import { useLanguage } from "@/context/language-context";
import { footerLocales } from "@/locales/footer";
import { Github } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Footer() {
  const { language } = useLanguage();
  const t = footerLocales[language];

  return (
    <footer className="w-full bg-black border-t border-gray-800 py-10 px-6 text-gray-400 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-6 sm:gap-0">
        <div className="text-center sm:text-left">
          <a
            href="mailto:blazej.developer@gmail.com"
            className="block text-sm text-gray-400 hover:text-white transition"
          >
            blazej.developer@gmail.com
          </a>
          <a
            href="tel:+48784172218"
            className="block mt-1.5 text-sm text-gray-400 hover:text-white transition"
          >
            +48 784 172 218
          </a>
        </div>

        <div className="text-center">
          <HoverBorderGradient
            as="a"
            href="https://github.com/Blazej90/blazej-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm sm:text-base"
          >
            <Github size={18} />
            {t.visitRepo}
          </HoverBorderGradient>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 leading-snug text-sm">
        <p className="block sm:inline">© 2025 Błażej Bartoszewski.</p>
        <p className="block sm:inline sm:ml-2">{t.rights}</p>
      </div>
    </footer>
  );
}
