"use client";

import { Truck, Sprout, ShoppingBag, Cpu, Leaf, Sparkles } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function FocusAreas() {
  const areas = [
    {
      title: "Supply Chain & Logistics",
      desc: "Intelligent freight routing, fleet tracking & cold-chain management.",
      icon: Truck,
    },
    {
      title: "Agri & Food Systems",
      desc: "Perishable supply chains, farm-to-retail tracking & price forecasting.",
      icon: Sprout,
    },
    {
      title: "Commerce & Consumer",
      desc: "Unified commerce platforms, distribution networks & demand matching.",
      icon: ShoppingBag,
    },
    {
      title: "Data & AI Products",
      desc: "Enterprise decision engines, predictive models & operational intelligence.",
      icon: Cpu,
    },
    {
      title: "Sustainability & Efficiency",
      desc: "Resource optimization, zero-waste logistics & energy-efficient networks.",
      icon: Leaf,
    },
  ];

  return (
    <section id="focus" className="py-6 sm:py-8 md:py-10 bg-[#FFFFFF] relative border-y border-[#E2ECEB]/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F8F7] text-[11px] font-bold tracking-[0.25em] text-[#005B62] mb-2 uppercase">
              <Sparkles size={12} className="text-[#087D83]" />
              <span>Our Focus Areas</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#102638] font-bold tracking-tight">
              Transforming Critical Industries
            </h2>
            <p className="text-xs sm:text-sm text-[#536573] max-w-lg mx-auto mt-2">
              Where technology, deep domain knowledge, and execution discipline intersect to create lasting value.
            </p>
          </ScrollReveal>
        </div>

        {/* 5 Focus Areas Container */}
        <ScrollReveal direction="up" delay={200}>
          <div className="bg-white rounded-[32px] border border-[#E2ECEB] p-6 sm:p-8 md:p-10 shadow-[0_15px_40px_rgba(0,35,45,0.05)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#E2ECEB]">
              {areas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center text-center px-4 py-4 group cursor-default transition-transform duration-300 hover:-translate-y-1.5 ${
                      idx !== 0 ? "lg:pl-6" : ""
                    }`}
                  >
                    {/* Outline Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-[#DFF8F7]/70 border border-[#65DDE0]/30 flex items-center justify-center mb-4 group-hover:bg-[#005B62] transition-colors duration-300 shadow-xs">
                      <Icon
                        size={26}
                        strokeWidth={1.8}
                        className="text-[#005B62] group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-bold text-base md:text-[17px] text-[#102638] group-hover:text-[#005B62] transition-colors mb-2 leading-snug">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#536573] leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

