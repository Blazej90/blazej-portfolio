"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider, type Language } from "@/context/language-context";

export default function Providers({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: Language;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageProvider initialLanguage={initialLanguage}>
        {children}
      </LanguageProvider>
    </NextThemesProvider>
  );
}
