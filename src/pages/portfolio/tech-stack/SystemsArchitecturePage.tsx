"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Cloud,
  Database,
  FormInput,
  Shield,
  Terminal,
  CheckCircle,
} from "lucide-react";
import { Routes } from "@/lib/routes";
import Resource from "@/components/portfolio/sections/Resource";

const ARCH_NODES = [
  {
    icon: Smartphone,
    title: "Frontend Layer",
    sub: "Next.js / React",
    tags: ["SSR/ISR", "Tailwind", "Edge Runtime"],
    color: "text-blue-500",
  },
  {
    icon: Cloud,
    title: "Deployment",
    sub: "Vercel Edge Network",
    tags: ["Global CDN", "Serverless", "WAF"],
    color: "text-violet-500",
    highlight: true,
  },
  {
    icon: Database,
    title: "Data Engine",
    sub: "Supabase / PostgreSQL",
    tags: ["Realtime", "Auth", "Row-Level Security"],
    color: "text-blue-500",
  },
];

const STACK_SPECS = [
  {
    title: "Frontend Scalability",
    icon: FormInput,
    borderHover: "hover:border-blue-500/50",
    rows: [
      { label: "Framework", value: "React 18 / Next.js 14" },
      { label: "Styling", value: "Tailwind CSS / Radix UI" },
      { label: "State Mgmt", value: "Zustand / TanStack Query" },
    ],
    description:
      "Leveraging Next.js for hybrid rendering. We utilize Incremental Static Regeneration (ISR) to ensure fast page loads while keeping content fresh across millions of pages.",
  },
  {
    title: "Database Integrity",
    icon: Shield,
    borderHover: "hover:border-violet-500/50",
    rows: [
      { label: "Primary DB", value: "PostgreSQL (Supabase)" },
      { label: "Caching Layer", value: "Upstash Redis" },
      { label: "Search Engine", value: "Typesense / Algolia" },
    ],
    description:
      "Hardened PostgreSQL with Supabase. We implement strict Row-Level Security (RLS) policies and automatic point-in-time recovery for critical data.",
  },
  {
    title: "CI/CD Pipelines",
    icon: Terminal,
    borderHover: "hover:border-blue-500/50",
    rows: [
      { label: "Orchestration", value: "GitHub Actions" },
      { label: "Testing", value: "Playwright / Vitest" },
      { label: "Observability", value: "Sentry / Axiom" },
    ],
    description:
      "Automated workflows via GitHub Actions. Every commit is linted, tested, and deployed to a preview environment before reaching production.",
  },
];

const IAC_ITEMS = [
  {
    title: "Terraform Orchestration",
    sub: "Cloud resources managed via code.",
  },
  {
    title: "Zero-Trust Networking",
    sub: "Multi-layer security protocols on every endpoint.",
  },
  {
    title: "Automated Scaling",
    sub: "Handle traffic spikes without manual intervention.",
  },
];

const ARCH_METRICS = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<100ms", label: "Avg Response" },
  { value: "AES-256", label: "Encryption" },
  { value: "24/7", label: "Monitoring" },
];

export default function SystemsArchitecturePage() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-200">
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        {/* Hero */}
        <header className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">
              Production Ready Systems
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            System{" "}
            <span className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Architecture
            </span>{" "}
            & Stack
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400">
            We engineer scalable, secure, and high-performance digital products
            using a battle-tested technical stack optimized for speed and
            reliability.
          </p>
        </header>

        {/* Reference architecture */}
        <section className="relative mb-32 overflow-hidden rounded-3xl p-8 md:p-16">
          <div className="absolute -z-10 right-0 top-0 h-[500px] w-[500px] bg-blue-500/5 blur-[120px]" />
          <h2 className="mb-12 text-center text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
            Reference Architecture Overview
          </h2>
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {ARCH_NODES.flatMap((node, index) => [
              <div
                key={node.title}
                className={`glass-panel flex w-full flex-col items-center justify-center rounded-xl border p-4 transition-all duration-300 md:w-64 ${node.highlight ? "border-blue-500/30" : "border-white/10"} hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]`}
              >
                <node.icon className={`mb-4 h-10 w-10 ${node.color}`} />
                <h3 className="mb-1 text-lg font-bold">{node.title}</h3>
                <p className="mb-4 text-xs text-slate-500">{node.sub}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {node.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>,
              ...(index < ARCH_NODES.length - 1
                ? [
                    <div
                      key={`line-${node.title}`}
                      className="hidden h-0.5 flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent md:block"
                    />,
                  ]
                : []),
            ])}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {ARCH_METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-2xl font-bold text-blue-500">{m.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {STACK_SPECS.map((spec) => (
            <div
              key={spec.title}
              className={`glass-panel rounded-2xl p-8 transition-all duration-300 ${spec.borderHover} hover:shadow-lg ${spec.title === "Database Integrity" ? "hover:shadow-violet-500/10" : "hover:shadow-blue-500/10"}`}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <spec.icon className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="mb-4 text-xl font-bold">{spec.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-400">
                {spec.description}
              </p>
              <div className="space-y-3">
                {spec.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-white/5 pb-2 text-xs"
                  >
                    <span className="text-slate-500">{row.label}</span>
                    <span className="font-mono text-white">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure as Code */}
        <section className="mt-32 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-blue-500 to-violet-500 opacity-20 blur-2xl" />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkpfgMQUgMoaLBPyY8v6IAq2FR67FIjB0VO5XzBEW-9tEwFGtHy9-lmOwKFa9IU9CKIDbsLT2yV2A56_QRICsQxCrljLp3KePY_sNNietCOhWiQMxJsYRuuJZtO6SxnQfi9FMdop7pj0qBWV6__GSi93m8u_brxXV7s0balIBkDEboWsh0SAbCFOLWKpbXrRA9j40v-APrbirUJP9jAD1swx92D7hEnKwIybsooIZVcVeODxb6hofPOzLkt94mgq2ByPDKtZRzCZsa"
              alt="High-tech server farm visualization"
              width={640}
              height={400}
              className="relative h-[400px] w-full rounded-2xl object-cover"
              unoptimized
            />
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold">
              Infrastructure as{" "}
              <span className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Code
              </span>
            </h2>
            <p className="mb-8 leading-relaxed text-slate-400">
              We don&apos;t just write application code; we architect the entire
              environment. Our &quot;Everything-as-Code&quot; philosophy ensures
              your infrastructure is reproducible, version-controlled, and
              secure by default.
            </p>
            <ul className="space-y-4">
              {IAC_ITEMS.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                  <div>
                    <p className="text-sm font-bold">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative mt-32 overflow-hidden rounded-3xl p-12">
          <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent" />
          <div className="relative z-10 text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Ready to build on a solid foundation?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-slate-400">
              Schedule a deep-dive technical session with our lead architects to
              discuss how our stack can support your growth.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={Routes.startProject}
                className="rounded-xl bg-white px-8 py-4 font-bold text-black transition-all hover:bg-slate-200"
              >
                Request Technical Specs
              </Link>
              <Link
                href={Routes.documentation}
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
              >
                View GitHub Docs
              </Link>
            </div>
          </div>
        </section>
        <Resource/>
      </main>
    </div>
  );
}
