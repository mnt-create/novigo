import { getTranslations } from "next-intl/server";
import { Camera, MessageCircle, Play, Share2 } from "lucide-react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { footerColumnIds } from "@/constants/navigation";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/routing";

const socialLinks = [
  { label: "Facebook", icon: Share2, href: "#" },
  { label: "Instagram", icon: Camera, href: "#" },
  { label: "Twitter", icon: MessageCircle, href: "#" },
  { label: "Youtube", icon: Play, href: "#" },
] as const;

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const tSite = await getTranslations("Site");

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto w-full max-w-[90rem] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-4">
            <Logo tone="light" size="md" href="/" />
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              {tSite("description")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(footerColumnIds).map((column) => (
              <div key={column.id}>
                <p className="text-sm font-semibold">{t(column.id)}</p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {t(link.id)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t("rights")}
          </p>
          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="footer" />
            <button type="button" className="hover:text-white">
              TRY ₺
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
