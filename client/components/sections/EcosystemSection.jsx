"use client";

import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function EcosystemSection() {
  const businesses = [
    {
      name: "HunchMind Intelligence",
      tagline: "AI & Data Solutions for Business Impact.",
      image: "/assets/analytics-laptop.webp",
      symbol: "M",
      symbolColor: "text-[#ee8b21]",
      href: "/about",
      alt: "AI and analytics dashboard on a laptop",
    },
    {
      name: "HMI Nexus",
      tagline: "Supply Chain Intelligence for Agri & Perishables.",
      image: "/assets/logistics-truck.webp",
      symbol: "∞",
      symbolColor: "text-[#21a34a]",
      href: "/products/hmi-nexus",
      alt: "Logistics freight truck on highway",
    },
    {
      name: "HunchMind Ventures",
      tagline: "Incubating & Scaling Next-Gen Businesses.",
      image: "/assets/agriculture-crops.webp",
      symbol: "▱",
      symbolColor: "text-[#9c5cf5]",
      href: "/about",
      alt: "Agricultural green crops growing in morning sunlight",
    },
    {
      name: "HunchMind Labs",
      tagline: "Research & Innovation in AI and Applied Tech.",
      image: "/assets/research-laboratory.webp",
      symbol: "⚗",
      symbolColor: "text-[#1a9fd9]",
      href: "/about",
      alt: "Scientific research laboratory and innovation equipment",
    },
  ];

  return (
    <section id="ecosystem" className="pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 bg-[#FAFAFA] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Section Heading: Eyebrow + Title + View All Products link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-7 gap-3">
          <ScrollReveal direction="left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#075e5c] rounded-full inline-block" />
                <span className="text-[10.5px] font-extrabold tracking-[0.2em] text-[#075e5c] uppercase">
                  Our Ecosystem
                </span>
              </div>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-[33px] text-[#122333] tracking-tight leading-tight">
                Our Businesses &amp; Platforms
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <a
              href="/products/hmi-nexus"
              className="inline-flex items-center gap-1 text-[#087d78] hover:text-[#055a56] font-bold text-xs sm:text-[13.5px] transition-colors pb-1 cursor-pointer group"
            >
              <span>View All Products</span>
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>

        {/* 4 Cards in 1 Row (Responsive: 1 col on mobile, 2 cols on tablet, 4 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5.5">
          {businesses.map((biz, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 100} className="h-full">
              <a
                href={biz.href}
                className="bg-white border border-[#e0ebea] rounded-[19px] overflow-hidden shadow-[0_8px_22px_rgba(4,65,69,0.08)] hover:shadow-[0_16px_36px_rgba(4,65,69,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group cursor-pointer"
              >
                {/* Top Image Container */}
                <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-[#e9f8f5] shrink-0">
                  <Image
                    src={biz.image}
                    alt={biz.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                </div>

                {/* Content Body with gradient & symbol */}
                <div className="p-4 sm:p-4.5 bg-gradient-to-b from-white to-[#f3faf9] flex-grow flex flex-col justify-between relative min-h-[130px]">
                  <div>
                    {/* Brand Symbol & Title */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[23px] font-extrabold leading-none ${biz.symbolColor}`}>
                        {biz.symbol}
                      </span>
                      <h3 className="font-sans font-extrabold text-[14.5px] sm:text-[15px] text-[#122333] leading-tight group-hover:text-[#087d78] transition-colors">
                        {biz.name}
                      </h3>
                    </div>

                    {/* Tagline Description */}
                    <p className="text-[11px] sm:text-[11.5px] text-[#53636a] leading-relaxed pr-8 font-normal">
                      {biz.tagline}
                    </p>
                  </div>

                  {/* Circular Arrow Button (Bottom Right) */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#bde7e4] bg-white group-hover:bg-[#087d78] text-[#087d78] group-hover:text-white flex items-center justify-center text-sm font-bold transition-all duration-200 self-end mt-2 shadow-xs group-hover:translate-x-0.5">
                    →
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
