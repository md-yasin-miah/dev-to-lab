"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Shield } from "lucide-react";

const INSIGHTS = [
  {
    icon: Terminal,
    tag: "#ARCHITECTURE",
    title: "Optimizing Next.js 14 for Edge Cache",
    description:
      "How we achieved 99/100 Lighthouse scores on complex e-commerce platforms using partial prerendering.",
    gradient: "from-cyber-blue/20 to-electric-violet/10",
  },
  {
    icon: Database,
    tag: "#BACKEND",
    title: "Real-time Sync with Supabase",
    description:
      "Mastering offline-first mobile architecture with distributed Postgres and high-concurrency listeners.",
    gradient: "from-electric-violet/20 to-pink-500/10",
  },
  {
    icon: Shield,
    tag: "#SECURITY",
    title: "Zero-Trust SaaS Security Models",
    description:
      "Building SOC2 compliant systems from day one without sacrificing development velocity or developer experience.",
    gradient: "from-emerald-500/20 to-cyber-blue/10",
  },
];

export function LabInsights() {
  return (
    <section
      id="insights"
      className="py-32 bg-surface-dark/30 border-y border-border-white-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black mb-4 tracking-tight">
            Technical Lab Insights
          </h2>
          <p className="text-muted-foreground">
            Engineering thoughts, architecture patterns, and documentation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((insight, index) => (
            <motion.div
              key={insight.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-3xl bg-background border border-border-white-10 mb-6 overflow-hidden">
                <div
                  className={`w-full h-full bg-linear-to-br ${insight.gradient} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center relative`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20" />
                  <insight.icon className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
              <div className="text-xs font-mono text-cyber-blue mb-3">
                {insight.tag}
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-cyber-blue transition-colors">
                {insight.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {insight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
