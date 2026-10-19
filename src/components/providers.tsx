"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider, type Language } from "@/context/language-context";

export default function Providers({
  children,
  language,
}: {
  children: React.ReactNode;
  language: Language;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {/* Respects the OS "reduce motion" setting for every framer-motion animation. */}
      <MotionConfig reducedMotion="user">
        <LanguageProvider language={language}>{children}</LanguageProvider>
      </MotionConfig>
    </NextThemesProvider>
  );
}
