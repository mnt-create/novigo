import Link from "next/link";

import { DestinationCard } from "@/components/shared/destination-card";
import { popularDestinations } from "@/features/marketing/data/homepage";
import { routes } from "@/constants/routes";

export function HomeDestinations() {
  return (
    <section className="bg-surface-subtle py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Popüler destinasyonlar
          </h2>
          <Link
            href={routes.destinations}
            className="text-sm font-medium text-brand-blue hover:underline"
          >
            Tümünü keşfet
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {popularDestinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
