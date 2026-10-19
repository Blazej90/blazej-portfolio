import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import { LANGUAGES, isLanguage, languagePath } from "@/lib/i18n";
import { metadataLocales } from "@/locales/metadata";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
});

// Only /pl and /en exist — both prerendered at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const language = isLanguage(lang) ? lang : "pl";
  const t = metadataLocales[language];

  return {
    metadataBase: new URL("https://blazej-portfolio-sand.vercel.app"),
    title: {
      default: t.title,
      template: "%s | Błażej Bartoszewski",
    },
    description: t.description,
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
    alternates: {
      canonical: languagePath(language),
      languages: {
        pl: languagePath("pl"),
        en: languagePath("en"),
        "x-default": languagePath("pl"),
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: languagePath(language),
      locale: t.ogLocale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-background text-foreground font-sans">
        <Providers language={lang}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
