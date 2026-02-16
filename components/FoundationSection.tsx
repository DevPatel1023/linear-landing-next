"use client"

import Image from "next/image"

export function FoundationSection() {
    return (
        <section className="relative py-25">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-5">

                    {/* text */}
                    <div>
                        <div className="inline-flex items-center gap-2">
                            {/* blue indicator */}
                            <span className="h-2.5 w-4 rounded-full border border-white/30" />

                            <span className="text-[#D0D6E0] text-sm cursor-pointer inline-flex items-center gap-1 hover:gap-2 transition-all duration-200">
                                Under the hood{"  "}
                                <span className="inline-block transition-transform duration-200">
                                    {">"}
                                </span>
                            </span>
                        </div>

                        {/* heading text + subheading text */}
                        <div className="space-y-5">
                            <h1 className="py-4 pb-5 text-6xl font-medium">
                                Built on strong foundations
                            </h1>
                            <p className="max-w-md text-white/60 leading-relaxed w-fit font-medium text-sm">
                                Linear is so simple to use, it’s easy to overlook the wealth of complex technologies packed under the hood that keep Linear robust, safe, and blazing fast.
                            </p>
                        </div>

                        <div className="h-2 w-full " />
                    </div>

                    {/* img */}
                     <div className="-mr-[15vw]">
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

            </div>
        </section>
    )
}