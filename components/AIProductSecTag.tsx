import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function AIProductSecTag({ text, img, style }: { text: string; img: string; style?: string }) {
  return (
    <div className={`${style} p-1 flex justify-center gap-1`}>
      <Avatar className="h-5 w-5">
        <AvatarImage src={img} />
        <AvatarFallback>{text.slice(0, 1)}</AvatarFallback>
      </Avatar>
      <p className="text-sm text-white/65">{text}</p>
    </div>
  );
}
