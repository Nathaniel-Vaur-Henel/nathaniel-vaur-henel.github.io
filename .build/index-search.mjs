// Indexe le site généré (./build) avec Pagefind. Lancé par `pnpm build` après `docusaurus build`.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import * as pagefind from "pagefind";

const SITE_DIR = "build";

// Pages de navigation sans contenu propre : repérées par les classes que Docusaurus pose sur <html>.
const SKIPPED_HTML_CLASSES = [
  "plugin-native", // 404
  "blog-list-page",
  "blog-tags-list-page",
  "blog-tags-post-list-page",
  "blog-authors-list-page",
  "blog-authors-posts-page",
  "docs-tags-list-page",
  "docs-tags-doc-list-page",
];
const SKIPPED_FILES = new Set(["blog/archive.html"]);

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "pagefind") yield* htmlFiles(fullPath);
    } else if (entry.name.endsWith(".html")) {
      yield fullPath;
    }
  }
}

function toUrl(relativePath) {
  const url = "/" + relativePath.replace(/\.html$/, "").replace(/(^|\/)index$/, "");
  return url === "/" ? url : url.replace(/\/$/, "");
}

const { index, errors } = await pagefind.createIndex({
  rootSelector: "main",
  excludeSelectors: [
    ".theme-doc-toc-desktop",
    ".theme-doc-toc-mobile",
    ".theme-doc-breadcrumbs",
    ".pagination-nav",
  ],
  forceLanguage: "fr",
});
if (!index) {
  console.error(errors.join("\n"));
  process.exit(1);
}

let indexed = 0;
let skipped = 0;
for await (const file of htmlFiles(SITE_DIR)) {
  const relativePath = path.relative(SITE_DIR, file).split(path.sep).join("/");
  const content = await readFile(file, "utf8");
  const htmlClasses = (content.match(/<html[^>]*\sclass="([^"]*)"/)?.[1] ?? "").split(/\s+/);
  if (SKIPPED_FILES.has(relativePath) || SKIPPED_HTML_CLASSES.some((c) => htmlClasses.includes(c))) {
    skipped++;
    continue;
  }
  const response = await index.addHTMLFile({ url: toUrl(relativePath), content });
  if (response.errors.length > 0) {
    console.error(`${relativePath} : ${response.errors.join(", ")}`);
    process.exit(1);
  }
  indexed++;
}

const written = await index.writeFiles({ outputPath: path.join(SITE_DIR, "pagefind") });
await pagefind.close();
if (written.errors.length > 0) {
  console.error(written.errors.join("\n"));
  process.exit(1);
}
console.log(`Pagefind : ${indexed} pages indexées, ${skipped} ignorées -> ${written.outputPath}`);
