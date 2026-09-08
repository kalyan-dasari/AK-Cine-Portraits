import React from 'react';
import { Instagram, Youtube, Phone, ArrowUp } from 'lucide-react';
import { STUDIO_CONFIG, getWhatsAppLink } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-white pt-20 pb-28 md:pb-20 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Identity */}
          <div className="max-w-md">
            <h2 className="font-editorial text-3xl sm:text-4xl tracking-[0.18em] text-white font-medium mb-1">
              AK CINE PORTRAITS
            </h2>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-sans mb-4">
              Photography & Cinematography
            </p>
            <p className="font-editorial italic text-lg text-[#adadb8] font-light">
              "Capturing Moments. Creating Stories."
            </p>
          </div>

          {/* Social Icons & Phone Contact */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            {/* Phone badge */}
            <a
              href={`tel:${STUDIO_CONFIG.phoneClean}`}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#111116] border border-white/10 hover:border-[#d4af37] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span className="text-xs tracking-wider text-white font-medium">
                {STUDIO_CONFIG.phone}
              </span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href={STUDIO_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @ak_cineportraits"
                className="w-12 h-12 rounded-full bg-[#111116] border border-white/10 flex items-center justify-center text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* YouTube */}
              <a
                href={STUDIO_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube @akcineportraits"
                className="w-12 h-12 rounded-full bg-[#111116] border border-white/10 flex items-center justify-center text-white hover:text-red-500 hover:border-red-500 transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp +91 96528 14195"
                className="w-12 h-12 rounded-full bg-[#111116] border border-white/10 flex items-center justify-center text-white hover:text-[#25D366] hover:border-[#25D366] transition-all duration-300 group"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.79 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.15.11-3.69-.94-3.25-1.35-5.34-4.66-5.5-4.88-.16-.22-1.32-1.75-1.32-3.34 0-1.59.83-2.37 1.13-2.69.3-.32.65-.4 0.87-.4.22 0 .43 0 .62.01.2.01.47-.08.73.55.27.67.92 2.27 1 2.43.08.17.14.37.03.59-.11.22-.17.36-.33.55-.16.2-.35.44-.5.59-.17.17-.35.36-.15.7.2.34.88 1.45 1.89 2.35 1.3 1.16 2.4 1.52 2.74 1.69.34.17.54.14.74-.09.2-.23.86-1.01 1.09-1.36.23-.35.46-.29.77-.18.31.11 1.98.93 2.32 1.1.34.17.57.26.65.4.08.14.08.82-.16 1.49z"/>
                </svg>
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-black border border-white/10 flex items-center justify-center transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#757582] font-light">
          <p>
            {STUDIO_CONFIG.copyright}
          </p>

          <p className="flex items-center gap-2">
            <span>Fine Art Wedding Photography & 4K Cinematography</span>
            <span className="text-[#d4af37]">•</span>
            <span>Worldwide Availability</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
