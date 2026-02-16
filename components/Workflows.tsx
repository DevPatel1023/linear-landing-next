"use client"

import { useRef } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

const images = [
  {
    image: "/AutomatePR.avif",
    text: "Automate pull requests and commit workflows ",
  },
  {
    image: "/AutomatePR.avif",
    text: "Automate pull requests and commit workflows ",
  },
  {
    image: "/AutomatePR.avif",
    text: "Automate pull requests and commit workflows ",
  },
  {
    image: "/AutomatePR.avif",
    text: "Automate pull requests and commit workflows ",
  },
  {
    image: "/AutomatePR.avif",
    text: "Automate pull requests and commit workflows ",
  },
  {
    image: "/AutomatePR.avif",
    text: "Automate pull requests and commit workflows ",
  },

];

export function Workflows() {

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToEdge = (dir: "left" | "right") => {
  if (!scrollRef.current) return;

  const el = scrollRef.current;

  el.scrollTo({
    left: dir === "left" ? 0 : el.scrollWidth,
    behavior: "smooth",
  });
};


  return (
    <section className="py-16 md:py-30 space-y-10 container mx-auto px-4">
      <div className="mx-auto max-w-6xl space-y-10"  >
        {/* text */}
        <div className="inline-flex items-center gap-2">
          {/* blue indicator */}
          <span className="h-2.5 w-4 rounded-full bg-purple-400" />

          <span className="text-[#D0D6E0] text-sm cursor-pointer inline-flex items-center gap-1 hover:gap-2 transition-all duration-200">
            Workflows and integrations
          </span>
        </div>

        {/* heading text + subheading text */}
        <div className="grid grid-cols-2 gap-10 space-y-5">
          <h1 className="py-4 pb-5 text-5xl font-medium">
            Collaborate across tools and teams
          </h1>
          <p className="max-w-md text-white/60 leading-relaxed w-fit font-medium text-lg">
            Expand the capabilities of the Linear system with a wide variety of integrations that keep everyone in your organization aligned and focused.
          </p>
        </div>
      </div>

      {/* horizontal scrollable card */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2" ref={scrollRef}>
          {images.map((obj, key) => (
            <Card
              key={key}
              className="group w-86.75 shrink-0 transition-all duration-300 ease-out hover:bg-white/10 cursor-pointer"
            >
              <CardHeader className="p-4 pb-3">
                <img
                  src={obj.image}
                  alt={obj.text}
                  className="w-full h-60 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent className="flex items-start justify-between gap-3 px-4 pb-4 pt-0">
                <div className="flex-1">
                  <span className="text-sm text-white/60">Powerful git workflows</span>
                  <p className="text-base font-medium text-white leading-snug mt-1">
                    {obj.text}
                  </p>
                </div>
                <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white/10">
                  +
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


      <div className="flex items-center justify-center gap-3">
        {/* Backward */}
       <button
  onClick={() => scrollToEdge("left")}
  className="hover:cursor-pointer  -translate-y-1/2 z-10
             h-10 w-10 rounded-full bg-black/60 hover:bg-black/5 border border-white/20
             text-white/60 hover:text-white transition-all duration-200
             hover:scale-105 active:scale-95"
>
  {"<"}
</button>

<button
  onClick={() => scrollToEdge("right")}
  className="-translate-y-1/2 z-10
             h-10 w-10 rounded-full bg-black/60 hover:bg-black/5 border border-white/20
             text-white/60 hover:text-white transition-all duration-200
             hover:scale-105 active:scale-95"
>
  {">"}
</button>

      </div>
    </section>
  );
}
