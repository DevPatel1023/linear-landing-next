"use client"

import { cardDataType } from "@/app/types/cardDataType";
import Image from "next/image";
import { ProjectSpecifixFeat } from "./ProjectSpecifixFeat";

const data: cardDataType[] = [
    {
        src: "/Workflows.svg",
        title: "Tailored workflows",
        p: "Track progress across custom issue flows for your team."
    },
    {
        src: "/Views.svg",
        title: "Custom views",
        p: "Switch between list and board. Group issues with swimlanes."
    },
    {
        src: "/Filters.svg",
        title: "Filters",
        p: "Refine issue lists down to what’s most relevant to you."
    },
    {
        src: "/SLA.svg",
        title: "SLAs",
        p: "Automatically apply deadlines to time-sensitive tasks."
    },
]

export function LinearInsights() {
    return (
        <div className="grid grid-rows-1 space-y-2">
            <h1 className="text-2xl font-medium text-white">
                Linear Insights
            </h1>
            <p className="text-xl text-white/40">
                Take the guesswork out of product planning with realtime analytics and reporting dashboards.
            </p>
            <div className="mt-5">
                <button className="text-white border border-white/10 bg-white/15 hover:bg-white/25 text-sm rounded-md p-1 px-5 transition-colors duration-150 delay-150">Learn more {" "} {">"}</button>
            </div>

            {/* img */}
            <Image src="/LinearInsightsHeroImg.svg" alt="LinearInsightsHeroImg" width={3200} height={1620} />

            {/* cards */}
            <div className="mt-5">
                <ProjectSpecifixFeat data={data} />
            </div>
        </div>
    )
}