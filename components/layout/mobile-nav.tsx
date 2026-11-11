"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/layout/nav-link";
import { mainNavItems } from "@/constants/navigation";
import { routes } from "@/constants/routes";
import { Link } from "@/i18n/routing";

const labels: Record<(typeof mainNavItems)[number]["id"], string> = {
  templates: "Templates",
  howItWorks: "How It Works",
  forDesigners: "For Designers",
  pricing: "Pricing",
};

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-slate-900 hover:bg-violet-50 xl:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100%,20rem)] border-violet-100 bg-white p-0">
        <SheetHeader className="border-b border-violet-100 px-5 py-4 text-left">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <Logo size="sm" />
        </SheetHeader>
        <nav className="flex flex-col gap-1 p-3">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <SheetClose asChild key={item.id}>
                <NavLink
                  href={item.href}
                  className="inline-flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-800 transition-colors hover:bg-violet-50"
                >
                  <Icon className="size-4 text-violet-700" aria-hidden />
                  {labels[item.id]}
                </NavLink>
              </SheetClose>
            );
          })}
        </nav>
        <div className="mt-auto space-y-2 border-t border-violet-100 p-4">
          <SheetClose asChild>
            <Button variant="outline" className="h-10 w-full rounded-xl" asChild>
              <Link href={routes.login}>Log In</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              className="h-10 w-full rounded-xl bg-violet-700 text-white hover:bg-violet-800"
              asChild
            >
              <Link href={routes.register}>Get Started</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
