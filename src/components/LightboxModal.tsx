import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';
import { getWhatsAppLink } from '../data/portfolioData';

interface LightboxModalProps {
  isOpen: boolean;
  activeItem: GalleryItem | null;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  activeItem,
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onSelectIndex,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    // Lock scroll
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !activeItem) return null;

  const inquiryWhatsAppUrl = getWhatsAppLink(
    `Hello AK Cine Portraits, I am inquiring about a shoot similar to "${activeItem.title}" (${activeItem.category}) from your portfolio.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={activeItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050507]/98 backdrop-blur-2xl transition-all duration-300 animate-in fade-in"
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 inset-x-0 z-30 p-6 flex items-center justify-between border-b border-white/10 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
            AK CINE PORTRAITS
          </span>
          <span className="text-white/30">•</span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1aa]">
            {activeItem.category}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#8a8a94] tracking-widest">
            {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full pt-20 pb-20 px-4 sm:px-12 flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto overflow-y-auto lg:overflow-visible">
        
        {/* Previous Navigation Button */}
        <button
          onClick={onPrev}
          aria-label="Previous photograph"
          className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 border border-white/15 text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-300 items-center justify-center cursor-pointer shadow-xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Navigation Button */}
        <button
          onClick={onNext}
          aria-label="Next photograph"
          className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 border border-white/15 text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-300 items-center justify-center cursor-pointer shadow-xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Center: Image Showcase */}
        <div className="relative flex-1 flex items-center justify-center max-h-[72vh] w-full">
          <img
            key={activeItem.id}
            src={activeItem.image}
            alt={activeItem.title}
            className="max-h-[68vh] sm:max-h-[74vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10 animate-in fade-in zoom-in-95 duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Story & Details Sidebar */}
        <div className="w-full lg:w-96 shrink-0 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between text-left">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-2 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeItem.category} Story</span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium mb-2 leading-tight">
              {activeItem.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-[#a0a0ab] mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{activeItem.location}</span>
            </div>

            <p className="text-sm font-editorial italic text-[#f3e5ab] mb-4 leading-relaxed border-l-2 border-[#d4af37] pl-3 py-0.5">
              "{activeItem.caption}"
            </p>

            {activeItem.storySnippet && (
              <div className="mb-4">
                <p className="text-xs text-[#8c8c98] leading-relaxed">
                  {activeItem.storySnippet}
                </p>
              </div>
            )}

            {activeItem.photographerNotes && (
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-[11px] text-[#71717a] font-mono mb-6">
                <span className="text-[#d4af37]/80 block uppercase text-[9px] tracking-wider mb-0.5">Technical Note:</span>
                {activeItem.photographerNotes}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <a
              href={inquiryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-full bg-[#d4af37] text-black text-center text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-200"
            >
              Inquire About Similar Shoot
            </a>

            {/* Mobile Prev / Next controls inside drawer */}
            <div className="flex sm:hidden items-center justify-between gap-2 pt-2">
              <button
                onClick={onPrev}
                className="flex-1 py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white flex items-center justify-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <button
                onClick={onNext}
                className="flex-1 py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white flex items-center justify-center gap-1"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="hidden md:flex absolute bottom-0 inset-x-0 h-16 bg-[#070709]/90 border-t border-white/10 items-center justify-center gap-3 px-6 overflow-x-auto">
        {items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => onSelectIndex(idx)}
            className={`relative h-11 w-16 shrink-0 rounded overflow-hidden transition-all duration-200 ${
              idx === currentIndex
                ? 'ring-2 ring-[#d4af37] scale-105 opacity-100'
                : 'opacity-40 hover:opacity-80'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
