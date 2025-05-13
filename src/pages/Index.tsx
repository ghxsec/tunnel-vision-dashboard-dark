
import React from 'react';
import Sidebar from '../components/Sidebar';
import ConnectionStatus from '../components/ConnectionStatus';
import ServerMap from '../components/ServerMap';
import Stats from '../components/Stats';
import QuickActions from '../components/QuickActions';
import ServerList from '../components/ServerList';
import { Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background bg-cyber-grid bg-fixed">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-border flex items-center px-6">
          <div className="flex items-center space-x-2 ml-auto">
            <div className="text-sm text-muted-foreground mr-4">
              Last connection: <span className="text-foreground">Today, 15:42</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              <Shield size={16} />
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
          <p className="text-muted-foreground mb-6">Monitor and control your secure connection</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <ConnectionStatus />
            </div>
            <div className="md:col-span-2">
              <ServerMap />
            </div>
          </div>
          
          <div className="mb-6">
            <QuickActions />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Stats />
            </div>
            <div>
              <ServerList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
