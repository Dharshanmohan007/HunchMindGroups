import { Search, ChevronDown, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="relative z-50 w-full px-4 md:px-10 py-5 flex items-center justify-between">
      {/* Left Logo */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-9 h-9 bg-gradient-to-br from-[#087F5B] to-[#12A078] rounded flex items-center justify-center shadow-sm">
          <span className="text-white font-serif font-bold text-2xl italic pr-0.5">H</span>
        </div>
        <div className="leading-[1.1]">
          <div className="font-sans font-bold text-[22px] tracking-tight text-[#0B2942]">HunchMind</div>
          <div className="text-[10px] text-[#53616B] font-medium tracking-wide uppercase">Ideas into Reality</div>
        </div>
      </div>
      
      {/* Middle Navigation */}
      <div className="hidden lg:flex items-center gap-9 text-[15px] font-medium text-[#0B2942]">
        <a href="#" className="text-[#087F5B] border-b-[3px] border-[#087F5B] pb-1">Home</a>
        <a href="#businesses" className="hover:text-[#087F5B] transition-colors pb-1">Our Businesses</a>
        <a href="#about" className="hover:text-[#087F5B] transition-colors pb-1">About Us</a>
        <a href="#insights" className="hover:text-[#087F5B] transition-colors pb-1">Insights</a>
        <a href="#careers" className="hover:text-[#087F5B] transition-colors pb-1">Careers</a>
        <a href="#contact" className="hover:text-[#087F5B] transition-colors pb-1">Contact</a>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <button className="hidden md:flex items-center justify-center w-10 h-10 bg-[#EFECE0] hover:bg-[#E5E1CD] rounded-full transition-colors text-[#53616B]">
          <Search size={18} strokeWidth={2.5} />
        </button>
        
        {/* Get in Touch */}
        <button className="bg-[#087F5B] text-white px-5 py-2.5 rounded-md text-[15px] font-medium flex items-center gap-2 hover:bg-[#066347] transition-all shadow-md">
          Get in Touch <span className="text-lg leading-none font-light ml-0.5">&rarr;</span>
        </button>
        
        {/* Language Dropdown */}
        <div className="hidden md:flex items-center gap-1 text-[14px] font-bold text-[#0B2942] cursor-pointer pl-2">
          EN <ChevronDown size={16} strokeWidth={2.5} />
        </div>
        
        {/* Mobile Menu */}
        <button className="lg:hidden p-2 text-[#0B2942]">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
