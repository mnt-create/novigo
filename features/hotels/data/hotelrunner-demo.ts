import type {
  HotelRunnerReservation,
  HotelRunnerRoom,
  HotelRunnerRoomsResponse,
} from "@/lib/hotelrunner/types";

export type DemoRoomPresentation = {
  imageUrl: string;
  priceFrom: number;
  city: string;
  country: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
};

export const demoProperty = {
  hrId: "demo-hr-id",
  name: "NOVIGO Demo Hotel — Istanbul",
  city: "Istanbul",
  country: "Turkey",
} as const;

export const demoHotelRunnerRooms: HotelRunnerRoom[] = [
  {
    rate_code: "HR:1",
    inv_code: "HR:1",
    availability_update: true,
    restrictions_update: true,
    price_update: true,
    pricing_type: "guest_based",
    name: "Deluxe Bosphorus Room",
    description:
      "King bed, partial Bosphorus view, and premium amenities for couples and business travelers.",
    policy: "Free cancellation up to 48 hours before check-in.",
    room_capacity: 3,
    adult_capacity: 2,
    is_master: false,
    shared: false,
    channel_codes: ["online", "bookingcom", "expedia"],
    sales_currency: "TRY",
    sell_online: true,
  },
  {
    rate_code: "HR:2",
    inv_code: "HR:2",
    availability_update: true,
    restrictions_update: true,
    price_update: true,
    pricing_type: "guest_based",
    name: "Executive Suite",
    description: "Separate living area, skyline views, and lounge access in the heart of the city.",
    policy: "Breakfast included. Non-smoking room.",
    room_capacity: 4,
    adult_capacity: 3,
    is_master: false,
    shared: false,
    channel_codes: ["online", "bookingcom"],
    sales_currency: "TRY",
    sell_online: true,
  },
  {
    rate_code: "HR:3",
    inv_code: "HR:3",
    availability_update: true,
    restrictions_update: false,
    price_update: true,
    pricing_type: "guest_based",
    name: "Standard City View",
    description: "Comfortable city-view room ideal for short city breaks and weekend stays.",
    policy: "Flexible check-in from 14:00.",
    room_capacity: 2,
    adult_capacity: 2,
    is_master: false,
    shared: false,
    channel_codes: ["online", "hrs"],
    sales_currency: "TRY",
    sell_online: true,
  },
  {
    rate_code: "NR:HR:4",
    inv_code: "HR:4",
    availability_update: false,
    restrictions_update: false,
    price_update: false,
    pricing_type: "guest_based",
    name: "Economy Room — Non-refundable",
    description: "Best-value room with compact layout and essential amenities.",
    policy: "Non-refundable rate. No changes after booking.",
    room_capacity: 2,
    adult_capacity: 2,
    is_master: false,
    shared: false,
    channel_codes: ["online"],
    sales_currency: "TRY",
    sell_online: true,
  },
];

export const demoRoomPresentation: Record<string, DemoRoomPresentation> = {
  "HR:1": {
    imageUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
    priceFrom: 6200,
    city: "Istanbul",
    country: "Turkey",
    rating: 9.1,
    reviewCount: 842,
    amenities: ["Bosphorus view", "Breakfast", "Wi-Fi"],
  },
  "HR:2": {
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80",
    priceFrom: 9800,
    city: "Istanbul",
    country: "Turkey",
    rating: 9.4,
    reviewCount: 516,
    amenities: ["Suite", "Lounge access", "Spa"],
  },
  "HR:3": {
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    priceFrom: 4200,
    city: "Istanbul",
    country: "Turkey",
    rating: 8.7,
    reviewCount: 1204,
    amenities: ["City view", "Wi-Fi", "Air conditioning"],
  },
  "NR:HR:4": {
    imageUrl:
      "https://images.unsplash.com/photo-1571008887538-b36bb745f9cb?auto=format&fit=crop&w=900&q=80",
    priceFrom: 3100,
    city: "Istanbul",
    country: "Turkey",
    rating: 8.2,
    reviewCount: 390,
    amenities: ["Best value", "Wi-Fi"],
  },
};

export const demoHotelRunnerReservations: HotelRunnerReservation[] = [
  {
    reservation_id: "demo-res-10021",
    hr_number: "HR-10021",
    provider_number: "NOV-77821",
    channel: "online",
    channel_display: "NOVIGO Online",
    source_display: "NOVIGO",
    state: "confirmed",
    modified: false,
    total_guests: 2,
    total_rooms: 1,
    checkin_date: "2026-07-12",
    checkout_date: "2026-07-15",
    total: 18600,
    currency: "TRY",
    guest: {
      first_name: "Demo",
      last_name: "Guest",
      email: "guest@novigo.demo",
    },
  },
  {
    reservation_id: "demo-res-10022",
    hr_number: "HR-10022",
    provider_number: "NOV-77822",
    channel: "bookingcom",
    channel_display: "Booking.com",
    state: "reserved",
    modified: false,
    total_guests: 3,
    total_rooms: 1,
    checkin_date: "2026-07-20",
    checkout_date: "2026-07-23",
    total: 29400,
    currency: "TRY",
    guest: {
      first_name: "Ayşe",
      last_name: "Yılmaz",
      email: "ayse@example.com",
    },
  },
];

export function getDemoRoomsResponse(): HotelRunnerRoomsResponse {
  return { rooms: demoHotelRunnerRooms };
}
