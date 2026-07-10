export type AiHotelStayTimes = {
  checkIn: string;
  checkOut: string;
};

export const aiHotelStayTimes: Record<string, AiHotelStayTimes> = {
  "mandarin-oriental-bodrum": { checkIn: "15:00", checkOut: "12:00" },
  "ciragan-palace": { checkIn: "15:00", checkOut: "12:00" },
  "maxx-royal-antalya": { checkIn: "14:00", checkOut: "12:00" },
  "four-seasons-sultanahmet": { checkIn: "15:00", checkOut: "12:00" },
  "raffles-istanbul": { checkIn: "15:00", checkOut: "12:00" },
  "swissotel-bosphorus": { checkIn: "14:00", checkOut: "12:00" },
  "pera-palace": { checkIn: "14:00", checkOut: "12:00" },
  "museum-hotel-cappadocia": { checkIn: "14:00", checkOut: "11:00" },
  "argos-cappadocia": { checkIn: "14:00", checkOut: "12:00" },
  "sultan-cave-suites": { checkIn: "14:00", checkOut: "11:00" },
  "regnum-carya": { checkIn: "14:00", checkOut: "12:00" },
  "gloria-verde-resort": { checkIn: "14:00", checkOut: "12:00" },
  "lara-barut-collection": { checkIn: "14:00", checkOut: "12:00" },
  "d-maris-bodrum": { checkIn: "15:00", checkOut: "12:00" },
  "amanruya-bodrum": { checkIn: "15:00", checkOut: "12:00" },
  "vogue-hotel-supreme": { checkIn: "14:00", checkOut: "12:00" },
  "shangri-la-paris": { checkIn: "15:00", checkOut: "12:00" },
  "le-bristol-paris": { checkIn: "15:00", checkOut: "12:00" },
  "atlantis-the-palm": { checkIn: "15:00", checkOut: "11:00" },
  "jumeirah-beach-hotel": { checkIn: "15:00", checkOut: "12:00" },
  "hotel-de-russie-rome": { checkIn: "15:00", checkOut: "12:00" },
  "hassler-roma": { checkIn: "15:00", checkOut: "12:00" },
  "langham-london": { checkIn: "15:00", checkOut: "12:00" },
  "mandarin-oriental-barcelona": { checkIn: "15:00", checkOut: "12:00" },
};

export function getAiHotelStayTimes(slug: string): AiHotelStayTimes | undefined {
  return aiHotelStayTimes[slug];
}
