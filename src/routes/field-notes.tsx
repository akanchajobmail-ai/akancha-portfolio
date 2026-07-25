import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { SideNote } from "@/components/SideNote";
import { roles } from "@/data/portfolio";

export const Route = createFileRoute("/field-notes")({
  head: () => ({
    meta: [
      { title: "Experience — Akancha Sharma" },
      { name: "description", content: "Roles told as dispatches: challenge, approach, outcome, what I took away." },
      { property: "og:title", content: "Experience — Akancha Sharma" },
      { property: "og:description", content: "Dispatches from real environments." },
    ],
  }),
  component: Experience,
});

const community = [
  {
    role: "Elected Course Representative",
    org: "MSc Management & AI, University of Southampton",
    note: "Voice for the cohort in programme decisions — the person who has to actually raise the awkward question.",
  },
  {
    role: "Social Media Manager & Tutor",
    org: "Instilt Educate",
    note: "Content and tutoring for an educational NGO — turning learning material into something students actually wanted to open.",
  },
  {
    role: "Public Relations Officer",
    org: "Rotaract Club, Inspiria Knowledge Campus",
    note: "Ran the club's external voice — press, partners, and the Pitch Fest win at UDDHAV.",
  },
  {
    role: "Academic Co-Chair",
    org: "Inspiria Knowledge Campus",
    note: "Peer-support role — helped classmates navigate coursework and represented the student side to faculty.",
  },
  {
    role: "Community Welfare Volunteer",
    org: "Rotaract Club",
    note: "On-the-ground community drives — the kind of work that resets what you think 'a busy week' means.",
  },
  {
    role: "Chief Managing Officer",
    org: "Model United Nations",
    note: "Logistics, registration, and keeping the machine running while everyone else was debating.",
  },
];

function Experience() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Experience"
        title="Dispatches from real environments."
        intro="Not a role history — short reports from places where the work actually happens. The floor of a restaurant, an exhibition hall, a two-day wedding."
      />

      <section className="container-editorial pb-8">
        <Reveal>
          <blockquote className="max-w-3xl font-serif italic text-2xl md:text-3xl text-primary leading-snug border-l-2 border-accent pl-6">
            "The people who taught me the most about business rarely called it that."
          </blockquote>
        </Reveal>
      </section>

      <div className="container-editorial pb-16 space-y-12">
        {roles.map((r, i) => (
          <Reveal key={r.title + i}>
            <article className="grid md:grid-cols-12 gap-6 md:gap-10 pt-10 border-t border-border">
              <div className="md:col-span-3">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.dates}</div>
                <div className="mt-2 font-serif text-xl text-primary leading-tight">{r.org}</div>
              </div>
              <div className="md:col-span-8 md:col-start-5">
                <h3 className="font-serif text-2xl md:text-3xl text-primary">{r.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{r.body}</p>
                {i === 0 && (
                  <SideNote label="Currently reading">
                    Amy Edmondson, <em>The Fearless Organization</em> — because most operational
                    problems are really about who felt safe enough to raise them early.
                  </SideNote>
                )}
                {i === 2 && (
                  <SideNote label="On my mind">
                    How much of "cold outreach" fatigue is really a scripting problem in disguise.
                  </SideNote>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* COMMUNITY & LEADERSHIP */}
      <section className="border-t border-border py-20">
        <div className="container-editorial">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-8 mb-10">
              <div className="md:col-span-4">
                <div className="text-xs uppercase tracking-[0.24em] text-accent mb-4">
                  Community & Leadership
                </div>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                  The unpaid work that shaped the paid work.
                </h2>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p className="text-muted-foreground">
                  Volunteering, elected roles, and club leadership — a lightweight ledger of the
                  places where I first learned to run things, represent people, and be useful when
                  nobody was going to grade me on it.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            {community.map((c, i) => (
              <Reveal key={c.role} delay={i * 60}>
                <div className="border border-border p-5 hover:border-accent hover:bg-blush/40 transition-colors h-full">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                    {c.org}
                  </div>
                  <div className="font-serif text-xl text-primary">{c.role}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
