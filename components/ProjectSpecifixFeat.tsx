"use client"

import { div } from "framer-motion/client";
import Image from "next/image";

type cardDataType = {
    src : string;
    h1 : string;
    p : string;
}

const cardData: cardDataType[] = [
    {   
        src: "Initiatives.svg",
        h1 : "Initiatives",
        p : "Coordinate strategic product efforts."
    },
    {   
        src: "CrossTeam.svg",
        h1 : "Cross-team projects",
        p : "Collaborate across teams and departments"
    },
    {   
        src: "Milestone.svg",
        h1 : "Milestones",
        p : "Break projects down into concrete phases."
    },
    {   
        src: "Progress.svg",
        h1 : "Progress insights",
        p : "Track scope, velocity, and progress over time."
    },
]

export function ProjectSpecifixFeat() {
    return(
        <div className="grid grid-cols-2">
            {
                cardData.map((c,i)=>(
                    <div key={i} className="space-y-3 m-2 text-sm">
                        <Image src={c.src} alt={c.h1} height={15} width={15} />
                        <h1 className="text-white">{c.h1}</h1>
                        <p className="text-white/40">{c.p}</p>
                        </div>
                ))
            }
        </div>
    )
}