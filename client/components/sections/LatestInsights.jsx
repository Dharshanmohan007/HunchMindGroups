"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function LatestInsights() {
  const blogs = [
    {
      title: "How AI Is Transforming Agri Supply Chains",
      date: "Oct 20, 2026",
      image: "/assets/agriculture-crops.webp",
      alt: "Agricultural crops in farm fields",
      href: "/solutions/agricultural-supply-chain",
    },
    {
      title: "Optimizing Logistics with Data Intelligence",
      date: "Oct 12, 2026",
      image: "/assets/smart-warehouse.webp",
      alt: "Smart warehouse shelves and logistics storage",
      href: "/solutions/ai-logistics-intelligence",
    },
    {
      title: "The Rise of AI in Commodity Markets",
      date: "Oct 05, 2026",
      image: "/assets/analytics-laptop.webp",
      alt: "Analytics dashboard on a laptop for commodity markets",
      href: "/solutions/supply-chain-visibility-iot",
    },
  ];

  return (
    <section id="blogs" className="pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 bg-[#FAFAFA] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Section Heading: Eyebrow + Title + View All Blogs link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-7 gap-3">
          <ScrollReveal direction="left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#075e5c] rounded-full inline-block" />
                <span className="text-[10.5px] font-extrabold tracking-[0.2em] text-[#075e5c] uppercase">
                  From Our Blogs
                </span>
              </div>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-[33px] text-[#122333] tracking-tight leading-tight">
                Latest Insights
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <a
              href="#blogs"
              className="inline-flex items-center gap-1 text-[#087d78] hover:text-[#055a56] font-bold text-xs sm:text-[13.5px] transition-colors pb-1 cursor-pointer group"
            >
              <span>View All Blogs</span>
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>

        {/* 3 Horizontal Blog Cards in 1 Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {blogs.map((blog, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 120} className="h-full">
              <a
                href={blog.href}
                className="bg-white border border-[#e2eceb] rounded-[18px] overflow-hidden shadow-[0_5px_15px_rgba(5,65,68,0.06)] hover:shadow-[0_12px_28px_rgba(5,65,68,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-row h-full group cursor-pointer"
              >
                {/* Left Image (approx 38% width) */}
                <div className="relative w-[38%] min-h-[110px] overflow-hidden bg-[#e9f8f5] shrink-0">
                  <Image
                    src={blog.image}
                    alt={blog.alt}
                    fill
                    sizes="(max-width: 768px) 38vw, 15vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>

                {/* Right Content Area */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-grow min-w-0">
                  {/* Blog Title */}
                  <h3 className="font-sans font-extrabold text-xs sm:text-[13px] text-[#122333] group-hover:text-[#087d78] transition-colors line-clamp-2 leading-snug mb-2">
                    {blog.title}
                  </h3>

                  {/* Date & Circular Arrow */}
                  <div className="flex items-center justify-between mt-auto pt-1">
                    <div className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] text-[#62716f] font-medium">
                      {/* Calendar Icon */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5 text-[#087d78]">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{blog.date}</span>
                    </div>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#bde7e4] bg-white group-hover:bg-[#087d78] text-[#087d78] group-hover:text-white flex items-center justify-center text-xs font-bold transition-all duration-200 shrink-0 ml-2">
                      →
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
