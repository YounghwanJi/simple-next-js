
import React from 'react';
import { NAV_LINKS } from '../../../shared/lib/constants';
import { Button } from '../../../shared/ui/atoms/Button';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <div className="w-5 h-5 bg-black rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-2xl font-bold tracking-tighter uppercase">Sunday</span>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-xs font-bold tracking-widest text-zinc-500 hover:text-white transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Login
          </Button>
          <Button variant="primary" size="sm" className="hidden sm:inline-flex">
            Apply for Beta
          </Button>
          <button className="lg:hidden p-2 text-zinc-400">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
