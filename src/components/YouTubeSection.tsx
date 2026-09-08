import React, { useState } from 'react';
import { Play, Youtube, ExternalLink, X, Film, Volume2, VolumeX } from 'lucide-react';
import { STUDIO_CONFIG, FEATURED_FILMS } from '../data/portfolioData';

export const YouTubeSection: React.FC = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<boolean>(false);
  const [selectedFilmIndex, setSelectedFilmIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const activeFilm = FEATURED_FILMS[selectedFilmIndex] || FEATURED_FILMS[0];

  return (
    <section id="films" className="py-28 md:py-36 bg-[#070709] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium">
                Cinematography & Films
              </span>
            </div>
            {/* Required Heading */}
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight">
              Watch Our Stories
            </h2>
            {/* Required Text */}
            <p className="max-w-md text-base text-[#9e9ea8] font-light mt-3">
              Experience our work beyond photographs.
            </p>
          </div>

          {/* Required YouTube Button */}
          <div className="mt-6 md:mt-0">
            <a
              href={STUDIO_CONFIG.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="youtube-channel-btn"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#18181f] border border-red-500/40 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-xl group"
            >
              <Youtube className="w-4 h-4 text-red-500 group-hover:text-white transition-colors" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Large Video Thumbnail Placeholder with Play Button */}
        <div className="relative group rounded-3xl overflow-hidden border border-white/15 bg-[#0e0e13] shadow-2xl">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src={activeFilm.thumbnail}
              alt={activeFilm.title}
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105 opacity-65"
              referrerPolicy="no-referrer"
            />
            {/* Dark cinematic filmic gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/40 to-black/60" />
            
            {/* Film Title & Location Pill overlay */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10 flex flex-wrap items-center gap-3">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[#d4af37]">
                Featured Wedding Film
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white/90">
                {activeFilm.duration}
              </span>
            </div>

            {/* Glowing Center Play Button */}
            <button
              onClick={() => setActiveVideoModal(true)}
              aria-label="Play cinematic film preview"
              id="play-cinematic-film-btn"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.6)] transform transition-transform duration-300 group-hover:scale-110 cursor-pointer focus:outline-none"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
            </button>

            {/* Bottom Film Details */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <span className="text-xs text-[#d4af37] uppercase tracking-[0.2em] font-medium block mb-1">
                  {activeFilm.couple} • {activeFilm.location}
                </span>
                <h3 className="font-editorial text-2xl sm:text-4xl text-white font-medium leading-tight">
                  {activeFilm.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#c4c4d0] font-light mt-2 line-clamp-2">
                  {activeFilm.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={STUDIO_CONFIG.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 text-xs uppercase tracking-[0.18em] transition-colors backdrop-blur-md"
                >
                  Visit Channel
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Film Catalog Teaser Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {FEATURED_FILMS.map((film, idx) => (
            <div
              key={film.id}
              onClick={() => {
                setSelectedFilmIndex(idx);
                setActiveVideoModal(true);
              }}
              className={`p-5 rounded-2xl border transition-all duration-300 flex items-center gap-5 cursor-pointer ${
                idx === selectedFilmIndex
                  ? 'bg-[#121217] border-[#d4af37]/60'
                  : 'bg-[#0b0b0e] border-white/10 hover:border-white/30'
              }`}
            >
              <div className="relative w-24 h-16 sm:w-32 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-black">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-current" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37]">
                  {film.couple}
                </span>
                <h4 className="font-editorial text-lg text-white font-medium truncate mt-0.5">
                  {film.title}
                </h4>
                <span className="text-xs text-[#80808a] block mt-1">
                  {film.duration} • {film.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Showcase Modal Player */}
      {activeVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-in fade-in"
        >
          <div className="relative w-full max-w-5xl bg-[#0d0d12] border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/50">
              <div className="flex items-center gap-3">
                <Film className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#e0e0e8] font-medium">
                  {activeFilm.title}
                </span>
              </div>
              <button
                onClick={() => setActiveVideoModal(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black text-white transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cinematic Presentation Canvas */}
            <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeFilm.thumbnail}
                alt={activeFilm.title}
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />

              {/* Cinematic Center Overlay */}
              <div className="relative z-10 text-center px-6 max-w-xl">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
                  <Play className="w-8 h-8 fill-current ml-0.5" />
                </div>
                <h4 className="font-editorial text-2xl sm:text-3xl text-white font-medium mb-2">
                  {activeFilm.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#b5b5c2] mb-6">
                  {activeFilm.description}
                </p>

                <a
                  href={STUDIO_CONFIG.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-xl"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Stream Full Film on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#09090c] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8c8c98]">
              <span>Mastered in 4K DCI • Sound Design & Score by AK Cine Portraits</span>
              <a
                href={STUDIO_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline"
              >
                Subscribe to @akcineportraits on YouTube &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
