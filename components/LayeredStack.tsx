"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

interface Option {
  id: string;
  name: string;
  icon: string;
  isAgent?: boolean;
  color: string;
}

const options: Option[] = [
  {
    id: "cursor",
    name: "Cursor",
    icon: "/cursor.png",
    isAgent: true,
    color: "#313131",
  },
  {
    id: "github",
    name: "GitHub Copilot",
    icon: "/githubcopilet.png",
    isAgent: true,
    color: "#111213",
  },
  {
    id: "sentry",
    name: "Sentry",
    icon: "/sentry.png",
    isAgent: true,
    color: "#0D0F0F",
  },
  { id: "leela", name: "Leela", icon: "/leela.png", color: "#0D0F0F" },
  {
    id: "codex",
    name: "Codex",
    icon: "/codex.png",
    isAgent: true,
    color: "#0D0F0F",
  },
  { id: "conor", name: "Conor", icon: "/conor.png", color: "#0D0F0F" },
];

export function LayeredStack() {
  const top = options[0];
  const rest = options.slice(1);

  return (
    <div className="relative flex justify-center mt-24 px-4 overflow-hidden">
      <div className="relative perspective-distant w-full max-w-7xl">
        {/* Main container tilted - like a single tilted card */}
        <div
          className="flex flex-col items-center"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(25deg)",
          }}
        >
          <div className="bg-[#212223] w-full max-w-150 sm:max-w-162.5 md:max-w-187.5 lg:max-w-212.5 h-15 rounded-t-lg flex items-center px-3">
            {/* fake blinking caret */}
            <span className="ml-1 w-px h-5 bg-cyan-400 animate-blink" />
            <span className="text-white/40 text-sm sm:text-md">Assign to…</span>
          </div>

          {/* TOP CARD - Selected, +10px wider */}
          <div
            className="w-full max-w-157.5 sm:max-w-170 md:max-w-195 lg:max-w-220 h-15 rounded-lg flex items-center border border-white/30 py-8"
            style={{
              backgroundColor: top.color,
              marginTop: "-5px",
              transform: "translateZ(20px)",
            }}
          >
            <Avatar className="ml-3 w-7 h-7 sm:w-8 sm:h-8 shrink-0">
              <AvatarImage src={top.icon} />
              <AvatarFallback>{top.id}</AvatarFallback>
            </Avatar>

            <div className="flex justify-between pl-3 sm:pl-5 w-full pr-3">
              <div className="flex items-center gap-2 min-w-0">
                <p className="text-sm sm:text-base md:text-lg truncate">
                  {top.name}
                </p>
                {top.isAgent && (
                  <Badge
                    variant="secondary"
                    className="h-5 px-2 rounded-md bg-white/10 border border-white/15 text-[10px] sm:text-xs text-white/70 shrink-0"
                  >
                    Agent
                  </Badge>
                )}
              </div>
              <Check className="ml-2 h-5 w-5 sm:h-6 sm:w-6 text-white/70 shrink-0" />
            </div>
          </div>

          {/* STACK - Very subtle +10px increase per layer */}
          {rest.map((op, index) => {
            // Each layer only 10px wider than previous - very subtle
            const widthClasses = [
              "max-w-[605px] sm:max-w-[655px] md:max-w-[755px] lg:max-w-[855px]", // +10px - GitHub Copilot
              "max-w-[610px] sm:max-w-[660px] md:max-w-[760px] lg:max-w-[860px]", // +10px - Sentry
              "max-w-[615px] sm:max-w-[665px] md:max-w-[765px] lg:max-w-[865px]", // +10px - Leela
              "max-w-[620px] sm:max-w-[670px] md:max-w-[770px] lg:max-w-[870px]", // +10px - Codex
              "max-w-[625px] sm:max-w-[675px] md:max-w-[775px] lg:max-w-[875px]", // +10px - Conor
            ];

            return (
              <div
                key={op.id}
                className={`w-full ${widthClasses[index]} h-15  flex items-center border-l border-r border-white/5`}
                style={{
                  backgroundColor: op.color,
                  opacity: 1 - (index + 1) * 0.12,
                  marginTop: "-1px",
                }}
              >
                <Avatar className="ml-3 w-7 h-7 sm:w-8 sm:h-8 shrink-0">
                  <AvatarImage src={op.icon} />
                  <AvatarFallback>{op.id}</AvatarFallback>
                </Avatar>

                <div className="flex items-center gap-2 pl-3 sm:pl-5 w-full pr-3 min-w-0">
                  <p className="text-sm sm:text-base md:text-lg truncate">
                    {op.name}
                  </p>
                  {op.isAgent && (
                    <Badge
                      variant="secondary"
                      className="h-5 px-2 rounded-md bg-white/10 border border-white/15 text-[10px] sm:text-xs text-white/70 shrink-0"
                    >
                      Agent
                    </Badge>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
