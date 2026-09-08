import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar, MapPin, Send, CheckCircle } from 'lucide-react';
import { STUDIO_CONFIG, getWhatsAppLink } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Wedding Photography',
    eventDate: '',
    location: '',
    message: '',
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Hello AK Cine Portraits!
My Name: ${formData.name || 'Not provided'}
Phone/WhatsApp: ${formData.phone || 'Not provided'}
Service: ${formData.serviceType}
Event Date: ${formData.eventDate || 'Flexible / TBD'}
Location/City: ${formData.location || 'Not provided'}
Notes: ${formData.message || 'I would like to inquire about package pricing and availability.'}`;

    const link = getWhatsAppLink(formattedMessage);
    window.open(link, '_blank');
    setSentSuccess(true);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#070709] text-white relative border-t border-white/5">
      {/* Ambient lighting */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium">
              Get In Touch
            </span>
            <span className="w-5 h-[1px] bg-[#d4af37]" />
          </div>

          {/* Required Heading */}
          <h2 className="font-editorial text-4xl sm:text-6xl text-white font-medium tracking-tight mb-5">
            Let's Create <br className="sm:hidden" />
            <span className="italic text-[#f3e5ab]">Something Beautiful.</span>
          </h2>

          {/* Required Text */}
          <p className="text-base sm:text-lg text-[#adadb8] font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Planning a wedding, portrait session, event or special shoot? We'd love to hear your story.
          </p>

          {/* Primary Quick Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            {/* Required WhatsApp Us Button */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#d4af37] text-black text-xs uppercase tracking-[0.25em] font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] group"
            >
              <svg
                className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.79 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.15.11-3.69-.94-3.25-1.35-5.34-4.66-5.5-4.88-.16-.22-1.32-1.75-1.32-3.34 0-1.59.83-2.37 1.13-2.69.3-.32.65-.4 0.87-.4.22 0 .43 0 .62.01.2.01.47-.08.73.55.27.67.92 2.27 1 2.43.08.17.14.37.03.59-.11.22-.17.36-.33.55-.16.2-.35.44-.5.59-.17.17-.35.36-.15.7.2.34.88 1.45 1.89 2.35 1.3 1.16 2.4 1.52 2.74 1.69.34.17.54.14.74-.09.2-.23.86-1.01 1.09-1.36.23-.35.46-.29.77-.18.31.11 1.98.93 2.32 1.1.34.17.57.26.65.4.08.14.08.82-.16 1.49z"/>
              </svg>
              <span>WhatsApp Us ({STUDIO_CONFIG.phone})</span>
            </a>

            {/* Required Call Now Button */}
            <a
              href={`tel:${STUDIO_CONFIG.phoneClean}`}
              id="contact-call-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#15151c] border border-white/20 text-white text-xs uppercase tracking-[0.25em] font-medium hover:border-[#d4af37] hover:text-[#f3e5ab] transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Dual Layout: Details Card + Interactive Inquiry Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 bg-[#0e0e13] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-medium block mb-2">
                Direct Contact
              </span>
              <h3 className="font-editorial text-3xl text-white font-medium mb-6">
                Studio Communications
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#181822] border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#7a7a85] block">Direct Phone & WhatsApp</span>
                    <a href={`tel:${STUDIO_CONFIG.phoneClean}`} className="text-base text-white font-medium hover:text-[#d4af37] transition-colors">
                      {STUDIO_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#181822] border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#7a7a85] block">Availability</span>
                    <p className="text-sm text-[#d0d0dc] leading-relaxed">
                      Based in India. Available for destination weddings, couple shoots, and events across India and globally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#181822] border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#7a7a85] block">Wedding Season 2026/2027</span>
                    <p className="text-sm text-[#d0d0dc] leading-relaxed">
                      Now accepting bookings for upcoming auspicious dates. Early reservation recommended.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10">
              <p className="text-xs text-[#8c8c98] font-light leading-relaxed">
                "We treat every commission with the artistry and emotional reverence it deserves."
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Form to WhatsApp */}
          <div className="lg:col-span-7 bg-[#0e0e13] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-medium block mb-1">
                Direct Inquiry
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium">
                Send Your Details Directly to WhatsApp
              </h3>
              <p className="text-xs text-[#9c9ca8] mt-1 font-light">
                Fill this quick form and it will prepare a personalized booking message in WhatsApp for immediate response.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] uppercase tracking-wider text-[#9e9ea8] mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Ananya & Vikram"
                    className="w-full px-4 py-3 rounded-xl bg-[#15151c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[11px] uppercase tracking-wider text-[#9e9ea8] mb-1.5 font-medium">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#15151c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="serviceType" className="block text-[11px] uppercase tracking-wider text-[#9e9ea8] mb-1.5 font-medium">
                    Service Required
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#15151c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                  >
                    <option value="Wedding Photography">Wedding Photography</option>
                    <option value="Wedding Cinematography">Wedding Cinematography</option>
                    <option value="Both Wedding Photo & Cinema">Both Wedding Photo & Cinema</option>
                    <option value="Pre-Wedding & Couple Shoots">Pre-Wedding & Couple Shoots</option>
                    <option value="Portrait Photography">Portrait Photography</option>
                    <option value="Birthday & Private Events">Birthday & Private Events</option>
                    <option value="Custom Shoots / Other">Custom Shoots / Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-[11px] uppercase tracking-wider text-[#9e9ea8] mb-1.5 font-medium">
                    Estimated Date / Month
                  </label>
                  <input
                    type="text"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    placeholder="e.g. Nov 2026 or Dates"
                    className="w-full px-4 py-3 rounded-xl bg-[#15151c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-[11px] uppercase tracking-wider text-[#9e9ea8] mb-1.5 font-medium">
                  Shoot Location / City
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., Hyderabad, Udaipur, Goa, Bengaluru"
                  className="w-full px-4 py-3 rounded-xl bg-[#15151c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] uppercase tracking-wider text-[#9e9ea8] mb-1.5 font-medium">
                  Tell Us About Your Event / Vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share a little about the wedding venues, number of events, or specific moments you want us to capture..."
                  className="w-full px-4 py-3 rounded-xl bg-[#15151c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                id="send-whatsapp-inquiry-btn"
                className="w-full py-4 rounded-xl bg-[#d4af37] text-black text-xs uppercase tracking-[0.25em] font-bold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Inquiry via WhatsApp</span>
              </button>

              {sentSuccess && (
                <div className="flex items-center justify-center gap-2 text-xs text-[#a3e635] pt-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>WhatsApp conversation initiated! Check your WhatsApp window.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
