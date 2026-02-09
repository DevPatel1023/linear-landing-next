"use client";

import Image from "next/image";
import { useState } from "react";

type cardDataType = {
  src: string;
  color: string;
  p: string;
  h1: string;
  time: string;
};

const cardData: cardDataType[] = [
  {
    src: "c1.svg",
    color: "#C52828",
    p: "Unexpected roadblocks forced us to take a different…",
    h1: "Off track",
    time: "Oct 27",
  },
  {
    src: "c2.svg",
    color: "#F2994A",
    p: "Progress slowed down last week because…",
    h1: "At risk",
    time: "Oct 27",
  },
  {
    src: "c3.svg",
    color: "#68CC58",
    p: "We are ready to launch next Thursday",
    h1: "On track",
    time: "Sep 8",
  },
];

export function FannedDeckCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ perspective: "1600px" }}
    >
      <div
        className="relative w-150 h-100"
        style={{ transformStyle: "preserve-3d" }}
      >
        {cardData.map((card, index) => {
          const isHovered = hoveredIndex === index;

          const baseTranslateX = index * 70;
          const rotateY = 30;

          //  diagonal lift (X + Z)
          const liftX = isHovered ? 40 : 0;
          const liftZ = isHovered ? 70 : 0;

          return (
            <div
              key={index}
              className="absolute top-0 left-0 cursor-pointer transition-all duration-300 ease-out"
              style={{
                transform: `
                  translateX(${baseTranslateX + liftX}px)
                  rotateY(${rotateY}deg)
                  translateZ(${liftZ}px)
                `,
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                zIndex: isHovered ? 50 : index,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="
                  w-[320px]
                  rounded-xl p-4
                  bg-white/[0.06]
                  backdrop-blur-xl
                  border border-white/[0.08]
                  shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                "
                style={{ backfaceVisibility: "hidden" }}
              >
                {/* Header */}
                <div className="flex items-center gap-2">
                  <Image src={card.src} alt={card.h1} width={18} height={18} />
                  <h1
                    className="text-sm font-semibold"
                    style={{ color: card.color }}
                  >
                    {card.h1}
                  </h1>
                </div>

                <p className="mt-2 text-[15px] text-white/90 leading-relaxed">
                  {card.p}
                </p>

                <span className="mt-3 block text-xs text-white/40">
                  {card.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
