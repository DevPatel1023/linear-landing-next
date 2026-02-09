"use client";

import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type FeatureCard = {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  highlight?: string;
  content?: Array<{
    type: "user-badge" | "comment" | "issue";
    text: string;
    src?: string;
    user?: string;
    timestamp?: string;
    status?: string;
  }>;
};

const features: FeatureCard[] = [
  {
    icon: "ProjectPlanProfile.svg",
    iconColor: "#68CC58",
    title: "Collaborate on ideas",
    description:
      "Write down product ideas and work together on feature specs in realtime, multiplayer project documents. Add **style** and ##structure with rich-text formatting options.",
    highlight: "Collaborate on",
    content: [
      { type: "user-badge", text: "zoe" },
      { type: "user-badge", text: "quinn" },
    ],
  },
  {
    icon: "ProjectPlanFeadback.svg",
    iconColor: "#F2994A",
    title: "Collect feedback",
    description:
      "Discuss ideas directly in context and refine your project specifications with inline comments.",
    highlight: "with inline comments",
    content: [
      {
        type: "comment",
        user: "julian",
        timestamp: "just now",
        text: "sounds like a good idea!",
      },
    ],
  },
  {
    icon: "ProjectPlanConvert.svg",
    iconColor: "#68CC58",
    title: "Convert text to issues",
    description: "Seamlessly move between ideation and execution.",
    content: [
      {
        type: "issue",
        src: "ENG231.svg",
        status: "in-progress",
        text: "ENG-231 Implement contextual memory",
      },
      {
        type: "issue",
        src: "ENG232.svg",
        status: "backlog",
        text: "ENG-232 Better bias filtering algorithms",
      },
      {
        type: "issue",
        src: "ENG232.svg",
        status: "backlog",
        text: "ENG-233 Upgrade model selection logic",
      },
    ],
  },
];

export function ProjectPlanFeat() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <section className="w-full py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left navigation */}
        <div className="w-full lg:w-[420px] space-y-10">
          <h1 className="text-2xl font-semibold text-white leading-tight">
            Ideate and specify
            <br className="block md:hidden" />
            what to build next
          </h1>

          <div className="space-y-2">
            {[
              "Collaborative documents",
              "Inline comments",
              "Text-to-issue commands",
            ].map((label, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`block w-full text-left text-lg lg:text-xl leading-snug transition-all
                    ${
                      activeIndex === i
                        ? "text-white border-l-2 border-[#68CC58] pl-4"
                        : "text-white/40 border-l-2 border-transparent pl-4 hover:text-white/60"
                    }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Right mockup */}
        <div className="bg-black p-2 rounded-md border border-white/10">
          <div className="w-full lg:flex-1">
            <div className="relative min-h-[560px] rounded-md bg-gradient-to-b from-[#0f1115] to-[#0a0b0e] border border-white/10 overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-3 px-6 py-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-sm bg-white/40" />
                <span className="text-white/50 text-sm">Spice harvester</span>
                <span className="text-white/30 text-sm">&gt;</span>
                <span className="text-white/50 text-sm">Project specs</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 space-y-8">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-xl"
                  style={{ backgroundColor: `${activeFeature.iconColor}30` }}
                >
                  <Image
                    src={activeFeature.icon}
                    alt={activeFeature.title}
                    width={22}
                    height={22}
                  />
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold backdrop-blur-lg text-white leading-tight">
                  {activeFeature.highlight ? (
                    <>
                      {activeFeature.title.split(activeFeature.highlight)[0]}
                      <span className="bg-[#68CC58] text-black px-1">
                        {activeFeature.highlight}
                      </span>
                      {activeFeature.title.split(activeFeature.highlight)[1]}
                    </>
                  ) : (
                    activeFeature.title
                  )}
                </h2>

                {/* Description */}
                <p className="text-white/65 text-md lg:text-[17px] leading-[1.65] max-w-[56ch]">
                  {activeFeature.description}
                </p>

                {/* Inline comment */}
                {activeIndex === 1 && (
                  <div className="relative mt-10 pl-6">
                    <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
                    <span className="bg-[#867643] text-white px-1">
                      with inline comments.
                    </span>

                    <div className="absolute left-0 top-10 w-[320px] bg-[#141518] border border-white/10 rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-3">
                    <div className="space-y-4 ">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage
                            src="/PPLoad.avif"
                            alt={activeFeature.title}
                            width={20}
                            height={20}
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="text-white text-sm font-medium">
                          julian
                        </span>
                        <span className="text-white/40 text-xs ml-auto">
                          just now
                        </span>
                        <span className="text-white/40 text-xs ml-auto">
                          <Image src="/tick.svg" alt="tick" width={20} height={20} />
                        </span>
                      </div>
                      <p className="text-white text-sm">
                        sounds like a good idea!
                      </p>
                      </div>
                      <div>
                        
                        <div className="flex items-center  gap-2 ">
                        <Avatar>
                          <AvatarImage
                            src="/PPLoad2.avif"
                            alt={activeFeature.title}
                            width={20}
                            height={20}
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="text-white/40 text-sm">Reply…</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Issues */}
                {activeIndex === 2 && (
                  <div className="space-y-3">
                    {activeFeature.content?.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-white/60"
                      >
                        <Image src={item.src!} alt={item.text} width={20} height={20}/>
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                )}
                <Image
                  src="/ProjectPlanLoad.svg"
                  alt="loading"
                  width={400}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
