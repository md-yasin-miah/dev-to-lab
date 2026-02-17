import type { Metadata } from "next";
import ReportBugPage from "@/pages/portfolio/ReportBugPage";

export const metadata: Metadata = {
  title: "Report a Bug | DevToLab",
  description:
    "Found a bug? Use our anomaly detection protocol to report issues with detailed reproduction steps, evidence, and auto-detected system logs.",
  openGraph: {
    title: "Report a Bug | DevToLab",
    description:
      "Submit a bug report to the DevToLab engineering team with system telemetry and evidence.",
    type: "website",
  },
};

export default function ReportBug() {
  return <ReportBugPage />;
}
