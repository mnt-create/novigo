import { type NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";
import { updateSupabaseSession } from "@/lib/supabase/middleware";

const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api") || pathname.startsWith("/auth")) {
    return updateSupabaseSession(request);
  }

  const intlResponse = intlMiddleware(request);

  if (intlResponse.status >= 300 && intlResponse.status < 400) {
    return intlResponse;
  }

  return updateSupabaseSession(request, intlResponse);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
