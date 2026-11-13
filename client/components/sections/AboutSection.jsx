"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Clean text, heading, description, and button (matching reference image exactly) */}
          <div className="lg:col-span-6 max-w-xl">
            <ScrollReveal direction="left">
              {/* Top Label: Dash + ABOUT HUNCHMIND GROUP */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-6 h-[2px] bg-[#005B62] rounded-full inline-block" />
                <span className="text-xs font-bold tracking-[0.25em] text-[#005B62] uppercase">
                  About HunchMind Group
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-[46px] lg:text-[48px] text-[#102638] leading-[1.12] tracking-tight mb-5">
                A Parent Company for<br />
                <span className="text-[#005B62]">AI-Driven Businesses.</span>
              </h2>

              {/* Description Paragraph */}
              <p className="text-base sm:text-lg text-[#536573] leading-relaxed mb-8 max-w-md font-normal">
                We create, invest and scale technology businesses that deliver measurable and sustainable impact.
              </p>

              {/* Know More Button */}
              <a
                href="#ecosystem"
                className="group inline-flex items-center gap-2 bg-[#005B62] hover:bg-[#00474F] text-white text-[14.5px] font-semibold px-7 py-3.5 rounded-full shadow-[0_8px_20px_rgba(0,91,98,0.25)] hover:shadow-[0_12px_28px_rgba(0,91,98,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer w-fit"
              >
                <span>Know More</span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#65DDE0]" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column: Tall, high-definition slanted parallelogram image with light cyan offset plate */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <ScrollReveal direction="right" delay={200} className="w-full max-w-[620px] lg:max-w-[660px]">
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
