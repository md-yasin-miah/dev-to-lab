import type { Metadata } from "next";
import {
  Globe,
  Cloud,
  Database,
  Lock,
  RefreshCw,
  FileText,
  ShieldCheck,
  Search,
  CheckCircle,
} from "lucide-react";
import { Aside } from "@/components/portfolio/legal/Aside";

export const metadata: Metadata = {
  title: "Security & Compliance Protocols | DevToLab",
  description:
    "Enterprise-grade technical safeguards built on Vercel, AWS, and Supabase. AES-256 encryption, SOC2 Type II audited, GDPR compliant, and ISO 27001 verified.",
  openGraph: {
    title: "Security & Compliance | DevToLab",
    description:
      "Comprehensive security architecture protecting your data with enterprise-grade encryption and continuous compliance monitoring.",
    type: "website",
  },
};

const SIDEBAR_ITEMS = [
  {
    id: "overview",
    label: "Overview",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    id: "infrastructure",
    label: "Infrastructure Layers",
    icon: <Cloud className="h-5 w-5" />,
  },
  {
    id: "data-protection",
    label: "Data Protection",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    id: "engineering",
    label: "Engineering Practices",
    icon: <Search className="h-5 w-5" />,
  },
  {
    id: "compliance",
    label: "Compliance Standards",
    icon: <CheckCircle className="h-5 w-5" />,
  },
];

function StatusSidebar() {
  return (
    <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">
        System Secure
      </span>
    </div>
  );
}

const INFRA_LAYERS = [
  {
    title: "Edge Network (Vercel)",
    icon: Globe,
    description:
      "Global DDoS protection, automated SSL encryption, and edge middleware filtering to block malicious requests before they reach your origin.",
    checks: ["Global WAF Filtering", "TLS 1.3 Encryption"],
  },
  {
    title: "Cloud Infrastructure (AWS)",
    icon: Cloud,
    description:
      "Isolated VPC environments with granular IAM policies. All compute resources are ephemeral and scanned continuously for configuration drift.",
    checks: ["VPC Isolation", "Hardware-level Security"],
  },
  {
    title: "Database Layer (Supabase)",
    icon: Database,
    description:
      "PostgreSQL security with Row Level Security (RLS). Point-in-time recovery and automated backups with 99.99% durability.",
    checks: ["Row-Level Security", "PITR Recovery"],
  },
];

const COMPLIANCE_STANDARDS = [
  { name: "SOC2", subtitle: "Type II Audited" },
  { name: "GDPR", subtitle: "Compliant" },
  { name: "ISO 27001", subtitle: "Verified" },
  { name: "HIPAA", subtitle: "Ready" },
];

export default function SecurityPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl grow flex-col gap-12 px-6 py-10 md:flex-row md:px-20">
      {/* Sidebar */}
      <Aside sidebar={SIDEBAR_ITEMS} sidebarExtra={<StatusSidebar />} />

      {/* Content */}
      <div className="max-w-3xl flex-1">
        {/* Hero Header */}
        <section className="relative mb-16 scroll-mt-28" id="overview">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <ShieldCheck className="h-4 w-4 text-electric-violet" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Security &amp; Compliance v3.0
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tighter text-white md:text-5xl">
            Enterprise-Grade <br />
            <span className="bg-linear-to-r from-electric-violet to-violet-400 bg-clip-text text-transparent">
              Technical Safeguards
            </span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-slate-400">
            Comprehensive security architecture built on Vercel, AWS, and
            Supabase layers. Protecting your data with AES-256 encryption and
            continuous compliance monitoring.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-linear-to-r from-electric-violet to-violet-500 px-8 py-4 font-bold text-white transition-transform hover:scale-105">
              <FileText className="h-5 w-5" />
              Download SOC2 Report
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-colors hover:bg-white/10">
              <svg
                className="h-5 w-5"
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
              Technical Specs
            </button>
          </div>
        </section>

        {/* Infrastructure Layers */}
        <section className="mb-16 scroll-mt-28" id="infrastructure">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-white">
              Infrastructure Security Layers
            </h2>
            <p className="text-slate-400">
              Distributed multi-layer defense strategy for global performance
              and safety.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {INFRA_LAYERS.map((layer) => (
              <div
                key={layer.title}
                className="group rounded-2xl border border-white/5 bg-surface-dark p-8 transition-colors hover:border-electric-violet/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:text-electric-violet">
                  <layer.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {layer.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  {layer.description}
                </p>
                <ul className="space-y-3">
                  {layer.checks.map((check) => (
                    <li
                      key={check}
                      className="flex items-center gap-2 text-xs font-medium text-slate-300"
                    >
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-16 scroll-mt-28" id="data-protection">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-500">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider">
              AES-256 Verified
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white">
            Data Protection &amp; <br />
            Encryption Standards
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric-violet/20 text-electric-violet">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="mb-1 font-bold text-white">
                  Encryption at Rest
                </h4>
                <p className="text-sm text-slate-400">
                  All sensitive user data is encrypted using Advanced Encryption
                  Standard (AES) with 256-bit keys, managed by hardware security
                  modules (HSM).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric-violet/20 text-electric-violet">
                <RefreshCw className="h-5 w-5" />
              </div>
              <div>
                <h4 className="mb-1 font-bold text-white">
                  Encryption in Transit
                </h4>
                <p className="text-sm text-slate-400">
                  All data moving between clients and our servers is protected
                  by TLS 1.3 or higher, ensuring perfect forward secrecy and
                  resistance to interception.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric-violet/20 text-electric-violet">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h4 className="mb-1 font-bold text-white">Data Minimization</h4>
                <p className="text-sm text-slate-400">
                  We strictly follow GDPR principles of data minimization—only
                  collecting and retaining data necessary for core service
                  delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Security Audit Log Terminal */}
          <div className="relative mt-12">
            <div className="absolute inset-0 rounded-full bg-electric-violet/20 blur-[80px]" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-dark shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/50" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  security_audit.log
                </span>
              </div>
              <div className="space-y-2 p-6 font-mono text-xs text-slate-400">
                <p>
                  <span className="text-electric-violet">INFO</span> [2023-10-27
                  14:02] Initializing AES-256 Engine...
                </p>
                <p>
                  <span className="text-emerald-500">SUCCESS</span> Master Key
                  Rotation (HSM-01) Complete.
                </p>
                <p>
                  <span className="text-slate-500">DEBUG</span> [2023-10-27
                  14:02] Validating RLS Policies...
                </p>
                <p>
                  <span className="text-emerald-500">SUCCESS</span> 452 Policy
                  Assertions Passed.
                </p>
                <p>
                  <span className="text-electric-violet">INFO</span> [2023-10-27
                  14:03] Snyk Vulnerability Scan: 0 Found.
                </p>
                <p className="pt-4 font-bold text-white">
                  {"// ENCRYPTION_LAYER_ACTIVE"}
                </p>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-electric-violet/20">
                  <div className="h-full w-[88%] bg-electric-violet" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering & Compliance */}
        <section className="mb-16 scroll-mt-28" id="engineering">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Engineering Practices
          </h3>
          <div className="grid gap-4">
            <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/5 p-5">
              <Search className="mt-0.5 h-5 w-5 shrink-0 text-electric-violet" />
              <div>
                <h5 className="text-sm font-bold text-white">
                  Mandatory PR Reviews
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  No code enters production without a secondary review from a
                  senior security engineer.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/5 p-5">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-electric-violet" />
              <div>
                <h5 className="text-sm font-bold text-white">
                  Automated Dependency Scanning
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Continuous monitoring for vulnerabilities using GitHub
                  Advanced Security and Snyk.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 scroll-mt-28" id="compliance">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Compliance Standards
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {COMPLIANCE_STANDARDS.map((standard) => (
              <div
                key={standard.name}
                className="group flex flex-col items-center rounded-xl border border-white/5 bg-white/5 p-6 text-center transition-all hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_15px_-5px_rgba(16,185,129,0.4)]">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                </div>
                <span className="text-lg font-black tracking-widest text-white">
                  {standard.name}
                </span>
                <span className="mt-1 text-[10px] font-bold uppercase text-slate-500">
                  {standard.subtitle}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
