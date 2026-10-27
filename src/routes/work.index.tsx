import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { allTags, projects } from "@/data/portfolio";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "The Work — Akancha Sharma" },
      {
        name: "description",
        content:
          "Sixteen projects across AI in business, brand, research, people, product, and venture design. Featured pieces first.",
      },
      { property: "og:title", content: "The Work — Akancha Sharma" },
      { property: "og:description", content: "Sixteen projects, curated in editorial order." },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(
    () => (tag ? projects.filter((p) => p.tags.includes(tag)) : projects),
    [tag],
  );

  return (
    <PageShell>
      <PageHeader
        eyebrow="The Work"
        title="Sixteen projects, curated."
        intro="Not chronological. Not alphabetical. The lead piece has the clearest point of view — the rest follow in editorial order."
      />

      <div className="container-editorial mb-12">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mr-2">
            Filter
          </span>
          <button
            onClick={() => setTag(null)}
            className={`text-xs uppercase tracking-[0.14em] px-3 py-1.5 border transition-colors ${
              tag === null
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            All
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`text-xs uppercase tracking-[0.14em] px-3 py-1.5 border transition-colors ${
                tag === t
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="container-editorial pb-24 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 6) * 60} className="h-full">
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group flex h-full flex-col border border-border p-4 md:p-6 hover:border-accent hover:bg-blush/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-serif italic text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[9px] uppercase tracking-[0.16em] px-1.5 py-0.5 border border-border text-muted-foreground shrink-0">
                  {p.tags[0]}
                </span>
              </div>

              <h3 className="mt-3 font-serif text-xl md:text-2xl text-primary group-hover:text-accent transition-colors leading-tight">
                {p.title}
              </h3>
              {p.subtitle && (
                <div className="mt-1 text-[11px] text-muted-foreground uppercase tracking-[0.12em]">
                  {p.subtitle}
                </div>
              )}

              <p className="mt-4 text-sm leading-relaxed text-primary/90">{p.cardChallenge}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <span className="text-accent">↳</span> {p.cardContribution}
              </p>

              <div className="mt-auto pt-5 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary group-hover:text-accent transition-colors">
                View case study
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
