export interface Poster {
  id: string;
  image: string; // Primary/cover image
  images?: string[]; // Additional images (up to 6 total)
  title: string;
  description: string;
  location?: string;
  date: string;
  price: string;
  createdAt: string;
}
