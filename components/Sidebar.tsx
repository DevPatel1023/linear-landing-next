'use client'

import { type FC } from 'react'
import Image from 'next/image'
import IllustrateAnimate from './IllustrateAnimate'

const Sidebar: FC = () => {
  return (
    <div className="flex flex-col w-full h-full px-3 pt-3 pb-4 bg-[#111111] rounded-xl border border-white/[0.06]">

      {/* Top bar — dots + controls */}
      <div className="flex items-center justify-between mb-[14px] px-1 [transform-style:preserve-3d]">
        {/* Traffic-light dots */}
        <IllustrateAnimate delay={2.9} className="flex items-center gap-[6px] [transform-style:preserve-3d]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#262626]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#262626]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#262626]" />
        </IllustrateAnimate>

        {/* Controls icon */}
        <IllustrateAnimate delay={2.7} className="flex [transform-style:preserve-3d]">
          <Image src="/sidebar-controls.svg" alt="controls" width={16} height={16} />
        </IllustrateAnimate>
      </div>

      {/* Header — logo + edit */}
      <div className="flex justify-between items-center mb-3 [transform-style:preserve-3d]">
        <IllustrateAnimate delay={2.5} className="flex [transform-style:preserve-3d]">
          <Image src="/sidebar-logo.svg" alt="logo" width={80} height={18} />
        </IllustrateAnimate>

        <IllustrateAnimate delay={2.3} className="flex [transform-style:preserve-3d]">
          <Image src="/sidebar-edit.svg" alt="edit" width={16} height={16} />
        </IllustrateAnimate>
      </div>

      {/* Nav items */}
      <div className="flex flex-col gap-[14px] [transform-style:preserve-3d]">
        <IllustrateAnimate delay={2.1} className="flex [transform-style:preserve-3d]">
          <Image src="/inbox-my-issue.svg" alt="Inbox / My Issues" width={160} height={24} />
        </IllustrateAnimate>

        <IllustrateAnimate delay={1.9} className="flex [transform-style:preserve-3d]">
          <Image src="/workspace.svg" alt="Workspace" width={160} height={24} />
        </IllustrateAnimate>

        <IllustrateAnimate delay={1.7} className="flex [transform-style:preserve-3d]">
          <Image src="/favourite.svg" alt="Favourites" width={160} height={24} />
        </IllustrateAnimate>

        <IllustrateAnimate delay={1.5} className="flex [transform-style:preserve-3d]">
          <Image src="/your-team.svg" alt="Your Team" width={160} height={24} />
        </IllustrateAnimate>

        <IllustrateAnimate delay={1.3} className="flex [transform-style:preserve-3d]">
          <Image src="/other-teams.svg" alt="Other Teams" width={160} height={24} />
        </IllustrateAnimate>
      </div>
    </div>
  )
}

export default Sidebar