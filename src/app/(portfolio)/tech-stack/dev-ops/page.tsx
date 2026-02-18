import type { Metadata } from "next";
import DevOpsPage from "@/pages/portfolio/tech-stack/DevOpsPage";

export const metadata: Metadata = {
  title: "DevOps & Infrastructure | DevToLab Tech Stack",
  description:
    "Reliable DevOps at scale: zero-downtime deployments, monitoring & observability, and elastic scaling across AWS, GCP, and Azure.",
  openGraph: {
    title: "DevOps & Infrastructure | DevToLab",
    description:
      "High-performance cloud architecture for zero-downtime, security, and infinite scalability.",
    type: "website",
  },
};

export default function DevOps() {
  return <DevOpsPage />;
}