import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-10YEK3NX19";

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
    default: "HunchMind Intelligence | Enterprise AI, Data & Logistics Solutions",
    template: "%s | HunchMind Intelligence",
  },
  description:
    "HunchMind Intelligence delivers applied enterprise AI decision models, data analytics, and supply chain logistics solutions under parent entity HunchMind Group.",
  applicationName: "HunchMind Intelligence",
  authors: [{ name: "HunchMind Intelligence", url: "https://www.hunchmindintelligence.com" }],
  generator: "Next.js",
  keywords: [
    "HunchMind Intelligence",
    "HunchMind",
    "HunchMind Group",
    "HunchMind Intelligence India",
    "Applied AI",
    "Enterprise AI Solutions",
    "Supply Chain Intelligence",
    "HMI Nexus",
    "Cold Chain Logistics",
    "Predictive Freight Routing",
    "Agricultural Supply Chain Technology",
    "Logistics Optimization Software",
  ],
  creator: "HunchMind Intelligence",
  publisher: "HunchMind Intelligence",
  alternates: {
    canonical: "https://www.hunchmindintelligence.com",
  },
  openGraph: {
    title: "HunchMind Intelligence | Enterprise AI, Data & Logistics Solutions",
    description:
      "HunchMind Intelligence delivers applied enterprise AI decision models, data analytics, and supply chain logistics solutions under parent entity HunchMind Group.",
    url: "https://www.hunchmindintelligence.com",
    siteName: "HunchMind Intelligence",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "HunchMind Intelligence - Enterprise AI, Data & Logistics Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HunchMind Intelligence | Enterprise AI, Data & Logistics Solutions",
    description:
      "HunchMind Intelligence delivers applied enterprise AI decision models, data analytics, and supply chain logistics solutions under parent entity HunchMind Group.",
    images: ["/images/hero-bg.png"],
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
  name: "HunchMind Intelligence",
  alternateName: "HunchMind",
  url: "https://www.hunchmindintelligence.com",
  logo: "https://www.hunchmindintelligence.com/images/hero-bg.png",
  description:
    "HunchMind Intelligence is an enterprise AI, data decision, and supply chain technology company delivering predictive logistics, cold-chain telemetry, and commercial optimization.",
  email: "hunchmind.contact@gmail.com",
  parentOrganization: {
    "@type": "Organization",
    "@id": "https://www.hunchmindintelligence.com/#parent-organization",
    name: "HunchMind Group",
    url: "https://www.hunchmindintelligence.com",
    description:
      "Parent technology group creating, investing in, and scaling data-driven businesses across supply chain, agriculture, and commerce.",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hunchmind.contact@gmail.com",
    availableLanguage: ["English", "Hindi"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.hunchmindintelligence.com/#website",
  url: "https://www.hunchmindintelligence.com/",
  name: "HunchMind Intelligence",
  alternateName: ["HunchMind", "HunchMind Group"],
  description:
    "Official website of HunchMind Intelligence – Enterprise AI, Data & Logistics Solutions.",
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
      description: "Enterprise AI & Data Solutions for Real-World Impact.",
      url: "https://www.hunchmindintelligence.com/about",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "HMI Nexus",
      description: "Supply Chain & Logistics Intelligence Platform for Perishables and Freight.",
      url: "https://www.hunchmindintelligence.com/products/hmi-nexus",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "HunchMind Ventures",
      description: "Incubating & Scaling Next-Gen Enterprise Tech Businesses.",
      url: "https://www.hunchmindintelligence.com/#ecosystem",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "HunchMind Labs",
      description: "Research & Applied Innovation in Machine Learning and Optimization.",
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
        
         {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
