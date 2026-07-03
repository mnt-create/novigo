import { Skeleton } from "@/components/ui/skeleton";

export function UserNavSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="hidden h-8 w-20 md:block" />
      <Skeleton className="h-8 w-24" />
    </div>
  );
}
