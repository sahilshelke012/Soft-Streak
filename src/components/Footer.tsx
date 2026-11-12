import React from 'react';
import { 
  ArrowUp, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar
} from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';
import { productsData } from '../data/products';

interface FooterProps {
  onOpenDemoModal: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemoModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          
          {/* Column 1 & 2: Brand & Parent Company Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-glow-sm">
                S
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">Softstreak</span>
                <span className="block text-[11px] text-purple-300 font-medium">Software Street</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Softstreak is your one-stop shop for ready-to-use business software and automation solutions, 
              offered under <strong className="text-white font-semibold">{siteConfig.parentCompany}</strong>. Engineered for SMB owners, founders, and managers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                A {siteConfig.parentCompany} Venture
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-navy-800 text-slate-300 border border-white/10">
                Ready-to-Deploy SaaS
              </span>
            </div>

            <div className="pt-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick WhatsApp Assistance &rarr;</span>
              </a>
            </div>
          </div>

          {/* Column 3: 6 Ready-to-Use Software Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Software Catalog
            </h4>
            <ul className="space-y-2 text-xs">
              {productsData.map((prod) => (
                <li key={prod.id}>
                  <a
                    href="#products"
                    className="hover:text-purple-300 transition-colors"
                  >
                    {prod.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Conversion */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Main Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-purple-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-purple-300 transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-purple-300 transition-colors">
                  Why Softstreak
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-300 transition-colors">
                  About Us & Tavreville
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-300 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenDemoModal()}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book a Demo</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Editable Contact & Location Placeholders */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters & Info
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.officeAddressPlaceholder}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{siteConfig.contact.phonePlaceholder}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{siteConfig.contact.emailPlaceholder}</span>
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                [Registration / License No. Placeholder: #000-TAVREVILLE-SOFTPASS]
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Softstreak (Software Street). All rights reserved. 
            Offered under <span className="text-purple-400 font-medium">{siteConfig.parentCompany}</span>.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#home" className="hover:text-slate-300 transition">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/5 transition"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
