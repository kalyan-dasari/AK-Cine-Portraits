import { GalleryItem, ServiceItem, InstagramPost, FilmItem } from '../types';

export const STUDIO_CONFIG = {
  name: 'AK Cine Portraits',
  tagline: 'Capturing Moments. Creating Stories.',
  subTagline: "Photography & Cinematography for Weddings, Portraits, Couples & Life's Beautiful Moments.",
  phone: '+91 96528 14195',
  phoneClean: '+919652814195',
  whatsappNumber: '919652814195',
  instagramHandle: '@ak_cineportraits',
  instagramUrl: 'https://www.instagram.com/ak_cineportraits',
  youtubeHandle: '@akcineportraits',
  youtubeUrl: 'https://youtube.com/@akcineportraits',
  location: 'Available for Destination Weddings & Shoots Worldwide',
  copyright: '© 2026 AK Cine Portraits. All rights reserved.',
};

export const getWhatsAppLink = (customText?: string) => {
  const defaultText = `Hello AK Cine Portraits, I would like to inquire about your photography and cinematography services for an upcoming event.`;
  const text = encodeURIComponent(customText || defaultText);
  return `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${text}`;
};

// =========================================================================
// SERVICES DATA
// Photographer can easily update images and descriptions here
// =========================================================================
export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    subtitle: 'From the first glance to the final celebration, we capture every emotion.',
    description: 'Every tear, burst of laughter, and sacred ritual documented with fine-art precision. We blend unobtrusive documentary coverage with magazine-grade couple portraits.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Full Day Documentary Coverage', 'Candid Moments & Rituals', 'High-Resolution Color Graded Gallery', 'Luxury Fine-Art Album Options'],
    duration: 'Full Day / Multi-Day Coverage',
  },
  {
    id: 'wedding-cinematography',
    title: 'Wedding Cinematography',
    subtitle: 'Cinematic films that let you relive your most important moments.',
    description: 'We craft evocative visual films with high dynamic range cameras, intentional sound design, and emotional musical scoring that turns your special day into a timeless feature.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
    highlights: ['4K Cinema Camera Rigging', 'Teaser Reel for Instagram', 'Extended Feature Documentary Film', 'Drone Aerial Footage'],
    duration: 'Multi-Camera Cinematic Production',
  },
  {
    id: 'pre-wedding-shoots',
    title: 'Pre-Wedding & Couple Shoots',
    subtitle: 'Natural, romantic and creative stories created around you.',
    description: 'Unrushed sessions at breathtaking destinations or intimate locations that capture your genuine chemistry before the rush of wedding festivities begin.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Destination Styling & Guidance', 'Golden Hour Lighting', 'Creative Story Concepting', 'Teaser Video Clips'],
    duration: 'Half Day or Full Day Session',
  },
  {
    id: 'portraits',
    title: 'Portraits',
    subtitle: 'Professional portraits that capture your personality and style.',
    description: 'Expressive personal branding, editorial fashion, and fine-art portraits designed to convey confidence, soul, and authentic presence through exquisite studio and outdoor lighting.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Tailored Lighting Setups', 'Wardrobe & Expression Coaching', 'Bespoke Retouching', 'Both Studio & Environmental'],
    duration: '2 - 3 Hours Studio/Location',
  },
  {
    id: 'events',
    title: 'Events',
    subtitle: 'Memories from birthdays, celebrations and special occasions.',
    description: 'From milestone birthday soirees to private corporate and family galas, we ensure no joyful glance or keynote moment passes unnoticed.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Fast Turnaround Previews', 'Ambient & Party Lighting Expertise', 'Group & Candid Photographs', 'Complete Event Timeline Coverage'],
    duration: 'Custom Event Timings',
  },
  {
    id: 'custom-shoots',
    title: 'Custom Shoots',
    subtitle: "Have something different in mind? Let's create it together.",
    description: 'Bespoke visual concepts, anniversary revivals, conceptual editorial shoots, and high-profile creative projects customized entirely to your unique vision.',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Creative Moodboards & Direction', 'Specialized Lighting & Gear', 'Worldwide Travel Availability', 'Tailored Deliverables'],
    duration: 'Bespoke Arrangement',
  },
];

// =========================================================================
// FEATURED WORK (SELECTED STORIES)
// Editorial masonry items with varying aspect ratios and stories
// =========================================================================
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'story-1',
    title: 'The Royal Courtyard Vows',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
    aspect: 'tall',
    location: 'Udaipur, Rajasthan',
    caption: 'A golden hour sacred ceremony adorned in marigolds and timeless royal architecture.',
    storySnippet: 'Framed against centuries of heritage stonework, Aarav and Meera exchange quiet promises before the grand evening sangeet begins.',
    photographerNotes: 'Shot with 85mm f/1.4 in natural dusk ambient light to preserve the warm earthen tones.',
  },
  {
    id: 'story-2',
    title: 'Whispering Horizons',
    category: 'Couples',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    location: 'Goa Coastal Cliffs',
    caption: 'Soft ocean breeze and quiet shared laughter at twilight.',
    storySnippet: 'An intimate pre-wedding editorial session letting the couple just be themselves as the sun dips into the Arabian Sea.',
    photographerNotes: '35mm wide perspective highlighting the dramatic oceanic landscape while keeping the couple central.',
  },
  {
    id: 'story-3',
    title: 'The Heritage Bride',
    category: 'Portraits',
    image: 'https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    location: 'Hyderabad Palace',
    caption: 'Intricate heirloom jewels and an unforgettable gaze of poised grace.',
    storySnippet: 'Captured during the final moments of bridal preparation as morning rays broke through the stained-glass jharokhas.',
    photographerNotes: 'Chiaroscuro window light emphasizing the silk texture and handcrafted kundan craftsmanship.',
  },
  {
    id: 'story-4',
    title: 'Night of Lanterns & Laughter',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
    aspect: 'wide',
    location: 'Bangalore Estate',
    caption: 'An enchanted forest banquet lit by hundreds of fairy lights and laughter.',
    storySnippet: 'A milestone birthday celebration that transitioned into an acoustic musical gathering under the canopy of ancient banyan trees.',
    photographerNotes: 'High-ISO grain retained to give an authentic 35mm film feel to the night celebration.',
  },
  {
    id: 'story-5',
    title: 'The First Dance Solitude',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519228419614-7221ee53372c?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    location: 'Jaipur Heritage Fort',
    caption: 'Lost in the song while two hundred guests cheer from the terrace.',
    storySnippet: 'Even amidst a 600-person grand reception, we found this breathless second where the entire universe narrowed down to just the two of them.',
    photographerNotes: 'Backlit with a warm rim light to sculpt their silhouettes from the midnight atmosphere.',
  },
  {
    id: 'story-6',
    title: 'Golden Mist in the Valley',
    category: 'Couples',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85',
    aspect: 'tall',
    location: 'Coorg Hills',
    caption: 'Morning dew, coffee plantation paths, and pure unfiltered warmth.',
    storySnippet: 'A pre-wedding visual narrative designed around simplicity, raw textures, and natural connection.',
    photographerNotes: 'Shot on 50mm f/1.2 embracing the morning mountain fog as a natural diffuser.',
  },
  {
    id: 'story-7',
    title: 'Eyes That Speak A Lifetime',
    category: 'Portraits',
    image: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    location: 'Studio Fine-Art Session',
    caption: 'Minimalist editorial styling focused on emotional depth and character.',
    storySnippet: 'A tribute to classical portrait masters, balancing deep shadows with sculpted contour illumination.',
    photographerNotes: 'Single large parabolic softbox with grid to produce feather-soft gradient transitions.',
  },
  {
    id: 'story-8',
    title: 'The Sangeet Celebration Surge',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85',
    aspect: 'wide',
    location: 'Mumbai Waterfront',
    caption: 'Dhol rhythms, swirling dupattas, and pure kinetic celebration.',
    storySnippet: 'Candid energy at its absolute peak during an unforgettable sangeet dance-off.',
    photographerNotes: 'Fast shutter sync with rear-curtain flash trail to convey the music’s momentum.',
  },
  {
    id: 'story-9',
    title: 'The Haldi Confetti Shower',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    location: 'Kerala Backwaters',
    caption: 'Yellow blooms, turmeric pastes, and family blessings in abundance.',
    storySnippet: 'Every smile here is unscripted. We love capturing the raw warmth of Indian wedding traditions.',
    photographerNotes: 'Continuous burst mode capturing floating marigold petals frozen mid-air.',
  },
];

// =========================================================================
// INSTAGRAM FEED STORIES
// =========================================================================
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'insta-1',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    caption: 'Quiet promises before the crowd enters the courtyard... #akcineportraits #weddingcinematography',
    likes: '1,248',
    comments: '46',
    url: 'https://www.instagram.com/ak_cineportraits',
  },
  {
    id: 'insta-2',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
    caption: 'Golden hour never lies. Sneak peek from yesterday’s destination couple session. #destinationphotographer',
    likes: '892',
    comments: '28',
    url: 'https://www.instagram.com/ak_cineportraits',
  },
  {
    id: 'insta-3',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
    caption: 'Color grading the final cut for Rahul & Tanya’s wedding teaser. Coming this Friday! #cinematicfilm',
    likes: '2,104',
    comments: '89',
    url: 'https://www.instagram.com/ak_cineportraits',
  },
  {
    id: 'insta-4',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    caption: 'Studio portraits that cut through the noise. #editorialportraits #portraitmood',
    likes: '1,560',
    comments: '53',
    url: 'https://www.instagram.com/ak_cineportraits',
  },
  {
    id: 'insta-5',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80',
    caption: 'That look when you know the journey has just begun. 🕊️ #couplegoals #preweddingshoot',
    likes: '1,780',
    comments: '64',
    url: 'https://www.instagram.com/ak_cineportraits',
  },
  {
    id: 'insta-6',
    image: 'https://images.unsplash.com/photo-1519228419614-7221ee53372c?auto=format&fit=crop&w=600&q=80',
    caption: 'Midnight dance under the chandeliers. Pure magic. #weddingreception #candidwedding',
    likes: '3,410',
    comments: '112',
    url: 'https://www.instagram.com/ak_cineportraits',
  },
];

// =========================================================================
// CINEMATIC FILMS (YOUTUBE SHOWCASE)
// =========================================================================
export const FEATURED_FILMS: FilmItem[] = [
  {
    id: 'film-1',
    title: 'A Love Written in the Stars — The Udaipur Wedding Film',
    couple: 'Vikram & Ananya',
    location: 'The Leela Palace, Udaipur',
    duration: '4:15 Cinematic Trailer',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85',
    description: 'An emotional celebration of vows, royal fireworks, and an intimate sunset vows exchange overlooking Lake Pichola.',
    youtubeId: 'featured_wedding_film',
  },
  {
    id: 'film-2',
    title: 'Whispering Coastlines — Goa Pre-Wedding Film',
    couple: 'Kabir & Rhea',
    location: 'South Goa Cliffs & Private Yacht',
    duration: '3:20 Mood Film',
    thumbnail: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1600&q=85',
    description: 'A poetic visual journey captured in 24fps anamorphic lens, highlighting their childhood bond and romantic getaway.',
    youtubeId: 'prewedding_coastal_film',
  },
];
