"use client";

import { useLocale, useTranslations } from "next-intl";
import { ChevronDown, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales, usePathname, useRouter, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  tr: "Türkçe",
};

type LanguageSwitcherProps = {
  variant?: "header" | "footer";
};

export function LanguageSwitcher({ variant = "header" }: LanguageSwitcherProps) {
  const t = useTranslations("Locale");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  function handleSelect(nextLocale: Locale) {
    router.replace(pathname, { locale: nextLocale });
  }

  const isFooter = variant === "footer";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={isFooter ? "sm" : "sm"}
          className={cn(
            isFooter
              ? "h-auto px-0 text-white/60 hover:bg-transparent hover:text-white"
              : "text-white/90 hover:bg-white/10 hover:text-white",
          )}
          aria-label={t("selectLanguage")}
        >
          {localeLabels[locale]}
          <ChevronDown className="size-3.5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {locales.map((item) => (
          <DropdownMenuItem
            key={item}
            onClick={() => handleSelect(item)}
            className="flex items-center justify-between gap-4"
          >
            <span>{localeLabels[item]}</span>
            {item === locale ? <Check className="size-4 text-brand-blue" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
