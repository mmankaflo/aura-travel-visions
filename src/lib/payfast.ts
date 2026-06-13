// PayFast payment integration (form POST flow)
// Docs: https://developers.payfast.co.za/docs#quickstart
export const PAYFAST = {
  merchant_id: "21369517",
  merchant_key: "dwznxqapvxkcw",
  // Switch to "https://sandbox.payfast.co.za/eng/process" while testing
  processUrl: "https://www.payfast.co.za/eng/process",
};

export type PayFastPayment = {
  amount: number; // ZAR
  item_name: string;
  item_description?: string;
  name_first?: string;
  email_address?: string;
};

export function submitPayFast(p: PayFastPayment) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const fields: Record<string, string> = {
    merchant_id: PAYFAST.merchant_id,
    merchant_key: PAYFAST.merchant_key,
    return_url: `${origin}/?payment=success`,
    cancel_url: `${origin}/?payment=cancelled`,
    notify_url: `${origin}/api/public/payfast-notify`,
    amount: p.amount.toFixed(2),
    item_name: p.item_name.slice(0, 100),
  };
  if (p.item_description) fields.item_description = p.item_description.slice(0, 255);
  if (p.name_first) fields.name_first = p.name_first;
  if (p.email_address) fields.email_address = p.email_address;

  const form = document.createElement("form");
  form.method = "POST";
  form.action = PAYFAST.processUrl;
  form.style.display = "none";
  Object.entries(fields).forEach(([k, v]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = k;
    input.value = v;
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
}

export function depositAmount(priceLabel: string): number {
  // "R9,999" -> 999.9 (10% deposit)
  const n = Number(priceLabel.replace(/[^\d.]/g, "")) || 0;
  return Math.max(500, Math.round(n * 0.1));
}
