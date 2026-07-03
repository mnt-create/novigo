import { Suspense } from "react";
import Link from "next/link";
import { Bell, ChevronDown, Heart } from "lucide-react";

import { UserNav } from "@/components/layout/user-nav";
import { UserNavSkeleton } from "@/components/layout/user-nav-skeleton";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { mainNavItems } from "@/constants/navigation";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy text-white shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo tone="light" size="sm" />

        <nav className="hidden items-center gap-1 xl:flex">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  item.active
                    ? "bg-brand-blue text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                )}
              >
                <Icon className="size-4 shrink-0" aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-white/90 hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            TRY
            <ChevronDown className="size-3.5" />
          </Button>

          <Button
            variant="ghost"
            size="icon-sm"
            className="text-white/90 hover:bg-white/10 hover:text-white"
            aria-label="Favoriler"
            asChild
          >
            <Link href={routes.favorites}>
              <Heart className="size-4" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon-sm"
            className="text-white/90 hover:bg-white/10 hover:text-white"
            aria-label="Bildirimler"
          >
            <Bell className="size-4" />
          </Button>

          <Suspense fallback={<UserNavSkeleton />}>
            <UserNav />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
