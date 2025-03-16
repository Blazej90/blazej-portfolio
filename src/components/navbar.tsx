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

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white px-6 py-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Blazej.dev
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="#projects" className="hover:text-gray-400 transition">
            Projekty
          </Link>
          <Link href="#about" className="hover:text-gray-400 transition">
            O mnie
          </Link>
          <Link href="#contact" className="hover:text-gray-400 transition">
            Kontakt
          </Link>
        </div>

        <a
          href="/cv/CV_Błażej_Bartoszewski.pdf"
          download="CV_Błażej_Bartoszewski.pdf"
          className="hidden md:block cursor-pointer"
        >
          <Button variant="default" className="cursor-pointer">
            Pobierz CV
          </Button>
        </a>

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
              <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col mt-6 space-y-6 items-center w-full">
              <Link
                href="#projects"
                className="hover:text-gray-400 transition text-lg text-center"
              >
                Projekty
              </Link>
              <Link
                href="#about"
                className="hover:text-gray-400 transition text-lg text-center"
              >
                O mnie
              </Link>
              <Link
                href="#contact"
                className="hover:text-gray-400 transition text-lg text-center"
              >
                Kontakt
              </Link>

              <a
                href="/cv/CV_Błażej_Bartoszewski.pdf"
                download="CV_Błażej_Bartoszewski.pdf"
                className="w-full flex justify-center"
              >
                <Button className="mt-4 w-[80%] cursor-pointer">
                  Pobierz CV
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
