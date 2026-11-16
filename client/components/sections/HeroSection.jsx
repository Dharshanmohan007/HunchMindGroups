"use client";

import Image from "next/image";
import { ArrowUpRight, Play, CheckCircle2, Sprout } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function HeroSection() {
  const avatars = [
    "/images/avatars/avatar_1.jpg",
    "/images/avatars/avatar_2.jpg",
    "/images/avatars/avatar_3.jpg",
  ];

  const floatingImpactItems = [
    "Smarter Supply Chains",
    "Efficient Logistics",
    "Sustainable Commerce",
  ];

  return (
    <section id="home" className="relative w-full min-h-[720px] lg:min-h-[800px] bg-[#00474F] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 md:pt-32">
      
      {/* Background Image Container (Exact Agricultural Farm at Sunset with Parallel Rows of Crops) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-agriculture-v2.jpg"
          alt="Sunset over green agricultural crop rows with mountains"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] scale-[1.01]"
        />

        {/* Deep Teal Gradient Overlay on the left for text contrast (matching reference image 1 & 2) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00383E]/98 via-[#00474F]/85 via-34% to-transparent w-full lg:w-[48%]" />
        
        {/* Soft top gradient blending smoothly with the navbar */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#002B30]/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1520px] mx-auto px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16 w-full pt-6 sm:pt-10 md:pt-12 pb-14 sm:pb-16 md:pb-20 flex-grow flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-6">
        
        {/* Left Column: Heading, Subtitle, CTAs, Social Proof */}
        <div className="w-full lg:w-[52%] xl:w-[48%] max-w-[580px] text-left">
          
          {/* Label: Dash + HUNCHMIND GROUP */}
          <ScrollReveal direction="down" delay={100}>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-[2px] bg-[#65DDE0] rounded-full inline-block" />
              <span className="text-xs font-bold tracking-[0.25em] text-white/95 uppercase">
                HunchMind Group
              </span>
            </div>
          </ScrollReveal>

          {/* Main Heading */}
          <ScrollReveal direction="up" delay={200}>
            <h1 className="font-serif text-[40px] sm:text-[50px] md:text-[58px] lg:text-[64px] leading-[1.08] text-white font-bold tracking-tight mb-6">
              Building AI Businesses<br />
              for a <span className="text-[#65DDE0] italic font-serif font-normal">More Efficient</span><br />
              and <span className="text-[#65DDE0] italic font-serif font-normal">Sustainable World.</span>
            </h1>
          </ScrollReveal>

          {/* Subtitle Description */}
          <ScrollReveal direction="up" delay={300}>
            <p className="text-white/90 text-base sm:text-lg md:text-[19px] font-light leading-relaxed max-w-[540px] mb-8">
              A technology group that creates, invests and scales data-driven businesses across supply chain, agriculture, commerce and beyond.
            </p>
          </ScrollReveal>

          {/* Buttons: Primary (White Pill with dark text) + Secondary (Translucent pill with border) */}
          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
              {/* Primary button in reference image: White rounded pill with dark text */}
              <a
                href="#ecosystem"
                className="group inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-[#102638] text-[15px] font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.18)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Our Ecosystem</span>
                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#005B62]" />
              </a>

              {/* Secondary button: Translucent with play icon */}
              <button
                type="button"
                className="inline-flex items-center gap-2.5 text-white hover:text-white/90 font-medium text-[15px] px-6 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/30 backdrop-blur-sm transition-all duration-300 cursor-pointer group"
              >
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play size={10} className="fill-[#00474F] text-[#00474F] ml-0.5" />
                </div>
                <span>Watch Overview</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Trusted Social Proof */}
          <ScrollReveal direction="up" delay={500}>
            <div className="flex items-center gap-3.5 pt-2">
              <div className="flex -space-x-2.5 shrink-0">
                {avatars.map((avatar, idx) => (
                  <div key={idx} className="relative w-9 h-9 rounded-full ring-2 ring-[#00474F] overflow-hidden shadow-sm">
                    <Image src={avatar} alt="Business leader portrait" fill sizes="36px" className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-[13.5px] text-white/90 font-medium leading-snug">
                Trusted by leading businesses across industries
              </p>
            </div>
          </ScrollReveal>

        </div>

        {/* Right Column: Floating Information Card (semi-transparent frosted glass, adjusted lower) */}
        <div className="w-full lg:w-auto lg:ml-auto flex justify-start sm:justify-end self-start mt-6 sm:mt-8 lg:mt-12 xl:mt-16">
          <ScrollReveal direction="right" delay={350} className="w-full sm:w-auto">
            <div className="w-full sm:w-[295px] md:w-[310px] bg-white/65 backdrop-blur-md rounded-[24px] p-5 sm:p-5.5 shadow-[0_16px_40px_rgba(0,0,0,0.16)] border border-white/45">
              
              {/* Card Header with Sprout/Leaf Icon */}
              <div className="flex items-center gap-3 mb-4 sm:mb-4.5">
                <div className="w-9 h-9 rounded-full bg-[#005B62] flex items-center justify-center shrink-0 text-white shadow-xs">
                  <Sprout size={18} className="text-[#65DDE0]" />
                </div>
                <h3 className="font-sans font-bold text-[16.5px] text-[#102638] tracking-tight leading-tight">
                  AI for<br />Real-World Impact
                </h3>
              </div>

              {/* 3 Impact List Items with Outline Checkmarks */}
              <div className="space-y-3 pt-0.5">
                {floatingImpactItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 group cursor-default"
                  >
                    <CheckCircle2 size={17} className="text-[#005B62] shrink-0" />
                    <span className="text-[13.5px] font-semibold text-[#102638] tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* Multi-layered Wave-like Bottom Edge (Exact shape & prominent cyan wave matching reference images 1 & 2) */}
      <div className="relative w-full overflow-hidden leading-none z-20 -mb-1 pointer-events-none">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 sm:h-32 md:h-40 lg:h-48 preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Prominent Light Cyan / Turquoise Wave on the Right (rising to top-right under the crops) */}
          <path
            d="M 780,180 C 940,140 1120,65 1440,14 L 1440,180 Z"
            fill="#D0F8F5"
            opacity="0.95"
          />
          <path
            d="M 780,180 C 940,140 1120,65 1440,14 L 1440,180 Z"
            fill="url(#cyanGlow)"
            opacity="0.55"
          />

          {/* Layer 2: Dark Teal Accent Wave on the Left */}
          <path
            d="M 0,105 C 140,135 280,155 460,165 L 0,165 Z"
            fill="#00383E"
            opacity="0.85"
          />

          {/* Layer 3: Main White Wave with Center Crest */}
          <path
            d="M 0,138 C 180,135 380,130 580,106 C 720,88 840,80 980,100 C 1140,120 1300,134 1440,138 L 1440,180 L 0,180 Z"
            fill="#FFFFFF"
          />

          <defs>
            <linearGradient id="cyanGlow" x1="780" y1="100" x2="1440" y2="14" gradientUnits="userSpaceOnUse">
              <stop stopColor="#65DDE0" stopOpacity="0.45" />
              <stop offset="1" stopColor="#DFF8F7" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </section>
  );
}
