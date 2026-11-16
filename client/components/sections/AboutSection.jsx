"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-6 sm:py-8 md:py-10 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Centered on mobile & tablet, left-aligned on desktop */}
          <div className="lg:col-span-4 lg:pr-2 max-w-lg mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            <ScrollReveal direction="left" className="w-full flex flex-col items-center lg:items-start">
              {/* Top Label: Dash + ABOUT HUNCHMIND GROUP (Centered on mobile/tab) */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3.5">
                <span className="w-5 h-[2px] bg-[#005B62] rounded-full inline-block" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#005B62] uppercase">
                  About HunchMind Group
                </span>
              </div>

              {/* Main Heading: Centered on mobile/tab */}
              <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-[38px] lg:text-[40px] text-[#102638] leading-[1.12] tracking-tight mb-3.5 text-center lg:text-left">
                A Parent Company for<br />
                <span className="text-[#005B62]">AI-Driven Businesses.</span>
              </h2>

              {/* Description Paragraph: Centered on mobile/tab */}
              <p className="text-xs sm:text-sm md:text-[15px] text-[#536573] leading-relaxed mb-5 font-normal text-center lg:text-left max-w-md lg:max-w-none mx-auto lg:mx-0">
                We create, invest and scale technology businesses that deliver measurable and sustainable impact.
              </p>

              {/* Know More Button: Centered on mobile/tab */}
              <a
                href="#ecosystem"
                className="group inline-flex items-center gap-2 bg-[#005B62] hover:bg-[#00474F] text-white text-[13.5px] font-semibold px-6 py-2.5 rounded-full shadow-[0_6px_18px_rgba(0,91,98,0.22)] hover:shadow-[0_10px_24px_rgba(0,91,98,0.30)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer w-fit mx-auto lg:mx-0"
              >
                <span>Know More</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#65DDE0]" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column: Prominent Image centered on mobile & tablet, aligned right on desktop */}
          <div className="lg:col-span-8 flex justify-center items-center mx-auto lg:justify-end w-full">
            <ScrollReveal direction="right" delay={200} className="w-full max-w-[550px] sm:max-w-[640px] md:max-w-[720px] lg:max-w-[920px] xl:max-w-[960px] mx-auto lg:mx-0 flex justify-center">
              <div className="relative w-full flex justify-center">
                <Image
                  src="/images/about-bgs.png"
                  alt="Logistics truck travelling through agricultural landscape during sunset"
                  width={1440}
                  height={640}
                  priority
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
