import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SITE } from "@/lib/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, type LucideIcon } from "lucide-react";
import destCapetown from "@/assets/dest-capetown.jpg";
import { submitEnquiryForm } from "@/lib/enquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aura Travel & Tours | Johannesburg Travel Agency" },
      {
        name: "description",
        content:
          "Get in touch with Aura Travel & Tours in Johannesburg, phone, WhatsApp, email, contact form and office location.",
      },
      { property: "og:title", content: "Contact Aura Travel & Tours" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <>
      <PageHero
        title="Let's start planning."
        subtitle="Our specialists are ready to craft your next journey."
        image={destCapetown}
      />
      <section className="py-24">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                Reach us
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
                We'd love to hear from you.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Send a message or use any channel below, we respond within 24 hours.
              </p>
            </div>
            <ul className="space-y-4">
              <ContactRow icon={Phone} label="Phone" value={SITE.phone} href={SITE.phoneHref} />
              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value={SITE.whatsapp}
                href={SITE.whatsappHref}
              />
              <ContactRow icon={Mail} label="Email" value={SITE.email} href={SITE.emailHref} />
              <ContactRow icon={MapPin} label="Office" value={SITE.address} />
              <ContactRow icon={Clock} label="Hours" value={SITE.hours} />
            </ul>
            <div className="overflow-hidden rounded-2xl border border-border aspect-[4/3]">
              <iframe
                title="Johannesburg map"
                src="https://www.google.com/maps?q=Sandton+City+Johannesburg&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            action="https://formsubmit.co/info@AuraTravelandTours.onmicrosoft.com"
            method="POST"
            className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-card"
            onSubmit={(event) => {
              submitEnquiryForm(event, "Contact Form Enquiry", undefined, setSuccessMessage);
            }}
          >
            <input type="hidden" name="_next" value="/" />
            <input type="hidden" name="_subject" value="Contact Form Enquiry" />
            <h3 className="font-display text-2xl font-semibold">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              All enquiries answered by a real human.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id="c-name" label="Full name">
                  <Input id="c-name" name="full_name" required />
                </Field>
                <Field id="c-email" label="Email">
                  <Input id="c-email" name="email" type="email" required />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id="c-phone" label="Phone">
                  <Input id="c-phone" name="phone" type="tel" />
                </Field>
                <Field id="c-dest" label="Destination of interest">
                  <Input id="c-dest" name="destination_of_interest" placeholder="e.g. Mauritius" />
                </Field>
              </div>
              <Field id="c-msg" label="Message">
                <Textarea
                  id="c-msg"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your trip…"
                />
              </Field>
              {successMessage && (
                <p
                  role="status"
                  className="rounded-xl bg-green-500/10 px-4 py-3 text-sm font-medium text-green-700"
                >
                  {successMessage}
                </p>
              )}
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] hover:opacity-90"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 items-start">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--navy-deep)] text-[var(--gold)]">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-medium truncate">{value}</p>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="block hover:opacity-80">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
