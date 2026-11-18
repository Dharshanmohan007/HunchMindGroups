"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ContactSection from "../sections/ContactSection";
import ScrollReveal from "../common/ScrollReveal";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Layers,
  Cpu,
  Brain,
  Network,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  ShieldAlert,
  ThermometerSnowflake,
  BellRing,
  Activity,
  Truck,
  Sprout,
  AlertTriangle,
  Laptop,
  Radio,
  MapPin,
  Route,
  Shuffle,
  Gauge,
  Fuel,
  ShoppingCart,
  Scale,
  Landmark,
  Repeat,
  Navigation,
} from "lucide-react";

const ICON_MAP = {
  cpu: Cpu,
  brain: Brain,
  network: Network,
  trending: TrendingUp,
  barchart: BarChart3,
  shield: ShieldCheck,
  shieldalert: ShieldAlert,
  thermometer: ThermometerSnowflake,
  bell: BellRing,
  activity: Activity,
  truck: Truck,
  sprout: Sprout,
  alert: AlertTriangle,
  laptop: Laptop,
  radio: Radio,
  map: MapPin,
  layers: Layers,
  route: Route,
  navigation: Navigation,
  shuffle: Shuffle,
  gauge: Gauge,
  fuel: Fuel,
  cart: ShoppingCart,
  scale: Scale,
  landmark: Landmark,
  repeat: Repeat,
};

export default function SolutionPageLayout({
  breadcrumbs = [],
  badge = "Enterprise Logistics Solution",
  h1Title = "",
  h1Subtitle = "",
  leadDescription = "",
  heroMetrics = [],
  problemHeading = "The Industry Challenge in India",
  problemSubheading = "Key bottlenecks across regional corridors and fragmented freight operations.",
  problemCards = [],
  capabilitiesHeading = "Core Platform Capabilities",
  capabilitiesSubheading = "Engineered for enterprise scale, mission-critical operations, and deep domain execution.",
  capabilities = [],
  impactHeading = "Measurable Operational Value",
  impactMetrics = [],
  workflowHeading = "How It Works: Technology Architecture",
  workflowSteps = [],
  faqs = [],
  relatedSolutions = [],
  faqSchema = null,
  serviceSchema = null,
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Generate Schema.org BreadcrumbList structured data
  const breadcrumbListSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.hunchmindintelligence.com/",
            },
            ...breadcrumbs.map((crumb, idx) => {
              const itemObj = {
                "@type": "ListItem",
                position: idx + 2,
                name: crumb.label,
              };
              if (crumb.href) {
                itemObj.item = crumb.href.startsWith("http")
                  ? crumb.href
                  : `https://www.hunchmindintelligence.com${crumb.href}`;
              }
              return itemObj;
            }),
          ],
        }
      : null;

  return (
    <>
      {/* Schema Injection in Head (JSON-LD) */}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {breadcrumbListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
        />
      )}

      <Header />

      <main className="flex-grow bg-[#FAFAFA] pt-24 sm:pt-28 md:pt-32">
        {/* Breadcrumb Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3 border-b border-[#E2ECEB]/70">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#536573]">
            <Link href="/" className="hover:text-[#005B62] transition-colors font-medium">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <ChevronRight size={13} className="text-[#8898aa]" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#005B62] transition-colors font-medium">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#102638] font-semibold">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* HERO BANNER */}
        <section className="relative w-full bg-[#00474F] text-white py-14 sm:py-18 md:py-20 overflow-hidden">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00383E] via-[#00474F] to-[#015863] opacity-95" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#65DDE0]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#DFF8F7]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="max-w-4xl">
              {/* Badge */}
              <ScrollReveal direction="down">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#65DDE0] text-xs font-bold tracking-wider uppercase mb-5">
                  <Sparkles size={13} className="text-[#65DDE0]" />
                  <span>{badge}</span>
                </div>
              </ScrollReveal>

              {/* H1 Heading */}
              <ScrollReveal direction="up" delay={100}>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12] mb-5">
                  {h1Title}{" "}
                  {h1Subtitle && (
                    <span className="text-[#65DDE0] italic font-serif font-normal block sm:inline">
                      {h1Subtitle}
                    </span>
                  )}
                </h1>
              </ScrollReveal>

              {/* Subtitle Description */}
              <ScrollReveal direction="up" delay={200}>
                <p className="text-white/90 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mb-8">
                  {leadDescription}
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={300}>
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#65DDE0] hover:bg-white text-[#00363C] text-sm font-bold px-7 py-3.5 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Request Enterprise Inquiry</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href="#capabilities"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-6 py-3.5 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer"
                  >
                    <span>Explore Platform Architecture</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </ScrollReveal>

              {/* Key Highlights Strip */}
              {heroMetrics.length > 0 && (
                <ScrollReveal direction="up" delay={400}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
                    {heroMetrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-sans font-bold text-2xl sm:text-3xl text-white">
                          {metric.value}
                        </span>
                        <span className="text-xs text-white/80 mt-1 font-medium">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 1: THE PROBLEM / INDUSTRY CONTEXT */}
        {problemCards.length > 0 && (
          <section className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA] border-b border-[#E2ECEB]/60">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <ScrollReveal direction="down">
                <div className="max-w-2xl mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF8F7] text-[11px] font-bold tracking-widest text-[#005B62] uppercase mb-2">
                    <span>Industry Reality</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#102638] font-bold tracking-tight">
                    {problemHeading}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#536573] mt-2">
                    {problemSubheading}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {problemCards.map((card, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={idx * 120} className="h-full">
                    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2ECEB] shadow-[0_6px_20px_rgba(0,35,45,0.04)] h-full flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm mb-4">
                          0{idx + 1}
                        </div>
                        <h3 className="font-serif text-lg font-bold text-[#102638] mb-2">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#536573] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                      {card.stat && (
                        <div className="mt-5 pt-4 border-t border-[#E2ECEB] text-xs font-semibold text-[#005B62]">
                          {card.stat}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: CORE PLATFORM CAPABILITIES */}
        {capabilities.length > 0 && (
          <section id="capabilities" className="py-14 sm:py-18 md:py-22 bg-white border-b border-[#E2ECEB]/60">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <ScrollReveal direction="left">
                <div className="max-w-3xl mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF8F7] text-[11px] font-bold tracking-widest text-[#005B62] uppercase mb-2">
                    <span>Engineered Capabilities</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#102638] font-bold tracking-tight">
                    {capabilitiesHeading}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#536573] mt-2">
                    {capabilitiesSubheading}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {capabilities.map((cap, idx) => {
                  const Icon = (cap.icon && ICON_MAP[cap.icon]) || Layers;
                  return (
                    <ScrollReveal key={idx} direction="up" delay={idx * 80} className="h-full">
                      <div className="bg-[#FAFAFA] hover:bg-white rounded-2xl p-6 sm:p-7 border border-[#E2ECEB] hover:border-[#005B62]/40 shadow-xs hover:shadow-[0_12px_30px_rgba(0,91,98,0.08)] transition-all duration-300 h-full flex flex-col justify-between group">
                        <div>
                          <div className="w-12 h-12 rounded-xl bg-[#DFF8F7] text-[#005B62] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <Icon size={22} strokeWidth={2.2} />
                          </div>
                          <h3 className="font-serif text-lg font-bold text-[#102638] group-hover:text-[#005B62] transition-colors mb-2.5">
                            {cap.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#536573] leading-relaxed mb-4">
                            {cap.desc}
                          </p>
                        </div>
                        {cap.points && cap.points.length > 0 && (
                          <ul className="space-y-1.5 pt-4 border-t border-[#E2ECEB]/70">
                            {cap.points.map((pt, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2 text-[11px] sm:text-xs text-[#536573]">
                                <CheckCircle2 size={13} className="text-[#005B62] shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: REAL-WORLD IMPACT & METRICS */}
        {impactMetrics.length > 0 && (
          <section className="py-14 sm:py-18 bg-[#00363C] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
              <ScrollReveal direction="down">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#65DDE0] text-[11px] font-bold tracking-widest uppercase mb-2">
                    <span>Proven Results</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight">
                    {impactHeading}
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactMetrics.map((item, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center">
                      <div className="font-sans text-3xl sm:text-4xl font-black text-[#65DDE0] mb-2">
                        {item.value}
                      </div>
                      <div className="text-sm font-bold text-white mb-1.5">
                        {item.label}
                      </div>
                      <div className="text-xs text-white/80 leading-relaxed font-light">
                        {item.desc}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: WORKFLOW ARCHITECTURE */}
        {workflowSteps.length > 0 && (
          <section className="py-14 sm:py-18 bg-[#FAFAFA] border-b border-[#E2ECEB]/60">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <ScrollReveal direction="left">
                <div className="max-w-2xl mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF8F7] text-[11px] font-bold tracking-widest text-[#005B62] uppercase mb-2">
                    <span>Implementation Framework</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#102638] font-bold tracking-tight">
                    {workflowHeading}
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {workflowSteps.map((step, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={idx * 100} className="h-full">
                    <div className="bg-white rounded-2xl p-6 border border-[#E2ECEB] shadow-xs h-full relative">
                      <div className="w-8 h-8 rounded-full bg-[#005B62] text-white flex items-center justify-center font-bold text-xs mb-4">
                        {idx + 1}
                      </div>
                      <h3 className="font-serif text-base font-bold text-[#102638] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#536573] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
        {faqs.length > 0 && (
          <section className="py-14 sm:py-18 bg-white border-b border-[#E2ECEB]/60">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
              <ScrollReveal direction="down">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF8F7] text-[11px] font-bold tracking-widest text-[#005B62] uppercase mb-2">
                    <span>Expert Guidance</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#102638] font-bold tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs sm:text-sm text-[#536573] mt-2">
                    Clear answers to technical and operational questions regarding enterprise deployment.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-3.5">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-[#E2ECEB] bg-[#FAFAFA] overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <span className="font-serif text-sm sm:text-base font-bold text-[#102638]">
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-[#005B62] shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#536573] leading-relaxed border-t border-[#E2ECEB]/60">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 6: CONTEXTUAL CROSS-LINKING HUB */}
        {relatedSolutions.length > 0 && (
          <section className="py-12 sm:py-14 bg-[#FAFAFA] border-b border-[#E2ECEB]/60">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#005B62] block mb-1">
                    Related Capabilities
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl text-[#102638] font-bold">
                    Explore Other HunchMind Solutions
                  </h2>
                </div>
                <Link
                  href="/#ecosystem"
                  className="text-xs font-semibold text-[#005B62] hover:text-[#00363C] inline-flex items-center gap-1 group"
                >
                  <span>View Entire Group Ecosystem</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedSolutions.map((sol, idx) => (
                  <Link
                    key={idx}
                    href={sol.href}
                    className="bg-white rounded-2xl p-6 border border-[#E2ECEB] shadow-xs hover:shadow-[0_12px_28px_rgba(0,91,98,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#005B62] bg-[#DFF8F7] px-2.5 py-1 rounded-full inline-block mb-3">
                        {sol.badge || "Solution"}
                      </span>
                      <h3 className="font-serif text-base font-bold text-[#102638] group-hover:text-[#005B62] transition-colors mb-2">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-[#536573] leading-relaxed line-clamp-2">
                        {sol.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#E2ECEB] text-xs font-semibold text-[#005B62] flex items-center gap-1">
                      <span>Learn More</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 7: DIRECT ENTERPRISE INQUIRY FORM */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
