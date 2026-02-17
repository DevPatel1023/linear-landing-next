"use client";

import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="w-full mx-auto py-25 container px-4">
      <div className="grid gap-5 md:grid-cols-2 md:items-center">
        {/* text */}
        <h1 className="text-5xl md:text-6xl font-medium text-white">
          Plan the present.
          <br /> Build the future.
        </h1>
        {/* cta btns */}
        <div className="flex items-center gap-3 md:justify-end">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-5 text-lg"
          >
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-white/70 hover:text-white hover:bg-white/10 px-5 text-lg"
          >
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  );
}
