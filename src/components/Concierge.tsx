import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import {
  categories,
  questions,
  roleShortcuts,
  type Category,
  type Question,
  type RoleShortcut,
} from "@/data/guide-data";

type StaticRoute =
  | "/"
  | "/work"
  | "/becoming"
  | "/contact"
  | "/field-notes"
  | "/how-i-think"
  | "/linkedin";

type PanelView =
  | { kind: "default" }
  | { kind: "tour"; shortcut: RoleShortcut }
  | { kind: "answer"; question: Question };

export function Concierge() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("about");
  const [view, setView] = useState<PanelView>({ kind: "default" });

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
      setActiveCategory("about");
      setView({ kind: "default" });
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
    requestAnimationFrame(() =>
      requestAnimationFrame(() => closeButtonRef.current?.focus())
    );
  }, [open]);

  // Focus Back button when a card view appears
  useEffect(() => {
    if (view.kind === "default") return;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => backButtonRef.current?.focus())
    );
  }, [view.kind]);

  // Focus trap — re-runs only when open state or view structure changes
  useEffect(() => {
    if (!open || !panelRef.current) return;
    const panel = panelRef.current;
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          "button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        )
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

  function handleShortcut(shortcut: RoleShortcut) {
    setView((v) =>
      v.kind === "tour" && v.shortcut.id === shortcut.id
        ? { kind: "default" }
        : { kind: "tour", shortcut }
    );
  }

  function handleCategory(id: Category) {
    setActiveCategory(id);
  }

  function handleQuestion(q: Question) {
    setView({ kind: "answer", question: q });
  }

  function handleBack() {
    setView({ kind: "default" });
    requestAnimationFrame(() => lastActivatedRef.current?.focus());
  }

  function handleNavigate(href: string) {
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

  const filteredQuestions = useMemo(
    () => questions.filter((q) => q.category === activeCategory),
    [activeCategory]
  );

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
          <div className="px-4 py-3 border-b border-border flex items-center justify-between shrink-0">
            <div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-accent">
                Portfolio Guide
              </div>
              <div className="font-serif text-lg text-primary">Ask AI Akancha</div>
            </div>
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

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-5 text-sm">
            {/* Welcome */}
            <p className="text-primary/90 leading-relaxed">
              Hi, I'm Akancha. If you're here to explore my work, I can help you find the
              projects, experience, or research most relevant to you.
            </p>

            {/* Role Shortcuts */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                Role Shortcuts
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Role shortcuts">
                {roleShortcuts.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={(e) => {
                      lastActivatedRef.current = e.currentTarget;
                      handleShortcut(r);
                    }}
                    aria-pressed={view.kind === "tour" && view.shortcut.id === r.id}
                    className={`text-[11px] uppercase tracking-[0.14em] border px-2.5 py-1.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      view.kind === "tour" && view.shortcut.id === r.id
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tour card */}
            {view.kind === "tour" && (
              <div
                key={view.shortcut.id}
                style={{ animation: "card-in 150ms ease-out" }}
                className="border border-border p-4 space-y-4"
              >
                <button
                  ref={backButtonRef}
                  type="button"
                  onClick={handleBack}
                  className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-accent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  ← Back
                </button>
                <div className="text-[10px] uppercase tracking-[0.22em] text-accent">
                  {view.shortcut.label}
                </div>
                <p className="text-primary/80 leading-relaxed">{view.shortcut.intro}</p>
                <ol className="space-y-2">
                  {view.shortcut.steps.map((step, i) => (
                    <li key={step.href} className="flex items-center gap-2">
                      <span className="font-serif italic text-accent shrink-0 w-4">
                        {i + 1}.
                      </span>
                      <button
                        type="button"
                        onClick={() => handleNavigate(step.href)}
                        className="text-[11px] uppercase tracking-[0.14em] text-primary hover:text-accent transition-colors duration-150 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {step.label} →
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Answer card */}
            {view.kind === "answer" && (
              <div
                key={view.question.id}
                style={{ animation: "card-in 150ms ease-out" }}
                className="border border-border p-4 space-y-4"
              >
                <button
                  ref={backButtonRef}
                  type="button"
                  onClick={handleBack}
                  className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-accent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  ← Back
                </button>
                <div className="text-[10px] uppercase tracking-[0.22em] text-accent">
                  {view.question.question}
                </div>
                <p className="text-primary/90 leading-relaxed">{view.question.answer}</p>
                <button
                  type="button"
                  onClick={() => handleNavigate(view.question.linkHref)}
                  className="bg-primary text-primary-foreground px-4 py-2.5 text-[11px] uppercase tracking-[0.16em] hover:bg-accent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {view.question.linkLabel}
                </button>
              </div>
            )}

            {/* Category tabs + question list — visible in default and tour views */}
            {view.kind !== "answer" && (
              <>
                <div
                  role="tablist"
                  aria-label="Question categories"
                  className="flex border-b border-border"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={activeCategory === cat.id}
                      aria-controls="concierge-tabpanel"
                      onClick={() => handleCategory(cat.id)}
                      className={`text-[11px] uppercase tracking-[0.14em] px-3 py-2 border-b-2 -mb-px transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        activeCategory === cat.id
                          ? "border-accent text-accent"
                          : "border-transparent text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div id="concierge-tabpanel" role="tabpanel" className="space-y-2">
                  {filteredQuestions.map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={(e) => {
                        lastActivatedRef.current = e.currentTarget;
                        handleQuestion(q);
                      }}
                      className="w-full text-left text-[11px] uppercase tracking-[0.14em] border border-border px-3 py-2.5 text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {q.question}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
