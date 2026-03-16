export interface Poster {
  id: string;
  image: string;
  images?: string[];
  title: string;
  description: string;
  location?: string;
  date: string;
  price: string;
  createdAt: string;
  offer?: boolean;
  offerPrice?: string;
  originalPrice?: string;
}
