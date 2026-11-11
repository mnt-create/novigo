import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type NexifyMarkIconProps = SVGProps<SVGSVGElement>;

function NexifyMarkIcon({ className, ...props }: NexifyMarkIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-slot="nexify-mark-icon"
      className={cn("size-8", className)}
      {...props}
    >
      <rect x="2" y="2" width="28" height="28" rx="9" className="fill-current opacity-15" />
      <path
        d="M9 22V10h3.1l4.35 7.2L20.8 10H24v12h-2.7v-7.35L17.2 21.1h-1.55L11.7 14.65V22H9z"
        className="fill-current"
      />
      <circle cx="24.2" cy="9.2" r="2.4" className="fill-current" />
    </svg>
  );
}

export { NexifyMarkIcon };
