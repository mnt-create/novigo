import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type RatingProps = {
  value: number;
  max?: number;
  reviewCount?: number;
  reviewLocale?: string;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
};

const starSizes = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
} as const;

function Rating({
  value,
  max = 5,
  reviewCount,
  reviewLocale = "en-US",
  size = "md",
  showValue = true,
  className,
}: RatingProps) {
  const clamped = Math.min(Math.max(value, 0), max);
  const label = `${clamped} out of ${max} stars${reviewCount ? `, ${reviewCount} reviews` : ""}`;

  return (
    <div
      data-slot="rating"
      role="img"
      aria-label={label}
      className={cn("inline-flex items-center gap-1.5", className)}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }).map((_, index) => {
          const fill = Math.min(Math.max(clamped - index, 0), 1);

          return (
            <span key={index} className="relative inline-flex">
              <Star className={cn(starSizes[size], "text-muted-foreground/30")} aria-hidden />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
                aria-hidden
              >
                <Star className={cn(starSizes[size], "fill-amber-400 text-amber-400")} />
              </span>
            </span>
          );
        })}
      </div>
      {showValue ? (
        <span className="text-sm font-medium tabular-nums">{clamped.toFixed(1)}</span>
      ) : null}
      {reviewCount !== undefined ? (
        <span className="text-sm text-muted-foreground">
          ({reviewCount.toLocaleString(reviewLocale)})
        </span>
      ) : null}
    </div>
  );
}

export { Rating };
