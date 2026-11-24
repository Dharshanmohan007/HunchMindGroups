"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] xl:min-h-[660px] bg-[#00383E] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 md:pt-32"
    >
      {/* 
        Layer 1: Full-cover Hero Image
        - Completely fills the hero container with object-fit: cover (no letterboxing, no margins, no empty spaces).
        - Positioned at object-[64%_center] so the truck, mountain ridge, sunrise, and digital HUD are prominently composed.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-logistics-8k.png"
          alt="High-resolution logistics freight truck on highway with mountains and digital supply chain HUD"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-[64%_center]"
        />
      </div>

      {/* 
        Layer 2: Wide, Multi-Stop Center Gradient Transition
        - 0-30%: Solid dark teal (#00383E) ensuring the left text area is 100% clean and readable.
        - 30-76%: Extremely gradual, multi-stop soft transition eliminating any abrupt vertical lines, hard cuts, or patchiness.
        - 76-100%: 100% transparent, displaying the full-cover, razor-sharp 8K logistics scene.
      */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #00383E 0%, #00383E 28%, rgba(0, 56, 62, 0.98) 35%, rgba(0, 56, 62, 0.90) 42%, rgba(0, 56, 62, 0.72) 50%, rgba(0, 56, 62, 0.45) 58%, rgba(0, 56, 62, 0.20) 66%, rgba(0, 56, 62, 0.05) 74%, transparent 80%)",
        }}
      />

      {/* Mobile-only vertical top-gradient to maintain text clarity on small mobile screens */}
      <div className="sm:hidden absolute inset-0 z-1 bg-gradient-to-b from-[#00383E] via-[#00383E]/75 to-transparent pointer-events-none" />

      {/* Soft top gradient blending smoothly with the navbar */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#00262B]/50 via-transparent to-transparent pointer-events-none z-1" />

      {/* Main Hero Content: Clean, professional text area without unwanted shadows or patches */}
      <div className="relative z-10 max-w-[1520px] mx-auto px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16 w-full pt-4 sm:pt-8 md:pt-10 pb-8 sm:pb-12 md:pb-14 flex-grow flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-6">
        
        {/* Left Column: Heading, Subtitle, CTAs */}
        <div className="w-full lg:w-[58%] xl:w-[52%] max-w-[620px] text-left">
          
          {/* Label: Dash + HUNCHMIND INTELLIGENCE */}
          <ScrollReveal direction="down" delay={100}>
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-6 h-[2.5px] bg-[#65DDE0] rounded-full inline-block" />
              <span className="text-xs font-bold tracking-[0.25em] text-white/95 uppercase">
                HunchMind Intelligence
              </span>
            </div>
          </ScrollReveal>

          {/* Main Heading */}
          <ScrollReveal direction="up" delay={200}>
            <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] leading-[1.1] text-white font-bold tracking-tight mb-5 sm:mb-6">
              <span className="block text-white">HunchMind Intelligence</span>
              Enterprise AI, Data &amp; <span className="text-[#65DDE0] italic font-serif font-normal">Logistics Solutions.</span>
            </h1>
          </ScrollReveal>

          {/* Subtitle Description */}
          <ScrollReveal direction="up" delay={300}>
            <p className="text-white/90 text-base sm:text-lg md:text-[18px] font-light leading-relaxed max-w-[540px] mb-7 sm:mb-8">
              The applied enterprise AI and logistics technology arm of <strong className="font-semibold text-white">HunchMind Group</strong>, developing data decision engines and connected supply chain platforms including <strong className="font-semibold text-white">HMI Nexus</strong>.
            </p>
          </ScrollReveal>

          {/* Buttons: Clean, modern pill buttons without heavy shadows or artificial borders */}
          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Primary button: About HunchMind Intelligence */}
              <a
                href="/about"
                className="group inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-[#102638] text-[15px] font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shadow-sm hover:shadow"
              >
                <span>About HunchMind Intelligence</span>
                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#005B62]" />
              </a>

              {/* Secondary button: Explore Platforms */}
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-2 text-white hover:text-white/90 font-medium text-[15px] px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/40 hover:border-white/70 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <span>Explore Ecosystem</span>
                <ArrowUpRight size={15} className="text-[#65DDE0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </ScrollReveal>

        </div>

        {/* Right Column: Kept open and unobstructed for complete view of the highway, freight truck and digital HUD */}
        <div className="w-full lg:w-auto lg:ml-auto flex justify-start sm:justify-end self-start" />

      </div>

      {/* Multi-layered Wave-like Bottom Edge (Gentle, low-profile wave that preserves complete view of truck wheels & road) */}
      <div className="relative w-full overflow-hidden leading-none z-20 -mb-1 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-12 md:h-14 lg:h-16 preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Subtle Cyan / Turquoise Ribbon Wave */}
          <path
            d="M 680,80 C 880,55 1140,25 1440,6 L 1440,80 Z"
            fill="#D0F8F5"
            opacity="0.85"
          />

          {/* Layer 2: Soft White / Gray Ground Wave blending into page body */}
          <path
            d="M 0,55 C 220,52 460,45 680,32 C 860,20 1080,25 1440,48 L 1440,80 L 0,80 Z"
            fill="#FAFAFA"
            opacity="0.9"
          />
        </svg>
      </div>

    </section>
  );
}
