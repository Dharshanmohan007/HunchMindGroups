"use client";

import ScrollReveal from "../common/ScrollReveal";

export default function FocusAreas() {
  const areas = [
    {
      title: "Supply Chain & Logistics",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#087d78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" />
          <circle cx="7.5" cy="19" r="1.5" />
          <circle cx="17.5" cy="19" r="1.5" />
        </svg>
      ),
    },
    {
      title: "Agri & Food Systems",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#087d78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 21V11m0 4C5 15 4 9 4 5c6 0 9 3 8 10zm0-2c0-6 4-9 8-9 0 5-2 9-8 9z" />
        </svg>
      ),
    },
    {
      title: "Commerce & Consumer",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#087d78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M3 4h2l2 12h11l3-9H6" />
          <circle cx="9" cy="20" r="1" />
          <circle cx="17" cy="20" r="1" />
        </svg>
      ),
    },
    {
      title: "Data & AI Products",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#087d78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "Sustainability & Efficiency",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#087d78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6a6 6 0 0 1 6 6c0 3.3-2.7 6-6 6a6 6 0 0 1-6-6c0-3.3 2.7-6 6-6z" />
          <path d="M12 8v8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="focus" className="py-4 sm:py-6 bg-[#FAFAFA] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Eyebrow: — OUR FOCUS AREAS */}
        <ScrollReveal direction="left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#075e5c] rounded-full inline-block" />
            <span className="text-[10.5px] font-extrabold tracking-[0.2em] text-[#075e5c] uppercase">
              Our Focus Areas
            </span>
          </div>
        </ScrollReveal>

        {/* Clean 5-Item Horizontal Bar with Vertical Dividers */}
        <ScrollReveal direction="up" delay={150}>
          <div className="bg-white border border-[#e0ebea] rounded-[18px] shadow-[0_4px_16px_rgba(4,65,69,0.05)] p-2 sm:p-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-[#dce9e8]">
              {areas.map((area, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-center gap-3 py-2.5 px-3 group hover:bg-[#f8fdfc] transition-colors rounded-xl ${
                    idx >= 4 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <div className="shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <span className="text-xs sm:text-[12.5px] font-bold text-[#122333] leading-tight">
                    {area.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
