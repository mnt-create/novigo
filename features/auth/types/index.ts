export type AuthUser = {
  id: string;
  email: string;
  fullName?: string;
  avatarUrl?: string;
};

export type AuthActionState = {
  success: boolean;
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

export const AUTH_PROTECTED_ROUTES = [
  "/profile",
  "/bookings",
  "/favorites",
  "/settings",
] as const;
