import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, type ReactNode } from "react";
import { sendEnquiryEmail } from "@/lib/sendEnquiry";
import { X } from "lucide-react";

export function QuoteDialog({ trigger, destination }: { trigger: ReactNode; destination?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Request a Quote</DialogTitle>
          <DialogDescription>Tell us about your trip, we'll respond within 24 hours.</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            sendEnquiryEmail({
              subject: `Quote Request, ${fd.get("destination") || destination || "General"}`,
              data: Object.fromEntries(fd.entries()),
            });
            setOpen(false);
          }}
          className="grid gap-4"
        >
          <div className="grid gap-2"><Label htmlFor="q-name">Full name</Label><Input id="q-name" name="full_name" required /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-2"><Label htmlFor="q-email">Email</Label><Input id="q-email" name="email" type="email" required /></div>
            <div className="grid gap-2"><Label htmlFor="q-phone">Phone</Label><Input id="q-phone" name="phone" type="tel" /></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-2"><Label htmlFor="q-dest">Destination</Label><Input id="q-dest" name="destination" defaultValue={destination} placeholder="e.g. Dubai" /></div>
            <div className="grid gap-2"><Label htmlFor="q-travelers">Travelers</Label><Input id="q-travelers" name="travelers" type="number" min={1} defaultValue={2} /></div>
          </div>
          <div className="grid gap-2"><Label htmlFor="q-notes">Notes</Label><Textarea id="q-notes" name="notes" rows={3} placeholder="Travel dates, preferences…" /></div>
          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-1">
            <button type="button" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary">
              <X className="h-4 w-4" /> Exit
            </button>
            <button type="submit" className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-6 py-3 text-sm font-semibold text-[var(--navy-deep)] hover:opacity-90">
              Send request
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
