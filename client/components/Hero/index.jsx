import { Play, ArrowRight, Target, Users, Combine, Leaf, Sun } from "lucide-react";
import Image from "next/image";
import Navbar from "../Navbar";

const features = [
  { icon: Target, lines: ["Real Problems", "Real Solutions"], desc: "Pragmatic Execution" },
  { icon: Users, lines: ["Built for People", "and Communities"], desc: "Human Centric" },
  { icon: Combine, lines: ["Blending Tradition", "with Technology"], desc: "Modern & Grounded" },
  { icon: Leaf, lines: ["Sustainable", "Growth"], desc: "Long-term Future" },
  { icon: Sun, lines: ["A Better", "Tomorrow"], desc: "Pan-India Impact" },
];

const Tricolor = ({ className = "" }) => (
  <svg viewBox="0 0 120 20" className={className} fill="none">
    <path d="M2 16 C40 14 80 8 118 2" stroke="#F26522" strokeWidth="3" strokeLinecap="round" />
    <path d="M6 18 C44 16 84 10 118 5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
    <path d="M10 20 C48 18 88 12 118 8" stroke="#087F5B" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const glow = { textShadow: "0 0 10px rgba(255,255,255,0.85), 0 0 3px rgba(255,255,255,0.8)" };

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FBFAF4] flex flex-col overflow-hidden font-sans pt-16 lg:pt-20">
      {/* ---------- Leaf decorations ---------- */}
      {/* top-left corner */}
      <svg viewBox="0 0 120 80" className="absolute top-0 left-0 w-24 lg:w-28 h-16 lg:h-20 z-[60] pointer-events-none" fill="#5FA82E">
        <path d="M0 0 H80 C55 12 28 38 0 66 Z" />
      </svg>

      {/* bottom-left leaves */}
      <svg viewBox="0 0 110 190" className="absolute left-0 bottom-0 w-20 lg:w-24 h-36 lg:h-44 z-30 pointer-events-none" fill="none">
        <path d="M0 190 V20 C40 30 80 80 88 190 Z" fill="#6FA82E" />
        <path d="M0 190 V70 C25 85 50 120 55 190 Z" fill="#4C8A24" opacity=".8" />
        <path d="M0 40 C28 70 45 120 50 190" stroke="#9BC95A" strokeWidth="1.5" opacity=".7" />
      </svg>

      {/* right-edge leaf */}
      <svg viewBox="0 0 60 110" className="hidden lg:block absolute right-0 top-[38%] w-10 h-20 z-30 pointer-events-none" fill="#5FA82E">
        <path d="M60 0 C25 15 5 50 0 110 C40 100 60 70 60 0 Z" />
      </svg>

      <Navbar />

      {/* ---------- Main hero area ---------- */}
      <div className="relative flex flex-col lg:block lg:h-[clamp(520px,38vw,700px)]">
        {/* Scenic image */}
        <div
          className="relative order-2 w-full h-[400px] overflow-hidden lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[68%] z-0"
          style={{ borderTopLeftRadius: "120px 80px" }}
        >
          {/* image with soft fade on the left */}
          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,.55) 12%, #000 32%)",
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,.55) 12%, #000 32%)",
            }}
          >
            <Image
              src="/images/hero_landscape_1790249276559.jpg"
              alt="Indian landscape with city, mountains and highway"
              fill
              priority
              className="object-cover object-[center_35%]"
            />
          </div>

          {/* light top fade so the quote and word list stay readable */}
          <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-white/45 via-white/15 to-transparent pointer-events-none" />

          {/* Bottom cream swoosh + green band */}
          <svg
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
            className="absolute -bottom-2 -left-1 w-[101%] h-[48%] pointer-events-none z-10"
          >
            <path
              d="M-10 330 V110 C150 225 350 290 560 288 C770 285 910 190 1010 40 V330 Z"
              fill="#FBFAF4"
            />
            <path
              d="M470 287 C720 292 905 200 1010 32 L1010 68 C915 215 730 305 520 299 Z"
              fill="#7BA633"
            />
          </svg>

          {/* Solid cream cover strip along bottom edge to prevent any subpixel seam */}
          <div className="absolute inset-x-0 -bottom-1 h-3 bg-[#FBFAF4] pointer-events-none z-10" />

          {/* Handwritten quote */}
          <div className="absolute top-[7%] left-[46%] z-20 -rotate-[10deg]">
            <div
              className="text-[#6B3A1E] text-[28px] lg:text-[clamp(26px,2.6vw,48px)] leading-[1.05] text-center"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, ...glow }}
            >
              Progress<br />Together<br />For a Better<br />Tomorrow
            </div>
            <Tricolor className="w-[5.5rem] lg:w-[7vw] mx-auto -mt-1" />
          </div>

          {/* Word list on the right */}
          <div className="hidden lg:flex absolute top-[15%] right-[4%] z-20 flex-col gap-[0.9vw] pl-[1.6vw] border-l border-[#0B2942]/40 py-1">
            {["People", "Ideas", "Skills", "Opportunities", "Growth"].map((w) => (
              <span
                key={w}
                className="text-[clamp(11px,0.95vw,17px)] tracking-[0.22em] uppercase text-[#0B2942] font-medium"
                style={glow}
              >
                {w}
              </span>
            ))}
            <span className="block w-[5vw] h-px bg-[#0B2942]/40 mt-2" />
          </div>

          {/* Solutions for a Smarter India (sits on the cream area) */}
          <div className="absolute bottom-[3%] right-[2.5%] z-20 -rotate-[20deg]">
            <div
              className="text-[#087F5B] text-[24px] lg:text-[clamp(22px,2.3vw,42px)] leading-[1.05] text-center"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
            >
              Solutions<br />for a Smarter<br />India
            </div>
            <Tricolor className="w-20 lg:w-[6vw] mx-auto" />
          </div>
        </div>

        {/* Left content */}
        <div className="relative order-1 z-20 w-full px-5 md:px-14 pt-8 pb-8 lg:absolute lg:inset-0 lg:flex lg:items-center lg:pt-0 lg:pb-[2vw] lg:pl-[6.5vw] lg:pr-0">
          <div className="w-full lg:w-[44%]">
            <p className="text-[12px] lg:text-[clamp(11px,0.95vw,17px)] tracking-[0.32em] uppercase text-[#53616B] mb-3 font-medium">
              HunchMind Group
            </p>

            <h1
              className="text-[46px] sm:text-[56px] lg:text-[clamp(44px,4.1vw,80px)] leading-[1.05] text-[#0B2942] font-bold tracking-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ideas into<br />
              a Brighter<br />
              <span className="text-[#0A6B47]">Tomorrow</span>
            </h1>

            <p className="text-[#2F3E4A] text-[16px] lg:text-[clamp(15px,1.3vw,24px)] leading-relaxed mb-8">
              A portfolio of businesses built to solve real-world
              <br className="hidden lg:block" /> problems through technology, craftsmanship
              <br className="hidden lg:block" /> and practical solutions.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#businesses"
                className="group bg-[#0A6B47] text-white px-7 py-4 rounded-xl text-[14px] lg:text-[clamp(13px,1.05vw,18px)] font-semibold flex items-center gap-3 hover:bg-[#08583a] transition-colors shadow-md"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>

              <button className="flex items-center gap-3 group cursor-pointer">
                <span className="w-12 h-12 lg:w-[3.4vw] lg:h-[3.4vw] lg:min-w-12 lg:min-h-12 rounded-full border border-[#0B2942] bg-white flex items-center justify-center group-hover:border-[#0A6B47] transition-colors">
                  <Play size={16} className="fill-[#0B2942] text-[#0B2942] ml-0.5 group-hover:fill-[#0A6B47] group-hover:text-[#0A6B47]" />
                </span>
                <span className="text-left leading-tight">
                  <span className="block text-[13px] lg:text-[clamp(12px,1vw,17px)] font-bold text-[#0B2942]">Watch Our Story</span>
                  <span className="block text-[12px] lg:text-[clamp(11px,0.9vw,15px)] text-[#53616B]">2 min</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Feature strip (Floating Card with White BG and Soft Shadow like Image 2) ---------- */}
      <div className="relative z-30 w-full px-4 md:px-8 lg:px-[6vw] pt-14 pb-14">
        <div className="max-w-7xl mx-auto bg-white rounded-[28px] md:rounded-[36px] border border-[#E5DED0]/80 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.09)] transition-shadow duration-300">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E5DED0]/80">
            {features.map(({ icon: Icon, lines, desc }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center px-3 py-2 group cursor-default transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#087F5B]/10 flex items-center justify-center mb-3 group-hover:bg-[#087F5B] transition-all duration-300 shadow-xs">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#087F5B] group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform"
                  />
                </div>
                <h3 className="text-[14px] md:text-[15px] font-bold text-[#0B2942] whitespace-pre-line leading-tight group-hover:text-[#087F5B] transition-colors mb-1">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </h3>
                <span className="text-[11px] text-[#65727D] font-medium hidden md:block">
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
