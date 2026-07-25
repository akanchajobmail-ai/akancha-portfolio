import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero.mp4";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { thinking } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akancha Sharma — Where business meets artificial intelligence" },
      {
        name: "description",
        content:
          "I turn business problems into things people can actually use — with research, AI, and a fair amount of curiosity.",
      },
      { property: "og:title", content: "Akancha Sharma — Where business meets artificial intelligence" },
      {
        property: "og:description",
        content: "I turn business problems into things people can actually use.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [heroVideoAvailable, setHeroVideoAvailable] = useState(true);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  return (
    <PageShell>
      {/* HERO — stacked, video as centrepiece */}
      <section className="container-editorial pt-16 md:pt-24 pb-16">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.32em] text-accent mb-6">
            Portfolio
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-[7.5rem] leading-[0.98] text-primary max-w-5xl">
            Where business meets{" "}
            <em className="italic text-accent">artificial intelligence</em>.
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-primary/80 leading-relaxed">
            I turn business problems into things people can actually use — with research, AI,
            and a fair amount of curiosity.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-12 relative w-full overflow-hidden bg-blush border border-border">
            {heroVideoAvailable ? (
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[75vh] object-cover"
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onError={() => setHeroVideoAvailable(false)}
              />
            ) : (
              <div className="flex min-h-[28rem] items-center justify-center bg-gradient-to-br from-black/5 via-primary/10 to-accent/10 p-12 text-center">
                <div className="max-w-2xl">
                  <div className="text-xs uppercase tracking-[0.24em] text-accent mb-3">
                    Hero preview
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold text-primary">
                    Where business meets artificial intelligence.
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    The hero video is unavailable in this preview, but the homepage layout is still visible.
                  </p>
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={() => setMuted((v) => !v)}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="absolute bottom-4 right-4 bg-primary/85 text-primary-foreground backdrop-blur px-4 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors"
            >
              {muted ? "Unmute" : "Mute"} {muted ? "🔇" : "🔊"}
            </button>
          </div>
        </Reveal>

        <Reveal delay={440}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-3 bg-primary px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:bg-accent transition-colors"
            >
              See the work
              <span aria-hidden>→</span>
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-concierge"))}
              className="inline-flex items-center gap-3 border border-primary px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Ask AI Akancha
              <span aria-hidden>→</span>
            </button>
          </div>
        </Reveal>
      </section>

      {/* HOW I THINK — immediately after hero */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container-editorial">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
              <div className="md:col-span-7">
                <div className="text-xs uppercase tracking-[0.24em] text-accent mb-4">Method</div>
                <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
                  How I actually think.
                </h2>
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <p className="text-muted-foreground">
                  Eight steps, stated plainly. Not a framework I read in a book — the shape my
                  work keeps taking whether I plan it or not.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {thinking.map((s, i) => (
              <Reveal key={s.n} delay={i * 40}>
                <div className="grid grid-cols-12 gap-4 py-5 border-t border-border">
                  <div className="col-span-2 font-serif italic text-accent text-lg">{s.n}</div>
                  <div className="col-span-10">
                    <div className="font-serif text-2xl text-primary leading-tight">{s.title}</div>
                    <p className="mt-2 text-muted-foreground text-[15px]">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-16 grid md:grid-cols-12 gap-8 items-center border-t border-border pt-12">
              <p className="md:col-span-8 font-serif italic text-2xl md:text-3xl text-primary/85 leading-snug">
                I want to keep doing work that sits between a business problem and the people it
                actually affects — using research and AI to get there faster, but never skipping
                the part where you have to actually understand what you're looking at.
              </p>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to="/how-i-think"
                  className="inline-flex items-center gap-3 border border-primary px-5 py-3 text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  The full method →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSING TEASER — with a distinct quote (not repeated elsewhere) */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container-editorial text-center">
          <div className="text-xs uppercase tracking-[0.24em] text-accent mb-6">Next chapter</div>
          <p className="font-serif text-3xl md:text-5xl italic max-w-3xl mx-auto leading-tight">
            "A recommendation is only worth as much as the decision someone can actually make
            because of it."
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
            >
              Let's build something →
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-3 border border-primary px-6 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              All 14 projects →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
