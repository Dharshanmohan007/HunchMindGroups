import { Search, ChevronDown, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-soft-ivory/90 backdrop-blur-md border-b border-light-border px-4 md:px-8 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-hm-green to-bright-green rounded flex items-center justify-center">
          <span className="text-white font-serif font-bold text-2xl italic pr-1">H</span>
        </div>
        <div className="leading-none">
          <div className="font-sans font-bold text-xl text-deep-navy">HunchMind</div>
          <div className="text-[10px] text-muted-text mt-1">Ideas into Reality</div>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-deep-navy">
        <a href="#" className="text-hm-green border-b-2 border-hm-green pb-1">Home</a>
        <a href="#businesses" className="hover:text-hm-green transition-colors">Our Businesses</a>
        <a href="#about" className="hover:text-hm-green transition-colors">About Us</a>
        <a href="#insights" className="hover:text-hm-green transition-colors">Insights</a>
        <a href="#careers" className="hover:text-hm-green transition-colors">Careers</a>
        <a href="#contact" className="hover:text-hm-green transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="p-2 hover:bg-light-cream rounded-full transition-colors hidden md:block">
          <Search size={18} className="text-deep-navy" />
        </button>
        <button className="bg-hm-green text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-forest-green transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
          Get in Touch <span className="text-lg leading-none">&rarr;</span>
        </button>
        <div className="hidden md:flex items-center gap-1 text-sm font-medium cursor-pointer border-l border-light-border pl-4">
          EN <ChevronDown size={14} />
        </div>
        <button className="lg:hidden p-2">
          <Menu size={24} className="text-deep-navy" />
        </button>
      </div>
    </nav>
  );
}
