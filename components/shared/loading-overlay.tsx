import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

type LoadingOverlayProps = {
  label?: string;
  className?: string;
  fullScreen?: boolean;
};

function LoadingOverlay({
  label = "Loading content",
  className,
  fullScreen = false,
}: LoadingOverlayProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      data-slot="loading-overlay"
      className={cn(
        "flex items-center justify-center bg-background/70 backdrop-blur-sm",
        fullScreen ? "fixed inset-0 z-50" : "absolute inset-0 z-10 rounded-[inherit]",
        className,
      )}
    >
      <Spinner className="size-8 text-primary" aria-label={label} />
    </div>
  );
}

export { LoadingOverlay };
