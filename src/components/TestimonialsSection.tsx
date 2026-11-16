import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "SoftStreak replaced our scattered spreadsheets with an intuitive, unified pipeline. Our sales team had zero learning curve, and the guided setup saved us months of development.",
      author: "[Sarah M. - Founder & CEO]",
      company: "[Verified SMB Client - Logistics]",
      role: "Logistics & Fleet Operations",
      highlight: "Saved 15+ hours/week in manual reporting"
    },
    {
      quote: "Operating under Tavreville gave us the confidence to commit. The WhatsApp automation and CRM deal stages are rock-solid, and human support responded within minutes whenever we needed guidance.",
      author: "[David K. - Managing Director]",
      company: "[Verified SMB Client - B2B Services]",
      role: "Commercial Real Estate Agency",
      highlight: "Unified WhatsApp and Email Lead Capture"
    },
    {
      quote: "Having ready-to-use business software tailored for SMB budgets is exactly what we needed. No surprise agency invoices, no custom coding bugs — just dependable business tools that work.",
      author: "[Elena R. - Head of Operations]",
      company: "[Verified SMB Client - Healthcare]",
      role: "Multi-Specialty Care Practice",
      highlight: "Rapid 4-Day Deployment"
    }
  ];

  return (
    <section className="py-20 relative bg-[#F7F7F8] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[#E52430] text-xs font-bold mb-3 shadow-soft-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Proven Business Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight">
            Trusted by Growing Businesses &{' '}
            <span className="text-[#E52430]">Founders</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#626773]">
            See why small and medium-sized business owners choose SoftStreak's ready-to-use software ecosystems.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-soft hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Stars and Quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#E52430]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-slate-200" />
                </div>

                <p className="text-sm text-[#252832] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>

                <div className="p-2.5 rounded-xl bg-[#F7F7F8] border border-slate-100 mb-4">
                  <span className="text-[10px] font-bold text-[#E52430] uppercase tracking-wider block">
                    Outcome Highlight:
                  </span>
                  <span className="text-xs font-bold text-[#171923]">
                    {item.highlight}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-[#171923]">
                  {item.author}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {item.role} • {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Testimonials */}
        <div className="mt-10 text-center">
          <p className="text-[11px] text-slate-400 max-w-xl mx-auto italic">
            * Note: Customer case studies reflect standard operational outcomes. Replace bracketed client names with your verified customer credentials in production.
          </p>
        </div>

      </div>
    </section>
  );
};

