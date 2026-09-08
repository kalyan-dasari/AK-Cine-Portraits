import React from 'react';
import { Phone } from 'lucide-react';
import { STUDIO_CONFIG, getWhatsAppLink } from '../data/portfolioData';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#070709]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* WhatsApp CTA */}
        <a
          href={getWhatsAppLink('Hello AK Cine Portraits, I would like to inquire about your photography and cinematography availability.')}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-whatsapp-btn"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#d4af37] text-black text-xs uppercase tracking-[0.16em] font-bold shadow-lg"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.79 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.15.11-3.69-.94-3.25-1.35-5.34-4.66-5.5-4.88-.16-.22-1.32-1.75-1.32-3.34 0-1.59.83-2.37 1.13-2.69.3-.32.65-.4 0.87-.4.22 0 .43 0 .62.01.2.01.47-.08.73.55.27.67.92 2.27 1 2.43.08.17.14.37.03.59-.11.22-.17.36-.33.55-.16.2-.35.44-.5.59-.17.17-.35.36-.15.7.2.34.88 1.45 1.89 2.35 1.3 1.16 2.4 1.52 2.74 1.69.34.17.54.14.74-.09.2-.23.86-1.01 1.09-1.36.23-.35.46-.29.77-.18.31.11 1.98.93 2.32 1.1.34.17.57.26.65.4.08.14.08.82-.16 1.49z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Call CTA */}
        <a
          href={`tel:${STUDIO_CONFIG.phoneClean}`}
          id="mobile-bottom-call-btn"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#16161e] border border-white/20 text-white text-xs uppercase tracking-[0.16em] font-medium"
        >
          <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
};
