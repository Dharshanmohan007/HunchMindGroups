"use client";

import ScrollReveal from "../common/ScrollReveal";

export default function TrustedBusinesses() {
  const capabilities = [
    {
      titleTop: "Sustainable",
      titleBottom: "Supply Chains",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 text-[#005B62] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
    },
    {
      titleTop: "AI & Machine",
      titleBottom: "Learning",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 text-[#005B62] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </svg>
      ),
    },
    {
      titleTop: "Data Platforms",
      titleBottom: "& Analytics",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 text-[#005B62] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 12 12 17 22 12" />
          <polyline points="2 17 12 22 22 17" />
        </svg>
      ),
    },
    {
      titleTop: "Scalable &",
      titleBottom: "Secure Solutions",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 text-[#005B62] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <circle cx="12" cy="13.5" r="1.5" />
          <path d="M12 15v2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="capabilities" className="relative z-30 w-full -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 px-4 md:px-8">
      {/* Container width matching max-w-6xl (approx 1140px, overlapping the bottom hero wave matching reference UI) */}
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" delay={150}>
          {/* Sleek white floating pill card matching reference image */}
          <div className="bg-white rounded-[26px] sm:rounded-[30px] border border-[#E2ECEB] p-4 sm:p-5 md:px-8 md:py-0 min-h-[76px] md:h-[84px] shadow-[0_12px_35px_rgba(0,35,45,0.08)] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            {capabilities.map((item, idx) => (
              <div key={idx} className="flex-1 w-full md:w-auto flex items-center justify-between md:justify-center">
                <div className="flex-1 flex items-center justify-start md:justify-center gap-3.5 px-3 lg:px-4 py-2 md:py-0 group cursor-default">
                  <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[13.5px] sm:text-[14px] font-bold text-[#102638] tracking-tight leading-snug group-hover:text-[#005B62] transition-colors">
                      {item.titleTop}
                    </span>
                    <span className="text-[13.5px] sm:text-[14px] font-bold text-[#102638] tracking-tight leading-snug group-hover:text-[#005B62] transition-colors">
                      {item.titleBottom}
                    </span>
                  </div>
                </div>

                {/* Vertical separator between items (hidden on mobile and after last item) */}
                {idx < capabilities.length - 1 && (
                  <div className="hidden md:block h-8 w-[1px] bg-[#E2ECEB] shrink-0" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
