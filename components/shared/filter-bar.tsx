"use client";

import { SlidersHorizontal, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export type FilterOption = {
  id: string;
  label: string;
  count?: number;
};

type FilterBarProps = {
  activeFilters?: FilterOption[];
  sortLabel?: string;
  resultCount?: number;
  onRemoveFilter?: (id: string) => void;
  onClearAll?: () => void;
  filterPanel?: React.ReactNode;
  className?: string;
};

function FilterBar({
  activeFilters = [],
  sortLabel = "Recommended",
  resultCount,
  onRemoveFilter,
  onClearAll,
  filterPanel,
  className,
}: FilterBarProps) {
  return (
    <div
      data-slot="filter-bar"
      className={cn(
        "flex flex-col gap-3 rounded-xl border border-border/60 bg-card p-4 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="size-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Refine your hotel search results.</SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-6">{filterPanel}</div>
          </SheetContent>
        </Sheet>

        <Badge variant="secondary">{sortLabel}</Badge>

        {resultCount !== undefined ? (
          <span className="text-sm text-muted-foreground">
            {resultCount.toLocaleString()} results
          </span>
        ) : null}
      </div>

      {activeFilters.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2">
          {activeFilters.map((filter) => (
            <Badge key={filter.id} variant="outline" className="gap-1 pr-1">
              {filter.label}
              {filter.count !== undefined ? ` (${filter.count})` : ""}
              <button
                type="button"
                onClick={() => onRemoveFilter?.(filter.id)}
                className="rounded-full p-0.5 hover:bg-muted"
                aria-label={`Remove ${filter.label} filter`}
              >
                <X className="size-3" />
              </button>
            </Badge>
          ))}
          <Button variant="ghost" size="sm" onClick={onClearAll}>
            Clear all
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export { FilterBar };
