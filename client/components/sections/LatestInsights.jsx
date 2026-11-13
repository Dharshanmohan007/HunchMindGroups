"use client";

import Image from "next/image";
import { Calendar, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function LatestInsights() {
  const blogs = [
    {
      title: "How AI is Transforming Agri Supply Chains",
      date: "Oct 20, 2026",
      image: "/images/blog-agriculture.jpg",
      category: "Agri-Tech AI",
      readTime: "4 min read",
      href: "#",
    },
    {
      title: "Optimizing Logistics with Data Intelligence",
      date: "Oct 12, 2026",
      image: "/images/blog-warehouse.jpg",
      category: "Supply Chain",
      readTime: "5 min read",
      href: "#",
    },
    {
      title: "The Rise of AI in Commodity Markets",
      date: "Oct 05, 2026",
      image: "/images/blog-analytics.jpg",
      category: "Market Data",
      readTime: "6 min read",
      href: "#",
    },
  ];

  return (
    <section id="blogs" className="py-20 md:py-32 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFF8F7] text-xs font-bold tracking-[0.25em] text-[#005B62] mb-3 uppercase">
                <Sparkles size={13} className="text-[#087D83]" />
                <span>From Our Blogs</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#102638] font-bold tracking-tight">
                Latest Insights
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <a
              href="#blogs"
              className="group inline-flex items-center gap-2 text-[#005B62] hover:text-[#00474F] font-semibold text-sm md:text-base transition-colors pb-1 border-b-2 border-transparent hover:border-[#005B62] cursor-pointer"
            >
              <span>View All Blogs</span>
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>

        {/* 3 Horizontal Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 150}>
              <a
                href={blog.href}
                className="bg-white rounded-[26px] overflow-hidden border border-[#E2ECEB] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,91,98,0.12)] transition-all duration-400 hover:-translate-y-2 flex flex-col h-full group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full text-[#005B62] shadow-xs">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Date with Calendar icon */}
                    <div className="flex items-center gap-2 text-xs text-[#536573] font-medium mb-3">
                      <Calendar size={14} className="text-[#005B62]" />
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg sm:text-xl text-[#102638] font-bold group-hover:text-[#005B62] transition-colors leading-snug line-clamp-2 mb-4">
                      {blog.title}
                    </h3>
                  </div>

                  {/* Circular Arrow Button Footer */}
                  <div className="pt-4 border-t border-[#F0F5F5] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#005B62] group-hover:underline">
                      Read Article
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#F7FAFA] group-hover:bg-[#005B62] text-[#005B62] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:rotate-45">
                      <ArrowUpRight size={16} strokeWidth={2.2} />
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
