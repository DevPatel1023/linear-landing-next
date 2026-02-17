"use client";

import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// ── Shared: left-rail skeleton lines (the grey placeholder text rows) ────────
function SkeletonLines({ rows }: { rows: number[] }) {
  return (
    <div className="space-y-[10px]">
      {rows.map((w, i) => (
        <div
          key={i}
          className="h-[7px] rounded-full bg-white/[0.08]"
          style={{ width: `${w}%` }}
        />
      ))}
    </div>
  );
}

// ── Shared: left vertical dots rail (the 4 small dots in screenshots) ────────
function VerticalRail() {
  return (
    <div className="flex flex-col gap-[6px] items-center">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-[3px] h-[3px] rounded-full bg-white/20" />
      ))}
    </div>
  );
}

// ── Cursor badge (multiplayer presence) ─────────────────────────────────────
function CursorBadge({
  name,
  color,
  className = "",
}: {
  name: string;
  color: string;
  className?: string;
}) {
  return (
    <span
      className={`absolute pointer-events-none select-none z-20 flex flex-col items-start ${className}`}
    >
      <svg width="11" height="15" viewBox="0 0 11 15" fill="none">
        <path
          d="M0 0L0 12L3.2 8.8L5.5 14L6.8 13.5L4.5 8.5H9L0 0Z"
          fill={color}
        />
      </svg>
      <span
        className="px-[7px] py-[2px] rounded-[4px] text-white text-[11px] font-semibold leading-[18px] whitespace-nowrap shadow-lg"
        style={{ backgroundColor: color }}
      >
        {name}
      </span>
    </span>
  );
}

// ── Shared chrome header ─────────────────────────────────────────────────────
function MockupChrome() {
  return (
    <div className="flex items-center gap-2 px-5 py-[10px] border-b border-white/[0.08]">
      {/* doc icon */}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="2" y="1" width="10" height="12" rx="1.5" stroke="white" strokeOpacity="0.3" strokeWidth="1.2"/>
        <rect x="4" y="4" width="6" height="1" rx="0.5" fill="white" fillOpacity="0.3"/>
        <rect x="4" y="6.5" width="4" height="1" rx="0.5" fill="white" fillOpacity="0.3"/>
      </svg>
      <span className="text-white/40 text-[13px]">Spice harvester</span>
      <span className="text-white/20 text-[13px]">›</span>
      <span className="text-white/40 text-[13px]">Project specs</span>
      <div className="ml-auto flex gap-[5px]">
        <div className="w-[14px] h-[4px] rounded-full bg-white/15" />
        <div className="w-[14px] h-[4px] rounded-full bg-white/15" />
        <div className="w-[14px] h-[4px] rounded-full bg-white/15" />
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// TAB 0 — Collaborative documents
// ════════════════════════════════════════════════════════════════════════════
function Tab0Content() {
  return (
    <div className="p-8 lg:p-10">
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-[#68CC58]/20 flex items-center justify-center mb-7">
        <Image src="/ProjectPlanProfile.svg" alt="collaborate" width={22} height={22} />
      </div>

      {/* Title row — "Collaborate on [ideas]" with Zoe cursor */}
      <h2 className="text-[17px] font-semibold text-white leading-snug mb-5">
        {/* highlighted box */}
        <span className="inline-flex items-center border border-[#4CAF50] bg-[#1a2e1a] rounded-[4px] px-[6px] py-[1px] mr-1">
          Collaborate on
        </span>
        {/* "ideas" with Zoe cursor floating above */}
        <span className="relative inline-block">
          <CursorBadge name="Zoe" color="#68CC58" className="-top-[36px] left-0" />
          ideas
        </span>
      </h2>

      {/* Description with Quinn cursor over "specs" */}
      <p className="text-white/55 text-[15px] leading-[1.7] mb-8 max-w-[480px]">
        Write down product ideas and work together on feature{" "}
        <span className="relative inline-block">
          <CursorBadge name="quinn" color="#6B5CE7" className="-top-[36px] left-0" />
          specs
        </span>{" "}
        in realtime, multiplayer project{"\u200B"}documents. Add{" "}
        <span className="text-white/80">**style**</span> and{" "}
        <span className="text-white/80">##structure</span> with rich-text
        formatting options.
      </p>

       {/* Skeleton img */}
       <Image
                  src="/ProjectPlanLoad.svg"
                  alt="loading"
                  width={400}
                  height={250}
                />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// TAB 1 — Inline comments
// ════════════════════════════════════════════════════════════════════════════
function Tab1Content() {
  return (
    <div className="p-8 lg:p-10">
      {/* Icon — green speech bubble */}
      <div className="w-11 h-11 rounded-xl bg-[#68CC58]/20 flex items-center justify-center mb-7">
        <Image src="/ProjectPlanFeadback.svg" alt="feedback" width={22} height={22} />
      </div>

      {/* Title */}
      <h2 className="text-[17px] font-semibold text-white leading-snug mb-5">
        Collect feedback
      </h2>

      {/* Description with highlighted "with inline comments." */}
      <p className="text-white/55 text-[15px] leading-[1.7] mb-6 max-w-[480px]">
        Discuss ideas directly in context and refine your project specifications{" "}
        <span
          className="px-[3px] py-[1px] rounded-[2px] text-white/90"
          style={{ backgroundColor: "#7a6535" }}
        >
          with inline comments.
        </span>
      </p>

      {/* Left border + comment popup — matching screenshot 2 exactly */}
      <div className="relative pl-5 mb-2">
        {/* vertical amber cursor line */}
        <div className="absolute left-0 top-0 w-[2px] h-6 bg-[#c8972a] rounded-full" />

        {/* Comment card — floats below the highlighted text */}
        <div
          className="mt-4 w-[300px] bg-[#18191d] border border-white/[0.1] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
        >
          {/* Comment header */}
          <div className="flex items-center gap-2 px-4 pt-4 pb-3">
            <Avatar className="w-7 h-7">
              <AvatarImage src="/PPLoad.avif" alt="julian" />
              <AvatarFallback className="text-[10px] bg-white/10">JL</AvatarFallback>
            </Avatar>
            <span className="text-white text-[13px] font-semibold">julian</span>
            <span className="text-white/35 text-[12px] ml-1">just now</span>
            {/* dots + check */}
            <div className="ml-auto flex items-center gap-2">
              <div className="flex gap-[3px]">
                <div className="w-[3px] h-[3px] rounded-full bg-white/30" />
                <div className="w-[3px] h-[3px] rounded-full bg-white/30" />
                <div className="w-[3px] h-[3px] rounded-full bg-white/30" />
              </div>
              {/* checkmark */}
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M1 5L4.5 8.5L12 1" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Comment body */}
          <p className="px-4 pb-4 text-white text-[13px] leading-relaxed">
            sounds like a good idea!
          </p>

          {/* Divider */}
          <div className="h-px bg-white/[0.07] mx-4" />

          {/* Reply row */}
          <div className="flex items-center gap-2 px-4 py-3">
            <Avatar className="w-6 h-6">
              <AvatarImage src="/PPLoad2.avif" alt="reply" />
              <AvatarFallback className="text-[10px] bg-white/10">U</AvatarFallback>
            </Avatar>
            <span className="text-white/30 text-[13px]">Reply…</span>
          </div>
        </div>
      </div>

       {/* Skeleton img */}
       <Image
                  src="/ProjectPlanLoad.svg"
                  alt="loading"
                  width={400}
                  height={250}
                />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// TAB 2 — Text-to-issue commands
// ════════════════════════════════════════════════════════════════════════════
function Tab2Content() {
  return (
    <div className="p-8 lg:p-10">
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-[#68CC58]/20 flex items-center justify-center mb-7">
        <Image src="/ProjectPlanConvert.svg" alt="convert" width={22} height={22} />
      </div>

      {/* Title */}
      <h2 className="text-[17px] font-semibold text-white leading-snug mb-5">
        Convert text to issues
      </h2>

      {/* Description */}
      <p className="text-white/55 text-[15px] leading-[1.7] mb-8 max-w-[480px]">
        Seamlessly move between ideation and execution.
      </p>

      {/* Skeleton img */}
       <Image
                  src="/ProjectPlanLoad.svg"
                  alt="loading"
                  width={400}
                  height={250}
                />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// Main component
// ════════════════════════════════════════════════════════════════════════════
const tabs = [
  "Collaborative documents",
  "Inline comments",
  "Text-to-issue commands",
];

export function ProjectPlanFeat() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

        {/* ── Left: heading + tab nav ── */}
        <div className="w-full lg:w-[340px] shrink-0 space-y-10">
          <h1 className="text-[26px] font-bold text-white leading-[1.25] tracking-[-0.02em]">
            Ideate and specify
            <br />
            what to build next
          </h1>

          <div className="space-y-[2px]">
            {tabs.map((label, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`block w-full text-left text-[16px] leading-[1.5] py-[6px] transition-all duration-200
                  border-l-2 pl-4
                  ${
                    activeIndex === i
                      ? "text-white font-semibold border-[#68CC58]"
                      : "text-white/35 border-white/10 hover:text-white/55 hover:border-white/25"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Right: mockup panel ── */}
        <div className="flex-1 min-w-0">
          {/* outer dark border wrapper */}
          <div className="bg-[#0c0d10] rounded-[14px] border border-white/[0.1] p-[3px] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
            {/* inner panel */}
            <div className="rounded-[12px] bg-gradient-to-b from-[#0f1115] to-[#0a0b0e] border border-white/[0.08] overflow-hidden min-h-[520px]">
              <MockupChrome />

              {/* Tab content — manually written per tab */}
              {activeIndex === 0 && <Tab0Content />}
              {activeIndex === 1 && <Tab1Content />}
              {activeIndex === 2 && <Tab2Content />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}