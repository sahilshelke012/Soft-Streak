import React from 'react';
import { deploymentSteps } from '../data/products';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HowItWorksProps {
  onOpenDemoModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDemoModal }) => {
  return (
    <section className="py-20 relative bg-[#F7F8FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E52430]">
            Streamlined Deployment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight mt-2">
            How SoftStreak Gets Your Business Live
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#252832]">
            From initial consultation to full team onboarding, our 4-step process ensures a smooth rollout with zero technical friction.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {deploymentSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-red-300 transition-all duration-300 flex flex-col justify-between shadow-soft hover:shadow-card-hover"
            >
              <div>
                {/* Step Number with red accent */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold text-[#E52430]">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#E52430]" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#171923] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#252832] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < deploymentSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 border border-slate-200 shadow-soft-sm">
                  <ArrowRight className="w-4 h-4 text-[#E52430]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Callout CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#E52430] hover:bg-[#CF1B27] rounded-xl shadow-soft-sm hover:shadow-red-sm transition-all"
          >
            <span>Start With Step 01: Schedule a Demo</span>
            <ArrowRight className="w-4 h-4 text-white/90" />
          </button>
        </div>

      </div>
    </section>
  );
};
