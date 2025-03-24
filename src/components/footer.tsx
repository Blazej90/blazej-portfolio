"use client";

import { Github } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { footerLocales } from "@/locales/footer";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Footer() {
  const { language } = useLanguage();
  const t = footerLocales[language];

  return (
    <footer className="bg-[#1f1f1f] text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <p className="text-sm">{t.rights}</p>
          <p className="text-sm">
            {t.contact}:{" "}
            <a
              href="mailto:kontakt@blazejbartoszewski.pl"
              className="hover:text-white underline underline-offset-4 transition"
            >
              blazej.developer@gmail.com
            </a>{" "}
            |{" "}
            <a
              href="tel:+48500200300"
              className="hover:text-white underline underline-offset-4 transition"
            >
              +48 784 172 218
            </a>
          </p>
        </div>

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
    </footer>
  );
}
