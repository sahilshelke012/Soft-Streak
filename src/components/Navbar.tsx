import React, { useState, useEffect } from 'react';
import { MessageSquare, Calendar, Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

interface NavbarProps {
  onOpenDemoModal: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Why Softstreak', href: '#why-us' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 flex items-center justify-center shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
              <span className="font-extrabold text-white text-xl tracking-wider">S</span>
              <div className="absolute -inset-0.5 rounded-xl bg-purple-500/30 blur-sm -z-10 group-hover:bg-purple-500/50 transition"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  Softstreak
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  SaaS
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                Software Street <span className="text-slate-500">•</span> under <span className="text-purple-400 font-semibold">{siteConfig.parentCompany}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-purple-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Enquiry Button */}
            <a
              href={buildWhatsAppUrl("Hello Softstreak, I would like to enquire about your ready-to-use business software.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all hover:scale-105"
              title="Chat with us directly on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>

            {/* Book a Demo Button */}
            <button
              onClick={() => onOpenDemoModal()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-glow-sm hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Demo</span>
              <ArrowRight className="w-3 h-3 text-purple-200" />
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-navy-800 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 border-b border-purple-500/20 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-purple-400 py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={buildWhatsAppUrl("Hello Softstreak, I would like to enquire about your software products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-glow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Demo</span>
              </button>
            </div>
            
            <div className="pt-2 text-center text-xs text-slate-500">
              Offered under {siteConfig.parentCompany}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
