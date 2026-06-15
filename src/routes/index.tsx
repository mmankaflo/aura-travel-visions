import { createFileRoute, Link } from "@tanstack/react-router";
import heroDubai from "@/assets/hero-dubai.jpg";
import destMauritius from "@/assets/dest-mauritius.jpg";
import destZanzibar from "@/assets/dest-zanzibar.jpg";
import destCapetown from "@/assets/dest-capetown.jpg";
import destSafari from "@/assets/dest-safari.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destUk from "@/assets/dest-uk.jpg";
import destCanada from "@/assets/dest-canada.jpg";
import destUsa from "@/assets/dest-usa.jpg";
import destAustralia from "@/assets/dest-australia.jpg";
// Activity images (per-country, real landmarks)
import actDubaiBurj from "@/assets/activities/dubai-burj.jpg";
import actDubaiDesert from "@/assets/activities/dubai-desert.jpg";
import actDubaiMarina from "@/assets/activities/dubai-marina.jpg";
import actDubaiSouk from "@/assets/activities/dubai-souk.jpg";
import actMuIle from "@/assets/activities/mauritius-ileauxcerfs.jpg";
import actMuBlackRiver from "@/assets/activities/mauritius-blackriver.jpg";
import actMuDolphins from "@/assets/activities/mauritius-dolphins.jpg";
import actMuLeMorne from "@/assets/activities/mauritius-lemorne.jpg";
import actZnStone from "@/assets/activities/zanzibar-stonetown.jpg";
import actZnNakupenda from "@/assets/activities/zanzibar-nakupenda.jpg";
import actZnSpice from "@/assets/activities/zanzibar-spice.jpg";
import actZnMnemba from "@/assets/activities/zanzibar-mnemba.jpg";
import actCtTable from "@/assets/activities/capetown-tablemtn.jpg";
import actCtCapePoint from "@/assets/activities/capetown-capepoint.jpg";
import actCtStellen from "@/assets/activities/capetown-stellenbosch.jpg";
import actCtVa from "@/assets/activities/capetown-vawaterfront.jpg";
import actSfBigFive from "@/assets/activities/safari-bigfive.jpg";
import actSfBushwalk from "@/assets/activities/safari-bushwalk.jpg";
import actSfBoma from "@/assets/activities/safari-boma.jpg";
import actSfPanorama from "@/assets/activities/safari-panorama.jpg";
import actUkLondon from "@/assets/activities/uk-london.jpg";
import actUkTower from "@/assets/activities/uk-tower.jpg";
import actUkCots from "@/assets/activities/uk-cotswolds.jpg";
import actUkEdin from "@/assets/activities/uk-edinburgh.jpg";
import actCaBanff from "@/assets/activities/canada-banff.jpg";
import actCaNiagara from "@/assets/activities/canada-niagara.jpg";
import actCaVan from "@/assets/activities/canada-vancouver.jpg";
import actCaWhales from "@/assets/activities/canada-whales.jpg";
import actUsNyc from "@/assets/activities/usa-nyc.jpg";
import actUsVegas from "@/assets/activities/usa-vegas.jpg";
import actUsOrlando from "@/assets/activities/usa-orlando.jpg";
import actUsCali from "@/assets/activities/usa-california.jpg";
import actAuSydney from "@/assets/activities/aus-sydney.jpg";
import actAuReef from "@/assets/activities/aus-reef.jpg";
import actAuUluru from "@/assets/activities/aus-uluru.jpg";
import actAuMelb from "@/assets/activities/aus-melbourne.jpg";
import {
  Plane, Globe2, Building2, FileCheck2, Church, Gem, GraduationCap, Compass,
  ShieldCheck, BadgeDollarSign, Headphones, Sparkles, Lock, Zap, ArrowRight, MessageCircle, Check, Star, CreditCard,
} from "lucide-react";
import { EnquiryDialog } from "@/components/site/EnquiryDialog";
import { PayDepositDialog } from "@/components/site/PayDepositDialog";
import { ExploreDialog, type ExploreActivity } from "@/components/site/ExploreDialog";
import { depositAmount } from "@/lib/payfast";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura Travel & Tours | Luxury Holiday Packages South Africa" },
      { name: "description", content: "Affordable luxury holiday packages from South Africa, Dubai, Mauritius, Zanzibar, Cape Town safaris, corporate travel, visa assistance and religious tours." },
      { property: "og:title", content: "Aura Travel & Tours, Explore the World with Confidence" },
      { property: "og:description", content: "Tailored local & international travel packages from Johannesburg." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "Aura Travel & Tours",
        address: { "@type": "PostalAddress", addressLocality: "Johannesburg", addressCountry: "ZA" },
        telephone: SITE.phone,
        email: SITE.email,
      }),
    }],
  }),
  component: Home,
});

const destinations = [
  { name: "Dubai", img: destDubai, blurb: "Burj Khalifa, luxury hotels & desert safaris.", tag: "From R9,999" },
  { name: "Mauritius", img: destMauritius, blurb: "Overwater villas, white sand & honeymoons.", tag: "From R12,999" },
  { name: "Zanzibar", img: destZanzibar, blurb: "Tropical beaches & Stone Town culture.", tag: "From R10,999" },
  { name: "Cape Town", img: destCapetown, blurb: "Table Mountain, V&A Waterfront & wine.", tag: "From R4,999" },
  { name: "SA Safari", img: destSafari, blurb: "Kruger, Garden Route & Big Five.", tag: "From R6,999" },
  { name: "United Kingdom", img: destUk, blurb: "London icons, royal heritage & countryside charm.", tag: "From R24,999" },
  { name: "Canada", img: destCanada, blurb: "Rocky Mountains, Banff lakes & Niagara Falls.", tag: "From R28,999" },
  { name: "United States", img: destUsa, blurb: "New York, Vegas, theme parks & national parks.", tag: "From R26,999" },
  { name: "Australia", img: destAustralia, blurb: "Sydney Harbour, Great Barrier Reef & outback.", tag: "From R32,999" },
];

const services = [
  { icon: Plane, title: "Flights & Hotels", desc: "Best fares with trusted airlines and 4–5★ stays." },
  { icon: Globe2, title: "Holiday Packages", desc: "Local & international tailored escapes." },
  { icon: Building2, title: "Corporate Travel", desc: "End-to-end business travel management." },
  { icon: FileCheck2, title: "Visa Assistance", desc: "Fast, expert visa application support." },
  { icon: Church, title: "Religious Tours", desc: "Holy Land & spiritual journey group packages." },
  { icon: Gem, title: "Luxury Travel", desc: "Curated 5★ experiences worldwide." },
  { icon: GraduationCap, title: "Student Travel", desc: "Group tours & study abroad logistics." },
  { icon: Compass, title: "Safari Experiences", desc: "Iconic African wildlife adventures." },
];

const packageActivities: Record<string, ExploreActivity[]> = {
  Dubai: [
    { title: "Burj Khalifa Sky Deck", desc: "Sunset views from the world's tallest building, level 124 & 125.", image: destDubai },
    { title: "Desert Safari & Dune Bashing", desc: "4x4 dune adventure, camel rides and a Bedouin BBQ under the stars.", image: heroDubai },
    { title: "Dubai Marina Yacht Cruise", desc: "Glide past the Palm & Atlantis on a private luxury catamaran.", image: destMauritius },
    { title: "Gold & Spice Souks", desc: "Old Dubai abra ride and guided tour of the historic souks.", image: destZanzibar },
  ],
  Mauritius: [
    { title: "Île aux Cerfs Catamaran", desc: "Full-day island hop with snorkeling, BBQ lunch and waterfall stop.", image: destMauritius },
    { title: "Black River Gorges", desc: "Hike rainforests, viewpoints and the seven coloured earths of Chamarel.", image: destSafari },
    { title: "Dolphin Swim at Tamarin", desc: "Early-morning boat trip to swim with wild spinner dolphins.", image: destZanzibar },
    { title: "Le Morne Beach Day", desc: "UNESCO-listed peninsula, kite surfing, snorkeling & sunset cocktails.", image: destCapetown },
  ],
  Zanzibar: [
    { title: "Stone Town Heritage Walk", desc: "Spice market, House of Wonders and Freddie Mercury's birthplace.", image: destZanzibar },
    { title: "Nakupenda Sandbank", desc: "Boat trip to a pristine sandbar with fresh seafood lunch.", image: destMauritius },
    { title: "Spice Farm Tour", desc: "Taste cloves, vanilla and nutmeg straight from the source.", image: destSafari },
    { title: "Mnemba Atoll Snorkel", desc: "Reef teeming with turtles, dolphins and tropical fish.", image: destCapetown },
  ],
  "Cape Town": [
    { title: "Table Mountain Cableway", desc: "Rotating cable car to the iconic flat-topped summit.", image: destCapetown },
    { title: "Cape Point & Boulders Beach", desc: "Peninsula drive with African penguins at Boulders.", image: destSafari },
    { title: "Stellenbosch Winelands", desc: "Tastings at boutique estates with Cape Dutch architecture.", image: destMauritius },
    { title: "V&A Waterfront", desc: "Harbour dining, Two Oceans Aquarium and Robben Island ferry.", image: destZanzibar },
  ],
  "SA Safari": [
    { title: "Big Five Game Drives", desc: "Dawn & dusk drives with expert rangers in private Kruger concessions.", image: destSafari },
    { title: "Bush Walk Experience", desc: "Tracked walk with armed guide, focus on tracks, plants and birding.", image: destCapetown },
    { title: "Boma Dinner Under the Stars", desc: "Open-fire feast with traditional music in the heart of the bush.", image: destZanzibar },
    { title: "Panorama Route", desc: "Blyde River Canyon, God's Window and Bourke's Luck Potholes.", image: destMauritius },
  ],
  "United Kingdom": [
    { title: "London Icons Tour", desc: "Big Ben, Westminster, Buckingham Palace and a Thames river cruise.", image: destUk },
    { title: "Tower of London & Crown Jewels", desc: "Guided tour through 1,000 years of royal history.", image: destUk },
    { title: "Cotswolds Countryside Day", desc: "Honey-stone villages, pubs and English afternoon tea.", image: destCanada },
    { title: "Edinburgh Add-on", desc: "Castle, Royal Mile and Highlands optional extension.", image: destSafari },
  ],
  Canada: [
    { title: "Banff & Lake Louise", desc: "Turquoise glacial lakes, gondolas and Rocky Mountain hikes.", image: destCanada },
    { title: "Niagara Falls Experience", desc: "Hornblower boat cruise into the mist of the falls.", image: destUk },
    { title: "Vancouver City & Capilano", desc: "Stanley Park, Granville Island and the suspension bridge.", image: destSafari },
    { title: "Whale Watching Victoria", desc: "Orcas, humpbacks and bald eagles off Vancouver Island.", image: destMauritius },
  ],
  "United States": [
    { title: "New York City Pass", desc: "Statue of Liberty, Empire State, Times Square and Broadway.", image: destUsa },
    { title: "Las Vegas & Grand Canyon", desc: "Strip nightlife plus a helicopter tour over the canyon.", image: destDubai },
    { title: "Orlando Theme Parks", desc: "Walt Disney World and Universal Studios family days.", image: destUsa },
    { title: "California Coast Drive", desc: "LA to San Francisco along the Pacific Coast Highway.", image: destCapetown },
  ],
  Australia: [
    { title: "Sydney Harbour Cruise", desc: "Opera House, Harbour Bridge climb and Bondi Beach.", image: destAustralia },
    { title: "Great Barrier Reef", desc: "Snorkel or dive the world's largest coral reef from Cairns.", image: destMauritius },
    { title: "Uluru Sunset Experience", desc: "Sacred red monolith with Sounds of Silence dinner.", image: destSafari },
    { title: "Melbourne & Great Ocean Road", desc: "Coffee culture, laneways and the Twelve Apostles drive.", image: destAustralia },
  ],
};

const packages = [
  { name: "Dubai", price: "R9,999", img: destDubai, includes: ["Return flights", "4 nights 4★ hotel", "Desert safari", "Burj Khalifa visit"] },
  { name: "Mauritius", price: "R12,999", img: destMauritius, includes: ["Return flights", "5 nights all-inclusive", "Island tour", "Airport transfers"] },
  { name: "Zanzibar", price: "R10,999", img: destZanzibar, includes: ["Return flights", "5 nights beach resort", "Spice tour", "Snorkeling trip"] },
  { name: "Cape Town", price: "R4,999", img: destCapetown, includes: ["Domestic flights", "3 nights hotel", "Table Mountain", "Winelands tour"] },
  { name: "SA Safari", price: "R6,999", img: destSafari, includes: ["Lodge stay 3 nights", "Game drives", "All meals", "Park fees"] },
  { name: "United Kingdom", price: "R24,999", img: destUk, includes: ["Return flights", "6 nights London 4★", "Hop-on city tour", "Tower of London entry"] },
  { name: "Canada", price: "R28,999", img: destCanada, includes: ["Return flights", "7 nights Banff & Vancouver", "Lake Louise tour", "Niagara day trip"] },
  { name: "United States", price: "R26,999", img: destUsa, includes: ["Return flights", "6 nights NYC 4★", "City sightseeing pass", "Statue of Liberty ferry"] },
  { name: "Australia", price: "R32,999", img: destAustralia, includes: ["Return flights", "7 nights Sydney & Cairns", "Harbour cruise", "Great Barrier Reef day"] },
];

const whyUs = [
  { icon: BadgeDollarSign, t: "Competitive Prices", d: "Direct supplier rates passed to you." },
  { icon: Sparkles, t: "Personalised Planning", d: "Bespoke itineraries built around you." },
  { icon: ShieldCheck, t: "Trusted Experts", d: "ASATA-aligned, deeply experienced team." },
  { icon: Lock, t: "Secure Bookings", d: "Protected payments & supplier guarantees." },
  { icon: Zap, t: "Fast Visa Support", d: "Document help & embassy navigation." },
  { icon: Headphones, t: "24/7 Assistance", d: "We're with you before, during and after." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img src={heroDubai} alt="Dubai skyline at golden hour" className="absolute inset-0 h-full w-full object-cover animate-ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-transparent to-transparent" />
        <div className="relative z-10 container-x h-full flex flex-col justify-center pt-20 text-white">
          <span className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[var(--gold)] animate-float-up">Luxury Travel · Johannesburg</span>
          <h1 className="mt-4 max-w-4xl font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] animate-float-up">
            Explore the World <span className="block text-gradient-gold">with Confidence.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 animate-float-up">
            {SITE.tagline}. Affordable local and international travel packages, expertly tailored to your story.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-float-up">
            <EnquiryDialog trigger={
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-lg hover:opacity-90">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </button>
            } />
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm text-white/70 animate-float-up">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-[var(--gold)] fill-[var(--gold)]" /> 4.9 · 1,200+ travellers</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--gold)]" /> Secure & ASATA-aligned</span>
            <span className="flex items-center gap-2"><Headphones className="h-4 w-4 text-[var(--gold)]" /> 24/7 support</span>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Featured Destinations</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Where will Aura take you?</h2>
            </div>
            <p className="max-w-md text-muted-foreground">Hand-picked escapes loved by South African travellers, from beach hideaways to iconic city breaks.</p>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <article key={d.name} className={`group relative overflow-hidden rounded-2xl shadow-card ${i === 0 ? "lg:row-span-2 lg:col-span-1 lg:h-auto" : ""}`} style={{ aspectRatio: i === 0 ? "3/4" : "4/3" }}>
                <img src={d.img} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/30 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-semibold text-[var(--navy-deep)]">{d.tag}</div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-semibold">{d.name}</h3>
                  <p className="mt-1 text-sm text-white/80">{d.blurb}</p>
                  <EnquiryDialog destination={d.name} trigger={
                    <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--gold)] hover:gap-2.5 transition-all">
                      Plan this trip <ArrowRight className="h-4 w-4" />
                    </button>
                  } />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 bg-secondary">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Popular Packages</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Ready-to-book journeys</h2>
              <p className="mt-3 text-sm text-muted-foreground">Secure your spot with a 10% deposit via PayFast, South Africa's trusted payment gateway.</p>
            </div>
            <Link to="/contact" className="text-sm font-semibold text-[var(--navy-deep)] underline underline-offset-4">Need something custom? Talk to us →</Link>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => {
              const deposit = depositAmount(p.price);
              const activities = packageActivities[p.name] ?? [];
              return (
                <article key={p.name} className="overflow-hidden rounded-2xl bg-card shadow-card flex flex-col">
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <img src={p.img} alt={`${p.name} travel package`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                    <div className="absolute top-4 right-4 rounded-full bg-[var(--navy-deep)]/85 backdrop-blur px-3 py-1 text-xs font-semibold text-white">Starting {p.price}</div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-semibold">{p.name} Package</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Per person sharing, handcrafted by our specialists.</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {p.includes.map((i) => (
                        <li key={i} className="flex gap-2"><Check className="h-4 w-4 text-[var(--gold)] mt-0.5 shrink-0" />{i}</li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col sm:flex-row gap-2">
                      <PayDepositDialog
                        packageName={p.name}
                        amount={deposit}
                        totalLabel={p.price}
                        trigger={
                          <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy-deep)] px-4 py-3 text-sm font-semibold text-white hover:bg-[var(--navy)]">
                            <CreditCard className="h-4 w-4" /> Pay Deposit
                          </button>
                        }
                      />
                      <ExploreDialog
                        packageName={p.name}
                        activities={activities}
                        trigger={
                          <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-[var(--navy-deep)] bg-transparent px-4 py-3 text-sm font-semibold text-[var(--navy-deep)] hover:bg-[var(--navy-deep)] hover:text-white transition-colors">
                            <Compass className="h-4 w-4" /> Explore
                          </button>
                        }
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-[var(--navy-deep)] text-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Our Services</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Everything for the modern traveller</h2>
            <p className="mt-4 text-white/70">From leisure to corporate, spiritual journey to safari, one trusted partner.</p>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-[var(--gold)]/40 transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-[var(--navy-deep)] group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WHY US */}
      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Why Choose Aura</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">A travel partner you can <span className="text-gradient-gold">trust</span>.</h2>
            <p className="mt-5 text-muted-foreground max-w-lg">From your first enquiry to your safe return home, our specialists obsess over the details so you can simply enjoy the journey.</p>
            <EnquiryDialog trigger={
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)]">
                Start Planning <ArrowRight className="h-4 w-4" />
              </button>
            } />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6 hover:border-[var(--gold)]/40 hover:shadow-card transition-all">
                <Icon className="h-7 w-7 text-[var(--gold)]" />
                <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={destMauritius} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[var(--navy-deep)]/80" />
        <div className="relative container-x text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl font-semibold max-w-3xl mx-auto">Your next great escape starts here.</h2>
          <p className="mt-5 max-w-xl mx-auto text-white/80">Speak to a real travel specialist today, no bots, no pressure.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <EnquiryDialog trigger={
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)]">
                Request a Quote
              </button>
            } />
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
