"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { LanguageProvider, type Language } from "@/context/language-context";

export default function Providers({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: Language;
}) {
  return (
    <ParallaxProvider>
      <LanguageProvider initialLanguage={initialLanguage}>
        {children}
      </LanguageProvider>
    </ParallaxProvider>
  );
}
