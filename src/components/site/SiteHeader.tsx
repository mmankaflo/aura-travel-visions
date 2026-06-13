import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] font-display text-base font-bold text-[var(--navy-deep)]">
            A
          </span>
          <span className={cn("font-display text-lg font-semibold tracking-tight truncate", scrolled ? "text-foreground" : "text-white drop-shadow")}>
            Aura <span className="text-gradient-gold">Travel</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--gold)]",
                scrolled ? "text-foreground/80" : "text-white/90"
              )}
              activeProps={{ className: "text-[var(--gold)]" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-4 py-2 text-sm font-semibold text-[var(--navy-deep)] shadow hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className={cn(
              "lg:hidden grid h-10 w-10 place-items-center rounded-full border",
              scrolled ? "border-border text-foreground" : "border-white/30 text-white"
            )}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg animate-float-up">
          <nav className="container-x flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/90 border-b border-border/40 last:border-0"
                activeProps={{ className: "text-[var(--gold)]" }}
              >
                {item.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-4 py-3 text-sm font-semibold text-[var(--navy-deep)]">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
