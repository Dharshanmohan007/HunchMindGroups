"use client";

import Image from "next/image";
import { Calendar, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function LatestInsights() {
  const blogs = [
    {
      title: "How AI is Transforming Agri Supply Chains",
      desc: "Predictive routing and farm-to-retail cold chain visibility.",
      date: "Oct 20, 2026",
      image: "/images/blog-agriculture.jpg",
      category: "Agri-Tech AI",
      readTime: "4 min read",
      href: "#",
    },
    {
      title: "Optimizing Logistics with Data Intelligence",
      desc: "Real-time IoT telemetry, fleet scheduling and load optimization.",
      date: "Oct 12, 2026",
      image: "/images/blog-warehouse.jpg",
      category: "Supply Chain",
      readTime: "5 min read",
      href: "#",
    },
    {
      title: "The Rise of AI in Commodity Markets",
      desc: "Dynamic farmgate price discovery and market intelligence.",
      date: "Oct 05, 2026",
      image: "/images/blog-analytics.jpg",
      category: "Market Data",
      readTime: "6 min read",
      href: "#",
    },
  ];

  return (
    <section id="blogs" className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF8F7] text-[11px] font-bold tracking-[0.25em] text-[#005B62] mb-2 uppercase">
                <Sparkles size={12} className="text-[#087D83]" />
                <span>From Our Blogs</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#102638] font-bold tracking-tight">
                Latest Insights
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <a
              href="#blogs"
              className="group inline-flex items-center gap-1.5 text-[#005B62] hover:text-[#00474F] font-semibold text-xs sm:text-sm transition-colors pb-0.5 border-b border-transparent hover:border-[#005B62] cursor-pointer"
            >
              <span>View All Blogs</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>

        {/* 3 Horizontal Blog Cards (Compact size, minimized padding and image ratio matching user markup) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {blogs.map((blog, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 120} className="flex justify-center w-full">
              <a
                href={blog.href}
                className="bg-white rounded-[10px] sm:rounded-[10px] overflow-hidden border border-[#E2ECEB] shadow-[0_6px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(0,91,98,0.10)] transition-all duration-400 hover:-translate-y-1.5 flex flex-col h-full w-full sm:max-w-[360px] md:max-w-none mx-auto group cursor-pointer"
              >
                {/* Minimized Image Container Ratio */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/92 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full text-[#005B62] shadow-xs">
                    {blog.category}
                  </div>
                </div>

                {/* Compact Content Area */}
                <div className="p-4 sm:p-4.5 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Date with Calendar icon */}
                    <div className="flex items-center gap-1.5 text-[11px] text-[#536573] font-medium mb-1.5">
                      <Calendar size={13} className="text-[#005B62]" />
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[15px] sm:text-[16px] text-[#102638] font-bold group-hover:text-[#005B62] transition-colors leading-snug line-clamp-2 mb-2">
                      {blog.title}
                    </h3>
                  </div>

                  {/* Description and Arrow Button in a SINGLE LINE */}
                  <div className="flex items-center justify-between gap-3 pt-2 mt-auto border-t border-[#F0F5F5]">
                    <p className="text-xs sm:text-[13px] text-[#536573] leading-snug font-normal line-clamp-2 flex-grow">
                      {blog.desc}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-[#F7FAFA] group-hover:bg-[#005B62] text-[#005B62] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs group-hover:rotate-45">
                      <ArrowUpRight size={15} strokeWidth={2.2} />
                    </div>
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
