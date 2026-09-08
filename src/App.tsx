import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedWork } from './components/FeaturedWork';
import { WeddingSection } from './components/WeddingSection';
import { YouTubeSection } from './components/YouTubeSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<'All' | 'Weddings' | 'Couples' | 'Portraits' | 'Events'>('All');

  const handleExploreWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWeddings = () => {
    setSelectedGalleryCategory('Weddings');
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#ededef] selection:bg-[#d4af37]/30 selection:text-white relative">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Full-Screen Hero Section */}
        <Hero onExploreClick={handleExploreWork} />

        {/* About / Introduction */}
        <About />

        {/* Services Grid */}
        <Services />

        {/* Featured Work: Editorial Masonry & Fullscreen Lightbox */}
        <FeaturedWork key={selectedGalleryCategory} initialCategory={selectedGalleryCategory} />

        {/* Visually Dramatic Wedding Section */}
        <WeddingSection onExploreWeddings={handleExploreWeddings} />

        {/* YouTube Cinematic Stories Section */}
        <YouTubeSection />

        {/* Instagram Section */}
        <InstagramSection />

        {/* Contact / Booking Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Mobile Bottom CTA Bar */}
      <MobileBottomBar />
    </div>
  );
}
