"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowUpRight, Menu, X, Cpu, Layers, Sprout, FlaskConical, Snowflake, Navigation, Radio } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const productsRef = useRef(null);
  const solutionsRef = useRef(null);
  const resourcesRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setSolutionsOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const solutions = [
    {
      name: "AI Logistics Intelligence",
      desc: "Enterprise decision engines & algorithms",
      href: "/solutions/ai-logistics-intelligence",
      icon: Cpu,
    },
    {
      name: "Cold Chain Logistics",
      desc: "Real-time perishable spoilage reduction",
      href: "/solutions/cold-chain-logistics",
      icon: Snowflake,
    },
    {
      name: "Supply Chain Visibility & IoT",
      desc: "End-to-end fleet & sensor telemetry",
      href: "/solutions/supply-chain-visibility-iot",
      icon: Radio,
    },
    {
      name: "Predictive Freight Routing",
      desc: "Route optimization & fuel reduction",
      href: "/solutions/predictive-freight-routing",
      icon: Navigation,
    },
    {
      name: "Agricultural Supply Chain",
      desc: "Farmgate-to-retail commodity tracking",
      href: "/solutions/agricultural-supply-chain",
      icon: Sprout,
    },
  ];

  const products = [
    {
      name: "HMI Nexus Platform",
      desc: "Supply chain intelligence for agri & perishables",
      href: "/products/hmi-nexus",
      icon: Sprout,
    },
    {
      name: "HunchMind Intelligence",
      desc: "Applied AI decision systems for enterprise",
      href: "/about",
      icon: Cpu,
    },
    {
      name: "HunchMind Ventures",
      desc: "Incubating & scaling next-gen businesses",
      href: "/about",
      icon: Layers,
    },
    {
      name: "HunchMind Labs",
      desc: "Applied research, R&D and experimentation",
      href: "/about",
      icon: FlaskConical,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="relative w-full h-[68px] sm:h-[72px]">
        
        {/* Exact Flared Concave Curved SVG Background matching Image 1 */}
        <div className="absolute inset-0 pointer-events-none drop-shadow-[0_4px_18px_rgba(5,50,55,0.06)]">
          <svg
            viewBox="0 0 1440 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,0 L 1440,0 L 1440,38 C 1390,62 1340,76 1280,76 L 160,76 C 100,76 50,62 0,38 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>

        {/* Navbar Content */}
        <div className="relative z-10 max-w-[1360px] mx-auto h-full px-5 sm:px-8 lg:px-14 flex items-center justify-between">
          
          {/* Official Brand Logo: Variant 2 NAV BAR LOGO from Brand Sheet */}
          <a
            href="/"
            className="flex items-center group cursor-pointer py-1"
            aria-label="HunchMind Intelligence Home"
          >
            <img
              src="/assets/hunchmind-navbar-logo.png"
              alt="HunchMind Intelligence"
              className="h-9 sm:h-10 w-auto object-contain transform group-hover:scale-[1.02] transition-transform"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13.5px] font-semibold text-[#122333]">
            {/* Home with active teal indicator underline */}
            <a
              href="/"
              className="text-[#087d78] font-bold relative py-1 transition-colors group flex flex-col items-center"
            >
              <span>Home</span>
              <span className="w-6 h-[2.5px] bg-[#087d78] rounded-full mt-0.5" />
            </a>

            <a
              href="/about"
              className="hover:text-[#087d78] transition-colors py-1"
            >
              About
            </a>

            {/* Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                type="button"
                onClick={() => {
                  setProductsOpen(!productsOpen);
                  setSolutionsOpen(false);
                  setResourcesOpen(false);
                }}
                className="flex items-center gap-1 hover:text-[#087d78] transition-colors py-1 cursor-pointer font-semibold"
              >
                <span>Products</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${productsOpen ? "rotate-180 text-[#087d78]" : ""}`}
                />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-[0_15px_40px_rgba(4,65,69,0.12)] border border-[#e0ebea] p-2 z-50 animate-in fade-in duration-150">
                  <div className="text-[10px] font-extrabold tracking-wider text-[#53636a] uppercase px-3 py-1.5 border-b border-[#e0ebea]/70 mb-1">
                    Businesses & Platforms
                  </div>
                  {products.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#f3faf9] transition-colors group cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#e9f8f5] text-[#087d78] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon size={14} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#122333] group-hover:text-[#087d78] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[10.5px] text-[#53636a] leading-tight">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                type="button"
                onClick={() => {
                  setSolutionsOpen(!solutionsOpen);
                  setProductsOpen(false);
                  setResourcesOpen(false);
                }}
                className="flex items-center gap-1 hover:text-[#087d78] transition-colors py-1 cursor-pointer font-semibold"
              >
                <span>Solutions</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180 text-[#087d78]" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl shadow-[0_15px_40px_rgba(4,65,69,0.12)] border border-[#e0ebea] p-2 z-50 animate-in fade-in duration-150">
                  <div className="text-[10px] font-extrabold tracking-wider text-[#53636a] uppercase px-3 py-1.5 border-b border-[#e0ebea]/70 mb-1">
                    Industry Solutions
                  </div>
                  {solutions.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#f3faf9] transition-colors group cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#e9f8f5] text-[#087d78] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon size={14} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#122333] group-hover:text-[#087d78] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[10.5px] text-[#53636a] leading-tight">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                type="button"
                onClick={() => {
                  setResourcesOpen(!resourcesOpen);
                  setProductsOpen(false);
                  setSolutionsOpen(false);
                }}
                className="flex items-center gap-1 hover:text-[#087d78] transition-colors py-1 cursor-pointer font-semibold"
              >
                <span>Resources</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180 text-[#087d78]" : ""}`}
                />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-[0_15px_40px_rgba(4,65,69,0.12)] border border-[#e0ebea] p-2 z-50 animate-in fade-in duration-150">
                  <a
                    href="#blogs"
                    onClick={() => setResourcesOpen(false)}
                    className="block p-2 rounded-xl hover:bg-[#f3faf9] text-xs font-bold text-[#122333] hover:text-[#087d78] transition-colors"
                  >
                    <div>Latest Insights &amp; Blogs</div>
                    <div className="text-[10.5px] text-[#53636a] font-normal">Technology &amp; supply chain articles</div>
                  </a>
                  <a
                    href="/about"
                    onClick={() => setResourcesOpen(false)}
                    className="block p-2 rounded-xl hover:bg-[#f3faf9] text-xs font-bold text-[#122333] hover:text-[#087d78] transition-colors mt-1"
                  >
                    <div>About HunchMind Group</div>
                    <div className="text-[10.5px] text-[#53636a] font-normal">Company mission &amp; architecture</div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="/about#careers"
              className="hover:text-[#087d78] transition-colors py-1"
            >
              Careers
            </a>

            <a
              href="#contact"
              className="hover:text-[#087d78] transition-colors py-1"
            >
              Contact
            </a>
          </nav>

          {/* Right Action: Pill Button Contact Us ↗ */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 bg-[#005B62] hover:bg-[#00474F] text-white text-[12.5px] sm:text-[13px] font-semibold px-5 sm:px-6 py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,91,98,0.22)] hover:shadow-[0_6px_20px_rgba(0,91,98,0.32)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Contact Us</span>
              <span className="text-sm font-bold">↗</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-[#087d78] hover:bg-[#f3faf9] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white mt-1 mx-4 p-4 rounded-2xl shadow-xl border border-[#e0ebea] space-y-2 relative z-50">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-bold text-[#087d78] bg-[#f3faf9]"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#122333] hover:bg-[#f3faf9]"
            >
              About
            </a>
            <a
              href="/products/hmi-nexus"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#122333] hover:bg-[#f3faf9]"
            >
              Products &amp; Platforms (HMI Nexus)
            </a>
            <div className="px-3 py-1 text-xs font-bold text-[#53636a] uppercase">
              Solutions
            </div>
            <div className="grid grid-cols-1 gap-1 pl-3">
              {solutions.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 rounded-lg text-xs font-medium text-[#122333] hover:bg-[#f3faf9] flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight size={12} className="text-[#087d78]" />
                </a>
              ))}
            </div>
            <a
              href="#blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#122333] hover:bg-[#f3faf9]"
            >
              Resources &amp; Blogs
            </a>
            <a
              href="/about#careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#122333] hover:bg-[#f3faf9]"
            >
              Careers
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#122333] hover:bg-[#f3faf9]"
            >
              Contact
            </a>
          </div>
        )}

      </div>
    </header>
  );
}
