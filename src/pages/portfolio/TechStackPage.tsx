"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Palette,
  ShieldCheck,
  Layers,
  Gauge,
  Braces,
  Container,
  Network,
  Brain,
  Zap,
  Cloud,
  Database,
} from "lucide-react";
import { Routes } from "@/lib/routes";

// ─── Data ────────────────────────────────────────────────────────────────────

const SKILLS_ICON_URL = "https://skills.syvixor.com/api/icons?perline=1&i=";

const FLOATING_ICONS = [
  { tech: "nextjs", style: "top-[25%] left-[15%]", delay: 0 },
  { tech: "react", style: "top-[20%] right-[18%]", delay: 1.5 },
  { tech: "supabase", style: "bottom-[30%] left-[10%]", delay: 2.2 },
  { tech: "flutter", style: "bottom-[25%] right-[15%]", delay: 0.8 },
  { tech: "typescript", style: "top-[50%] left-[5%]", delay: 3 },
  { tech: "tailwindcss", style: "top-[45%] right-[8%]", delay: 1 },
  { tech: "postgresql", style: "bottom-[15%] left-[20%]", delay: 2.8 },
];

const FRONTEND_TECHS = [
  {
    icon: Cpu,
    title: "React Ecosystem",
    description:
      "Enterprise-grade SSR, static generation, and high-performance routing protocols.",
    tags: ["SSR", "Hybrid Rendering"],
  },
  {
    icon: Layers,
    title: "Next.js 14",
    description:
      "App Router, React Server Components, and edge-first rendering for blazing speed.",
    tags: ["App Router", "Edge Runtime"],
  },
  {
    icon: ShieldCheck,
    title: "TypeScript",
    description:
      "End-to-end type safety across the full stack ensuring robust, maintainable codebases.",
    tags: ["Type-Safe", "Enterprise"],
  },
  {
    icon: Palette,
    title: "Tailwind CSS",
    description:
      "Utility-first design systems for rapid deployment and consistent brand scaling.",
    tags: ["JIT Engine", "Responsive"],
  },
];

const BACKEND_TECHS = [
  {
    icon: Zap,
    title: "Go / Golang",
    description:
      "Unrivaled efficiency for cloud-native microservices. We utilize Go for high-throughput data processing.",
    tags: ["Concurrency", "Cloud Native"],
  },
  {
    icon: ShieldCheck,
    title: "Node.js / Express",
    description:
      "Rapid API development with event-driven architecture. Perfect for real-time applications and serverless functions.",
    tags: ["Event-Driven", "Serverless"],
  },
];

const DATABASE_TECHS = [
  {
    icon: Database,
    title: "PostgreSQL",
    subtitle: "Supabase Ecosystem",
    tooltip:
      "Best-in-class reliability for financial data and complex relations.",
  },
  {
    icon: Braces,
    title: "MongoDB",
    subtitle: "Document Storage",
    tooltip:
      "Dynamic schema flexibility for rapid-iteration content platforms.",
  },
  {
    icon: Gauge,
    title: "Redis",
    subtitle: "In-Memory Cache",
    tooltip:
      "Sub-millisecond latency for session management and real-time queues.",
  },
  {
    icon: Layers,
    title: "MySQL",
    subtitle: "Relational Core",
    tooltip: "Proven legacy reliability for structured enterprise datasets.",
  },
];

const INFRA_TECHS = [
  {
    icon: Container,
    title: "Docker",
    description:
      "Immutable environment containerization ensuring your application runs identically in any environment.",
    borderColor: "border-t-cyber-blue",
    iconColor: "text-cyber-blue",
  },
  {
    icon: Network,
    title: "Kubernetes",
    description:
      "Advanced cluster orchestration for self-healing applications and zero-downtime updates.",
    borderColor: "border-t-electric-violet",
    iconColor: "text-electric-violet",
  },
  {
    icon: Cloud,
    title: "Cloud Mastery",
    description:
      "Expertise across major cloud providers with infrastructure agnostic designs.",
    borderColor: "border-t-cyber-blue",
    iconColor: "text-cyber-blue",
  },
];

const AI_FEATURES = [
  {
    icon: Network,
    title: "Agentic Workflows",
    description:
      "Self-healing pipelines and autonomous task execution systems.",
    color: "text-cyber-blue",
  },
  {
    icon: Zap,
    title: "AI Optimization",
    description: "Hardening AI architecture with sub-millisecond precision.",
    color: "text-electric-violet",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function SectionDivider() {
  return (
    <div className="h-px bg-linear-to-r from-transparent via-border-white-10 to-transparent" />
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TechStackPage() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(circle_at_center,black,transparent_80%)] z-0" />

        {/* Scan line */}
        <div className="absolute w-full h-0.5 bg-linear-to-r from-transparent via-cyber-blue to-transparent opacity-20 animate-scan z-0" />

        {/* Corner telemetry */}
        <div className="absolute top-24 left-8 font-mono text-[10px] text-blue-500/40 hidden lg:block uppercase tracking-widest leading-loose z-10">
          LATENCY: 12ms
          <br />
          STATUS: NOMINAL
          <br />
          UPTIME: 99.999%
        </div>
        <div className="absolute bottom-12 right-8 font-mono text-[10px] text-blue-500/40 hidden lg:block uppercase tracking-widest text-right leading-loose z-10">
          NODES: 42_ACTIVE
          <br />
          EGRESS: 4.2TB/S
          <br />
          PROTOCOL: HYPER_D_V2
        </div>

        {/* Floating tech icons */}
        {FLOATING_ICONS.map((item, i) => (
          <div
            key={i}
            className={`absolute ${item.style} w-16 h-16 hidden md:flex items-center justify-center bg-white/3 border border-border-white-10 rounded-2xl backdrop-blur-lg animate-float z-10`}
            style={{ animationDelay: `${item.delay}s` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${SKILLS_ICON_URL}${item.tech}`}
              alt={item.tech}
              width={36}
              height={36}
              className="opacity-80"
            />
          </div>
        ))}

        {/* Hero content */}
        <header className="text-center relative z-20 px-6 max-w-7xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-blue/30 bg-cyber-blue/10 mb-8 animate-pulse-badge">
              <span className="w-2 h-2 bg-cyber-blue rounded-full animate-ping" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-cyber-blue uppercase">
                Next-Gen Technology Stack
              </span>
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]"
          >
            World-Class Stack for <br />
            <span className="gradient-text glow-text pr-3">Global Ambitions</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light mb-12"
          >
            Engineering high-performance software for visionary startups and
            global leaders with an uncompromising &ldquo;Deep Tech&rdquo; focus.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={Routes.services}
              className="px-8 py-4 bg-white text-background-dark font-bold rounded-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              View Enterprise Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#layer-01"
              className="px-8 py-4 glass-panel border border-border-white-10 font-bold rounded-xl hover:bg-white/5 transition-all text-center"
            >
              Technical Specifications
            </Link>
          </motion.div>
        </header>
      </section>

      {/* ═══════════════════ LAYER 01: FRONTENDS ═══════════════════ */}
      <section id="layer-01" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <span className="text-[10px] text-cyber-blue uppercase tracking-[0.3em] font-black block mb-2">
                Layer 01
              </span>
              <h2 className="text-4xl font-bold">Pixel-Perfect Frontends</h2>
            </motion.div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-md text-sm leading-relaxed"
            >
              Crafting immersive user experiences using high-performance
              frameworks that prioritize Core Web Vitals and fluid
              accessibility.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FRONTEND_TECHS.map((tech, i) => (
              <motion.div
                key={tech.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-6 group hover:border-cyber-blue/50 transition-all"
              >
                <tech.icon className="h-8 w-8 text-cyber-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] mb-4" />
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  {tech.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground/70 uppercase tracking-tighter">
                  {tech.tags.map((tag, j) => (
                    <span key={tag} className="flex items-center gap-2">
                      {j > 0 && (
                        <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════ LAYER 02: BACKEND ═══════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <span className="text-[10px] text-electric-violet uppercase tracking-[0.3em] font-black block mb-2">
                Layer 02
              </span>
              <h2 className="text-4xl font-bold">High-Availability Systems</h2>
            </motion.div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-md text-sm leading-relaxed"
            >
              Robust server-side architectures designed to handle millions of
              concurrent requests with sub-millisecond latency.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BACKEND_TECHS.map((tech, i) => (
              <motion.div
                key={tech.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-panel rounded-2xl p-8 flex gap-6 items-start group hover:bg-white/5 transition-all"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-electric-violet/10 flex items-center justify-center">
                  <tech.icon className="h-8 w-8 text-electric-violet" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {tech.description}
                  </p>
                  <div className="flex gap-2">
                    {tech.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 border border-border-white-10 rounded text-[10px] font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════ LAYER 03: DATABASES ═══════════════════ */}
      <section className="py-24 px-6 relative">
        {/* Data stream lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[20, 45, 70].map((top) => (
            <div
              key={top}
              className="absolute h-px bg-linear-to-r from-transparent via-cyber-blue to-transparent opacity-15 animate-flow-x"
              style={{
                top: `${top}%`,
                left: "-10%",
                width: "200px",
                animationDelay: `${top * 0.03}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <span className="text-[10px] text-cyber-blue uppercase tracking-[0.3em] font-black block mb-2">
                Layer 03
              </span>
              <h2 className="text-4xl font-bold">
                The Foundation of Data Integrity
              </h2>
            </motion.div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-md text-sm leading-relaxed"
            >
              Uptime is non-negotiable. We engineer Scalable PostgreSQL
              Architectures and Real-time Database Integrations for
              fault-tolerant data persistence.
            </motion.p>
          </div>

          {/* DB Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {DATABASE_TECHS.map((db, i) => (
              <motion.div
                key={db.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group glass-panel rounded-2xl p-8 border-border-white-10/50 hover:border-cyber-blue/50 transition-all relative cursor-help"
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-surface-dark rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/10 border border-border-white-10/50 group-hover:border-cyber-blue/30 transition-all">
                    <db.icon className="h-8 w-8 text-cyber-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{db.title}</h3>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-4">
                    {db.subtitle}
                  </p>
                  {/* Tooltip */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 p-3 bg-zinc-900 border border-border-white-10 rounded-lg text-xs text-muted-foreground shadow-2xl z-20 text-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                    {db.tooltip}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vector DB Feature Card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-8 md:p-12 border-electric-violet/30 shadow-[0_0_30px_rgba(139,92,246,0.1)] flex flex-col md:flex-row items-center gap-10"
          >
            <div className="w-32 h-32 shrink-0 bg-electric-violet/10 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-electric-violet/20 blur-2xl rounded-full animate-pulse" />
              <Network className="h-14 w-14 text-electric-violet relative z-10 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]" />
            </div>
            <div className="grow text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-electric-violet/20 text-electric-violet text-[10px] font-bold uppercase rounded-full mb-4 tracking-tighter">
                AI-Native Storage
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Vector Databases: Pinecone &amp; pgvector
              </h3>
              <p className="text-muted-foreground max-w-2xl text-lg font-light leading-relaxed">
                Fueling the Retrieval-Augmented Generation (RAG) era. We
                optimize latent space searches and high-dimensional embeddings
                for advanced AI memory systems.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <div className="px-6 py-3 border border-electric-violet/30 bg-electric-violet/5 rounded-xl text-xs font-mono text-electric-violet">
                EMBEDDING_OPTIMIZED
              </div>
              <div className="px-6 py-3 border border-electric-violet/30 bg-electric-violet/5 rounded-xl text-xs font-mono text-electric-violet">
                SEMANTIC_SEARCH_ENABLED
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════ AI INNOVATION ═══════════════════ */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="ai-innovation-container p-8 md:p-20 relative overflow-hidden rounded-[2.5rem]">
            {/* Ambient glows */}
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] pointer-events-none" />

            {/* Perspective grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[50px_50px] perspective-[1000px] transform-[rotateX(60deg)_translateY(-20%)] opacity-30" />

            {/* Breathing border */}
            <div className="breathing-border" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-cyber-blue to-electric-violet text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8 shadow-lg shadow-blue-500/20">
                  Premium Service Highlight
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  AI Innovation:
                  <br />
                  <span className="gradient-text font-black uppercase italic tracking-tighter">
                    Vibe-Code
                  </span>
                </h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-10 font-light border-l-2 border-cyber-blue pl-6">
                  Beyond standard development. We build autonomous AI Agents and
                  specialize in refining AI-generated codebases to production
                  grade.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {AI_FEATURES.map((feature) => (
                    <div
                      key={feature.title}
                      className="p-6 rounded-2xl bg-white/3 backdrop-blur-xl border border-cyber-blue/30 hover:border-cyber-blue hover:bg-cyber-blue/8 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all"
                    >
                      <feature.icon
                        className={`h-7 w-7 ${feature.color} mb-4`}
                      />
                      <h4 className="font-bold mb-2">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Orbit visual */}
              <div className="flex items-center justify-center">
                <div className="relative w-72 h-72">
                  {/* Core sphere */}
                  <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-[radial-gradient(circle,#8B5CF6_0%,transparent_70%)] rounded-full shadow-[0_0_80px_#8B5CF6] animate-core-pulse" />

                  {/* Orbit rings */}
                  <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-electric-violet/20 rounded-full animate-orbit">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyber-blue rounded-full shadow-[0_0_10px_#3B82F6]" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-electric-violet/20 rounded-full animate-orbit-reverse">
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyber-blue rounded-full shadow-[0_0_10px_#3B82F6]" />
                  </div>

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="h-16 w-16 text-white opacity-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ LAYER 04: INFRASTRUCTURE ═══════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <span className="text-[10px] text-cyber-blue uppercase tracking-[0.3em] font-black block mb-2">
                Layer 04
              </span>
              <h2 className="text-4xl font-bold mb-4">Global Infrastructure</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Automated deployment pipelines and container orchestration for
                seamless horizontal scaling.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INFRA_TECHS.map((tech, i) => (
              <motion.div
                key={tech.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`glass-panel rounded-3xl p-10 border-t-4 ${tech.borderColor} group hover:-translate-y-2 transition-all`}
              >
                <tech.icon
                  className={`h-10 w-10 ${tech.iconColor} drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] mb-8`}
                />
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="mt-10 mb-20 px-6">
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-16 text-center relative overflow-hidden border-border-white-10/20">
          <div className="absolute inset-0 bg-linear-to-tr from-cyber-blue/20 via-transparent to-electric-violet/20 opacity-50" />
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="text-4xl font-bold mb-6">
              Architect Your Legacy Today
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
              Let&apos;s discuss which part of our ecosystem fits your unique
              business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={Routes.startProject}
                className="px-10 py-4 bg-white text-background-dark font-bold rounded-xl hover:bg-slate-200 hover:scale-105 transition-all shadow-xl shadow-white/5"
              >
                Start Building
              </Link>
              <Link
                href={Routes.services}
                className="px-10 py-4 glass-panel border border-border-white-10 font-bold rounded-xl hover:bg-white/5 transition-all"
              >
                Download Tech Deck
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
