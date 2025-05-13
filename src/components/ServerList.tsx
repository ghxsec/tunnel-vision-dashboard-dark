
import React from 'react';
import { Server, ChevronRight, WifiHigh, Globe, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

type ServerItemProps = {
  name: string;
  location: string;
  ping: number;
  load: number;
  isActive?: boolean;
  onClick?: () => void;
};

const ServerItem = ({ name, location, ping, load, isActive = false, onClick }: ServerItemProps) => {
  // Calculate load bar color based on server load
  const getLoadColor = () => {
    if (load < 40) return 'bg-vpn-green';
    if (load < 80) return 'bg-vpn-yellow';
    return 'bg-vpn-red';
  };

  return (
    <div 
      className={cn(
        "flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200",
        isActive 
          ? "bg-sidebar-accent border border-vpn-cyan/30" 
          : "hover:bg-sidebar-accent/50"
      )}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center",
          isActive ? "bg-vpn-cyan/10 text-vpn-cyan" : "bg-muted text-muted-foreground"
        )}>
          <Server size={18} />
        </div>
        <div className="ml-3">
          <h3 className="font-medium">{name}</h3>
          <div className="flex items-center text-xs text-muted-foreground">
            <Globe size={12} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:block text-right">
          <div className="text-sm">{ping} ms</div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <div className="w-20 h-1 bg-secondary rounded-full mr-2">
              <div 
                className={cn("h-1 rounded-full", getLoadColor())} 
                style={{ width: `${load}%` }} 
              ></div>
            </div>
            <span>{load}%</span>
          </div>
        </div>
        <ChevronRight size={20} className="text-muted-foreground" />
      </div>
    </div>
  );
};

const ServerList = () => {
  const [activeServer, setActiveServer] = React.useState('us-ny-01');

  const servers = [
    { id: 'us-ny-01', name: 'New York 01', location: 'United States', ping: 24, load: 35 },
    { id: 'eu-fr-01', name: 'Paris 01', location: 'France', ping: 89, load: 65 },
    { id: 'ap-jp-01', name: 'Tokyo 01', location: 'Japan', ping: 142, load: 28 },
    { id: 'eu-uk-01', name: 'London 01', location: 'United Kingdom', ping: 78, load: 92 },
  ];

  return (
    <div className="glass-panel rounded-xl p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Server className="h-5 w-5 mr-2 text-vpn-cyan" />
          <h2 className="text-xl font-semibold">Servers</h2>
        </div>
        <div className="text-xs text-muted-foreground">
          <span className="font-medium text-vpn-cyan">4</span>/20 Online
        </div>
      </div>
      
      <div className="space-y-3">
        {servers.map((server) => (
          <ServerItem 
            key={server.id}
            name={server.name}
            location={server.location}
            ping={server.ping}
            load={server.load}
            isActive={server.id === activeServer}
            onClick={() => setActiveServer(server.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServerList;
