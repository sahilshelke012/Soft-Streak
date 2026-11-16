import React from 'react';
import { 
  GraduationCap, 
  Video, 
  Wrench, 
  BookOpen, 
  Newspaper, 
  Code2, 
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { buildWhatsAppUrl } from '../../config/siteConfig';

interface LearnMegaMenuProps {
  onItemClick: () => void;
  onOpenDemo: (subject?: string) => void;
}

export const LearnMegaMenu: React.FC<LearnMegaMenuProps> = ({ onItemClick, onOpenDemo }) => {
  const column1 = [
    {
      title: 'SoftStreak University',
      description: 'Bite-sized video tutorials to help get started and master SoftStreak.',
      icon: GraduationCap,
    },
    {
      title: 'Live Classes',
      description: 'Master SoftStreak with live, expert-led classes.',
      icon: Video,
    },
    {
      title: 'Hands-on Custom CRM Setup',
      description: 'Partner with our team to build your custom workflows.',
      icon: Wrench,
      highlight: true,
    },
  ];

  const column2 = [
    {
      title: 'Knowledge Base',
      description: 'Guides and troubleshooting help.',
      icon: BookOpen,
    },
    {
      title: 'Blog',
      description: 'Tips and product updates to help you get more out of SoftStreak.',
      icon: Newspaper,
    },
    {
      title: 'API Documentation',
      description: 'Learn how the API works to build integrations and connect your tools.',
      icon: Code2,
    },
  ];

  return (
    <div className="w-[920px] bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_20px_50px_rgba(23,25,35,0.12)] overflow-hidden p-6 animate-in fade-in zoom-in-95 duration-150">
      <div className="grid grid-cols-12 gap-7">
        
        {/* Left 2 Columns (8 cols) */}
        <div className="col-span-8 grid grid-cols-2 gap-6">
          
          {/* Column 1 */}
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2 border-b border-slate-100">
              Training & Setup
            </div>
            <div className="pt-2 space-y-1">
              {column1.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href="#why-us"
                    onClick={(e) => {
                      e.preventDefault();
                      onItemClick();
                      onOpenDemo(`Learn: ${item.title}`);
                    }}
                    className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-150 group ${
                      item.highlight ? 'bg-red-50/50 hover:bg-red-50 border border-red-100' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52430] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E52430] group-hover:text-white transition-colors duration-150">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#171923] group-hover:text-[#E52430] transition-colors block">
                        {item.title}
                      </span>
                      <p className="text-xs text-slate-500 font-medium leading-snug mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2 border-b border-slate-100">
              Resources & Docs
            </div>
            <div className="pt-2 space-y-1">
              {column2.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href="#why-us"
                    onClick={(e) => {
                      e.preventDefault();
                      onItemClick();
                      onOpenDemo(`Docs: ${item.title}`);
                    }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-150 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#171923] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E52430] group-hover:text-white transition-colors duration-150">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#171923] group-hover:text-[#E52430] transition-colors block">
                        {item.title}
                      </span>
                      <p className="text-xs text-slate-500 font-medium leading-snug mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right-Side Section: Two Attractive Learning / Resource Cards (4 cols) */}
        <div className="col-span-4 border-l border-slate-100 pl-6 space-y-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-100">
            Featured Resources
          </div>

          {/* Card 1 */}
          <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#F7F8FA] to-white border border-slate-200 shadow-soft-sm hover:border-red-200 transition-all duration-200 group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-red-50 text-[#E52430] border border-red-100">
                Guide
              </span>
              <span className="text-[11px] text-slate-400 font-medium">5 min read</span>
            </div>
            <h5 className="text-xs font-bold text-[#171923] group-hover:text-[#E52430] transition-colors leading-snug">
              The SMB CRM Playbook: From Cold Lead to Closed Deal
            </h5>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
              Step-by-step framework to organize your sales pipeline and automate team follow-ups.
            </p>
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                onItemClick();
                onOpenDemo('Playbook Guide');
              }}
              className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-bold text-[#E52430] hover:underline"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#F7F8FA] to-white border border-slate-200 shadow-soft-sm hover:border-red-200 transition-all duration-200 group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Live Workshop
              </span>
              <span className="text-[11px] text-slate-400 font-medium">Weekly</span>
            </div>
            <h5 className="text-xs font-bold text-[#171923] group-hover:text-[#E52430] transition-colors leading-snug">
              Mastering WhatsApp Automation & Multi-Agent Inbox
            </h5>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
              Join our weekly live session demonstrating official WhatsApp Business API setups.
            </p>
            <a
              href={buildWhatsAppUrl("Hello SoftStreak, I would like to register for the next live workshop.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onItemClick()}
              className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 hover:underline"
            >
              <span>Join Next Session</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>

      {/* Bottom Section Banner */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between bg-[#F7F8FA] -mx-6 -mb-6 px-6 py-3.5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#E52430]" />
          <span className="text-xs font-bold text-[#171923]">Need customized onboarding for your company?</span>
          <span className="text-xs text-slate-500">Our solution engineers will walk your team through live.</span>
        </div>
        <button
          onClick={() => {
            onItemClick();
            onOpenDemo('Custom Training & Onboarding');
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E52430] hover:underline"
        >
          <span>Book Free Onboarding Session</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
