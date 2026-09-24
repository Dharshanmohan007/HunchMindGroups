import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#041a15] text-white relative overflow-hidden pt-20 pb-8">
      {/* Decorative leaf shapes */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-hm-green/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-hm-green/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-hm-green to-bright-green rounded flex items-center justify-center">
                <span className="text-white font-serif font-bold text-2xl italic pr-1">H</span>
              </div>
              <div className="leading-none">
                <div className="font-sans font-bold text-xl text-white">HunchMind</div>
                <div className="text-[10px] text-white/60 mt-1">Ideas into Reality</div>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-8 max-w-sm leading-relaxed">
              A portfolio of businesses built for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hm-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hm-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hm-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-6 text-white/90 tracking-wide text-sm uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#businesses" className="hover:text-white transition-colors">Our Businesses</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="lg:col-span-3">
            <h4 className="font-bold mb-6 text-white/90 tracking-wide text-sm uppercase">Our Businesses</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">HunchMind Intelligence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HMI Nexus</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI & Data Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HunchMind Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Future Ventures</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-bold mb-6 text-white/90 tracking-wide text-sm uppercase">Contact</h4>
            <ul className="space-y-5 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-hm-green" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-hm-green" />
                <a href="mailto:hello@hunchmind.in" className="hover:text-white transition-colors">hello@hunchmind.in</a>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-hm-green" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="shrink-0 text-hm-green" />
                <span>Mon - Sat, 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>© 2026 HunchMind. All rights reserved.</div>
          <div className="flex gap-3">
            <span>Ideas</span> • <span>People</span> • <span>Progress</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
