"use client";

import { Github, Linkedin } from "lucide-react";
import { SiSpotify } from "@icons-pack/react-simple-icons";
import { useLanguage } from "@/context/language-context";
import { footerLocales } from "@/locales/footer";
import LikeButton from "@/components/ui/like-button";

export default function Footer() {
  const { language } = useLanguage();
  const t = footerLocales[language];

  return (
    <footer className="border-t border-border px-6 py-6 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
        <div className="flex items-center justify-center gap-5 sm:col-start-1 sm:row-start-1 sm:justify-self-start">
          <a
            href="https://github.com/Blazej90"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground transition"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/błażej-bartoszewski-36b7162b7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://open.spotify.com/playlist/3O6zWhZhQiHWjF3keH6R2r"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className="hover:text-foreground transition"
          >
            <SiSpotify size={18} />
          </a>
          <a
            href="mailto:blazej.developer@gmail.com"
            className="hover:text-foreground transition"
          >
            blazej.developer@gmail.com
          </a>
        </div>

        <p className="text-xs sm:col-start-2 sm:row-start-1 sm:justify-self-center">
          © {new Date().getFullYear()} Błażej Bartoszewski · {t.rights}
        </p>

        <div className="flex items-center justify-center sm:col-start-3 sm:row-start-1 sm:justify-self-end">
          <LikeButton />
        </div>
      </div>
    </footer>
  );
}
