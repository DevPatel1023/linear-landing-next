"use client";

import { CustomerSectionCarousal } from "./CustomerSectionCarousal";
import { CustomerSectionDesktop } from "./CustomerSectionDesktop";

const sponsorImages = [
  "/openai.svg",
  "/coinbase.svg",
  "/cashapp.svg",
  "/scale.svg",
  "/ramp.svg",
  "/vercel2.svg",
  "/cursor.svg",
  "/Boom.svg",
];

export function CustomerSection() {
  return (
    <section className="py-16 md:py-30 space-y-10 container mx-auto px-4">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* text */}
        <div className="space-y-2 text-center">
          <h1 className="text-lg md:text-xl font-medium text-white">
            Powering the world’s best product teams.
          </h1>
          <h1 className="text-lg md:text-xl font-medium text-white/50">
            From next-gen startups to established enterprises.
          </h1>
        </div>

        {/* layouts */}
        <CustomerSectionCarousal images={sponsorImages} />
        <CustomerSectionDesktop images={sponsorImages} />
      </div>
    </section>
  );
}
