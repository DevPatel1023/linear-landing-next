'use client'

export function NavItem({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="cursor-pointer rounded-md p-2 hover:bg-white/10 transition">
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="text-xs text-white/60">{desc}</p>
    </div>
  );
}
