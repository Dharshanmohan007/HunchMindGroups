"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

// Social SVG Icons
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8zm4.2 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-3.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
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
    <footer id="footer" className="relative w-full text-white bg-[#FAFAFA] overflow-hidden">
      
      {/* Asymmetric Flowing Top Wave with Light Cyan Accents on Left & Right Crests matching Image 5 */}
      <div className="w-full overflow-hidden leading-none select-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-9 sm:h-12 md:h-16 lg:h-20 block"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Left Light-Cyan Wave Accent */}
          <path
            d="M 0,26 C 60,12 130,8 210,22 C 160,40 90,52 0,58 Z"
            fill="#65DDE0"
            opacity="0.95"
          />
          {/* Layer 2: Right Light-Cyan Wave Accent */}
          <path
            d="M 1230,52 C 1300,32 1370,18 1440,14 L 1440,40 C 1370,44 1300,56 1230,52 Z"
            fill="#65DDE0"
            opacity="0.95"
          />
          {/* Layer 3: Main Dark Forest Teal Wave Body */}
          <path
            d="M 0,44 C 70,30 150,22 250,30 C 380,40 520,48 720,44 C 940,40 1120,38 1260,46 C 1340,50 1400,38 1440,32 L 1440,70 L 0,70 Z"
            fill="#02383e"
          />
        </svg>
      </div>

      {/* Main Footer Container */}
      <div
        className="w-full text-white pt-6 sm:pt-8 pb-6"
        style={{
          background: "linear-gradient(110deg, #02383e 0%, #004d54 50%, #02383e 100%)",
        }}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14">
          
          {/* Top Grid: Brand | Tagline | Quick Links | Subscribe */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-center pb-8">
            
            {/* Col 1: Brand Logo: Official Variant 2 Light Logo (3 cols) */}
            <div className="lg:col-span-3">
              <a href="/" className="flex items-center group cursor-pointer" aria-label="HunchMind Intelligence Home">
                <img
                  src="/assets/hunchmind-navbar-logo-light.png"
                  alt="HunchMind Intelligence"
                  className="h-9 sm:h-10 w-auto object-contain transform group-hover:scale-[1.02] transition-transform"
                />
              </a>
            </div>

            {/* Col 2: Tagline with Left Divider (3 cols) */}
            <div className="lg:col-span-3 border-l-0 sm:border-l border-white/20 sm:pl-5">
              <p className="text-xs sm:text-[12.5px] text-[#d0e9e7] leading-relaxed font-normal italic">
                AI Products and Solutions for a More Efficient World.
              </p>
            </div>

            {/* Col 3: Quick Links with Left Divider (3 cols) */}
            <div className="lg:col-span-3 border-l-0 lg:border-l border-white/20 lg:pl-6">
              <h4 className="text-xs font-bold text-white tracking-wide mb-2.5">
                Quick Links
              </h4>
              <div className="space-y-1.5 text-xs text-[#d2e8e7]">
                {/* Row 1 */}
                <div className="flex items-center gap-3.5 flex-wrap">
                  <a href="/" className="hover:text-white transition-colors">Home</a>
                  <a href="/about" className="hover:text-white transition-colors">About</a>
                  <a href="/products/hmi-nexus" className="hover:text-white transition-colors">Products</a>
                  <a href="#ecosystem" className="hover:text-white transition-colors">Solutions</a>
                </div>
                {/* Row 2 */}
                <div className="flex items-center gap-3.5 flex-wrap">
                  <a href="#blogs" className="hover:text-white transition-colors">Resources</a>
                  <a href="/about#careers" className="hover:text-white transition-colors">Careers</a>
                  <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>
              </div>
            </div>

            {/* Col 4: Subscribe for Updates (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-white tracking-wide mb-2.5">
                Subscribe for Updates
              </h4>

              {subscribed ? (
                <div className="p-2 rounded-full bg-white/10 border border-[#9af0e9]/40 text-xs text-[#9af0e9] flex items-center gap-2">
                  <CheckCircle2 size={14} className="shrink-0" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative w-full">
                  <div className="flex items-center bg-[#022a2e]/70 border border-white/25 rounded-full pl-3.5 pr-1 py-1 focus-within:border-[#65DDE0] transition-colors">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-transparent text-xs text-white placeholder-white/50 outline-none flex-grow min-w-0 pr-2"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="w-7 h-7 rounded-full bg-[#65DDE0] hover:bg-[#88f3f0] text-[#02383e] flex items-center justify-center transition-colors shrink-0 cursor-pointer shadow-xs"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 transform -rotate-12 translate-x-px">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </button>
                  </div>
                  {error && (
                    <p className="text-[10px] text-red-300 mt-1 pl-2">{error}</p>
                  )}
                </form>
              )}
            </div>

          </div>

          {/* Bottom Row: Copyright + Legal Policy Links + Social Media Icons */}
          <div className="border-t border-white/20 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#cce4e2] gap-3">
            {/* Copyright */}
            <div>
              © 2026 HunchMind Group. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-white/80">
              <a
                href="https://www.linkedin.com/in/hunchmind-contact-undefined-607123451/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HunchMind on LinkedIn"
                className="hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/hunchmind.intelligence?utm_source=qr&evlk=dHRuczJzcXQwbnZy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HunchMind on Instagram"
                className="hover:text-white transition-colors"
              >
                <InstagramIcon on className="w-4 h-4" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HunchMind on X"
                className="hover:text-white transition-colors"
              >
                <XTwitterIcon className="w-3.5 h-3.5" />
              </a> */}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
