"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { navbarLocales } from "@/locales/navbar";
import { useLanguage } from "@/context/language-context";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

type NavbarProps = {
  scrolled?: boolean;
};

const Navbar = ({ scrolled }: NavbarProps) => {
  const { language, toggleLanguage } = useLanguage();
  const t = navbarLocales[language];

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-lg text-white px-6 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 py-3" : "bg-black/40 py-3"
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center relative transition-all duration-300">
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-black text-white border-0 px-6 w-[250px] flex flex-col items-center"
            >
              <SheetHeader className="w-full flex flex-col items-center">
                <SheetTitle className="text-xl font-bold">{t.menu}</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col mt-6 space-y-6 items-center w-full">
                <Link
                  href="/"
                  className="hover:text-gray-400 transition text-lg text-center"
                >
                  Home
                </Link>
                <Link
                  href="#projects"
                  className="hover:text-gray-400 transition text-lg text-center"
                >
                  {t.projects}
                </Link>
                <Link
                  href="#about"
                  className="hover:text-gray-400 transition text-lg text-center"
                >
                  {t.about}
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-gray-400 transition text-lg text-center"
                >
                  {t.contact}
                </Link>

                <HoverBorderGradient
                  as="a"
                  href="/cv/CV_Błażej_Bartoszewski.pdf"
                  download="CV_Błażej_Bartoszewski.pdf"
                  className="relative overflow-hidden px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-md group"
                >
                  <span className="relative z-10">{t.downloadCV}</span>
                  <span className="absolute inset-0 bg-black/30 z-0 origin-right scale-x-100 group-hover:scale-x-0 transition-transform duration-700 ease-out" />
                </HoverBorderGradient>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo/logo.png"
              alt="Błażej Bartoszewski Logo"
              className="w-auto h-16 object-contain transition-all duration-300"
            />
            <span className="sr-only">Błażej Bartoszewski</span>
          </Link>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <span className="text-sm">PL</span>
          <Switch
            checked={language === "en"}
            onCheckedChange={toggleLanguage}
          />
          <span className="text-sm">EN</span>
        </div>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <Link
            href="/"
            className="hover:text-gray-400 transition text-lg font-medium"
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="hover:text-gray-400 transition text-lg font-medium"
          >
            {t.projects}
          </Link>
          <Link
            href="#about"
            className="hover:text-gray-400 transition text-lg font-medium"
          >
            {t.about}
          </Link>
          <Link
            href="#contact"
            className="hover:text-gray-400 transition text-lg font-medium"
          >
            {t.contact}
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <div className="flex items-center space-x-2">
            <span className="text-sm">PL</span>
            <Switch
              checked={language === "en"}
              onCheckedChange={toggleLanguage}
            />
            <span className="text-sm">EN</span>
          </div>

          <HoverBorderGradient
            as="a"
            href="/cv/CV_Błażej_Bartoszewski.pdf"
            download="CV_Błażej_Bartoszewski.pdf"
            className="relative overflow-hidden px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-md group"
          >
            <span className="relative z-10">{t.downloadCV}</span>
            <span className="absolute inset-0 bg-black/30 z-0 origin-right scale-x-100 group-hover:scale-x-0 transition-transform duration-700 ease-out" />
          </HoverBorderGradient>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
