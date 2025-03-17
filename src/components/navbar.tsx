"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
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

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = navbarLocales[language];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white px-6 py-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Blazej.dev
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="#projects" className="hover:text-gray-400 transition">
            {t.projects}
          </Link>
          <Link href="#about" className="hover:text-gray-400 transition">
            {t.about}
          </Link>
          <Link href="#contact" className="hover:text-gray-400 transition">
            {t.contact}
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/cv/CV_Błażej_Bartoszewski.pdf"
            download="CV_Błażej_Bartoszewski.pdf"
            className="cursor-pointer"
          >
            <Button variant="default" className="cursor-pointer">
              {t.downloadCV}
            </Button>
          </a>

          <div className="flex items-center space-x-2">
            <span className="text-sm">PL</span>
            <Switch
              checked={language === "en"}
              onCheckedChange={toggleLanguage}
            />
            <span className="text-sm">EN</span>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden">
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

              <a
                href="/cv/CV_Błażej_Bartoszewski.pdf"
                download="CV_Błażej_Bartoszewski.pdf"
                className="w-full flex justify-center"
              >
                <Button className="mt-4 w-[80%] cursor-pointer">
                  {t.downloadCV}
                </Button>
              </a>

              <div className="flex items-center space-x-2 mt-4">
                <span className="text-sm">PL</span>
                <Switch
                  checked={language === "en"}
                  onCheckedChange={toggleLanguage}
                />
                <span className="text-sm">EN</span>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
