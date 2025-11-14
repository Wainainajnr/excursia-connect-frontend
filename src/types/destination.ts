export interface Destination {
  id: string;
  image: string;
  title: string;
  location: string;
  description: string;
  price: string;
  longDescription?: string;
  highlights?: string[];
  included?: string[];
}
