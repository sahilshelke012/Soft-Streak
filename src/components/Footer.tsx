import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onOpenDemoModal: (productName?: string) => void;
}

// Crisp inline SVG components for social media
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onOpenDemoModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171923] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Parent Company Details (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block p-1 bg-white rounded-xl" title="SoftStreak - Essential Software for Every Business">
              <img
                src="/softstreak-logo.png"
                alt="SoftStreak - Essential Software for Every Business"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              SoftStreak is your one-stop shop for ready-to-use business software, CRM, and intelligent automation solutions, 
              offered under <strong className="text-white">{siteConfig.parentCompany}</strong>. Engineered for SMB owners, founders, and managers.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-red-500/10 text-[#E52430] border border-red-500/20">
                A {siteConfig.parentCompany} Venture
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                Essential Software for Every Business
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3 flex items-center gap-2.5">
              <a 
                href={siteConfig.socialLinks.linkedinPlaceholder} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#E52430] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socialLinks.twitterPlaceholder} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#E52430] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socialLinks.facebookPlaceholder} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#E52430] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.socialLinks.instagramPlaceholder} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#E52430] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Product Suite
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#features" className="hover:text-[#E52430] transition-colors">Core CRM & Pipelines</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#E52430] transition-colors">AI Workflow Assistant</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#E52430] transition-colors">Email Tracking & Sharing</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E52430] transition-colors">HR & Payroll Software</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E52430] transition-colors">WhatsApp Business Suite</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E52430] transition-colors">Hospital & Clinic Management</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#E52430] transition-colors">Travel Agency Solution</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Solutions & Teams
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#solutions" className="hover:text-[#E52430] transition-colors">Small Business</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#E52430] transition-colors">Startups & Scaleups</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#E52430] transition-colors">Venture Capital</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#E52430] transition-colors">Sales & Deal Teams</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#E52430] transition-colors">Support & Operations</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#E52430] transition-colors">Hiring & Human Resources</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#E52430] transition-colors">Real Estate & Travel</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Learning & Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Learning & Contact
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#why-us" className="hover:text-[#E52430] transition-colors">SoftStreak University</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#E52430] transition-colors">Live Expert Classes</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#E52430] transition-colors">API Documentation</a>
              </li>
              <li>
                <button
                  onClick={() => onOpenDemoModal('Footer Demo Request')}
                  className="hover:text-[#E52430] transition-colors inline-flex items-center gap-1.5 text-xs text-[#E52430] font-semibold"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book a Live Walkthrough</span>
                </button>
              </li>
              <li className="pt-2 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                Headquarters
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#E52430] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.officeAddressPlaceholder}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{siteConfig.contact.phonePlaceholder}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#E52430] shrink-0" />
                <span>{siteConfig.contact.emailPlaceholder}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} SoftStreak (Software Street). All rights reserved. 
            Offered under <span className="text-white font-bold">{siteConfig.parentCompany}</span>.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition text-xs font-bold"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#E52430]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
