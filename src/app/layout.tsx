import type { Metadata } from "next";
import { cookies } from "next/headers";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import type { Language } from "@/context/language-context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Błażej Bartoszewski — Frontend Developer",
    template: "%s | Błażej Bartoszewski",
  },
  description:
    "Specjalizuję się w tworzeniu nowoczesnych, wydajnych i responsywnych aplikacji webowych. Moje projekty łączą estetykę z funkcjonalnością.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Portfolio",
    "Błażej Bartoszewski",
  ],
  authors: [{ name: "Błażej Bartoszewski" }],
  creator: "Błażej Bartoszewski",
  openGraph: {
    title: "Błażej Bartoszewski — Frontend Developer",
    description:
      "Specjalizuję się w tworzeniu nowoczesnych, wydajnych i responsywnych aplikacji webowych. Moje projekty łączą estetykę z funkcjonalnością.",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const language: Language =
    cookieStore.get("lang")?.value === "en" ? "en" : "pl";

  return (
    <html lang={language}>
      <body className="bg-black text-white">
        <Providers initialLanguage={language}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
