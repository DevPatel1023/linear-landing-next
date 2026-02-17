"use client";

import Image from "next/image";
import { ProjectSpecifixFeat } from "./ProjectSpecifixFeat";
import { cardDataType } from "@/app/types/cardDataType";

const data: cardDataType[] = [
  {
    src: "Lock.svg",
    p: "SSO, SAML, SCIM",
    title: "",
  },
  {
    src: "SOC.svg",
    p: "SOC 2 Compliant",
    title: "",
  },
  {
    src: "MultiRegion.svg",
    p: "Multi-region support",
    title: "",
  },
  {
    src: "AdminControl.svg",
    p: "Advanced admin controls",
    title: "",
  },
];

export function FoundationSection() {
  return (
    <section className="relative py-25">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          {/* text */}
          <div>
            <div className="inline-flex items-center gap-2">
              {/* blue indicator */}
              <span className="h-2.5 w-4 rounded-full border border-white/30" />

              <span className="text-[#D0D6E0] text-sm cursor-pointer inline-flex items-center gap-1 hover:gap-2 transition-all duration-200">
                Under the hood
              </span>
            </div>

            {/* heading text + subheading text */}
            <div className="space-y-5">
              <h1 className="py-4 pb-5 text-5xl md:text-6xl font-medium">
                Built on strong foundations
              </h1>
              <p className="max-w-md text-white/60 leading-relaxed w-fit font-normal text-md md:text-sm">
                Linear is so simple to use, it’s easy to overlook the wealth of
                complex technologies packed under the hood that keep Linear
                robust, safe, and blazing fast.
              </p>
            </div>

            {/* seprate line */}
            <div className="mt-10 h-1 w-full bg-white/5" />

            {/* content */}
            <div className="space-y-5">
              <div>
                <h3 className="py-4 pb-5 font-medium text-sm">
                  Linear Sync Engine
                </h3>
                <p className="text-white/60  font-normal text-sm">
                  Built with a high-performance architecture and an obsessive
                  focus on speed.
                </p>
              </div>
              <div>
                <h3 className="py-4 pb-5 font-medium text-sm">
                  Enterprise-ready security
                </h3>
                <p className="text-white/60  font-normal text-sm">
                  Best-in-class security practices keep your work safe and
                  secure at every layer.
                </p>
              </div>
              <div>
                <h3 className="py-4 pb-3 font-medium text-sm">
                  Engineered for scale
                </h3>
                <p className="text-white/60  font-normal text-sm">
                  Built for teams of all sizes. From early-stage startups to
                  global enterprises.
                </p>
              </div>
            </div>
          </div>

 <div className="relative overflow-hidden">
  <div className="-mr-[15vw] border-dashed border-white/20 p-5">
    <Image
      src="/Foundation.svg"
      alt="Foundation illustration"
      width={3200}
      height={1000}
      priority
      className="w-[140%] h-auto"
    />
  </div>
</div>


          <div className="mt-5 space-y-5">
            {/* seprate line */}
            <div className="h-1 w-full bg-white/5" />

            {/* cards */}
            <div className="w-full">
              <ProjectSpecifixFeat data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
