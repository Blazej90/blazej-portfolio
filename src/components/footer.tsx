"use client";

import { Github, Linkedin, FileText } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { footerLocales } from "@/locales/footer";
import LikeButton from "@/components/ui/like-button";

export default function Footer() {
  const { language } = useLanguage();
  const t = footerLocales[language];

  return (
    <footer className="bg-card border-t border-border px-4 py-10 sm:py-12 text-muted-foreground overflow-x-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
          <a
            href="mailto:blazej.developer@gmail.com"
            className="block text-sm text-muted-foreground hover:text-foreground transition"
          >
            blazej.developer@gmail.com
          </a>
          <a
            href="tel:+48784172218"
            className="block text-sm text-muted-foreground hover:text-foreground transition"
          >
            +48 784 172 218
          </a>

          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Blazej90"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/błażej-bartoszewski-36b7162b7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-3">
          <a
            href="/cv/CV_Błażej_Bartoszewski.pdf"
            download="CV_Błażej_Bartoszewski.pdf"
            className="inline-flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition text-sm"
          >
            <FileText size={18} />
            {t.downloadCV}
          </a>

          <a
            href="https://github.com/Blazej90/blazej-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition text-sm"
          >
            <Github size={18} />
            {t.visitRepo}
          </a>

          <div className="pt-2">
            <LikeButton />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-0 text-center text-sm text-muted-foreground space-y-1">
        <p>© {new Date().getFullYear()} Błażej Bartoszewski.</p>
        <p>{t.rights}</p>
      </div>
    </footer>
  );
}
