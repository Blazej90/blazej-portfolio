"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <Link href="#projects" className="hover:text-gray-400 transition">
            Projekty
          </Link>
          <Link href="#about" className="hover:text-gray-400 transition">
            O mnie
          </Link>
          <Link href="#contact" className="hover:text-gray-400 transition">
            Kontakt
          </Link>

          <Button className="mt-4" variant="default">
            Pobierz CV
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
