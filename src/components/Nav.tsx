import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const items = [
  { to: "/work", label: "The Work" },
  { to: "/field-notes", label: "Experience" },
  { to: "/becoming", label: "Becoming" },
  { to: "/how-i-think", label: "How I Think" },
  { to: "/linkedin", label: "LinkedIn" },
  { to: "/contact", label: "Get In Touch" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-[color-mix(in_oklab,var(--ivory)_85%,transparent)] border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-4">
        <Link to="/" className="font-serif text-xl tracking-tight text-primary">
          Akancha<span className="text-accent">.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="text-[13px] uppercase tracking-[0.14em] text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              activeProps={{ className: "text-accent border-b border-accent pb-px" }}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <div className="w-6 h-[2px] bg-current mb-1.5" />
          <div className="w-6 h-[2px] bg-current mb-1.5" />
          <div className="w-4 h-[2px] bg-current" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-primary"
                activeProps={{ className: "text-accent" }}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
