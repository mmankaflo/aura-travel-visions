import { useState, type FormEvent } from "react";
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

const DEPART_OPTIONS = [
  "Johannesburg (OR Tambo)", "Cape Town (CPT)", "Durban (King Shaka)",
  "Pretoria", "Port Elizabeth (Gqeberha)", "East London", "Bloemfontein", "Other",
];

const DESTINATION_OPTIONS = [
  "Dubai", "Mauritius", "Zanzibar", "Cape Town", "South African Safari",
  "Bali", "Thailand", "Maldives", "Turkey", "Europe",
  "Holy Land (Israel)", "Mecca / Umrah", "Other",
];

const CONTACT_OPTIONS = ["Email", "Phone Call", "WhatsApp", "SMS"];

export function EnquiryForm({
  defaultDestination,
  onCancel,
  cancelLabel = "Cancel",
}: {
  defaultDestination?: string;
  onCancel?: () => void;
  cancelLabel?: string;
}) {
  const [date, setDate] = useState<Date | undefined>();
  const [contactMethod, setContactMethod] = useState<string>("");
  const [joinWhatsApp, setJoinWhatsApp] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Enquiry submitted, our specialists will be in touch within 24 hours.");
    (e.target as HTMLFormElement).reset();
    setDate(undefined);
    setContactMethod("");
    setJoinWhatsApp(false);
    setSubscribeNewsletter(false);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-7">
      {/* Personal Information */}
      <section className="grid gap-4">
        <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)] border-b border-border pb-2">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="ef-first" label="First name"><Input id="ef-first" name="first_name" required maxLength={60} /></Field>
          <Field id="ef-surname" label="Surname"><Input id="ef-surname" name="surname" required maxLength={60} /></Field>
          <Field id="ef-email" label="Email address"><Input id="ef-email" name="email" type="email" required maxLength={120} /></Field>
          <Field id="ef-mobile" label="Mobile number"><Input id="ef-mobile" name="mobile" type="tel" required maxLength={20} /></Field>
        </div>
      </section>

      {/* Travel Information */}
      <section className="grid gap-4">
        <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)] border-b border-border pb-2">
          Travel Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field id="ef-adults" label="Number of adults">
            <Input id="ef-adults" name="adults" type="number" min={1} max={30} defaultValue={2} required />
          </Field>
          <Field id="ef-kids" label="Number of kids">
            <Input id="ef-kids" name="kids" type="number" min={0} max={20} defaultValue={0} />
          </Field>
          <Field id="ef-ages" label="Ages of kids">
            <Input id="ef-ages" name="kid_ages" placeholder="e.g. 4, 8, 11" />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="ef-date" label="Preferred travel date">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
            <input type="hidden" name="travel_date" value={date ? date.toISOString().slice(0, 10) : ""} />
          </Field>

          <Field id="ef-duration" label="Duration of the trip">
            <Input id="ef-duration" name="duration" placeholder="e.g. 7 nights" required />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field id="ef-from" label="Where are you departing from?">
            <Select name="departing_from" required>
              <SelectTrigger id="ef-from"><SelectValue placeholder="Select departure city" /></SelectTrigger>
              <SelectContent>
                {DEPART_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
              </SelectContent>
            </Select>
          </Field>

          <Field id="ef-to" label="Where are you travelling to?">
            <Select name="travelling_to" defaultValue={defaultDestination} required>
              <SelectTrigger id="ef-to"><SelectValue placeholder="Select destination" /></SelectTrigger>
              <SelectContent>
                {DESTINATION_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Field id="ef-budget" label="Estimated budget per person (ZAR)">
          <Input id="ef-budget" name="budget" placeholder="e.g. R15,000" required />
        </Field>

        <Field id="ef-notes" label="Anything you'd like to add?">
          <Textarea id="ef-notes" name="notes" rows={4} maxLength={1000} placeholder="Special occasions, dietary needs, accessibility, preferred airlines…" />
        </Field>

        <Field id="ef-contact-method" label="How should we contact you?">
          <Select value={contactMethod} onValueChange={setContactMethod} name="contact_method" required>
            <SelectTrigger id="ef-contact-method"><SelectValue placeholder="Choose preferred contact method" /></SelectTrigger>
            <SelectContent>
              {CONTACT_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>
      </section>

      {/* Opt-ins */}
      <section className="grid gap-3 rounded-xl border border-border bg-secondary/40 p-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Optional, stay in the loop</p>
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            id="ef-wa"
            checked={joinWhatsApp}
            onCheckedChange={(c) => setJoinWhatsApp(c === true)}
            className="mt-0.5"
          />
          <span className="text-sm">
            <span className="font-medium">Join our WhatsApp promotional group</span>
            <span className="block text-muted-foreground text-xs">Flash deals & last-minute escapes (optional).</span>
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            id="ef-news"
            checked={subscribeNewsletter}
            onCheckedChange={(c) => setSubscribeNewsletter(c === true)}
            className="mt-0.5"
          />
          <span className="text-sm">
            <span className="font-medium">Subscribe to our email newsletter</span>
            <span className="block text-muted-foreground text-xs">Curated journeys & monthly inspiration (optional).</span>
          </span>
        </label>
      </section>

      <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            <X className="h-4 w-4" /> {cancelLabel}
          </button>
        )}
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] hover:opacity-90 shadow"
        >
          <Send className="h-4 w-4" /> Submit My Enquiry
        </button>
      </div>
    </form>
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
