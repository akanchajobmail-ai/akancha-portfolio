import type { ReactNode } from "react";

export function SideNote({ label, children }: { label: string; children: ReactNode }) {
  return (
    <aside className="border-l-2 border-accent/60 pl-4 py-1 my-6 text-sm">
      <div className="text-[10px] uppercase tracking-[0.22em] text-accent mb-1">{label}</div>
      <div className="font-serif italic text-primary/80 text-base leading-snug">{children}</div>
    </aside>
  );
}
