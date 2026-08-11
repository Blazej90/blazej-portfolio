import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { projects } from "../src/data/projects.ts";

test("projects: every entry has valid urls and image", () => {
  for (const project of projects) {
    assert.match(
      project.githubUrl,
      /^https:\/\//,
      `${project.src}: githubUrl must be https`
    );
    assert.match(
      project.liveDemoUrl,
      /^https:\/\//,
      `${project.src}: liveDemoUrl must be https`
    );
    if (project.clientUrl) {
      assert.match(
        project.clientUrl,
        /^https:\/\//,
        `${project.src}: clientUrl must be https`
      );
    }

    const imagePath = join(process.cwd(), "public", project.src);
    assert.ok(
      existsSync(imagePath),
      `${project.src}: image file missing in public/`
    );
  }
});

test("projects: image paths are unique", () => {
  const srcs = projects.map((p) => p.src);
  assert.equal(new Set(srcs).size, srcs.length);
});

test("projects: pl/en title and description are filled", () => {
  for (const project of projects) {
    for (const lang of ["pl", "en"] as const) {
      assert.ok(
        project.title[lang].trim().length > 0,
        `${project.src}: missing ${lang} title`
      );
      assert.ok(
        project.description[lang].trim().length > 0,
        `${project.src}: missing ${lang} description`
      );
    }
  }
});
