import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About Us', 'Service', 'Project', 'Blog'];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-white shadow-md">
             <img src="/assets/gss-logo.jpg" alt="GSS Logo" className="w-full h-full object-cover" />
          </div>
          <div className={`font-heading font-bold tracking-tight leading-none ${isScrolled ? 'text-brand-darkBlue' : 'text-white'}`}>
            <span className="block text-lg">GRAM SUDHAR</span>
            <span className="block text-sm opacity-90">SAMITI</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-medium hover:text-brand-blue transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-slate-100'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className={`group flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium transition-all hover:shadow-md ${
              isScrolled 
                ? 'border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-brand-blue'
            }`}
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-slate-900 py-8 px-6 md:hidden border-t border-slate-100 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-lg font-heading font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-lg font-heading font-medium text-brand-blue mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};