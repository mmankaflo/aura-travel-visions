import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { VisaEnquiryDialog } from "@/components/site/VisaEnquiryDialog";
import visaHero from "@/assets/visa-hero.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destMauritius from "@/assets/dest-mauritius.jpg";
import destZanzibar from "@/assets/dest-zanzibar.jpg";
import destCapetown from "@/assets/dest-capetown.jpg";
import destSafari from "@/assets/dest-safari.jpg";
import destUk from "@/assets/dest-uk.jpg";
import destCanada from "@/assets/dest-canada.jpg";
import destUsa from "@/assets/dest-usa.jpg";
import destAustralia from "@/assets/dest-australia.jpg";
import {
  Globe2, Briefcase, GraduationCap, Users, FileCheck2, ShieldPlus, CalendarCheck,
  Check, AlertTriangle, ArrowRight, ClipboardList, ListChecks, FolderUp, Search, PlaneTakeoff,
} from "lucide-react";

export const Route = createFileRoute("/visa")({
  head: () => ({
    meta: [
      { title: "Professional Visa Assistance Services | Aura Travel & Tours" },
      { name: "description", content: "Professional visa assistance from South Africa. Tourist, business, student and family visit visas with document review, insurance and appointment booking guidance." },
      { property: "og:title", content: "Visa Assistance, Aura Travel & Tours" },
      { property: "og:description", content: "We simplify the visa application process by helping you prepare the required documentation and guiding you every step of the way." },
      { property: "og:image", content: "/__l5e/assets-v1/visa-hero.jpg" },
      { property: "og:url", content: "/visa" },
    ],
    links: [{ rel: "canonical", href: "/visa" }],
  }),
  component: Visa,
});

const services = [
  { icon: Globe2, emoji: "🌍", t: "Tourist Visa Assistance", d: "Holiday and leisure visas for popular destinations worldwide." },
  { icon: Briefcase, emoji: "💼", t: "Business Visa Assistance", d: "Meetings, conferences and corporate travel visa support." },
  { icon: GraduationCap, emoji: "🎓", t: "Student Visa Assistance", d: "Study abroad applications, acceptance letters and financial proofs." },
  { icon: Users, emoji: "👨‍👩‍👧", t: "Family Visit Visa Assistance", d: "Visiting loved ones overseas with sponsorship and invitation guidance." },
  { icon: FileCheck2, emoji: "📄", t: "Document Review & Verification", d: "Pre-submission checks to catch errors and missing documents." },
  { icon: ShieldPlus, emoji: "🛡", t: "Travel Insurance Assistance", d: "Comprehensive cover that meets embassy requirements." },
  { icon: CalendarCheck, emoji: "📅", t: "Visa Appointment Booking Guidance", d: "Slot booking guidance at VFS, embassies and consulates." },
];

const steps = [
  { n: "01", icon: ClipboardList, t: "Submit your request", d: "Tell us your destination, purpose of travel and dates." },
  { n: "02", icon: ListChecks, t: "Personalised checklist", d: "Receive a tailored document checklist for your visa type." },
  { n: "03", icon: FolderUp, t: "Share your documents", d: "Upload or drop off your supporting documents securely." },
  { n: "04", icon: Search, t: "Expert review", d: "Our team reviews your full application package for accuracy." },
  { n: "05", icon: PlaneTakeoff, t: "Appointment & tracking", d: "Attend your visa appointment and we help you track progress." },
];

const popular = [
  { name: "Dubai (UAE)", img: destDubai, time: "5 to 7 working days" },
  { name: "Mauritius", img: destMauritius, time: "Visa on arrival" },
  { name: "Zanzibar", img: destZanzibar, time: "Visa on arrival" },
  { name: "Cape Town", img: destCapetown, time: "Domestic, no visa required" },
  { name: "SA Safari", img: destSafari, time: "Domestic, no visa required" },
  { name: "United Kingdom", img: destUk, time: "3 to 6 weeks" },
  { name: "Canada", img: destCanada, time: "4 to 8 weeks" },
  { name: "United States", img: destUsa, time: "4 to 12 weeks" },
  { name: "Australia", img: destAustralia, time: "2 to 4 weeks" },
];

const whyUs = [
  "Professional Guidance",
  "Fast Response Times",
  "Personalised Support",
  "Document Preparation Assistance",
  "Travel Planning Support",
  "Reliable Customer Service",
];

function Visa() {
  return (
    <>
      <PageHero
        title="Professional Visa Assistance Services"
        subtitle="We simplify the visa application process by helping you prepare the required documentation and guiding you every step of the way."
        image={visaHero}
      >
        <VisaEnquiryDialog trigger={
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] shadow-lg hover:opacity-90">
            Apply for Visa Assistance <ArrowRight className="h-4 w-4" />
          </button>
        } />
      </PageHero>

      {/* SERVICES */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Our Services</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Visa support for every traveller</h2>
            <p className="mt-4 text-muted-foreground">From tourist visas to student applications, our specialists handle every type of submission with care.</p>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, emoji, t, d }) => (
              <div key={t} className="group rounded-2xl border border-border bg-card p-7 hover:border-[var(--gold)]/50 hover:shadow-card transition-all">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-[var(--navy-deep)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl" aria-hidden>{emoji}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[var(--navy-deep)] text-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">How It Works</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Your visa journey in 5 steps</h2>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(({ n, icon: Icon, t, d }) => (
              <div key={n} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.08] transition-all">
                <span className="absolute -top-3 left-6 rounded-full bg-[var(--gold)] px-3 py-0.5 text-xs font-bold text-[var(--navy-deep)]">Step {n}</span>
                <Icon className="h-7 w-7 text-[var(--gold)] mt-3" />
                <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-white/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="py-24 bg-secondary">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Popular Destinations</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Where are you heading?</h2>
            </div>
            <p className="max-w-md text-muted-foreground">Typical processing times shown are indicative. Final timelines are set by the issuing embassy or consulate.</p>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((p) => (
              <article key={p.name} className="overflow-hidden rounded-2xl bg-card shadow-card flex flex-col">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img src={p.img} alt={`${p.name} visa assistance`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[var(--gold)]">Processing time</p>
                  <p className="text-sm text-muted-foreground">{p.time}</p>
                  <VisaEnquiryDialog trigger={
                    <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--navy-deep)] self-start hover:gap-2.5 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </button>
                  } />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Why Choose Us</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">A team that puts you first.</h2>
            <p className="mt-5 text-muted-foreground">We treat every application like our own, with the diligence and care your travel plans deserve.</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <Check className="h-5 w-5 text-[var(--gold)] mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="py-16 bg-[var(--navy-deep)]">
        <div className="container-x">
          <div className="rounded-2xl border border-[var(--gold)]/40 bg-white/[0.04] p-8 md:p-10 text-white flex flex-col md:flex-row gap-6 items-start">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)] text-[var(--navy-deep)] shrink-0">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold">Important Notice</h3>
              <p className="mt-3 text-white/85 leading-relaxed">
                We assist clients with visa applications, documentation preparation, and appointment guidance. Visa approvals remain at the sole discretion of the relevant embassy, consulate, or immigration authority. Aura Travel &amp; Tours does not guarantee visa approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Ready to start your visa application?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Speak to a visa specialist today. We respond within 24 hours.</p>
          <VisaEnquiryDialog trigger={
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)]">
              Apply for Visa Assistance <ArrowRight className="h-4 w-4" />
            </button>
          } />
        </div>
      </section>
    </>
  );
}
