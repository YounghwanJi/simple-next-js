
import React from 'react';
import { STATS } from '../../../shared/lib/constants';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-32 border-y border-white/5 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-20">
        {STATS.map((stat) => (
          <div key={stat.label} className="group flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 group-hover:text-yellow-400 transition-colors">
              {stat.label}
            </div>
            <div className="text-6xl md:text-7xl font-light mb-2 tracking-tighter">
              {stat.value}
            </div>
            <div className="text-zinc-600 text-xs uppercase tracking-widest font-medium">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
