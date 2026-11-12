import React from 'react';
import { deploymentSteps } from '../data/products';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HowItWorksProps {
  onOpenDemoModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDemoModal }) => {
  return (
    <section className="py-24 relative bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
            Streamlined Deployment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            How Softstreak Gets Your Business Live
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From initial consultation to full team onboarding, our 4-step process ensures a smooth rollout with zero technical friction.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {deploymentSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-navy-900/70 rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number with purple badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-500">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < deploymentSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-purple-500/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Callout CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-glow-sm hover:shadow-glow transition-all"
          >
            <span>Start With Step 01: Schedule a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

