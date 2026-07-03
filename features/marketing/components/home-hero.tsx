"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";

import { SearchBox } from "@/components/shared/search-box";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";
import { heroContent } from "@/features/marketing/data/homepage";
import { Link, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function HomeHero() {
  const t = useTranslations("Home");
  const router = useRouter();
  const [primary, ...secondaryImages] = heroContent.collageImages;

  return (
    <section className="relative min-h-[640px] overflow-hidden lg:min-h-[720px]">
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={primary.url}
          alt={primary.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 hidden grid-cols-12 grid-rows-5 lg:grid">
        <div className="relative col-span-7 row-span-5">
          <Image
            src={primary.url}
            alt={primary.alt}
            fill
            priority
            className="object-cover"
            sizes="58vw"
          />
        </div>
        {secondaryImages.map((image, index) => (
          <div key={image.url} className={collageCellClass(index)}>
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="21vw"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/75 to-brand-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-brand-navy/30" />

      <Container
        size="wide"
        className="relative flex min-h-[640px] flex-col justify-center py-16 lg:min-h-[720px] lg:py-20"
      >
        <div className="max-w-3xl space-y-5 text-white">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
            {t("heroEyebrow")}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {t("heroTitle")}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t("heroSubtitle")}
          </p>
        </div>

        <div className="mt-10 w-full max-w-5xl">
          <SearchBox
            mode="traditional"
            variant="booking"
            showModeToggle={false}
            onSubmit={() => router.push(routes.search)}
            className="border border-white/10 bg-card/95 backdrop-blur-sm"
          />

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              asChild
            >
              <Link href={routes.ai}>
                <Sparkles className="size-4" />
                {t("heroAiCta")}
              </Link>
            </Button>
            <p className="text-sm text-white/70">{t("heroSearchHint")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function collageCellClass(index: number) {
  return cn(
    "relative col-span-5",
    index === 0 && "row-span-2",
    index === 1 && "row-span-2 row-start-3",
    index === 2 && "row-span-1 row-start-5",
  );
}
