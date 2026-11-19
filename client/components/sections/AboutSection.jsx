"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-14 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Eyebrow, Heading, Description, Know More Button */}
          <div className="lg:col-span-5 text-left">
            <ScrollReveal direction="left">
              {/* Eyebrow: — ABOUT HUNCHMIND GROUP */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#075e5c] rounded-full inline-block" />
                <span className="text-[10.5px] font-extrabold tracking-[0.2em] text-[#075e5c] uppercase">
                  About HunchMind Group
                </span>
              </div>

              {/* Main Heading with italic teal accent */}
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-[38px] text-[#122333] leading-[1.12] tracking-tight mb-3 sm:mb-4">
                A Parent Company for<br />
                <span className="italic font-serif font-normal text-[#087e78]">
                  AI-Driven Businesses.
                </span>
              </h2>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-[13.5px] text-[#46565d] leading-relaxed max-w-[460px] mb-6 font-normal">
                We create, invest and scale technology businesses that deliver measurable and sustainable impact across industries.
              </p>

              {/* Action Button: Know More ↗ */}
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#087b75] to-[#064d58] hover:from-[#076d68] hover:to-[#053f47] text-white text-[13px] font-semibold px-6 py-2.5 rounded-full shadow-[0_5px_15px_rgba(5,92,90,0.16)] hover:shadow-[0_8px_22px_rgba(5,92,90,0.25)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Know More</span>
                <span className="text-sm font-bold">↗</span>
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column: Angled Landscape Truck with Hologram Overlays */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center">
            <ScrollReveal direction="right" delay={200} className="w-full max-w-[720px]">
              <div className="relative w-full drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                <Image
                  src="/images/about-bgsn.png"
                  alt="HunchMind Group AI logistics truck travelling along agricultural highway with smart telemetry"
                  width={960}
                  height={480}
                  priority
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
