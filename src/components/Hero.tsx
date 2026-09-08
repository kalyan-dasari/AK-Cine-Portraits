import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { STUDIO_CONFIG, getWhatsAppLink } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#070709]"
    >
      {/* Background Image Container with Cinematic Vignette & Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2560&q=90"
          alt="AK Cine Portraits Luxury Wedding Couple"
          className="w-full h-full object-cover object-center transform scale-105 animate-[pulse_14s_ease-in-out_infinite_alternate] opacity-65"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Film Vignette & Multi-Stage Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/60 to-[#070709]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/80 via-transparent to-[#070709]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#070709]/40 to-[#070709]" />
        {/* Subtle Warm Amber Light Beam */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#d4af37]/10 blur-[140px] pointer-events-none rounded-full" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20 flex flex-col items-center">
        
        {/* Subtle Studio Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-medium">
            Fine Art & Cinema Studio
          </span>
        </div>

        {/* Brand Name Overlay */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.16em] uppercase text-white font-medium leading-[1.05] drop-shadow-2xl mb-4">
          AK CINE PORTRAITS
        </h1>

        {/* Tagline */}
        <p className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#f3e5ab] font-normal tracking-wide drop-shadow-md mb-6">
          Capturing Moments. Creating Stories.
        </p>

        {/* Small Supporting Text */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#b8b8c2] font-light leading-relaxed tracking-wide mb-10 px-4">
          {STUDIO_CONFIG.subTagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* View Our Work */}
          <button
            onClick={onExploreClick}
            id="hero-view-work-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] group cursor-pointer"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* WhatsApp Us */}
          <a
            href={getWhatsAppLink('Hello AK Cine Portraits, I saw your portfolio and would like to chat about booking a session.')}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#16161c]/80 border border-[#d4af37]/40 text-[#f3e5ab] text-xs uppercase tracking-[0.25em] font-medium hover:border-[#d4af37] hover:bg-[#d4af37]/15 transition-all duration-300 backdrop-blur-md group"
          >
            <svg
              className="w-4 h-4 fill-current text-[#d4af37] transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.79 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.15.11-3.69-.94-3.25-1.35-5.34-4.66-5.5-4.88-.16-.22-1.32-1.75-1.32-3.34 0-1.59.83-2.37 1.13-2.69.3-.32.65-.4 0.87-.4.22 0 .43 0 .62.01.2.01.47-.08.73.55.27.67.92 2.27 1 2.43.08.17.14.37.03.59-.11.22-.17.36-.33.55-.16.2-.35.44-.5.59-.17.17-.35.36-.15.7.2.34.88 1.45 1.89 2.35 1.3 1.16 2.4 1.52 2.74 1.69.34.17.54.14.74-.09.2-.23.86-1.01 1.09-1.36.23-.35.46-.29.77-.18.31.11 1.98.93 2.32 1.1.34.17.57.26.65.4.08.14.08.82-.16 1.49z"/>
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Small Scroll Indicator at bottom */}
      <button
        onClick={onExploreClick}
        aria-label="Scroll down to explore"
        id="hero-scroll-indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#a1a1aa] hover:text-[#d4af37] transition-colors group cursor-pointer focus:outline-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans">
          Scroll to explore
        </span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#d4af37]/60 transition-colors">
          <div className="w-1 h-2 bg-[#d4af37] rounded-full animate-bounce mt-0.5" />
        </div>
      </button>
    </section>
  );
};
