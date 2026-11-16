import React from 'react';
import { 
  Building2, 
  Rocket, 
  TrendingUp, 
  Megaphone, 
  Home, 
  Compass, 
  Coins, 
  Briefcase, 
  Headphones, 
  UserPlus, 
  Code, 
  Handshake, 
  Sparkles, 
  DollarSign,
  ArrowRight
} from 'lucide-react';

interface SolutionsMegaMenuProps {
  onItemClick: () => void;
  onOpenDemo: (solutionName?: string) => void;
}

export const SolutionsMegaMenu: React.FC<SolutionsMegaMenuProps> = ({ onItemClick, onOpenDemo }) => {
  const industries = [
    { title: 'Small Business', description: 'Manage clients and projects.', icon: Building2 },
    { title: 'Startups', description: 'Track growth and investors.', icon: Rocket },
    { title: 'Venture Capital', description: 'Simplify deal flow and tracking.', icon: TrendingUp },
    { title: 'Influencer Marketing', description: 'Manage influencer partnerships.', icon: Megaphone },
    { title: 'Real Estate', description: 'Organize leads and listings.', icon: Home },
    { title: 'Travel Agencies', description: 'Manage bookings.', icon: Compass },
    { title: 'Business Funding', description: 'Track funding rounds.', icon: Coins },
  ];

  const teams = [
    { title: 'Sales', description: 'Drive leads from start to close.', icon: Briefcase },
    { title: 'Support', description: 'Track inquiries and issues.', icon: Headphones },
    { title: 'Hiring', description: 'Organize candidates and stages.', icon: UserPlus },
    { title: 'Product Development', description: 'Manage development stages.', icon: Code },
    { title: 'Business Development', description: 'Build and manage partnerships.', icon: Handshake },
    { title: 'Creator Partnerships', description: 'Run your own influencer program.', icon: Sparkles },
    { title: 'Fundraising', description: 'Track funding milestones.', icon: DollarSign },
  ];

  return (
    <div className="w-[820px] bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_20px_50px_rgba(23,25,35,0.12)] overflow-hidden p-6 animate-in fade-in zoom-in-95 duration-150">
      <div className="grid grid-cols-2 gap-8">
        
        {/* Section 1 – Industries */}
        <div className="space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2 border-b border-slate-100 flex items-center justify-between">
            <span>Industries</span>
            <span className="text-[10px] text-slate-400 font-normal">7 Vertical Solutions</span>
          </div>
          <div className="pt-2 space-y-0.5">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick();
                    onOpenDemo(`Industry: ${item.title}`);
                  }}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52430] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E52430] group-hover:text-white transition-colors duration-150">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#171923] group-hover:text-[#E52430] transition-colors block">
                      {item.title}
                    </span>
                    <p className="text-xs text-slate-500 font-medium leading-snug">
                      {item.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Section 2 – Teams */}
        <div className="space-y-1 border-l border-slate-100 pl-6">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2 border-b border-slate-100 flex items-center justify-between">
            <span>Teams</span>
            <span className="text-[10px] text-slate-400 font-normal">Cross-Functional</span>
          </div>
          <div className="pt-2 space-y-0.5">
            {teams.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick();
                    onOpenDemo(`Team Solution: ${item.title}`);
                  }}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#171923] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E52430] group-hover:text-white transition-colors duration-150">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#171923] group-hover:text-[#E52430] transition-colors block">
                      {item.title}
                    </span>
                    <p className="text-xs text-slate-500 font-medium leading-snug">
                      {item.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Section Banner */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between bg-[#F7F8FA] -mx-6 -mb-6 px-6 py-3.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#171923]">Need a customized company solution?</span>
          <span className="text-xs text-slate-500">We configure workflows for any industry under Tavreville.</span>
        </div>
        <button
          onClick={() => {
            onItemClick();
            onOpenDemo('Custom Industry Solution');
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E52430] hover:underline"
        >
          <span>Schedule Team Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
