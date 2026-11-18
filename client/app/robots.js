/**
 * Robots.txt configuration for HunchMind Group
 * Official Next.js App Router robots generation
 * Target URL: https://www.hunchmindintelligence.com/robots.txt
 */
export default function robots() {
  const baseUrl = "https://www.hunchmindintelligence.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
