"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PowerOff,
  BarChart3,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Routes } from "@/lib/routes";
import Resource from "@/components/portfolio/sections/Resource";

const CLOUD_BADGES = [
  { label: "AWS Elite", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxIRpnsZogUitzUDkAFVijOYcuHil9dGIrZYwCmknCNOrSiccfsiByiArmVLaN1QM6mGwnKbro7Do_39Ys2D_lPCdIw4Gta2ZI8ZmDqqSBwtXuD8yzuoS7uxFu1Q96XLAEwa0PU-Bhjc8UqL4c5tulSxu62-0yl7TkYVDWYcGWmOXEI8lkcOqOMGmEQ8b6N0rTpCWWUwtwrNmSQphjrnDiHP-k7IDF9EAlJaMJqLTHNdkbzoR0Oxqkok_WIUnlcoshlmrLHBuRQpFP" },
  { label: "GCP Partner", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ2M6Ia7qu5tLhSeAAU5jxfDyirqXUbfru0zdejL14UfCembcf5_FXSmTBH1hi3tP0Ae2RNIIclzTU4by1A1IwX3a6IxpMR4Oc7FSJNVi97plzCXQtbSwFvqUM85n1zvbJOhEBTeH8VpmJqQ-uF_DKxBdJFqVBdLxiLs8DPFcKFAYVOiFrNiOWmO8Kf30KsSL_Tg1K_UPrMlua2SomNrne5G_2kFu6IwGzwi-yrE9y6p8kfSgU2R7b6deQgMIqlu18jjVPxXytdCHx" },
  { label: "Azure Gold", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0gPEaZKC2nU_iZdpv-qT2gnm55ILiYKmAksFrPet3pTcIWXet_-O2DSbkFdxNbUH-JyTSSybognhFKWMEugHykgibHH9BO1hozBUEQgV14tFtPsvf25u8vcUk7a2zqlwIdoxLIlZA3vEgMAm39789fKcMDWEbPWNj_jugtcf7_R_J1bkZil2rvFiG_WLgwgOKlmy7sHCJOxsXNL6ASzJ0vdeG_l1ihvz81x3DEeQuRp3HQvO2A1SxMX5zso6iXyyu9JFS15vXOUmz" },
];

const FEATURE_CARDS = [
  {
    icon: PowerOff,
    title: "Zero-Downtime Deployments",
    description: "Blue-Green and Canary deployment strategies implemented via Kubernetes to ensure service availability during critical updates.",
    items: ["Traffic Shadowing", "Automated Rollbacks"],
    borderHover: "hover:border-blue-500/50",
    iconBg: "bg-blue-500/20 text-blue-500",
  },
  {
    icon: BarChart3,
    title: "Monitoring & Observability",
    description: "Full-stack visibility with Prometheus, Grafana, and ELK stack. We track 4 golden signals to prevent outages before they happen.",
    chart: true,
    borderHover: "hover:border-violet-500/50",
    iconBg: "bg-violet-500/20 text-violet-500",
  },
  {
    icon: Layers,
    title: "Scaling Strategies",
    description: "Elastic infrastructure that scales horizontally based on real-time demand. Optimized for both performance and cost-efficiency.",
    tags: ["HPA v2", "Serverless Ops", "CDNs"],
    borderHover: "hover:border-sky-400/50",
    iconBg: "bg-sky-400/20 text-sky-400",
  },
];

const PIPELINE_STEPS = [
  { num: "01", color: "border-blue-500 text-blue-500", title: "Infrastructure as Code (IaC)", desc: "Every resource is defined in Terraform or CloudFormation. No manual changes, ever. Immutable infrastructure by default." },
  { num: "02", color: "border-violet-500 text-violet-500", title: "Automated CI/CD", desc: "Comprehensive testing suites including unit, integration, and security scans run on every pull request before merge." },
  { num: "03", color: "border-sky-400 text-sky-400", title: "Production Hardening", desc: "Runtime protection, network policies, and encrypted secrets management (HashiCorp Vault/Cloud KMS)." },
];

const RESOURCE_CARDS = [
  { badge: "Whitepaper", title: "Cloud Native Best Practices", linkText: "Download PDF", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPgAWnlyy3mJZ19CYKfbEgI5GalOIIbSuzbvSE5uZTTjTC9G4XtNAA8O74k8NlBPh_i9eXgcmGwo0_ov3pmZKl9UhbXAiQcz4PMg51AYYcXt67brYYcUaGt_Yylg9ocR1X0ACmvlPJhyxcztoBrijIh-sxmgW-15n5fOr-c5J5zWBwr8PfYLXrFEajQ4H_GHM6CNzRVi17fdVvucoKGPDsUkx5udK0EJWmJu9sFCZRA_p5JgceobefnGJqakkOjdR6YcSHLi5gtnnJ", accent: "primary" },
  { badge: "Compliance", title: "SOC2 & GDPR Framework", linkText: "Security Center", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaHhl5hRL1GhYi9fBJs_yhESg3WNfsDjIkN1gtbdZEDfPOz4aUhUfokm6jY0m-kmCRDTzETL0dmqHEvY7i0i65DyyQNZ8AN0ubwdID-DPmk60T8mOiZLh1qLmxd1ZvI1bOQ7WD-xmNQj_WHLM6Cg3Bn39_IqMl97qp_uopcBBn01H6vLVmFofQ-ZL2YkdNqFgl7_Bs6dzM4rdcFbsv5umM4giKPOVkHpahRc_lJonv0J4rXhDUB2xwOvb3i5GuFkQaYox5rOa6eLm2", accent: "cyber" },
];

export default function DevOpsPage() {
  return (
    <div
      className="min-h-screen bg-background-dark text-slate-200"
      style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    >
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        {/* Hero */}
        <header className="relative mb-20">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Tier 4 Infrastructure Standards</span>
              </div>
              <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Reliable <span className="bg-linear-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">DevOps</span>
                <br />at Scale.
              </h1>
              <p className="mb-8 max-w-xl text-xl leading-relaxed text-slate-400">
                High-performance cloud architecture engineered for zero-downtime, maximum security, and infinite scalability across AWS, GCP, and Azure.
              </p>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                {CLOUD_BADGES.map((b) => (
                  <div key={b.label} className="glass-panel flex items-center gap-2 rounded-lg px-4 py-2">
                    <Image src={b.img} alt={b.label} width={24} height={24} className="grayscale transition-all hover:grayscale-0" unoptimized />
                    <span className="text-sm font-semibold">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full max-w-xl flex-1">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-blue-500/20">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkpfgMQUgMoaLBPyY8v6IAq2FR67FIjB0VO5XzBEW-9tEwFGtHy9-lmOwKFa9IU9CKIDbsLT2yV2A56_QRICsQxCrljLp3KePY_sNNietCOhWiQMxJsYRuuJZtO6SxnQfi9FMdop7pj0qBWV6__GSi93m8u_brxXV7s0balIBkDEboWsh0SAbCFOLWKpbXrRA9j40v-APrbirUJP9jAD1swx92D7hEnKwIybsooIZVcVeODxb6hofPOzLkt94mgq2ByPDKtZRzCZsa"
                  alt="Server Room Interior"
                  width={640}
                  height={384}
                  className="h-96 w-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent" />
                <div className="glass-panel absolute right-4 top-4 rounded-xl border-white/20 p-4">
                  <div className="mb-2 flex items-center gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-tighter text-slate-500">Node Status</span>
                    <span className="font-mono text-[10px] text-sky-400">102.4.0.1</span>
                  </div>
                  <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 bg-sky-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Feature cards */}
        <section className="mb-32 grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURE_CARDS.map((card) => (
            <div key={card.title} className={`glass-panel group rounded-2xl p-8 transition-all ${card.borderHover}`}>
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110 ${card.iconBg}`}>
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-bold">{card.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-400">{card.description}</p>
              {card.items && (
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-mono text-xs text-sky-400">
                      <span className="h-1 w-1 rounded-full bg-sky-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {card.chart && (
                <div className="flex h-20 w-full items-end gap-1 px-2">
                  {[1/2, 3/4, 1/3, 1, 2/3, 5/6].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm bg-violet-500" style={{ height: `${h * 100}%`, opacity: 0.3 + (i * 0.1) }} />
                  ))}
                </div>
              )}
              {card.tags && (
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Deployment pipeline */}
        <section className="mb-32">
          <div className="flex flex-col gap-12 md:flex-row md:items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-bold tracking-tight">
                Our Deployment <span className="text-blue-500">Pipeline</span>
              </h2>
              <div className="space-y-6">
                {PIPELINE_STEPS.map((step, i) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full border font-mono text-sm ${step.color}`}>
                        {step.num}
                      </div>
                      {i < PIPELINE_STEPS.length - 1 && <div className="h-full w-px bg-linear-to-b from-white/20 to-transparent" />}
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold">{step.title}</h4>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel relative w-full flex-1 overflow-hidden rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500/50" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                  <div className="h-2 w-2 rounded-full bg-green-500/50" />
                </div>
                <span className="font-mono text-[10px] text-slate-500">terminal — logs --follow</span>
              </div>
              <div className="space-y-2 font-mono text-[13px]">
                <div className="text-green-400">[12:44:01] <span className="text-white">DEPLOYMENT_STARTED</span>: Production-v4.2.0</div>
                <div className="text-slate-500">[12:44:05] Verifying IaC templates... OK</div>
                <div className="text-slate-500">[12:44:12] Spinning up Canary cluster (3 nodes)...</div>
                <div className="text-sky-400">[12:44:45] Traffic redirection: 10% -&gt; Canary</div>
                <div className="text-yellow-400">[12:45:00] Health check probe: Success (Latency: 42ms)</div>
                <div className="text-green-400">[12:45:30] Full rollout initiated...</div>
                <div className="text-slate-500">[12:46:12] Decommissioning old replicas...</div>
                <div className="font-bold text-sky-400">[12:46:45] DEPLOYMENT COMPLETE. Uptime: 100.0%</div>
                <div className="flex items-center gap-2 pt-4">
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource cards */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {RESOURCE_CARDS.map((card) => (
            <div key={card.title} className="group relative h-64 overflow-hidden rounded-2xl">
              <Image
                src={card.img}
                alt=""
                fill
                className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/40 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className={`mb-2 text-xs font-bold uppercase tracking-widest ${card.accent === "cyber" ? "text-sky-400" : "text-blue-500"}`}>
                  {card.badge}
                </p>
                <h4 className="mb-4 text-2xl font-bold">{card.title}</h4>
                <Link
                  href={Routes.security}
                  className={`flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-90 ${card.accent === "cyber" ? "text-sky-400" : "text-blue-500"}`}
                >
                  {card.linkText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="relative mt-32 overflow-hidden rounded-3xl border border-white/10 p-12 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
            <h3 className="mb-6 text-4xl font-bold tracking-tight">Ready to modernize your infrastructure?</h3>
            <p className="mb-10 text-lg leading-relaxed text-slate-400">
              Our principal engineers can audit your current stack and provide a comprehensive migration path to high-performance DevOps standards.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={Routes.startProject}
                className="rounded-xl bg-blue-500 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-blue-500/90"
              >
                Start Infrastructure Audit
              </Link>
              <Link
                href={Routes.caseStudies.root}
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
        <Resource/>
      </main>   
    </div>
  );
}
