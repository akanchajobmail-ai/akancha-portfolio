import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { timeline } from "@/data/portfolio";
import imgSchool from "@/assets/school-years-siliguri.jpg";
import imgTeenQueue from "@/assets/teen-queue.jpeg";
import imgUniversity from "@/assets/university-inspiria.png";
import imgCaseQuest from "@/assets/case-quest.png";
import imgThailand from "@/assets/thailand-knowledge-tour.jpeg";
import imgSouthampton from "@/assets/southampton-msc.jpeg";
import imgTutoring from "@/assets/tutoring.jpeg";
import imgStudentAmbassador from "@/assets/student-ambassador-tours.jpeg";
import imgRacOfficer from "@/assets/rac-pr-officer.jpeg";

export const Route = createFileRoute("/becoming")({
  head: () => ({
    meta: [
      { title: "Becoming — Akancha Sharma" },
      { name: "description", content: "The chronological arc: how I got here, one entry at a time." },
      { property: "og:title", content: "Becoming — Akancha Sharma" },
      { property: "og:description", content: "The serialized arc." },
    ],
  }),
  component: Becoming,
});

function Becoming() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Becoming"
        title="The chronological arc."
        intro="Not the argument — the evidence trail. Situation, struggle, honest detail, forward hook. Twenty-three entries, told in the order they actually happened."
      />

      <div className="container-editorial pb-24">
        <ol className="relative border-l border-border pl-8 md:pl-12 space-y-10">
          {timeline.map((t, i) => (
            <Reveal key={i}>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[41px] md:-left-[53px] top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-background"
                />
                <div className="text-xs uppercase tracking-[0.2em] text-accent">{t.year}</div>
                <h3 className="mt-2 font-serif text-2xl text-primary leading-tight">{t.label}</h3>
                {t.detail && <p className="mt-2 text-muted-foreground">{t.detail}</p>}
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-16 border-t border-border pt-10">
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-6">Current Interests</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border p-5 hover:border-accent hover:bg-blush/30 transition-colors">
                <div className="font-serif text-xl text-primary mb-3">Learning & Building</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Right now, I'm reading <em>Building a StoryBrand</em> by Donald Miller to better understand how great businesses communicate their ideas. I'm also fascinated by AI, emerging startups, and how technology is reshaping business strategy and decision-making.
                </p>
              </div>
              <div className="border border-border p-5 hover:border-accent hover:bg-blush/30 transition-colors">
                <div className="font-serif text-xl text-primary mb-3">Creativity & Movement</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When I'm away from my laptop, you'll usually find me working on detailed embroidery projects, dancing to upbeat Bollywood music, or slowing down with restorative yoga. These moments help me recharge and think more creatively.
                </p>
              </div>
              <div className="border border-border p-5 hover:border-accent hover:bg-blush/30 transition-colors">
                <div className="font-serif text-xl text-primary mb-3">Exploration & Leisure</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I've challenged myself to visit one new UK city every month, exploring it on foot through long walks and local discoveries. Afterwards, I love unwinding with a great film or a TV series that keeps me thinking long after it ends.
                </p>
              </div>
              <div className="relative border border-border p-5 hover:border-accent hover:bg-blush/30 transition-colors">
                <div className="absolute top-3 right-3 text-[9px] uppercase tracking-[0.2em] bg-accent text-accent-foreground px-2 py-0.5">
                  Coming Soon
                </div>
                <div className="font-serif text-xl text-primary mb-3 pr-24">Upcoming Project</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  My current capstone research explores how an AI-enabled platform could support the standardisation of tea tasting and grading within tea trading businesses. Working with a real tea brokerage, I'm researching how AI can reduce subjectivity, preserve expert knowledge, and improve decision-making while keeping human expertise at the centre of the process.
                </p>
              </div>
            </div>
          </div>
        </Reveal>


        <Reveal>
          <div className="mt-24 border-t border-border pt-14">
            <div className="text-xs uppercase tracking-[0.24em] text-accent mb-4">Gallery</div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-2xl">
              Moments that shaped my journey.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              A few memories from the experiences that have shaped who I am today.
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: imgSchool, caption: "School years, Siliguri", objectPosition: "center" },
                { src: imgTeenQueue, caption: "Teen Queue Spotify", objectPosition: "center top" },
                { src: imgUniversity, caption: "Student at Inspiria", objectPosition: "center top" },
                { src: imgCaseQuest, caption: "Case Quest, Best Team Award", objectPosition: "center" },
                { src: imgThailand, caption: "Thailand knowledge tour", objectPosition: "center" },
                { src: imgSouthampton, caption: "Southampton, MSc", objectPosition: "center" },
                { src: imgTutoring, caption: "tutoring - Happy Teachers Day by my students", objectPosition: "center 30%" },
                { src: imgStudentAmbassador, caption: "Student Ambassador tours", objectPosition: "center" },
                { src: imgRacOfficer, caption: "RAC PR officer", objectPosition: "center 40%" },
              ].map((g, i) => (
                <figure
                  key={i}
                  className={`aspect-square relative bg-blush border border-border overflow-hidden group`}
                >
                  <img
                    src={g.src}
                    alt={g.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: g.objectPosition ?? "center" }}
                  />
                  <figcaption className="absolute bottom-0 inset-x-0 bg-background/85 backdrop-blur px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    {g.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-20 font-serif italic text-2xl text-primary/80 max-w-2xl">
            The next chapter is still being written — probably somewhere between a spreadsheet and a
            story, with AI doing the boring part.
          </p>
        </Reveal>
      </div>
    </PageShell>
  );
}
