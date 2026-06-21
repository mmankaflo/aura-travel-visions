import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  subject: z.string(),
  data: z.record(z.any()),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator(formSchema)
  .handler(async ({ data }) => {
    const { subject, data: formData } = data;

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM || "Aura Travel <onboarding@resend.dev>";

    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured on the server.");
    }

    const lines: string[] = [];
    for (const [k, v] of Object.entries(formData)) {
      if (v === undefined || v === null || v === "" || v === false) continue;
      const label = k.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      lines.push(`${label}: ${String(v)}`);
    }
    const body = `New enquiry from the Aura Travel & Tours website:\n\n${lines.join("\n")}\n\n— Sent via auratravel.co.za`;

    try {
      await resend.emails.send({
        from: fromEmail,
        to: ["info@AuraTravelandTours.onmicrosoft.com"],
        subject,
        text: body,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Resend send failed";
      console.error("Email send error:", error);
      throw new Error(`Failed to send email: ${message}`);
    }

    return { success: true };
  });
