"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-radial opacity-30" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tight"
        >
          Start Your Lab <br /> Experiment Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground mb-12 font-light"
        >
          Join the ranks of high-growth companies. Let&apos;s engineer your
          technical edge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="moving-border-btn group inline-block">
            <Button
              asChild
              className="moving-border-btn-inner text-lg px-12 py-5 h-auto bg-background hover:bg-background/90 text-foreground font-bold rounded-full border-0"
            >
              <Link href="/start-project">
                Initiate Project Discovery
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-12"
        >
          <div className="flex -space-x-3">
            <div className="w-12 h-12 rounded-full border-4 border-background bg-muted/80" />
            <div className="w-12 h-12 rounded-full border-4 border-background bg-muted/60" />
            <div className="w-12 h-12 rounded-full border-4 border-background bg-muted/40" />
          </div>
          <div className="text-left">
            <div className="font-bold text-sm">Join 50+ Global Teams</div>
            <div className="text-muted-foreground text-xs uppercase tracking-widest font-bold">
              Scaling with DevToLab
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
