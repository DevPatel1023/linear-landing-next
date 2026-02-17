"use client"

import { AIProductSecTag } from "./AIProductSecTag";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "./ui/avatar";
import { FannedDeckCard } from "./FannedDeckCard";
import { ProjectPlanFeat } from "./ProjectPlanFeat";
import { ProjectSpecifixFeat } from "./ProjectSpecifixFeat";
import { cardDataType } from "@/app/types/cardDataType";

type projectPlanCardsProps = {
  data : cardDataType[]
}

export function ProjectPlanCards({data} : projectPlanCardsProps) {
  return (
    <div className="w-full py-25 space-y-10">
      {/* Top Grid - Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-stretch">
        {/* card 1 */}
        <div className="border-t-2 border-b-2 border-white/10 md:border-r md:border-white/10 p-5 h-full">
          {/* text */}
          <div className="py-10 space-y-3">
            <h1 className="text-xl font-medium text-white">
              Manage projects end-to-end
            </h1>
            <h3 className="text-lg text-white/60 font-normal">
              Consolidate specs, milestones, tasks, and other documentation in one
              centralized location.
            </h3>
          </div>

          {/* card */}
          <div className="bg-black p-2 rounded-md border border-white/10">
            <div className="bg-[#0e0f11] space-y-3 p-4 rounded-md border-2 border-white/20">
              <h1 className="text-xl text-white">Project Overview</h1>

              <div className="flex justify-start gap-3 items-center flex-wrap">
                <p className="text-sm font-medium text-[#727272] w-20">
                  Properties
                </p>
                <AIProductSecTag text="In Progress" img="/InProgress.svg" />
                <AIProductSecTag text="ENG" img="/Profile.svg" />
                <AvatarGroup className="grayscale">
                  <Avatar>
                    <AvatarImage src="/p1.avif" alt="p1" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/p2.avif" alt="p2" />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/p3.avif" alt="p3" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/p4.avif" alt="p4" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </AvatarGroup>
              </div>

              <div className="flex justify-start gap-3 items-center flex-wrap">
                <p className="text-sm font-medium text-[#727272] w-20">
                  Resources
                </p>
                <AIProductSecTag
                  img="/Figma.svg"
                  text="Exploration"
                  style="bg-white/10 rounded-sm px-2"
                />
                <AIProductSecTag
                  img="/UserInterface.svg"
                  text="User interviews"
                  style="bg-white/10 rounded-sm px-2"
                />
              </div>

              <div className="flex justify-start gap-3 items-center space-x-2">
                <p className="text-sm font-medium text-[#727272] w-20">
                  Milestones
                </p>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-start gap-2">
                    <AIProductSecTag
                      img="/Milestones.svg"
                      text="Design Review 100%"
                    />
                    <AIProductSecTag
                      img="/Milestones.svg"
                      text="Internal Review 100% of 10"
                    />
                    <AIProductSecTag img="/Milestones2.svg" text="GA 25% of 53" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="border-t-2 border-b-2 border-white/10 md:border-white/10 p-5 h-full">
          {/* text */}
          <div className="py-10 space-y-3">
            <h1 className="text-xl font-medium text-white">Project updates</h1>
            <h3 className="text-lg text-white/60 font-normal">
              Communicate progress and project health with built-in project
              updates.
            </h3>
          </div>

          {/* c1,c2,c3 */}
          <div className="pt-15 overflow-visible relative">
            <FannedDeckCard />
          </div>
        </div>
      </div>

      {/* ProjectPlanFeat */}
      <div className="w-full border-t-2 border-b-2 border-white/10 p-5 lg:p-10">
        <ProjectPlanFeat />
      </div>

      {/* cards */}
      <div>
        <ProjectSpecifixFeat data={data} />
      </div>
    </div>
  );
}