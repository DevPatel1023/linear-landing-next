"use client"

import Image from "next/image";
import { HoverOverlay } from "./HoverOverlay";

export function CustomerSectionDesktop({ images }: { images: string[] }) {
  return (
    <div className="hidden md:block">
      {/* HOVER GROUP */}
      <div className="group relative">
        {/* GRID */}
        <div className="grid grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex p-4 items-center justify-center rounded-xl bg-transparent mb-3"
            >
              <Image
                src={src}
                alt="Sponsor logo"
                width={150}
                height={150}
                className="object-contain transition duration-300 group-hover:blur-sm"
              />
            </div>
          ))}
        </div>

        {/* SINGLE OVERLAY */}
        <HoverOverlay />
      </div>
    </div>
  );
}
