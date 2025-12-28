
import React from 'react';
import { Button } from '../../../shared/ui/atoms/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-80">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-MGNuCuaRDILGwYtSQdK8gcvW/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="scale-125 md:scale-110 lg:scale-100"
        ></iframe>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pointer-events-none mt-auto pb-24 flex flex-col items-start text-left">
        <div className="max-w-3xl pointer-events-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[1px] bg-yellow-400"></span>
            <p className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase animate-pulse">
              Sunday Systems • Series A Beta
            </p>
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-[9.5rem] font-medium tracking-tighter mb-8 leading-[0.85]">
            <span className="block mb-2">Domestic</span>
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">Intelligence</span>
          </h1>
          <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed font-light">
            Memo is the world&apos;s first AI home companion capable of mastering any domestic skill via human imitation.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button variant="secondary" size="lg">
              Reserve your spot
            </Button>
            <Button variant="outline" size="lg">
              Watch Film
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute left-12 bottom-12 hidden lg:block text-[10px] tracking-[0.5em] text-zinc-700 uppercase vertical-text">
        001 // NEXT-BOT GEN 3
      </div>
    </section>
  );
};
