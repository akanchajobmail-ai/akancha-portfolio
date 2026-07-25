import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { thinking } from "@/data/portfolio";

export const Route = createFileRoute("/how-i-think")({
  head: () => ({
    meta: [
      { title: "How I Think — Akancha Sharma" },
      {
        name: "description",
        content: "An eight-step method for turning messy problems into decisions someone can act on.",
      },
      { property: "og:title", content: "How I Think — Akancha Sharma" },
      { property: "og:description", content: "The method, stated plainly." },
    ],
  }),
  component: HowIThink,
});

function HowIThink() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Method"
        title="How I actually think."
        intro="Eight steps, stated plainly. Not a framework I read in a book — the shape my work keeps taking whether I plan it or not."
      />

      <div className="container-editorial pb-16">
        <div className="border-t border-border">
          {thinking.map((step, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={step.n}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-8 grid grid-cols-12 gap-6 border-b border-border items-baseline hover:bg-blush/30 transition-colors px-2"
                  aria-expanded={isOpen}
                >
                  <span className="col-span-2 md:col-span-1 font-serif italic text-accent text-xl">
                    {step.n}
                  </span>
                  <span className="col-span-8 md:col-span-9 font-serif text-3xl md:text-4xl text-primary leading-tight">
                    {step.title}
                  </span>
                  <span className="col-span-2 text-right text-accent text-2xl leading-none">
                    {isOpen ? "–" : "+"}
                  </span>
                  {isOpen && (
                    <div className="col-span-12 md:col-span-9 md:col-start-2 mt-4">
                      <p className="text-lg leading-relaxed text-muted-foreground">{step.body}</p>
                    </div>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <section className="border-t border-border py-20">
        <div className="container-editorial flex flex-wrap gap-4 items-center justify-between">
          <p className="font-serif italic text-xl text-primary/80 max-w-lg">
            See this in a real project, or start a conversation about applying it to yours.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/work"
              className="inline-flex items-center gap-3 border border-primary px-5 py-3 text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              See it in practice →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
            >
              Let's build something →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
