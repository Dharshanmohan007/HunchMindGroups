"use client";

import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 ${
        scrolled 
          ? "bg-[#FBFAF4]/95 backdrop-blur-md shadow-sm border-b border-[#E5DED0]/70 py-2 px-5 md:px-14" 
          : "bg-[#FBFAF4]/90 backdrop-blur-xs py-2.5 px-5 md:px-14 border-b border-[#E5DED0]/30"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="shrink-0 group-hover:scale-105 transition-transform">
            <defs>
              <linearGradient id="hm-g" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0" stopColor="#0A7A4F" />
                <stop offset="1" stopColor="#5FA82E" />
              </linearGradient>
            </defs>
            <path d="M4 6h9v10h8V6h9v10c0 2 1 3 3 3h3v15h-9V24h-6v10h-9V16H4z" fill="url(#hm-g)" transform="translate(0 1) scale(.95)" />
            <path d="M22 6c6 0 12 4 12 10" stroke="#5FA82E" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
          <div className="leading-tight">
            <div className="font-sans font-bold text-[19px] md:text-[20px] tracking-tight text-[#0B2942]">HunchMind</div>
            <div className="text-[10px] text-[#53616B] font-medium leading-none">Ideas into Reality</div>
          </div>
        </a>

        {/* Middle Navigation */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13.5px] font-medium text-[#0B2942]">
          <a href="#" className="text-[#0A6B47] border-b-2 border-[#0A6B47] pb-0.5 font-semibold">Home</a>
          <a href="#businesses" className="hover:text-[#0A6B47] transition-colors pb-0.5">Our Businesses</a>
          <a href="#about" className="hover:text-[#0A6B47] transition-colors pb-0.5">About Us</a>
          <a href="#insights" className="hover:text-[#0A6B47] transition-colors pb-0.5">Insights</a>
          <a href="#careers" className="hover:text-[#0A6B47] transition-colors pb-0.5">Careers</a>
          <a href="#contact" className="hover:text-[#0A6B47] transition-colors pb-0.5">Contact</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden md:flex items-center justify-center w-8 h-8 bg-[#EFEDE4] hover:bg-[#E6E3D6] rounded-lg transition-colors text-[#0B2942] cursor-pointer"
          >
            <Search size={15} strokeWidth={2.2} />
          </button>

          <a
            href="#contact"
            className="bg-[#0A6B47] text-white px-4 py-2 rounded-lg text-[13px] font-semibold flex items-center gap-1.5 hover:bg-[#08583a] transition-all shadow-xs hover:shadow-sm cursor-pointer"
          >
            <span>Get in Touch</span>
            <span className="text-sm leading-none">&rarr;</span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-[12px] font-bold text-[#0B2942] cursor-pointer pl-2">
            EN <ChevronDown size={14} strokeWidth={2.5} />
          </div>

          <button className="lg:hidden p-1.5 text-[#0B2942] cursor-pointer" aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
