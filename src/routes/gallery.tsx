import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import destDubai from "@/assets/dest-dubai.jpg";
import destMauritius from "@/assets/dest-mauritius.jpg";
import destZanzibar from "@/assets/dest-zanzibar.jpg";
import destCapetown from "@/assets/dest-capetown.jpg";
import destSafari from "@/assets/dest-safari.jpg";
import heroDubai from "@/assets/hero-dubai.jpg";
import corporate from "@/assets/corporate.jpg";
import religious from "@/assets/religious.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Travel Gallery | Aura Travel & Tours" },
      { name: "description", content: "Visual journeys through Dubai, Mauritius, Zanzibar, Cape Town safaris and luxury resorts curated by Aura Travel & Tours." },
      { property: "og:title", content: "Travel Gallery — Aura Travel & Tours" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const images = [
  { src: heroDubai, caption: "Dubai Skyline", span: "lg:col-span-2 lg:row-span-2 aspect-square" },
  { src: destMauritius, caption: "Mauritius Beaches", span: "aspect-[4/5]" },
  { src: destZanzibar, caption: "Zanzibar Resorts", span: "aspect-[4/5]" },
  { src: destCapetown, caption: "Cape Town Scenery", span: "aspect-square lg:col-span-2" },
  { src: destSafari, caption: "South African Safaris", span: "aspect-[4/5]" },
  { src: destDubai, caption: "Luxury Hotels", span: "aspect-[4/5]" },
  { src: corporate, caption: "Business Travel", span: "aspect-square lg:col-span-2" },
  { src: religious, caption: "Holy Land Tours", span: "aspect-[4/5]" },
];

function Gallery() {
  return (
    <>
      <PageHero title="A world of inspiration." subtitle="Snapshots from the places we love to send our travellers." image={destMauritius} />
      <section className="py-24">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {images.map((i, idx) => (
              <figure key={idx} className={`relative overflow-hidden rounded-2xl group ${i.span}`}>
                <img src={i.src} alt={i.caption} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <figcaption className="absolute bottom-4 left-4 text-white font-display text-lg opacity-0 group-hover:opacity-100 transition-opacity">{i.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
