export type SearchFilters = {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
};

export type SearchQuery = SearchFilters & {
  prompt?: string;
};
