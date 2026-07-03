"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BedDouble, Car, ChevronDown, Plane } from "lucide-react";

import { SearchBox } from "@/components/shared/search-box";
import { heroContent } from "@/features/marketing/data/homepage";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

const heroTabs = [
  { id: "stay", label: "Konaklama", icon: BedDouble },
  { id: "flight", label: "Uçak", icon: Plane },
  { id: "car", label: "Araç", icon: Car },
] as const;

export function HomeHero() {
  const router = useRouter();

  return (
    <section className="relative min-h-[520px] overflow-hidden lg:min-h-[580px]">
      <Image
        src={heroContent.imageUrl}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-brand-navy/30 to-brand-navy/70" />

      <div className="relative mx-auto flex w-full max-w-[90rem] flex-col px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="max-w-3xl space-y-4 text-white">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {heroContent.title}
          </h1>
          <p className="max-w-2xl text-base text-white/85 sm:text-lg">{heroContent.subtitle}</p>
        </div>

        <div className="mt-8 w-full max-w-5xl">
          <div className="mb-3 flex gap-2">
            {heroTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === "stay";
              return (
                <button
                  key={tab.id}
                  type="button"
                  disabled={tab.id !== "stay"}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-white text-brand-navy"
                      : "bg-white/15 text-white/70 backdrop-blur-sm",
                    tab.id !== "stay" && "cursor-not-allowed opacity-60",
                  )}
                >
                  <Icon className="size-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <SearchBox
            mode="traditional"
            showModeToggle={false}
            onSubmit={() => router.push(routes.search)}
            className="border-0 shadow-2xl shadow-black/15"
          />

          <button
            type="button"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
          >
            Esnek arama
            <ChevronDown className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
