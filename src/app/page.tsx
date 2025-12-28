"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Navbar } from '../widgets/header/ui/Navbar';
import { Hero } from '../widgets/hero/ui/Hero';
import { FeatureGrid } from '../widgets/product-grid/ui/FeatureGrid';
import { StatsSection } from '../widgets/stats/ui/StatsSection';
import { FAQSection } from '../widgets/faq/ui/FAQSection';
import { Footer } from '../widgets/footer/ui/Footer';

const LandingPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <>
        <Navbar isScrolled={scrollY > 100} />

        <main>
          <Hero />

          <section id="capabilities" className="py-40 px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="mb-32 text-center max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-medium mb-10 tracking-tighter">
                  The future of <span className="italic font-serif">helpful</span> robots
                </h2>
                <p className="text-2xl text-zinc-400 leading-relaxed font-light">
                  Our vision is to build general-purpose home intelligence that learns through human guidance. No more programming—just teaching.
                </p>
              </div>

              <FeatureGrid />
            </div>
          </section>

          <StatsSection />

          <section id="tech" className="py-40 bg-zinc-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute -inset-20 bg-yellow-400/5 blur-[120px] rounded-full"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                        alt="Precision Technology"
                        width={800}
                        height={600}
                        className="relative z-10 rounded-[3rem] border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 shadow-3xl"
                        quality={80}
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <span className="text-yellow-400 text-xs font-bold tracking-[0.5em] uppercase mb-8 block">Architecture</span>
                  <h2 className="text-6xl font-medium mb-10 tracking-tight leading-tight text-balance">Soft hardware, hard intelligence.</h2>
                  <p className="text-zinc-400 text-xl leading-relaxed mb-12 font-light">
                    Memo combines custom-engineered musculoskeletal actuators with a massive 175B parameter world model, allowing it to navigate the messiness of real human homes with grace and common sense.
                  </p>
                  <button className="px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-yellow-400 transition-all flex items-center gap-4 group">
                    <span>Explore Engineering</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="py-40 px-8 md:px-12 lg:px-24">
            <FAQSection />
          </section>

          <section className="py-48 px-8 text-center bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black opacity-50"></div>
            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-6xl md:text-8xl font-medium mb-12 tracking-tight">Become a Founder.</h2>
              <p className="text-zinc-400 text-2xl mb-16 leading-relaxed max-w-2xl mx-auto font-light">We are accepting applications for our first cohort of 100 beta test homes.</p>
              <button className="bg-yellow-400 text-black px-16 py-7 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-yellow-400/20">
                Apply to the Founder&apos;s Program
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </>
  );
};

export default LandingPage;
