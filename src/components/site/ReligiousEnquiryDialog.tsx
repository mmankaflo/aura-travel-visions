import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Send, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState, type ReactNode } from "react";
import { submitEnquiryForm } from "@/lib/enquiryForm";

const FAITH = ["Christian", "Catholic", "Muslim", "Jewish", "Hindu", "Interfaith", "Other"];
const DESTINATIONS = [
  "Holy Land (Israel)",
  "Rome & Vatican",
  "Mecca / Umrah",
  "Medina",
  "Lourdes, France",
  "Fatima, Portugal",
  "India",
  "Other",
];
const DURATION = ["5–7 days", "8–10 days", "11–14 days", "15+ days"];
const ACCOM = ["3★ Standard", "4★ Comfort", "5★ Premium"];
const DEPARTURES = [
  "Johannesburg (OR Tambo)",
  "Cape Town",
  "Durban (King Shaka)",
  "Port Elizabeth",
  "East London",
  "Bloemfontein",
  "George",
  "Lanseria",
  "Other",
];

export function ReligiousEnquiryDialog({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [faith, setFaith] = useState("");
  const [dest, setDest] = useState("");
  const [duration, setDuration] = useState("");
  const [accom, setAccom] = useState("");
  const [departure, setDeparture] = useState("");
  const [needsVisa, setNeedsVisa] = useState(false);
  const [dietary, setDietary] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl">
            Plan a Group Spiritual Journey
          </DialogTitle>
          <DialogDescription>
            Share your group's details — our faith-travel coordinators will respond within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form
          action="https://formsubmit.co/info@AuraTravelandTours.onmicrosoft.com"
          method="POST"
          className="grid gap-7"
          onSubmit={(event) => {
            submitEnquiryForm(
              event,
              "Spiritual Journey Enquiry",
              () => {
                setDate(undefined);
                setFaith("");
                setDest("");
                setDuration("");
                setAccom("");
                setDeparture("");
                setNeedsVisa(false);
                setDietary(false);
              },
              setSuccessMessage,
            );
          }}
        >
          <input type="hidden" name="_next" value="/" />
          <input type="hidden" name="_subject" value="Spiritual Journey Enquiry" />
          <input type="hidden" name="faith_tradition" value={faith} />
          <input type="hidden" name="destination" value={dest} />
          <input type="hidden" name="duration" value={duration} />
          <input type="hidden" name="accommodation_level" value={accom} />
          <input type="hidden" name="departing_from" value={departure} />
          <input
            type="hidden"
            name="preferred_travel_date"
            value={date ? format(date, "PPP") : ""}
          />
          <input type="hidden" name="visa_assistance_needed" value={needsVisa ? "Yes" : "No"} />
          <input type="hidden" name="special_dietary_needs" value={dietary ? "Yes" : "No"} />

          <section className="grid gap-4">
            <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)] border-b border-border pb-2">
              Group Leader Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <F id="rf-first" label="First name">
                <Input id="rf-first" name="first_name" required maxLength={60} />
              </F>
              <F id="rf-surname" label="Surname">
                <Input id="rf-surname" name="surname" required maxLength={60} />
              </F>
              <F id="rf-email" label="Email address">
                <Input id="rf-email" name="email" type="email" required />
              </F>
              <F id="rf-mobile" label="Mobile number">
                <Input id="rf-mobile" name="mobile" type="tel" required />
              </F>
              <F id="rf-org" label="Church / Organisation name">
                <Input id="rf-org" name="organisation" required maxLength={120} />
              </F>
              <F id="rf-role" label="Your role in the group">
                <Input id="rf-role" name="role" placeholder="e.g. Pastor, Coordinator" required />
              </F>
            </div>
          </section>

          <section className="grid gap-4">
            <h3 className="font-display text-xl font-semibold text-[var(--navy-deep)] border-b border-border pb-2">
              Journey Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <F id="rf-faith" label="Faith tradition">
                <Select value={faith} onValueChange={setFaith} required>
                  <SelectTrigger id="rf-faith">
                    <SelectValue placeholder="Select faith tradition" />
                  </SelectTrigger>
                  <SelectContent>
                    {FAITH.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </F>
              <F id="rf-dest" label="Preferred destination">
                <Select value={dest} onValueChange={setDest} required>
                  <SelectTrigger id="rf-dest">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {DESTINATIONS.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </F>
              <F id="rf-group" label="Group size (number of travellers)">
                <Input
                  id="rf-group"
                  name="group_size"
                  type="number"
                  min={2}
                  max={500}
                  defaultValue={20}
                  required
                />
              </F>
              <F id="rf-duration" label="Trip duration">
                <Select value={duration} onValueChange={setDuration} required>
                  <SelectTrigger id="rf-duration">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {DURATION.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </F>
              <F id="rf-date" label="Preferred departure date">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                      )}
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
              </F>
              <F id="rf-accom" label="Accommodation level">
                <Select value={accom} onValueChange={setAccom} required>
                  <SelectTrigger id="rf-accom">
                    <SelectValue placeholder="Select accommodation" />
                  </SelectTrigger>
                  <SelectContent>
                    {ACCOM.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </F>
              <F id="rf-budget" label="Estimated budget per traveller (ZAR)">
                <Input
                  id="rf-budget"
                  name="budget_per_person"
                  placeholder="e.g. R45,000"
                  required
                />
              </F>
              <F id="rf-depart" label="Departing from">
                <Select value={departure} onValueChange={setDeparture} required>
                  <SelectTrigger id="rf-depart">
                    <SelectValue placeholder="Select departure city" />
                  </SelectTrigger>
                  <SelectContent>
                    {DEPARTURES.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </F>
            </div>

            <F id="rf-sites" label="Sites or experiences you'd like to include">
              <Textarea
                id="rf-sites"
                name="must_see_sites"
                rows={3}
                maxLength={1000}
                placeholder="e.g. Western Wall, Sea of Galilee, Mount of Olives, Vatican Mass…"
              />
            </F>

            <F id="rf-notes" label="Anything else we should know?">
              <Textarea
                id="rf-notes"
                name="notes"
                rows={3}
                maxLength={1000}
                placeholder="Pastor / guide preference, mobility needs, age range of group, fundraising plans…"
              />
            </F>
          </section>

          <section className="grid gap-3 rounded-xl border border-border bg-secondary/40 p-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Add-ons</p>
            <label className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={needsVisa}
                onCheckedChange={(c) => setNeedsVisa(c === true)}
                className="mt-0.5"
              />
              <span className="text-sm">
                <span className="font-medium">Visa assistance required for the group</span>
                <span className="block text-muted-foreground text-xs">
                  We'll prepare visa documentation for all travellers.
                </span>
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={dietary}
                onCheckedChange={(c) => setDietary(c === true)}
                className="mt-0.5"
              />
              <span className="text-sm">
                <span className="font-medium">
                  Special dietary requirements (halal / kosher / vegetarian)
                </span>
                <span className="block text-muted-foreground text-xs">
                  We'll arrange meals accordingly.
                </span>
              </span>
            </label>
          </section>

          {successMessage && (
            <p
              role="status"
              className="rounded-xl bg-green-500/10 px-4 py-3 text-sm font-medium text-green-700"
            >
              {successMessage}
            </p>
          )}

          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary"
            >
              <X className="h-4 w-4" /> Exit
            </button>
            <Button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] hover:opacity-90 shadow"
            >
              <Send className="h-4 w-4" /> Submit Group Enquiry
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
