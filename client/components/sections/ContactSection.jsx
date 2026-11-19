"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2, ChevronDown, Check } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

const INQUIRY_TYPES = [
  "AI Products & Solutions",
  "Supply Chain & Logistics",
  "Data & Predictive Analytics",
  "Venture & Investment",
  "Research & Innovation",
  "General Inquiry",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    purpose: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.purpose) {
      errs.purpose = "Please select an inquiry type.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = "Please enter a message (at least 5 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          purpose: "",
          message: "",
        });
      } else {
        setSubmitError(
          data.message || "Failed to dispatch inquiry. Please verify your connection or email us directly."
        );
      }
    } catch (err) {
      console.error("Form error:", err);
      setSubmitError("Network connection issue. Please check your internet or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-6 sm:py-8 md:py-10 bg-[#FAFAFA] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-14">

        {/* Mint / Aqua Rounded Background Container with Organic Flowing Wave Ribbons */}
        <div
          className="rounded-[28px] sm:rounded-[36px] border border-[#d8ebe7] p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(4,65,69,0.05)] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #eef9f7 0%, #f7fcfa 50%, #e2f5f1 100%)",
          }}
        >
          {/* Flowing Organic Mint & Aqua Wave Ribbons in Background matching Image 2 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <svg
              viewBox="0 0 1200 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full object-cover"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Gradient 1: Flowing Soft Mint / Aqua Ribbon */}
                <linearGradient id="mintFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8de4d7" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#bdf1e8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#96e7dc" stopOpacity="0.75" />
                </linearGradient>
                {/* Gradient 2: Bright Aqua accent Ribbon */}
                <linearGradient id="mintFlow2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7ae0d1" stopOpacity="0.7" />
                  <stop offset="60%" stopColor="#c5f4ec" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#6fd8c9" stopOpacity="0.65" />
                </linearGradient>
                {/* Gradient 3: Soft Top-Right accent */}
                <linearGradient id="mintFlow3" x1="50%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#b4f0e7" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#e3f9f5" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Main Organic Ribbon: Sweeps up from bottom-left across center and under card */}
              <path
                d="M 0,260 C 140,210 260,340 440,290 C 580,250 680,180 840,240 C 980,290 1080,220 1200,260 L 1200,480 L 0,480 Z"
                fill="url(#mintFlow1)"
              />
              {/* Secondary Sweeping Ribbon */}
              <path
                d="M 0,350 C 180,290 320,410 520,330 C 700,260 840,360 1040,300 C 1120,280 1170,310 1200,320 L 1200,480 L 0,480 Z"
                fill="url(#mintFlow2)"
              />
              {/* Top-Right Soft Wave Accent */}
              <path
                d="M 700,0 C 850,70 1020,40 1200,100 L 1200,0 Z"
                fill="url(#mintFlow3)"
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Heading, Subtitle & Direct Contact Details */}
            <div className="lg:col-span-5 text-left">
              <ScrollReveal direction="left">
                {/* Eyebrow: — GET IN TOUCH */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-[2px] bg-[#075e5c] rounded-full inline-block" />
                  <span className="text-[10.5px] font-extrabold tracking-[0.2em] text-[#075e5c] uppercase">
                    Get In Touch
                  </span>
                </div>

                {/* Main Heading with italic teal emphasis */}
                <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-[38px] text-[#122333] leading-[1.1] tracking-tight mb-3">
                  Let&apos;s Build the Next<br />
                  <span className="italic font-serif font-normal text-[#087e78]">
                    AI Solution
                  </span> Together.
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13px] text-[#465b5b] leading-relaxed mb-6 sm:mb-8 max-w-[420px] font-normal">
                  Have a project, partnership or investment opportunity? We&apos;d love to hear from you.
                </p>

                {/* Horizontal Contact Information Row matching Image 2 & Image 5 */}
                <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-1">
                  {/* Email */}
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#005B62] shrink-0" />
                    <div className="leading-tight">
                      <div className="text-[11px] font-bold text-[#122333]">Email</div>
                      <a href="mailto:hunchmind.contact@gmail.com" className="text-xs text-[#465b5b] hover:text-[#005B62] font-medium transition-colors">
                        hunchmind.contact@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#005B62] shrink-0" />
                    <div className="leading-tight">
                      <div className="text-[11px] font-bold text-[#122333]">Phone</div>
                      <a href="tel:+919876543210" className="text-xs text-[#465b5b] hover:text-[#005B62] font-medium transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#005B62] shrink-0" />
                    <div className="leading-tight">
                      <div className="text-[11px] font-bold text-[#122333]">Location</div>
                      <div className="text-xs text-[#465b5b] font-medium">
                        Bengaluru, India
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: White Form Card */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={200}>
                <div className="bg-white rounded-[24px] border border-[#dfebe9] p-5 sm:p-7 shadow-[0_10px_28px_rgba(4,65,69,0.08)]">

                  {/* Success Alert */}
                  {submitSuccess && (
                    <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                      <div>
                        <strong>Message Sent Successfully!</strong> Thank you for reaching out. Our leadership team will connect with you shortly.
                      </div>
                    </div>
                  )}

                  {/* Error Alert */}
                  {submitError && (
                    <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5">
                      <AlertCircle size={18} className="text-red-600 shrink-0 mt-0.5" />
                      <div className="leading-snug">{submitError}</div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Row 1: Full Name * & Email Address * */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-[#122333] mb-1.5">
                          Full Name <span className="text-[#bf3939]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className={`w-full border rounded-xl px-3.5 py-2.5 text-xs text-[#122333] placeholder-[#8a9b99] bg-white outline-none transition-all ${errors.name
                            ? "border-red-400 bg-red-50/20"
                            : "border-[#d8e5e3] focus:border-[#087d78] focus:ring-2 focus:ring-[#087d78]/15"
                            }`}
                        />
                        {errors.name && (
                          <p className="text-[10px] text-red-600 mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#122333] mb-1.5">
                          Email Address <span className="text-[#bf3939]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className={`w-full border rounded-xl px-3.5 py-2.5 text-xs text-[#122333] placeholder-[#8a9b99] bg-white outline-none transition-all ${errors.email
                            ? "border-red-400 bg-red-50/20"
                            : "border-[#d8e5e3] focus:border-[#087d78] focus:ring-2 focus:ring-[#087d78]/15"
                            }`}
                        />
                        {errors.email && (
                          <p className="text-[10px] text-red-600 mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Company / Organization & Inquiry Type * (Custom Styled Dropdown) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-[#122333] mb-1.5">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Enter your company or organization"
                          className="w-full border border-[#d8e5e3] focus:border-[#087d78] focus:ring-2 focus:ring-[#087d78]/15 rounded-xl px-3.5 py-2.5 text-xs text-[#122333] placeholder-[#8a9b99] bg-white outline-none transition-all"
                        />
                      </div>

                      <div className="relative" ref={dropdownRef}>
                        <label className="block text-[11px] font-bold text-[#122333] mb-1.5">
                          Inquiry Type <span className="text-[#bf3939]">*</span>
                        </label>

                        {/* Custom Dropdown Toggle Button */}
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className={`w-full border rounded-xl px-3.5 py-2.5 text-xs text-left flex items-center justify-between transition-all bg-white cursor-pointer ${errors.purpose
                            ? "border-red-400 bg-red-50/20"
                            : dropdownOpen
                              ? "border-[#087d78] ring-2 ring-[#087d78]/15"
                              : "border-[#d8e5e3] hover:border-[#087d78]"
                            }`}
                        >
                          <span className={formData.purpose ? "text-[#122333] font-semibold" : "text-[#8a9b99]"}>
                            {formData.purpose || "Select an inquiry type"}
                          </span>
                          <ChevronDown
                            size={15}
                            className={`text-[#53636a] transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-[#087d78]" : ""
                              }`}
                          />
                        </button>

                        {/* Custom Styled Dropdown Popup Menu */}
                        {dropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-[#dfebe9] rounded-xl shadow-[0_12px_32px_rgba(4,65,69,0.14)] p-1.5 z-50 animate-in fade-in duration-150">
                            {INQUIRY_TYPES.map((type, idx) => {
                              const isSelected = formData.purpose === type;
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    handleChange("purpose", type);
                                    setDropdownOpen(false);
                                  }}
                                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${isSelected
                                    ? "bg-[#e9f8f5] text-[#087d78] font-bold"
                                    : "text-[#122333] hover:bg-[#f3faf9] hover:text-[#087d78]"
                                    }`}
                                >
                                  <span>{type}</span>
                                  {isSelected && <Check size={14} className="text-[#087d78]" />}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {errors.purpose && (
                          <p className="text-[10px] text-red-600 mt-1">{errors.purpose}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Message * */}
                    <div className="mb-4">
                      <label className="block text-[11px] font-bold text-[#122333] mb-1.5">
                        Message <span className="text-[#bf3939]">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your project, requirement or collaboration..."
                        rows={3}
                        required
                        className={`w-full border rounded-xl p-3.5 text-xs text-[#122333] placeholder-[#8a9b99] bg-white outline-none transition-all resize-y ${errors.message
                          ? "border-red-400 bg-red-50/20"
                          : "border-[#d8e5e3] focus:border-[#087d78] focus:ring-2 focus:ring-[#087d78]/15"
                          }`}
                      />
                      {errors.message && (
                        <p className="text-[10px] text-red-600 mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Bottom Row: Submit Button (Aligned Right with Paper Airplane Icon) */}
                    <div className="flex justify-end pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 bg-[#005B62] hover:bg-[#00474F] disabled:opacity-70 text-white text-[13px] font-semibold px-6 py-2.5 rounded-full shadow-[0_5px_15px_rgba(0,91,98,0.20)] hover:shadow-[0_8px_22px_rgba(0,91,98,0.30)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={15} className="animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 transform -rotate-12">
                              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
