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

        <Button className="hidden md:block" variant="default">
          Pobierz CV
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-black text-white border-0 px-6 w-[250px]"
          >
            <SheetHeader>
              <SheetTitle className="text-xl font-bold text-center">
                Menu
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col mt-6 space-y-6 items-center">
              <Link
                href="#projects"
                className="hover:text-gray-400 transition text-lg"
              >
                Projekty
              </Link>
              <Link
                href="#about"
                className="hover:text-gray-400 transition text-lg"
              >
                O mnie
              </Link>
              <Link
                href="#contact"
                className="hover:text-gray-400 transition text-lg"
              >
                Kontakt
              </Link>

              <Button className="mt-4 w-[80%]" variant="default">
                Pobierz CV
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
