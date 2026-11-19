import Link from "next/link";
import Image from "next/image";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import ContactSection from "../../components/sections/ContactSection";
import ScrollReveal from "../../components/common/ScrollReveal";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Layers,
  Cpu,
  Brain,
  Network,
  Sprout,
  ShieldCheck,
  Compass,
  Zap,
  Globe2,
  Users2,
  Mail,
  Clock,
  MapPin,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "About HunchMind Intelligence | Enterprise AI & Technology Group",
  description:
    "Discover HunchMind Intelligence, the enterprise AI, data decisions, and supply chain technology arm of HunchMind Group. Learn about our mission, products like HMI Nexus, and brand architecture.",
  alternates: {
    canonical: "https://www.hunchmindintelligence.com/about",
  },
  openGraph: {
    title: "About HunchMind Intelligence | Enterprise AI & Technology Group",
    description:
      "Discover HunchMind Intelligence, the enterprise AI, data decisions, and supply chain technology arm of HunchMind Group. Learn about our mission, products like HMI Nexus, and brand architecture.",
    url: "https://www.hunchmindintelligence.com/about",
    siteName: "HunchMind Intelligence",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "About HunchMind Intelligence - Enterprise AI and Technology Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About HunchMind Intelligence | Enterprise AI & Technology Group",
    description:
      "Enterprise AI, data decision engines, and supply chain logistics platforms under parent entity HunchMind Group.",
    images: ["/images/hero-bg.png"],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.hunchmindintelligence.com/about#webpage",
  url: "https://www.hunchmindintelligence.com/about",
  name: "About HunchMind Intelligence",
  description:
    "Comprehensive overview of HunchMind Intelligence, its corporate parent HunchMind Group, and flagship platforms including HMI Nexus.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.hunchmindintelligence.com/#website",
    name: "HunchMind Intelligence",
    url: "https://www.hunchmindintelligence.com",
  },
  about: {
    "@type": "Organization",
    "@id": "https://www.hunchmindintelligence.com/#organization",
    name: "HunchMind Intelligence",
    alternateName: "HunchMind",
    url: "https://www.hunchmindintelligence.com",
    parentOrganization: {
      "@type": "Organization",
      name: "HunchMind Group",
      url: "https://www.hunchmindintelligence.com",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.hunchmindintelligence.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About HunchMind Intelligence",
      item: "https://www.hunchmindintelligence.com/about",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is HunchMind Intelligence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HunchMind Intelligence is an enterprise AI and data decision engineering company operating under parent entity HunchMind Group. We build high-throughput predictive algorithms, IoT cold-chain tracking systems, and multimodal logistics platforms that solve complex industrial bottlenecks across India.",
      },
    },
    {
      "@type": "Question",
      name: "What is the relationship between HunchMind Group and HunchMind Intelligence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HunchMind Group is the parent technology corporation that incubates, finances, and scales specialized B2B technology businesses. HunchMind Intelligence operates as the dedicated enterprise AI, machine learning, and data solutions business of the group.",
      },
    },
    {
      "@type": "Question",
      name: "What is HMI Nexus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HMI Nexus is the flagship digital supply chain and logistics operating system developed within the HunchMind ecosystem. It connects real-time IoT sensor telemetry, cold-chain temperature monitoring, automated multimodal route planning, and agricultural mandi price discovery.",
      },
    },
    {
      "@type": "Question",
      name: "How does HunchMind Intelligence differ from hunchmind.com?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "hunchmind.com is a third-party software agency focusing on generic website development and residential housing tools. HunchMind Intelligence (hunchmindintelligence.com) is an industrial enterprise AI and logistics intelligence company developing proprietary algorithmic models and IoT control towers for commercial freight and supply chain operations.",
      },
    },
  ],
};

export default function AboutPage() {
  const corporateEntities = [
    {
      title: "HunchMind Group",
      badge: "Parent Technology Group",
      desc: "The corporate parent and holding entity that incubates, finances, and scales specialized enterprise technology companies across supply chain, agriculture, and commerce.",
      icon: Building2,
      role: "Corporate Parent & Capital Allocation",
      points: [
        "Incubation and scaling of deep-tech ventures",
        "Strategic governance and capital allocation",
        "Pan-India industry and partner network development",
      ],
      link: "/",
      linkText: "Group Homepage",
    },
    {
      title: "HunchMind Intelligence",
      badge: "Enterprise AI & Decisions",
      desc: "The core artificial intelligence and data solutions business of the group, designing mathematical decision engines, operational forecasting models, and predictive algorithms.",
      icon: Brain,
      role: "Enterprise AI & Predictive Solutions",
      points: [
        "Applied machine learning decision models",
        "Operational demand and price forecasting",
        "Enterprise data architecture integration (SAP, Oracle, TMS)",
      ],
      link: "/solutions/ai-logistics-intelligence",
      linkText: "Explore AI Solutions",
    },
    {
      title: "HMI Nexus",
      badge: "Flagship Logistics OS",
      desc: "Our high-throughput logistics intelligence platform connecting physical sensors, refrigerated transport, commercial truck fleets, and mandi agricultural networks.",
      icon: Sprout,
      role: "Supply Chain & Cold-Chain Technology",
      points: [
        "Perishable transit spoilage reduction by up to 24%",
        "Continuous IoT cold-chain temperature telemetry",
        "Multimodal highway and rail route optimization",
      ],
      link: "/products/hmi-nexus",
      linkText: "Explore HMI Nexus",
    },
    {
      title: "HunchMind Ventures & Labs",
      badge: "Venture Building & R&D",
      desc: "Our innovation engine conducting advanced algorithm design, computer vision for produce grading, and early-stage startup incubation in data-driven commerce.",
      icon: Layers,
      role: "Applied Research & Incubation",
      points: [
        "Algorithmic research in heuristic route solvers",
        "Incubating high-impact B2B technology startups",
        "Academic and industry research collaborations",
      ],
      link: "/#ecosystem",
      linkText: "Explore Ecosystem",
    },
  ];

  const coreFocusAreas = [
    {
      title: "Cold Chain Logistics Intelligence",
      desc: "Solving the post-harvest perishable wastage crisis across Indian agriculture and food retail through real-time IoT temperature monitoring and proactive alerts.",
      stat: "Up to 24%",
      statLabel: "Perishable Spoilage Reduction",
      href: "/solutions/cold-chain-logistics",
    },
    {
      title: "Predictive Multimodal Freight Routing",
      desc: "Algorithmic route solving that evaluates commercial truck clearance constraints, toll tariffs, and rail freight wagons to minimize deadhead return miles.",
      stat: "Optimized",
      statLabel: "Deadhead Mile Reduction",
      href: "/solutions/predictive-freight-routing",
    },
    {
      title: "Supply Chain Visibility & Telemetry",
      desc: "Universal control tower ingesting GPS, FASTag RFID tolls, and environmental sensor feeds into an interactive single pane of glass.",
      stat: "Real-Time",
      statLabel: "Continuous Fleet Telemetry",
      href: "/solutions/supply-chain-visibility-iot",
    },
    {
      title: "Agricultural Mandi Price Discovery",
      desc: "Empowering farmer cooperatives and supermarket chains with transparent, algorithmic benchmark pricing directly from farmgate to retail distribution center.",
      stat: "Direct",
      statLabel: "Farmgate Procurement Link",
      href: "/solutions/agricultural-supply-chain",
    },
  ];

  const brandValues = [
    {
      title: "Pragmatic Engineering Over Hype",
      desc: "We focus on real-world business ROI, developing models that solve physical supply chain problems rather than abstract demonstrations.",
    },
    {
      title: "Deep Domain Immersion",
      desc: "Our algorithms are engineered on the ground—calibrated to Indian highway commercial regulations, state border clearances, and rural mandi dynamics.",
    },
    {
      title: "Strict Data Confidentiality",
      desc: "Enterprise client telemetry, pricing contracts, and shipment manifests remain strictly isolated with bank-grade encryption (TLS 1.3, AES-256).",
    },
    {
      title: "Measurable Economic Value",
      desc: "Every deployment is tracked against verifiable operational KPIs: lower transit spoilage, fewer unladen truck miles, and higher asset utilization.",
    },
  ];

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="flex-grow bg-[#FAFAFA] pt-24 sm:pt-28 md:pt-32">
        {/* Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3 border-b border-[#E2ECEB]/70">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#536573]">
            <Link href="/" className="hover:text-[#005B62] transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={13} className="text-[#8898aa]" />
            <span className="text-[#102638] font-semibold">About HunchMind Intelligence</span>
          </nav>
        </div>

        {/* HERO BANNER */}
        <section className="relative w-full bg-[#00474F] text-white py-14 sm:py-18 md:py-22 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00383E] via-[#00474F] to-[#015863] opacity-95" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="max-w-3xl">
              <ScrollReveal direction="down">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider text-[#65DDE0] uppercase mb-4 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#65DDE0]" />
                  <span>Corporate Overview &amp; Brand Identity</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.12] tracking-tight mb-5 text-white">
                  About HunchMind Intelligence
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p className="text-white/85 text-base sm:text-lg md:text-[19px] leading-relaxed mb-8 font-light">
                  <strong>HunchMind Intelligence</strong> is the dedicated enterprise AI, data decision, and supply chain technology arm of <strong>HunchMind Group</strong>. We engineer high-throughput mathematical models and connected logistics platforms to transform modern commerce and agriculture across India.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/90">
                  <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                    <CheckCircle2 size={14} className="text-[#65DDE0]" />
                    <span>Parent: HunchMind Group</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                    <CheckCircle2 size={14} className="text-[#65DDE0]" />
                    <span>Flagship OS: HMI Nexus</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                    <CheckCircle2 size={14} className="text-[#65DDE0]" />
                    <span>Pan-India Operations</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SECTION 1: CORPORATE ARCHITECTURE */}
        <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-[#E2ECEB]/70">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="max-w-3xl mb-10 sm:mb-14">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#005B62] uppercase block mb-2">
                Brand &amp; Corporate Structure
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#102638] font-bold tracking-tight mb-4">
                How HunchMind Group &amp; HunchMind Intelligence Are Structured
              </h2>
              <p className="text-sm sm:text-base text-[#536573] leading-relaxed">
                To provide transparency to enterprise customers, search engines, and industry partners, our corporate ecosystem operates under a clear, disciplined structure:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {corporateEntities.map((entity, idx) => {
                const Icon = entity.icon;
                return (
                  <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                    <div className="bg-[#FAFAFA] border border-[#E2ECEB] rounded-2xl p-6 sm:p-7 hover:border-[#005B62]/40 hover:shadow-md transition-all flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#DFF8F7] text-[#005B62] flex items-center justify-center shrink-0">
                            <Icon size={20} />
                          </div>
                          <span className="text-[11px] font-bold text-[#005B62] bg-white border border-[#005B62]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                            {entity.badge}
                          </span>
                        </div>

                        <h3 className="font-sans font-bold text-xl text-[#102638] mb-2">
                          {entity.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#536573] leading-relaxed mb-4">
                          {entity.desc}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-[#E2ECEB]/60 mb-5">
                          {entity.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2 text-xs text-[#334E68]">
                              <CheckCircle2 size={13} className="text-[#005B62] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={entity.link}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#005B62] hover:text-[#00383E] transition-colors"
                      >
                        <span>{entity.linkText}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 2: BRAND DIFFERENTIATION VS HUNCHMIND.COM */}
        <section className="py-12 sm:py-16 bg-[#F4F9F9] border-b border-[#E2ECEB]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#005B62]/20 shadow-sm">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#005B62] uppercase block mb-2">
                Brand Clarity &amp; SERP Entity Verification
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#102638] font-bold tracking-tight mb-4">
                Differentiating HunchMind Intelligence from Similarly Named Websites
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#536573] leading-relaxed mb-6">
                Online searches for &ldquo;HunchMind&rdquo; or &ldquo;HunchMind Intelligence&rdquo; occasionally surface a similarly named third-party domain: <code className="bg-slate-100 text-[#102638] px-1.5 py-0.5 rounded text-xs">hunchmind.com</code>. We provide the following clear distinction for customers, search crawlers, and business partners:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E2ECEB]">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
                    Third-Party Domain: hunchmind.com
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>• Generic website and mobile application development agency</li>
                    <li>• Residential society management utility (SocietyConnect)</li>
                    <li>• Independent operation with zero affiliation to HunchMind Group</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#DFF8F7]/60 border border-[#005B62]/30">
                  <div className="text-xs font-bold uppercase text-[#005B62] tracking-wider mb-2">
                    Official Entity: HunchMind Intelligence (hunchmindintelligence.com)
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#00383E] font-medium">
                    <li>• Official corporate enterprise AI and logistics intelligence company</li>
                    <li>• Developers of HMI Nexus, cold-chain IoT tracking, and freight routing</li>
                    <li>• Technology subsidiary of corporate parent HunchMind Group</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CORE SOLUTIONS & PRODUCT PORTFOLIO */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#005B62] uppercase block mb-2">
                Products &amp; Industrial Solutions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#102638] font-bold tracking-tight mb-4">
                What HunchMind Intelligence Builds &amp; Deploys
              </h2>
              <p className="text-sm sm:text-base text-[#536573] leading-relaxed">
                Our technology suite tackles the most critical bottlenecks across Indian commercial transport and agriculture:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreFocusAreas.map((area, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                  <Link
                    href={area.href}
                    className="bg-[#FAFAFA] border border-[#E2ECEB] rounded-2xl p-5 hover:border-[#005B62] hover:shadow-md transition-all flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="mb-3">
                        <span className="text-xl font-black text-[#005B62] block">
                          {area.stat}
                        </span>
                        <span className="text-[10.5px] font-bold text-[#536573] uppercase tracking-wider block">
                          {area.statLabel}
                        </span>
                      </div>
                      <h3 className="font-sans font-bold text-base text-[#102638] group-hover:text-[#005B62] transition-colors mb-2">
                        {area.title}
                      </h3>
                      <p className="text-xs text-[#536573] leading-relaxed mb-4">
                        {area.desc}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#005B62] pt-2 border-t border-[#E2ECEB]/60">
                      <span>View Solution</span>
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: GUIDING PRINCIPLES */}
        <section className="py-12 sm:py-16 bg-[#FAFAFA] border-t border-[#E2ECEB]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#005B62] uppercase block mb-2">
                Engineering Philosophy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#102638] font-bold tracking-tight">
                How We Approach Applied Artificial Intelligence
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {brandValues.map((val, idx) => (
                <div key={idx} className="bg-white border border-[#E2ECEB] rounded-xl p-5 shadow-2xs">
                  <h3 className="font-sans font-bold text-sm text-[#102638] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#536573] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQS (Schema-Backed) */}
        <section className="py-12 sm:py-16 bg-white border-t border-[#E2ECEB]">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#005B62] uppercase block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#102638] font-bold tracking-tight">
                Questions About HunchMind Intelligence
              </h2>
            </div>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, idx) => (
                <div key={idx} className="bg-[#FAFAFA] border border-[#E2ECEB] rounded-2xl p-5 sm:p-6">
                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#102638] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536573] leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
