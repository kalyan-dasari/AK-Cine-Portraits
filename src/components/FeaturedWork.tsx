import React, { useState } from 'react';
import { Maximize2, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem, Category } from '../types';
import { LightboxModal } from './LightboxModal';

interface FeaturedWorkProps {
  initialCategory?: Category | 'All';
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ initialCategory = 'All' }) => {
  const [activeTab, setActiveTab] = useState<Category | 'All'>(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const categories: (Category | 'All')[] = ['All', 'Weddings', 'Couples', 'Portraits', 'Events'];

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const handleOpenLightbox = (index: number) => {
    setActiveItemIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setActiveItemIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setActiveItemIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="work" className="py-28 md:py-36 bg-[#070709] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight">
              Selected Stories
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 p-1.5 rounded-full bg-[#111116] border border-white/10 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 font-medium cursor-pointer ${
                  activeTab === cat
                    ? 'bg-[#d4af37] text-black shadow-lg font-semibold'
                    : 'text-[#a1a1aa] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sophisticated Editorial Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            // Editorial layout variation pattern based on index:
            // Item 0: large feature (lg:col-span-8, aspect 16/10)
            // Item 1: tall portrait (lg:col-span-4, aspect 3/4)
            // Item 2: standard portrait (lg:col-span-4, aspect 3/4)
            // Item 3: standard portrait (lg:col-span-4, aspect 3/4)
            // Item 4: standard portrait (lg:col-span-4, aspect 3/4)
            // Item 5: wide cinematic (lg:col-span-6, aspect 4/3)
            // Item 6: wide cinematic (lg:col-span-6, aspect 4/3)
            const layoutStyles = [
              'lg:col-span-7 aspect-[16/11]',
              'lg:col-span-5 aspect-[4/5]',
              'lg:col-span-4 aspect-[3/4]',
              'lg:col-span-4 aspect-[3/4]',
              'lg:col-span-4 aspect-[3/4]',
              'lg:col-span-6 aspect-[16/10]',
              'lg:col-span-6 aspect-[16/10]',
              'lg:col-span-5 aspect-[4/5]',
              'lg:col-span-7 aspect-[16/11]',
            ][index % 9];

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#121216] cursor-pointer ${layoutStyles}`}
              >
                {/* Image Element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

                {/* Top Corner: Category Pill */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#f3e5ab] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Top Right: Lightbox Trigger Icon */}
                <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom: Editorial Details */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 z-10 transform transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-xs text-[#d4af37] mb-1.5 font-light">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium leading-snug group-hover:text-[#f3e5ab] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#b0b0ba] font-light mt-1.5 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8e8e98] font-sans">
            Click any photograph to view high-resolution story and technical notes
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        activeItem={filteredItems[activeItemIndex] || null}
        items={filteredItems}
        currentIndex={activeItemIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectIndex={(idx) => setActiveItemIndex(idx)}
      />
    </section>
  );
};
