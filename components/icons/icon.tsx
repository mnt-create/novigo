import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const iconSizes = {
  xs: "size-3.5",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-8",
} as const;

type IconProps = {
  icon: LucideIcon;
  size?: keyof typeof iconSizes;
  label?: string;
  className?: string;
};

function Icon({ icon: IconComponent, size = "md", label, className }: IconProps) {
  return (
    <IconComponent
      data-slot="icon"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn("shrink-0", iconSizes[size], className)}
    />
  );
}

export { Icon, iconSizes };
