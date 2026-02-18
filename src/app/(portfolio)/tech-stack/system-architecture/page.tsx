import type { Metadata } from "next";
import SystemsArchitecturePage from "@/pages/portfolio/tech-stack/SystemsArchitecturePage";

export const metadata: Metadata = {
  title: "System Architecture & Stack | DevToLab Tech Stack",
  description:
    "Production-ready system architecture: Next.js frontend, Vercel deployment, Supabase/PostgreSQL data engine. CI/CD, observability, and infrastructure as code.",
  openGraph: {
    title: "System Architecture & Stack | DevToLab",
    description:
      "Battle-tested technical stack for scalable, secure, high-performance digital products.",
    type: "website",
  },
};

export default function SystemArchitecture() {
  return <SystemsArchitecturePage />;
}
