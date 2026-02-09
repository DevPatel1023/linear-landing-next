"use client";

import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type IssueItem = {
  id: string;
  title: string;
  user: {
    name: string;
    avatar?: string;
    src: string;
  };
  type?: string;
};

const issues: IssueItem[] = [
  {
    id: "1",
    title: "Users report unexpected rate limiting",
    user: {
      name: "tom",
      src: "/p2.avif",
    },
  },
  {
    id: "2",
    title: "RangeError: Maximum call stack size exceeded",
    user: {
      name: "romain",
      src: "/romain.avif",
    },
  },
  {
    id: "3",
    title:
      'Pressing "Enter" quickly when logging in via email generates multiple...',
    user: {
      name: "tuomas",
      src: "/tuomas.avif",
    },
  },
];

export function TracingSecCard() {
  const [openMenuId, setOpenMenuId] = useState<string | null>("1");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full py-25 space-y-10 items-stretch">
      {/* card 1 */}
      <div className="border-t-2 border-b-2 border-white/10 md:border-r md:border-white/10 p-5 h-full">
        {/* text */}
        <div className="py-10 space-y-3">
          <h1 className="text-xl font-medium text-white">
            Build momentum with Cycles
          </h1>
          <h3 className="text-lg text-white/60 font-normal">
            Create healthy routines and focus your team on what work should
            happen next.
          </h3>
        </div>

        {/* card mock */}
        <div className="bg-linear-to-b from-[#0e0f11] to-[#000000] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] space-y-3 p-2 rounded-sm">
          <div className="flex justify-start gap-3">
            <p className="text-sm text-white/80">Cycle 55</p>
          </div>

          {/* indicators */}
          <div className="flex gap-4 text-sm  text-white/40">
            <div className="flex gap-4 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-white/40 rounded-full"></span>
                Scope
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-yellow-400 rounded-full"></span>
                Started
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-blue-400 rounded-full"></span>
                Completed
              </div>
            </div>
          </div>

          {/* map image */}
          <Image src="/MapImg.svg" alt="map-img" width={450} height={300} />
        </div>
      </div>

      {/* card 2 */}
      <div className="border-t-2 border-b-2 border-white/10 md:border-white/10 p-5 h-full">
        {/* text */}
        <div className="py-10 space-y-3">
          <h1 className="text-xl font-medium text-white">
            Manage incoming work with Triage
          </h1>
          <h3 className="text-lg text-white/60 font-normal">
            Review and assign incoming bug reports, feature requests, and other
            unplanned work.
          </h3>
        </div>

        <div className="bg-black rounded-md border border-white/10 p-2">
          <div className="bg-[#0e0f11] rounded-md border border-white/10 space-y-2 p-3">
            {/* Header */}
            <h1 className="text-2xl font-semibold text-white mb-8">Triage</h1>

            {/* Issues List */}
            <div className="space-y-6">
              {issues.map((issue, index) => (
                <div key={issue.id} className="relative">
                  {/* Issue Row */}
                  <div className="grid grid-rows-1 gap-4 bg-white/10 border border-white/10 p-2 rounded-md">
                    {/* Content */}
                    <div className="flex min-w-0">
                      <div className="flex items-start gap-3">
                        <p className="text-white/70 text-base leading-relaxed flex-1">
                          {issue.title}
                        </p>
                      </div>

                      {/* Type badge if exists */}
                      {issue.type && (
                        <div className="mt-2">
                          <span className="text-white/50 text-sm">
                            {issue.type}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Avatar */}
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        {issue.user.src ? (
                          <AvatarImage
                            src={issue.user.src}
                            alt={issue.user.name}
                          />
                        ) : (
                          <AvatarFallback className="bg-white/10 text-white text-sm">
                            {issue.user.name.slice(0, 1).toUpperCase()}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <span className="text-white/50 text-sm flex-shrink-0">
                        {issue.user.name}
                      </span>
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  {openMenuId === issue.id && index === 0 && (
                    <div className="absolute left-12 top-10 w-64 bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden shadow-2xl z-10">
                      <button
                        className="w-full flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5 transition-colors text-left"
                        onClick={() => setOpenMenuId(null)}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="flex-shrink-0"
                        >
                          <path
                            d="M9 2L9 16M16 9L2 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="text-base">Accept</span>
                      </button>

                      <button
                        className="w-full flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5 transition-colors text-left"
                        onClick={() => setOpenMenuId(null)}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="flex-shrink-0"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="12"
                            height="12"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                          <rect
                            x="6"
                            y="6"
                            width="6"
                            height="6"
                            rx="1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                        <span className="text-base">Mark as duplicate</span>
                      </button>

                      <button
                        className="w-full flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5 transition-colors text-left"
                        onClick={() => setOpenMenuId(null)}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="flex-shrink-0"
                        >
                          <path
                            d="M4 4L14 14M14 4L4 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="text-base">Decline</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
