import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryDialog } from "@/components/site/EnquiryDialog";
import corporate from "@/assets/corporate.jpg";
import { Plane, Hotel, ClipboardList, Users2, TrendingDown, Check } from "lucide-react";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Travel Management South Africa | Aura Travel & Tours" },
      { name: "description", content: "End-to-end corporate travel management for South African businesses — flights, hotels, policy management, group travel and expense optimisation." },
      { property: "og:title", content: "Corporate Travel Management — Aura Travel & Tours" },
      { property: "og:url", content: "/corporate" },
    ],
    links: [{ rel: "canonical", href: "/corporate" }],
  }),
  component: Corporate,
});

const features = [
  { icon: Plane, t: "Flight Bookings", d: "Negotiated corporate fares across all major airlines." },
  { icon: Hotel, t: "Hotel Reservations", d: "Preferred-rate access at trusted business hotels worldwide." },
  { icon: ClipboardList, t: "Travel Policy Management", d: "Custom policies that balance comfort with cost control." },
  { icon: Users2, t: "Group Travel Coordination", d: "Seamless logistics for conferences, incentives and team trips." },
  { icon: TrendingDown, t: "Expense Optimisation", d: "Detailed reporting and savings analysis on every trip." },
];

function Corporate() {
  return (
    <>
      <PageHero title="Corporate travel, done right." subtitle="Reliable, cost-effective business travel management for South African companies." image={corporate} />
      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">What we manage</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">A dedicated travel desk for your business.</h2>
            <p className="mt-5 text-muted-foreground">From single executive flights to multi-country team rollouts, Aura's corporate desk handles every detail with discretion and speed — so your people focus on the meeting, not the logistics.</p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Dedicated account manager", "24/7 emergency support", "Online booking portal", "Monthly expense reports", "Loyalty programme integration"].map((i) => (
                <li key={i} className="flex gap-3"><Check className="h-5 w-5 text-[var(--gold)] mt-0.5 shrink-0" /><span>{i}</span></li>
              ))}
            </ul>
            <EnquiryDialog title="Request a Corporate Proposal" trigger={
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)]">Request a Corporate Proposal</button>
            } />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border p-6 hover:border-[var(--gold)]/40 hover:shadow-card transition-all">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--navy-deep)] text-[var(--gold)]"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
