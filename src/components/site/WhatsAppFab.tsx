import { SITE } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[var(--gold)] animate-ping" />
    </a>
  );
}
