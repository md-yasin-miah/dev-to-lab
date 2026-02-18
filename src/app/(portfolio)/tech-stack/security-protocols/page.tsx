import type { Metadata } from "next";
import SecurityProtocolsPage from "@/pages/portfolio/tech-stack/SecurityProtocolsPage";

export const metadata: Metadata = {
  title: "Security Protocols | DevToLab Tech Stack",
  description:
    "Enterprise-grade security: data encryption, compliance frameworks (GDPR, HIPAA), and penetration testing. Protect your IP and user data with military-grade practices.",
  openGraph: {
    title: "Security Protocols | DevToLab",
    description:
      "Military-grade encryption, compliance readiness, and continuous vulnerability monitoring.",
    type: "website",
  },
};

export default function SecurityProtocols() {
  return <SecurityProtocolsPage />;
}
