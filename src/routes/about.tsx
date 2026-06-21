import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryDialog } from "@/components/site/EnquiryDialog";
import heroDubai from "@/assets/hero-dubai.jpg";
import destCapetown from "@/assets/dest-capetown.jpg";
import { Award, Users, Globe, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aura Travel & Tours | Trusted South African Travel Agency" },
      {
        name: "description",
        content:
          "Aura Travel & Tours is a Johannesburg-based travel agency helping South Africans explore local and international destinations with confidence.",
      },
      { property: "og:title", content: "About Aura Travel & Tours" },
      {
        property: "og:description",
        content: "A trusted South African travel partner since day one.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const stats = [
  { icon: Users, n: "1,200+", l: "Happy travellers" },
  { icon: Globe, n: "45+", l: "Destinations" },
  { icon: Award, n: "10+ yrs", l: "Industry experience" },
  { icon: Heart, n: "98%", l: "Repeat clients" },
];

function About() {
  return (
    <>
      <PageHero
        title="Crafting journeys, building memories."
        subtitle="A Johannesburg travel house dedicated to seamless, soulful travel."
        image={heroDubai}
      />
      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Our Story</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
              A trusted South African travel partner.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Aura Travel & Tours was founded in Johannesburg with a single mission, to make
                exceptional travel accessible to every South African. From honeymooners and families
                to corporate teams and religious groups, we curate experiences that reflect each
                client's unique story.
              </p>
              <p>
                Our specialists are seasoned travellers themselves. We've walked Dubai's souks,
                sailed Zanzibar's coast, hiked Table Mountain at sunrise and tracked the Big Five at
                dawn. That first-hand knowledge becomes your unfair advantage on every trip we plan.
              </p>
              <p>
                Whether you need a quick weekend getaway, a complex multi-country itinerary or full
                corporate travel management, we handle the details so you can focus on the
                experience.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={destCapetown}
              alt="Cape Town"
              loading="lazy"
              className="rounded-3xl shadow-luxe aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[var(--gold)] p-6 shadow-luxe max-w-[220px]">
              <p className="font-display text-3xl font-bold text-[var(--navy-deep)]">Since 2014</p>
              <p className="text-sm text-[var(--navy-deep)]/80 mt-1">Curating world-class travel</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--navy-deep)] text-white">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, n, l }) => (
            <div key={l} className="text-center">
              <Icon className="h-8 w-8 text-[var(--gold)] mx-auto" />
              <p className="mt-4 font-display text-4xl md:text-5xl font-semibold">{n}</p>
              <p className="mt-1 text-sm text-white/70">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-x text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Let's plan your next chapter.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us where you'd love to go, we'll handle everything else.
          </p>
          <EnquiryDialog
            title="Request a Quote"
            trigger={
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)]">
                Request a Quote
              </button>
            }
          />
        </div>
      </section>
    </>
  );
}
