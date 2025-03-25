"use client";

import { Github, Linkedin, FileText } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { footerLocales } from "@/locales/footer";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import LikeButton from "@/components/ui/like-button";

export default function Footer() {
  const { language } = useLanguage();
  const t = footerLocales[language];

  return (
    <footer className="bg-[#0f0f0f] border-t border-gray-800 px-4 py-10 sm:py-12 text-gray-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
        <div className="flex flex-col items-center sm:items-start space-y-3 text-center sm:text-left">
          <a
            href="mailto:blazej.developer@gmail.com"
            className="block text-sm text-gray-400 hover:text-white transition"
          >
            blazej.developer@gmail.com
          </a>
          <a
            href="tel:+48784172218"
            className="block text-sm text-gray-400 hover:text-white transition"
          >
            +48 784 172 218
          </a>

          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Blazej90"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/błażej-bartoszewski-36b7162b7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hidden md:block"></div>

        <div className="flex flex-col items-center sm:items-end space-y-3 text-center sm:text-right">
          <HoverBorderGradient
            as="a"
            href="/cv/CV_Błażej_Bartoszewski.pdf"
            download="CV_Błażej_Bartoszewski.pdf"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base min-w-[220px]"
          >
            <FileText size={18} />
            {t.downloadCV}
          </HoverBorderGradient>

          <HoverBorderGradient
            as="a"
            href="https://github.com/Blazej90/blazej-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base min-w-[220px]"
          >
            <Github size={18} />
            {t.visitRepo}
          </HoverBorderGradient>

          <LikeButton />
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 space-y-1">
        <p>© 2025 Błażej Bartoszewski.</p>
        <p>{t.rights}</p>
      </div>
    </footer>
  );
}
