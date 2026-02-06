"use client"

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export function CustomerSectionCarousal({ images }: { images: string[] }) {
  return (
   <Carousel className="w-full md:hidden">
  <CarouselContent className="pl-0 animate-[scroll_30s_linear_infinite]">
    {images.concat(images).map((src, index) => (
      <CarouselItem
        key={index}
        className="basis-1/5 shrink-0 flex justify-center"
      >
        <div className="group flex h-35 w-35 items-center justify-center rounded-md transition-all duration-300 hover:bg-white/5">
          <Image
            src={src}
            alt="Sponsor logo"
            width={150}
            height={150}
            className="object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
          />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

  );
}
