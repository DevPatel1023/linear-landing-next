" use client";

import Image from "next/image";
import { TracingSecCard } from "./TrackingSecCard";
import { Button } from "./ui/button";
import { LinearInsights } from "./LinearInsights";


export function TrackingSection() {
  return (
    <section className="py-16 md:py-30 space-y-10 container mx-auto px-4">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* text */}
        <div className="inline-flex items-center gap-2">
          {/* blue indicator */}
          <span className="h-2.5 w-4 rounded-full bg-yellow-400" />

          <span className="text-[#D0D6E0] text-sm cursor-pointer inline-flex items-center gap-1 hover:gap-2 transition-all duration-200">
            Task tracking and sprint planning{"  "}
            <span className="inline-block transition-transform duration-200">
              {">"}
            </span>
          </span>
        </div>

        {/* heading text + subheading text */}
        <div className="space-y-5">
          <h1 className="py-4 pb-5 text-5xl font-medium">
            Issue tracking you'll enjoy using
          </h1>
          <p className="max-w-md text-white/60 leading-relaxed w-fit font-medium text-lg">
            <span className="text-white font-medium">
              Optimized for speed and efficiency.
            </span>
            Create tasks in seconds, discuss issues in context, and breeze
            through your work in views tailored to you and your team.
          </p>
          <Image src="/TrackingHeroImg.webp" alt="tracing-hero-img" height={1620} width={3200}/>
        </div>
      </div>

      {/* cards */}
      <TracingSecCard />

      {/* Linear Insights part */}
      <LinearInsights />
    </section>
  );
}
