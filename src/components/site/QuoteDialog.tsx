import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";

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
          onSubmit={(e) => { e.preventDefault(); toast.success("Quote request received, we'll be in touch shortly."); setOpen(false); }}
          className="grid gap-4"
        >
          <div className="grid gap-2"><Label htmlFor="q-name">Full name</Label><Input id="q-name" required /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-2"><Label htmlFor="q-email">Email</Label><Input id="q-email" type="email" required /></div>
            <div className="grid gap-2"><Label htmlFor="q-phone">Phone</Label><Input id="q-phone" type="tel" /></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-2"><Label htmlFor="q-dest">Destination</Label><Input id="q-dest" defaultValue={destination} placeholder="e.g. Dubai" /></div>
            <div className="grid gap-2"><Label htmlFor="q-travelers">Travelers</Label><Input id="q-travelers" type="number" min={1} defaultValue={2} /></div>
          </div>
          <div className="grid gap-2"><Label htmlFor="q-notes">Notes</Label><Textarea id="q-notes" rows={3} placeholder="Travel dates, preferences…" /></div>
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-6 py-3 text-sm font-semibold text-[var(--navy-deep)] hover:opacity-90">
            Send request
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
