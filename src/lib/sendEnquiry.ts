import { SITE } from "./site";
import { toast } from "sonner";

/**
 * Submits an enquiry by opening the user's default email client
 * pre-populated with all form fields, addressed to the business inbox.
 */
export function sendEnquiryEmail(opts: {
  subject: string;
  data: Record<string, unknown>;
  successMessage?: string;
}) {
  const lines: string[] = [];
  for (const [k, v] of Object.entries(opts.data)) {
    if (v === undefined || v === null || v === "" || v === false) continue;
    const label = k
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    lines.push(`${label}: ${String(v)}`);
  }
  const body = `New enquiry from the Aura Travel & Tours website:\n\n${lines.join("\n")}\n\n— Sent via auratravel.co.za`;
  const href = `mailto:${SITE.email}?subject=${encodeURIComponent(opts.subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
  toast.success(
    opts.successMessage ??
      `Opening your email app to send to ${SITE.email}. Please press send.`
  );
}
