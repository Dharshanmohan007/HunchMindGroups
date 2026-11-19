"use client";

import Image from "next/image";
import { ArrowRight, Cpu, Repeat, Layers, FlaskConical, Sparkles, ArrowUpRight } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function EcosystemSection() {
  const businesses = [
    {
      name: "HunchMind Intelligence",
      tagline: "AI & Data Solutions for Business Impact.",
      image: "/images/intelligence-dashboard.jpg",
      icon: Cpu,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50",
      accentBorder: "group-hover:border-amber-400",
      badge: "AI & Decisions",
      href: "/about",
    },
    {
      name: "HMI Nexus",
      tagline: "Supply Chain Intelligence for Agri & Perishables.",
      image: "/images/nexus-logistics.jpg",
      icon: Repeat,
      iconColor: "text-[#087D83]",
      iconBg: "bg-[#DFF8F7]",
      accentBorder: "group-hover:border-[#65DDE0]",
      badge: "Logistics Hub",
      href: "/products/hmi-nexus",
    },
    {
      name: "HunchMind Ventures",
      tagline: "Incubating & Scaling Next-Gen Businesses.",
      image: "/images/ventures-growth.jpg",
      icon: Layers,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      accentBorder: "group-hover:border-purple-400",
      badge: "Venture Builder",
      href: "#contact",
    },
    {
      name: "HunchMind Labs",
      tagline: "Research & Innovation in AI and Applied Tech.",
      image: "/images/labs-research.jpg",
      icon: FlaskConical,
      iconColor: "text-cyan-600",
      iconBg: "bg-cyan-50",
      accentBorder: "group-hover:border-cyan-400",
      badge: "Applied R&D",
      href: "#contact",
    },
  ];

  return (
    <section id="ecosystem" className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header (Compact spacing matching user markup) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF8F7] text-[11px] font-bold tracking-[0.25em] text-[#005B62] mb-2 uppercase">
                <Sparkles size={12} className="text-[#087D83]" />
                <span>Our Ecosystem</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#102638] font-bold tracking-tight">
                Our Businesses & Platforms
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <a
              href="/products/hmi-nexus"
              className="group inline-flex items-center gap-1.5 text-[#005B62] hover:text-[#00474F] font-semibold text-xs sm:text-sm transition-colors pb-0.5 border-b border-transparent hover:border-[#005B62] cursor-pointer"
            >
              <span>Explore HMI Nexus</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>

        {/* 4 Cards Grid (Reduced card size, minimized padding and compact image cut ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {businesses.map((biz, idx) => {
            const Icon = biz.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 100} className="flex justify-center w-full">
                <a
                  href={biz.href}
                  className={`bg-white rounded-[10px] sm:rounded-[10px] overflow-hidden border border-[#E2ECEB] shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(0,91,98,0.10)] transition-all duration-400 hover:-translate-y-1.5 flex flex-col h-full w-full sm:max-w-[340px] md:max-w-[360px] lg:max-w-none mx-auto group ${biz.accentBorder} cursor-pointer`}
                >
                  {/* Minimized Image Container Ratio */}
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={biz.image}
                      alt={biz.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-50 group-hover:opacity-35 transition-opacity" />
                    
                    {/* Floating Badge */}
                    <span className="absolute top-2.5 left-2.5 bg-white/92 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full text-[#102638] shadow-xs">
                      {biz.badge}
                    </span>
                  </div>

                  {/* Compact Card Body */}
                  <div className="p-4 sm:p-4.5 flex flex-col justify-between flex-grow">
                    {/* Identity Icon & Brand Name */}
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`w-8 h-8 rounded-lg ${biz.iconBg} ${biz.iconColor} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform`}>
                        <Icon size={16} strokeWidth={2.2} />
                      </div>
                      <h3 className="font-sans font-bold text-[16px] sm:text-[17px] text-[#102638] group-hover:text-[#005B62] transition-colors leading-tight">
                        {biz.name}
                      </h3>
                    </div>

                    {/* Description and Arrow Button in a SINGLE LINE */}
                    <div className="flex items-center justify-between gap-3 pt-2 mt-auto border-t border-[#F0F5F5]">
                      <p className="text-xs sm:text-[13px] text-[#536573] leading-snug font-normal line-clamp-2 flex-grow">
                        {biz.tagline}
                      </p>
                      <div className="w-8 h-8 rounded-full bg-[#F7FAFA] group-hover:bg-[#005B62] text-[#005B62] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs group-hover:rotate-45">
                        <ArrowUpRight size={15} strokeWidth={2.2} />
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
