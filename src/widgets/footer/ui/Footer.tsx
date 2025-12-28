
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-40 pb-20 px-8 md:px-12 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-40">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-black rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase">Sunday</span>
            </div>
            <p className="text-zinc-500 text-lg mb-10 leading-relaxed max-w-xs font-light">
              Building the physical interface for the artificial intelligence era.
            </p>
            <div className="flex gap-6">
              {['Twitter', 'LinkedIn', 'Instagram'].map(platform => (
                <a key={platform} href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">{platform}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em]">Hardware</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Actuators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vision Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skin Tech</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Battery Life</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em]">Software</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">World Model</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Layer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Access</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em]">Company</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-white/5 gap-10">
          <div className="flex items-center gap-10 text-[10px] text-zinc-600 font-bold tracking-widest uppercase">
            <span>© 2025 Sunday Systems Inc.</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          
          <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] px-6 py-3 bg-zinc-900 text-zinc-400 rounded-full border border-white/5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            SYSTEM STATUS: OPERATIONAL • V3.4.1
          </div>
        </div>
      </div>
    </footer>
  );
};
