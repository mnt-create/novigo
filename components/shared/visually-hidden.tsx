import { cn } from "@/lib/utils";

type VisuallyHiddenProps = React.ComponentProps<"span">;

function VisuallyHidden({ className, ...props }: VisuallyHiddenProps) {
  return (
    <span
      data-slot="visually-hidden"
      className={cn(
        "absolute size-px overflow-hidden border-0 p-0 whitespace-nowrap [clip:rect(0,0,0,0)]",
        className,
      )}
      {...props}
    />
  );
}

export { VisuallyHidden };
