import React, { useState } from 'react';
import { 
  Kanban, 
  Sparkles, 
  Users, 
  CheckSquare, 
  Zap, 
  Eye, 
  Share2, 
  Send, 
  FileText, 
  Split, 
  Globe, 
  Bot, 
  Brain, 
  Boxes, 
  MessageSquare, 
  Layers, 
  ArrowRight
} from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

interface FeaturesSectionProps {
  onOpenDemo: (featureName?: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'crm' | 'email' | 'integrations'>('crm');

  const coreCRMFeatures = [
    {
      title: 'Pipelines',
      description: 'Track deals through every stage with customizable Kanban boards and visual conversion stages.',
      icon: Kanban,
      tag: 'Deal Tracking'
    },
    {
      title: 'AI Automation',
      description: 'Power your workflow with AI. Automatically summarize customer threads, forecast closures, and draft emails.',
      icon: Sparkles,
      tag: 'Intelligence',
      badge: 'New'
    },
    {
      title: 'Shared Contacts',
      description: 'Build a centralized, shared contact database across your team with unified conversation logs.',
      icon: Users,
      tag: 'Database'
    },
    {
      title: 'Task Management',
      description: 'Know what to do next with automated task alerts, follow-up reminders, and team assignees.',
      icon: CheckSquare,
      tag: 'Productivity'
    },
    {
      title: 'Workflow Automation',
      description: 'Automate CRM drudgery. Trigger status updates, assign owners, and send notifications automatically.',
      icon: Zap,
      tag: 'Efficiency'
    }
  ];

  const emailToolFeatures = [
    {
      title: 'Email Tracking',
      description: 'Know exactly when your email is viewed, how many times, and on what device.',
      icon: Eye,
      tag: 'Real-time Alerts'
    },
    {
      title: 'Email Sharing',
      description: 'Share a secure link to any email or customer conversation with your internal team in one click.',
      icon: Share2,
      tag: 'Collaboration'
    },
    {
      title: 'Mail Merge at Scale',
      description: 'Send personalized emails at scale directly through your business inbox with dynamic placeholders.',
      icon: Send,
      tag: 'Outreach'
    },
    {
      title: 'Canned Snippets',
      description: 'Reuse replies and standard sales scripts with keyboard shortcuts for rapid turnaround.',
      icon: FileText,
      tag: 'Speed'
    },
    {
      title: 'Thread Splitter',
      description: 'When conversation threads shift topics or deals, easily split them into distinct pipeline records.',
      icon: Split,
      tag: 'Organization'
    }
  ];

  const integrationList = [
    { name: 'Google Workspace', desc: 'Native Gmail & Drive sync', icon: Globe },
    { name: 'ChatGPT', desc: 'Generative sales assistants', icon: Bot },
    { name: 'Claude', desc: 'Deep document analysis', icon: Brain },
    { name: 'MCP (Model Context)', desc: 'Next-gen tool protocol', icon: Boxes },
    { name: 'LinkedIn', desc: 'Direct prospect enrichment', icon: LinkedInIcon },
    { name: 'Allo / WhatsApp', desc: 'Instant mobile customer messaging', icon: MessageSquare },
    { name: 'Slack', desc: 'Real-time team deal alerts', icon: Layers },
  ];

  return (
    <section id="features" className="py-20 relative bg-[#F7F7F8] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[#E52430] text-xs font-bold mb-3 shadow-soft-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built Directly into Your Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight">
            Features Designed to Turn Leads into{' '}
            <span className="text-[#E52430]">Closed Revenue</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#626773]">
            Explore the powerful tools inside SoftStreak — from Core CRM and email tracking to modern AI integrations.
          </p>

          {/* Navigation Pill Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-white rounded-xl border border-[#E5E7EB] shadow-soft-sm">
            <button
              onClick={() => setActiveTab('crm')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${activeTab === 'crm'
                ? 'bg-[#E52430] text-white shadow-soft-sm'
                : 'text-[#626773] hover:text-[#171923]'
                }`}
            >
              Core CRM (5)
            </button>
            <button
              onClick={() => setActiveTab('email')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${activeTab === 'email'
                ? 'bg-[#E52430] text-white shadow-soft-sm'
                : 'text-[#626773] hover:text-[#171923]'
                }`}
            >
              Email Tools (5)
            </button>
            <button
              onClick={() => setActiveTab('integrations')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${activeTab === 'integrations'
                ? 'bg-[#E52430] text-white shadow-soft-sm'
                : 'text-[#626773] hover:text-[#171923]'
                }`}
            >
              Integrations (7)
            </button>
          </div>
        </div>

        {/* Content Tab: Core CRM */}
        {activeTab === 'crm' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {coreCRMFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-red-300 shadow-soft hover:shadow-card-hover transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-[#E52430] flex items-center justify-center group-hover:bg-[#E52430] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        {feat.badge && (
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-red-50 text-[#E52430] border border-red-200">
                            {feat.badge}
                          </span>
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                          {feat.tag}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#171923] mb-2 group-hover:text-[#E52430] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-[#626773] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onOpenDemo(feat.title)}
                      className="text-xs font-bold text-[#E52430] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore {feat.title} Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Content Tab: Email Tools */}
        {activeTab === 'email' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {emailToolFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-red-300 shadow-soft hover:shadow-card-hover transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#171923] flex items-center justify-center group-hover:bg-[#E52430] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#171923] mb-2 group-hover:text-[#E52430] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-[#626773] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onOpenDemo(feat.title)}
                      className="text-xs font-bold text-[#E52430] hover:underline inline-flex items-center gap-1"
                    >
                      <span>See Email Tool in Action</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Content Tab: Integrations */}
        {activeTab === 'integrations' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {integrationList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-2xl border border-[#E5E7EB] hover:border-red-300 shadow-soft hover:shadow-card-hover transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E52430] flex items-center justify-center mb-3 group-hover:bg-[#E52430] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-[#171923] group-hover:text-[#E52430] transition-colors">
                      {item.name}
                    </div>
                    <p className="text-xs text-[#626773] mt-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-4">
              <span className="text-xs text-[#626773]">
                Need a custom internal API integration or legacy ERP webhook?{' '}
                <button
                  onClick={() => onOpenDemo('Custom API Integration')}
                  className="font-bold text-[#E52430] hover:underline"
                >
                  Request Integration Specs &rarr;
                </button>
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

