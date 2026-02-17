"use client"
import { cardDataType } from "@/app/types/cardDataType"

type cardDataProps = {
    data: cardDataType[],
    style?: string
}

export function ProjectSpecifixFeat({ data,style }: cardDataProps) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4">
            {
                data.map((c, i) => (
                    <div key={i} className="space-y-3 m-2 text-sm">
                        <img
                            src={c.src}
                            alt={c.title}
                            width={16}
                            height={16}
                            className={`${style}`}
                        />

                        <h1 className="text-white">{c.title}</h1>
                        <p className="text-white/40">{c.p}</p>
                    </div>
                ))
            }
        </div>
    )
}