import { Routes } from "@/lib/routes";

export const COMPANY_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Case Studies", href: "#work" },
  { label: "The Stack", href: "#stack" },
  { label: "Careers", href: "#" },
];

export const RESOURCE_LINKS = [
  { label: "Blog", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Security", href: Routes.security },
  { label: "Open Source", href: "#" },
];

export const FOOTER_BOTTOM_LINKS = [
  { label: "Privacy Policy", href: Routes.privacyPolicy },
  { label: "Terms of Service", href: Routes.termsOfService },
  { label: "Security", href: Routes.security },
];
