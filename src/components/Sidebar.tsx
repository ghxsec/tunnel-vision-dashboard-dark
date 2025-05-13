
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Server, Settings, Shield, Users, WifiHigh } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
};

const NavItem = ({ icon: Icon, label, active = false, collapsed = false, onClick }: NavItemProps) => (
  <div
    className={cn(
      'flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200',
      active ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
    )}
    onClick={onClick}
  >
    <Icon className={cn('h-5 w-5', active && 'text-vpn-cyan')} />
    {!collapsed && <span className="ml-3 font-medium">{label}</span>}
  </div>
);

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div
      className={cn(
        'h-screen flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex items-center h-16 px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-vpn-cyan" />
            <span className="font-bold text-lg">NetShield</span>
          </div>
        )}
        {collapsed && <Shield className="h-6 w-6 text-vpn-cyan mx-auto" />}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto rounded-full p-1 hover:bg-sidebar-accent"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <div className="flex-1 py-6 flex flex-col space-y-2 px-3 overflow-y-auto">
        <NavItem
          icon={WifiHigh}
          label="Dashboard"
          active={activeItem === 'dashboard'}
          collapsed={collapsed}
          onClick={() => setActiveItem('dashboard')}
        />
        <NavItem
          icon={Server}
          label="Servers"
          active={activeItem === 'servers'}
          collapsed={collapsed}
          onClick={() => setActiveItem('servers')}
        />
        <NavItem
          icon={Globe}
          label="Locations"
          active={activeItem === 'locations'}
          collapsed={collapsed}
          onClick={() => setActiveItem('locations')}
        />
        <NavItem
          icon={Users}
          label="Accounts"
          active={activeItem === 'accounts'}
          collapsed={collapsed}
          onClick={() => setActiveItem('accounts')}
        />
      </div>

      <div className="p-3 border-t border-sidebar-border">
        <NavItem
          icon={Settings}
          label="Settings"
          active={activeItem === 'settings'}
          collapsed={collapsed}
          onClick={() => setActiveItem('settings')}
        />
      </div>
    </div>
  );
};

export default Sidebar;
