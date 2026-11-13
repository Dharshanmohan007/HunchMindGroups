"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Building2, Layers, Users, Zap, Sparkles } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function ImpactSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  const stats = [
    {
      id: "businesses",
      stat: "2+",
      label: "Businesses",
      heading: "Building AI-Driven Businesses",
      tagline: "across supply chain, agriculture and commerce",
      desc: "HunchMind Group incubates, funds and scales specialized enterprise technology companies that combine artificial intelligence, deep operational domain expertise, and disciplined execution.",
      icon: Building2,
      highlights: [
        "HunchMind Intelligence (Enterprise AI & Data)",
        "HMI Nexus (Agri & Cold-Chain Logistics)",
        "Dedicated domain-specific software architectures",
      ],
      tag: "Enterprise Creation",
    },
    {
      id: "platforms",
      stat: "3+",
      label: "Platforms",
      heading: "Connected Digital Platforms",
      tagline: "powering real-time decisions",
      desc: "Our high-throughput platforms seamlessly connect physical supply chains, market participants, and machine intelligence to optimize asset utilization and eliminate friction.",
      icon: Layers,
      highlights: [
        "Predictive freight routing & telemetry engines",
        "Perishable commodity quality & shelf-life grading",
        "Unified multi-enterprise visibility dashboards",
      ],
      tag: "Platform Scale",
    },
    {
      id: "partners",
      stat: "50+",
      label: "Partners",
      heading: "A Growing Enterprise Network",
      tagline: "of leading enterprises and ecosystem partners",
      desc: "We build enduring partnerships with India's largest retail hypermarkets, agricultural cooperatives, freight transporters, and enterprise buyers to drive shared technological progress.",
      icon: Users,
      highlights: [
        "Tier-1 national retail chains & hypermarkets",
        "Pan-India farmer cooperatives & mandi networks",
        "High-capacity commercial freight fleet operators",
      ],
      tag: "Ecosystem Reach",
    },
    {
      id: "use-cases",
      stat: "5+",
      label: "Use Cases",
      heading: "Proven Industrial Impact",
      tagline: "solving critical challenges from farm to consumer",
      desc: "From reducing perishable transit spoilage through IoT telemetry to optimizing regional freight loading, our applied AI models create tangible, measurable economic value daily.",
      icon: Zap,
      highlights: [
        "Perishable transit spoilage reduction by up to 24%",
        "Dynamic farmgate price discovery & demand matching",
        "Automated multimodal route planning & load optimization",
      ],
      tag: "Applied AI",
    },
  ];

  const activeStat = stats[activeStatIndex];

  return (
    <section id="impact" className="py-12 md:py-18 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <ScrollReveal direction="up" delay={150}>
          
          {/* THE OUR IMPACT CONTAINER:
              Default state: Exact height & width matching reference image (min-h-[175px])
              Hover state: Expands smoothly to min-h-[420px] and displays detailed content
          */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setActiveStatIndex(0);
            }}
            className={`group relative w-full rounded-[28px] sm:rounded-[34px] md:rounded-[38px] overflow-hidden border border-[#005B62]/40 shadow-[0_20px_50px_rgba(0,35,45,0.16)] transition-all duration-700 ease-in-out cursor-default ${
              isHovered
                ? "min-h-[460px] md:min-h-[420px] lg:min-h-[430px] shadow-[0_28px_70px_rgba(0,35,45,0.28)]"
                : "min-h-[175px] md:min-h-[182px]"
            }`}
          >
            
            {/* Background Mountain Photo (Matching the user's reference) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/impact-landscape.jpg"
                alt="Panoramic green misty mountain landscape"
                fill
                priority
                sizes="100vw"
                className={`object-cover object-right sm:object-[85%_center] transition-transform duration-1000 ease-out ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
              />

              {/* Left Deep Teal Gradient Overlay:
                  Covers left ~55% with opaque deep teal for crisp readability,
                  smoothly transitioning to transparent on the right so the mountain photo shines through.
              */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isHovered
                    ? "bg-gradient-to-r from-[#00383E]/98 via-[#00474F]/92 via-55% to-[#00474F]/40"
                    : "bg-gradient-to-r from-[#00424A] via-[#00474F] via-45% to-transparent"
                }`}
              />

              {/* Subtle top & bottom vignette */}
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#002C32]/30 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#002C32]/40 to-transparent pointer-events-none" />
            </div>

            {/* Inner Content Area */}
            <div className="relative z-10 p-6 sm:p-7 md:p-9 lg:p-10 flex flex-col justify-between h-full">
              
              {/* Top Row: Label & Micro-Indicator */}
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  {/* Top-Left Label: Dash + "OUR IMPACT" */}
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 sm:w-6 h-[2px] bg-[#65DDE0] rounded-full inline-block" />
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-white/95 uppercase">
                      OUR IMPACT
                    </span>
                  </div>

                  {/* Micro Hint (Fades out when hovered) */}
                  <div
                    className={`hidden sm:flex items-center gap-1.5 text-[11px] text-[#65DDE0]/80 font-medium transition-opacity duration-300 ${
                      isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                  >
                    <span>Hover to explore details</span>
                    <span className="animate-pulse">↓</span>
                  </div>
                </div>

                {/* The 4 Statistics Strip */}
                <div className="max-w-[700px] grid grid-cols-2 sm:grid-cols-4 items-center gap-4 sm:gap-0 sm:divide-x divide-white/20">
                  {stats.map((item, idx) => (
                    <div
                      key={item.id}
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setActiveStatIndex(idx);
                      }}
                      onClick={() => {
                        setIsHovered(true);
                        setActiveStatIndex(idx);
                      }}
                      className={`group/stat flex flex-col cursor-pointer transition-all duration-300 ${
                        idx === 0 ? "sm:pr-7" : idx === 3 ? "sm:pl-7" : "sm:px-7"
                      }`}
                    >
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`font-sans font-bold text-3xl sm:text-[34px] md:text-4xl lg:text-[42px] tracking-tight leading-none transition-colors duration-300 ${
                            isHovered && activeStatIndex === idx
                              ? "text-[#65DDE0] scale-105 transform origin-left"
                              : "text-white group-hover/stat:text-[#65DDE0]"
                          }`}
                        >
                          {item.stat}
                        </span>
                      </div>
                      
                      <span
                        className={`text-xs sm:text-[13px] md:text-sm font-medium mt-1 transition-colors duration-300 ${
                          isHovered && activeStatIndex === idx
                            ? "text-white font-semibold"
                            : "text-white/90 group-hover/stat:text-white"
                        }`}
                      >
                        {item.label}
                      </span>

                      {/* Small Active Indicator underline when expanded */}
                      {isHovered && (
                        <div
                          className={`h-[2px] rounded-full mt-2 transition-all duration-300 ${
                            activeStatIndex === idx
                              ? "w-8 bg-[#65DDE0]"
                              : "w-0 bg-transparent"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPANDED CONTENT AREA:
                  Displays when hovered, with rich details, description, and capability highlights
              */}
              <div
                className={`transition-all duration-500 ease-out overflow-hidden ${
                  isHovered
                    ? "opacity-100 max-h-[320px] mt-8 pt-6 border-t border-white/15"
                    : "opacity-0 max-h-0 mt-0 pt-0 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column: Heading, Tagline & Detailed Paragraph (7 cols) */}
                  <div className="lg:col-span-7">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#65DDE0]/15 text-[#65DDE0] text-[11px] font-bold tracking-wider uppercase mb-2.5">
                      <Sparkles size={12} className="text-[#65DDE0]" />
                      <span>{activeStat.tag}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl md:text-[26px] text-white font-bold tracking-tight mb-2">
                      {activeStat.heading}{" "}
                      <span className="text-[#65DDE0] font-normal italic font-serif">
                        {activeStat.tagline}
                      </span>
                    </h3>

                    <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed max-w-xl">
                      {activeStat.desc}
                    </p>
                  </div>

                  {/* Right Column: Key Highlights Frosted Card (5 cols) */}
                  <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 shadow-lg">
                    <div className="text-[11px] font-bold text-[#65DDE0] uppercase tracking-wider mb-3 flex items-center justify-between">
                      <span>Core Capabilities</span>
                      <span className="text-[10px] text-white/60 font-normal">Active Metric</span>
                    </div>

                    <div className="space-y-2.5">
                      {activeStat.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-white/95">
                          <CheckCircle2 size={15} className="text-[#65DDE0] shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Interactive Quick-Tabs Strip */}
                <div className="mt-5 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-white/60">Switch preview:</span>
                    {stats.map((s, idx) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveStatIndex(idx);
                        }}
                        onMouseEnter={(e) => {
                          e.stopPropagation();
                          setActiveStatIndex(idx);
                        }}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                          activeStatIndex === idx
                            ? "bg-[#65DDE0] text-[#00474F] font-bold shadow-xs scale-105"
                            : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                        }`}
                      >
                        {s.stat} {s.label}
                      </button>
                    ))}
                  </div>

                  <span className="text-[11px] text-[#65DDE0]/80 hidden md:inline-block">
                    Move mouse away to collapse
                  </span>
                </div>

              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
