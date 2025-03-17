"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { LanguageProvider } from "@/context/language-context";
import Navbar from "@/components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-black text-white">
        <ParallaxProvider>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ParallaxProvider>
      </body>
    </html>
  );
}
