import React from 'react';
import {
  Users,
  TrendingUp,
  MessageSquare,
  Cpu,
  Activity,
  Compass,
  Zap,
  ShieldCheck,
  Layers,
  Headphones,
  Calendar,
  CheckCircle2,
  type LucideProps
} from 'lucide-react';

interface ProductIconProps extends LucideProps {
  name: string;
}

export const ProductIcon: React.FC<ProductIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Users':
      return <Users {...props} />;
    case 'TrendingUp':
      return <TrendingUp {...props} />;
    case 'MessageSquare':
      return <MessageSquare {...props} />;
    case 'Cpu':
      return <Cpu {...props} />;
    case 'Activity':
      return <Activity {...props} />;
    case 'Compass':
      return <Compass {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'Layers':
      return <Layers {...props} />;
    case 'Headphones':
      return <Headphones {...props} />;
    case 'Calendar':
      return <Calendar {...props} />;
    default:
      return <CheckCircle2 {...props} />;
  }
};
