import type { Metadata } from "next";
import CaseStudiesPage from "@/pages/portfolio/CaseStudiesPage";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | DevToLab",
  description:
    "Explore DevToLab's deep tech portfolio — scalable web architectures, native mobile systems, AI/ML engines, and award-winning UI/UX design systems.",
  openGraph: {
    title: "Portfolio & Case Studies | DevToLab",
    description:
      "Engineering impact through high-performance digital ecosystems. Web apps, mobile, UI/UX, and AI/ML case studies.",
    type: "website",
  },
};

export default function CaseStudies() {
  return <CaseStudiesPage />;
}
