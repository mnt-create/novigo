import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { NavLink } from "@/components/layout/nav-link";
import { footerColumnIds } from "@/constants/navigation";
import { siteConfig } from "@/config/site";

const columnTitles = {
  product: "Product",
  explore: "Explore",
  company: "Company",
  legal: "Legal",
} as const;

const linkLabels: Record<string, string> = {
  templates: "Templates",
  howItWorks: "How It Works",
  aiAssistant: "AI Assistant",
  pricing: "Pricing",
  forDesigners: "For Designers",
  hotels: "Hotels",
  search: "Search",
  getStarted: "Get Started",
  signIn: "Log In",
  signUp: "Get Started",
  profile: "Profile",
  myBookings: "Dashboard",
  privacy: "Privacy",
  terms: "Terms",
};

export async function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto w-full max-w-[90rem] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-4">
            <Logo tone="light" size="md" href="/" />
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.philosophy} {siteConfig.positioning}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(footerColumnIds).map((column) => (
              <div key={column.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {columnTitles[column.id]}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.id}>
                      <NavLink
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {linkLabels[link.id] ?? link.id}
                      </NavLink>
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
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <LanguageSwitcher variant="footer" />
        </div>
      </div>
    </footer>
  );
}
