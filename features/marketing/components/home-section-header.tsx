import { typography } from "@/config/design-tokens";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type HomeSectionHeaderProps = {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
};

export function HomeSectionHeader({
  title,
  description,
  href,
  linkLabel = "View all",
  className,
}: HomeSectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl space-y-2">
        <h2 className={typography.h2}>{title}</h2>

        {description ? (
          <p className="text-base text-muted-foreground">{description}</p>
        ) : null}
      </div>

      {href ? (
        <Link
          href={href}
          className="shrink-0 text-sm font-medium text-brand-blue hover:underline"
        >
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}
