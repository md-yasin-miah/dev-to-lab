import { Routes } from "@/lib/routes";

export const MAIN_NAV_LINKS = [
  { label: "Services", href: Routes.services },
  { label: "Tech Stack", href: Routes.techStack },
  { label: "Case Studies", href: Routes.caseStudies },
  { label: "FAQ", href: Routes.faq }
];

export const FOOTER_COMPANY_LINKS = [
  { label: "About Us", href: Routes.aboutUs },
  { label: "Case Studies", href: Routes.caseStudies },
  { label: "The Stack", href: Routes.techStack },
  { label: "Careers", href: Routes.careers },
  { label: "Report Bug", href: Routes.reportBug },
];

export const FOOTER_RESOURCE_LINKS = [
  { label: "Blog", href: Routes.blog },
  { label: "Documentation", href: Routes.documentation },
  { label: "Security", href: Routes.security },
  { label: "Open Source", href: Routes.openSource },
];

export const FOOTER_BOTTOM_MENU_LINKS = [
  { label: "Privacy Policy", href: Routes.privacyPolicy },
  { label: "Terms of Service", href: Routes.termsOfService },
  { label: "Security", href: Routes.security },
];
