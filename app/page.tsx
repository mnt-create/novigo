import { redirect, routing } from "@/i18n/routing";

export default function RootHomePage() {
  redirect({ href: "/", locale: routing.defaultLocale });
}
