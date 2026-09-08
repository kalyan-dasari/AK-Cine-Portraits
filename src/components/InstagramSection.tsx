import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { STUDIO_CONFIG, INSTAGRAM_POSTS } from '../data/portfolioData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-28 md:py-36 bg-[#09090c] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium">
                Live From The Studio
              </span>
            </div>
            {/* Required Heading */}
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight">
              Follow The Journey
            </h2>
            {/* Required Text */}
            <p className="max-w-md text-base text-[#9e9ea8] font-light mt-3">
              More stories, behind-the-scenes moments and recent work.
            </p>
          </div>

          {/* Instagram Handle & Button */}
          <div className="mt-6 md:mt-0">
            <a
              href={STUDIO_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="instagram-profile-btn"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1d141e] via-[#1c1724] to-[#141822] border border-[#d4af37]/40 text-white text-xs uppercase tracking-[0.2em] font-medium hover:border-[#d4af37] hover:text-[#f3e5ab] transition-all duration-300 shadow-xl group"
            >
              <Instagram className="w-4 h-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
              <span>@ak_cineportraits</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Editorial Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#121217] transition-all duration-300 hover:border-[#d4af37]/60"
            >
              <img
                src={post.image}
                alt="Instagram feed preview"
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay with Likes & Comments */}
              <div className="absolute inset-0 bg-[#070709]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 backdrop-blur-[2px]">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-[#d4af37]" />
                </div>

                <div className="text-center my-auto">
                  <div className="flex items-center justify-center gap-4 text-xs text-white font-medium mb-2">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-current" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-white/80" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#c2c2ce] line-clamp-2 font-light">
                    {post.caption}
                  </p>
                </div>

                <span className="text-[10px] text-center text-[#d4af37] uppercase tracking-widest font-mono">
                  View On Instagram
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0f0f14] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#181822] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-editorial text-lg text-white font-medium">Join 20k+ Followers on Instagram</h4>
              <p className="text-xs text-[#8c8c98]">Daily wedding sneaks, behind the lenses, and cinematography reels.</p>
            </div>
          </div>
          <a
            href={STUDIO_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            Follow @ak_cineportraits
          </a>
        </div>

      </div>
    </section>
  );
};
