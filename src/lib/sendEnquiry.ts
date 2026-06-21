import { submitEnquiry } from "@/lib/api/enquiry.functions";
import { toast } from "sonner";

export async function sendEnquiryEmail(opts: {
  subject: string;
  data: Record<string, unknown>;
  successMessage?: string;
}): Promise<boolean> {
  try {
    await submitEnquiry({ data: { subject: opts.subject, data: opts.data } });
    toast.success(
      opts.successMessage ?? "Successfully sent! A consultant will be in touch within 24 hours.",
    );
    return true;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Failed to send enquiry:", error);
    toast.error(`Failed to send: ${message}`);
    return false;
  }
}
