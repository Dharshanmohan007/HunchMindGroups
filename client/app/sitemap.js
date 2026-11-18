import fs from "fs";
import path from "path";

/**
 * Dynamic XML Sitemap for HunchMind Group
 * Official Next.js App Router sitemap generation
 * Target URL: https://www.hunchmindintelligence.com/sitemap.xml
 */
export default function sitemap() {
  const baseUrl = "https://www.hunchmindintelligence.com";

  // Discover actual filesystem modification date of page.js to provide authentic lastModified
  let lastModifiedDate = new Date();
  try {
    const pagePath = path.join(process.cwd(), "app", "page.js");
    if (fs.existsSync(pagePath)) {
      lastModifiedDate = fs.statSync(pagePath).mtime;
    }
  } catch {
    // Fall back to current date if filesystem stat is restricted
    lastModifiedDate = new Date();
  }

  // Canonical public routes for HunchMind Group
  // (API endpoints like /api/contact are private and deliberately excluded)
  return [
    {
      url: baseUrl,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
