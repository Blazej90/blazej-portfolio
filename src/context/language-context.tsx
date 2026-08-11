"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "pl" | "en";

const LANGUAGE_COOKIE = "lang";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
  initialLanguage = "pl",
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  // Keep <html lang> in sync after client-side toggles.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    const next: Language = language === "pl" ? "en" : "pl";
    document.cookie = `${LANGUAGE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    setLanguage(next);
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
