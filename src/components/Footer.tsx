import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-editorial py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl text-primary">Akancha Sharma</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Where business meets artificial intelligence. Currently based in the UK.
          </p>
        </div>

        <div className="text-sm">
          <div className="uppercase tracking-[0.14em] text-xs text-muted-foreground mb-3">Explore</div>
          <ul className="space-y-2">
            <li><Link to="/work" className="link-underline">The Work</Link></li>
            <li><Link to="/how-i-think" className="link-underline">How I Think</Link></li>
            <li><Link to="/becoming" className="link-underline">Becoming</Link></li>
            <li><Link to="/linkedin" className="link-underline">LinkedIn</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="uppercase tracking-[0.14em] text-xs text-muted-foreground mb-3">Elsewhere</div>
          <ul className="space-y-2">
            <li><Link to="/contact" className="link-underline">Get in touch</Link></li>
            <li>
              <a
                href="https://www.linkedin.com/in/akanchasharma"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                LinkedIn profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="rule" />
      <div className="container-editorial py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Akancha Sharma. All rights reserved.</span>
        <span className="font-serif italic">Where business meets artificial intelligence.</span>
      </div>
    </footer>
  );
}
