import { createFileRoute, useRouter, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import destMauritius from "@/assets/dest-mauritius.jpg";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/plan-trip")({
  head: () => ({
    meta: [
      { title: "Plan Your Trip | Aura Travel & Tours" },
      { name: "description", content: "Tell us about your dream holiday — adults, kids, dates, departure city, destination, budget and more. We'll craft a tailored quote within 24 hours." },
      { property: "og:title", content: "Plan Your Trip — Aura Travel & Tours" },
      { property: "og:url", content: "/plan-trip" },
    ],
    links: [{ rel: "canonical", href: "/plan-trip" }],
  }),
  component: PlanTrip,
});

function PlanTrip() {
  const router = useRouter();

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/" });
    }
  };

  return (
    <>
      <PageHero
        title="Plan your perfect trip."
        subtitle="Share a few details and our specialists will craft a tailored itinerary just for you."
        image={destMauritius}
      />
      <section className="py-20">
        <div className="container-x max-w-3xl">
          <div className="mb-8 flex items-center justify-between gap-4">
            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <Link to="/" className="text-sm text-muted-foreground hover:text-[var(--gold)]">Home</Link>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-card">
            <EnquiryForm onCancel={goBack} cancelLabel="Exit" />
          </div>
        </div>
      </section>
    </>
  );
}
