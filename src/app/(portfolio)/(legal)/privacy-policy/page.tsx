import type { Metadata } from "next";
import {
  Info,
  Database,
  BarChart3,
  Share2,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { Aside } from "@/components/portfolio/legal/Aside";

export const metadata: Metadata = {
  title: "Privacy Policy - Technical Detailed | DevToLab",
  description:
    "Technical protocols, data lifecycle management, and privacy engineering standards at DevToLab. Zero-trust architecture and data minimization across all software delivery pipelines.",
  openGraph: {
    title: "Privacy Policy | DevToLab",
    description:
      "Technical privacy policy covering data collection, usage, third-party sharing, user rights, and security measures.",
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
    id: "data-collection",
    label: "1. Data Collection",
    icon: <Database className="h-5 w-5" />,
  },
  {
    id: "usage",
    label: "2. Usage & Processing",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    id: "sharing",
    label: "3. Third-party Sharing",
    icon: <Share2 className="h-5 w-5" />,
  },
  {
    id: "user-rights",
    label: "4. User Rights",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    id: "security",
    label: "5. Security Measures",
    icon: <Lock className="h-5 w-5" />,
  },
];

const COMPLIANCE_BADGES = ["GDPR", "CCPA", "SOC2 TYPE II"];

function ComplianceSidebar() {
  return (
    <>
      <div className="rounded-xl border border-white/5 bg-surface-dark/40 p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">
            Compliance Status
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {COMPLIANCE_BADGES.map((badge) => (
            <span
              key={badge}
              className="rounded border border-cyber-blue/20 bg-cyber-blue/10 px-2 py-0.5 text-[10px] font-bold text-cyber-blue"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
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
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        Download Technical PDF
      </button>
    </>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl grow flex-col gap-12 px-6 py-10 md:flex-row md:px-20">
      {/* Sidebar */}
      <Aside sidebar={SIDEBAR_ITEMS} sidebarExtra={<ComplianceSidebar />} />

      {/* Content */}
      <div className="max-w-3xl flex-1">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyber-blue">
              Legal Framework v2.4.0
            </span>
            <span className="h-px w-8 bg-white/10" />
            <span className="text-xs text-slate-500">
              Last Updated: October 24, 2023
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Privacy Policy <br />
            <span className="text-2xl font-medium tracking-normal text-cyber-blue md:text-3xl">
              — Technical Detailed Overview
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-400">
            This document outlines the technical protocols, data lifecycle
            management, and privacy engineering standards practiced at DevToLab.
            We prioritize zero-trust architecture and data minimization across
            all our software delivery pipelines.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16 scroll-mt-28" id="introduction">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
              <span className="text-cyber-blue">#</span> Introduction
            </h2>
            <div className="space-y-4 leading-relaxed text-slate-400">
              <p>
                DevToLab (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                committed to protecting the privacy of our clients and
                end-users. This technical policy describes how we collect, use,
                and handle data when you interact with our developed
                applications, websites, and internal infrastructure.
              </p>
              <p>
                Our approach is &quot;Privacy by Design,&quot; ensuring that
                data protection is integrated into the system engineering
                process rather than being an afterthought.
              </p>
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="mb-16 scroll-mt-28" id="data-collection">
          <div className="mb-6">
            <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold text-white">
              <span className="text-cyber-blue">1.</span> Data Collection
            </h2>
            <p className="text-slate-400">
              Technical logs and client information categorization.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="glass-panel rounded-xl border-l-4 border-l-cyber-blue p-6">
              <h3 className="mb-3 flex items-center gap-2 font-bold text-white">
                <svg
                  className="h-5 w-5 text-cyber-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Technical Log Data
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                Our servers automatically record information that your browser
                or application sends. This includes:
              </p>
              <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {[
                  "IP Address (IPv4/IPv6)",
                  "User-Agent Strings",
                  "HTTP Request Headers",
                  "Timestamp (UTC)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded bg-white/5 p-2 font-mono text-xs text-slate-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyber-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel rounded-xl p-6">
              <h3 className="mb-3 flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="h-5 w-5 text-cyber-blue" />
                Client &amp; Identity Data
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                For service delivery, we collect name, corporate email address,
                and billing information. All sensitive identity data is
                encrypted at rest using AES-256 and in transit via TLS 1.3.
              </p>
            </div>
          </div>
        </section>

        {/* Usage & Processing */}
        <section className="mb-16 scroll-mt-28" id="usage">
          <div className="mb-6">
            <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold text-white">
              <span className="text-cyber-blue">2.</span> Usage &amp; Processing
            </h2>
            <p className="text-slate-400">
              How data flows through our infrastructure to improve services.
            </p>
          </div>
          <div className="glass-panel relative overflow-hidden rounded-2xl p-8">
            <div className="pointer-events-none absolute right-0 top-0 p-10 opacity-10">
              <Share2 className="h-28 w-28 text-cyber-blue" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyber-blue/20">
                  <svg
                    className="h-5 w-5 text-cyber-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold text-white">
                    Service Improvement
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Aggregated and anonymized data is used to identify
                    performance bottlenecks and optimize API latency across our
                    serverless stack.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyber-blue/20">
                  <svg
                    className="h-5 w-5 text-cyber-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold text-white">
                    Communication Pipeline
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Client contact information is utilized for critical security
                    patches, deployment notifications, and contractual
                    obligations through our secure CRM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third-party Sharing */}
        <section className="mb-16 scroll-mt-28" id="sharing">
          <div className="mb-6">
            <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold text-white">
              <span className="text-cyber-blue">3.</span> Third-party Sharing
            </h2>
            <p className="text-slate-400">
              Infrastructure partners and sub-processors.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                name: "Vercel Inc.",
                role: "Frontend Edge Hosting",
                iconColor: "text-white",
              },
              {
                name: "Supabase",
                role: "PostgreSQL Persistence",
                iconColor: "text-emerald-500",
              },
              {
                name: "Auth0 / Okta",
                role: "Identity Management",
                iconColor: "text-sky-500",
              },
              {
                name: "Sentry.io",
                role: "Error Reporting",
                iconColor: "text-rose-500",
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="glass-panel group flex cursor-default items-center gap-4 rounded-xl p-5 transition-colors hover:border-cyber-blue/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded border border-white/10 bg-black transition-colors group-hover:border-cyber-blue">
                  <Database className={`h-5 w-5 ${partner.iconColor}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {partner.name}
                  </h4>
                  <p className="text-[11px] font-bold uppercase tracking-tighter text-slate-500">
                    {partner.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs italic text-slate-500">
            Note: All third-party providers are strictly vetted for GDPR
            compliance and Data Processing Agreements (DPA) are in place.
          </p>
        </section>

        {/* User Rights */}
        <section className="mb-16 scroll-mt-28" id="user-rights">
          <div className="mb-6">
            <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold text-white">
              <span className="text-cyber-blue">4.</span> User Rights
            </h2>
            <p className="text-slate-400">
              Your rights under GDPR and CCPA frameworks.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-cyber-blue/20 bg-cyber-blue/5 p-6">
              <h4 className="mb-4 font-bold text-white">
                You have the legal right to:
              </h4>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                {[
                  "Request access to stored data",
                  "Rectify inaccurate personal info",
                  'Request data erasure ("Right to be forgotten")',
                  "Object to automated processing",
                ].map((right) => (
                  <div key={right} className="flex gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyber-blue"
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
                    <span className="text-sm text-slate-300">{right}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-xl p-6">
              <h4 className="mb-2 font-bold text-white">
                How to Exercise Your Rights
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                To initiate a Data Subject Access Request (DSAR), please contact
                our Legal Engineering team via the dedicated portal or email
                below.
              </p>
              <a
                className="font-mono text-sm text-cyber-blue hover:underline"
                href="mailto:privacy@devtolab.com"
              >
                privacy@devtolab.com
              </a>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16 scroll-mt-28" id="security">
          <div className="mb-6">
            <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold text-white">
              <span className="text-cyber-blue">5.</span> Security Measures
            </h2>
            <p className="text-slate-400">
              Technical overview of encryption and data residency.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-bold text-slate-200">
                  <Lock className="h-5 w-5 text-cyber-blue" />
                  Encryption
                </h4>
                <p className="text-xs leading-relaxed text-slate-400">
                  We employ field-level encryption for PII. Master keys are
                  stored in hardware security modules (HSM) with strict rotation
                  policies every 90 days.
                </p>
              </div>
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-bold text-slate-200">
                  <svg
                    className="h-5 w-5 text-cyber-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Data Residency
                </h4>
                <p className="text-xs leading-relaxed text-slate-400">
                  By default, data for EU-based clients is pinned to AWS
                  eu-central-1 (Frankfurt) or eu-west-1 (Ireland) regions to
                  ensure compliance with local laws.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
