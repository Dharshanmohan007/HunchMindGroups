"use client";

import { useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Building2,
  Briefcase,
  Handshake,
  HelpCircle,
  ChevronDown,
  Check,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

const INQUIRY_OPTIONS = [
  {
    id: "company",
    label: "Company / Enterprise Solutions",
    desc: "AI engines, supply chain intelligence & platform integration",
    icon: Building2,
  },
  {
    id: "career",
    label: "Career / Join Our Team",
    desc: "Engineering, product management, research & operations",
    icon: Briefcase,
  },
  {
    id: "partnership",
    label: "Partnership & Ecosystem",
    desc: "Retail hypermarket, mandi networks & fleet collaboration",
    icon: Handshake,
  },
  {
    id: "general",
    label: "General Inquiry",
    desc: "Press, analyst briefings & other conversations",
    icon: HelpCircle,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const dropdownRef = useRef(null);

  // Close custom dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (minimum 2 characters).";
    }

    const cleanPhone = formData.phone.replace(/[\s\(\)\-\.]/g, "");
    if (!cleanPhone || cleanPhone.length < 10 || !/^\+?[0-9]{10,15}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.purpose) {
      newErrors.purpose = "Please select an inquiry category (Company or Career).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please write a message of at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSelectPurpose = (option) => {
    handleChange("purpose", option.label);
    setDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

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
          phone: "",
          email: "",
          purpose: "",
          message: "",
        });
      } else {
        setSubmitError(
          data.message || "Failed to submit inquiry. Please try again or email us directly."
        );
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setSubmitError(
        "Network connection issue. Please check your internet or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedOption = INQUIRY_OPTIONS.find((opt) => opt.label === formData.purpose);
  const SelectedIcon = selectedOption ? selectedOption.icon : Building2;

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA] relative border-t border-[#E2ECEB]/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Context & Direct Contact Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal direction="left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF8F7] text-[11px] font-bold tracking-[0.25em] text-[#005B62] mb-3 uppercase w-fit">
                <Sparkles size={12} className="text-[#087D83]" />
                <span>Contact Us</span>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#102638] font-bold tracking-tight leading-[1.15] mb-4">
                Let&apos;s Build the Future of{" "}
                <span className="text-[#005B62]">Intelligent Commerce.</span>
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-[15px] text-[#536573] leading-relaxed mb-8 font-normal">
                Whether you are exploring enterprise AI integration for your supply chain, seeking an ecosystem partnership, or eager to join our fast-growing teams, we look forward to connecting with you.
              </p>

              {/* Key Contact Channels Box */}
              <div className="space-y-3.5 bg-white rounded-2xl p-5 sm:p-6 border border-[#E2ECEB] shadow-[0_4px_20px_rgba(0,35,45,0.04)]">
                {/* Email Box */}
                <a
                  href="mailto:hunchmindintelligence@gmail.com"
                  className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F7FAFA] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#DFF8F7] text-[#005B62] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={18} strokeWidth={2.2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-[#536573] uppercase tracking-wider">
                      Direct Email Inquiry
                    </span>
                    <span className="text-sm font-semibold text-[#102638] group-hover:text-[#005B62] transition-colors break-all">
                      hunchmind.contact@gmail.com
                    </span>
                  </div>
                </a>

                {/* Response Speed */}
                <div className="flex items-center gap-3.5 px-3 py-2 text-xs text-[#536573]">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="font-semibold text-[#102638] block">
                      Fast Turnaround Time
                    </span>
                    <span className="text-[11px] text-[#536573]">
                      Our team typically responds within 24 business hours.
                    </span>
                  </div>
                </div>

                {/* Operations & Presence */}
                <div className="flex items-center gap-3.5 px-3 py-2 text-xs text-[#536573]">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="font-semibold text-[#102638] block">
                      Pan-India Operations
                    </span>
                    <span className="text-[11px] text-[#536573]">
                      Active across key agricultural, logistics & retail corridors.
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean, Polished Contact Form Card */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal direction="right" delay={150}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E2ECEB] shadow-[0_16px_45px_rgba(0,35,45,0.06)] relative overflow-hidden">
                
                {submitSuccess ? (
                  <div className="py-10 sm:py-12 text-center flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#DFF8F7] text-[#005B62] flex items-center justify-center mb-5 animate-pulse-subtle shadow-xs">
                      <CheckCircle2 size={36} strokeWidth={2.5} />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#102638] font-bold mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#536573] max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you for contacting HunchMind Group. Your details have been sent to{" "}
                      <span className="font-semibold text-[#005B62]">
                        hunchmindintelligence@gmail.com
                      </span>
                      . Our team will review your message and reply promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className="inline-flex items-center gap-2 bg-[#005B62] hover:bg-[#00474F] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-all cursor-pointer"
                    >
                      <span>Send Another Inquiry</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    
                    <div className="mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#102638] font-bold tracking-tight">
                        Send Us an Inquiry
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#536573] mt-1">
                        Fill in your details below and our leadership team will connect with you.
                      </p>
                    </div>

                    {submitError && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2.5">
                        <AlertCircle size={16} className="shrink-0 text-red-500" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    {/* Name & Phone in 2 Columns on Tablet/Desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-[#102638] mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <div className="absolute left-3.5 text-[#536573] pointer-events-none">
                            <User size={16} />
                          </div>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            placeholder="John Doe"
                            className={`w-full bg-[#F7FAFA] border ${
                              errors.name ? "border-red-400 focus:border-red-500" : "border-[#E2ECEB] focus:border-[#005B62]"
                            } rounded-xl py-2.5 pl-10 pr-3 text-xs sm:text-[13px] text-[#102638] placeholder-[#536573]/60 focus:bg-white focus:outline-none transition-all shadow-2xs`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-[11px] text-red-500 mt-1 pl-1 flex items-center gap-1">
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-semibold text-[#102638] mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <div className="absolute left-3.5 text-[#536573] pointer-events-none">
                            <Phone size={16} />
                          </div>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder="+91 98765 43210"
                            className={`w-full bg-[#F7FAFA] border ${
                              errors.phone ? "border-red-400 focus:border-red-500" : "border-[#E2ECEB] focus:border-[#005B62]"
                            } rounded-xl py-2.5 pl-10 pr-3 text-xs sm:text-[13px] text-[#102638] placeholder-[#536573]/60 focus:bg-white focus:outline-none transition-all shadow-2xs`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-[11px] text-red-500 mt-1 pl-1 flex items-center gap-1">
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-semibold text-[#102638] mb-1.5">
                        Email Address <span className="text-[#536573] font-normal text-[11px]">(Optional but recommended)</span>
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 text-[#536573] pointer-events-none">
                          <Mail size={16} />
                        </div>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="you@company.com"
                          className={`w-full bg-[#F7FAFA] border ${
                            errors.email ? "border-red-400 focus:border-red-500" : "border-[#E2ECEB] focus:border-[#005B62]"
                          } rounded-xl py-2.5 pl-10 pr-3 text-xs sm:text-[13px] text-[#102638] placeholder-[#536573]/60 focus:bg-white focus:outline-none transition-all shadow-2xs`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 pl-1 flex items-center gap-1">
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* CUSTOM DROPDOWN: Company or Career */}
                    <div ref={dropdownRef} className="relative">
                      <label className="block text-xs font-semibold text-[#102638] mb-1.5">
                        Inquiry Category <span className="text-red-500">*</span>
                      </label>

                      {/* Dropdown Trigger Button */}
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`w-full bg-[#F7FAFA] border ${
                          errors.purpose ? "border-red-400" : dropdownOpen ? "border-[#005B62] bg-white ring-2 ring-[#005B62]/10" : "border-[#E2ECEB]"
                        } rounded-xl py-2.5 px-3.5 text-left flex items-center justify-between transition-all cursor-pointer shadow-2xs`}
                        aria-haspopup="listbox"
                        aria-expanded={dropdownOpen}
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <div className="w-6 h-6 rounded-lg bg-[#DFF8F7] text-[#005B62] flex items-center justify-center shrink-0">
                            <SelectedIcon size={14} />
                          </div>
                          <span className={`text-xs sm:text-[13px] truncate ${formData.purpose ? "text-[#102638] font-medium" : "text-[#536573]/60 font-normal"}`}>
                            {formData.purpose || "Select Company or Career inquiry"}
                          </span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`text-[#536573] shrink-0 transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-[#005B62]" : ""}`}
                        />
                      </button>

                      {/* Dropdown Menu Popup */}
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-[#E2ECEB] shadow-[0_12px_30px_rgba(0,35,45,0.12)] z-30 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                          {INQUIRY_OPTIONS.map((option) => {
                            const IconComponent = option.icon;
                            const isSelected = formData.purpose === option.label;
                            return (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => handleSelectPurpose(option)}
                                className={`w-full p-2.5 rounded-xl text-left flex items-start gap-3 transition-colors cursor-pointer ${
                                  isSelected
                                    ? "bg-[#DFF8F7]/60 text-[#005B62]"
                                    : "hover:bg-[#F7FAFA] text-[#102638]"
                                }`}
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                                  isSelected ? "bg-[#005B62] text-white" : "bg-[#F0F5F5] text-[#536573]"
                                }`}>
                                  <IconComponent size={16} />
                                </div>
                                <div className="flex-grow">
                                  <div className="text-xs sm:text-[13px] font-semibold leading-tight">
                                    {option.label}
                                  </div>
                                  <div className="text-[11px] text-[#536573] mt-0.5 leading-snug">
                                    {option.desc}
                                  </div>
                                </div>
                                {isSelected && (
                                  <Check size={16} className="text-[#005B62] shrink-0 mt-1" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {errors.purpose && (
                        <p className="text-[11px] text-red-500 mt-1 pl-1 flex items-center gap-1">
                          <span>{errors.purpose}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-[#102638]">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <span className="text-[11px] text-[#536573]/70">
                          {formData.message.length} characters
                        </span>
                      </div>
                      <div className="relative">
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          placeholder="Tell us about your requirements, company profile, or role of interest..."
                          className={`w-full bg-[#F7FAFA] border ${
                            errors.message ? "border-red-400 focus:border-red-500" : "border-[#E2ECEB] focus:border-[#005B62]"
                          } rounded-xl p-3.5 text-xs sm:text-[13px] text-[#102638] placeholder-[#536573]/60 focus:bg-white focus:outline-none transition-all shadow-2xs resize-none`}
                        />
                      </div>
                      {errors.message && (
                        <p className="text-[11px] text-red-500 mt-1 pl-1 flex items-center gap-1">
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full inline-flex items-center justify-center gap-2.5 bg-[#005B62] hover:bg-[#00474F] text-white text-xs sm:text-sm font-semibold py-3 sm:py-3.5 px-6 rounded-full shadow-[0_6px_20px_rgba(0,91,98,0.22)] hover:shadow-[0_10px_25px_rgba(0,91,98,0.32)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            <span>Sending to hunchmindintelligence@gmail.com...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Message</span>
                            <Send size={15} className="text-[#65DDE0] transform -rotate-12 translate-x-0.5" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Subtle privacy & destination footnote */}
                    <p className="text-[11px] text-center text-[#536573]/80 pt-1">
                      Inquiries are delivered to{" "}
                      <span className="font-semibold text-[#102638]">
                        hunchmindintelligence@gmail.com
                      </span>
                      . Your information is kept strictly confidential.
                    </p>

                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
