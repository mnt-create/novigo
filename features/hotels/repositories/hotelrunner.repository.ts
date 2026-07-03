import {
  fetchDemoHotelRunnerReservations,
  fetchDemoHotelRunnerRooms,
} from "@/features/hotels/repositories/hotelrunner-demo.repository";
import { getHotelRunnerClient } from "@/lib/hotelrunner/client";
import { shouldUseHotelRunnerDemo } from "@/lib/hotelrunner/config";
import type {
  GetReservationsParams,
  HotelRunnerReservationsResponse,
  HotelRunnerRoomsResponse,
} from "@/lib/hotelrunner/types";

export async function fetchHotelRunnerRooms(): Promise<HotelRunnerRoomsResponse> {
  if (shouldUseHotelRunnerDemo()) {
    return fetchDemoHotelRunnerRooms();
  }

  const client = getHotelRunnerClient();
  return client.request<HotelRunnerRoomsResponse>("/rooms", { revalidate: 120 });
}

export async function fetchHotelRunnerReservations(
  params: GetReservationsParams = {},
): Promise<HotelRunnerReservationsResponse> {
  if (shouldUseHotelRunnerDemo()) {
    return fetchDemoHotelRunnerReservations(params);
  }

  const client = getHotelRunnerClient();

  return client.request<HotelRunnerReservationsResponse>("/reservations", {
    searchParams: {
      from_date: params.fromDate,
      undelivered: params.undelivered,
      page: params.page,
      per_page: params.perPage,
      reservation_number: params.reservationNumber,
    },
    revalidate: false,
  });
}
