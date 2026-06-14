import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { VisaEnquiryDialog } from "@/components/site/VisaEnquiryDialog";
import visa from "@/assets/visa.jpg";
import { FileCheck2, MessagesSquare, FolderCheck, ShieldPlus, Check } from "lucide-react";

export const Route = createFileRoute("/visa")({
  head: () => ({
    meta: [
      { title: "Visa Assistance Services South Africa | Aura Travel & Tours" },
      { name: "description", content: "Fast, expert visa assistance from South Africa — consultation, application support, documentation guidance and travel insurance." },
      { property: "og:title", content: "Visa Assistance — Aura Travel & Tours" },
      { property: "og:url", content: "/visa" },
    ],
    links: [{ rel: "canonical", href: "/visa" }],
  }),
  component: Visa,
});

const services = [
  { icon: MessagesSquare, t: "Visa Consultation", d: "Eligibility checks and the right visa route for your trip." },
  { icon: FileCheck2, t: "Application Support", d: "We complete the forms and manage submissions on your behalf." },
  { icon: FolderCheck, t: "Documentation Guidance", d: "Clear checklists so your application is right the first time." },
  { icon: ShieldPlus, t: "Travel Insurance", d: "Comprehensive policies tailored to your destination." },
];

function Visa() {
  return (
    <>
      <PageHero title="Visa assistance, simplified." subtitle="Expert guidance through every step of your visa application." image={visa} />
      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-secondary p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-[var(--navy-deep)]"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Visa Services</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">No more guesswork.</h2>
            <p className="mt-5 text-muted-foreground">Visa rules change constantly. Our specialists stay current on requirements for the UAE, Schengen, UK, US, China and dozens more — saving you time, stress and costly mistakes.</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {["Schengen visa", "UAE visa", "UK visitor visa", "US B1/B2 visa", "Schengen multiple entry", "Group visa coordination"].map((i) => (
                <li key={i} className="flex gap-2"><Check className="h-4 w-4 text-[var(--gold)] mt-0.5" />{i}</li>
              ))}
            </ul>
            <QuoteDialog trigger={
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--navy-deep)] px-7 py-3.5 text-sm font-semibold text-white">Start your visa application</button>
            } />
          </div>
        </div>
      </section>
    </>
  );
}
