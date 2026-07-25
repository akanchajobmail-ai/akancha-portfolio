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
          "Fourteen projects across AI in business, brand, research, people, and venture design. Featured pieces first.",
      },
      { property: "og:title", content: "The Work — Akancha Sharma" },
      { property: "og:description", content: "Fourteen projects, curated in editorial order." },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(
    () => (tag ? projects.filter((p) => p.tags.includes(tag)) : projects),
    [tag]
  );

  return (
    <PageShell>
      <PageHeader
        eyebrow="The Work"
        title="Fourteen projects, curated."
        intro="Not chronological. Not alphabetical. The lead piece has the clearest point of view — the rest follow in editorial order."
      />

      <div className="container-editorial mb-12">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mr-2">Filter</span>
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

      <div className="container-editorial pb-24 space-y-10">
        {filtered.map((p, i) => (
          <Reveal key={p.slug}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group grid md:grid-cols-12 gap-6 md:gap-10 py-8 border-t border-border hover:border-accent transition-colors"
            >
              <div className="md:col-span-1 font-serif italic text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-7">
                <h3 className="font-serif text-3xl md:text-4xl text-primary group-hover:text-accent transition-colors leading-tight">
                  {p.title}
                </h3>
                {p.subtitle && (
                  <div className="mt-1 text-sm text-muted-foreground uppercase tracking-[0.14em]">
                    {p.subtitle}
                  </div>
                )}
                <p className="mt-4 font-serif italic text-lg text-primary/80">{p.deck}</p>
              </div>
              <div className="md:col-span-3 md:col-start-10 flex flex-wrap gap-2 items-start">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-[0.16em] px-2 py-1 border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="md:col-span-1 self-center text-primary/50 group-hover:text-accent group-hover:translate-x-1 transition-all">
                →
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
