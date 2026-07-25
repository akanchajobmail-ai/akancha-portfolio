import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Concierge } from "./Concierge";

export function PageShell({ children, hideFooter = false }: { children: ReactNode; hideFooter?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1" style={{ animation: "page-enter 250ms ease-out both" }}>{children}</main>
      {!hideFooter && <Footer />}
      <Concierge />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="container-editorial pt-20 md:pt-28 pb-12 md:pb-16">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.24em] text-accent mb-6">{eyebrow}</div>
      )}
      <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">{title}</h1>
      {intro && (
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{intro}</p>
      )}
    </header>
  );
}
