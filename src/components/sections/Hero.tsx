"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20 px-4">
      {/* Multi-layered Ambient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/20 dark:bg-violet-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 -z-10" />

      {/* Center Radial Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/15 via-background to-background opacity-60 dark:from-primary/8" />

      {/* Enhanced Dotted Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.15)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.08)_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            We Build Digital Products That{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-violet-600 dark:from-blue-400 dark:to-violet-500">
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
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="group h-12 px-8 text-base bg-linear-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 dark:from-blue-400 dark:to-violet-500 dark:hover:from-blue-500 dark:hover:to-violet-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25 border-0"
          >
            <Link href="/contact">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base backdrop-blur-sm bg-background/60 hover:bg-background/80 transition-all hover:scale-105"
          >
            <Link href="#work">
              <PlayCircle className="mr-2 h-4 w-4" />
              View Our Lab
            </Link>
          </Button>
        </motion.div>

        {/* Floating Code Snippet Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-md w-full"
        >
          <div className="relative rounded-lg border border-border/40 bg-background/60 backdrop-blur-sm p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Terminal className="h-4 w-4" />
              <span className="font-medium">Quick Start</span>
            </div>
            <div className="bg-muted/50 rounded px-3 py-2 font-mono text-sm flex items-center justify-between">
              <code className="text-foreground">
                npx create-next-app@latest
              </code>
              <button
                className="ml-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                onClick={() =>
                  navigator.clipboard.writeText("npx create-next-app@latest")
                }
              >
                Copy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
