import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  Smartphone,
  Sparkles,
  Server,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { NavBar } from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import { Routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "DevToLab | Services Overview",
  description:
    "We architect, design, and deploy high-performance applications using the modern stack. From Next.js scale to Supabase reliability.",
  openGraph: {
    title: "Services | DevToLab",
    description:
      "Web apps, mobile engineering, design systems, and cloud infrastructure — built at the speed of engineering.",
    type: "website",
  },
};

const SERVICE_CARDS = [
  {
    title: "Web Application Development",
    description:
      "Specializing in Next.js ecosystems. We build SSR/ISR applications optimized for Core Web Vitals and edge delivery.",
    icon: Layers,
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    visual: "code",
  },
  {
    title: "Native Mobile Engineering",
    description:
      "Cross-platform excellence with Flutter and React Native. High-fidelity animations and native hardware integration.",
    icon: Smartphone,
    tags: ["Flutter", "React Native", "Fastlane"],
    visual: "devices",
  },
  {
    title: "The Design Lab",
    description:
      "We don't just design interfaces; we engineer experiences. Modular design systems built for developers and users.",
    icon: Sparkles,
    tags: ["Figma Mastery", "Design Ops", "Storybook"],
    visual: "grid",
  },
  {
    title: "Infrastructure & Cloud",
    description:
      "Scaleable backends powered by Supabase and AWS. We handle the orchestration so you can focus on the business logic.",
    icon: Server,
    tags: ["Supabase", "PostgreSQL", "Serverless"],
    visual: "bars",
  },
];

const LAB_FEATURES = [
  "Atomic Design Systems",
  "Zero-Latency Prototypes",
  "Accessibility-First Mindset",
];

function CodeVisual() {
  return (
    <div className="relative h-32 w-full overflow-hidden rounded-lg border border-white/5 bg-black/40 p-4 font-mono text-[10px] text-slate-500">
      <div className="mb-2 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-red-500/30" />
        <div className="h-2 w-2 rounded-full bg-yellow-500/30" />
        <div className="h-2 w-2 rounded-full bg-green-500/30" />
      </div>
      <code className="block text-cyber-blue">
        {"export async function GET() {"}
      </code>
      <code className="ml-4 block">
        {"const data = await db.project.findMany();"}
      </code>
      <code className="ml-4 block">
        {"return Response.json({ data });"}
      </code>
      <code className="block text-cyber-blue">{"}"}</code>
      <div className="absolute inset-0 bg-linear-to-t from-background-dark/80 to-transparent" />
    </div>
  );
}

function DevicesVisual() {
  return (
    <div className="relative flex h-32 w-full items-end justify-around rounded-lg border border-white/5 bg-black/40 p-4">
      <div className="relative h-24 w-12 overflow-hidden rounded-t-lg border-x border-t border-white/10 bg-white/5">
        <div className="absolute inset-x-2 top-4 h-1 rounded-full bg-cyber-blue/40" />
        <div className="absolute inset-x-2 top-7 h-10 rounded bg-white/5" />
      </div>
      <div className="relative h-28 w-14 overflow-hidden rounded-t-xl border-x border-t border-white/20 bg-white/10 shadow-2xl">
        <div className="absolute inset-x-3 top-5 h-1.5 rounded-full bg-cyber-blue/60" />
        <div className="absolute inset-x-3 top-10 h-12 rounded bg-white/10" />
      </div>
      <div className="relative h-20 w-12 overflow-hidden rounded-t-lg border-x border-t border-white/10 bg-white/5">
        <div className="absolute inset-x-2 top-4 h-1 rounded-full bg-cyber-blue/40" />
        <div className="absolute inset-x-2 top-7 h-8 rounded bg-white/5" />
      </div>
    </div>
  );
}

function GridVisual() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="aspect-square animate-pulse rounded border border-cyber-blue/40 bg-cyber-blue/20" />
      <div className="aspect-square rounded border border-white/10 bg-white/5" />
      <div className="aspect-square rounded border border-white/10 bg-white/5" />
      <div className="aspect-square rounded border border-white/10 bg-white/5" />
      <div className="aspect-square rounded border border-white/10 bg-white/5" />
      <div className="aspect-square rounded border border-white/10 bg-white/5" />
      <div className="aspect-square rounded border border-cyber-blue/40 bg-cyber-blue/20" />
      <div className="aspect-square rounded border border-white/10 bg-white/5" />
    </div>
  );
}

function BarsVisual() {
  return (
    <div className="space-y-2">
      {[85, 60, 92].map((w) => (
        <div
          key={w}
          className="h-2 w-full overflow-hidden rounded bg-white/5"
        >
          <div
            className="h-full bg-cyber-blue/50"
            style={{ width: `${w}%` }}
          />
        </div>
      ))}
    </div>
  );
}

const VISUAL_MAP: Record<string, () => React.JSX.Element> = {
  code: CodeVisual,
  devices: DevicesVisual,
  grid: GridVisual,
  bars: BarsVisual,
};

export default function ServicesPage() {
  return (
      <div className="py-20">
        {/* Hero */}
        <section className="relative mx-auto mb-32 max-w-7xl px-6">
          {/* Radial glow */}
          <div className="bg-glow-radial pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-full -translate-x-1/2" />
          {/* Grid bg */}
          <div
            className="absolute inset-0 -z-20 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="mx-auto max-w-4xl space-y-6 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyber-blue/20 bg-cyber-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyber-blue">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber-blue opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyber-blue" />
              </span>
              Engineering Excellence
            </div>

            <h1 className="text-6xl font-extrabold leading-[1.1] tracking-tighter text-white md:text-7xl">
              Build at the speed <br />
              <span className="bg-linear-to-r from-cyber-blue via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                of engineering.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-400">
              We architect, design, and deploy high-performance applications
              using the modern stack. From Next.js scale to Supabase
              reliability.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
              <Link
                href="#services"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyber-blue px-8 py-4 font-bold text-white transition-all hover:ring-4 hover:ring-cyber-blue/20 sm:w-auto"
              >
                Explore Our Stack
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={Routes.home}
                className="w-full rounded-xl border border-white/10 bg-surface-dark px-8 py-4 font-bold text-white transition-all hover:bg-white/5 sm:w-auto"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </section>

        {/* Service cards */}
        <section
          id="services"
          className="mx-auto mb-32 grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2"
        >
          {SERVICE_CARDS.map((card) => {
            const Visual = VISUAL_MAP[card.visual];
            return (
              <div
                key={card.title}
                className="group relative rounded-2xl p-0.5 transition-all duration-500 hover:scale-[1.01]"
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyber-blue/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-surface-dark p-8 backdrop-blur-xl">
                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-cyber-blue/10">
                      <card.icon className="h-6 w-6 text-cyber-blue" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mb-8 leading-relaxed text-slate-400">
                      {card.description}
                    </p>
                    <div className="mb-8 flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Visual />
                </div>
              </div>
            );
          })}
        </section>

        {/* Tech logos marquee */}
        <section className="mb-32">
          <div className="mx-auto mb-12 max-w-7xl px-6">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
              Powering industry leaders with
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 text-xl font-bold uppercase tracking-widest text-slate-600 opacity-40 transition-all duration-500 hover:opacity-70">
            {[
              "Next.js",
              "React",
              "Supabase",
              "Vercel",
              "Flutter",
              "TypeScript",
              "Tailwind",
            ].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </section>

        {/* The Lab: Design Engineering */}
        <section className="mx-auto mb-32 max-w-7xl px-6">
          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-surface-dark md:grid-cols-2">
            <div className="flex flex-col justify-center p-12">
              <h2 className="mb-6 text-4xl font-bold text-white">
                The Lab: <br />
                <span className="text-cyber-blue">Design Engineering</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-400">
                We bridge the gap between design and production code. Our
                &quot;Lab&quot; environment ensures every pixel is a direct
                translation of component logic.
              </p>
              <ul className="space-y-4">
                {LAB_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-400"
                  >
                    <CheckCircle className="h-5 w-5 text-cyber-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative border-l border-white/5 bg-black/40 p-6">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-cyber-blue/10" />
                    <div>
                      <div className="h-3 w-24 rounded bg-white/10" />
                      <div className="mt-2 h-2 w-16 rounded bg-white/5" />
                    </div>
                  </div>
                  <div className="h-6 w-12 rounded-full bg-cyber-blue/30" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-40 w-full items-center justify-center rounded-lg bg-white/5">
                    <svg
                      className="h-10 w-10 text-white/5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-20 flex-1 rounded-xl border border-white/10 bg-white/5 p-4" />
                  <div className="h-20 flex-1 rounded-xl border border-white/10 bg-white/5 p-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[2rem] border border-cyber-blue/20 bg-linear-to-b from-cyber-blue/10 to-transparent p-12">
            <h2 className="mb-6 text-4xl font-bold text-white">
              Ready to engineer your future?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-slate-400">
              Join the 50+ companies that have scaled their digital
              infrastructure with DevToLab.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={Routes.contact}
                className="rounded-xl bg-cyber-blue px-10 py-4 font-bold text-white shadow-xl shadow-cyber-blue/20 transition-all hover:bg-cyber-blue/90"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="https://github.com/md-yasin-miah/dev-to-lab"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-10 py-4 font-bold text-white transition-all hover:bg-white/10"
              >
                View Open Source
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
