import SolutionPageLayout from "../../../components/solutions/SolutionPageLayout";

export const metadata = {
  title: "Cold Chain Logistics Solutions & Monitoring in India | HMI Nexus",
  description:
    "Reduce perishable transit spoilage by up to 24% with HMI Nexus. Real-time IoT temperature monitoring, humidity telemetry, and cold-chain visibility across India.",
  alternates: {
    canonical: "https://www.hunchmindintelligence.com/solutions/cold-chain-logistics",
  },
  openGraph: {
    title: "Cold Chain Logistics Solutions & Monitoring in India | HMI Nexus",
    description:
      "Reduce perishable transit spoilage by up to 24% with HMI Nexus. Real-time IoT temperature monitoring, humidity telemetry, and cold-chain visibility in India.",
    url: "https://www.hunchmindintelligence.com/solutions/cold-chain-logistics",
    siteName: "HunchMind Group",
    images: [
      {
        url: "/images/blog-warehouse.jpg",
        width: 1200,
        height: 630,
        alt: "HMI Nexus - Cold Chain Logistics Solutions and Perishable Monitoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Chain Logistics Solutions in India | HMI Nexus",
    description:
      "Real-time IoT cold chain monitoring, temperature tracking, and transit spoilage reduction for fresh produce and perishables.",
    images: ["/images/blog-warehouse.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cold Chain Logistics Solutions & Monitoring",
  serviceType: "Perishable Supply Chain Tracking & Cold Chain Telemetry",
  provider: {
    "@type": "Organization",
    name: "HMI Nexus - HunchMind Group",
    url: "https://www.hunchmindintelligence.com",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Sensor-to-cloud IoT cold chain telemetry, real-time temperature/humidity alerting, and predictive spoilage models that preserve quality from farmgate to retail store.",
  url: "https://www.hunchmindintelligence.com/solutions/cold-chain-logistics",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does HMI Nexus achieve up to 24% reduction in perishable transit spoilage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We combine IoT temperature and humidity probes with shelf-life degradation algorithms. When an reefer compartment experiences temperature fluctuations or cooling unit failures, automated alerts immediately trigger driver intervention or re-route the shipment to the nearest cold-storage staging facility before the cargo passes the critical thermal threshold.",
      },
    },
    {
      "@type": "Question",
      name: "What commodities are supported by your cold chain telemetry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our models are calibrated for high-perishable horticulture (strawberries, grapes, tomatoes, leafy greens), dairy and frozen products, and temperature-sensitive pharmaceutical shipments with customized temperature thresholds from -25°C to +15°C.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need to buy proprietary sensor hardware from HunchMind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. HMI Nexus is hardware-agnostic. We integrate with existing BLE beacons, GPS-enabled temperature loggers, and major telematics brands (e.g. Carrier, Thermo King, and generic IoT gateway devices) via open telemetry APIs.",
      },
    },
  ],
};

export default function ColdChainLogisticsPage() {
  const breadcrumbs = [
    { label: "Solutions", href: "/#ecosystem" },
    { label: "Cold Chain Logistics" },
  ];

  const heroMetrics = [
    { value: "Up to 24%", label: "Spoilage Cut" },
    { value: "-25°C to +15°C", label: "Thermal Range" },
    { value: "Instant", label: "Breach Alerting" },
    { value: "Pan-India", label: "Reefer Visibility" },
  ];

  const problemCards = [
    {
      title: "Undetected Temperature Breaches",
      desc: "Reefer gensets frequently shut down or run out of diesel mid-transit, with drivers and managers unaware until goods arrive spoiled at destination docks.",
      stat: "Leading cause of commercial fresh-produce rejections",
    },
    {
      title: "Post-Trip Data Logging",
      desc: "Legacy USB temperature loggers only reveal thermal abuses after delivery, rendering data useless for proactive in-transit cargo preservation.",
      stat: "Zero real-time actionable capability",
    },
    {
      title: "Severe Cold-Chain Fragmentation",
      desc: "The handoff between farm collection centers, refrigerated trucks, and central retail warehouses lacks continuous data continuity, creating accountability voids.",
      stat: "High transit liability disputes between suppliers & buyers",
    },
  ];

  const capabilities = [
    {
      icon: "thermometer",
      title: "Real-Time Thermal Telemetry",
      desc: "Continuously streams cabin and multi-compartment temperature, relative humidity, and door-opening sensor readings directly to cloud dashboards.",
      points: [
        "Continuous multi-sensor logging",
        "Dual-zone reefer monitoring",
        "Door-opening thermal spike detection",
      ],
    },
    {
      icon: "bell",
      title: "Instant Thermal Anomaly Alerts",
      desc: "Automated SMS, WhatsApp, and dashboard notifications fire the second temperature drifts beyond strict upper or lower threshold limits.",
      points: [
        "Immediate automated breach escalation",
        "Automated driver & fleet manager callouts",
        "Critical reefer power cutoff warnings",
      ],
    },
    {
      icon: "activity",
      title: "Shelf-Life Degradation Modeling",
      desc: "Our machine learning models compute actual remaining biological shelf-life based on cumulative degree-hour exposure across the entire transit duration.",
      points: [
        "Dynamic shelf-life prediction",
        "Thermal abuse index scoring",
        "Intelligent store-routing prioritization",
      ],
    },
    {
      icon: "truck",
      title: "Emergency Cold-Storage Rerouting",
      desc: "When a mechanical breakdown threatens perishable cargo, the platform maps and redirects the truck to the nearest verified third-party cold store.",
      points: [
        "Pan-India cold warehouse directory",
        "Automated emergency transit re-routing",
        "Salvage time estimation",
      ],
    },
    {
      icon: "sprout",
      title: "Farmgate Pre-Cooling Verification",
      desc: "Ensures fresh produce has completed necessary pre-cooling at mandi pack-houses before long-haul dispatch, preventing early bacterial breakdown.",
      points: [
        "Pack-house temperature sign-off",
        "Harvest-to-chill interval tracking",
        "Pre-loading thermal checklist",
      ],
    },
    {
      icon: "shieldalert",
      title: "Digital Compliance & Audit Logs",
      desc: "Generates tamper-proof digital temperature logs for food safety audits, customer delivery acceptance, and fast insurance claim reconciliation.",
      points: [
        "FSSAI compliance documentation",
        "Automated delivery quality certificates",
        "Dispute-free receiver sign-offs",
      ],
    },
  ];

  const impactMetrics = [
    {
      value: "Up to 24%",
      label: "Spoilage Reduction",
      desc: "Direct reduction in dump rates across fresh fruit, vegetable, and dairy corridors.",
    },
    {
      value: "High",
      label: "Cold-Chain Integrity",
      desc: "Shipments maintained within strict client temperature bands from loading to delivery.",
    },
    {
      value: "Proactive",
      label: "Anomaly Triage",
      desc: "Rapid reefer breakdown response preventing total loss of high-value cargo.",
    },
    {
      value: "Complete",
      label: "Digital Traceability",
      desc: "Zero reliance on manual paper logs or post-facto USB temperature sticks.",
    },
  ];

  const workflowSteps = [
    {
      title: "Sensor Setup",
      desc: "Compact wireless BLE or cellular temperature probes are deployed inside reefer chambers and connected to the HMI Nexus gateway.",
    },
    {
      title: "Live Cloud Streaming",
      desc: "Telemetry streams continuously over cellular networks, logging temperature, humidity, GPS location, and door status.",
    },
    {
      title: "Predictive Degradation Tracking",
      desc: "Algorithms evaluate cumulative thermal exposure against commodity-specific biological decay curves.",
    },
    {
      title: "Quality Delivery Handoff",
      desc: "Receivers at retail hypermarkets review digital quality certificates and temperature graphs for zero-dispute acceptance.",
    },
  ];

  const faqs = [
    {
      q: "How does HMI Nexus achieve up to 24% reduction in perishable transit spoilage?",
      a: "We combine IoT temperature and humidity probes with shelf-life degradation algorithms. When an reefer compartment experiences temperature fluctuations or cooling unit failures, automated alerts immediately trigger driver intervention or re-route the shipment to the nearest cold-storage staging facility before the cargo passes the critical thermal threshold.",
    },
    {
      q: "What commodities are supported by your cold chain telemetry?",
      a: "Our models are calibrated for high-perishable horticulture (strawberries, grapes, tomatoes, leafy greens), dairy and frozen products, and temperature-sensitive pharmaceutical shipments with customized temperature thresholds from -25°C to +15°C.",
    },
    {
      q: "Do we need to buy proprietary sensor hardware from HunchMind?",
      a: "No. HMI Nexus is hardware-agnostic. We integrate with existing BLE beacons, GPS-enabled temperature loggers, and major telematics brands (e.g. Carrier, Thermo King, and generic IoT gateway devices) via open telemetry APIs.",
    },
    {
      q: "What happens when vehicles traverse remote areas with poor mobile connectivity?",
      a: "All HMI Nexus-compatible sensor gateways store data locally on internal flash memory. As soon as the vehicle passes a cellular tower, all queued temperature logs and timestamps synchronize automatically with zero data loss.",
    },
  ];

  const relatedSolutions = [
    {
      title: "HMI Nexus Platform",
      desc: "Explore our integrated supply chain operating system powering cold-chain and freight intelligence.",
      badge: "Core Platform",
      href: "/products/hmi-nexus",
    },
    {
      title: "Agricultural Supply Chain",
      desc: "Connecting farmgate mandis, cold-storage staging, and supermarket distribution channels across India.",
      badge: "Agri-Tech",
      href: "/solutions/agricultural-supply-chain",
    },
    {
      title: "Supply Chain Visibility & IoT",
      desc: "Sensor-to-cloud tracking for freight vehicles, cold stores, and multi-enterprise distribution hubs.",
      badge: "Visibility",
      href: "/solutions/supply-chain-visibility-iot",
    },
  ];

  return (
    <SolutionPageLayout
      breadcrumbs={breadcrumbs}
      badge="HMI Nexus | Cold-Chain Solution"
      h1Title="Cold Chain Logistics Solutions &"
      h1Subtitle="Real-Time Perishable Monitoring"
      leadDescription="Prevent costly spoilage in transit with sensor-to-cloud temperature and humidity telemetry. HMI Nexus delivers real-time breach alerts, remaining shelf-life analytics, and automated emergency rerouting across Indian cold-chain corridors."
      heroMetrics={heroMetrics}
      problemHeading="Why Indian Perishable Cold Chains Fail"
      problemSubheading="High ambient temperatures, long interstate hauls, and manual checks lead to massive post-harvest transit losses."
      problemCards={problemCards}
      capabilitiesHeading="Cold-Chain Intelligence Capabilities"
      capabilitiesSubheading="Comprehensive telemetry and predictive preservation tools engineered for fresh produce, dairy, and cold logistics."
      capabilities={capabilities}
      impactHeading="Proven Performance Across Indian Cold Corridors"
      impactMetrics={impactMetrics}
      workflowHeading="The HMI Nexus Cold-Chain Workflow"
      workflowSteps={workflowSteps}
      faqs={faqs}
      relatedSolutions={relatedSolutions}
      serviceSchema={serviceSchema}
      faqSchema={faqSchema}
    />
  );
}
