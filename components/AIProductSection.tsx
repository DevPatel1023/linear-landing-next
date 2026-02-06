"use client";

import { AIProductSectionContent } from "./AIProductSectionContent";
import { LayeredStack } from "./LayeredStack";
import { Button } from "./ui/button";

export function AIProductSection() {
  return (
    <section className="relative py-25 bg-linear-to-b from-white/10 to-black">
      <div className="container mx-auto px-4">
        {/* text */}
        <div className="inline-flex items-center gap-2">
          {/* blue indicator */}
          <span className="h-2.5 w-4 rounded-full bg-cyan-400" />

          <span className="text-[#D0D6E0] text-sm cursor-pointer inline-flex items-center gap-1 hover:gap-2 transition-all duration-200">
            Artificial intelligence{"  "}
            <span className="inline-block transition-transform duration-200">
              {">"}
            </span>
          </span>
        </div>

        {/* heading text + subheading text */}
        <div className="space-y-5">
          <h1 className="py-4 pb-5 text-5xl font-medium">
            AI-assisted product development
          </h1>
          <p className="max-w-md text-white/60 leading-relaxed w-fit font-medium text-lg">
            <span className="text-white font-medium">Linear for Agents. </span>
            Choose from a variety of AI agents and start delegating work, from
            code generation to other technical tasks.
          </p>
          <Button variant="ghost" className="bg-white/10 hover:bg-white/20 transition-colors duration-200 cursor-pointer px-5">Learn more {" "}{">"} </Button>
        </div>

        {/* image type */}
        <LayeredStack />

        {/* cards content */}
        <AIProductSectionContent />
      </div>
    </section>
  );
}
