import { slugify } from "./utils";

export const Routes = {
  // portfolio routes
  home: "/",
  services: "/services",
  startProject: "/start-project",
  aboutUs: "/about-us",
  caseStudies: {
    root: "/case-studies",
    details: (slug: string) => `/case-studies/${slugify(slug)}`,
  },
  techStack: {
    root: "/tech-stack",
    systemArchitecture: "/tech-stack/system-architecture",
    devOps: "/tech-stack/dev-ops",
    securityProtocols: "/tech-stack/security-protocols",
  },
  careers: "/careers",
  reportBug: "/report-bug",
  faq: "/faq",
  //footer routes
  blog: "/blog",
  documentation: "/documentation",
  openSource: "/open-source",
  // legal routes
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
  security: "/security",
};
