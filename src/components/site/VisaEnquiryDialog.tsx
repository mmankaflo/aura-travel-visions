import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Send, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useState, type FormEvent, type ReactNode } from "react";

const VISA_TYPES = [
  "Schengen (Tourist)", "Schengen (Multiple Entry)", "UAE / Dubai Visa",
  "UK Visitor Visa", "US B1/B2 Visa", "China Visa", "Turkey e-Visa",
  "India e-Visa", "Group Visa", "Other",
];

const PURPOSE = ["Tourism / Holiday", "Business", "Visiting Family", "Religious Travel", "Study", "Medical", "Other"];
const PASSPORT = ["South African", "Other African", "Other"];
const CONTACT_OPTIONS = ["Email", "Phone Call", "WhatsApp", "SMS"];

export function VisaEnquiryDialog({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [travelDate, setTravelDate] = useState<Date | undefined>();
  const [contactMethod, setContactMethod] = useState<string>("");
  const [visaType, setVisaType] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [passport, setPassport] = useState<string>("");
  const [previousVisa, setPreviousVisa] = useState(false);
  const [insurance, setInsurance] = useState(false);

  const reset = () => {
    setTravelDate(undefined); setContactMethod(""); setVisaType("");
    setPurpose(""); setPassport(""); setPreviousVisa(false); setInsurance(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Visa application started — a visa specialist will contact you within 24 hours.");
    (e.target as HTMLFormElement).reset();
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl">Start Your Visa Application</DialogTitle>
          <DialogDescription>
            Share your travel details — our visa specialists will guide you through every step.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-7">
          <section className="grid gap-4">
            <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)] border-b border-border pb-2">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <F id="vf-first" label="First name"><Input id="vf-first" name="first_name" required maxLength={60} /></F>
              <F id="vf-surname" label="Surname"><Input id="vf-surname" name="surname" required maxLength={60} /></F>
              <F id="vf-email" label="Email address"><Input id="vf-email" name="email" type="email" required maxLength={120} /></F>
              <F id="vf-mobile" label="Mobile number"><Input id="vf-mobile" name="mobile" type="tel" required maxLength={20} /></F>
              <F id="vf-passport" label="Passport nationality">
                <Select value={passport} onValueChange={setPassport} required>
                  <SelectTrigger id="vf-passport"><SelectValue placeholder="Select passport" /></SelectTrigger>
                  <SelectContent>{PASSPORT.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </F>
              <F id="vf-passport-expiry" label="Passport expiry date">
                <Input id="vf-passport-expiry" name="passport_expiry" type="date" required />
              </F>
            </div>
          </section>

          <section className="grid gap-4">
            <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)] border-b border-border pb-2">Visa Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <F id="vf-type" label="Visa type required">
                <Select value={visaType} onValueChange={setVisaType} required>
                  <SelectTrigger id="vf-type"><SelectValue placeholder="Select visa type" /></SelectTrigger>
                  <SelectContent>{VISA_TYPES.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </F>
              <F id="vf-country" label="Country you're applying for">
                <Input id="vf-country" name="country" placeholder="e.g. France, UAE, UK" required />
              </F>
              <F id="vf-purpose" label="Purpose of travel">
                <Select value={purpose} onValueChange={setPurpose} required>
                  <SelectTrigger id="vf-purpose"><SelectValue placeholder="Select purpose" /></SelectTrigger>
                  <SelectContent>{PURPOSE.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </F>
              <F id="vf-applicants" label="Number of applicants">
                <Input id="vf-applicants" name="applicants" type="number" min={1} max={50} defaultValue={1} required />
              </F>
              <F id="vf-date" label="Intended travel date">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button type="button" variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !travelDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {travelDate ? format(travelDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={travelDate} onSelect={setTravelDate} initialFocus
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      className={cn("p-3 pointer-events-auto")} />
                  </PopoverContent>
                </Popover>
                <input type="hidden" name="travel_date" value={travelDate ? travelDate.toISOString().slice(0, 10) : ""} />
              </F>
              <F id="vf-duration" label="Duration of stay">
                <Input id="vf-duration" name="duration" placeholder="e.g. 10 days" required />
              </F>
            </div>

            <F id="vf-prev" label="Have you held a visa for this country before?">
              <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox id="vf-prev" checked={previousVisa} onCheckedChange={(c) => setPreviousVisa(c === true)} />
                <span className="text-sm text-muted-foreground">Yes, I've previously held a visa for this country.</span>
              </label>
            </F>

            <F id="vf-notes" label="Additional notes (optional)">
              <Textarea id="vf-notes" name="notes" rows={4} maxLength={1000}
                placeholder="Previous refusals, special circumstances, group details…" />
            </F>

            <F id="vf-contact" label="How should we contact you?">
              <Select value={contactMethod} onValueChange={setContactMethod} required>
                <SelectTrigger id="vf-contact"><SelectValue placeholder="Choose preferred contact method" /></SelectTrigger>
                <SelectContent>{CONTACT_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
              </Select>
            </F>
          </section>

          <section className="grid gap-3 rounded-xl border border-border bg-secondary/40 p-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Optional add-ons</p>
            <label className="flex items-start gap-3 cursor-pointer">
              <Checkbox checked={insurance} onCheckedChange={(c) => setInsurance(c === true)} className="mt-0.5" />
              <span className="text-sm">
                <span className="font-medium">Include travel insurance quote</span>
                <span className="block text-muted-foreground text-xs">Required for most visas — we'll send options.</span>
              </span>
            </label>
          </section>

          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
            <button type="button" onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
              <X className="h-4 w-4" /> Exit
            </button>
            <button type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] hover:opacity-90 shadow">
              <Send className="h-4 w-4" /> Submit Visa Application
            </button>
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
