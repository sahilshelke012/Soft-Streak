import React from 'react';
import { Briefcase, Rocket, UserCheck, CheckCircle2 } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const audiences = [
    {
      title: 'SMB Business Owners',
      badge: 'Operational Stability',
      icon: Briefcase,
      accent: 'border-purple-500/30',
      description: 'Gain full operational control with reliable, proven software systems without burning capital on risky custom code.',
      highlights: [
        'Predictable SaaS investment without surprise billing',
        'End-to-end oversight across staff, leads, and financials',
        'Compliance-ready audit trails and automated record keeping',
        'Protected continuity backed by Tavreville standards'
      ]
    },
    {
      title: 'Startup & Scale-up Founders',
      badge: 'Speed & Agility',
      icon: Rocket,
      accent: 'border-indigo-500/30',
      description: 'Launch fast and punch above your weight class by automating repetitive operational tasks from day one.',
      highlights: [
        'Instant multi-channel WhatsApp customer engagement',
        'Transparent sales pipeline to forecast revenue growth',
        'AI automation connectors to replace tedious manual spreadsheets',
        'Scales smoothly as your headcount grows from 5 to 200+'
      ]
    },
    {
      title: 'Department & Branch Managers',
      badge: 'Execution Efficiency',
      icon: UserCheck,
      accent: 'border-cyan-500/30',
      description: 'Equip your team with intuitive tools that eliminate administrative chaos, data duplication, and manual reporting.',
      highlights: [
        'Zero learning curve with structured, role-based interfaces',
        'Automatic task reminders and status escalation alerts',
        'One-click operational reporting for executive leadership',
        'Responsive technical support whenever your team has questions'
      ]
    }
  ];

  return (
    <section className="py-24 relative bg-navy-900/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
            Tailored For Growth
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            Engineered For Key Business Stakeholders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Softstreak eliminates software friction across every level of your organization.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((aud, i) => {
            const Icon = aud.icon;
            return (
              <div
                key={i}
                className="bg-navy-950/80 rounded-2xl p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-card-hover group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2.5 py-1 rounded-full">
                      {aud.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {aud.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {aud.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Core Advantages:
                    </span>
                    {aud.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-center">
                  <a
                    href="#products"
                    className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Matching Software Solutions &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

