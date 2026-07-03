"use client";

import { CalendarDays, MapPin, Search, Sparkles, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { shadows } from "@/config/design-tokens";
import { cn } from "@/lib/utils";

type SearchBoxProps = {
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  aiPrompt?: string;
  mode?: "traditional" | "ai";
  variant?: "default" | "booking";
  isLoading?: boolean;
  onDestinationChange?: (value: string) => void;
  onCheckInChange?: (value: string) => void;
  onCheckOutChange?: (value: string) => void;
  onGuestsChange?: (value: number) => void;
  onAiPromptChange?: (value: string) => void;
  onModeChange?: (mode: "traditional" | "ai") => void;
  onSubmit?: () => void;
  showModeToggle?: boolean;
  className?: string;
};

type BookingFieldProps = {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

function BookingField({ label, icon, children, className }: BookingFieldProps) {
  return (
    <div className={cn("min-w-0 flex-1", className)}>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</label>
      <div className="relative">
        <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground">
          {icon}
        </span>
        {children}
      </div>
    </div>
  );
}

function SearchBox({
  destination = "",
  checkIn = "",
  checkOut = "",
  guests = 2,
  aiPrompt = "",
  mode = "traditional",
  variant = "default",
  isLoading = false,
  onDestinationChange,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
  onAiPromptChange,
  onModeChange,
  onSubmit,
  showModeToggle = true,
  className,
}: SearchBoxProps) {
  return (
    <div
      data-slot="search-box"
      className={cn(
        "rounded-2xl bg-card p-3 sm:p-4",
        shadows.search,
        className,
      )}
    >
      {showModeToggle ? (
        <div className="mb-3 flex gap-2">
          <Button
            type="button"
            size="sm"
            variant={mode === "traditional" ? "default" : "ghost"}
            className={mode === "traditional" ? "bg-brand-blue hover:bg-brand-blue/90" : undefined}
            onClick={() => onModeChange?.("traditional")}
          >
            <Search className="size-4" />
            Ara
          </Button>
          <Button
            type="button"
            size="sm"
            variant={mode === "ai" ? "default" : "ghost"}
            className={mode === "ai" ? "bg-brand-blue hover:bg-brand-blue/90" : undefined}
            onClick={() => onModeChange?.("ai")}
          >
            <Sparkles className="size-4" />
            AI Arama
          </Button>
        </div>
      ) : null}

      <form
        className="space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit?.();
        }}
      >
        {mode === "ai" ? (
          <Input
            inputSize="lg"
            value={aiPrompt}
            onChange={(event) => onAiPromptChange?.(event.target.value)}
            placeholder="Describe your ideal stay..."
            aria-label="AI hotel search"
          />
        ) : variant === "booking" ? (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
            <BookingField label="Destination" icon={<MapPin className="size-4" />} className="lg:min-w-[220px] lg:flex-[1.4]">
              <Input
                inputSize="lg"
                value={destination}
                onChange={(event) => onDestinationChange?.(event.target.value)}
                placeholder="City, hotel, or landmark"
                className="pl-9"
                aria-label="Destination"
              />
            </BookingField>
            <BookingField label="Check-in" icon={<CalendarDays className="size-4" />}>
              <Input
                inputSize="lg"
                type="date"
                value={checkIn}
                onChange={(event) => onCheckInChange?.(event.target.value)}
                className="pl-9"
                aria-label="Check-in date"
              />
            </BookingField>
            <BookingField label="Check-out" icon={<CalendarDays className="size-4" />}>
              <Input
                inputSize="lg"
                type="date"
                value={checkOut}
                onChange={(event) => onCheckOutChange?.(event.target.value)}
                className="pl-9"
                aria-label="Check-out date"
              />
            </BookingField>
            <BookingField label="Guests" icon={<Users className="size-4" />} className="lg:max-w-[120px]">
              <Input
                inputSize="lg"
                type="number"
                min={1}
                value={guests}
                onChange={(event) => onGuestsChange?.(Number(event.target.value))}
                className="pl-9"
                aria-label="Number of guests"
              />
            </BookingField>
            <Button
              type="submit"
              size="lg"
              className="h-11 w-full shrink-0 bg-brand-blue hover:bg-brand-blue/90 lg:w-auto lg:min-w-[140px]"
              isLoading={isLoading}
              loadingText="Searching..."
            >
              <Search className="size-4" />
              Search
            </Button>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative sm:col-span-2 lg:col-span-1">
              <MapPin className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                inputSize="lg"
                value={destination}
                onChange={(event) => onDestinationChange?.(event.target.value)}
                placeholder="Where to?"
                className="pl-9"
                aria-label="Destination"
              />
            </div>
            <div className="relative">
              <CalendarDays className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                inputSize="lg"
                type="date"
                value={checkIn}
                onChange={(event) => onCheckInChange?.(event.target.value)}
                className="pl-9"
                aria-label="Check-in date"
              />
            </div>
            <div className="relative">
              <CalendarDays className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                inputSize="lg"
                type="date"
                value={checkOut}
                onChange={(event) => onCheckOutChange?.(event.target.value)}
                className="pl-9"
                aria-label="Check-out date"
              />
            </div>
            <div className="relative">
              <Users className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                inputSize="lg"
                type="number"
                min={1}
                value={guests}
                onChange={(event) => onGuestsChange?.(Number(event.target.value))}
                className="pl-9"
                aria-label="Number of guests"
              />
            </div>
          </div>
        )}

        {variant !== "booking" ? (
          <Button
            type="submit"
            size="lg"
            className="h-11 w-full shrink-0 bg-brand-blue hover:bg-brand-blue/90 sm:w-auto"
            isLoading={isLoading}
            loadingText="Searching..."
          >
            {mode === "ai" ? "Search with AI" : "Search"}
          </Button>
        ) : null}
      </form>
    </div>
  );
}

export { SearchBox };
