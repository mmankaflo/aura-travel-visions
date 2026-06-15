export const SITE = {
  name: "Aura Travel & Tours",
  tagline: "Explore the World with Confidence",
  phone: "+27 11 234 5678",
  phoneHref: "tel:+27112345678",
  whatsapp: "+27 67 810 0789",
  whatsappHref: "https://wa.me/27678100789?text=Hi%20Aura%20Travel%2C%20I%27d%20like%20a%20quote",
  email: "info@AuraTravelandTours.onmicrosoft.com",
  emailHref: "mailto:info@AuraTravelandTours.onmicrosoft.com",
  address: "Sandton City, Johannesburg, South Africa",
  hours: "Mon–Fri 08:00–18:00 · Sat 09:00–14:00",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/plan-trip", label: "Plan a Trip" },
  { to: "/corporate", label: "Corporate" },
  { to: "/visa", label: "Visa" },
  { to: "/religious", label: "Religious Tours" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
