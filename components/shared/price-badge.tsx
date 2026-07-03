import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/format/currency";

type PriceBadgeProps = {
  amount: number;
  currency?: string;
  locale?: string;
  suffix?: string;
  variant?: "default" | "deal" | "muted";
  className?: string;
};

const variantStyles = {
  default: "bg-primary text-primary-foreground",
  deal: "bg-emerald-600 text-white dark:bg-emerald-500",
  muted: "bg-muted text-foreground",
} as const;

function PriceBadge({
  amount,
  currency = "USD",
  locale = "en-US",
  suffix = "/ night",
  variant = "default",
  className,
}: PriceBadgeProps) {
  return (
    <Badge
      data-slot="price-badge"
      className={cn(
        "h-auto rounded-lg px-2.5 py-1 text-sm font-semibold tabular-nums",
        variantStyles[variant],
        className,
      )}
    >
      {formatPrice(amount, { currency, locale })}
      {suffix ? <span className="ml-1 font-normal opacity-90">{suffix}</span> : null}
    </Badge>
  );
}

export { PriceBadge };
