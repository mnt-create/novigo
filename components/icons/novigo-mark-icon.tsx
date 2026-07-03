import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type NovigoMarkIconProps = SVGProps<SVGSVGElement>;

function NovigoMarkIcon({ className, ...props }: NovigoMarkIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-slot="novigo-mark-icon"
      className={cn("size-8", className)}
      {...props}
    >
      <rect x="2" y="2" width="28" height="28" rx="8" className="fill-current opacity-15" />
      <path
        d="M8 21V11h3.2l4.1 6.3L19.4 11H22.5v10h-2.6v-6.1l-3.8 5.8h-1.5l-3.8-5.8V21H8z"
        className="fill-current"
      />
      <circle cx="24" cy="9" r="2.5" className="fill-current" />
    </svg>
  );
}

export { NovigoMarkIcon };
