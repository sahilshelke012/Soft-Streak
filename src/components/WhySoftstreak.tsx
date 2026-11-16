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
      accent: 'text-[#E52430]',
      badge: 'Immediate Value'
    },
    {
      title: 'Offered Under Tavreville',
      description: `Backed by the stability, governance, and technology standards of ${siteConfig.parentCompany}, ensuring dependable operational continuity and reliable updates.`,
      icon: ShieldCheck,
      accent: 'text-[#171923]',
      badge: 'Parent Assurance'
    },
    {
      title: 'Engineered for SMB Scalability',
      description: 'Priced and architected specifically for small and medium-sized business owners who need lean, high-impact systems without enterprise bloat.',
      icon: Layers,
      accent: 'text-[#E52430]',
      badge: 'Zero Bloat'
    },
    {
      title: 'Dedicated Human Support',
      description: 'Get direct onboarding assistance, personalized product walkthroughs, and fast response via WhatsApp or email whenever your team needs help.',
      icon: Headphones,
      accent: 'text-[#171923]',
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
    <section id="why-us" className="py-20 relative bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#E52430] text-xs font-bold mb-3 shadow-soft-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>The Software Street Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight">
            Why Business Leaders Choose{' '}
            <span className="text-[#E52430]">
              SoftStreak
            </span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#252832]">
            We bridge the gap between expensive custom agency software and generic SaaS tools that lack dedicated support.
          </p>
        </div>

        {/* 4 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-red-300 transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-card-hover group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E52430] group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E52430] bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#171923] mb-2 group-hover:text-[#E52430] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#252832] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-soft-lg">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E52430]">
              Market Comparison
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#171923] mt-1">
              Building From Scratch vs SoftStreak Ready-to-Use
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase text-[11px] tracking-wider bg-[#F7F8FA]">
                  <th className="py-3 px-4 font-bold rounded-l-lg">Evaluation Criteria</th>
                  <th className="py-3 px-4 font-bold text-slate-500">Traditional Custom Dev</th>
                  <th className="py-3 px-4 font-bold text-[#E52430] rounded-r-lg">SoftStreak (Tavreville)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-4 font-bold text-[#171923]">
                      {row.factor}
                    </td>
                    <td className="py-4 px-4 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#171923] font-bold">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E52430] shrink-0" />
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
