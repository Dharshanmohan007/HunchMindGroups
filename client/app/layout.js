import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#00474F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL("https://www.hunchmindintelligence.com"),
  title: {
    default: "HunchMind Group | Building AI Businesses for a More Efficient World",
    template: "%s | HunchMind Group",
  },
  description:
    "A technology group that creates, invests and scales data-driven businesses across supply chain, agriculture, commerce and beyond.",
  applicationName: "HunchMind Group",
  authors: [{ name: "HunchMind Group", url: "https://www.hunchmindintelligence.com" }],
  generator: "Next.js",
  keywords: [
    "HunchMind Group",
    "HunchMind Intelligence",
    "Applied AI",
    "Agri-Tech AI",
    "Supply Chain Intelligence",
    "Cold Chain Logistics",
    "Commodity Markets",
    "HMI Nexus",
    "Enterprise AI Solutions",
    "Venture Builder",
    "Logistics Optimization",
    "Predictive Routing",
  ],
  creator: "HunchMind Group",
  publisher: "HunchMind Group",
  alternates: {
    canonical: "https://www.hunchmindintelligence.com",
  },
  openGraph: {
    title: "HunchMind Group | Building AI Businesses for a More Efficient World",
    description:
      "A technology group that creates, invests and scales data-driven businesses across supply chain, agriculture, commerce and beyond.",
    url: "https://www.hunchmindintelligence.com",
    siteName: "HunchMind Group",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "HunchMind Group - Building AI Businesses for a More Efficient and Sustainable World",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HunchMind Group | Building AI Businesses for a More Efficient World",
    description:
      "A technology group that creates, invests and scales data-driven businesses across supply chain, agriculture, commerce and beyond.",
    images: ["/images/hero-bg.png"],
    creator: "@hunchmind",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
};

// Schema.org Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.hunchmindintelligence.com/#organization",
  name: "HunchMind Group",
  alternateName: "HunchMind Intelligence",
  url: "https://www.hunchmindintelligence.com",
  logo: "https://www.hunchmindintelligence.com/images/hero-bg.png",
  description:
    "A technology group that creates, invests and scales data-driven businesses across supply chain, agriculture, commerce and beyond.",
  email: "hunchmindintelligence@gmail.com",
  sameAs: [
    "https://www.linkedin.com/company/hunchmind-group",
    "https://twitter.com/hunchmind",
    "https://www.youtube.com/@hunchmind",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hunchmindintelligence@gmail.com",
    availableLanguage: ["English", "Hindi"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.hunchmindintelligence.com/#website",
  url: "https://www.hunchmindintelligence.com",
  name: "HunchMind Group",
  description:
    "Building AI Businesses for a More Efficient and Sustainable World.",
  publisher: {
    "@id": "https://www.hunchmindintelligence.com/#organization",
  },
  inLanguage: "en-US",
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "HunchMind Group Businesses & Platforms",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "HunchMind Intelligence",
      description: "AI & Data Solutions for Business Impact.",
      url: "https://www.hunchmindintelligence.com/#ecosystem",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "HMI Nexus",
      description: "Supply Chain Intelligence for Agri & Perishables.",
      url: "https://www.hunchmindintelligence.com/#ecosystem",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "HunchMind Ventures",
      description: "Incubating & Scaling Next-Gen Businesses.",
      url: "https://www.hunchmindintelligence.com/#ecosystem",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "HunchMind Labs",
      description: "Research & Innovation in Applied AI.",
      url: "https://www.hunchmindintelligence.com/#ecosystem",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA] text-[#102638] antialiased">
        {children}
      </body>
    </html>
  );
}
