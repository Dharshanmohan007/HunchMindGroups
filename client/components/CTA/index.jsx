import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden rounded-t-[40px] md:rounded-t-[80px]">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/cta_landscape_1790249965954.jpg" 
          alt="Indian landscape at dusk" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="text-xs font-bold tracking-[0.2em] text-hm-green mb-6 uppercase">
          Let&apos;s Work Together
        </div>
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
          Let&apos;s Build What&apos;s Next
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Have a project, partnership or idea? We&apos;d love to hear from you.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-hm-green text-white px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-3 hover:bg-bright-green transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Contact Us <span>&rarr;</span>
          </button>
          <button className="w-full sm:w-auto bg-white text-deep-navy px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-3 hover:bg-light-cream transition-all shadow-lg hover:-translate-y-0.5">
            <MessageCircle size={20} className="text-[#25D366]" /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
