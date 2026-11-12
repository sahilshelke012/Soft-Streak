import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Layers, 
  Headphones, 
  Check, 
  X, 
  Building2
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const WhySoftstreak: React.FC = () => {
  const pillars = [
    {
      title: 'Ready-to-Use Architecture',
      description: 'Skip months of uncertain custom coding. Our software suites are pre-engineered with industry best practices and ready to configure for your business quickly.',
      icon: Zap,
      accent: 'text-amber-400',
      badge: 'Immediate Value'
    },
    {
      title: 'Offered Under Tavreville',
      description: `Backed by the stability, governance, and technology standards of ${siteConfig.parentCompany}, ensuring dependable operational continuity and reliable updates.`,
      icon: ShieldCheck,
      accent: 'text-purple-400',
      badge: 'Parent Assurance'
    },
    {
      title: 'Engineered for SMB Scalability',
      description: 'Priced and architected specifically for small and medium-sized business owners who need lean, high-impact systems without enterprise bloat.',
      icon: Layers,
      accent: 'text-cyan-400',
      badge: 'Zero Bloat'
    },
    {
      title: 'Dedicated Human Support',
      description: 'Get direct onboarding assistance, personalized product walkthroughs, and fast response via WhatsApp or email whenever your team needs help.',
      icon: Headphones,
      accent: 'text-emerald-400',
      badge: 'Fast Support'
    }
  ];

  const comparisonRows = [
    {
      factor: 'Time to Deployment',
      traditional: '3 to 9 months of uncertain development',
      softstreak: 'Ready to configure and deploy in days',
      isAdvantage: true
    },
    {
      factor: 'Budget & Cost Risk',
      traditional: 'Scope creep, unexpected developer billing',
      softstreak: 'Predictable, SMB-friendly investment',
      isAdvantage: true
    },
    {
      factor: 'Architecture & Testing',
      traditional: 'Untested initial codebases prone to bugs',
      softstreak: 'Battle-tested software standards under Tavreville',
      isAdvantage: true
    },
    {
      factor: 'Ongoing Support & SLA',
      traditional: 'Freelancer / agency handoff abandonment',
      softstreak: 'Direct onboarding & responsive ongoing assistance',
      isAdvantage: true
    }
  ];

  return (
    <section id="why-us" className="py-24 relative bg-navy-900 border-t border-b border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>The Software Street Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Business Leaders Choose{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
              Softstreak
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We bridge the gap between expensive custom agency software and generic SaaS tools that lack local support.
          </p>
        </div>

        {/* 4 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-navy-950/70 p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-navy-800/80 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className={`w-6 h-6 ${pillar.accent}`} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 rounded-full">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-navy-950/80 border border-purple-500/25 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              Market Comparison
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Building From Scratch vs Softstreak Ready-to-Use
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 uppercase text-[11px] tracking-wider">
                  <th className="pb-3 font-semibold">Evaluation Criteria</th>
                  <th className="pb-3 font-semibold text-slate-400">Traditional Custom Dev</th>
                  <th className="pb-3 font-semibold text-purple-300">Softstreak (Tavreville)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 font-medium text-white pr-4">
                      {row.factor}
                    </td>
                    <td className="py-4 text-slate-400 pr-4">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 text-purple-200 font-medium">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.softstreak}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
