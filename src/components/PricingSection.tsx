import React from 'react';
import { CheckCircle2, Zap, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  const plans = [
    {
      name: 'Starter CRM',
      badge: 'Small Business',
      tagline: 'Ideal for small teams and founders seeking to organize pipelines and track deals.',
      price: '$29',
      period: 'per user / month',
      features: [
        'Unlimited CRM deal pipelines',
        'Email tracking & view alerts',
        'Centralized contact database',
        'Basic task management & reminders',
        'Google Workspace integration',
        'Standard email & portal support'
      ],
      popular: false,
      cta: 'Start with Starter'
    },
    {
      name: 'Growth & Automation',
      badge: 'Most Popular',
      tagline: 'Complete CRM, official WhatsApp business messaging, and AI workflow auto-pilot.',
      price: '$59',
      period: 'per user / month',
      features: [
        'Everything in Starter CRM',
        'Official WhatsApp Business API suite',
        'Shared multi-agent team inbox',
        'AI email drafts & deal summarization',
        'Mail merge & custom canned snippets',
        'Slack, ChatGPT & Claude connectors',
        'Guided onboarding under Tavreville'
      ],
      popular: true,
      cta: 'Get Started with Growth'
    },
    {
      name: 'Enterprise Ecosystem',
      badge: 'Custom Rollout',
      tagline: 'Full unified software stack combining CRM, HRMS, WhatsApp, and industry solutions.',
      price: 'Custom',
      period: 'tailored to headcount',
      features: [
        'Everything in Growth & Automation',
        'All 6 Software Modules (HR, CRM, WhatsApp, AI, Hospital/Travel)',
        'Dedicated Technical Account Manager',
        'Custom API & legacy ERP database sync',
        'Role-based permissions & audit trails',
        '99.9% uptime SLA & priority WhatsApp helpline'
      ],
      popular: false,
      cta: 'Contact for Custom Proposal'
    }
  ];

  return (
    <section id="pricing" className="py-20 relative bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E52430] text-xs font-bold mb-3 shadow-soft-sm">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight">
            Simple, Transparent Pricing Built for{' '}
            <span className="text-[#E52430]">SMB Budgets</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#626773]">
            No unexpected billing spikes or hidden agency setup fees. Scale your software as your revenue expands.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                plan.popular
                  ? 'bg-white border-2 border-[#E52430] shadow-[0_12px_36px_rgba(229,36,48,0.12)] -translate-y-1'
                  : 'bg-[#F7F7F8] border border-[#E5E7EB] hover:bg-white shadow-soft hover:shadow-card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E52430] text-white text-[11px] font-extrabold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-soft-sm">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    plan.popular ? 'bg-red-50 text-[#E52430] border border-red-100' : 'bg-slate-200/70 text-slate-700'
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#171923]">
                  {plan.name}
                </h3>
                <p className="text-xs text-[#626773] mt-1.5 min-h-[36px]">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-6 mb-6 pb-6 border-b border-slate-200/80">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-[#171923]">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#626773] font-medium">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#171923] block">
                    What's Included:
                  </span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#252832]">
                      <CheckCircle2 className="w-4 h-4 text-[#E52430] shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenDemo(`Pricing Plan: ${plan.name}`)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-[#E52430] hover:bg-[#D71926] text-white shadow-soft-sm hover:shadow-red-sm hover:-translate-y-0.5'
                      : 'bg-white hover:bg-slate-50 text-[#171923] border border-slate-300 shadow-soft-sm hover:-translate-y-0.5'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Assurance */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-[#626773]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E52430]" />
            <span>Backed by Tavreville Enterprise SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E52430]" />
            <span>Free Onboarding Walkthrough Included</span>
          </div>
        </div>

      </div>
    </section>
  );
};

