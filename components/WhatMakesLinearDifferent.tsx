"use client"

import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";


const images = [
  {
    image: "/card1.png",
    text: "Purpose-build for product development",
  },
  {
    image: "/card2.png",
    text: "Designed to move fast",
  },
  {
    image: "/card3.png",
    text: "Purpose-build for product development",
  },
];

export function WhatMakesLinearDifferent() {
  return (
    <section className="py-25 container mx-auto px-4">
      {/* text */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-12 mx-auto mb-5">
        <h1 className="md:text-5xl sm:text-6xl font-semibold leading-tight text-white">
          Made for modern product teams
        </h1>

        <div className="flex items-start md:items-center">
          <p className="text-base leading-relaxed text-white/60 w-fit">
            Linear is shaped by the practices and principles that distinguish
            world-class product teams from the rest: relentless focus, fast
            execution, and a commitment to the quality of craft.{" "}
            <span className="text-white font-medium cursor-pointer inline-flex items-center gap-1 hover:gap-2 transition-all duration-200">
              Make the switch
              <span className="inline-block transition-transform duration-200">
                {">"}
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* cards: 3 which moves horizontal when user scroll */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2">
          {images.map((obj, key) => (
            <Card
              key={key}
              className="group w-90 shrink-0 transition-all duration-300 ease-out hover:bg-white/10 cursor-pointer"
            >
              <CardHeader className="p-4">
                <Image
                  src={obj.image}
                  alt={obj.text}
                  width={210}
                  height={80}
                  className="object-contain"
                />
              </CardHeader>

              <CardContent className="flex items-center justify-between gap-3 px-4 pb-4 pt-0">
                <p className="text-wrap text-base font-medium text-white">
                  {obj.text}
                </p>

                <div className="h-9 w-9 flex items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white/10">
                  +
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
