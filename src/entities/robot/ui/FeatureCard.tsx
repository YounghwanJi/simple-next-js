import React from 'react';
import Image from 'next/image';
import { FeatureItem } from '../../../shared/lib/types';

export const FeatureCard: React.FC<FeatureItem> = ({ title, description, imageUrl, tag }) => {
  return (
    <div className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 h-full">
      <div className="aspect-[16/10] overflow-hidden relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          quality={85}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
      <div className="p-10 relative mt-[-40px]">
        <div className="text-yellow-400 text-xs font-bold uppercase mb-4 tracking-widest">{tag}</div>
        <h3 className="text-4xl font-medium mb-6 tracking-tight leading-tight">{title}</h3>
        <p className="text-zinc-400 text-base leading-relaxed max-w-sm mb-8">
          {description}
        </p>
        <button className="flex items-center gap-3 text-sm font-semibold tracking-wide hover:text-yellow-400 transition-colors group/btn">
          <span>DISCOVER CAPABILITIES</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover/btn:translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};
