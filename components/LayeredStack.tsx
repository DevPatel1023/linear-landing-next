"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

interface Option {
  id: string;
  name: string;
  icon: string;
  badge?: string;
  isAgent?: boolean;
  color: string;
}

const options: Option[] = [
  {
    id: "cursor",
    name: "Cursor",
    icon: "/cursor.png",
    badge: "Agent",
    isAgent: true,
    color: "#313131",
  },
  {
    id: "github",
    name: "GitHub Copilot",
    icon: "/githubcopilet.png",
    badge: "Agent",
    isAgent: true,
    color: "#111213",
  },
  {
    id: "sentry",
    name: "Sentry",
    icon: "/sentry.png",
    badge: "Agent",
    isAgent: true,
    color: "#0D0F0F",
  },
  { id: "leela", name: "Leela", icon: "/leela.png", color: "#0D0F0F" },
  {
    id: "codex",
    name: "Codex",
    icon: "/codex.png",
    badge: "Agent",
    isAgent: true,
    color: "#0D0F0F",
  },
  { id: "conor", name: "Conor", icon: "/conor.png", color: "#0D0F0F" },
];

export function LayeredStack() {
  return (
    <div className="relative flex justify-center mt-24">
      {/* 3D scene */}
      <div className="relative perspective-distant">
        <div className="relative transform-style-preserve-3d">
          {/* layers*/}

          {/* input layer */}
          <div className="bg-[#212223] w-200 h-15 rounded-lg flex items-center">
            <input
              autoFocus
              type="text"
              placeholder="Assign to…"
              className="
    ml-3
    bg-transparent
    outline-none
    text-white
    placeholder:text-white/40
    caret-cyan-400
    text-md
    w-full
  "
            />
          </div>

          {options.map((op, id) => (
            <div
              key={id}
              className= "w-200 h-15 rounded-lg flex items-center"
              style={{ backgroundColor: op.color }}
            >
              <Avatar>
                <AvatarImage src={op.icon} />
                <AvatarFallback>{op.id}</AvatarFallback>
              </Avatar>
              <div className="flex justify-between pl-5 w-full">
                <div className="flex justify-end ">
                <p className="text-lg">{op.name}</p>
                {op.isAgent && (
                  <Badge
                    variant="secondary"
                    className=" ml-2
    inline-flex items-center justify-center
    h-5 px-2 py-4
    rounded-md
    bg-white/10
    border border-white/15
    text-[11px] font-medium
    text-white/70 text-xs
  "
                  >
                    Agent
                  </Badge>
                )}
                </div>
                {op.name === "Cursor" && (
                  <Check className="ml-auto h-6 w-6 text-white/70" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
