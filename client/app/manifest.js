/**
 * Web App Manifest for HunchMind Group
 * Official Next.js App Router manifest metadata
 */
export default function manifest() {
  return {
    name: "HunchMind Group | Building AI Businesses",
    short_name: "HunchMind",
    description:
      "A technology group that creates, invests and scales data-driven businesses across supply chain, agriculture, commerce and beyond.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#00474F",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
