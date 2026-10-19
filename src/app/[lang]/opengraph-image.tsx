import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { LANGUAGES, isLanguage } from "@/lib/i18n";
import { metadataLocales } from "@/locales/metadata";

// Rendered once per language at build time.
export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = metadataLocales.pl.ogImageAlt;

const font = (file: string) =>
  readFile(join(process.cwd(), "src/assets/fonts", file));

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = metadataLocales[isLanguage(lang) ? lang : "pl"];

  const [logo, latin500, latinExt500, latin700, latinExt700] =
    await Promise.all([
      readFile(join(process.cwd(), "public/images/logo/logo.svg")),
      font("space-grotesk-latin-500.woff"),
      font("space-grotesk-latin-ext-500.woff"),
      font("space-grotesk-latin-700.woff"),
      font("space-grotesk-latin-ext-700.woff"),
    ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(163,230,53,0.22), transparent 45%), radial-gradient(circle at 10% 90%, rgba(34,211,238,0.16), transparent 40%)",
          color: "#FAFAFA",
          fontFamily: "Space Grotesk",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/svg+xml;base64,${logo.toString("base64")}`}
          width={240}
          height={86}
          alt=""
        />
        <div
          style={{
            marginTop: 48,
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#A3A3A3",
          }}
        >
          Frontend Developer
        </div>
        <div style={{ marginTop: 12, fontSize: 84, fontWeight: 700 }}>
          Błażej Bartoszewski
        </div>
        <div
          style={{ marginTop: 16, fontSize: 40, fontWeight: 500, color: "#A3E635" }}
        >
          {t.ogTagline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: latin500, weight: 500 },
        { name: "Space Grotesk", data: latinExt500, weight: 500 },
        { name: "Space Grotesk", data: latin700, weight: 700 },
        { name: "Space Grotesk", data: latinExt700, weight: 700 },
      ],
    }
  );
}
