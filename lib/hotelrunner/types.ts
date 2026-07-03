export type HotelRunnerRoom = {
  rate_code: string;
  inv_code: string;
  availability_update: boolean;
  restrictions_update: boolean;
  price_update: boolean;
  pricing_type: string;
  name: string;
  description: string;
  policy: string;
  room_capacity: number;
  adult_capacity: number;
  is_master: boolean;
  shared: boolean;
  channel_codes: string[];
  sales_currency: string;
  sell_online: boolean;
};

export type HotelRunnerRoomsResponse = {
  rooms: HotelRunnerRoom[];
};

export type HotelRunnerReservationGuest = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
};

export type HotelRunnerReservation = {
  reservation_id: string;
  hr_number: string;
  provider_number?: string;
  pms_number?: string;
  channel: string;
  channel_display: string;
  source_display?: string;
  state: "reserved" | "confirmed" | "canceled" | string;
  modified: boolean;
  total_guests: number;
  total_rooms: number;
  checkin_date?: string;
  checkout_date?: string;
  total?: number;
  currency?: string;
  guest?: HotelRunnerReservationGuest;
};

export type HotelRunnerReservationsResponse = {
  reservations: HotelRunnerReservation[];
  page?: number;
  per_page?: number;
  total?: number;
};

export type HotelRunnerTransactionResponse = {
  status: "ok" | "try_again" | string;
  transaction_id: string;
};

export type GetReservationsParams = {
  fromDate?: string;
  undelivered?: boolean;
  page?: number;
  perPage?: number;
  reservationNumber?: string;
};
