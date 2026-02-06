import { AIProductSection } from "@/components/AIProductSection";
import { CTA } from "@/components/CTASection";
import { CustomerSection } from "@/components/CustomerSection";
import { HeroSection } from "@/components/HeroSection";
import { WhatMakesLinearDifferent } from "@/components/WhatMakesLinearDifferent";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <CustomerSection />
      <WhatMakesLinearDifferent />
      <AIProductSection />
      <CTA />
    </div>
  );
}
