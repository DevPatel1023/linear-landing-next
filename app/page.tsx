import { AIProductSection } from "@/components/AIProductSection";
import { CTA } from "@/components/CTASection";
import { CustomerSection } from "@/components/CustomerSection";
import { FoundationSection } from "@/components/FoundationSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectPlan } from "@/components/ProjectPlan";
import StackImagesSection from "@/components/StackImagesSection";
import { TrackingSection } from "@/components/TrackingSection";
import { WhatMakesLinearDifferent } from "@/components/WhatMakesLinearDifferent";
import { Workflows } from "@/components/Workflows";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <StackImagesSection />
        <CustomerSection />
        <WhatMakesLinearDifferent />
        <AIProductSection />
        <ProjectPlan />
        <TrackingSection />
        <Workflows />
        <FoundationSection />
        <CTA />
      </main>
    </div>
  );
}
