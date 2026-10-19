export type Language = "pl" | "en";

export const LANGUAGES: Language[] = ["pl", "en"];

export const LANGUAGE_COOKIE = "lang";

// Polish lives at the root, English under /en (see src/proxy.ts).
export const languagePath = (language: Language) =>
  language === "pl" ? "/" : "/en";

export const isLanguage = (value: string): value is Language =>
  (LANGUAGES as string[]).includes(value);
