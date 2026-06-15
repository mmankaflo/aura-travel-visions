import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryDialog } from "@/components/site/EnquiryDialog";
import religious from "@/assets/religious.jpg";
import { Church, Users, MapPin, Check } from "lucide-react";

export const Route = createFileRoute("/religious")({
  head: () => ({
    meta: [
      { title: "Religious Tours & Holy Land Spiritual Journeys | Aura Travel & Tours" },
      { name: "description", content: "Christian Holy Land tours and group spiritual journey packages from South Africa with experienced faith-travel coordinators." },
      { property: "og:title", content: "Religious Tours, Aura Travel & Tours" },
      { property: "og:url", content: "/religious" },
    ],
    links: [{ rel: "canonical", href: "/religious" }],
  }),
  component: Religious,
});

const tours = [
  { icon: Church, t: "Christian Tours", d: "Journeys to Rome, the Vatican and significant Christian sites across Europe." },
  { icon: MapPin, t: "Holy Land Tours", d: "Walk where it all began, Jerusalem, Bethlehem, Galilee and Nazareth." },
  { icon: Users, t: "Group Spiritual Journeys", d: "Custom packages for church groups, congregations and ministries." },
];

function Religious() {
  return (
    <>
      <PageHero title="Spiritual journeys with purpose." subtitle="Faith-led travel curated with care for individuals and church groups." image={religious} />
      <section className="py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-6">
            {tours.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border p-8 text-center hover:shadow-card hover:border-[var(--gold)]/40 transition-all">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--navy-deep)] text-[var(--gold)]"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 font-display text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center rounded-3xl overflow-hidden bg-secondary">
            <img src={religious} alt="" loading="lazy" className="h-full w-full object-cover aspect-[4/3]" />
            <div className="p-8 lg:p-12">
              <h3 className="font-display text-3xl font-semibold">What's included</h3>
              <ul className="mt-6 space-y-3 text-sm">
                {["Spiritual guide & local pastor liaison", "Group flights & airport transfers", "4★ hotel accommodation", "Daily devotional itinerary", "Visa support included", "24/7 group coordinator"].map((i) => (
                  <li key={i} className="flex gap-3"><Check className="h-5 w-5 text-[var(--gold)] mt-0.5 shrink-0" /><span>{i}</span></li>
                ))}
              </ul>
              <EnquiryDialog title="Plan a Group Spiritual Journey" trigger={
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)]">Plan a Group Spiritual Journey</button>
              } />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
