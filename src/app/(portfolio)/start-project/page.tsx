import type { Metadata } from "next";
import StartProjectPage from "@/pages/portfolio/StartProjectPage";

export const metadata: Metadata = {
  title: "Contact DevToLab | Start Your Project",
  description:
    "Ready to build something amazing? Fill out the form or book a direct technical consultation with our engineering team in Dhaka. Typical response time: < 12 hours.",
  openGraph: {
    title: "Start a Project | DevToLab",
    description:
      "Get in touch with DevToLab's engineering team. Book a discovery call, chat on WhatsApp, or send us a project proposal.",
    type: "website",
  },
};

export default function StartProject() {
  return <StartProjectPage />;
}
