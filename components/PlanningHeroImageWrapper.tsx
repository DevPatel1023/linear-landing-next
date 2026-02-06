import Image from "next/image";

export function PlanningHeroImageWrapper() {
  return (
    <div className="relative w-full h-100 md:h-175 lg:h-200">
      <Image
        src="/PlanningHeroImageWrapper.webp"
        alt="PlanningHeroImageWrapper-img"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
