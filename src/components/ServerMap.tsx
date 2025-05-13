
import React, { useState } from 'react';
import { Globe } from 'lucide-react';

// Simplified map with dots representing server locations
const ServerMap = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  // Simplified server locations
  const locations = [
    { id: 'us', name: 'United States', x: 85, y: 120, online: true },
    { id: 'eu', name: 'Europe', x: 235, y: 110, online: true },
    { id: 'jp', name: 'Japan', x: 380, y: 130, online: true },
    { id: 'au', name: 'Australia', x: 375, y: 220, online: false },
    { id: 'br', name: 'Brazil', x: 150, y: 200, online: true },
  ];

  return (
    <div className="glass-panel rounded-xl p-6 h-full">
      <div className="flex items-center mb-4">
        <Globe className="h-5 w-5 mr-2 text-vpn-cyan" />
        <h2 className="text-xl font-semibold">Global Network</h2>
      </div>
      
      <div className="relative w-full h-[280px] bg-cyber-grid bg-[length:40px_40px] rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-glow-grid"></div>
        
        {/* Simplified world map outlines would go here in a real implementation */}
        {/* For now we'll just show location dots */}
        
        {locations.map((location) => (
          <div 
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${location.x}px`, top: `${location.y}px` }}
            onMouseEnter={() => setHoveredLocation(location.id)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <div className={`h-3 w-3 rounded-full ${location.online ? 'bg-vpn-cyan' : 'bg-vpn-red'} ${
              hoveredLocation === location.id ? 'animate-pulse-glow' : ''
            }`}></div>
            
            {hoveredLocation === location.id && (
              <div className="absolute top-5 left-0 bg-card/90 backdrop-blur-sm rounded px-2 py-1 text-xs whitespace-nowrap z-10">
                {location.name}
                <div className="flex items-center gap-1 mt-1">
                  <div className={`status-badge ${location.online ? 'online' : 'offline'}`}></div>
                  <span>{location.online ? 'Online' : 'Offline'}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-sm text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>5 Countries Available</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="status-badge online"></div>
              <span>Online (4)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="status-badge offline"></div>
              <span>Offline (1)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerMap;
