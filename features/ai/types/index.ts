export type AiMessageRole = "user" | "assistant" | "system";

export type AiMessage = {
  id: string;
  role: AiMessageRole;
  content: string;
  createdAt: string;
};

export type AiSearchIntent = {
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  budget?: number;
  preferences?: string[];
  summary: string;
};
