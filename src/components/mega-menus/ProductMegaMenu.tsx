import React from 'react';
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
  ArrowRight,
  Boxes,
  Bot,
  Brain,
  MessageSquare,
  Globe,
  Layers
} from 'lucide-react';

interface ProductMegaMenuProps {
  onItemClick: () => void;
  onOpenDemo: (featureName?: string) => void;
}

export const ProductMegaMenu: React.FC<ProductMegaMenuProps> = ({ onItemClick, onOpenDemo }) => {
  const coreCRM = [
    {
      title: 'Pipelines',
      description: 'Track deals through every stage.',
      icon: Kanban,
    },
    {
      title: 'AI',
      description: 'Power your workflow with AI.',
      icon: Sparkles,
      badge: 'New',
    },
    {
      title: 'Contacts',
      description: 'Build a shared contact database.',
      icon: Users,
    },
    {
      title: 'Task Management',
      description: 'Know what to do next.',
      icon: CheckSquare,
    },
    {
      title: 'Automation',
      description: 'Automate CRM drudgery.',
      icon: Zap,
    },
  ];

  const emailTools = [
    {
      title: 'Email Tracking',
      description: 'Know when your email is viewed.',
      icon: Eye,
    },
    {
      title: 'Email Sharing',
      description: 'Share a link to any email.',
      icon: Share2,
    },
    {
      title: 'Mail Merge',
      description: 'Send personalized emails at scale.',
      icon: Send,
    },
    {
      title: 'Snippets',
      description: 'Reuse replies with snippets.',
      icon: FileText,
    },
    {
      title: 'Thread Splitter',
      description: 'When threads shift, split them.',
      icon: Split,
    },
  ];

  const integrations = [
    { name: 'Google Workspace', icon: Globe },
    { name: 'ChatGPT', icon: Bot },
    { name: 'Claude', icon: Brain },
    { name: 'MCP', icon: Boxes },
    { name: 'LinkedIn', icon: Share2 },
    { name: 'Allo', icon: MessageSquare },
    { name: 'Slack', icon: Layers },
  ];

  return (
    <div className="w-[880px] bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_20px_50px_rgba(23,25,35,0.12)] overflow-hidden p-6 animate-in fade-in zoom-in-95 duration-150">
      <div className="grid grid-cols-12 gap-7">
        
        {/* Column 1: Core CRM */}
        <div className="col-span-5 space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2 border-b border-slate-100">
            Core CRM
          </div>
          <div className="pt-2 space-y-1">
            {coreCRM.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick();
                    onOpenDemo(item.title);
                  }}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E52430] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E52430] group-hover:text-white transition-colors duration-150">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#171923] group-hover:text-[#E52430] transition-colors">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 bg-red-50 text-[#E52430] rounded border border-red-200">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-snug">
                      {item.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Column 2: Email Tools */}
        <div className="col-span-4 space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2 border-b border-slate-100">
            Email Tools
          </div>
          <div className="pt-2 space-y-1">
            {emailTools.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick();
                    onOpenDemo(item.title);
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

        {/* Column 3: Integrations */}
        <div className="col-span-3 space-y-1 border-l border-slate-100 pl-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 pb-2 border-b border-slate-100">
            Integrations
          </div>
          <div className="pt-2 space-y-0.5">
            {integrations.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick();
                    onOpenDemo(`Integration: ${item.name}`);
                  }}
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-semibold text-[#252832] hover:text-[#E52430] hover:bg-slate-50 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#E52430]" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Section Banner */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between bg-[#F7F8FA] -mx-6 -mb-6 px-6 py-3.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#171923]">There's more to explore.</span>
          <span className="text-xs text-slate-500">Explore SoftStreak's full suite of CRM tools.</span>
        </div>
        <a
          href="#products"
          onClick={() => onItemClick()}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E52430] hover:underline"
        >
          <span>Browse All Features</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

