import { getHotelInventory, getHotelRunnerReservations } from "@/features/hotels/services/hotel.service";
import { getHotelRunnerErrorMessage } from "@/lib/hotelrunner/errors";
import { isHotelRunnerDemoMode, isHotelRunnerConfigured } from "@/lib/hotelrunner/config";

export const runtime = "nodejs";

export async function GET() {
  if (!isHotelRunnerDemoMode() && !isHotelRunnerConfigured()) {
    return Response.json(
      {
        error:
          "HotelRunner is not configured. Enable HOTELRUNNER_DEMO_MODE=true or add live credentials.",
      },
      { status: 503 },
    );
  }

  try {
    const inventory = await getHotelInventory();
    return Response.json(inventory);
  } catch (error) {
    const { message, status } = getHotelRunnerErrorMessage(error);
    return Response.json({ error: message }, { status: status >= 400 ? status : 500 });
  }
}

export async function POST(request: Request) {
  if (!isHotelRunnerDemoMode() && !isHotelRunnerConfigured()) {
    return Response.json({ error: "HotelRunner is not configured." }, { status: 503 });
  }

  let body: { fromDate?: string; undelivered?: boolean; page?: number; perPage?: number } = {};

  try {
    body = (await request.json()) as typeof body;
  } catch {
    body = {};
  }

  try {
    const reservations = await getHotelRunnerReservations(body);
    return Response.json(reservations);
  } catch (error) {
    const { message, status } = getHotelRunnerErrorMessage(error);
    return Response.json({ error: message }, { status: status >= 400 ? status : 500 });
  }
}
