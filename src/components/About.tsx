import React from 'react';
import { Camera, Film, HeartHandshake } from 'lucide-react';
import { STUDIO_CONFIG, getWhatsAppLink } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#09090c] text-white overflow-hidden border-t border-white/[0.04]">
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Minimal Large Portrait/Couple Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#121216]">
              {/* Aspect Ratio Wrapper for Large Portrait */}
              <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=1400&q=85"
                  alt="Emotional bridal portrait by AK Cine Portraits"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Editorial Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-xl bg-[#08080a]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">Visual Philosophy</p>
                  <p className="font-editorial text-lg text-white font-medium">Unobtrusive & Emotional</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#1c1c24] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Camera className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Subtle decorative frame accent */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#d4af37]/40 pointer-events-none" />
          </div>

          {/* Right Column: Text & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium">
                Our Perspective
              </span>
            </div>

            {/* Main Required Heading */}
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.12] mb-8">
              Every Picture <br />
              <span className="italic text-[#f3e5ab]">Has A Story.</span>
            </h2>

            {/* Required Text */}
            <p className="text-base sm:text-lg text-[#b0b0b8] font-light leading-relaxed mb-8">
              At AK Cine Portraits, we believe photography is more than just taking pictures. It's about capturing the emotions, people and little moments that make every occasion unforgettable.
            </p>

            {/* Secondary Editorial Commentary */}
            <p className="text-sm sm:text-base text-[#888892] font-light leading-relaxed mb-10">
              We look past the rigid posing to find your natural intimacy — the nervous whisper during the vows, a father's tearful embrace, or spontaneous laughter under evening sparklers. Through intentional composition, natural light, and cinematic color palettes, we preserve moments that resonate across generations.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 mb-10">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <HeartHandshake className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs uppercase tracking-wider">Authenticity</span>
                </div>
                <p className="text-xs text-[#8c8c96] leading-relaxed">
                  Real emotions over staged routines.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <Film className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs uppercase tracking-wider">Cinematic</span>
                </div>
                <p className="text-xs text-[#8c8c96] leading-relaxed">
                  4K grading crafted like a feature film.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <Camera className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs uppercase tracking-wider">Artistry</span>
                </div>
                <p className="text-xs text-[#8c8c96] leading-relaxed">
                  Fine-art framing and heirloom albums.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                href={getWhatsAppLink('Hello AK Cine Portraits, I read about your story and would love to discuss an upcoming shoot.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#16161c] border border-[#d4af37]/50 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#d4af37] hover:text-black transition-all duration-300"
              >
                <span>Connect With The Photographer</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
