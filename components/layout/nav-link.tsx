"use client";

import { forwardRef } from "react";

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Supports in-app routes and homepage hash targets (`/#section`)
 * while preserving next-intl locale prefixes for path links.
 */
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function NavLink({ href, className, children }, ref) {
    const hashMatch = href.match(/^\/#(.+)$/);

    if (hashMatch) {
      return (
        <Link
          ref={ref}
          href={{ pathname: "/", hash: hashMatch[1] }}
          className={cn(className)}
        >
          {children}
        </Link>
      );
    }

    return (
      <Link ref={ref} href={href} className={cn(className)}>
        {children}
      </Link>
    );
  },
);
