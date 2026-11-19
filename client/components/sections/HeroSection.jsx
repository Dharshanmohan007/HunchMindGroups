"use client";

import Image from "next/image";
import ScrollReveal from "../common/ScrollReveal";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full pt-24 sm:pt-28 md:pt-30 pb-0 overflow-hidden text-white"
      style={{
        backgroundColor: "#02383e",
      }}
    >
      {/* Full-width Hero Background Image with Natural Composition */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Image
          src="/assets/hero-ai-dashboard.png"
          alt="HunchMind Group AI Product Suite Dashboard displayed in modern workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right sm:object-[68%_center] lg:object-right opacity-95"
        />

        {/* Silky-Smooth Continuous Dark Teal Gradient Overlay across the entire section */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #02383e 0%, #02383e 24%, rgba(2, 56, 62, 0.96) 34%, rgba(2, 56, 62, 0.78) 44%, rgba(3, 72, 80, 0.40) 56%, rgba(4, 86, 96, 0.12) 70%, transparent 84%)",
          }}
        />

        {/* Subtle Top & Bottom Depth Vignettes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(2, 56, 62, 0.5) 0%, transparent 16%, transparent 84%, rgba(2, 56, 62, 0.65) 100%)",
          }}
        />
      </div>

      {/* Main Hero Copy Container */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] pt-4 sm:pt-6">
          
          {/* Left Column: Eyebrow, Heading, Description, Buttons */}
          <div className="lg:col-span-7 xl:col-span-6 text-left max-w-xl">
            <ScrollReveal direction="down" delay={100}>
              {/* Eyebrow: — HUNCHMIND GROUP */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-7 h-[2px] bg-[#d8fffb] rounded-full inline-block" />
                <span className="text-[10.5px] font-extrabold tracking-[0.2em] text-[#d8fffb] uppercase">
                  HunchMind Group
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              {/* Main Heading with italic aqua highlight */}
              <h1 className="font-sans font-extrabold text-[32px] sm:text-[42px] md:text-[46px] lg:text-[49px] leading-[1.08] tracking-[-1.5px] mb-3.5 text-white">
                Building AI Products<br />
                and Solutions for a<br />
                <span className="italic font-serif font-normal text-[#8ff0e8]">
                  More Efficient and
                </span><br />
                <span className="italic font-serif font-normal text-[#8ff0e8]">
                  Sustainable World.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              {/* Subtitle Description */}
              <p className="text-[#e6f6f5] text-xs sm:text-sm md:text-[14px] leading-relaxed max-w-[465px] mb-6 font-normal">
                A technology group that creates, invests and scales AI products and solutions across supply chain, agriculture, commerce and beyond.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              {/* Action Buttons: Aqua pill button + Ghost pill button */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-4">
                <a
                  href="#ecosystem"
                  className="inline-flex items-center justify-center gap-2 bg-[#a8f7f0] hover:bg-[#8eece4] text-[#073f46] font-bold text-[13px] px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(168,247,240,0.30)] hover:shadow-[0_6px_22px_rgba(168,247,240,0.45)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Explore Our Solutions</span>
                  <span className="text-sm font-bold">↗</span>
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-[13px] px-5 sm:px-6 py-3 rounded-full border border-white/70 backdrop-blur-xs transition-all hover:border-white cursor-pointer"
                >
                  <span className="text-xs">▶</span>
                  <span>Watch Overview</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Empty space reserving area for the background office desk & laptop */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[320px]" />

        </div>

        {/* Floating Capabilities Pill Bar (Exact Match to Image 4) */}
        <div className="mt-8 sm:mt-10 lg:mt-12 mb-4 relative z-20">
          <ScrollReveal direction="up" delay={450}>
            <div className="w-full max-w-[1280px] mx-auto bg-[#01353b]/85 backdrop-blur-md border border-[#65dde0]/45 rounded-full px-4 sm:px-7 py-3 sm:py-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 sm:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
                
                {/* 1. AI Products & Solutions */}
                <div className="flex items-center justify-center lg:justify-start gap-3 w-full sm:w-auto flex-1 px-2 py-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center text-[#65DDE0]">
                    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                      <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 16L16 22L28 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 22L16 28L28 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-white text-[12px] sm:text-[12.5px] leading-tight">AI Products</span>
                    <span className="font-bold text-white text-[12px] sm:text-[12.5px] leading-tight">&amp; Solutions</span>
                  </div>
                </div>

                {/* 2. Predictive Analytics */}
                <div className="flex items-center justify-center lg:justify-start gap-3 w-full sm:w-auto flex-1 px-2 lg:pl-5 py-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center text-[#65DDE0]">
                    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                      <rect x="7" y="7" width="18" height="18" rx="3.5" stroke="currentColor" strokeWidth="2.2"/>
                      <path d="M13 13H19V19H13V13Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.25"/>
                      <path d="M12 3V7M20 3V7M12 25V29M20 25V29M3 12H7M3 20H7M25 12H29M25 20H29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-white text-[12px] sm:text-[12.5px] leading-tight">Predictive</span>
                    <span className="font-bold text-white text-[12px] sm:text-[12.5px] leading-tight">Analytics</span>
                  </div>
                </div>

                {/* 3. Generative AI Applications */}
                <div className="flex items-center justify-center lg:justify-start gap-3 w-full sm:w-auto flex-1 px-2 lg:pl-5 py-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center text-[#65DDE0]">
                    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                      <path d="M12 6.5C8.8 6.5 6.5 9 6.5 12C6.5 13.8 7.4 15.3 8.8 16.2C7.5 17.2 6.5 18.8 6.5 20.5C6.5 23.5 9 25.5 12 25.5C12.8 25.5 13.6 25.3 14.5 24.8V6.8C13.6 6.6 12.8 6.5 12 6.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 6.5C23.2 6.5 25.5 9 25.5 12C25.5 13.8 24.6 15.3 23.2 16.2C24.5 17.2 25.5 18.8 25.5 20.5C25.5 23.5 23 25.5 20 25.5C19.2 25.5 18.4 25.3 17.5 24.8V6.8C18.4 6.6 19.2 6.5 20 6.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.5 12H10.5M14.5 16.5H10M14.5 21H11M17.5 12H21.5M17.5 16.5H22M17.5 21H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-white text-[12px] sm:text-[12.5px] leading-tight">Generative AI</span>
                    <span className="font-bold text-white text-[12px] sm:text-[12.5px] leading-tight">Applications</span>
                  </div>
                </div>

                {/* 4. Optimization Solutions */}
                <div className="flex items-center justify-center lg:justify-start gap-3 w-full sm:w-auto flex-1 px-2 lg:pl-5 py-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center text-[#65DDE0]">
                    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                      <path d="M16 4.5L5 10.5L16 16.5L27 10.5L16 4.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 16L16 22L27 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 21.5L16 27.5L27 21.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-white text-[12px] sm:text-[12.5px] leading-tight">Optimization</span>
                    <span className="font-bold text-white text-[12px] sm:text-[12.5px] leading-tight">Solutions</span>
                  </div>
                </div>

                {/* 5. Industry AI Products */}
                <div className="flex items-center justify-center lg:justify-start gap-3 w-full sm:w-auto flex-1 px-2 lg:pl-5 py-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center text-[#65DDE0]">
                    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                      <path d="M16 3L22 6.5V13.5L16 17L10 13.5V6.5L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M16 10L19 11.8V15.2L16 17L13 15.2V11.8L16 10Z" fill="currentColor" fillOpacity="0.4"/>
                      <path d="M10 13.5L16 17V24L10 27.5L4 24V17L10 13.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M22 13.5L28 17V24L22 27.5L16 24V17L22 13.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-white text-[12px] sm:text-[12.5px] leading-tight">Industry</span>
                    <span className="font-bold text-white text-[12px] sm:text-[12.5px] leading-tight">AI Products</span>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* Exact Multi-Layered Bottom Wave matching Image 1 & Image 2 */}
      <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none mt-2">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Left Light-Cyan Wave Accent */}
          <path
            d="M 0,68 C 100,52 220,16 420,38 C 280,68 140,85 0,90 Z"
            fill="#65DDE0"
            opacity="0.85"
          />
          {/* Layer 2: Main Pure White Wave Body */}
          <path
            d="M 0,90 C 0,72 80,48 240,24 C 420,0 640,32 980,48 C 1180,58 1340,52 1440,42 L 1440,90 L 0,90 Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>

    </section>
  );
}
