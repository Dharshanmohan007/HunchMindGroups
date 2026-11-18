import SolutionPageLayout from "../../../components/solutions/SolutionPageLayout";

export const metadata = {
  title: "Supply Chain Visibility Platform & IoT Fleet Monitoring | HunchMind",
  description:
    "Eliminate operational blind spots with real-time IoT supply chain visibility dashboards. Unified fleet telemetry, transit status, and predictive delay alerts across India.",
  alternates: {
    canonical: "https://www.hunchmindintelligence.com/solutions/supply-chain-visibility-iot",
  },
  openGraph: {
    title: "Supply Chain Visibility Platform & IoT Fleet Monitoring | HunchMind",
    description:
      "Eliminate operational blind spots with real-time IoT supply chain visibility dashboards. Unified fleet telemetry, transit status, and predictive delay alerts across India.",
    url: "https://www.hunchmindintelligence.com/solutions/supply-chain-visibility-iot",
    siteName: "HunchMind Group",
    images: [
      {
        url: "/images/intelligence-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "HunchMind Supply Chain Visibility Platform and IoT Fleet Monitoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supply Chain Visibility Platform & IoT Fleet Monitoring | HunchMind",
    description:
      "Unified IoT fleet monitoring, multi-enterprise visibility dashboards, and real-time delay alerts across Indian logistics networks.",
    images: ["/images/intelligence-dashboard.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Supply Chain Visibility & IoT Fleet Monitoring",
  serviceType: "Logistics Tracking Platform & IoT Telemetry Software",
  provider: {
    "@type": "Organization",
    name: "HunchMind Group",
    url: "https://www.hunchmindintelligence.com",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "End-to-end multi-enterprise supply chain visibility platform connecting GPS, environmental sensors, dock queues, and ERP tracking in a single pane of glass.",
  url: "https://www.hunchmindintelligence.com/solutions/supply-chain-visibility-iot",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does HunchMind provide multi-enterprise visibility when transport is handled by external vendors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HunchMind aggregates telemetry from driver mobile applications, third-party GPS vendor APIs, toll RFID (FASTag) feeds, and portable SIM-based tracking into a single unified visibility dashboard, giving enterprise supply chain heads real-time oversight regardless of which logistics contractor operates the vehicle.",
      },
    },
    {
      "@type": "Question",
      name: "What environmental sensors can be tracked besides basic GPS location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our IoT platform ingests and correlates ambient temperature, relative humidity, door-opening sensors, engine diagnostics (OBD-II/CAN-bus), harsh braking, and fuel level telemetry.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate are predictive Estimated Time of Arrival (ETA) calculations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike standard navigation apps that only consider passenger car speeds, our AI models factor in commercial truck speed limits, toll plaza delays, state border clearance durations, and time-of-day loading restrictions to deliver highly dependable delivery arrival windows.",
      },
    },
  ],
};

export default function SupplyChainVisibilityIotPage() {
  const breadcrumbs = [
    { label: "Solutions", href: "/#ecosystem" },
    { label: "Supply Chain Visibility & IoT" },
  ];

  const heroMetrics = [
    { value: "Real-Time", label: "Telemetry Stream" },
    { value: "Dynamic", label: "ETA Precision" },
    { value: "Multi-Tier", label: "Enterprise Sharing" },
    { value: "Pan-India", label: "Toll & GPS Sync" },
  ];

  const problemCards = [
    {
      title: "Manual Status Phone Calls",
      desc: "Logistics teams waste hundreds of hours daily calling drivers, brokers, and dispatchers just to ask 'Where is the truck?', with inaccurate or misleading answers.",
      stat: "Significant drain on dispatcher daily bandwidth",
    },
    {
      title: "Unexpected Warehouse Congestion",
      desc: "When delayed trucks arrive unannounced in bunches, distribution centers face massive yard congestion, long dwell times, and hefty detention charges.",
      stat: "Causes unpredictable dock turnaround delays",
    },
    {
      title: "Fragmented Contractor Telematics",
      desc: "Hiring 10 different fleet contractors means logging into 10 disconnected GPS portals, preventing centralized enterprise risk visibility.",
      stat: "Zero unified operational control",
    },
  ];

  const capabilities = [
    {
      icon: "laptop",
      title: "Unified Single-Pane Dashboard",
      desc: "Consolidates all in-transit freight across captive fleets, dedicated contracted haulers, and spot-market transport onto one interactive map and status board.",
      points: [
        "Real-time nationwide vehicle map",
        "Configurable multi-tier enterprise views",
        "Exception-first operational dashboard",
      ],
    },
    {
      icon: "radio",
      title: "Universal Telematics Aggregation",
      desc: "Connects with major GPS telematics hardware vendors, FASTag toll networks, and mobile-based tracking without forcing hardware replacements.",
      points: [
        "Open API hardware compatibility",
        "FASTag toll gate crossing sync",
        "Driver consent-based SIM tracking",
      ],
    },
    {
      icon: "activity",
      title: "Dynamic AI ETA Engines",
      desc: "Machine learning models compute highly reliable ETAs calibrated for commercial vehicles, interstate checkpoint delays, and urban entry bans.",
      points: [
        "Commercial vehicle road speeds",
        "Toll queue and border delay modeling",
        "Real-time dock appointment updates",
      ],
    },
    {
      icon: "alert",
      title: "Automated Milestone & Risk Alerts",
      desc: "Triggers instant notifications when a vehicle deviates from its approved route corridor, makes unauthorized halts, or risks missing delivery cutoffs.",
      points: [
        "Dynamic geo-fence violation alerts",
        "Night-driving and halt monitoring",
        "Missed milestone early warnings",
      ],
    },
    {
      icon: "map",
      title: "Yard & Dock Appointment Sync",
      desc: "Coordinates in-transit ETAs with destination warehouse gate availability to eliminate vehicle queuing and optimize dock labor scheduling.",
      points: [
        "Automated gate-in pre-clearance",
        "Dock queue prioritization",
        "Demurrage and detention prevention",
      ],
    },
    {
      icon: "layers",
      title: "Shared Partner Portals",
      desc: "Allows enterprise clients to share branded, secure shipment tracking links with suppliers, retail stores, and commercial buyers with zero login friction.",
      points: [
        "Secure customer tracking links",
        "Configurable data visibility roles",
        "Self-serve customer status checks",
      ],
    },
  ];

  const impactMetrics = [
    {
      value: "Drastic",
      label: "Call Reduction",
      desc: "Automated real-time updates eliminate repetitive manual driver phone check-ins.",
    },
    {
      value: "High",
      label: "ETA Reliability",
      desc: "Consistently accurate delivery windows enabling tighter warehouse labor scheduling.",
    },
    {
      value: "Accelerated",
      label: "Dock Turnaround",
      desc: "Pre-alerted distribution centers prepare staging docks before vehicles arrive.",
    },
    {
      value: "Dual-Source",
      label: "Telemetry Match",
      desc: "Dual-source verification eliminates bogus transit checkpoint delay claims.",
    },
  ];

  const workflowSteps = [
    {
      title: "Trip Manifest Creation",
      desc: "Consignments and destination schedules are pushed from your ERP to HunchMind with assigned vehicle or transporter details.",
    },
    {
      title: "Live Stream Aggregation",
      desc: "Our engine links GPS hardware, FASTag toll records, and mobile telemetry to track the vehicle's progress in real time.",
    },
    {
      title: "Predictive ETA Tracking",
      desc: "Algorithms project expected transit times, alerting destination teams of any highway delays well before scheduled arrival.",
    },
    {
      title: "Automated Proof of Delivery",
      desc: "Upon arrival, digital gate-in timestamps and electronic PODs are captured for instant delivery reconciliation.",
    },
  ];

  const faqs = [
    {
      q: "How does HunchMind provide multi-enterprise visibility when transport is handled by external vendors?",
      a: "HunchMind aggregates telemetry from driver mobile applications, third-party GPS vendor APIs, toll RFID (FASTag) feeds, and portable SIM-based tracking into a single unified visibility dashboard, giving enterprise supply chain heads real-time oversight regardless of which logistics contractor operates the vehicle.",
    },
    {
      q: "What environmental sensors can be tracked besides basic GPS location?",
      a: "Our IoT platform ingests and correlates ambient temperature, relative humidity, door-opening sensors, engine diagnostics (OBD-II/CAN-bus), harsh braking, and fuel level telemetry.",
    },
    {
      q: "How accurate are predictive Estimated Time of Arrival (ETA) calculations?",
      a: "Unlike standard navigation apps that only consider passenger car speeds, our AI models factor in commercial truck speed limits, toll plaza delays, state border clearance durations, and time-of-day loading restrictions to deliver highly dependable delivery arrival windows.",
    },
    {
      q: "Can our external suppliers and customers track shipments without accessing our internal systems?",
      a: "Yes. You can generate secure, encrypted live tracking links that provide external stakeholders with real-time map location and milestone status without exposing your internal ERP credentials or financial terms.",
    },
  ];

  const relatedSolutions = [
    {
      title: "HMI Nexus Platform",
      desc: "Discover the central operating system connecting IoT fleet telemetry, cold chains, and multimodal route planning.",
      badge: "Core Platform",
      href: "/products/hmi-nexus",
    },
    {
      title: "Predictive Freight Routing",
      desc: "Automated route optimization and commercial transport loading algorithms cutting deadhead miles.",
      badge: "Freight Routing",
      href: "/solutions/predictive-freight-routing",
    },
    {
      title: "Cold Chain Logistics Solutions",
      desc: "Sensor-to-cloud temperature and humidity telemetry preventing spoilage in perishable food and pharma.",
      badge: "Cold Chain",
      href: "/solutions/cold-chain-logistics",
    },
  ];

  return (
    <SolutionPageLayout
      breadcrumbs={breadcrumbs}
      badge="HMI Nexus | Visibility Solution"
      h1Title="Supply Chain Visibility Platform &"
      h1Subtitle="Real-Time IoT Fleet Monitoring"
      leadDescription="Eliminate freight blind spots across India's highways. HunchMind's visibility engine aggregates multi-contractor GPS, FASTag toll telemetry, and environmental IoT sensors onto a single, predictive enterprise control tower."
      heroMetrics={heroMetrics}
      problemHeading="Why Supply Chain Blind Spots Cost Enterprises Crores"
      problemSubheading="Unannounced delays, manual driver phone calls, and chaotic warehouse yards destroy customer SLAs."
      problemCards={problemCards}
      capabilitiesHeading="Visibility & Telemetry Capabilities"
      capabilitiesSubheading="Designed for multi-enterprise supply chains, national retail networks, and commercial fleet managers."
      capabilities={capabilities}
      impactHeading="Measurable Operational Gains Across Indian Freight Lanes"
      impactMetrics={impactMetrics}
      workflowHeading="The End-to-End Visibility Workflow"
      workflowSteps={workflowSteps}
      faqs={faqs}
      relatedSolutions={relatedSolutions}
      serviceSchema={serviceSchema}
      faqSchema={faqSchema}
    />
  );
}
