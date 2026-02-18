"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  FlaskConical,
  BadgeCheck,
  ArrowRight,
  Database,
  Server,
  Network,
  Fingerprint,
  GitBranch,
  RefreshCw,
  Router,
  Smartphone,
  Shield,
  Zap,
  Cloud,
  Satellite,
  Radio,
} from "lucide-react";
import { Routes } from "@/lib/routes";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  title: string;
  description: string;
  imageType:
    | "url"
    | "uiux-tokens"
    | "uiux-prototype"
    | "mobile-exploded"
    | "mobile-fintech"
    | "web-isometric"
    | "web-streaming"
    | "ai-neural"
    | "ai-vision";
  imageUrl?: string;
  tags: string[];
  challenge: string;
  solution: string;
  solutionLabel?: string;
  metricsLabel?: string;
  metrics: Metric[];
  reverse?: boolean;
}

interface TabData {
  id: string;
  label: string;
  badge: string;
  heading: string;
  headingHighlight: string;
  subtext: string;
  projects: CaseStudy[];
  cta: {
    heading: string;
    subtext: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
}

/* ------------------------------------------------------------------ */
/*  Visual Components — per source HTML graphic                        */
/* ------------------------------------------------------------------ */

function ImageUrl({
  url,
  alt,
  tags,
}: {
  url: string;
  alt: string;
  tags: string[];
}) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-slate-900 lg:aspect-square">
      <Image
        alt={alt}
        src={url}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 hover:scale-105"
        unoptimized
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
      <Tags tags={tags} />
    </div>
  );
}

/** Source 1 — Aether Design System: token cubes + bezier curve */
function UiuxTokensVisual({ tags }: { tags: string[] }) {
  return (
    <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0E] lg:aspect-square">
      {/* Atomic grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(14,165,233,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Vertical guide lines */}
      <div className="pointer-events-none absolute inset-0 flex justify-between px-12 opacity-20">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-full w-px bg-sky-400" />
        ))}
      </div>
      {/* Token cubes */}
      <div className="relative flex h-full w-full scale-90 flex-col items-center justify-center lg:scale-100">
        <div className="relative h-64 w-64">
          <div
            className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-xl border border-sky-400/40 bg-sky-400/5"
            style={{
              transform: "translateX(-50%) rotateX(60deg) rotateZ(45deg)",
            }}
          />
          <div
            className="absolute left-10 top-10 flex h-12 w-12 items-center justify-center rounded-sm border border-white/20 bg-sky-400/80"
            style={{
              transform: "rotateX(45deg) rotateZ(45deg)",
              boxShadow:
                "10px 10px 20px rgba(0,0,0,0.5), inset 0 0 10px rgba(255,255,255,0.1)",
            }}
          >
            <span
              className="text-[8px] font-bold text-white"
              style={{ transform: "rotate(-45deg) rotateX(-45deg)" }}
            >
              #HEX
            </span>
          </div>
          <div
            className="absolute right-12 top-24 flex h-16 w-16 items-center justify-center rounded-sm border border-white/20 bg-emerald-500/80"
            style={{
              transform: "rotateX(45deg) rotateZ(45deg)",
              boxShadow:
                "10px 10px 20px rgba(0,0,0,0.5), inset 0 0 10px rgba(255,255,255,0.1)",
            }}
          >
            <span
              className="text-[8px] font-bold text-white"
              style={{ transform: "rotate(-45deg) rotateX(-45deg)" }}
            >
              8px
            </span>
          </div>
          <div
            className="absolute bottom-16 left-20 flex h-14 w-14 items-center justify-center rounded-sm border border-white/40 bg-white/20 backdrop-blur-md"
            style={{
              transform: "rotateX(45deg) rotateZ(45deg)",
              boxShadow:
                "10px 10px 20px rgba(0,0,0,0.5), inset 0 0 10px rgba(255,255,255,0.1)",
            }}
          >
            <FlaskConical
              className="h-4 w-4 text-white"
              style={{ transform: "rotate(-45deg) rotateX(-45deg)" }}
            />
          </div>
          {/* Dashed wireframe */}
          <div
            className="absolute left-1/2 top-1/2 flex h-32 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-white/10 px-4"
            style={{ transform: "translate(-50%, -50%) rotateX(20deg)" }}
          >
            <div className="h-8 w-24 rounded-md border border-white/20 bg-white/5" />
            <div className="h-8 w-8 rounded-full bg-sky-400/40" />
          </div>
        </div>
        {/* SVG bezier */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 400 400"
        >
          <path
            d="M 50 300 Q 150 100 350 250"
            fill="none"
            stroke="#0EA5E9"
            strokeWidth="2"
            opacity="0.4"
            strokeDasharray="5"
          />
          <circle cx="350" cy="250" fill="#0EA5E9" r="4" />
        </svg>
        {/* Labels */}
        <div className="absolute left-12 top-12 rounded border border-white/10 bg-black/60 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-sky-400">
          Atom_Core_01
        </div>
        <div className="absolute bottom-12 right-12 rounded border border-white/10 bg-black/60 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-emerald-500">
          Structure_Matrix_V2
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
      <Tags tags={tags} />
    </div>
  );
}

/** Source 1 — Immersive Wealth Prototype: wireframes + bezier + cursor */
function UiuxPrototypeVisual({ tags }: { tags: string[] }) {
  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0E] lg:aspect-square">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(14,165,233,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* SVG curves */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
      >
        <defs>
          <linearGradient id="curveGrad" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0" />
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="1" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 50 250 C 100 50, 300 350, 350 150"
          fill="none"
          stroke="url(#curveGrad)"
          strokeWidth="3"
        />
        <circle
          className="animate-pulse"
          cx="100"
          cy="115"
          fill="#0EA5E9"
          r="5"
        />
        <circle
          className="animate-pulse"
          cx="300"
          cy="285"
          fill="#10B981"
          r="5"
        />
        <line
          stroke="white"
          strokeOpacity="0.05"
          x1="0"
          x2="400"
          y1="200"
          y2="200"
        />
        <line
          stroke="white"
          strokeOpacity="0.05"
          x1="200"
          x2="200"
          y1="0"
          y2="400"
        />
      </svg>
      {/* Wireframe cards */}
      <div className="relative z-10 flex -rotate-[5deg] flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex h-20 w-32 flex-col justify-between rounded-xl border border-white/20 bg-white/5 p-3 backdrop-blur-sm">
            <div className="h-1 w-8 rounded bg-sky-400/60" />
            <div className="flex h-8 w-full items-center rounded bg-white/10 px-2">
              <div className="h-2 w-full rounded bg-white/20" />
            </div>
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-400/20 backdrop-blur-sm">
            <Smartphone className="h-8 w-8 text-sky-400" />
          </div>
        </div>
        <div
          className="rounded-xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm"
          style={{ width: 224, height: 128 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="h-2 w-12 rounded bg-white/20" />
            <div className="h-4 w-4 rounded-full bg-emerald-500/40" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-3/4 rounded bg-white/10" />
            <div className="h-2 w-1/2 rounded bg-white/10" />
          </div>
        </div>
      </div>
      {/* Cursor */}
      <div className="absolute right-1/4 top-1/4 opacity-60">
        <svg
          className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          fill="none"
          height="60"
          viewBox="0 0 24 24"
          width="60"
        >
          <path
            d="M5 3L19 12L12 14L15 21L12 22L9 15L5 19V3Z"
            fill="currentColor"
          />
        </svg>
        <div className="ml-4 mt-2 rounded bg-sky-400 px-2 py-1 text-[8px] font-bold text-white">
          Ease-In-Out
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
      <Tags tags={tags} />
    </div>
  );
}

/** Source 2 — FitSphere: 3D exploded mobile layers */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MobileExplodedVisual({ tags }: { tags: string[] }) {
  return (
    <div
      className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 lg:h-[600px] lg:aspect-auto"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative h-[450px] w-64"
        style={{
          transform: "rotateX(55deg) rotateZ(-35deg) translateY(-50px)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Bottom layer — biometric */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-2 border-emerald-500/40 bg-emerald-500/10 backdrop-blur-sm"
          style={{ transform: "translateZ(-100px)" }}
        >
          <Fingerprint className="mb-4 h-12 w-12 text-emerald-500 opacity-80" />
          <div className="h-1 w-32 overflow-hidden rounded-full bg-emerald-500/20">
            <div className="h-full w-2/3 bg-emerald-500 shadow-[0_0_10px_#10B981]" />
          </div>
          <div className="absolute -right-32 top-1/2 flex items-center gap-2">
            <div className="h-px w-24 bg-emerald-500/30" />
            <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-emerald-500">
              Biometric Security Core
            </span>
          </div>
        </div>
        {/* Middle layer — logic */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-2 border-sky-400/40 bg-sky-400/10 p-6 backdrop-blur-sm"
          style={{ transform: "translateZ(0px)" }}
        >
          <div className="grid w-full grid-cols-2 gap-2">
            {[GitBranch, Database, RefreshCw, Router].map((Icon, i) => (
              <div
                key={i}
                className="flex h-8 items-center justify-center rounded border border-sky-400/30 bg-sky-400/20"
              >
                <Icon className="h-3 w-3 text-sky-400" />
              </div>
            ))}
          </div>
          <div className="mt-4 font-mono text-[10px] text-sky-400">
            EXECUTION_ID: 0x4F2A
          </div>
          <div className="absolute -left-32 top-1/2 flex items-center gap-2">
            <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-sky-400">
              Business Logic Layer
            </span>
            <div className="h-px w-24 bg-sky-400/30" />
          </div>
        </div>
        {/* Top layer — UI */}
        <div
          className="absolute inset-0 overflow-hidden rounded-3xl border-2 border-white/20 bg-white/5 backdrop-blur-md"
          style={{ transform: "translateZ(100px)" }}
        >
          <div className="flex h-full w-full items-center justify-center bg-linear-to-t from-black/60 to-transparent">
            <svg className="h-20 w-full" viewBox="0 0 200 60">
              <path
                d="M0,30 L20,30 L30,10 L45,50 L55,30 L80,30 L90,20 L100,40 L110,30 L130,30 L140,5 L160,55 L175,30 L200,30"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute -right-32 top-1/3 flex items-center gap-2">
            <div className="h-px w-24 bg-white/20" />
            <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-white">
              Reactive UI Surface
            </span>
          </div>
        </div>
        {/* Center axis */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-px -translate-x-1/2 bg-linear-to-b from-transparent via-sky-400/20 to-transparent" />
      </div>
      {/* Status bar */}
      <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between rounded-full border border-white/5 bg-black/40 px-4 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
            Live Sync: 12ms
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Cloud className="h-4 w-4 text-sky-400" />
          <Zap className="h-4 w-4 text-emerald-500" />
        </div>
      </div>
    </div>
  );
}

/** Source 2 — SwiftPay: 3D exploded fintech layers */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MobileFintechVisual({ tags }: { tags: string[] }) {
  return (
    <div
      className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 lg:h-[600px] lg:aspect-auto"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative h-[450px] w-64"
        style={{
          transform: "rotateX(55deg) rotateZ(-35deg) translateY(-50px)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Bottom — Face ID */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-2 border-sky-400/20 bg-sky-400/5 backdrop-blur-sm"
          style={{ transform: "translateZ(-100px)" }}
        >
          <div className="relative">
            <Shield className="h-16 w-16 text-sky-400 opacity-80" />
            <div
              className="absolute -inset-2 animate-spin rounded-full border-2 border-dashed border-sky-400/40"
              style={{ animationDuration: "8s" }}
            />
          </div>
          <div className="mt-6 font-mono text-[8px] uppercase tracking-tighter text-sky-400">
            SEC_TOKEN_ACTIVE
          </div>
        </div>
        {/* Middle — streams */}
        <div
          className="absolute inset-0 rounded-3xl border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          style={{ transform: "translateZ(0px)" }}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[9px] text-slate-400">gRPC STREAM</span>
              <div className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_5px_#0EA5E9]" />
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 bg-sky-400" />
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2 pt-2">
              <span className="text-[9px] text-slate-400">LEDGER SYNC</span>
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/2 bg-emerald-500" />
            </div>
          </div>
          <div className="absolute -left-32 top-1/2 flex items-center gap-2">
            <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-slate-400">
              Core Middleware
            </span>
            <div className="h-px w-24 bg-white/20" />
          </div>
        </div>
        {/* Top — UI */}
        <div
          className="absolute inset-0 overflow-hidden rounded-3xl border-2 border-white/30 bg-white/10 backdrop-blur-md"
          style={{ transform: "translateZ(100px)" }}
        >
          <div className="flex h-full w-full items-end justify-center bg-linear-to-t from-black/80 to-transparent pb-6">
            <div className="flex h-10 w-4/5 items-center justify-center rounded-xl bg-sky-400 shadow-lg shadow-sky-400/30">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">
                Process Transaction
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Encryption badge */}
      <div className="absolute left-12 top-12 rounded-lg border border-white/10 bg-black/60 p-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-emerald-500" />
          <div>
            <div className="text-[8px] font-bold uppercase tracking-widest text-slate-500">
              Encryption
            </div>
            <div className="font-mono text-[10px] text-white">AES-256 GCM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Source 4 — CloudScale: isometric hub grid + data streams */
function WebIsometricVisual({ tags }: { tags: string[] }) {
  return (
    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-[#0c0c0e]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(30deg, #1e293b 12%, transparent 12.5%, transparent 87%, #1e293b 87.5%), linear-gradient(150deg, #1e293b 12%, transparent 12.5%, transparent 87%, #1e293b 87.5%), linear-gradient(60deg, #334155 25%, transparent 25.5%, transparent 75%, #334155 75%)",
          backgroundSize: "80px 140px",
        }}
      />
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Center hub */}
        <div className="absolute z-30 flex h-32 w-32 rotate-45 items-center justify-center rounded-xl border-2 border-sky-400 bg-sky-400/20 shadow-[0_0_50px_rgba(14,165,233,0.4)]">
          <Network className="-rotate-45 h-10 w-10 text-white" />
          <div className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-emerald-500" />
        </div>
        {/* Database stack */}
        <div className="absolute left-1/4 top-1/4 z-20 flex w-24 flex-col gap-2">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex h-10 items-center justify-center rounded-lg border border-white/10 bg-slate-800/80 -skew-x-20"
            >
              <Database className="h-4 w-4 text-sky-400" />
            </div>
          ))}
          <div className="flex h-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-slate-800/80 -skew-x-20">
            <Database className="h-4 w-4 text-emerald-500" />
          </div>
        </div>
        {/* Server nodes */}
        <div className="absolute bottom-1/4 right-1/4 z-20 flex w-40 gap-3">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 py-6 -skew-y-10"
            >
              <Server className="h-5 w-5 text-slate-500" />
            </div>
          ))}
        </div>
        {/* Connection lines */}
        <div className="absolute left-[45%] top-[30%] h-32 w-px bg-linear-to-b from-transparent via-sky-400 to-transparent opacity-60" />
        <div className="absolute bottom-[35%] right-[40%] h-24 w-px bg-linear-to-b from-transparent via-emerald-500 to-transparent opacity-60" />
        <div className="absolute left-[20%] top-1/2 h-px w-48 bg-linear-to-r from-transparent via-sky-400/30 to-transparent" />
        {/* Data streams */}
        <div
          className="absolute left-[60%] top-10 h-[100px] w-0.5 opacity-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #0EA5E9, transparent)",
          }}
        />
        <div
          className="absolute bottom-20 left-[30%] h-[100px] w-0.5 opacity-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #0EA5E9, transparent)",
          }}
        />
      </div>
      <Tags tags={tags} />
    </div>
  );
}

/** Source 4 — NexuStream: rotated grid of streaming nodes */
function WebStreamingVisual({ tags }: { tags: string[] }) {
  return (
    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-[#0c0c0e]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(30deg, #1e293b 12%, transparent 12.5%, transparent 87%, #1e293b 87.5%), linear-gradient(150deg, #1e293b 12%, transparent 12.5%, transparent 87%, #1e293b 87.5%), linear-gradient(60deg, #334155 25%, transparent 25.5%, transparent 75%, #334155 75%)",
          backgroundSize: "80px 140px",
        }}
      />
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="grid rotate-12 grid-cols-2 gap-4">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-sky-400/40 bg-sky-400/10 shadow-[inset_0_0_20px_rgba(14,165,233,0.1)]">
            <Satellite className="h-8 w-8 text-sky-400/60" />
            <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
          </div>
          <div className="relative flex h-24 w-24 translate-y-8 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Cloud className="h-8 w-8 text-slate-600" />
          </div>
          <div className="relative flex h-24 w-24 -translate-y-4 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Radio className="h-8 w-8 text-slate-600" />
          </div>
          <div className="relative flex h-24 w-24 translate-y-4 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/10 shadow-[inset_0_0_20px_rgba(16,185,129,0.1)]">
            <Zap className="h-8 w-8 text-emerald-500/60" />
          </div>
        </div>
        {/* Decorative dots */}
        <div className="absolute right-[15%] top-1/3 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_#0EA5E9]" />
        <div className="absolute bottom-1/4 left-[20%] h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981]" />
      </div>
      <Tags tags={tags} />
    </div>
  );
}

/** Source 5 — NeuralForecast: neural network diagram */
function AiNeuralVisual({ tags }: { tags: string[] }) {
  return (
    <div
      className="group relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-[#020617] lg:aspect-square"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(14,165,233,0.1) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-sky-400">
              Weights Activation Map
            </p>
            <p className="text-xs text-slate-500">Epoch 1024 / Loss: 0.0024</p>
          </div>
          <div className="flex gap-1">
            {[4, 6, 3, 8].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-sky-400"
                style={{ height: h * 4, opacity: 0.2 + i * 0.2 }}
              />
            ))}
          </div>
        </div>
        {/* Neural network SVG */}
        <div className="relative flex flex-1 items-center justify-center">
          <svg className="h-full max-h-64 w-full" viewBox="0 0 400 300">
            <g className="stroke-sky-400/20" strokeWidth="0.5">
              <line x1="50" y1="150" x2="150" y2="50" />
              <line x1="50" y1="150" x2="150" y2="150" />
              <line x1="50" y1="150" x2="150" y2="250" />
              <line x1="150" y1="50" x2="250" y2="100" />
              <line x1="150" y1="150" x2="250" y2="100" />
              <line x1="150" y1="150" x2="250" y2="200" />
              <line x1="150" y1="250" x2="250" y2="200" />
              <line x1="250" y1="100" x2="350" y2="150" />
              <line x1="250" y1="200" x2="350" y2="150" />
            </g>
            <g className="stroke-sky-400" opacity="0.6" strokeWidth="1.5">
              <line x1="50" y1="150" x2="150" y2="150" />
              <line x1="150" y1="150" x2="250" y2="100" />
              <line x1="250" y1="100" x2="350" y2="150" />
            </g>
            <g fill="#020617" stroke="#0EA5E9" strokeWidth="2">
              <circle cx="50" cy="150" r="4" />
              <circle cx="150" cy="50" r="4" />
              <circle cx="150" cy="150" r="4" fill="#0EA5E9" />
              <circle cx="150" cy="250" r="4" />
              <circle cx="250" cy="100" r="4" fill="#0EA5E9" />
              <circle cx="250" cy="200" r="4" />
              <circle cx="350" cy="150" r="4" />
            </g>
          </svg>
        </div>
        {/* Bottom bars */}
        <div className="grid h-12 grid-cols-4 gap-4">
          {[10, 20, 5, 40].map((o, i) => (
            <div
              key={i}
              className="rounded border border-emerald-500/20 bg-emerald-500"
              style={{
                opacity: o / 100 + 0.05,
                boxShadow:
                  i === 3 ? "0 0 10px rgba(16,185,129,0.3)" : undefined,
              }}
            />
          ))}
        </div>
      </div>
      <Tags tags={tags} />
    </div>
  );
}

/** Source 5 — VisionGuard: bounding boxes + inference UI */
function AiVisionVisual({ tags }: { tags: string[] }) {
  return (
    <div
      className="relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-[#020617] lg:aspect-square"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(14,165,233,0.1) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="absolute inset-0 p-8">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-sky-400/20 bg-black/40">
          {/* Histogram bars */}
          <div className="absolute bottom-0 left-0 right-0 flex h-1/3 items-end gap-1 p-4">
            {[12, 24, 32, 40, 20, 10, 4].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-sky-400"
                style={{
                  height: h * 2.5,
                  opacity: 0.1 + (h / 40) * 0.9,
                  boxShadow:
                    h === 40 ? "0 0 15px rgba(14,165,233,0.4)" : undefined,
                }}
              />
            ))}
          </div>
          {/* Detection boxes */}
          <div className="absolute left-1/4 top-1/4 flex h-32 w-32 flex-col justify-start rounded border-2 border-emerald-500/60">
            <span className="w-fit bg-emerald-500/60 px-1 text-[8px] font-bold uppercase text-white">
              PERSON 0.98
            </span>
          </div>
          <div className="absolute bottom-1/3 right-1/4 flex h-40 w-24 flex-col justify-start rounded border-2 border-red-500/60">
            <span className="w-fit bg-red-500/60 px-1 text-[8px] font-bold uppercase text-white">
              HAZARD 0.94
            </span>
          </div>
          {/* Crosshair */}
          <div className="absolute left-0 top-1/2 h-px w-full bg-sky-400/40" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-sky-400/40" />
          {/* Inference stat */}
          <div className="absolute right-4 top-4 text-right">
            <p className="text-[10px] font-black uppercase tracking-tighter text-sky-400">
              FP32 INFERENCE
            </p>
            <p className="text-lg font-black text-white">4.2 ms</p>
          </div>
        </div>
      </div>
      <Tags tags={tags} />
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-400 backdrop-blur-md"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectVisual({ project }: { project: CaseStudy }) {
  switch (project.imageType) {
    case "url":
      return (
        <ImageUrl
          url={project.imageUrl!}
          alt={project.title}
          tags={project.tags}
        />
      );
    case "uiux-tokens":
      return <UiuxTokensVisual tags={project.tags} />;
    case "uiux-prototype":
      return <UiuxPrototypeVisual tags={project.tags} />;
    case "mobile-exploded":
      return <MobileExplodedVisual tags={project.tags} />;
    case "mobile-fintech":
      return <MobileFintechVisual tags={project.tags} />;
    case "web-isometric":
      return <WebIsometricVisual tags={project.tags} />;
    case "web-streaming":
      return <WebStreamingVisual tags={project.tags} />;
    case "ai-neural":
      return <AiNeuralVisual tags={project.tags} />;
    case "ai-vision":
      return <AiVisionVisual tags={project.tags} />;
  }
}

/* ------------------------------------------------------------------ */
/*  Project Card                                                       */
/* ------------------------------------------------------------------ */

function ProjectCard({ project }: { project: CaseStudy }) {
  const visual = <ProjectVisual project={project} />;
  const content = (
    <div className="space-y-10">
      <div>
        <h2 className="mb-4 text-4xl font-black tracking-tight text-white">
          {project.title}
        </h2>
        <p className="text-lg leading-relaxed text-slate-400">
          {project.description}
        </p>
      </div>
      <div className="space-y-8">
        <div className="flex gap-5">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
            <AlertCircle className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-60">
              The Challenge
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              {project.challenge}
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10">
            <FlaskConical className="h-5 w-5 text-sky-400" />
          </div>
          <div>
            <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-60">
              {project.solutionLabel ?? "The Lab Solution"}
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              {project.solution}
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
            <BadgeCheck className="h-5 w-5 text-emerald-mint" />
          </div>
          <div>
            <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-mint">
              {project.metricsLabel ?? "System Performance"}
            </h4>
            <div className="mt-2 flex flex-wrap gap-6">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <span className="metric-highlight block text-3xl font-black">
                    {m.value}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Link href={Routes.caseStudies.details(project.title)} className="project-card-glass grid items-center gap-16 rounded-3xl p-8 lg:grid-cols-2">
      {project.reverse ? (
        <>
          <div className="lg:order-1">{content}</div>
          <div className="lg:order-2">{visual}</div>
        </>
      ) : (
        <>
          {visual}
          {content}
        </>
      )}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Tab Data                                                           */
/* ------------------------------------------------------------------ */

const TABS: TabData[] = [
  {
    id: "all",
    label: "All Systems",
    badge: "Deep Tech Portfolio 2024",
    heading: "Engineering",
    headingHighlight: "Impact",
    subtext:
      "We architect scalable digital ecosystems through high-performance engineering and experimental laboratory standards.",
    projects: [
      {
        title: "Vertex Financial Suite",
        description:
          "Next-gen wealth management protocol integrating real-time market telemetry and predictive neural modeling.",
        imageType: "url",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDIDMUUBUxpp5_2z20c8JP8YtS-lUekLLHAlnOkvhn5eX_orN7ZPZeQDU-wCY57NgPIzZd9qisDE_sgAkeSDy3GGIAdgD1DTdWc0qnXvzLRntkJaKezd3vf6nsOqkn7b-dQzzgp_E1d8YmtJHDV5pOm93f9kcH-W4VpVQtdO8BXCwpWQ1IW89VBnf1n-y3B-U6WgRvvlul0VqriEYgl7-s00uTx_aQIvP-VGI7C4AfEcpKslqSkyBGpojaYRt6NX_o4TeOCNWkmFxw2",
        tags: ["React.js", "Node.js", "AWS"],
        challenge:
          "Legacy synchronization bottlenecks resulting in 8s+ latency, critical for high-frequency trading assets.",
        solution:
          "Deployed GraphQL federation with Redis edge-caching and binary WebSocket streams for sub-100ms prop updates.",
        metrics: [
          { value: "98%", label: "Latency Drop" },
          { value: "2.4x", label: "User Depth" },
        ],
      },
      {
        title: "AeroLogix Logistics",
        description:
          "Enterprise fleet optimization engine utilizing ML-driven pathfinding for global logistics pipelines.",
        imageType: "url",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBtLISD81HAjGcgQ03__MYmmbJH-AfCJ2sqGfztslT-brg0PHrpUMYSYr9rQhZIMeaQO7Nm9SQ3CCmFRFTVti3II8q5cZbzp6jEKQ8k9hOsoCYL8ipY51wGuyauQGcMpsN0RqwsAcR_Nl5nOK8MuMgJVTXRmmewmxwEdP8KzkLVps8bSH_7VQYKK_JQoq377plJX4d42twjOLimM3kdqg0CRJvRYPV-Jp7NYPq7n1Mr2VB1Woln0ZbBXu2Y_0oI3IGfMfZOTohCxPj0",
        tags: ["Go-lang", "Python ML", "Terraform"],
        challenge:
          "Structural inefficiency in dispatch logic causing 15% revenue bleed via fuel wastage and idle capacity.",
        solution:
          "Built a Go-based concurrent routing engine integrated with IoT telemetry and real-time sensor fusion.",
        metrics: [
          { value: "30%", label: "Fuel Efficiency" },
          { value: "50k+", label: "Daily Requests" },
        ],
        reverse: true,
      },
      {
        title: "VitalPulse Health",
        description:
          "Biometric data platform for remote patient monitoring with encrypted HIPAA-grade communication protocols.",
        imageType: "url",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5BUk6WxpLOYDLUZZSdsIjloPUVV6USoBivgFHiI9nkZ3PkaF3YF8jdaKHRQfcGU21vyOb6BMNfsEZeJgesrXrh6Hz2XMmXYrLuQeYpzV2gEGRPR4pohdFWAKK1BTAn9NFGnYTZlrItNMEi6FtfKm0EMGxwLVX8nRCb9PeCWFJd5VthnjY96lEed5vRS9yfFCQN7-kfbgJtsbbCHwMx9-LHownlk8NPHYU2lLMuJVmJA0HUrMJuC7ediVtU7DvmlRktfBBqtKi98nh",
        tags: ["Flutter", "Firebase", "Computer Vision"],
        challenge:
          "Complex onboarding UX led to 60% drop-off in the first 72 hours of patient lifecycle.",
        solution:
          'Engineered "Bio-Sync" automation pipeline, leveraging BLE integrations to automate 80% of data harvesting.',
        metrics: [
          { value: "50% faster", label: "Entry Speed" },
          { value: "85%", label: "LTV Retention" },
        ],
      },
    ],
    cta: {
      heading: "Scale Your Infrastructure.",
      subtext:
        "Our laboratories are ready to optimize your roadmap with production-grade engineering.",
      primaryLabel: "Schedule System Audit",
      secondaryLabel: "View Capabilities",
    },
  },
  {
    id: "web",
    label: "Web Apps",
    badge: "Portfolio // Web Applications",
    heading: "Scalable",
    headingHighlight: "Architectures",
    subtext:
      "Specialized in multi-tenant SaaS, high-performance dashboards, and complex enterprise web ecosystems.",
    projects: [
      {
        title: "CloudScale Analytics",
        description:
          "Enterprise-grade multi-tenant dashboard engineered for real-time telemetry processing and predictive resource allocation.",
        imageType: "web-isometric",
        tags: ["Next.js", "TypeScript", "PostgreSQL"],
        challenge:
          "Processing 1M+ concurrent data streams with zero UI jitter while maintaining strict tenant-level isolation.",
        solution:
          "Implemented a custom Next.js serverless architecture with edge-side rendering and isolated database schemas per tenant.",
        metrics: [
          { value: "40% faster", label: "Query Response" },
          { value: "99.9%", label: "Uptime Metric" },
        ],
      },
      {
        title: "NexuStream SaaS",
        description:
          "High-performance video streaming engine utilizing global CDN distributions and low-latency chunked delivery.",
        imageType: "web-streaming",
        tags: ["React", "AWS", "S3"],
        challenge:
          "Structural buffering issues during peak load leading to a 25% user drop-off rate in high-traffic regions.",
        solution:
          "Integrated React with AWS MediaLive and CloudFront with custom Lambda@Edge headers for dynamic transcoding.",
        metrics: [
          { value: "60%", label: "Buffer Reduction" },
          { value: "50% faster", label: "Time to First Frame" },
        ],
        reverse: true,
      },
    ],
    cta: {
      heading: "Scale Your Infrastructure.",
      subtext:
        "Our laboratories are ready to optimize your web application roadmap with production-grade engineering.",
      primaryLabel: "Schedule System Audit",
      secondaryLabel: "View Technical Docs",
    },
  },
  {
    id: "mobile",
    label: "Mobile",
    badge: "Mobile Systems Engineering",
    heading: "Mobile",
    headingHighlight: "Excellence",
    subtext:
      "Architecting high-performance native and cross-platform mobile ecosystems with biometric security and real-time telemetry.",
    projects: [
      {
        title: "FitSphere Pro",
        description:
          "Cross-platform biometric fitness tracking engine designed for elite performance monitoring and physiological data analysis.",
        imageType: "mobile-exploded",
        tags: ["Flutter", "Dart", "SQLite"],
        challenge:
          "Synchronizing high-frequency sensor data from wearables across disparate OS hardware while maintaining sub-50ms UI response.",
        solution:
          "Developed a proprietary background processing isolate in Flutter for asynchronous data harvesting and local SQLite buffering.",
        metrics: [
          { value: "99.9%", label: "Crash-free Sessions" },
          { value: "12ms", label: "Sync Latency" },
        ],
      },
      {
        title: "SwiftPay Go",
        description:
          "Native high-speed fintech application featuring real-time transaction processing and modular banking architecture.",
        imageType: "mobile-fintech",
        tags: ["Swift", "Kotlin", "gRPC"],
        challenge:
          "Legacy payment gateway bottlenecks causing mobile checkout timeouts and unstable transaction states during peak volume.",
        solution:
          "Engineered a Native-Swift/Kotlin middleware layer with optimistic UI updates and idempotent transaction retries.",
        metrics: [
          { value: "40% faster", label: "Checkout Flow" },
          { value: "100%", label: "Data Integrity" },
        ],
        reverse: true,
      },
    ],
    cta: {
      heading: "Scale Your Mobile Reach.",
      subtext:
        "Our labs specialize in high-load mobile environments. Ready to audit your application performance?",
      primaryLabel: "Start Mobile Audit",
      secondaryLabel: "Technical Stack",
    },
  },
  {
    id: "uiux",
    label: "UI/UX Lab",
    badge: "UI/UX Laboratory Active",
    heading: "Visual",
    headingHighlight: "Intelligence",
    subtext:
      "Transforming complex engineering into intuitive human experiences through data-driven design systems and high-fidelity prototyping.",
    projects: [
      {
        title: "Aether Design System",
        description:
          "A multi-brand design system architecture engineered for global enterprises, unifying brand identity across 50+ digital touchpoints.",
        imageType: "uiux-tokens",
        tags: ["Design Tokens", "Figma API", "React"],
        challenge:
          "Disjointed UI components across 12 product lines causing severe brand fragmentation and 40% engineering rework.",
        solution:
          "Implemented a tokenized architecture with headless UI components, enabling real-time global style synchronization.",
        metricsLabel: "UX Metrics",
        metrics: [
          { value: "WCAG 2.1", label: "Accessibility Compliance" },
          { value: "65%", label: "Dev Velocity Gain" },
        ],
      },
      {
        title: "Immersive Wealth Prototype",
        description:
          "High-fidelity interactive prototype for a next-gen wealth management app, focusing on spatial data visualization and micro-interactions.",
        imageType: "uiux-prototype",
        tags: ["Framer Motion", "WebGL", "Haptics"],
        challenge:
          "High complexity of financial data resulting in cognitive overload and low engagement among retail investors.",
        solution:
          "Engineered a physics-based motion engine and contextual data surfacing to guide user focus through complex portfolios.",
        metricsLabel: "UX Metrics",
        metrics: [
          { value: "92%", label: "Engagement Increase" },
          { value: "-40%", label: "Time-on-Task Reduction" },
        ],
        reverse: true,
      },
    ],
    cta: {
      heading: "Elevate User Experience.",
      subtext:
        "Our UI/UX laboratories bridge the gap between engineering complexity and user-centric delight.",
      primaryLabel: "Schedule Design Audit",
      secondaryLabel: "View Lab Process",
    },
  },
  {
    id: "aiml",
    label: "AI/ML Core",
    badge: "Compute Node: AI/ML Engineering",
    heading: "Neural",
    headingHighlight: "Architectures",
    subtext:
      "Deploying high-performance predictive engines and real-time vision systems with mission-critical precision on enterprise-grade infrastructure.",
    projects: [
      {
        title: "NeuralForecast API",
        description:
          "Advanced predictive supply chain engine leveraging deep LSTM modeling for multi-horizon demand forecasting.",
        imageType: "ai-neural",
        tags: ["PyTorch", "LSTM Ensemble", "H100 Cluster"],
        challenge:
          "High variance in seasonal logistics data caused 22% overstocking in European distribution hubs.",
        solutionLabel: "The AI Solution",
        solution:
          "Integrated a gated recurrent unit (GRU) ensemble with attention mechanisms to process 14M+ historical data points.",
        metricsLabel: "Model Metrics",
        metrics: [
          { value: "99.4%", label: "Accuracy Rate" },
          { value: "sub-50ms", label: "Inference Time" },
        ],
      },
      {
        title: "VisionGuard ML",
        description:
          "Real-time computer vision system for industrial safety monitoring and autonomous hazard detection.",
        imageType: "ai-vision",
        tags: ["YOLOv8", "TensorFlow", "Edge Cluster"],
        challenge:
          "Manual safety audits resulted in delayed detection of PPE violations and equipment malfunctions.",
        solutionLabel: "The AI Solution",
        solution:
          "Deployed YOLOv8 custom-trained weights on edge devices for zero-latency detection of restricted zone breaches.",
        metrics: [
          { value: "60% faster", label: "Response Time" },
          { value: "0", label: "Critical Incidents" },
        ],
        reverse: true,
      },
    ],
    cta: {
      heading: "Automate Intelligence.",
      subtext:
        "Scale your operations with neural systems engineered for maximum throughput and accuracy on high-performance compute clusters.",
      primaryLabel: "Request Model Audit",
      secondaryLabel: "AI Capabilities",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const currentTab = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2">
          <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-sky-500/10 blur-[120px]" />
          <div className="absolute -right-[10%] bottom-[10%] h-[40%] w-[40%] rounded-full bg-emerald-mint/5 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-block rounded-full border border-sky-500/30 bg-sky-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400">
            {currentTab.badge}
          </div>
          <h1 className="mb-8 text-5xl font-black leading-tight tracking-tighter text-white md:text-8xl">
            {currentTab.heading}{" "}
            <span className="bg-linear-to-r from-sky-400 to-emerald-mint bg-clip-text text-transparent">
              {currentTab.headingHighlight}
            </span>
            .
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-slate-400">
            {currentTab.subtext}
          </p>
          <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-8 py-2.5 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "cyber-glow bg-sky-500 font-bold text-white"
                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <main className="mx-auto max-w-7xl space-y-32 px-6 pb-40">
        {currentTab.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </main>

      {/* CTA */}
      <section className="relative border-t border-white/5 px-6 py-32">
        <div className="pointer-events-none absolute inset-0 bg-sky-500/5 opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-5xl font-black tracking-tighter text-white md:text-6xl">
            {currentTab.cta.heading}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-slate-400">
            {currentTab.cta.subtext}
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Link
              href={Routes.startProject}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-10 py-5 text-lg font-black uppercase tracking-tight text-white shadow-xl shadow-sky-500/30 transition-all hover:bg-sky-500/90"
            >
              {currentTab.cta.primaryLabel}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={Routes.services}
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-lg font-black uppercase tracking-tight text-white transition-all hover:bg-white/10"
            >
              {currentTab.cta.secondaryLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
