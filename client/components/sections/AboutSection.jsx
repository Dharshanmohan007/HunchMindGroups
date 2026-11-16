"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-6 sm:py-8 md:py-10 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Clean text, heading, description, and button (compact ~25-30% visual width) */}
          <div className="lg:col-span-4 lg:pr-2 max-w-lg">
            <ScrollReveal direction="left">
              {/* Top Label: Dash + ABOUT HUNCHMIND GROUP */}
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-5 h-[2px] bg-[#005B62] rounded-full inline-block" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#005B62] uppercase">
                  About HunchMind Group
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-[38px] lg:text-[40px] text-[#102638] leading-[1.12] tracking-tight mb-3.5">
                A Parent Company for<br />
                <span className="text-[#005B62]">AI-Driven Businesses.</span>
              </h2>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm md:text-[15px] text-[#536573] leading-relaxed mb-5 font-normal">
                We create, invest and scale technology businesses that deliver measurable and sustainable impact.
              </p>

              {/* Know More Button */}
              <a
                href="#ecosystem"
                className="group inline-flex items-center gap-2 bg-[#005B62] hover:bg-[#00474F] text-white text-[13.5px] font-semibold px-6 py-2.5 rounded-full shadow-[0_6px_18px_rgba(0,91,98,0.22)] hover:shadow-[0_10px_24px_rgba(0,91,98,0.30)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer w-fit"
              >
                <span>Know More</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#65DDE0]" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column: Prominent Image occupying ~70-75% of the visual space */}
          <div className="lg:col-span-8 flex justify-center lg:justify-end">
            <ScrollReveal direction="right" delay={200} className="w-full max-w-[850px] lg:max-w-[920px] xl:max-w-[960px]">
              <div className="relative w-full">
                <Image
                  src="/images/about-truck-hd.png"
                  alt="Logistics truck travelling through agricultural landscape during sunset"
                  width={1440}
                  height={640}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
