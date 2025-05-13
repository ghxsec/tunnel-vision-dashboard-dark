
import React, { useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { WifiHigh, WifiOff } from 'lucide-react';
import { cn } from '@/lib/utils';

const ConnectionStatus = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleToggleConnection = async () => {
    if (isConnected) {
      setIsConnected(false);
      return;
    }

    setIsConnecting(true);
    // Simulate connection delay
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
    }, 1500);
  };

  const getStatusClass = () => {
    if (isConnecting) return "connecting";
    return isConnected ? "online" : "offline";
  };

  return (
    <div className="glass-panel rounded-xl p-6 flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Connection</h2>
        <Switch 
          checked={isConnected || isConnecting} 
          onCheckedChange={handleToggleConnection} 
          disabled={isConnecting}
        />
      </div>

      <div className="relative w-36 h-36 flex items-center justify-center mb-6">
        <div className={cn(
          "absolute w-36 h-36 rounded-full",
          isConnected ? "bg-vpn-cyan/10" : "bg-background",
          isConnected && "animate-pulse-glow"
        )}>
        </div>
        <div className={cn(
          "absolute w-28 h-28 rounded-full",
          isConnected ? "bg-vpn-cyan/15" : "bg-background/60"
        )}>
        </div>
        <div className={cn(
          "absolute w-20 h-20 rounded-full border-2 flex items-center justify-center",
          isConnected ? "border-vpn-cyan text-vpn-cyan" : "border-muted text-muted-foreground"
        )}>
          {isConnected ? (
            <WifiHigh size={36} className="animate-pulse" />
          ) : (
            <WifiOff size={36} />
          )}
        </div>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <div className={cn("status-badge", getStatusClass())}></div>
          <p className="font-semibold">
            {isConnecting ? "Connecting..." : isConnected ? "Protected" : "Not Protected"}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          {isConnected 
            ? "Your connection is secure" 
            : "Your network is not encrypted"}
        </p>
      </div>
    </div>
  );
};

export default ConnectionStatus;
