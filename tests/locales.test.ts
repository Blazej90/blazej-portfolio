import { test } from "node:test";
import assert from "node:assert/strict";
import { navbarLocales } from "../src/locales/navbar.ts";
import { footerLocales } from "../src/locales/footer.ts";
import { contactLocales } from "../src/locales/contact.ts";
import { projectsLocales } from "../src/locales/projects.ts";
import { pageLocales } from "../src/locales/page.ts";
import { aboutMeLocales } from "../src/locales/about-me.ts";

const localeGroups = {
  navbar: navbarLocales,
  footer: footerLocales,
  contact: contactLocales,
  projects: projectsLocales,
  page: pageLocales,
  aboutMe: aboutMeLocales,
};

for (const [name, locales] of Object.entries(localeGroups)) {
  test(`locales/${name}: pl and en have the same keys`, () => {
    const plKeys = Object.keys(locales.pl).sort();
    const enKeys = Object.keys(locales.en).sort();
    assert.deepEqual(plKeys, enKeys);
  });

  test(`locales/${name}: no empty translations`, () => {
    for (const lang of ["pl", "en"] as const) {
      for (const [key, value] of Object.entries(locales[lang]) as [
        string,
        unknown,
      ][]) {
        if (typeof value === "string") {
          assert.ok(value.trim().length > 0, `${name}.${key} (${lang})`);
        } else if (Array.isArray(value)) {
          assert.ok(value.length > 0, `${name}.${key} (${lang})`);
        }
      }
    }
  });
}
