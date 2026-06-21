import type { FormEvent } from "react";
import { toast } from "sonner";

const FORMSUBMIT_EMAIL = "info@AuraTravelandTours.onmicrosoft.com";
const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

export async function submitEnquiryForm(
  event: FormEvent<HTMLFormElement>,
  fallbackSubject: string,
  onReset?: () => void,
  onSuccess?: (message: string) => void,
) {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }

  const formData = new FormData(form);
  const subject = getSubject(formData, fallbackSubject);
  const submitButton = form.querySelector<HTMLButtonElement>("button[type='submit']");
  const originalText = submitButton?.innerHTML;
  const originalDisabled = submitButton?.disabled;

  try {
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    const response = await fetch(FORMSUBMIT_AJAX_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: toUrlSearchParams(formData),
    });

    if (response.ok && response.headers.get("content-type")?.includes("application/json")) {
      const message = "Successfully sent! A consultant will be in touch within 24 hours.";
      toast.success(message);
      onSuccess?.(message);
      form.reset();
      onReset?.();
      return true;
    }

    throw new Error("FormSubmit rejected the request");
  } catch {
    const message =
      "Your email app is opening with the enquiry details. Send it to complete your request.";
    window.location.href = createEnquiryMailto(subject, formData);
    toast.success(message);
    onSuccess?.(message);
    form.reset();
    onReset?.();
    return true;
  } finally {
    if (submitButton) {
      submitButton.disabled = Boolean(originalDisabled);
      if (originalText) submitButton.innerHTML = originalText;
    }
  }
}

function getSubject(formData: FormData, fallbackSubject: string) {
  const subject = formData.get("_subject");
  return typeof subject === "string" && subject.trim() ? subject : fallbackSubject;
}

function toUrlSearchParams(formData: FormData) {
  const params = new URLSearchParams();
  formData.forEach((value, key) => {
    if (typeof value === "string") params.append(key, value);
  });
  return params;
}

function createEnquiryMailto(subject: string, formData: FormData) {
  const lines = ["New enquiry from the Aura Travel & Tours website:", ""];

  formData.forEach((value, key) => {
    if (key.startsWith("_") || value === "" || value === "on" || value === "false") return;
    lines.push(`${labelize(key)}: ${String(value)}`);
  });

  lines.push("", "— Sent via auratravel.co.za");

  return `mailto:${FORMSUBMIT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\r\n"))}`;
}

function labelize(key: string) {
  return key.replace(/_/g, " ").replace(/\b\w/g, (character) => character.toUpperCase());
}
