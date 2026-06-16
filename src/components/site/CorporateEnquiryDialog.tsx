import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Send, X } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { sendEnquiryEmail } from "@/lib/sendEnquiry";

const SERVICES = [
  "Flight Bookings", "Hotel Reservations", "Travel Policy Management",
  "Group / Conference Travel", "Incentive Travel", "Expense Reporting", "Visa Support",
];
const FREQUENCY = ["Ad-hoc", "Weekly", "Monthly", "Quarterly", "Annual programme"];
const COMPANY_SIZE = ["1–10", "11–50", "51–200", "201–500", "500+"];
const TRAVELLER_CLASS = ["Economy", "Premium Economy", "Business", "First", "Mixed"];

export function CorporateEnquiryDialog({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState("");
  const [freq, setFreq] = useState("");
  const [travelClass, setTravelClass] = useState("");
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (s: string) =>
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const data: Record<string, unknown> = Object.fromEntries(fd.entries());
    data.company_size = size;
    data.travel_frequency = freq;
    data.preferred_class = travelClass;
    data.services_required = services.join(", ");
    sendEnquiryEmail({
      subject: `Corporate Travel Proposal Request, ${data.company_name ?? ""}`,
      data,
    });
    form.reset();
    setSize(""); setFreq(""); setTravelClass(""); setServices([]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl">Request a Corporate Proposal</DialogTitle>
          <DialogDescription>Tell us about your business travel needs — our corporate desk will reply within 24 hours.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-7">
          <section className="grid gap-4">
            <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)] border-b border-border pb-2">Company Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <F id="cf-company" label="Company name"><Input id="cf-company" name="company_name" required maxLength={120} /></F>
              <F id="cf-industry" label="Industry"><Input id="cf-industry" name="industry" placeholder="e.g. Mining, Finance" required /></F>
              <F id="cf-size" label="Company size">
                <Select value={size} onValueChange={setSize} required>
                  <SelectTrigger id="cf-size"><SelectValue placeholder="Select company size" /></SelectTrigger>
                  <SelectContent>{COMPANY_SIZE.map((o) => <SelectItem key={o} value={o}>{o} employees</SelectItem>)}</SelectContent>
                </Select>
              </F>
              <F id="cf-website" label="Company website"><Input id="cf-website" name="website" placeholder="https://" /></F>
            </div>
          </section>

          <section className="grid gap-4">
            <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)] border-b border-border pb-2">Contact Person</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <F id="cf-first" label="First name"><Input id="cf-first" name="first_name" required maxLength={60} /></F>
              <F id="cf-surname" label="Surname"><Input id="cf-surname" name="surname" required maxLength={60} /></F>
              <F id="cf-position" label="Position / Job title"><Input id="cf-position" name="position" required maxLength={80} /></F>
              <F id="cf-email" label="Work email"><Input id="cf-email" name="email" type="email" required /></F>
              <F id="cf-mobile" label="Mobile number"><Input id="cf-mobile" name="mobile" type="tel" required /></F>
              <F id="cf-landline" label="Office number"><Input id="cf-landline" name="landline" type="tel" /></F>
            </div>
          </section>

          <section className="grid gap-4">
            <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)] border-b border-border pb-2">Travel Programme</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <F id="cf-freq" label="Expected travel frequency">
                <Select value={freq} onValueChange={setFreq} required>
                  <SelectTrigger id="cf-freq"><SelectValue placeholder="Select frequency" /></SelectTrigger>
                  <SelectContent>{FREQUENCY.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </F>
              <F id="cf-travellers" label="Number of business travellers">
                <Input id="cf-travellers" name="travellers_count" type="number" min={1} max={5000} defaultValue={5} required />
              </F>
              <F id="cf-class" label="Preferred travel class">
                <Select value={travelClass} onValueChange={setTravelClass} required>
                  <SelectTrigger id="cf-class"><SelectValue placeholder="Select class" /></SelectTrigger>
                  <SelectContent>{TRAVELLER_CLASS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </F>
              <F id="cf-spend" label="Estimated annual travel spend (ZAR)">
                <Input id="cf-spend" name="annual_spend" placeholder="e.g. R1,200,000" />
              </F>
              <F id="cf-routes" label="Top destinations / routes">
                <Input id="cf-routes" name="top_routes" placeholder="e.g. JNB–CPT, JNB–DXB, JNB–LHR" required />
              </F>
              <F id="cf-loyalty" label="Existing loyalty / preferred suppliers">
                <Input id="cf-loyalty" name="loyalty" placeholder="e.g. Voyager, Marriott Bonvoy" />
              </F>
            </div>

            <F id="cf-services" label="Services required">
              <div className="grid sm:grid-cols-2 gap-2 rounded-xl border border-border p-4 bg-secondary/40">
                {SERVICES.map((s) => (
                  <label key={s} className="flex items-center gap-2 cursor-pointer text-sm">
                    <Checkbox checked={services.includes(s)} onCheckedChange={() => toggleService(s)} />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            </F>

            <F id="cf-notes" label="Anything else we should know?">
              <Textarea id="cf-notes" name="notes" rows={4} maxLength={1500}
                placeholder="Approval workflows, expense tools, duty-of-care needs, current pain points…" />
            </F>
          </section>

          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
            <button type="button" onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary">
              <X className="h-4 w-4" /> Exit
            </button>
            <Button type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] hover:opacity-90 shadow">
              <Send className="h-4 w-4" /> Submit Corporate Enquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function F({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
