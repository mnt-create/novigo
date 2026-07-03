import { cn } from "@/lib/utils"

type SkeletonProps = React.ComponentProps<"div"> & {
  variant?: "default" | "circular" | "text"
}

function Skeleton({ className, variant = "default", ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn(
        "animate-pulse bg-muted",
        variant === "default" && "rounded-md",
        variant === "circular" && "rounded-full",
        variant === "text" && "h-4 rounded-md",
        className,
      )}
      {...props}
    />
  )
}

function SkeletonGroup({
  className,
  count = 3,
  ...props
}: React.ComponentProps<"div"> & { count?: number }) {
  return (
    <div
      data-slot="skeleton-group"
      className={cn("flex flex-col gap-2", className)}
      aria-hidden="true"
      {...props}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} variant="text" className="w-full last:w-4/5" />
      ))}
    </div>
  )
}

export { Skeleton, SkeletonGroup }
