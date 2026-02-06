import Image from "next/image";
import { AIProductSecTag } from "./AIProductSecTag";

export function AIProductSectionContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full py-25 space-y-10 items-stretch">
      {/* card 1 */}
      <div className="border-t-2 border-b-2 border-white/10 md:border-r md:border-white/10 p-5 h-full">
        {/* text */}
        <div className="py-10 space-y-3">
          <h1 className="text-xl font-medium text-white">
            Self-driving product operations
          </h1>
          <h3 className="text-lg text-white/60 font-normal">
            Streamline your product development workflows with AI assistance for
            routine, manual tasks.
          </h3>
        </div>

        {/* card */}
        <div className="bg-linear-to-b from-[#0e0f11] to-[#000000] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] space-y-3 p-2 rounded-sm">
          <div className="flex justify-start gap-3">
            <Image src="/Triage.svg" alt="traige" width={15} height={15} />
            <p className="text-sm">Traige Intelligence</p>
          </div>

          <div className="flex justify-start gap-3 items-center space-x-2">
            <p className="text-sm font-medium text-[#727272] w-20">Suggestions</p>
            <AIProductSecTag text="nan" img="/avtarimg.avif" style="border-dashed border rounded-sm" />
            <AIProductSecTag text="Mobile App Refactor" img="/phone.svg" style="border-dashed border rounded-sm " />
            <AIProductSecTag text="Slack" img="/slackdot.svg" style="border-dashed border rounded-sm" />
          </div>

          <div className="flex justify-start gap-3 items-center space-x-2">
            <p className="text-sm font-medium text-[#727272] w-20">
                Duplicate of
            </p>
            <AIProductSecTag img="AIDuplicate.svg" text="ENG-1419 Loading spinner keeps running on startup" />
          </div>
         
          <div className="flex justify-start gap-3 items-center space-x-2">
            <p className="text-sm font-medium text-[#727272] w-20">
                Related to
            </p>
            <AIProductSecTag img="AIDuplicate.svg" text="ENG-1820 Mobile app takes a long time to open" />
          </div>
        </div>
      </div>
      

      {/* card 2 */}
      <div className="border-t-2 border-b-2 border-white/10 md:border-white/10 p-5 h-full">
        {/* text */}
        <div className="py-10 space-y-3">
          <h1 className="text-xl font-medium text-white">
            Linear MCP
          </h1>
          <h3 className="text-lg text-white/60 font-normal">
            Connect Linear to your favorite tools including Cursor, Claude, ChatGPT, and more.
          </h3>
        </div>

        {/* img */}
        <div>
            <Image src="/claudechat.avif" alt="claude-chat" width={550}  height={550}/>
        </div>
      </div>
    </div>
  );
}
