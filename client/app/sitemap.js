import fs from "fs";
import path from "path";

/**
 * Dynamic XML Sitemap for HunchMind Group
 * Official Next.js App Router dynamic sitemap generation
 * Target URL: https://www.hunchmindintelligence.com/sitemap.xml
 */
export default function sitemap() {
  const baseUrl = "https://www.hunchmindintelligence.com";

  // Helper to retrieve authentic file modification timestamp
  const getFileMtime = (relativeFilePath) => {
    try {
      const fullPath = path.join(process.cwd(), relativeFilePath);
      if (fs.existsSync(fullPath)) {
        return fs.statSync(fullPath).mtime;
      }
    } catch {
      // Fallback
    }
    return new Date();
  };

  return [
    {
      url: baseUrl,
      lastModified: getFileMtime("app/page.js"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products/hmi-nexus`,
      lastModified: getFileMtime("app/products/hmi-nexus/page.js"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/ai-logistics-intelligence`,
      lastModified: getFileMtime("app/solutions/ai-logistics-intelligence/page.js"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/cold-chain-logistics`,
      lastModified: getFileMtime("app/solutions/cold-chain-logistics/page.js"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/supply-chain-visibility-iot`,
      lastModified: getFileMtime("app/solutions/supply-chain-visibility-iot/page.js"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/predictive-freight-routing`,
      lastModified: getFileMtime("app/solutions/predictive-freight-routing/page.js"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/agricultural-supply-chain`,
      lastModified: getFileMtime("app/solutions/agricultural-supply-chain/page.js"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
