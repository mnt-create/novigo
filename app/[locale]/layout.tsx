import { Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { createMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";
import { AppProviders } from "@/providers/app-providers";

import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata() {
  return createMetadata({
    title: "Don't Start From Scratch. Start With Something Brilliant.",
    description: siteConfig.description,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${plusJakarta.className} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProviders>
            <div className="flex min-h-full flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
