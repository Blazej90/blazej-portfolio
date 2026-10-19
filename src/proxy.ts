import { NextResponse, type NextRequest } from "next/server";
import { LANGUAGE_COOKIE } from "@/lib/i18n";

// Both language versions are prerendered as static pages under /[lang].
// Polish is served at "/" (rewritten to /pl), English at "/en".
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Canonical Polish URL is "/" — avoid duplicate content under /pl.
  if (url.pathname === "/pl") {
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }

  if (request.cookies.get(LANGUAGE_COOKIE)?.value === "en") {
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  url.pathname = "/pl";
  return NextResponse.rewrite(url);
}

export const config = {
  // /pl/opengraph-image must stay reachable, so only the page paths match.
  matcher: ["/", "/pl"],
};
