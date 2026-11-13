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
      href: "#contact",
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
      href: "#contact",
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
    <section id="ecosystem" className="py-20 md:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFF8F7] text-xs font-bold tracking-[0.25em] text-[#005B62] mb-3 uppercase">
                <Sparkles size={13} className="text-[#087D83]" />
                <span>Our Ecosystem</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#102638] font-bold tracking-tight">
                Our Businesses & Platforms
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <a
              href="#ecosystem"
              className="group inline-flex items-center gap-2 text-[#005B62] hover:text-[#00474F] font-semibold text-sm md:text-base transition-colors pb-1 border-b-2 border-transparent hover:border-[#005B62] cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {businesses.map((biz, idx) => {
            const Icon = biz.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 120}>
                <a
                  href={biz.href}
                  className={`bg-white rounded-[28px] overflow-hidden border border-[#E2ECEB] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,91,98,0.12)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group ${biz.accentBorder} cursor-pointer`}
                >
                  {/* Image Container with Consistent Ratio */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={biz.image}
                      alt={biz.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Floating Badge */}
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full text-[#102638] shadow-xs">
                      {biz.badge}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Identity Icon & Brand Name */}
                      <div className="flex items-center gap-3 mb-3.5">
                        <div className={`w-10 h-10 rounded-xl ${biz.iconBg} ${biz.iconColor} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform`}>
                          <Icon size={20} strokeWidth={2.2} />
                        </div>
                        <h3 className="font-sans font-bold text-lg md:text-[19px] text-[#102638] group-hover:text-[#005B62] transition-colors leading-snug">
                          {biz.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#536573] leading-relaxed mb-6 font-normal">
                        {biz.tagline}
                      </p>
                    </div>

                    {/* Circular Arrow Navigation Button */}
                    <div className="pt-4 border-t border-[#F0F5F5] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#005B62] group-hover:underline">
                        Explore Platform
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#F7FAFA] group-hover:bg-[#005B62] text-[#005B62] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:rotate-45">
                        <ArrowUpRight size={17} strokeWidth={2.2} />
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
