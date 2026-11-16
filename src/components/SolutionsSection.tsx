import React, { useState } from 'react';
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

interface SolutionsSectionProps {
  onOpenDemo: (solutionName?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'industries' | 'teams'>('industries');

  const industries = [
    { title: 'Small Business', description: 'Manage clients, sales follow-ups, and active operational projects without enterprise bloat.', icon: Building2 },
    { title: 'Startups', description: 'Track rapid customer growth, incoming venture capital, and multi-channel pipeline funnels.', icon: Rocket },
    { title: 'Venture Capital', description: 'Simplify deal flow, pitch review stages, portfolio founder updates, and investment milestones.', icon: TrendingUp },
    { title: 'Influencer Marketing', description: 'Coordinate influencer partnerships, contracts, campaign deliverable tracking, and ROI.', icon: Megaphone },
    { title: 'Real Estate', description: 'Organize prospective home buyer leads, property listings, inspections, and agent follow-ups.', icon: Home },
    { title: 'Travel Agencies', description: 'Manage customized bookings, holiday inquiries, partner hotels, and flight itineraries.', icon: Compass },
    { title: 'Business Funding', description: 'Track commercial funding rounds, accredited investor contacts, and due diligence checks.', icon: Coins },
  ];

  const teams = [
    { title: 'Sales Teams', description: 'Drive leads from first outreach to closed won with automated follow-ups and pipeline staging.', icon: Briefcase },
    { title: 'Support Teams', description: 'Track customer inquiries, SLA escalations, and issue resolutions across unified inboxes.', icon: Headphones },
    { title: 'Hiring & HR', description: 'Organize candidate resumes, screening stages, feedback scorecards, and onboarding workflows.', icon: UserPlus },
    { title: 'Product Development', description: 'Manage development sprint stages, customer feature requests, and bug ticket lifecycles.', icon: Code },
    { title: 'Business Development', description: 'Build and manage institutional partnerships, joint ventures, and strategic enterprise accounts.', icon: Handshake },
    { title: 'Creator Partnerships', description: 'Run your brand ambassador program, outreach cadences, and content agreements at scale.', icon: Sparkles },
    { title: 'Fundraising Leads', description: 'Track investor relationships, term sheet negotiations, and funding round momentum.', icon: DollarSign },
  ];

  const currentList = activeTab === 'industries' ? industries : teams;

  return (
    <section id="solutions" className="py-20 relative bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E52430] text-xs font-bold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Tailored Workflows</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight">
            Solutions Built for Your{' '}
            <span className="text-[#E52430]">Industry & Team</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#626773]">
            Whether you operate in real estate, healthcare, or run a high-velocity sales team, SoftStreak adapts to your exact business operations.
          </p>

          {/* Toggle buttons */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-[#F0F1F3] rounded-xl border border-[#E5E7EB]">
            <button
              onClick={() => setActiveTab('industries')}
              className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'industries' 
                  ? 'bg-white text-[#171923] shadow-soft-sm' 
                  : 'text-[#626773] hover:text-[#171923]'
              }`}
            >
              Industries (7)
            </button>
            <button
              onClick={() => setActiveTab('teams')}
              className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'teams' 
                  ? 'bg-white text-[#171923] shadow-soft-sm' 
                  : 'text-[#626773] hover:text-[#171923]'
              }`}
            >
              Teams (7)
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-in fade-in duration-200">
          {currentList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F7F8] rounded-2xl p-6 border border-[#E5E7EB] hover:border-red-200 hover:bg-white transition-all duration-200 shadow-soft-sm hover:shadow-card-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E7EB] text-[#E52430] flex items-center justify-center mb-4 group-hover:bg-[#E52430] group-hover:text-white transition-colors duration-200 shadow-soft-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#171923] group-hover:text-[#E52430] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626773] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60">
                  <button
                    onClick={() => onOpenDemo(`${activeTab === 'industries' ? 'Industry' : 'Team'}: ${item.title}`)}
                    className="text-xs font-bold text-[#E52430] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View {item.title} Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

