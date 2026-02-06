import { PlanningHeroImageWrapper } from "./PlanningHeroImageWrapper";
import { ProjectPlanCards } from "./ProjectPlanCards";

export function ProjectPlan() {
  return (
    <section className="relative py-25 bg-linear-to-b from-white/10 to-black">
      <div className="container mx-auto px-4">
        {/* text */}
        <div className="inline-flex items-center gap-2">
          {/* blue indicator */}
          <span className="h-2.5 w-4 rounded-full bg-green-400" />

          <span className="text-[#D0D6E0] text-sm cursor-pointer inline-flex items-center gap-1 hover:gap-2 transition-all duration-200">
            Project and long-term planning{"  "}
            <span className="inline-block transition-transform duration-200">
              {">"}
            </span>
          </span>
        </div>

        {/* heading text + subheading text */}
        <div className="space-y-5">
          <h1 className="py-4 pb-5 text-5xl font-medium">
            AI-assisted product development
          </h1>
          <p className="max-w-md text-white/60 leading-relaxed w-fit font-medium text-lg">
            <span className="text-white font-medium">
              Align your team around a unified product timeline.{" "}
            </span>
            Plan, manage, and track all product initiatives with Linear’s visual
            planning tools.
          </p>
        </div>
      </div>

      {/* hero image wrapper */}
      <PlanningHeroImageWrapper />

      {/* cards */}
      <ProjectPlanCards />
    </section>
  );
}
