"use client";

import { createContext, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { LANGUAGE_COOKIE, languagePath, type Language } from "@/lib/i18n";

export type { Language };

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
  language,
}: {
  children: ReactNode;
  language: Language;
}) => {
  const router = useRouter();

  const toggleLanguage = () => {
    const next: Language = language === "pl" ? "en" : "pl";
    // The cookie must be set before navigating, otherwise the proxy would
    // redirect "/" back to "/en" for users who previously picked English.
    document.cookie = `${LANGUAGE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(languagePath(next), { scroll: false });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
