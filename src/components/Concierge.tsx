import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import {
  exploreLinks,
  questions,
  roleShortcuts,
  type Question,
  type QuestionLink,
  type RoleShortcut,
} from "@/data/guide-data";

type StaticRoute =
  "/" | "/work" | "/becoming" | "/contact" | "/field-notes" | "/how-i-think" | "/linkedin";

type PanelView =
  | { kind: "root" }
  | { kind: "role-menu" }
  | { kind: "role-detail"; shortcut: RoleShortcut }
  | { kind: "question-menu" }
  | { kind: "answer"; question: Question };

const cardButtonClass =
  "w-full text-left border border-border p-4 hover:border-accent hover:bg-blush/30 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export function Concierge() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [view, setView] = useState<PanelView>({ kind: "root" });

  const navigate = useNavigate();
  const { location } = useRouterState();

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const lastActivatedRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const panelMounted = open || closing;

  const closePanel = useCallback(() => {
    setOpen(false);
    setClosing(true);
    requestAnimationFrame(() => triggerRef.current?.focus());
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setClosing(false);
      setView({ kind: "root" });
    }, 200);
  }, []);

  // open-concierge event
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-concierge", onOpen);
    return () => window.removeEventListener("open-concierge", onOpen);
  }, []);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closePanel();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closePanel]);

  // Auto-focus close button when panel opens
  useEffect(() => {
    if (!open) return;
    // Two rAFs ensure the panel is painted before stealing focus
    requestAnimationFrame(() => requestAnimationFrame(() => closeButtonRef.current?.focus()));
  }, [open]);

  // Focus Back button when a non-root view appears
  useEffect(() => {
    if (view.kind === "root") return;
    requestAnimationFrame(() => requestAnimationFrame(() => backButtonRef.current?.focus()));
  }, [view.kind]);

  // Focus trap — re-runs only when open state or view structure changes
  useEffect(() => {
    if (!open || !panelRef.current) return;
    const panel = panelRef.current;
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          "button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
        ),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [open, view.kind]);

  function handleBack() {
    setView((v) => {
      switch (v.kind) {
        case "role-detail":
          return { kind: "role-menu" };
        case "role-menu":
          return { kind: "root" };
        case "answer":
          return { kind: "question-menu" };
        case "question-menu":
          return { kind: "root" };
        default:
          return { kind: "root" };
      }
    });
    requestAnimationFrame(() => lastActivatedRef.current?.focus());
  }

  function handleNavigate(href: string) {
    const isFile = /\.[a-z0-9]+$/i.test(href);
    const isExternal = href.startsWith("http") || isFile;

    if (isExternal) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    const currentPath = location.pathname.replace(/\/$/, "") || "/";
    const targetPath = href.replace(/\/$/, "") || "/";
    closePanel();
    if (currentPath === targetPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const workSlugMatch = /^\/work\/([^/]+)$/.exec(href);
    if (workSlugMatch) {
      void navigate({ to: "/work/$slug", params: { slug: workSlugMatch[1] } });
      return;
    }
    void navigate({ to: href as StaticRoute });
  }

  const showBack = view.kind !== "root";

  const headerCopy = useMemo(() => {
    switch (view.kind) {
      case "role-menu":
        return "Browse by role";
      case "role-detail":
        return view.shortcut.label;
      case "question-menu":
        return "Find answers to your questions";
      case "answer":
        return view.question.question;
      default:
        return "Portfolio Guide";
    }
  }, [view]);

  return (
    <>
      {/* Floating trigger */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => (open ? closePanel() : setOpen(true))}
        aria-label={open ? "Close portfolio guide" : "Open portfolio guide"}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="fixed z-40 bottom-5 right-5 md:bottom-8 md:right-8 group focus-visible:outline-none"
      >
        <span className="flex items-center gap-2 bg-primary text-primary-foreground pl-3 pr-4 py-3 shadow-lg hover:bg-accent transition-colors duration-200 group-focus-visible:ring-2 group-focus-visible:ring-accent group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-primary-foreground font-serif italic text-sm transition-colors duration-200 group-hover:bg-primary">
            A
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em]">
            {open ? "Close" : "Ask AI Akancha"}
          </span>
        </span>
      </button>

      {/* Panel */}
      {panelMounted && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio Guide"
          style={{
            animation: closing
              ? "concierge-out 200ms ease-in forwards"
              : "concierge-in 200ms ease-out",
          }}
          className="fixed z-40 bottom-24 right-5 md:right-8 w-[min(92vw,380px)] bg-background border border-border shadow-2xl flex flex-col max-h-[min(70vh,560px)]"
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-border flex items-center justify-between shrink-0 gap-3">
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.24em] text-accent">
                Portfolio Guide
              </div>
              <div className="font-serif text-lg text-primary truncate">{headerCopy}</div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {showBack && (
                <button
                  ref={backButtonRef}
                  type="button"
                  onClick={handleBack}
                  className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-accent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent px-1 py-0.5"
                >
                  ← Back
                </button>
              )}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closePanel}
                aria-label="Close portfolio guide"
                className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-accent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent px-1 py-0.5"
              >
                Close
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div
            key={
              view.kind +
              (view.kind === "role-detail" ? view.shortcut.id : "") +
              (view.kind === "answer" ? view.question.id : "")
            }
            style={{ animation: "card-in 150ms ease-out" }}
            className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4 text-sm"
          >
            {view.kind === "root" && (
              <>
                <p className="text-primary/90 leading-relaxed">
                  Hi, I'm Akancha's portfolio guide. How would you like to explore Akancha's
                  portfolio?
                </p>
                <div className="space-y-3">
                  <button
                    type="button"
                    className={cardButtonClass}
                    onClick={(e) => {
                      lastActivatedRef.current = e.currentTarget;
                      setView({ kind: "role-menu" });
                    }}
                  >
                    <div className="font-serif text-lg text-primary">Browse by role</div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Recruiter, hiring manager, or just exploring — I'll point you to what matters.
                    </p>
                  </button>
                  <button
                    type="button"
                    className={cardButtonClass}
                    onClick={(e) => {
                      lastActivatedRef.current = e.currentTarget;
                      setView({ kind: "question-menu" });
                    }}
                  >
                    <div className="font-serif text-lg text-primary">
                      Find answers to your questions
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Ask about strategy, AI, marketing, research or experience.
                    </p>
                  </button>
                </div>
              </>
            )}

            {view.kind === "role-menu" && (
              <div className="space-y-3">
                {roleShortcuts.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className={cardButtonClass}
                    onClick={(e) => {
                      lastActivatedRef.current = e.currentTarget;
                      setView({ kind: "role-detail", shortcut: r });
                    }}
                  >
                    <div className="font-serif text-lg text-primary">{r.label}</div>
                  </button>
                ))}
              </div>
            )}

            {view.kind === "role-detail" && (
              <div className="space-y-4">
                <p className="text-primary/80 leading-relaxed">{view.shortcut.intro}</p>
                <NavLinkList links={view.shortcut.steps} onNavigate={handleNavigate} ordered />
              </div>
            )}

            {view.kind === "question-menu" && (
              <>
                <div className="space-y-2">
                  {questions.map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={(e) => {
                        lastActivatedRef.current = e.currentTarget;
                        setView({ kind: "answer", question: q });
                      }}
                      className="w-full text-left text-[11px] uppercase tracking-[0.14em] border border-border px-3 py-2.5 text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {q.question}
                    </button>
                  ))}
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2 pt-2">
                    Explore more
                  </div>
                  <NavLinkList links={exploreLinks} onNavigate={handleNavigate} />
                </div>
              </>
            )}

            {view.kind === "answer" && (
              <div className="space-y-4">
                {view.question.answer.split("\n\n").map((para, i) => (
                  <p key={i} className="text-primary/90 leading-relaxed">
                    {para}
                  </p>
                ))}
                <NavLinkList links={view.question.links} onNavigate={handleNavigate} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function NavLinkList({
  links,
  onNavigate,
  ordered = false,
}: {
  links: QuestionLink[];
  onNavigate: (href: string) => void;
  ordered?: boolean;
}) {
  return (
    <ul className="space-y-2">
      {links.map((link, i) => (
        <li key={link.href} className="flex items-center gap-2">
          {ordered && <span className="font-serif italic text-accent shrink-0 w-4">{i + 1}.</span>}
          <button
            type="button"
            onClick={() => onNavigate(link.href)}
            className="text-[11px] uppercase tracking-[0.14em] text-primary hover:text-accent transition-colors duration-150 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {link.label} →
          </button>
        </li>
      ))}
    </ul>
  );
}
