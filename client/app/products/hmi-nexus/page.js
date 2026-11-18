import SolutionPageLayout from "../../../components/solutions/SolutionPageLayout";

export const metadata = {
  title: "HMI Nexus Platform | Supply Chain Intelligence for Agri & Logistics",
  description:
    "Explore HMI Nexus, the flagship logistics intelligence platform by HunchMind. Sensor IoT telemetry, predictive freight routing, and cold-chain analytics across India.",
  alternates: {
    canonical: "https://www.hunchmindintelligence.com/products/hmi-nexus",
  },
  openGraph: {
    title: "HMI Nexus Platform | Supply Chain Intelligence for Agri & Logistics",
    description:
      "Explore HMI Nexus, the flagship logistics intelligence platform by HunchMind. Sensor IoT telemetry, predictive freight routing, and cold-chain analytics across India.",
    url: "https://www.hunchmindintelligence.com/products/hmi-nexus",
    siteName: "HunchMind Group",
    images: [
      {
        url: "/images/nexus-logistics.jpg",
        width: 1200,
        height: 630,
        alt: "HMI Nexus - The Enterprise Operating System for Intelligent Logistics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HMI Nexus Platform | HunchMind Logistics Intelligence",
    description:
      "Enterprise operating system connecting real-time cold-chain telemetry, predictive freight routing, and farmgate mandi intelligence.",
    images: ["/images/nexus-logistics.jpg"],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "HMI Nexus Platform",
  image: "https://www.hunchmindintelligence.com/images/nexus-logistics.jpg",
  description:
    "Flagship supply chain intelligence and logistics operating system by HunchMind Group. Combines IoT cold-chain telemetry, predictive multimodal route planning, and mandi market intelligence.",
  brand: {
    "@type": "Brand",
    name: "HunchMind Intelligence",
  },
  manufacturer: {
    "@type": "Organization",
    name: "HunchMind Group",
    url: "https://www.hunchmindintelligence.com",
  },
  url: "https://www.hunchmindintelligence.com/products/hmi-nexus",
  category: "Enterprise Logistics Software / Supply Chain Technology",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is HMI Nexus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HMI Nexus is the flagship digital logistics and supply chain operating system created by HunchMind Group. It bridges the physical and digital worlds by integrating real-time IoT sensor telemetry, cold-chain temperature management, multimodal freight route optimization, and agricultural mandi price discovery in a single enterprise platform.",
      },
    },
    {
      "@type": "Question",
      name: "How does HMI Nexus help commercial logistics and retail enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HMI Nexus delivers verifiable economic value: up to a 24% reduction in perishable transit spoilage, 14–18% reduction in empty truck deadhead miles, 92%+ reliable delivery ETAs, and seamless digital quality reconciliation between rural suppliers and retail distribution centers.",
      },
    },
    {
      "@type": "Question",
      name: "How is HMI Nexus deployed within an enterprise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HMI Nexus is available as a cloud-hosted software platform with open REST APIs, hardware-agnostic IoT telematics integration, and dedicated enterprise connectors for SAP, Oracle, and custom WMS systems. Full operational deployment typically takes less than 3 weeks.",
      },
    },
  ],
};

export default function HmiNexusProductPage() {
  const breadcrumbs = [
    { label: "Products", href: "/#ecosystem" },
    { label: "HMI Nexus Platform" },
  ];

  const heroMetrics = [
    { value: "Flagship", label: "Group Platform" },
    { value: "24%", label: "Transit Spoilage Cut" },
    { value: "50+", label: "Enterprise Partners" },
    { value: "Pan-India", label: "Deployment Ready" },
  ];

  const problemCards = [
    {
      title: "Disconnected Point Solutions",
      desc: "Logistics heads struggle with separate tools for GPS tracking, temperature logging, route planning, and billing, resulting in fragmented data and high overhead.",
      stat: "4-6 different disconnected vendor portals",
    },
    {
      title: "Lack of Domain Specialization",
      desc: "Generic logistics software fails to handle the biological realities of perishables, rural mandi price dynamics, or Indian highway commercial restrictions.",
      stat: "High failure rate for generic Western TMS in India",
    },
    {
      title: "Delayed Operational Response",
      desc: "By the time management learns of a refrigeration breakdown or prolonged border halt, goods have spoiled and contractual delivery SLAs are breached.",
      stat: "Hours of preventable operational lag",
    },
  ];

  const capabilities = [
    {
      icon: "thermometer",
      title: "Cold-Chain Integrity Module",
      desc: "Real-time temperature and humidity tracking with predictive spoilage alerts that safeguard fresh produce, dairy, and pharmaceuticals from farm to retail store.",
      points: [
        "Continuous multi-zone sensor logging",
        "Sub-2-minute thermal breach alerts",
        "Dynamic shelf-life degradation tracking",
      ],
    },
    {
      icon: "route",
      title: "Predictive Multimodal Routing",
      desc: "Automates freight routing across highway road networks and dedicated rail corridors, optimizing commercial truck loading and eliminating deadhead miles.",
      points: [
        "Commercial vehicle clearance routing",
        "Road-rail intermodal coordination",
        "Automated backhaul load matching",
      ],
    },
    {
      icon: "radio",
      title: "Universal IoT Control Tower",
      desc: "Hardware-agnostic telematics aggregation streaming GPS, FASTag toll crossings, fuel levels, and door-opening sensors onto a single interactive pane of glass.",
      points: [
        "80+ GPS vendor API connectors",
        "FASTag toll gate crossing sync",
        "Exception-first operational dashboard",
      ],
    },
    {
      icon: "cpu",
      title: "Dynamic Farmgate Intelligence",
      desc: "Algorithmic mandi spot-price discovery and crop arrival forecasting that links rural agricultural cooperatives directly with supermarket supply chains.",
      points: [
        "Multi-mandi benchmark price discovery",
        "Direct hypermarket procurement matching",
        "Pack-house pre-cooling verification",
      ],
    },
    {
      icon: "repeat",
      title: "Multi-Enterprise Data Sync",
      desc: "Facilitates seamless, encrypted collaboration between brand owners, 3PL transport contractors, distribution center managers, and retail stores.",
      points: [
        "Encrypted live customer tracking links",
        "Role-based multi-tier enterprise views",
        "Electronic proof of delivery (e-POD)",
      ],
    },
    {
      icon: "shield",
      title: "Enterprise ERP & WMS Connectors",
      desc: "Pre-built integration adapters for SAP, Oracle, and legacy transport databases, allowing zero-disruption rollout on top of your existing IT infrastructure.",
      points: [
        "Enterprise REST APIs and webhooks",
        "Automated consignment manifest sync",
        "Audit-ready compliance logging",
      ],
    },
  ];

  const impactMetrics = [
    {
      value: "Up to 24%",
      label: "Spoilage Reduction",
      desc: "Preventing perishables from passing critical thermal breakdown thresholds.",
    },
    {
      value: "14-18%",
      label: "Fewer Empty Miles",
      desc: "Commercial return-load matching cutting unladen fuel and transit expenses.",
    },
    {
      value: "50+",
      label: "Enterprise Partners",
      desc: "Trusted by India's largest retail hypermarkets, cooperatives, and freight networks.",
    },
    {
      value: "3 Weeks",
      label: "Fast Deployment",
      desc: "Rapid onboarding via open APIs and hardware-agnostic telematics connectors.",
    },
  ];

  const workflowSteps = [
    {
      title: "Data Integration",
      desc: "Shipment manifests, vehicle assignments, and sensor streams are ingested through HMI Nexus REST APIs or file connectors.",
    },
    {
      title: "Intelligent Dispatch",
      desc: "Our algorithms calculate optimized multimodal routes, load configurations, and strict temperature parameters for the trip.",
    },
    {
      title: "Live In-Transit Governance",
      desc: "Real-time telemetry streams monitor location, highway delays, and refrigeration health, triggering proactive interventions if anomalies emerge.",
    },
    {
      title: "Digital Receipt & SLA Audit",
      desc: "Receivers accept cargo with verified digital temperature certificates and tamper-proof timestamps for instant commercial settlement.",
    },
  ];

  const faqs = [
    {
      q: "What is HMI Nexus?",
      a: "HMI Nexus is the flagship digital logistics and supply chain operating system created by HunchMind Group. It bridges the physical and digital worlds by integrating real-time IoT sensor telemetry, cold-chain temperature management, multimodal freight route optimization, and agricultural mandi price discovery in a single enterprise platform.",
    },
    {
      q: "How does HMI Nexus help commercial logistics and retail enterprises?",
      a: "HMI Nexus delivers verifiable economic value: up to a 24% reduction in perishable transit spoilage, 14–18% reduction in empty truck deadhead miles, 92%+ reliable delivery ETAs, and seamless digital quality reconciliation between rural suppliers and retail distribution centers.",
    },
    {
      q: "How is HMI Nexus deployed within an enterprise?",
      a: "HMI Nexus is available as a cloud-hosted software platform with open REST APIs, hardware-agnostic IoT telematics integration, and dedicated enterprise connectors for SAP, Oracle, and custom WMS systems. Full operational deployment typically takes less than 3 weeks.",
    },
    {
      q: "How does HMI Nexus differ from software offered by hunchmind.com?",
      a: "hunchmind.com is a software development agency focused on generic web/mobile apps and residential society management. HMI Nexus is an industrial B2B enterprise platform engineered specifically for heavy commercial transport networks, cold-chain reefer monitoring, and agricultural hypermarket supply chains in India.",
    },
  ];

  const relatedSolutions = [
    {
      title: "Cold Chain Logistics Solutions",
      desc: "Dedicated sensor-to-cloud temperature and humidity telemetry preventing spoilage in perishable food and pharma.",
      badge: "Cold Chain",
      href: "/solutions/cold-chain-logistics",
    },
    {
      title: "Predictive Freight Routing",
      desc: "Automated route optimization and commercial transport loading algorithms cutting deadhead miles.",
      badge: "Freight Routing",
      href: "/solutions/predictive-freight-routing",
    },
    {
      title: "AI Logistics Intelligence",
      desc: "Enterprise machine learning decision engines driving predictive demand forecasting and procurement efficiency.",
      badge: "AI Engines",
      href: "/solutions/ai-logistics-intelligence",
    },
  ];

  return (
    <SolutionPageLayout
      breadcrumbs={breadcrumbs}
      badge="HMI Nexus | Flagship Platform"
      h1Title="HMI Nexus Platform: Operating System for"
      h1Subtitle="Intelligent Supply Chains"
      leadDescription="The flagship supply chain intelligence platform by HunchMind Group. HMI Nexus connects real-time cold-chain IoT telemetry, predictive freight routing, and agricultural mandi price discovery into a unified enterprise control tower."
      heroMetrics={heroMetrics}
      problemHeading="Why Modern Supply Chains Demand a Unified Operating System"
      problemSubheading="Point solutions for tracking, temperature logging, and dispatch create costly operational blind spots."
      problemCards={problemCards}
      capabilitiesHeading="The HMI Nexus Platform Architecture"
      capabilitiesSubheading="Modular, enterprise-scale modules built for national hypermarkets, commercial fleets, and fresh produce exporters."
      capabilities={capabilities}
      impactHeading="Verified Operational Value Across India"
      impactMetrics={impactMetrics}
      workflowHeading="How HMI Nexus Powers the End-to-End Freight Journey"
      workflowSteps={workflowSteps}
      faqs={faqs}
      relatedSolutions={relatedSolutions}
      serviceSchema={productSchema}
      faqSchema={faqSchema}
    />
  );
}
