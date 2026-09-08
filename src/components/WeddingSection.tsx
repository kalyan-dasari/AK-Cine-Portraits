import React from 'react';
import { Sparkles, Calendar, Heart, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../data/portfolioData';

interface WeddingSectionProps {
  onExploreWeddings: () => void;
}

export const WeddingSection: React.FC<WeddingSectionProps> = ({ onExploreWeddings }) => {
  return (
    <section className="relative py-32 md:py-44 w-full bg-[#070709] text-white overflow-hidden">
      {/* Large dramatic background wedding image with filmic treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2560&q=90"
          alt="Dramatic wedding backdrop AK Cine Portraits"
          className="w-full h-full object-cover object-center transform scale-105 opacity-35"
          referrerPolicy="no-referrer"
        />
        {/* Layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-[#070709]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-transparent to-[#070709]" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Wedding Focus Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#f3e5ab] font-medium">
            Signature Wedding Stories
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-tight leading-[1.1] mb-6">
          Your Day. Your Story. <br />
          <span className="italic font-medium text-[#f3e5ab]">Forever.</span>
        </h2>

        {/* Supporting Quote */}
        <p className="max-w-2xl text-base sm:text-xl text-[#c7c7d2] font-light leading-relaxed mb-12">
          "From quiet emotions to unforgettable celebrations, we document your wedding exactly as it felt."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16">
          <button
            onClick={onExploreWeddings}
            id="explore-wedding-stories-btn"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#d4af37] text-black text-xs uppercase tracking-[0.25em] font-semibold hover:bg-white transition-all duration-300 shadow-2xl cursor-pointer"
          >
            Explore Wedding Stories
          </button>

          <a
            href={getWhatsAppLink('Hello AK Cine Portraits, we are planning our wedding and would love to check availability for our wedding dates.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/60 border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-medium hover:border-[#d4af37] hover:text-[#f3e5ab] transition-all duration-300 backdrop-blur-md"
          >
            Check Wedding Dates on WhatsApp
          </a>
        </div>

        {/* Trust & Craft Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full pt-12 border-t border-white/10 max-w-3xl">
          <div className="flex flex-col items-center">
            <Heart className="w-5 h-5 text-[#d4af37] mb-2" />
            <span className="font-editorial text-2xl text-white font-medium">Candid & Emotional</span>
            <span className="text-xs text-[#8c8c98] mt-1 font-light">Natural tears, laughter & rituals</span>
          </div>

          <div className="flex flex-col items-center">
            <Sparkles className="w-5 h-5 text-[#d4af37] mb-2" />
            <span className="font-editorial text-2xl text-white font-medium">4K Cinema Grading</span>
            <span className="text-xs text-[#8c8c98] mt-1 font-light">Color graded for eternity</span>
          </div>

          <div className="flex flex-col items-center">
            <Calendar className="w-5 h-5 text-[#d4af37] mb-2" />
            <span className="font-editorial text-2xl text-white font-medium">Limited Bookings</span>
            <span className="text-xs text-[#8c8c98] mt-1 font-light">Dedicated focus per celebration</span>
          </div>
        </div>

      </div>
    </section>
  );
};
