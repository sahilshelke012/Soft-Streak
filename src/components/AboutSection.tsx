import React from 'react';
import { Building, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

interface AboutSectionProps {
  onOpenDemoModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="about" className="py-24 relative bg-navy-900 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>Our Heritage & Purpose</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">Softstreak</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Known as the "Software Street," Softstreak is a specialized venture offered under{' '}
            <strong className="text-white font-semibold">{siteConfig.parentCompany}</strong>.
          </p>
        </div>

        {/* Brand Mission & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">Softstreak</strong> was established to solve a critical dilemma faced by small and medium-sized business owners: 
                the friction between risky, over-budget custom software development and rigid, overpriced enterprise suites.
              </p>
              <p>
                Operating as a one-stop shop under <strong className="text-purple-300">{siteConfig.parentCompany}</strong>, Softstreak delivers turnkey, ready-to-use business software. 
                Whether a company requires an HR management platform, a high-converting sales CRM, automated WhatsApp customer engagement, AI workflow automation, or industry-specific hospital and travel systems, our solutions can be deployed without months of waiting.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-navy-950/70 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Zero Guesswork</span>
                  <span className="text-[11px] text-slate-300">See the software in action before you invest.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-navy-950/70 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Tavreville Governance</span>
                  <span className="text-[11px] text-slate-300">Backed by parent company security and stability.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-navy-950/70 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Rapid Rollout</span>
                  <span className="text-[11px] text-slate-300">Configurable deployments measured in days, not months.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-navy-950/70 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Human Support</span>
                  <span className="text-[11px] text-slate-300">Dedicated assistance via WhatsApp and direct channels.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenDemoModal}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-glow-sm transition"
              >
                Book a Platform Walkthrough
              </button>
              <a
                href={buildWhatsAppUrl("Hello Softstreak, I would like to learn more about the Softstreak and Tavreville software catalog.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition"
              >
                Chat With Our Founders
              </a>
            </div>
          </div>

          {/* Right Column: Corporate Overview & Editable Placeholders Card */}
          <div className="lg:col-span-5">
            <div className="bg-navy-950/90 rounded-2xl p-6 sm:p-7 border border-purple-500/30 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-bold text-white">Corporate Entity Details</span>
                </div>
                <span className="text-[10px] uppercase font-semibold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded">
                  Official Record
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-navy-900 border border-white/5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Brand Name:
                  </span>
                  <span className="font-semibold text-white text-sm">
                    Softstreak (Software Street)
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-navy-900 border border-white/5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Parent Organization:
                  </span>
                  <span className="font-semibold text-purple-300 text-sm">
                    {siteConfig.parentCompany}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-navy-900 border border-white/5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Target Market:
                  </span>
                  <span className="text-slate-200">
                    Small and medium-sized business owners, founders, and operational managers.
                  </span>
                </div>

                {/* Explicit Editable Placeholder Box */}
                <div className="p-3.5 rounded-lg bg-navy-900/90 border border-purple-500/20">
                  <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider block mb-1">
                    [Editable Section: Executive & Team Profile]
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed italic">
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
