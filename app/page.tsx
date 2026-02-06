import { AIProductSection } from "@/components/AIProductSection";
import { CTA } from "@/components/CTASection";
import { CustomerSection } from "@/components/CustomerSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectPlan } from "@/components/ProjectPlan";
import { WhatMakesLinearDifferent } from "@/components/WhatMakesLinearDifferent";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <CustomerSection />
        <WhatMakesLinearDifferent />
        <AIProductSection />
        <ProjectPlan />
        <CTA />
      </main>
    </div>
  );
}
