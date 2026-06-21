import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState, type ReactNode } from "react";
import { EnquiryForm } from "./EnquiryForm";

export function EnquiryDialog({
  trigger,
  destination,
  title = "Plan Your Trip",
}: {
  trigger: ReactNode;
  destination?: string;
  title?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl">{title}</DialogTitle>
          <DialogDescription>
            Tell us about your dream trip, our travel specialists will respond within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <EnquiryForm
          defaultDestination={destination}
          onCancel={() => setOpen(false)}
          cancelLabel="Exit"
        />
      </DialogContent>
    </Dialog>
  );
}
