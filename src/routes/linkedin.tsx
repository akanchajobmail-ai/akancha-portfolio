import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import imgLinkedinQr from "@/assets/linkedin-qr.png";

export const Route = createFileRoute("/linkedin")({
  head: () => ({
    meta: [
      { title: "LinkedIn — Akancha Sharma" },
      {
        name: "description",
        content: "The living archive. Projects and experiences link directly to relevant LinkedIn posts.",
      },
      { property: "og:title", content: "LinkedIn — Akancha Sharma" },
      { property: "og:description", content: "The living archive of my work." },
    ],
  }),
  component: LinkedInPage,
});

const LINKEDIN_URL = "https://www.linkedin.com/in/akanchasharma";

const highlights = [
  {
    title: "From arranging Teachers' Day gifts… to receiving them",
    body: "Teaching showed me that leadership begins with patience, long before it begins with strategy.",
    href: "https://www.linkedin.com/posts/akanchasharma_teachersday-gratitude-teaching-activity-7373270824029626368-vgV1",
  },
  {
    title: "A month of learning beyond the classroom",
    body: "Inside an exhibition that taught me business development, event operations, and solving problems in real time.",
    href: "https://www.linkedin.com/posts/akanchasharma_internshipexperience-eventmanagement-businessdevelopment-activity-7345373861124653056-Fzeg",
  },
  {
    title: "Six semesters. One lifetime of lessons.",
    body: "Looking back at university through six moments that quietly shaped who I became.",
    href: "https://www.linkedin.com/posts/akanchasharma_semesterreflections-collegejourney-bbastories-activity-7356922896633532418-6DKh",
  },
  {
    title: "Maybe it was meant to be",
    body: "How one unexpected decision took me from Siliguri to the University of Southampton.",
    href: "https://www.linkedin.com/posts/akanchasharma_fromsiliguritosouthampton-studyabroadjourney-activity-7390353169576423424-a8fZ",
  },
];

function LinkedInPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Elsewhere"
        title="The living archive."
        intro="LinkedIn is where the work-in-progress lives. Projects on this site link out to specific posts when they're a better fit than duplicating everything twice."
      />

      <section className="container-editorial pb-16">
        <Reveal>
          <div className="border border-border p-8 md:p-12 bg-blush/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-accent mb-3">Profile</div>
              <div className="font-serif text-3xl md:text-4xl text-primary">Akancha Sharma</div>
              <p className="mt-2 text-muted-foreground">
                MSc Management & Artificial Intelligence · University of Southampton
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 shrink-0">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
              >
                Open on LinkedIn →
              </a>
              <div className="text-center">
                <img
                  src={imgLinkedinQr}
                  alt="Scan to open LinkedIn profile"
                  className="w-28 h-28 border border-border"
                />
                <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Scan to connect
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial pb-24">
        <div className="text-xs uppercase tracking-[0.24em] text-accent mb-6">Recent Notes</div>
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 80}>
              <a
                href={h.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border p-6 hover:border-accent hover:bg-blush/40 transition-colors block h-full"
              >
                <div className="font-serif text-2xl text-primary group-hover:text-accent transition-colors leading-tight">
                  {h.title}
                </div>
                <p className="mt-3 text-muted-foreground">{h.body}</p>
                <div className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground group-hover:text-accent">
                  Continue on LinkedIn →
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
