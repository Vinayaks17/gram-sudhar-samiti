import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reusing the Logo for Footer
  const GSSLogoFooter = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#0047AB" />
      <circle cx="50" cy="50" r="38" stroke="white" strokeWidth="3" fill="#0047AB" />
      <text x="50" y="58" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="sans-serif">GSS</text>
    </svg>
  );

  return (
    <footer className="bg-brand-darkBlue text-white pt-24 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Col 1: Address */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-lightBlue mb-6">Contact Us</h4>
            <address className="not-italic text-slate-300 space-y-2 text-sm leading-relaxed">
              <p>Gram Sudhar Samiti,</p>
              <p>Satna, Madhya Pradesh,</p>
              <p>India, 485001</p>
              <p className="mt-4 text-white hover:text-brand-lightBlue transition-colors">(+91) 7672 123 456</p>
              <p className="text-white hover:text-brand-lightBlue transition-colors cursor-pointer">info@gss-india.org</p>
            </address>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-lightBlue mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['About Us', 'Service', 'Project', 'Blog'].map(link => (
                <li key={link}><a href="#" className="text-slate-300 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

           {/* Col 3: Current Projects */}
           <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-lightBlue mb-6">Current Projects</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['Water Revival', 'Organic Seeds', 'Women Skills', 'Rural Health'].map(link => (
                <li key={link}><a href="#" className="text-slate-300 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-lightBlue mb-6">Social Media</h4>
             <ul className="space-y-3 text-sm font-medium">
              {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map(link => (
                <li key={link}><a href="#" className="text-slate-300 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big Text Section */}
        <div className="border-t border-white/10 pt-12 pb-6 flex flex-col lg:flex-row items-end justify-between">
          <div className="w-full lg:w-2/3">
             <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-none mb-4">
               BUILDING <br />
               TOMORROW
             </h2>
             <button 
               onClick={scrollToTop}
               className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-lightBlue hover:text-white transition-colors"
             >
               <ArrowUp className="w-4 h-4" />
               Back to Top
             </button>
          </div>
          <div className="w-full lg:w-1/3 flex justify-end mt-12 lg:mt-0">
             <div className="relative w-40 h-40 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center border-4 border-brand-lightBlue/20 overflow-hidden p-4">
                <GSSLogoFooter />
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs text-slate-400 uppercase tracking-wider">
          <p>&copy; 2024 Gram Sudhar Samiti. All Rights Reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};