import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, type ReactNode } from "react";
import { submitPayFast } from "@/lib/payfast";
import { ShieldCheck } from "lucide-react";

export function PayDepositDialog({
  trigger,
  packageName,
  amount,
  totalLabel,
}: {
  trigger: ReactNode;
  packageName: string;
  amount: number;
  totalLabel: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Secure your {packageName} trip</DialogTitle>
          <DialogDescription>
            Pay a R{amount.toLocaleString("en-ZA")} deposit to lock in your booking. Balance ({totalLabel}) is settled before travel.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            submitPayFast({
              amount,
              item_name: `${packageName} Package — Deposit`,
              item_description: `Aura Travel & Tours deposit for ${packageName}`,
              name_first: String(fd.get("name") || ""),
              email_address: String(fd.get("email") || ""),
            });
          }}
          className="grid gap-4"
        >
          <div className="grid gap-2"><Label htmlFor="pd-name">Full name</Label><Input id="pd-name" name="name" required /></div>
          <div className="grid gap-2"><Label htmlFor="pd-email">Email</Label><Input id="pd-email" name="email" type="email" required /></div>
          <div className="rounded-xl border border-border bg-secondary/50 p-4 text-sm flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-[var(--gold)] mt-0.5 shrink-0" />
            <p className="text-muted-foreground">
              You'll be redirected to <span className="font-semibold text-foreground">PayFast</span> — South Africa's trusted payment gateway — to complete payment securely.
            </p>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-6 py-3 text-sm font-semibold text-[var(--navy-deep)] hover:opacity-90"
          >
            Pay R{amount.toLocaleString("en-ZA")} Deposit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
