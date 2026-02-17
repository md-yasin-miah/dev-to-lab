import type { Metadata } from "next";
import {
  Info,
  Code2,
  ShieldCheck,
  CreditCard,
  Gavel,
  XCircle,
} from "lucide-react";
import { Aside } from "@/components/portfolio/legal/Aside";

export const metadata: Metadata = {
  title: "Terms of Service - Service Agreement | DevToLab",
  description:
    "Official Terms of Service and Service Agreement for DevToLab Software Agency. Covers service scope, intellectual property, payment terms, liability, and termination clauses.",
  openGraph: {
    title: "Terms of Service | DevToLab",
    description:
      "Professional service agreement governing the relationship between DevToLab and clients.",
    type: "website",
  },
};

const SIDEBAR_ITEMS = [
  {
    id: "introduction",
    label: "Introduction",
    icon: <Info className="h-5 w-5" />,
  },
  {
    id: "service-scope",
    label: "1. Service Scope",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    id: "ip-rights",
    label: "2. Intellectual Property",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    id: "payment-terms",
    label: "3. Payment Terms",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    id: "liability",
    label: "4. Liability & Warranty",
    icon: <Gavel className="h-5 w-5" />,
  },
  {
    id: "termination",
    label: "5. Termination",
    icon: <XCircle className="h-5 w-5" />,
  },
];

function DownloadSidebar() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="mb-3 text-xs leading-relaxed text-slate-400">
        Need a signed copy for your legal department?
      </p>
      <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-white/20">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download PDF
      </button>
    </div>
  );
}

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl grow flex-col gap-12 px-6 py-10 md:flex-row md:px-20">
      {/* Sidebar */}
      <Aside sidebar={SIDEBAR_ITEMS} sidebarExtra={<DownloadSidebar />} />

      {/* Content */}
      <div className="max-w-3xl flex-1">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded border border-cyber-blue/30 bg-cyber-blue/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cyber-blue">
              Official Document
            </span>
            <span className="text-xs font-medium text-slate-500">
              Last Updated: October 24, 2023
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            Terms of Service <span className="text-cyber-blue">.</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-400">
            This Service Agreement (&quot;Agreement&quot;) governs the
            professional relationship between DevToLab Software Agency
            (&quot;Agency&quot;) and the Client. By engaging our services, you
            agree to the following terms and conditions designed to protect both
            parties and ensure project success.
          </p>
        </div>

        <div className="space-y-16">
          {/* Section 1: Service Scope */}
          <section className="scroll-mt-24" id="service-scope">
            <div className="mb-6 flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyber-blue/20 bg-cyber-blue/10 text-lg font-bold text-cyber-blue">
                1
              </span>
              <h2 className="pt-1 text-2xl font-bold text-white">
                Service Scope
              </h2>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed text-slate-400">
                DevToLab provides specialized software engineering and design
                services, including but not limited to web application
                development, mobile application development (iOS/Android), API
                integration, and UI/UX design.
              </p>
              <div className="my-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/2 p-5">
                  <h4 className="mb-2 flex items-center gap-2 font-semibold text-white">
                    <svg
                      className="h-4 w-4 text-cyber-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Web Development
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-500">
                    Custom React/Next.js applications, backend systems, and
                    performance optimization.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/2 p-5">
                  <h4 className="mb-2 flex items-center gap-2 font-semibold text-white">
                    <svg
                      className="h-4 w-4 text-cyber-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Mobile Development
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-500">
                    Native and cross-platform mobile solutions for modern device
                    ecosystems.
                  </p>
                </div>
              </div>
              <p className="italic leading-relaxed text-slate-400">
                Specific project deliverables, timelines, and milestones are
                detailed in the individual Statement of Work (SOW) signed by
                both parties.
              </p>
            </div>
          </section>

          {/* Section 2: Intellectual Property */}
          <section className="scroll-mt-24" id="ip-rights">
            <div className="mb-6 flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyber-blue/20 bg-cyber-blue/10 text-lg font-bold text-cyber-blue">
                2
              </span>
              <h2 className="pt-1 text-2xl font-bold text-white">
                Intellectual Property
              </h2>
            </div>
            <div className="mb-6 rounded-r-xl border-l-4 border-cyber-blue bg-cyber-blue/5 p-6">
              <p className="text-sm font-medium text-slate-300">
                <span className="font-bold text-cyber-blue">
                  Ownership Rule:
                </span>{" "}
                Upon full and final payment of all outstanding invoices,
                DevToLab hereby assigns all right, title, and interest in the
                Work Product to the Client.
              </p>
            </div>
            <div className="space-y-4 leading-relaxed text-slate-400">
              <p>
                <strong className="text-slate-200">2.1 Retained Rights:</strong>{" "}
                DevToLab retains ownership of any pre-existing code, frameworks,
                tools, or libraries developed prior to or independently of the
                Agreement (&quot;Background IP&quot;).
              </p>
              <p>
                <strong className="text-slate-200">2.2 License Grant:</strong>{" "}
                To the extent Background IP is incorporated into the Work
                Product, Agency grants Client a non-exclusive, perpetual,
                royalty-free license to use said IP solely as part of the Work
                Product.
              </p>
              <p>
                <strong className="text-slate-200">
                  2.3 Third-Party Rights:
                </strong>{" "}
                Use of third-party assets (e.g., stock photos, licensed fonts,
                open-source libraries) is subject to the respective third-party
                license terms.
              </p>
            </div>
          </section>

          {/* Section 3: Payment Terms */}
          <section className="scroll-mt-24" id="payment-terms">
            <div className="mb-6 flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyber-blue/20 bg-cyber-blue/10 text-lg font-bold text-cyber-blue">
                3
              </span>
              <h2 className="pt-1 text-2xl font-bold text-white">
                Payment Terms
              </h2>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/2">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/5 text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                  <tr>
                    <th className="px-6 py-4">Billing Category</th>
                    <th className="px-6 py-4">Standard Term</th>
                    <th className="px-6 py-4">Late Penalty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-400">
                  <tr>
                    <td className="px-6 py-4 font-medium text-white">
                      Milestone Payments
                    </td>
                    <td className="px-6 py-4">Net 15</td>
                    <td className="px-6 py-4">1.5% per month</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-white">
                      Retainer Services
                    </td>
                    <td className="px-6 py-4">Due on receipt</td>
                    <td className="px-6 py-4">Fixed $50/day fee</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-white">
                      Hourly Overage
                    </td>
                    <td className="px-6 py-4">Monthly Billing</td>
                    <td className="px-6 py-4">Suspension of service</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Liability */}
          <section className="scroll-mt-24" id="liability">
            <div className="mb-6 flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyber-blue/20 bg-cyber-blue/10 text-lg font-bold text-cyber-blue">
                4
              </span>
              <h2 className="pt-1 text-2xl font-bold text-white">
                Liability &amp; Warranties
              </h2>
            </div>
            <div className="space-y-6 leading-relaxed text-slate-400">
              <p>
                <strong className="text-xs font-bold uppercase tracking-wide text-slate-200">
                  4.1 Limited Warranty:
                </strong>{" "}
                Agency warrants that for a period of 30 days following delivery
                (&quot;Warranty Period&quot;), the software will perform
                substantially in accordance with the specifications.
              </p>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-red-400">
                  Crucial Limitation
                </p>
                <p className="text-sm text-slate-400">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, DEVTOLAB SHALL NOT BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES,
                  INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS INTERRUPTION,
                  EXCEEDING THE TOTAL FEES PAID BY CLIENT UNDER THIS AGREEMENT.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Termination */}
          <section className="scroll-mt-24" id="termination">
            <div className="mb-6 flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyber-blue/20 bg-cyber-blue/10 text-lg font-bold text-cyber-blue">
                5
              </span>
              <h2 className="pt-1 text-2xl font-bold text-white">
                Termination Clauses
              </h2>
            </div>
            <div className="grid gap-8 leading-relaxed text-slate-400 sm:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-white">
                  Termination for Convenience
                </h4>
                <p className="text-sm">
                  Either party may terminate this agreement with 30 days written
                  notice. Client remains responsible for payment of all work
                  performed up to the date of termination.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-white">
                  Termination for Cause
                </h4>
                <p className="text-sm">
                  Immediate termination may occur if either party breaches a
                  material obligation and fails to cure such breach within 10
                  business days of notification.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
