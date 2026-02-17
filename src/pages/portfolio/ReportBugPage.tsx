"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bug,
  X,
  ChevronDown,
  CloudUpload,
  CheckSquare,
} from "lucide-react";
import { Routes } from "@/lib/routes";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const SEVERITY_OPTIONS = [
  "Low - Minor UI/UX",
  "Medium - Functional Issue",
  "High - Broken Workflow",
  "Critical - System Failure",
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ReportBugPage() {
  const [severity, setSeverity] = useState("Critical - System Failure");
  const [steps, setSteps] = useState("");
  const [includeMetadata, setIncludeMetadata] = useState(false);

  /* Auto-detected system info */
  const [systemInfo, setSystemInfo] = useState({
    agent: "Detecting...",
    url: "Detecting...",
    timestamp: "Detecting...",
    viewport: "Detecting...",
  });

  useEffect(() => {
    setSystemInfo({
      agent:
        typeof navigator !== "undefined"
          ? navigator.userAgent.slice(0, 60) + "..."
          : "N/A",
      url: typeof window !== "undefined" ? window.location.origin : "N/A",
      timestamp: new Date().toISOString(),
      viewport:
        typeof window !== "undefined"
          ? `${window.innerWidth}x${window.innerHeight} (DPR ${window.devicePixelRatio})`
          : "N/A",
    });
  }, []);

  return (
    <div className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-4 py-16">
      {/* Tech grid background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.05) 1px, transparent 1px)",
        }}
      />

      {/* Debug text overlays */}
      <div className="pointer-events-none fixed left-0 top-0 z-0 p-6 opacity-20">
        <div className="space-y-1 font-mono text-[10px] text-cyber-blue">
          <p>// DEVTOLAB_OS_CORE</p>
          <p>// DEBUG_MODE: ENABLED</p>
        </div>
      </div>
      <div className="pointer-events-none fixed bottom-0 right-0 z-0 p-6 opacity-20">
        <div className="space-y-1 text-right font-mono text-[10px] text-electric-violet">
          <p>0x882-REPORT-V1</p>
          <p>STATUS: INTERCEPTING</p>
        </div>
      </div>

      {/* Main card */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-cyber-blue/40 shadow-2xl"
        style={{
          background: "rgba(23, 23, 23, 0.85)",
          backdropFilter: "blur(24px)",
          borderColor: "rgba(59,130,246,0.3)",
        }}
      >
        {/* Corner accents */}
        <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-t border-r border-cyber-blue/20" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b border-l border-cyber-blue/20" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-cyber-blue/10 bg-linear-to-r from-cyber-blue/5 to-transparent px-8 py-6">
          <div className="flex items-center space-x-3">
            <Bug className="h-6 w-6 text-cyber-blue" />
            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-white dark:text-white">
                Report a Bug
              </h2>
              <p className="font-mono text-[10px] uppercase tracking-widest text-cyber-blue opacity-70">
                Anomaly Detection Protocol
              </p>
            </div>
          </div>
          <Link
            href={Routes.home}
            className="text-slate-500 transition-colors hover:text-white dark:text-slate-500 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </Link>
        </div>

        {/* Body */}
        <div className="custom-scrollbar max-h-[75vh] space-y-8 overflow-y-auto p-8">
          {/* Bug Details */}
          <section className="space-y-4">
            <div className="mb-2 flex items-center space-x-2">
              <span className="h-4 w-1 rounded-full bg-cyber-blue" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white dark:text-white">
                Bug Details
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Severity */}
              <div className="space-y-2">
                <label className="ml-1 font-mono text-[11px] uppercase text-slate-500 dark:text-slate-500">
                  Issue Severity
                </label>
                <div className="relative">
                  <select
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value)}
                    className="w-full cursor-pointer appearance-none rounded-lg border border-cyber-blue/20 bg-black/40 px-4 py-3 text-sm text-slate-200 transition-all focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/50 dark:border-cyber-blue/20 dark:bg-black/40 dark:text-slate-200"
                  >
                    {SEVERITY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-surface-dark">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyber-blue" />
                </div>
              </div>

              {/* Environment */}
              <div className="space-y-2">
                <label className="ml-1 font-mono text-[11px] uppercase text-slate-500 dark:text-slate-500">
                  Environment
                </label>
                <div className="rounded-lg border border-cyber-blue/10 bg-black/20 px-4 py-3 font-mono text-sm text-cyber-blue/80 dark:border-cyber-blue/10 dark:bg-black/20">
                  PROD_CLUSTER_01
                </div>
              </div>
            </div>

            {/* Reproduction steps */}
            <div className="space-y-2">
              <label className="ml-1 font-mono text-[11px] uppercase text-slate-500 dark:text-slate-500">
                Reproduction Steps
              </label>
              <textarea
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                className="w-full rounded-lg border border-cyber-blue/20 bg-black/40 px-4 py-3 text-sm text-slate-200 transition-all placeholder:text-slate-700 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/50 dark:border-cyber-blue/20 dark:bg-black/40 dark:text-slate-200 dark:placeholder:text-slate-700"
                placeholder={`1. Navigate to the dashboard\n2. Click on the experiment node...`}
                rows={4}
              />
            </div>
          </section>

          {/* Evidence Upload */}
          <section className="space-y-4">
            <div className="mb-2 flex items-center space-x-2">
              <span className="h-4 w-1 rounded-full bg-cyber-blue" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white dark:text-white">
                Evidence Upload
              </h3>
            </div>
            <div className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-cyber-blue/30 bg-cyber-blue/5 p-8 transition-colors hover:border-cyber-blue/60">
              <CloudUpload className="mb-2 h-10 w-10 text-cyber-blue/50 group-hover:text-cyber-blue" />
              <p className="text-sm text-slate-400 dark:text-slate-400">
                Drag and drop screenshots or video files
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase text-slate-600 dark:text-slate-600">
                Max file size: 25MB
              </p>
            </div>
          </section>

          {/* System Logs */}
          <section className="space-y-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="h-4 w-1 rounded-full bg-cyber-blue" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white dark:text-white">
                  System Logs
                </h3>
              </div>
              <span className="flex items-center font-mono text-[10px] text-green-500">
                <span className="mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                AUTO_DETECTING
              </span>
            </div>
            <div className="space-y-1 rounded-lg border border-white/5 bg-black/60 p-4 font-mono text-[11px] text-cyber-blue/60 dark:border-white/5 dark:bg-black/60">
              <p>
                <span className="text-electric-violet">AGENT:</span>{" "}
                {systemInfo.agent}
              </p>
              <p>
                <span className="text-electric-violet">URL:</span>{" "}
                {systemInfo.url}
              </p>
              <p>
                <span className="text-electric-violet">TIMESTAMP:</span>{" "}
                {systemInfo.timestamp}
              </p>
              <p>
                <span className="text-electric-violet">VIEWPORT:</span>{" "}
                {systemInfo.viewport}
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-cyber-blue/10 bg-black/40 px-8 py-6 sm:flex-row dark:border-cyber-blue/10 dark:bg-black/40">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setIncludeMetadata(!includeMetadata)}
              className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${
                includeMetadata
                  ? "border-cyber-blue bg-cyber-blue text-white"
                  : "border-cyber-blue/30 bg-black text-transparent dark:border-cyber-blue/30 dark:bg-black"
              }`}
              aria-label="Include meta-data"
            >
              <CheckSquare className="h-3.5 w-3.5" />
            </button>
            <label className="font-mono text-xs uppercase text-slate-500 dark:text-slate-500">
              Include meta-data
            </label>
          </div>
          <div className="flex w-full items-center space-x-4 sm:w-auto">
            <Link
              href={Routes.home}
              className="flex-1 px-6 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-white sm:flex-none dark:text-slate-400 dark:hover:text-white"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-electric-violet px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all hover:scale-[1.02] active:scale-95 sm:flex-none"
            >
              Submit Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
