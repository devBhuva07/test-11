export type Destination = {
  id: string;
  name: string;
  region: string;
  country: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  bestSeason: string;
  duration: string;
  priceFrom: number;
  rating: number;
  experiences: string[];
  latitude: number;
  longitude: number;
};

export type Package = {
  id: string;
  title: string;
  destination: string;
  description: string;
  image: string;
  days: number;
  nights: number;
  priceFrom: number;
  inclusions: string[];
  itinerary: { day: number; title: string; detail: string }[];
  rating: number;
  tag: string;
};

export type Experience = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
};

export type JournalPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string;
};

export type Hotel = {
  id: string;
  name: string;
  destination: string;
  image: string;
  rating: number;
  amenities: string[];
  priceFrom: number;
};
