export interface Rental {
  id: string;
  name: string;
  short_description: string;
  long_description: string;
  location: string;
  images: string[];
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  reviews: number;
  isGuestFavorite: boolean;
  host: Host;
  services: string[];
  priceCents: number;
}

export interface Host {
  name: string;
  avatar: string;
  isSuperhost: boolean;
  timeAsHost: string;
}
