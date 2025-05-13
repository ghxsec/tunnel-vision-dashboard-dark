
import React from 'react';
import { 
  Shield, Globe, Server, Settings, Link, 
  WifiOff, User, Lock, Download 
} from 'lucide-react';
import { cn } from '@/lib/utils';

type ActionButtonProps = {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

const ActionButton = ({ icon: Icon, label, onClick, disabled = false }: ActionButtonProps) => (
  <button 
    className={cn(
      "cyber-btn flex flex-col items-center justify-center gap-3 p-4 h-24 w-full",
      disabled && "opacity-50 cursor-not-allowed"
    )}
    onClick={onClick}
    disabled={disabled}
  >
    <Icon className="h-5 w-5" />
    <span className="text-xs">{label}</span>
  </button>
);

const QuickActions = () => {
  return (
    <div className="glass-panel rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ActionButton 
          icon={Globe} 
          label="Auto Connect" 
          onClick={() => console.log('Auto Connect')} 
        />
        <ActionButton 
          icon={Shield} 
          label="Kill Switch" 
          onClick={() => console.log('Kill Switch')} 
        />
        <ActionButton 
          icon={WifiOff} 
          label="Block Trackers" 
          onClick={() => console.log('Block Trackers')} 
        />
        <ActionButton 
          icon={Lock} 
          label="DNS Filter" 
          onClick={() => console.log('DNS Filter')} 
        />
      </div>
    </div>
  );
};

export default QuickActions;
