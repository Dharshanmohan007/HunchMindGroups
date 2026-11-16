"use client";

import ScrollReveal from "../common/ScrollReveal";

export default function TrustedBusinesses() {
  const partners = [
    {
      name: "Reliance",
      logo: (
        <div className="flex items-center gap-2 group cursor-default">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E6B800] via-[#C59B27] to-[#A37B1B] p-0.5 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full border border-white/50 flex items-center justify-center bg-[#B38728]/20">
              <span className="text-white font-serif font-black text-xs">R</span>
            </div>
          </div>
          <span className="font-serif font-black text-xl text-[#0A2540] tracking-tight group-hover:text-[#005B62] transition-colors">
            Reliance
          </span>
        </div>
      ),
    },
    {
      name: "BigBasket",
      logo: (
        <div className="flex items-center gap-1.5 group cursor-default">
          <span className="w-6 h-6 rounded-[5px] bg-[#E21E26] flex items-center justify-center text-white text-[12px] font-black shadow-xs group-hover:scale-105 transition-transform">
            bb
          </span>
          <span className="text-lg font-black text-[#111111] tracking-tight group-hover:text-[#005B62] transition-colors">
            big<span className="text-[#84C225]">basket</span>
          </span>
        </div>
      ),
    },
    {
      name: "Ninjacart",
      logo: (
        <div className="flex items-center gap-1.5 group cursor-default">
          <span className="w-6 h-6 rounded-full bg-[#FF4C00] flex items-center justify-center text-white text-[10px] font-black shadow-xs group-hover:scale-105 transition-transform">
            ⚡
          </span>
          <span className="text-lg font-black text-[#111111] tracking-tight group-hover:text-[#FF4C00] transition-colors">
            Ninjacart
          </span>
        </div>
      ),
    },
    {
      name: "D-Mart",
      logo: (
        <div className="flex items-center gap-1 group cursor-default">
          <span className="text-xl font-black text-[#008A44] tracking-tight group-hover:scale-105 transition-transform">
            D<span className="text-[#84C225] font-serif text-sm">☘</span>Mart
          </span>
        </div>
      ),
    },
    {
      name: "TATA",
      logo: (
        <div className="flex items-center gap-2 group cursor-default">
          <div className="w-7 h-7 rounded-full bg-[#004C97] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-[2.2]" strokeLinecap="round">
              <path d="M5 15 C8 9 12 7 12 7 C12 7 16 9 19 15" />
              <path d="M7 17 C10 12 12 10 12 10 C12 10 14 12 17 17" />
            </svg>
          </div>
          <span className="text-xl font-black text-[#004C97] tracking-[0.18em] group-hover:text-[#005B62] transition-colors">
            TATA
          </span>
        </div>
      ),
    },
  ];

  return (
    <section id="partners" className="relative z-30 w-full -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 px-4 md:px-8">
      {/* Container width matching max-w-6xl (approx 1140px, overlapping the bottom hero wave matching shared UI) */}
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" delay={150}>
          {/* Exact height (~78px-84px) & rounded corners (rounded-[28px]) matching reference images 1 & 2 */}
          <div className="bg-white rounded-[26px] sm:rounded-[30px] border border-[#E2ECEB] p-4 sm:p-5 md:px-8 md:py-0 min-h-[76px] md:h-[84px] shadow-[0_12px_35px_rgba(0,35,45,0.08)] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            
            {/* Left Label: Two lines "Trusted by" and "Leading Businesses" */}
            <div className="shrink-0 flex flex-col justify-center text-center md:text-left pr-0 md:pr-6 border-b md:border-b-0 pb-3 md:pb-0 border-[#E2ECEB] w-full md:w-auto">
              <span className="text-[13px] font-bold text-[#102638] leading-tight">
                Trusted by
              </span>
              <span className="text-[13px] font-bold text-[#102638] leading-tight">
                Leading Businesses
              </span>
            </div>

            {/* Vertical Divider after label */}
            <div className="hidden md:block h-8 w-[1px] bg-[#E2ECEB]" />

            {/* Logos in a single sleek horizontal row with vertical dividers */}
            <div className="flex-grow flex flex-wrap md:flex-nowrap items-center justify-around sm:justify-between w-full md:w-auto md:pl-6 gap-4 md:gap-0">
              {partners.map((partner, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex items-center justify-center px-2 sm:px-3 lg:px-4">
                    {partner.logo}
                  </div>
                  {/* Vertical separator between logos (except the last one) */}
                  {idx < partners.length - 1 && (
                    <div className="hidden md:block h-7 w-[1px] bg-[#E2ECEB] ml-2 sm:ml-3 lg:ml-4" />
                  )}
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
