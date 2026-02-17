"use client";

import { motion } from "framer-motion";

const CLIENTS = [
  { name: "QUANTUM", colSpan: "" },
  { name: "SYNERGY.OS", colSpan: "lg:col-span-2" },
  { name: "HYPERLINK", colSpan: "" },
  { name: "NEXUS_LABS", colSpan: "lg:col-span-2" },
  { name: "VELOCITY", colSpan: "lg:col-span-2" },
  { name: "CYPHER", colSpan: "" },
  { name: "BITSTREAM", colSpan: "lg:col-span-2" },
  { name: "VOID_ARCH", colSpan: "" },
];

export function TrustedBy() {
  return (
    <section className="py-24 border-y border-border-white-10 bg-surface-dark/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Trusted by Industry Visionaries
          </h2>
          <p className="text-muted-foreground font-light">
            Powering the world&apos;s most innovative engineering teams
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`h-32 rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair bg-surface-dark/40 border border-border-white-10 hover:border-cyber-blue/40 hover:bg-white/3 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] ${client.colSpan}`}
            >
              <div className="text-xl font-black italic opacity-50 hover:opacity-100 transition-opacity">
                {client.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
