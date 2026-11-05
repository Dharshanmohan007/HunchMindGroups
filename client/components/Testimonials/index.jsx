"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Their AI insights helped us optimize our logistics operations and reduce freight turnaround times significantly across southern corridors.",
      name: "Rajesh Sundaram",
      role: "Operations Director, FreightLogix",
      image: "/images/avatars/avatar_1.jpg",
      rating: 5,
      tag: "AI & Supply Chain"
    },
    {
      text: "Professional, reliable and deeply committed. Our residential home was completed with immaculate craftsmanship and right on schedule.",
      name: "Ananya Krishnan",
      role: "Architect & Homeowner, Coimbatore",
      image: "/images/avatars/avatar_2.jpg",
      rating: 5,
      tag: "Construction"
    },
    {
      text: "A genuinely forward-thinking team with a clear vision for India's future. The predictive models and execution precision are unmatched.",
      name: "Dr. Vikramaditya Rao",
      role: "Supply Chain Strategist & Consultant",
      image: "/images/avatars/avatar_3.jpg",
      rating: 5,
      tag: "Logistics Strategy"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-[#F7F4EA]/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087F5B]/10 text-xs font-bold tracking-[0.2em] text-[#087F5B] mb-4 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B]"></span>
              What People Say
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#0B2942] tracking-tight">
              Trusted by Clients and Communities
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-[#E5DED0] bg-white flex items-center justify-center hover:bg-[#087F5B] hover:text-white hover:border-[#087F5B] transition-all text-[#0B2942] shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-[#E5DED0] bg-white flex items-center justify-center hover:bg-[#087F5B] hover:text-white hover:border-[#087F5B] transition-all text-[#0B2942] shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between h-full relative group hover:shadow-xl hover:-translate-y-1.5 ${
                i === activeIndex 
                  ? 'border-[#087F5B]/40 shadow-lg ring-1 ring-[#087F5B]/20' 
                  : 'border-[#E5DED0] shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-[#F26522]">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" className="text-[#F26522]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#087F5B] bg-[#087F5B]/10 px-2.5 py-1 rounded-full">
                    {t.tag}
                  </span>
                </div>

                <Quote className="text-[#087F5B]/20 mb-4 group-hover:text-[#087F5B]/40 transition-colors" size={36} />
                
                <p className="text-[#0B2942] font-serif text-lg leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#F0EBE1]">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#087F5B]/30 shrink-0 shadow-md">
                  <Image 
                    src={t.image} 
                    alt={t.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="font-sans font-bold text-[#0B2942] flex items-center gap-1.5 text-base">
                    <span>{t.name}</span>
                    <CheckCircle2 size={15} className="text-[#087F5B] shrink-0" />
                  </div>
                  <div className="text-xs text-[#65727D] font-medium mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
