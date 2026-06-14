import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-[var(--navy-deep)] text-white/80">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Aura Travel & Tours" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="font-display text-lg font-semibold text-white">Aura Travel &amp; Tours</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            A trusted South African travel partner crafting luxury, corporate and spiritual journey journeys worldwide.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-[var(--gold)] hover:text-[var(--gold)]"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-[var(--gold)] hover:text-[var(--gold)]"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-[var(--gold)]">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[var(--gold)]" /> {SITE.address}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-[var(--gold)]" /> <a href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-[var(--gold)]" /> <a href={SITE.emailHref}>{SITE.email}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">Travel Inspiration</h4>
          <p className="mt-4 text-sm">Subscribe for exclusive deals and curated journeys.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); if (!email) return; toast.success("Welcome aboard — check your inbox."); setEmail(""); }}
            className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5"
          >
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 min-w-0 bg-transparent px-4 py-2.5 text-sm placeholder:text-white/40 focus:outline-none"
            />
            <button type="submit" className="grid place-items-center bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-4 text-[var(--navy-deep)]">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Aura Travel & Tours. All rights reserved.</p>
          <p>Crafted with care in Johannesburg, South Africa.</p>
        </div>
      </div>
    </footer>
  );
}
