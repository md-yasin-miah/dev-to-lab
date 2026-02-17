"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20 px-4">
      {/* Multi-layered Ambient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/20 dark:bg-violet-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 -z-10" />

      {/* Center Radial Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/15 via-background to-background opacity-60 dark:from-primary/8" />

      {/* Enhanced Dotted Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.15)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.08)_1px,transparent_0)] [bg-size:24px_24px]" />

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            We Build Digital Products That{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-violet-600 dark:from-blue-400 dark:to-violet-500 pb-2">
              Defy Gravity
            </span>
            .
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          DevToLab is an elite software farm specializing in high-performance
          Web and Mobile solutions for visionary brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <Link href="#work" className="moving-border-btn group">
            <span className="moving-border-btn-inner block rounded-full bg-background px-10 py-4 font-bold">
              Explore Case Studies
            </span>
          </Link>
          <Link
            href="#stack"
            className="w-full sm:w-auto px-10 py-4 glass font-bold rounded-full hover:bg-white/10 transition-colors text-center"
          >
            Our Tech Stack
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
