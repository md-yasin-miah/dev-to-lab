"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Scale,
  Terminal,
  Search,
  Fingerprint,
  Rocket,
  CheckCircle,
} from "lucide-react";
import { Routes } from "@/lib/routes";
import Resource from "@/components/portfolio/sections/Resource";

const SECURITY_CARDS = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "AES-256 at rest and TLS 1.3 in transit. We ensure that your data is undecipherable to unauthorized entities at every stage of the lifecycle.",
    items: ["End-to-End Encryption", "Key Management Service (KMS)"],
    glow: "bg-emerald-500/5",
  },
  {
    icon: Scale,
    title: "Compliance Frameworks",
    description: "Full GDPR and HIPAA readiness. We implement strict access controls and audit trails required for regulated industries.",
    items: ["HIPAA Certified Workflows", "GDPR Data Subject Rights"],
    glow: "bg-blue-500/5",
  },
  {
    icon: Terminal,
    title: "Penetration Testing",
    description: "Bi-annual third-party audits and automated daily vulnerability scanning to identify and neutralize threats before they emerge.",
    items: ["White-box Security Audits", "Continuous CI/CD Scanning"],
    glow: "bg-purple-500/5",
  },
];

const ROADMAP_PHASES = [
  { phase: "Phase 01", title: "Architectural Review", desc: "Threat modeling and attack surface analysis during the discovery phase of every engineering project.", icon: Search },
  { phase: "Phase 02", title: "Identity & Access", desc: "Implementation of Zero Trust architecture, Multi-Factor Authentication (MFA), and RBAC protocols.", icon: Fingerprint },
  { phase: "Phase 03", title: "Automated Hardening", desc: "Integration of SAST/DAST tools into the CI/CD pipeline for real-time code security analysis.", icon: Rocket },
];

const METRICS = [
  { value: "100%", label: "Data Sovereignty" },
  { value: "0", label: "Critical Breaches" },
  { value: "24/7", label: "SOC Monitoring" },
  { value: "ISO", label: "Standard Aligned" },
];

export default function SecurityProtocolsPage() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-200">
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-32">
        {/* Hero */}
        <header className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-500">
            <Lock className="h-3.5 w-3.5" />
            <span className="text-xs font-bold uppercase">Enterprise Grade Security</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            Security <span className="bg-linear-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent">Protocols</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400">
            Protecting your intellectual property and user data with military-grade encryption, rigorous compliance standards, and continuous vulnerability monitoring.
          </p>
        </header>

        {/* Security cards */}
        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SECURITY_CARDS.map((card) => (
            <div key={card.title} className="glass-panel group relative overflow-hidden rounded-2xl p-8">
              <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full blur-2xl ${card.glow}`} />
              <card.icon className="mb-6 h-10 w-10 text-emerald-500" />
              <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-400">{card.description}</p>
              <ul className="space-y-3 text-xs font-medium">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-emerald-500">
                    <CheckCircle className="h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <section className="mb-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Security Implementation Roadmap</h2>
            <p className="text-slate-500">A systematic approach to hardening your application infrastructure from day one.</p>
          </div>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-linear-to-b from-emerald-500 to-transparent md:block" />
            <div className="space-y-12">
              {ROADMAP_PHASES.map((phase, i) => (
                <div
                  key={phase.phase}
                  className={`relative flex flex-col items-center gap-8 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-500">{phase.phase}</h4>
                    <h3 className="mb-2 text-xl font-bold">{phase.title}</h3>
                    <p className="text-sm text-slate-400">{phase.desc}</p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <phase.icon className="h-5 w-5 text-black" />
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + metrics */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
          <div className="relative z-10 flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="mb-6 text-3xl font-bold leading-tight">Ready for a Technical Security Deep-Dive?</h2>
              <p className="mb-8 text-slate-400">
                Our cybersecurity architects are ready to review your existing stack and provide a comprehensive gap analysis report at no cost.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={Routes.startProject}
                  className="rounded-xl bg-emerald-500 px-8 py-4 font-bold text-black transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  Schedule Security Audit
                </Link>
                <Link
                  href={Routes.security}
                  className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
                >
                  Download whitepaper
                </Link>
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 md:w-auto">
              {METRICS.map((m) => (
                <div key={m.label} className="glass-panel rounded-2xl p-6 text-center">
                  <p className="mb-1 text-3xl font-bold text-emerald-500">{m.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource cards */}
        <section className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="group relative h-56 overflow-hidden rounded-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaHhl5hRL1GhYi9fBJs_yhESg3WNfsDjIkN1gtbdZEDfPOz4aUhUfokm6jY0m-kmCRDTzETL0dmqHEvY7i0i65DyyQNZ8AN0ubwdID-DPmk60T8mOiZLh1qLmxd1ZvI1bOQ7WD-xmNQj_WHLM6Cg3Bn39_IqMl97qp_uopcBBn01H6vLVmFofQ-ZL2YkdNqFgl7_Bs6dzM4rdcFbsv5umM4giKPOVkHpahRc_lJonv0J4rXhDUB2xwOvb3i5GuFkQaYox5rOa6eLm2"
              alt=""
              fill
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-500">Documentation</p>
              <h4 className="text-xl font-bold">Privacy Policy & Terms</h4>
              <p className="mt-1 text-sm text-slate-400">Review our legal commitment to data protection.</p>
            </div>
          </div>
          <div className="group relative h-56 overflow-hidden rounded-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkpfgMQUgMoaLBPyY8v6IAq2FR67FIjB0VO5XzBEW-9tEwFGtHy9-lmOwKFa9IU9CKIDbsLT2yV2A56_QRICsQxCrljLp3KePY_sNNietCOhWiQMxJsYRuuJZtO6SxnQfi9FMdop7pj0qBWV6__GSi93m8u_brxXV7s0balIBkDEboWsh0SAbCFOLWKpbXrRA9j40v-APrbirUJP9jAD1swx92D7hEnKwIybsooIZVcVeODxb6hofPOzLkt94mgq2ByPDKtZRzCZsa"
              alt=""
              fill
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-500">DevOps</p>
              <h4 className="text-xl font-bold">Infrastructure Standards</h4>
              <p className="mt-1 text-sm text-slate-400">How we build resilient, secure cloud environments.</p>
            </div>
          </div>
        </section>
        <Resource/>
      </main>
    </div>
  );
}
