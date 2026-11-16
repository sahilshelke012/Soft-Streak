import React from 'react';
import { Building, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

interface AboutSectionProps {
  onOpenDemoModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="about" className="py-20 relative bg-white border-t border-b border-[#EEF0F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#E52430] text-xs font-bold mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Our Heritage & Purpose</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight">
            About <span className="text-[#E52430]">SoftStreak</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#252832]">
            Known as the "Software Street," SoftStreak is a specialized business software venture offered under{' '}
            <strong className="text-[#171923] font-bold">{siteConfig.parentCompany}</strong>.
          </p>
        </div>

        {/* Brand Mission & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          
          {/* Left Column Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[#252832] leading-relaxed">
              <p>
                <strong className="text-[#171923] font-bold">SoftStreak</strong> was established to solve a critical dilemma faced by small and medium-sized business owners: 
                the friction between risky, over-budget custom software development and rigid, overpriced enterprise suites.
              </p>
              <p>
                Operating as a one-stop shop under <strong className="text-[#E52430] font-semibold">{siteConfig.parentCompany}</strong>, SoftStreak delivers turnkey, ready-to-use business software. 
                Whether a company requires an HR management platform, a high-converting sales CRM, automated WhatsApp customer engagement, AI workflow automation, or industry-specific hospital and travel systems, our solutions can be deployed without months of waiting.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F7F8FA] border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#E52430] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#171923] block">Zero Guesswork</span>
                  <span className="text-[11px] text-slate-600 font-medium">See the software in action before you invest.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F7F8FA] border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#E52430] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#171923] block">Tavreville Governance</span>
                  <span className="text-[11px] text-slate-600 font-medium">Backed by parent company security and stability.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F7F8FA] border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#E52430] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#171923] block">Rapid Rollout</span>
                  <span className="text-[11px] text-slate-600 font-medium">Configurable deployments measured in days, not months.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F7F8FA] border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#E52430] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#171923] block">Human Support</span>
                  <span className="text-[11px] text-slate-600 font-medium">Dedicated assistance via WhatsApp and direct channels.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenDemoModal}
                className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#E52430] hover:bg-[#CF1B27] rounded-xl shadow-soft-sm transition"
              >
                Book a Platform Walkthrough
              </button>
              <a
                href={buildWhatsAppUrl("Hello SoftStreak, I would like to learn more about the SoftStreak and Tavreville software catalog.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs sm:text-sm font-bold text-[#171923] bg-[#EEF0F3] hover:bg-slate-200 border border-slate-300 rounded-xl transition"
              >
                Chat With Our Founders
              </a>
            </div>
          </div>

          {/* Right Column: Corporate Overview & Editable Placeholders Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#F7F8FA] rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-soft-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#E52430]" />
                  <span className="text-sm font-bold text-[#171923]">Corporate Entity Details</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#E52430] bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                  Official Record
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Brand Name:
                  </span>
                  <span className="font-extrabold text-[#171923] text-sm">
                    SoftStreak (Software Street)
                  </span>
                  <span className="block text-[11px] text-[#E52430] font-semibold mt-0.5">
                    Essential Software for Every Business
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Parent Organization:
                  </span>
                  <span className="font-bold text-[#171923] text-sm">
                    {siteConfig.parentCompany}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Target Market:
                  </span>
                  <span className="text-[#252832] font-medium">
                    Small and medium-sized business owners, founders, and operational managers.
                  </span>
                </div>

                {/* Explicit Editable Placeholder Box */}
                <div className="p-3.5 rounded-xl bg-white border border-dashed border-slate-300">
                  <span className="text-[10px] font-bold text-[#E52430] uppercase tracking-wider block mb-1">
                    [Editable Section: Executive & Team Profile]
                  </span>
                  <p className="text-[11px] text-slate-500 leading-relaxed italic">
                    "[Insert verified founder bios, company incorporation details, regulatory registrations, and partner certifications here. No unverified claims or synthetic statistics are generated.]"
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
