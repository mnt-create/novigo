import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { AUTH_PROTECTED_ROUTES } from "@/features/auth/types";
import { routing } from "@/i18n/routing";
import { stripLocale, withLocale } from "@/lib/i18n/strip-locale";

export async function updateSupabaseSession(
  request: NextRequest,
  initialResponse?: NextResponse,
) {
  let response =
    initialResponse ??
    NextResponse.next({
      request,
    });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return response;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });

        response = NextResponse.next({
          request,
        });

        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { locale, pathname } = stripLocale(request.nextUrl.pathname);
  const activeLocale = locale ?? routing.defaultLocale;

  const isProtected = AUTH_PROTECTED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (!user && isProtected) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = withLocale(activeLocale, "/login");
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (user && (pathname === "/login" || pathname === "/register")) {
    const homeUrl = request.nextUrl.clone();
    homeUrl.pathname = withLocale(activeLocale, "/");
    homeUrl.search = "";
    return NextResponse.redirect(homeUrl);
  }

  return response;
}
