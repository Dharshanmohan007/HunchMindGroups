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
    <section id="impact" className="py-6 sm:py-8 md:py-10 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <ScrollReveal direction="up" delay={150}>
          
          {/* THE OUR IMPACT CONTAINER:
              Default state: Exact height & width matching reference image (min-h-[175px])
              Hover state: Full visibility across mobile, tab (stacked vertically), and desktop (side-by-side)
          */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setActiveStatIndex(0);
            }}
            className={`group relative w-full rounded-[28px] sm:rounded-[34px] md:rounded-[38px] overflow-hidden border border-[#005B62]/40 shadow-[0_20px_50px_rgba(0,35,45,0.16)] transition-all duration-500 ease-in-out cursor-default ${
              isHovered
                ? "h-auto min-h-[510px] sm:min-h-[480px] md:min-h-[470px] lg:h-[390px] shadow-[0_28px_70px_rgba(0,35,45,0.28)]"
                : "min-h-[175px] md:h-[182px]"
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
                className={`object-cover object-[right_36%] sm:object-[86%_36%] md:object-[88%_36%] transition-transform duration-1000 ease-out ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
              />

              {/* Center Color Transition Gradient Overlay:
                  Matches the original UI reference (Image 1):
                  - Rich, crisp deep teal (#015863 / rgb(1,88,99)) on the left.
                  - Soft, ultra-gradual dissolution across 35% -> 85% into the mountain sky/mist.
                  - Zero harsh vertical cutoff or dark stripe.
              */}
              {/* Normal Phase Overlay */}
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #015863 0%, #015863 32%, rgba(1, 88, 99, 0.96) 42%, rgba(1, 92, 103, 0.82) 52%, rgba(1, 96, 108, 0.60) 62%, rgba(1, 100, 112, 0.35) 72%, rgba(1, 104, 115, 0.12) 84%, rgba(1, 104, 115, 0) 95%)",
                }}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              />

              {/* Hover Phase Overlay: Deep teal background covering the expanded layout */}
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(1, 75, 85, 0.98) 0%, rgba(1, 88, 99, 0.94) 52%, rgba(1, 96, 108, 0.65) 75%, rgba(1, 104, 115, 0.35) 100%)",
                }}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              />

              {/* Subtle top & bottom vignette: Active only when expanded to frame the card */}
              <div
                className={`absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#002C32]/30 to-transparent pointer-events-none transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#002C32]/30 to-transparent pointer-events-none transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Inner Content Area - Full height with snug, balanced vertical padding */}
            <div className="relative z-10 p-5 sm:p-6 md:px-8 md:py-6 lg:px-9 lg:py-6 flex flex-col justify-between h-full">
              
              {/* Top Row: Label & Micro-Indicator */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  {/* Top-Left Label: Dash + "OUR IMPACT" (Clean White) */}
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 sm:w-6 h-[2px] bg-white rounded-full inline-block" />
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-white uppercase">
                      OUR IMPACT
                    </span>
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
                          className={`font-sans font-bold text-3xl sm:text-[34px] md:text-4xl lg:text-[42px] tracking-tight leading-none text-white transition-colors duration-300 ${
                            isHovered && activeStatIndex === idx
                              ? "scale-105 transform origin-left"
                              : "group-hover/stat:text-white"
                          }`}
                        >
                          {item.stat}
                        </span>
                      </div>
                      
                      <span
                        className={`text-xs sm:text-[13px] md:text-sm font-medium mt-1 text-white transition-colors duration-300 ${
                          isHovered && activeStatIndex === idx
                            ? "font-semibold"
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
                              ? "w-8 bg-white"
                              : "w-0 bg-transparent"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPANDED CONTENT AREA:
                  Ample vertical expansion for mobile/tablet (vertical stack) and uniform compact height on desktop
              */}
              <div
                className={`transition-all duration-500 ease-out overflow-hidden ${
                  isHovered
                    ? "opacity-100 max-h-[650px] lg:max-h-[290px] mt-4 pt-4 border-t border-white/15"
                    : "opacity-0 max-h-0 mt-0 pt-0 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
                  
                  {/* Left Column: Heading & description containers */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="h-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold tracking-wider uppercase mb-1.5 w-fit">
                      <Sparkles size={12} className="text-white" />
                      <span>{activeStat.tag}</span>
                    </div>

                    {/* Headline container with uniform min-height on desktop */}
                    <div className="min-h-0 lg:min-h-[52px] flex items-center mb-1">
                      <h3 className="font-serif text-lg sm:text-xl md:text-[23px] text-white font-bold tracking-tight leading-snug">
                        {activeStat.heading}{" "}
                        <span className="text-white font-normal italic font-serif">
                          {activeStat.tagline}
                        </span>
                      </h3>
                    </div>

                    {/* Description container with uniform min-height on desktop */}
                    <div className="min-h-0 lg:min-h-[46px] flex items-start">
                      <p className="text-xs sm:text-[13px] text-white/85 font-light leading-relaxed max-w-xl">
                        {activeStat.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Frosted card fully visible on mobile & tab without cutoff */}
                  <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-white/20 shadow-lg h-auto min-h-[140px] lg:h-[155px] flex flex-col justify-between gap-2.5">
                    <div className="text-[11px] font-bold text-white uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>Core Capabilities</span>
                      <span className="text-[10px] text-white/60 font-normal">Active Metric</span>
                    </div>

                    <div className="space-y-2 sm:space-y-2.5 flex-grow flex flex-col justify-around">
                      {activeStat.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-white/95 leading-tight">
                          <CheckCircle2 size={15} className="text-white shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Interactive Quick-Tabs Strip (locked to the bottom) */}
                {/* <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/70">
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
                            ? "bg-white text-[#00474F] font-bold shadow-xs scale-105"
                            : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                        }`}
                      >
                        {s.stat} {s.label}
                      </button>
                    ))}
                  </div>

                  <span className="text-[11px] text-white/80 hidden md:inline-block">
                    Move mouse away to collapse
                  </span>
                </div> */}

              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
