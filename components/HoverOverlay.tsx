"use client"

import { Badge } from "@/components/ui/badge";

export function HoverOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <Badge
        variant="secondary"
        className="
          px-4 py-1 text-sm font-medium
          border-white/30 backdrop-blur
          opacity-0
          translate-y-2 scale-95
          transition-all duration-300 ease-out
          delay-150
          group-hover:opacity-100
          group-hover:translate-y-0
          group-hover:scale-100
        "
      >
        {"Meet our customers >"}
      </Badge>
    </div>
  );
}
