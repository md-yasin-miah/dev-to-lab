import type { Metadata } from "next";
import TechStackPage from "@/pages/portfolio/tech-stack/TechStackPage";

export const metadata: Metadata = {
  title: "DevToLab Stack | Immersive Tech Ecosystem & Data Integrity",
  description:
    "Engineering high-performance software for visionary startups and global leaders. Explore our world-class stack: React, Next.js, Flutter, Go, Supabase, PostgreSQL, and AI-native tooling.",
  openGraph: {
    title: "Technology Stack | DevToLab",
    description:
      "World-class stack for global ambitions. Pixel-perfect frontends, high-availability backends, data integrity, and AI innovation.",
    type: "website",
  },
};

export default function TechStack() {
  return <TechStackPage />;
}
