import { Suspense } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLink } from "@/components/layout/nav-link";
import { UserNav } from "@/components/layout/user-nav";
import { UserNavSkeleton } from "@/components/layout/user-nav-skeleton";
import { Logo } from "@/components/ui/logo";
import { mainNavItems } from "@/constants/navigation";

const labels: Record<(typeof mainNavItems)[number]["id"], string> = {
  templates: "Templates",
  howItWorks: "How It Works",
  forDesigners: "For Designers",
  pricing: "Pricing",
};

export async function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/80 text-slate-950 shadow-[0_10px_40px_-28px_rgba(91,33,182,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo tone="default" size="sm" />

        <nav className="hidden items-center gap-1 xl:flex">
          {mainNavItems.map((item) => (
            <NavLink
              key={item.id}
              href={item.href}
              className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-800"
            >
              {labels[item.id]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSwitcher variant="header" />
          <Suspense fallback={<UserNavSkeleton />}>
            <UserNav />
          </Suspense>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
