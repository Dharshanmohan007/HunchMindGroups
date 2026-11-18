"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

// Social Icons as SVGs
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const XTwitterIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer id="footer" className="relative w-full bg-[#00363C] text-white overflow-hidden">
      
      {/* Top Wave Border of Footer (Exact multi-layered wave matching reference image 2) */}
      <div className="relative w-full overflow-hidden leading-none z-10 pointer-events-none -mt-[1px] bg-[#FAFAFA]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-22 preserve-3d"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Left corner light cyan wave accent */}
          <path
            d="M 0,32 C 80,48 160,65 240,75 L 0,80 Z"
            fill="#D0F8F5"
            opacity="0.9"
          />

          {/* Layer 2: Right corner light cyan wave accent */}
          <path
            d="M 1220,78 C 1320,60 1390,45 1440,24 L 1440,80 Z"
            fill="#D0F8F5"
            opacity="0.85"
          />

          {/* Layer 3: Main Dark Teal Wave Body (rising on left crest, dipping slightly in center, rising to right edge) */}
          <path
            d="M 0,78 C 80,68 140,54 220,54 C 360,54 520,68 760,70 C 1000,72 1180,66 1320,52 C 1380,45 1415,36 1440,32 L 1440,80 L 0,80 Z"
            fill="#00363C"
          />
        </svg>
      </div>

      {/* Main Footer Content Container (Matching reference image 2 layout) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-6 md:pt-8 pb-8 relative z-20">
        
        {/* Main Row: Logo/Tagline | Quick Links | Subscribe Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-center justify-between pb-8">
          
          {/* Col 1: Logo & Tagline (Full width on tablet, 5 cols on desktop) */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 w-full">
            {/* Logo Mark + Brand Name */}
            <a href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 36 36" fill="none" className="w-full h-full transform group-hover:scale-105 transition-transform">
                  <path d="M4 29V7L14 20L22 10L32 23V29" stroke="#65DDE0" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 20L22 10L32 23" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="leading-tight flex flex-col justify-center">
                <span className="font-sans font-bold text-lg tracking-tight text-white leading-none">
                  HunchMind
                </span>
                <span className="font-sans font-bold text-base tracking-tight text-white leading-tight">
                  Group
                </span>
              </div>
            </a>

            {/* Vertical Divider */}
            <div className="hidden sm:block h-8 w-[1px] bg-white/20" />

            {/* Tagline */}
            <div className="text-xs sm:text-[13px] text-white/90 leading-snug font-normal w-full sm:max-w-[240px]">
              AI Businesses for a More Efficient World.
            </div>
          </div>

          {/* Col 2: Quick Links (Expanded across solutions & platforms) */}
          <div className="md:col-span-1 lg:col-span-5 w-full">
            <h4 className="text-xs font-semibold text-white tracking-wide mb-3">
              Solutions & Quick Links
            </h4>
            <div className="space-y-2 text-xs sm:text-[13px] font-medium text-white/85 w-full">
              {/* Row 1: Core Navigation */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full">
                <a href="/" className="hover:text-[#65DDE0] transition-colors">Home</a>
                <a href="/#about" className="hover:text-[#65DDE0] transition-colors">About</a>
                <a href="/products/hmi-nexus" className="hover:text-[#65DDE0] transition-colors text-[#65DDE0] font-semibold">HMI Nexus</a>
                <a href="/solutions/ai-logistics-intelligence" className="hover:text-[#65DDE0] transition-colors">AI Logistics</a>
              </div>
              {/* Row 2: Solution Landing Pages */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full">
                <a href="/solutions/cold-chain-logistics" className="hover:text-[#65DDE0] transition-colors">Cold Chain</a>
                <a href="/solutions/supply-chain-visibility-iot" className="hover:text-[#65DDE0] transition-colors">IoT Visibility</a>
                <a href="/solutions/predictive-freight-routing" className="hover:text-[#65DDE0] transition-colors">Freight Routing</a>
                <a href="/solutions/agricultural-supply-chain" className="hover:text-[#65DDE0] transition-colors">Agri Supply</a>
              </div>
              {/* Row 3: Proof Points & Inquiries */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/70 text-[11px] sm:text-xs pt-1">
                <a href="/#partners" className="hover:text-[#65DDE0] transition-colors">Clients</a>
                <a href="/#impact" className="hover:text-[#65DDE0] transition-colors">Achievements</a>
                <a href="/#blogs" className="hover:text-[#65DDE0] transition-colors">Blogs</a>
                <a href="#contact" className="hover:text-[#65DDE0] transition-colors">Contact</a>
              </div>
            </div>
          </div>

          {/* Col 3: Subscribe for Updates (1 col on tablet, 3 cols on desktop) */}
          <div className="md:col-span-1 lg:col-span-3 w-full">
            <h4 className="text-xs font-semibold text-white tracking-wide mb-3">
              Subscribe for Updates
            </h4>

            {subscribed ? (
              <div className="p-2.5 rounded-full bg-white/10 border border-[#65DDE0]/40 text-xs text-[#65DDE0] flex items-center gap-2">
                <CheckCircle2 size={15} className="shrink-0" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative w-full">
                <div className="relative flex items-center bg-[#00262B]/70 backdrop-blur-md rounded-full border border-white/20 h-10 sm:h-11 pl-4 pr-1.5 w-full focus-within:border-[#65DDE0] transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-transparent text-xs text-white placeholder-white/50 focus:outline-none flex-grow pr-2 w-full"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to updates"
                    className="w-8 h-8 rounded-full bg-[#65DDE0] hover:bg-white text-[#00363C] flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-xs group"
                  >
                    {/* Paper airplane / telegram send icon */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 transform -rotate-12 translate-x-px group-hover:scale-110 transition-transform">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
                {error && (
                  <p className="text-[11px] text-red-300 mt-1 pl-3">{error}</p>
                )}
              </form>
            )}
          </div>

        </div>

        {/* Bottom Row: Copyright + Legal + Social Icons */}
        <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 w-full text-center sm:text-left">
          
          {/* Copyright */}
          <div>
            © 2026 HunchMind Group. All rights reserved.
          </div>

          {/* Legal Links & Socials (Evenly balanced across mobile) */}
          <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 flex-wrap w-full sm:w-auto">
            <div className="flex items-center justify-center gap-3 text-white/70">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3.5 pl-0 sm:pl-4 sm:border-l border-white/15">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-[#65DDE0] transition-colors cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white hover:text-[#65DDE0] transition-colors cursor-pointer"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-white hover:text-[#65DDE0] transition-colors cursor-pointer"
              >
                <XTwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
}
