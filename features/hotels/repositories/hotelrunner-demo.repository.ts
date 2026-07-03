import {
  demoHotelRunnerReservations,
  getDemoRoomsResponse,
} from "@/features/hotels/data/hotelrunner-demo";
import type {
  GetReservationsParams,
  HotelRunnerReservationsResponse,
  HotelRunnerRoomsResponse,
} from "@/lib/hotelrunner/types";

const DEMO_LATENCY_MS = 250;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchDemoHotelRunnerRooms(): Promise<HotelRunnerRoomsResponse> {
  await delay(DEMO_LATENCY_MS);
  return getDemoRoomsResponse();
}

export async function fetchDemoHotelRunnerReservations(
  params: GetReservationsParams = {},
): Promise<HotelRunnerReservationsResponse> {
  await delay(DEMO_LATENCY_MS);

  let reservations = [...demoHotelRunnerReservations];

  if (params.reservationNumber) {
    reservations = reservations.filter(
      (reservation) =>
        reservation.hr_number === params.reservationNumber ||
        reservation.provider_number === params.reservationNumber,
    );
  }

  if (params.undelivered) {
    reservations = reservations.filter((reservation) => reservation.state === "reserved");
  }

  const page = params.page ?? 1;
  const perPage = params.perPage ?? 10;
  const start = (page - 1) * perPage;

  return {
    reservations: reservations.slice(start, start + perPage),
    page,
    per_page: perPage,
    total: reservations.length,
  };
}
