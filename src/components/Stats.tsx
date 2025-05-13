
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Download, Upload, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const data = [
  { time: '00:00', download: 20, upload: 5 },
  { time: '01:00', download: 15, upload: 3 },
  { time: '02:00', download: 12, upload: 4 },
  { time: '03:00', download: 8, upload: 2 },
  { time: '04:00', download: 10, upload: 3 },
  { time: '05:00', download: 22, upload: 6 },
  { time: '06:00', download: 28, upload: 7 },
  { time: '07:00', download: 35, upload: 9 },
  { time: '08:00', download: 42, upload: 12 },
];

type StatCardProps = {
  icon: React.ElementType;
  title: string;
  value: string;
  unit: string;
  className?: string;
};

const StatCard = ({ icon: Icon, title, value, unit, className }: StatCardProps) => (
  <div className={cn('glass-panel rounded-lg p-4 flex flex-col', className)}>
    <div className="flex items-center text-muted-foreground mb-2">
      <Icon className="h-4 w-4 mr-2" />
      <span className="text-sm">{title}</span>
    </div>
    <div className="flex items-baseline">
      <span className="text-2xl font-bold">{value}</span>
      <span className="ml-1 text-xs text-muted-foreground">{unit}</span>
    </div>
  </div>
);

const Stats = () => {
  return (
    <div className="glass-panel rounded-xl p-6 h-full">
      <div className="flex items-center mb-6">
        <TrendingUp className="h-5 w-5 mr-2 text-vpn-cyan" />
        <h2 className="text-xl font-semibold">Performance</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard 
          icon={Download} 
          title="Download" 
          value="42.8" 
          unit="Mbps" 
        />
        <StatCard 
          icon={Upload} 
          title="Upload" 
          value="12.3" 
          unit="Mbps" 
        />
        <StatCard 
          icon={Clock} 
          title="Latency" 
          value="24" 
          unit="ms" 
        />
      </div>

      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorDownload" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorUpload" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 10, fill: '#8E9196' }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#8E9196' }}
              tickFormatter={(value) => `${value}Mb`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(12, 20, 36, 0.8)', 
                borderColor: 'rgba(59, 130, 246, 0.5)',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
              }}
              labelStyle={{ color: '#fff', fontWeight: 'bold' }}
              itemStyle={{ color: '#fff' }}
              formatter={(value) => [`${value} Mbps`, '']}
            />
            <Area 
              type="monotone" 
              dataKey="upload" 
              stroke="#22d3ee" 
              fillOpacity={1}
              fill="url(#colorUpload)" 
            />
            <Area 
              type="monotone" 
              dataKey="download" 
              stroke="#3b82f6" 
              fillOpacity={1}
              fill="url(#colorDownload)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-4 mt-2 text-xs text-muted-foreground">
        <div className="flex items-center">
          <div className="h-2 w-2 bg-vpn-blue rounded-full mr-1"></div>
          <span>Download</span>
        </div>
        <div className="flex items-center">
          <div className="h-2 w-2 bg-vpn-cyan rounded-full mr-1"></div>
          <span>Upload</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
