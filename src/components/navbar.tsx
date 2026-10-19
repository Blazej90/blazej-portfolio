"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { navbarLocales } from "@/locales/navbar";
import { useLanguage } from "@/context/language-context";
import ThemeToggle from "@/components/theme-toggle";
import Logo from "@/components/logo";
import { languagePath } from "@/lib/i18n";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = navbarLocales[language];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Same order as the sections on the page.
  const links = [
    { href: "#about", label: t.about },
    { href: "#projects", label: t.projects },
    { href: "#contact", label: t.contact },
  ];

  const linkClasses =
    "group relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground";

  const underline = (
    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brand-ink transition-transform duration-300 ease-out group-hover:scale-x-100" />
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-border py-2"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center relative transition-all duration-300">
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label={t.menu} className="text-foreground">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-background text-foreground border-border px-6 w-[260px] flex flex-col items-center"
            >
              <SheetHeader className="w-full flex flex-col items-center">
                <SheetTitle className="text-xl font-bold">{t.menu}</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col mt-6 space-y-6 items-center w-full">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${linkClasses} text-base`}
                  >
                    {link.label}
                    {underline}
                  </Link>
                ))}

                <Button
                  asChild
                  className="bg-brand text-brand-foreground hover:bg-brand-hover"
                >
                  <a
                    href="/cv/CV_Błażej_Bartoszewski.pdf"
                    download="CV_Błażej_Bartoszewski.pdf"
                  >
                    {t.downloadCV}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <Link href={languagePath(language)} className="flex items-center space-x-2">
            <Logo className="w-auto h-7" />
            <span className="sr-only">Błażej Bartoszewski</span>
          </Link>
        </div>

        <div className="lg:hidden flex items-center space-x-3">
          <ThemeToggle />
          <span className="text-xs font-medium text-muted-foreground">PL</span>
          <Switch
            checked={language === "en"}
            onCheckedChange={toggleLanguage}
          />
          <span className="text-xs font-medium text-muted-foreground">EN</span>
        </div>

        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClasses}>
              {link.label}
              {underline}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4 ml-auto">
          <ThemeToggle />

          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-muted-foreground">
              PL
            </span>
            <Switch
              checked={language === "en"}
              onCheckedChange={toggleLanguage}
            />
            <span className="text-xs font-medium text-muted-foreground">
              EN
            </span>
          </div>

          <Button
            asChild
            size="sm"
            className="bg-brand text-brand-foreground hover:bg-brand-hover"
          >
            <a
              href="/cv/CV_Błażej_Bartoszewski.pdf"
              download="CV_Błażej_Bartoszewski.pdf"
            >
              {t.downloadCV}
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
