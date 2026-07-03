import { Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HomeAppPromo() {
  return (
    <section className="bg-brand-navy py-16 text-white sm:py-20">
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative mx-auto flex h-72 w-full max-w-md items-end justify-center gap-4 lg:mx-0">
          <div className="relative h-56 w-28 overflow-hidden rounded-[2rem] border-4 border-white/20 bg-white/10 shadow-2xl">
            <div className="absolute inset-2 rounded-[1.4rem] bg-gradient-to-b from-brand-blue/30 to-brand-navy" />
            <Smartphone className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 text-white/50" />
          </div>
          <div className="relative h-64 w-32 overflow-hidden rounded-[2rem] border-4 border-white/20 bg-white/10 shadow-2xl">
            <div className="absolute inset-2 rounded-[1.4rem] bg-gradient-to-b from-brand-blue/40 to-brand-navy" />
            <Smartphone className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 text-white/50" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              NOVIGO mobil uygulamasını indirin
            </h2>
            <p className="mt-3 max-w-lg text-white/75">
              Rezervasyonlarınızı yönetin, AI asistanına erişin ve özel fırsatları kaçırmayın.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex size-28 items-center justify-center rounded-xl bg-white p-2">
              <div className="grid size-full grid-cols-4 grid-rows-4 gap-0.5">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={i % 3 === 0 ? "bg-brand-navy" : "bg-brand-navy/20"}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Button className="w-full min-w-[180px] bg-white text-brand-navy hover:bg-white/90">
                App Store
              </Button>
              <Button
                variant="outline"
                className="w-full min-w-[180px] border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
