export type Category = 'Weddings' | 'Couples' | 'Portraits' | 'Events';

export interface GalleryItem {
  id: string;
  title: string;
  category: Category;
  image: string;
  aspect: 'portrait' | 'landscape' | 'tall' | 'wide';
  location: string;
  caption: string;
  storySnippet?: string;
  photographerNotes?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  duration?: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
  url: string;
}

export interface FilmItem {
  id: string;
  title: string;
  couple: string;
  location: string;
  duration: string;
  thumbnail: string;
  youtubeId?: string;
  videoUrl?: string;
  description: string;
}
