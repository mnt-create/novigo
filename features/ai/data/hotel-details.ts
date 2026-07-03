export type AiHotelStayTimes = {
  checkIn: string;
  checkOut: string;
};

export const aiHotelStayTimes: Record<string, AiHotelStayTimes> = {
  "mandarin-oriental-bodrum": { checkIn: "15:00", checkOut: "12:00" },
  "ciragan-palace": { checkIn: "15:00", checkOut: "12:00" },
  "maxx-royal-antalya": { checkIn: "14:00", checkOut: "12:00" },
  "four-seasons-sultanahmet": { checkIn: "15:00", checkOut: "12:00" },
};

export function getAiHotelStayTimes(slug: string): AiHotelStayTimes | undefined {
  return aiHotelStayTimes[slug];
}
