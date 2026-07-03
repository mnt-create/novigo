import { Link } from "@/i18n/routing";

import { NovigoMarkIcon } from "@/components/icons/novigo-mark-icon";
import { cn } from "@/lib/utils";

const sizeStyles = {
  sm: {
    mark: "size-6",
    text: "text-base",
    gap: "gap-2",
  },
  md: {
    mark: "size-8",
    text: "text-lg",
    gap: "gap-2.5",
  },
  lg: {
    mark: "size-10",
    text: "text-xl",
    gap: "gap-3",
  },
} as const;

type LogoProps = {
  variant?: "full" | "mark" | "wordmark";
  tone?: "default" | "light";
  size?: keyof typeof sizeStyles;
  href?: string;
  className?: string;
};

function Logo({
  variant = "full",
  tone = "default",
  size = "md",
  href = "/",
  className,
}: LogoProps) {
  const styles = sizeStyles[size];
  const showMark = variant === "full" || variant === "mark";
  const showWordmark = variant === "full" || variant === "wordmark";

  const content = (
    <span
      data-slot="logo"
      className={cn(
        "inline-flex items-center font-semibold tracking-tight",
        tone === "light" ? "text-white" : "text-foreground",
        showMark && showWordmark && styles.gap,
        className,
      )}
    >
      {showMark ? (
        <NovigoMarkIcon
          className={cn(
            styles.mark,
            "shrink-0",
            tone === "light" ? "text-white" : "text-primary",
          )}
          aria-hidden={showWordmark}
        />
      ) : null}
      {showWordmark ? <span className={styles.text}>NOVIGO</span> : null}
      {!showWordmark && showMark ? <span className="sr-only">NOVIGO</span> : null}
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} aria-label="NOVIGO home" className="inline-flex rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
      {content}
    </Link>
  );
}

export { Logo };
