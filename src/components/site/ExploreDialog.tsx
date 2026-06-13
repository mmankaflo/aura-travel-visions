import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { MapPin } from "lucide-react";
import type { ReactNode } from "react";

export type ExploreActivity = {
  title: string;
  desc: string;
  image: string;
};

export function ExploreDialog({
  trigger,
  packageName,
  activities,
}: {
  trigger: ReactNode;
  packageName: string;
  activities: ExploreActivity[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl">Explore {packageName}</DialogTitle>
          <DialogDescription>Curated places & experiences included or available on this trip.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 sm:grid-cols-2 mt-2">
          {activities.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-xs text-[var(--gold)] font-semibold uppercase tracking-wider">
                  <MapPin className="h-3.5 w-3.5" /> {packageName}
                </div>
                <h4 className="mt-1.5 font-display text-lg font-semibold">{a.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
