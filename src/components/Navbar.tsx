import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { STUDIO_CONFIG, getWhatsAppLink } from '../data/portfolioData';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Films', href: '#films' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (onNavigate) {
      onNavigate(targetId);
    }
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#070709]/90 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex flex-col focus:outline-none"
          id="nav-logo"
        >
          <span className="font-editorial text-xl sm:text-2xl tracking-[0.22em] text-white font-semibold transition-colors group-hover:text-[#d4af37]">
            AK CINE PORTRAITS
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#a1a1aa] uppercase font-sans -mt-0.5">
            Photography & Cinematography
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs uppercase tracking-[0.2em] text-[#c4c4cc] hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: WhatsApp Us */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-cta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium bg-[#131317] border border-[#d4af37]/40 text-[#f3e5ab] hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] group"
          >
            <svg
              className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.79 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.15.11-3.69-.94-3.25-1.35-5.34-4.66-5.5-4.88-.16-.22-1.32-1.75-1.32-3.34 0-1.59.83-2.37 1.13-2.69.3-.32.65-.4 0.87-.4.22 0 .43 0 .62.01.2.01.47-.08.73.55.27.67.92 2.27 1 2.43.08.17.14.37.03.59-.11.22-.17.36-.33.55-.16.2-.35.44-.5.59-.17.17-.35.36-.15.7.2.34.88 1.45 1.89 2.35 1.3 1.16 2.4 1.52 2.74 1.69.34.17.54.14.74-.09.2-.23.86-1.01 1.09-1.36.23-.35.46-.29.77-.18.31.11 1.98.93 2.32 1.1.34.17.57.26.65.4.08.14.08.82-.16 1.49z"/>
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#d4af37] focus:outline-none transition-colors"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#070709]/98 border-b border-white/10 backdrop-blur-2xl px-6 py-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base uppercase tracking-[0.2em] text-[#d4d4dc] hover:text-[#d4af37] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium bg-[#d4af37] text-black font-semibold"
            >
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${STUDIO_CONFIG.phoneClean}`}
              className="flex items-center justify-center gap-3 w-full py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium bg-[#15151a] border border-white/15 text-white"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call +91 96528 14195</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
