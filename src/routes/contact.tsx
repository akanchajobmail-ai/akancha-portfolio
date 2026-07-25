import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { AccessRequestModal } from "@/components/AccessRequestModal";
import { sendShortNote } from "@/lib/send-short-note";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get In Touch — Akancha Sharma" },
      { name: "description", content: "Let's build something. Email, LinkedIn, or a short note." },
      { property: "og:title", content: "Get In Touch — Akancha Sharma" },
      { property: "og:description", content: "Email, LinkedIn, or a short note." },
    ],
  }),
  component: Contact,
});

type Access = { title: string; subtitle: string; resource: string } | null;

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [access, setAccess] = useState<Access>(null);
  const [noteSent, setNoteSent] = useState(false);
  const [noteSending, setNoteSending] = useState(false);
  const [noteError, setNoteError] = useState<string | null>(null);

  return (
    <PageShell>
      <PageHeader eyebrow="Get In Touch" title="Let's build something." />

      <section className="container-editorial pb-16">
        <Reveal>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Currently based in the UK, open to marketing, brand, and AI-focused roles. Happy to
            talk about a specific problem, or just to compare notes.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Email",
              value: "akancha.jobmail@gmail.com",
              href: "mailto:akancha.jobmail@gmail.com?subject=Portfolio%20Enquiry&body=Hi%20Akancha%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch.%0A%0A",
              note: "Best for anything specific.",
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/akanchasharma",
              href: "https://www.linkedin.com/in/akanchasharma",
              note: "Living archive of the work.",
            },
            {
              label: "WhatsApp",
              value: "Connect on WhatsApp",
              href: "https://api.whatsapp.com/send?phone=447424443929&text=Hi+Akancha%2C%0AGreetings+of+the+day%0AI+have+approached+you+on+whatsapp+please+let+me+know+a+good+time+to+connect%0ABest+regards%0A",
              note: "For a real conversation.",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group border border-border p-6 hover:border-accent hover:bg-blush/40 transition-colors block"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">{c.label}</div>
              <div className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
                {c.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{c.note}</div>
            </a>
          ))}
        </div>

        {/* Recruiter request cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[
            {
              key: "cv",
              label: "Request CV",
              title: "Request my latest CV",
              subtitle: "Sent as a PDF, usually within a working day.",
              blurb: "Short form — name, company, email. That's it.",
            },
            {
              key: "evidence",
              label: "Request Supporting Evidence",
              title: "Request supporting evidence",
              subtitle: "Project evidence, proof of work, presentations, reports.",
              blurb: "Say what you'd like to see and I'll send the relevant files.",
            },
          ].map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() =>
                setAccess({
                  title: c.title,
                  subtitle: c.subtitle,
                  resource: `contact:${c.key}`,
                })
              }
              className="text-left group border border-border p-6 hover:border-accent hover:bg-blush/40 transition-colors"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">For recruiters</div>
              <div className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
                {c.label}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
              <div className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-accent">
                Open request →
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={() => setShowForm((v) => !v)}
            className="text-sm uppercase tracking-[0.2em] link-underline text-accent"
          >
            {showForm ? "Hide form" : "Or send a short note →"}
          </button>

          {showForm && (
            noteSent ? (
              <div className="mt-8 max-w-xl space-y-3">
                <p className="font-serif text-xl text-primary">Note sent.</p>
                <p className="text-sm text-muted-foreground">
                  Thank you. I'll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => { setNoteSent(false); setShowForm(false); }}
                  className="text-xs uppercase tracking-[0.2em] text-accent link-underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                className="mt-8 max-w-xl grid gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  setNoteSending(true);
                  setNoteError(null);
                  try {
                    await sendShortNote({
                      data: {
                        name: (fd.get("name") as string) ?? "",
                        email: (fd.get("email") as string) ?? "",
                        message: (fd.get("message") as string) ?? "",
                        at: new Date().toISOString(),
                      },
                    });
                    setNoteSent(true);
                  } catch {
                    setNoteError("Something went wrong. Please try again or email me directly at akancha.jobmail@gmail.com.");
                  } finally {
                    setNoteSending(false);
                  }
                }}
              >
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="border border-border bg-background px-4 py-3 focus:outline-none focus:border-accent"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-border bg-background px-4 py-3 focus:outline-none focus:border-accent"
                />
                <textarea
                  required
                  name="message"
                  placeholder="A few lines — what you're working on, or what you'd want to talk about."
                  rows={5}
                  className="border border-border bg-background px-4 py-3 focus:outline-none focus:border-accent"
                />
                {noteError && (
                  <p className="text-sm text-destructive">{noteError}</p>
                )}
                <button
                  type="submit"
                  disabled={noteSending}
                  className="justify-self-start bg-primary text-primary-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {noteSending ? "Sending…" : "Send →"}
                </button>
              </form>
            )
          )}
        </div>
      </section>

      <AccessRequestModal
        open={access !== null}
        onClose={() => setAccess(null)}
        title={access?.title ?? ""}
        subtitle={access?.subtitle}
        resourceKey={access?.resource ?? ""}
      />
    </PageShell>
  );
}
