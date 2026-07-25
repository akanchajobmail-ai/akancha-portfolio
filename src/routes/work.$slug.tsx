import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { projectBySlug, projects, type Project } from "@/data/portfolio";

const projectPdfFileNameBySlug: Record<string, string> = {
  "daily-t": "daily-t.pdf",
  "honasa-consumer": "honasa-consumer.pdf",
  detrash: "detrash.pdf",
  mamaearth: "mamaearth.pdf",
  "what-employers-look-for": "what-employers-look-for.pdf",
  "calvin-klein-pvh": "calvin-klein-pvh.pdf",
  "velocity-inc": "velocity-inc.pdf",
  "career-advice": "career-advice.pdf",
  "ai-grading": "ai-grading.pdf",
  akancha: "akancha.pdf",
  boat: "boat.pdf",
  "toffee-inc": "toffee-inc.pdf",
  "anne-with-an-e": "anne-with-an-e.pdf",
  thailand: "thailand repot.pdf",
};

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const p = projectBySlug(params.slug);
    if (!p) throw notFound();
    return { project: p };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Akancha Sharma" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.project;
    const title = `${p.title} — Akancha Sharma`;
    return {
      meta: [
        { title },
        { name: "description", content: p.deck },
        { property: "og:title", content: title },
        { property: "og:description", content: p.deck },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <PageShell>
      <div className="container-editorial py-40 text-center">
        <div className="text-xs uppercase tracking-[0.24em] text-accent mb-4">Not found</div>
        <h1 className="font-serif text-4xl">That project doesn't exist.</h1>
        <Link to="/work" className="mt-8 inline-block link-underline text-accent">
          Back to The Work →
        </Link>
      </div>
    </PageShell>
  ),
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData() as { project: Project };

  const sections: { key: keyof Project; label: string; body: string }[] = [
    { key: "challenge", label: "The Challenge", body: p.challenge },
    { key: "research", label: "Research", body: p.research },
    { key: "insights", label: "Key Insights", body: p.insights },
    { key: "approach", label: "Approach", body: p.approach },
    { key: "ai", label: "AI Integration", body: p.ai },
    { key: "solution", label: "The Solution", body: p.solution },
  ];

  return (
    <PageShell>
      {/* Breadcrumbs */}
      <div className="container-editorial pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <Link to="/work" className="hover:text-accent">The Work</Link>
        <span className="mx-2">/</span>
        <span className="text-primary">{p.title}</span>
      </div>

      {/* Hero */}
      <header className="container-editorial pt-10 md:pt-16 pb-16 md:pb-24">
        <Reveal>
          {p.subtitle && (
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-6">{p.subtitle}</div>
          )}
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl">{p.title}</h1>
          <p className="mt-8 max-w-3xl font-serif italic text-2xl md:text-3xl text-primary/80 leading-snug">
            {p.deck}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase tracking-[0.16em] px-2 py-1 border border-border text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </header>

      {/* Overview + Outcome pinned first */}
      <section className="container-editorial pb-16 grid md:grid-cols-12 gap-10 border-t border-border pt-16">
        <div className="md:col-span-6">
          <div className="text-xs uppercase tracking-[0.24em] text-accent mb-4">Overview</div>
          <p className="text-lg leading-relaxed text-muted-foreground">{p.overview}</p>
        </div>
        <div className="md:col-span-5 md:col-start-8 md:border-l border-border md:pl-10">
          <div className="text-xs uppercase tracking-[0.24em] text-accent mb-4">Outcome</div>
          <p className="text-lg leading-relaxed text-primary">{p.outcome}</p>
        </div>
      </section>

      {/* Detail sections */}
      <section className="container-editorial pb-16">
        <div className="grid md:grid-cols-12 gap-y-14 gap-x-10">
          {sections.map((s) => (
            <Reveal key={s.key} className="md:col-span-10 md:col-start-2">
              <div className="grid md:grid-cols-4 gap-6 md:gap-10 py-8 border-t border-border">
                <div className="md:col-span-1">
                  <div className="text-xs uppercase tracking-[0.2em] text-accent">{s.label}</div>
                </div>
                <p className="md:col-span-3 text-lg leading-relaxed text-primary/90">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reflection */}
      <section className="border-y border-border bg-blush/40 py-20 md:py-28">
        <div className="container-editorial">
          <div className="text-xs uppercase tracking-[0.24em] text-accent mb-6 text-center">
            Reflection
          </div>
          <blockquote className="max-w-3xl mx-auto font-serif italic text-2xl md:text-3xl text-primary text-center leading-snug">
            "{p.reflection}"
          </blockquote>
        </div>
      </section>

      {/* Project files — access-gated */}
      <section className="container-editorial py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-4">Project Report</div>
            <p className="text-muted-foreground">
              Read the complete report submitted for this project, including the research,
              analysis, strategy, and final recommendations.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex justify-end">
            {(() => {
              const fileName = projectPdfFileNameBySlug[p.slug];
              const href = fileName ? `/pdfs/project%20pdfs/${encodeURIComponent(fileName)}` : null;

              if (!href) {
                return (
                  <button
                    type="button"
                    disabled
                    className="text-left border border-border p-4 min-w-[240px] opacity-50 cursor-not-allowed"
                    aria-disabled="true"
                  >
                    <div className="font-serif text-lg text-primary">View PDF</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Printable version →
                    </div>
                  </button>
                );
              }

              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-left border border-border p-4 hover:border-accent hover:bg-blush/40 transition-colors min-w-[240px]"
                >
                  <div className="font-serif text-lg text-primary">View PDF</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Printable version →
                  </div>
                </a>
              );
            })()}
          </div>
        </div>
      </section>


      {/* Related */}
      <section className="border-t border-border py-20">
        <div className="container-editorial">
          <div className="text-xs uppercase tracking-[0.24em] text-accent mb-8">Related Work</div>
          <div className="grid md:grid-cols-2 gap-6">
            {p.related.map((slug) => {
              const rel = projects.find((x) => x.slug === slug);
              if (!rel) return null;
              return (
                <Link
                  key={slug}
                  to="/work/$slug"
                  params={{ slug }}
                  className="group border border-border p-6 hover:border-accent hover:bg-blush/40 transition-colors"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    {rel.subtitle ?? rel.tags[0]}
                  </div>
                  <div className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
                    {rel.title}
                  </div>
                  <div className="mt-3 font-serif italic text-primary/70">{rel.deck}</div>
                </Link>
              );
            })}
          </div>

          <div className="mt-14 flex flex-wrap gap-4 justify-between items-center">
            <Link to="/work" className="text-xs uppercase tracking-[0.2em] link-underline">
              ← All projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
            >
              Talk about a project like this →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
