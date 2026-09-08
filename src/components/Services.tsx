import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, getWhatsAppLink } from '../data/portfolioData';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-28 md:py-36 bg-[#070709] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium">
                Our Craft & Specialties
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight">
              Curated Services
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#9e9ea8] font-light mt-4 md:mt-0">
            Every celebration has its own cadence. We tailor our photography and cinematography packages to mirror your distinct vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const cardWhatsAppUrl = getWhatsAppLink(
              `Hello AK Cine Portraits, I am interested in booking or receiving pricing for your "${service.title}" service.`
            );

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between min-h-[460px] rounded-2xl overflow-hidden border border-white/10 bg-[#0e0e12] transition-all duration-500 hover:border-[#d4af37]/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
              >
                {/* Background Photography with subtle zoom on hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110 opacity-40 group-hover:opacity-50"
                    referrerPolicy="no-referrer"
                  />
                  {/* Multi-layered dark gradient overlay for crystal clear text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-[#070709]/40" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
                </div>

                {/* Card Header Content */}
                <div className="relative z-10 p-7 sm:p-8 flex items-start justify-between">
                  <span className="text-xs tracking-[0.25em] text-[#d4af37] font-mono uppercase bg-[#141419]/90 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                    0{index + 1}
                  </span>
                  <a
                    href={cardWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-[#d4af37] group-hover:text-black group-hover:border-[#d4af37] transition-all duration-300 transform group-hover:rotate-45"
                    aria-label={`Inquire for ${service.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Card Body Content */}
                <div className="relative z-10 p-7 sm:p-8 pt-0 flex flex-col justify-end">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium mb-2 tracking-wide group-hover:text-[#f3e5ab] transition-colors">
                    {service.title}
                  </h3>

                  {/* Required Quotation/Subtitle */}
                  <p className="text-sm font-editorial italic text-[#e5c07b] mb-4 leading-relaxed">
                    "{service.subtitle}"
                  </p>

                  <p className="text-xs sm:text-sm text-[#a5a5b0] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlight Pills */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-white/10">
                    {service.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#c8c8d0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp Inquiry Link */}
                  <a
                    href={cardWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-xs uppercase tracking-[0.18em] font-medium text-white/90 group-hover:text-[#d4af37] transition-colors pt-2"
                  >
                    <span>Inquire for this shoot</span>
                    <span className="text-[#d4af37]">&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
