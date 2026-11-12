import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is "ready-to-use business software"?',
      answer: 'Ready-to-use software is pre-engineered, fully functional software built around industry-standard workflows. Unlike custom development projects that require months of coding from scratch, Softstreak systems are ready to deploy, configure, and connect to your team within days.'
    },
    {
      question: `What is the relationship between Softstreak and ${siteConfig.parentCompany}?`,
      answer: `Softstreak (Software Street) is an official venture and product ecosystem offered under ${siteConfig.parentCompany}. All software architectures, deployment standards, and customer agreements operate under the backing and governance of Tavreville.`
    },
    {
      question: 'Can the software be configured to match our exact company processes?',
      answer: 'Yes. While the core engine is pre-built to ensure rock-solid stability, every module features configurable settings: custom fields, approval chains, role permissions, notification rules, and company branding (logos and color schemes).'
    },
    {
      question: 'What are the technical requirements for the WhatsApp Software?',
      answer: 'Our WhatsApp Software utilizes the official Meta / WhatsApp Cloud and Business APIs. It requires a dedicated phone number (mobile or landline) that can receive a verification code, and an active Meta Business Manager account. Our team assists with full setup.'
    },
    {
      question: 'How do we schedule and experience a product demonstration?',
      answer: 'You can book a live interactive demo using our booking form or directly reach out on WhatsApp. A software specialist will walk you through the system in real time, answer questions, and show how the product fits your day-to-day operations.'
    },
    {
      question: 'Are there long-term locked-in contracts?',
      answer: 'We prioritize SMB-friendly flexibility. Specific billing tiers and subscription options are discussed transparently during your initial walkthrough, tailored to your company headcount and required feature modules.'
    }
  ];

  return (
    <section className="py-24 relative bg-navy-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-base text-slate-300">
            Clear answers to common questions about our ready-to-deploy software and onboarding.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-navy-900/80 border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-purple-300' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-navy-900/60 border border-white/10">
          <p className="text-xs sm:text-sm text-slate-300">
            Have a question not listed here? Connect with our team directly.
          </p>
          <a
            href={buildWhatsAppUrl("Hello Softstreak team, I have a specific question about your software.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask us on WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};

