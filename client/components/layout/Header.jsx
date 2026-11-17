"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, ArrowUpRight, Menu, X, Cpu, Layers, Sprout, FlaskConical } from "lucide-react";

// Dynamic Logo Configuration: Update or replace imageSrc / values when the final logo asset is provided
export const LOGO_CONFIG = {
  useImage: false, // Set to true when an image file (e.g., /images/logo.png or /images/logo.svg) is provided
  imageSrc: "/images/logo.png",
  altText: "HunchMind Group Logo",
  companyName: "HunchMind",
  companySubtitle: "Group",
  tagline: "Ideas into Reality",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const products = [
    {
      name: "HunchMind Intelligence",
      desc: "AI & Data Solutions for Business Impact",
      icon: Cpu,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      href: "#ecosystem",
    },
    {
      name: "HMI Nexus",
      desc: "Supply Chain Intelligence for Agri & Perishables",
      icon: Sprout,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      href: "#ecosystem",
    },
    {
      name: "HunchMind Ventures",
      desc: "Incubating & Scaling Next-Gen Businesses",
      icon: Layers,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      href: "#ecosystem",
    },
    {
      name: "HunchMind Labs",
      desc: "Research & Innovation in Applied AI",
      icon: FlaskConical,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      href: "#ecosystem",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Main Navbar Bar (Solid clean white background matching reference image 4) */}
      <div
        className={`w-full bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-[0_4px_25px_rgba(0,0,0,0.08)] py-3 px-4 md:px-10"
            : "py-3.5 sm:py-4 px-4 md:px-10"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Dynamic Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group cursor-pointer" aria-label={LOGO_CONFIG.altText}>
            {LOGO_CONFIG.useImage ? (
              <div className="relative h-8 sm:h-9 w-auto min-w-[32px] flex items-center">
                <Image
                  src={LOGO_CONFIG.imageSrc}
                  alt={LOGO_CONFIG.altText}
                  width={140}
                  height={36}
                  priority
                  className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            ) : (
              <>
                <div className="w-8 sm:w-9 h-8 sm:h-9 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 36 36" fill="none" className="w-full h-full transform group-hover:scale-105 transition-transform">
                    {/* Stylized geometric M monogram in teal and cyan gradient */}
                    <path d="M4 29V7L14 20L22 10L32 23V29" stroke="#005B62" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 20L22 10L32 23" stroke="#65DDE0" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="leading-tight flex flex-col justify-center">
                  <span className="font-sans font-bold text-lg sm:text-[19px] tracking-tight text-[#102638] leading-none">
                    {LOGO_CONFIG.companyName}
                  </span>
                  <span className="font-sans font-bold text-base sm:text-[17px] tracking-tight text-[#102638] leading-tight">
                    {LOGO_CONFIG.companySubtitle}
                  </span>
                </div>
              </>
            )}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 lg:gap-8 text-[14px] font-medium text-[#102638]">
            {/* Home with active teal indicator underline */}
            <a
              href="#"
              className="text-[#005B62] font-semibold relative py-1 border-b-2 border-[#005B62] transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-[#005B62] transition-colors py-1"
            >
              About
            </a>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center gap-1 hover:text-[#005B62] transition-colors py-1 cursor-pointer font-medium"
              >
                <span>Products</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${productsOpen ? "rotate-180 text-[#005B62]" : ""}`}
                />
              </button>

              {/* Products Dropdown Menu */}
              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-[#E2ECEB] p-2.5 z-50 animate-in fade-in duration-200">
                  <div className="text-[11px] font-bold tracking-wider text-[#536573] uppercase px-3 py-1.5 border-b border-[#E2ECEB]/60 mb-1">
                    Group Businesses & Platforms
                  </div>
                  <div className="space-y-1">
                    {products.map((p, idx) => {
                      const Icon = p.icon;
                      return (
                        <a
                          key={idx}
                          href={p.href}
                          onClick={() => setProductsOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7FAFA] transition-colors group cursor-pointer"
                        >
                          <div className={`w-8 h-8 rounded-lg ${p.bgColor} ${p.color} flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#102638] group-hover:text-[#005B62] transition-colors">
                              {p.name}
                            </div>
                            <div className="text-[11px] text-[#536573] leading-snug">
                              {p.desc}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#partners"
              className="hover:text-[#005B62] transition-colors py-1"
            >
              Clients
            </a>

            <a
              href="#focus"
              className="hover:text-[#005B62] transition-colors py-1"
            >
              Network
            </a>

            <a
              href="#impact"
              className="hover:text-[#005B62] transition-colors py-1"
            >
              Achievements
            </a>

            <a
              href="#blogs"
              className="hover:text-[#005B62] transition-colors py-1"
            >
              Blogs
            </a>
          </nav>

          {/* Right: Contact Us Button */}
          {/* <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-[#00474F] hover:bg-[#005B62] text-white text-[13.5px] font-semibold px-6 py-2.5 rounded-full shadow-[0_4px_15px_rgba(0,71,79,0.25)] hover:shadow-[0_6px_20px_rgba(0,91,98,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowUpRight size={15} />
            </a>
          </div> */}

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#102638] hover:bg-[#F7FAFA] transition-colors cursor-pointer"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Subtle Concave Wave Bottom Border of the Navbar (matching shared UI design, not too long) */}
      <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none -mt-[1px]">
        <svg
          viewBox="0 0 1440 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-1.5 sm:h-2 md:h-2.5 preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Gentle, shallow concave curve matching the shared UI design */}
          <path
            d="M 0,0 L 1440,0 L 1440,2 C 1220,12 1020,14 860,14 L 580,14 C 420,14 220,12 0,2 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#E2ECEB] shadow-2xl px-6 py-6 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4 text-base font-semibold text-[#102638]">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#005B62] font-bold"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#005B62]"
            >
              About
            </a>
            <div className="py-2 border-y border-[#E2ECEB]/60 space-y-2">
              <span className="text-xs uppercase font-bold text-[#536573] tracking-wider">
                Products
              </span>
              <div className="pl-3 space-y-2 text-sm font-medium">
                {products.map((p, idx) => (
                  <a
                    key={idx}
                    href={p.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block hover:text-[#005B62]"
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#partners"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#005B62]"
            >
              Clients
            </a>
            <a
              href="#focus"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#005B62]"
            >
              Network
            </a>
            <a
              href="#impact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#005B62]"
            >
              Achievements
            </a>
            <a
              href="#blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#005B62]"
            >
              Blogs
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-[#00474F] text-white py-3 rounded-full mt-2 font-semibold"
            >
              <span>Contact Us</span>
              <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      )}

    </header>
  );
}
