"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Settings,
  CreditCard,
  Cpu,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { Routes } from "@/lib/routes";
import Resource from "@/components/portfolio/sections/Resource";

// ─── FAQ Data ────────────────────────────────────────────────────────────────

type FAQItem = {
  question: string;
  answer: string;
  bullets?: string[];
};

type FAQCategory = {
  id: string;
  label: string;
  icon: typeof Settings;
  items: FAQItem[];
};

const FAQ_DATA: FAQCategory[] = [
  {
    id: "process",
    label: "Process",
    icon: Settings,
    items: [
      {
        question:
          "How do you manage sprint cycles and communication?",
        answer:
          "We operate on bi-weekly sprint cycles using an Agile-Scrum methodology. Every client gets a dedicated Slack channel and access to our Jira project boards for real-time tracking.",
        bullets: [
          "Daily async standups via Slack/Geekbot.",
          "Bi-weekly recorded video demos of functional code.",
          "CI/CD pipelines with staging deployments for every PR.",
        ],
      },
      {
        question:
          "Can we integrate our internal engineers into your team?",
        answer:
          "Absolutely. We offer embedded team augmentation where your engineers work alongside ours in shared repos, standups, and sprint ceremonies. We adapt to your existing Git workflows, code review standards, and CI/CD pipelines to ensure a seamless integration.",
        bullets: [
          "Shared repository access with role-based permissions.",
          "Joint code reviews and pair programming sessions.",
          "Unified Slack channels for instant collaboration.",
        ],
      },
      {
        question:
          "What is your typical onboarding timeframe for new projects?",
        answer:
          "Our standard onboarding takes 3-5 business days. This includes a technical discovery workshop, architecture planning, development environment setup, and the first sprint kick-off. For urgent projects, we offer an accelerated 48-hour onboarding track.",
        bullets: [
          "Day 1-2: Discovery workshop & requirement analysis.",
          "Day 3: Architecture proposal & tech stack confirmation.",
          "Day 4-5: Environment setup, first sprint planning & kick-off.",
        ],
      },
      {
        question:
          "What does a typical project timeline look like?",
        answer:
          "Timeline depends on scope, but most MVPs are delivered within 6-10 weeks. We break every project into clear milestones: Discovery (Week 1), Design & Architecture (Week 2-3), Core Development (Week 4-7), QA & Polish (Week 8-9), and Launch (Week 10). We provide weekly progress reports throughout.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: CreditCard,
    items: [
      {
        question: "What are your pricing models?",
        answer:
          "We offer three flexible engagement models tailored to different project needs: Fixed-Price for well-defined scopes, Time & Materials for evolving requirements, and Dedicated Team for long-term partnerships.",
        bullets: [
          "Fixed-Price: Ideal for MVPs and projects with clear specs. Full cost upfront.",
          "Time & Materials: Pay for actual hours worked. Best for iterative development.",
          "Dedicated Team: Monthly retainer for an embedded engineering squad.",
        ],
      },
      {
        question:
          "What is the average cost range for a project?",
        answer:
          "A typical MVP web application starts at $5,000-$15,000, while complex SaaS platforms range from $20,000-$60,000+. Mobile apps (Flutter) typically fall between $8,000-$25,000. We provide a detailed estimate after our free technical discovery call.",
      },
      {
        question: "Do you offer post-launch maintenance packages?",
        answer:
          "Yes. We offer tiered maintenance & support packages to keep your application secure, performant, and up-to-date after launch.",
        bullets: [
          "Standard: Bug fixes, security patches, and dependency updates.",
          "Growth: Standard + performance monitoring, analytics, and minor feature additions.",
          "Enterprise: Growth + 24/7 on-call support, SLA guarantees, and dedicated DevOps.",
        ],
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank wire transfers, Stripe (credit/debit cards), and PayPal. For larger engagements, we typically structure payments in milestones — 30% upfront, 40% at mid-point, and 30% on delivery. Custom payment schedules are available for retainer agreements.",
      },
    ],
  },
  {
    id: "technology",
    label: "Technology",
    icon: Cpu,
    items: [
      {
        question:
          "Which technologies do you specialize in for high-load systems?",
        answer:
          "Our core stack is purpose-built for performance and scalability. We specialize in the modern JavaScript/TypeScript ecosystem combined with battle-tested cloud infrastructure.",
        bullets: [
          "Frontend: Next.js 14 (App Router, RSC), React, Tailwind CSS, Framer Motion.",
          "Mobile: Flutter & Dart for cross-platform native-quality apps.",
          "Backend: Supabase (PostgreSQL, Auth, Edge Functions), Node.js, GoLang.",
          "Infrastructure: Vercel Edge Network, AWS, Docker, GitHub Actions CI/CD.",
        ],
      },
      {
        question:
          "Why do you recommend Next.js over other frameworks?",
        answer:
          "Next.js 14 with the App Router gives us server-side rendering, static generation, and edge delivery out of the box. This means your app scores 95+ on Lighthouse, loads in under 1.5 seconds, and can handle massive traffic spikes without custom caching layers. It's the fastest path from code to production-grade performance.",
      },
      {
        question:
          "How do you handle state management in complex applications?",
        answer:
          "We use a layered approach depending on complexity. For server state, we leverage React Server Components and Supabase real-time subscriptions. For client state, we use Redux Toolkit with RTK Query for API caching, or Zustand for lighter needs. This ensures zero unnecessary re-renders and optimal bundle size.",
        bullets: [
          "Server State: React Server Components + Supabase Realtime.",
          "API Cache: RTK Query with automatic cache invalidation.",
          "UI State: Zustand or React Context for lightweight needs.",
        ],
      },
      {
        question:
          "Do you build custom APIs or use BaaS platforms?",
        answer:
          "Both. For most projects, Supabase provides everything needed — PostgreSQL database, authentication, storage, and edge functions. For projects requiring custom business logic, high-frequency data processing, or third-party integrations, we build custom APIs with Node.js or GoLang serverless functions deployed on Vercel or AWS Lambda.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: ShieldCheck,
    items: [
      {
        question:
          "How do you handle data residency and GDPR compliance?",
        answer:
          "We architect all systems with compliance in mind from day one. Supabase allows us to choose specific data regions (US, EU, APAC), and we implement data encryption at rest and in transit. We can configure row-level security policies, audit logs, and data retention policies per your compliance requirements.",
        bullets: [
          "Region-specific database hosting for GDPR/HIPAA.",
          "AES-256 encryption at rest, TLS 1.3 in transit.",
          "Automated audit trails and data access logging.",
        ],
      },
      {
        question:
          "What authentication and authorization methods do you implement?",
        answer:
          "We use Supabase Auth as our primary authentication layer, supporting email/password, magic links, OAuth (Google, GitHub, Apple), and phone OTP. For authorization, we implement row-level security (RLS) policies in PostgreSQL and role-based access control (RBAC) in the application layer.",
        bullets: [
          "Multi-factor authentication (MFA/2FA) support.",
          "JWT-based sessions with automatic refresh tokens.",
          "Row-Level Security for database-level access control.",
        ],
      },
      {
        question: "Do you perform security audits on your code?",
        answer:
          "Yes. Every project goes through automated and manual security reviews. We run Snyk and GitHub Dependabot for dependency vulnerability scanning, SonarQube for static code analysis, and OWASP ZAP for penetration testing on staging environments before any production deployment.",
      },
      {
        question:
          "How do you protect against common web vulnerabilities?",
        answer:
          "Our security-first development practices include protection against the OWASP Top 10 threats. We implement CSP headers, input sanitization, parameterized queries (via Supabase/Prisma), rate limiting, and CORS policies as standard on every project. All API endpoints are validated with Zod schemas.",
        bullets: [
          "XSS Protection: Content Security Policy + DOMPurify sanitization.",
          "SQL Injection: Parameterized queries via Supabase/Prisma ORM.",
          "CSRF/CORS: Strict origin policies and token-based validation.",
          "Rate Limiting: API throttling to prevent brute-force and DDoS.",
        ],
      },
    ],
  },
];



// ─── Components ──────────────────────────────────────────────────────────────

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-xl border ${
        open
          ? "border-cyber-blue/50 shadow-[0_0_20px_rgba(59,130,246,0.1)] bg-white/3"
          : "border-border-white-10 bg-white/3 hover:border-white/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <span className="text-base md:text-lg font-medium pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-cyber-blue" : "text-muted-foreground group-hover:text-cyber-blue"
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border-white-10 pt-4">
            <p className="mb-4">{item.answer}</p>
            {item.bullets && (
              <ul className="space-y-2.5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-electric-violet mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("process");
  const [searchQuery, setSearchQuery] = useState("");

  const activeData = FAQ_DATA.find((c) => c.id === activeCategory)!;

  const filteredItems = searchQuery.trim()
    ? FAQ_DATA.flatMap((cat) =>
        cat.items.filter(
          (item) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : activeData.items;

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      {/* Hero Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Technical{" "}
          <span className="gradient-text">Knowledge Base</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Detailed insights into our engineering workflows, pricing structures,
          and deep tech expertise.
        </p>
      </header>

      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-16">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          className="w-full bg-white/5 border border-border-white-10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/50 transition-all placeholder:text-muted-foreground/50 text-foreground"
          placeholder="Search technical documentation, tech stacks, or billing..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Categories */}
        <aside className="lg:col-span-3">
          <div className="flex flex-row lg:flex-col gap-2 sticky top-24 overflow-x-auto pb-2 lg:pb-0">
            {FAQ_DATA.map((category) => {
              const isActive = activeCategory === category.id && !isSearching;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery("");
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-cyber-blue/20 border border-cyber-blue/30 text-cyber-blue"
                      : "hover:bg-white/5 border border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <category.icon className="h-4 w-4 shrink-0" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </aside>

        {/* FAQ List */}
        <div className="lg:col-span-9 space-y-4">
          {isSearching ? (
            <>
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyber-blue rounded-full" />
                Search Results ({filteredItems.length})
              </h2>
              {filteredItems.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-lg mb-2">No results found</p>
                  <p className="text-sm">
                    Try different keywords or{" "}
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-cyber-blue hover:underline"
                    >
                      clear the search
                    </button>
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredItems.map((item) => (
                    <AccordionItem key={item.question} item={item} />
                  ))}
                </div>
              )}
            </>
          ) : (
            FAQ_DATA.filter((cat) => cat.id === activeCategory).map(
              (category) => (
                <div key={category.id}>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-electric-violet rounded-full" />
                    {category.label === "Process"
                      ? "Development Process"
                      : category.label === "Pricing"
                        ? "Pricing & Billing"
                        : category.label === "Technology"
                          ? "Technology & Infrastructure"
                          : "Security & Compliance"}
                  </h2>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <AccordionItem key={item.question} item={item} />
                    ))}
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="mt-24">
        <div className="rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-border-white-10 backdrop-blur-xl bg-white/3">
          {/* Background Glow Decor */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyber-blue/10 blur-[100px] rounded-full" />
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-electric-violet/10 blur-[100px] rounded-full" />
          <div className="relative z-10 max-w-lg text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">
              Still have technical questions?
            </h3>
            <p className="text-muted-foreground">
              Our solution architects are available for a deep-dive technical
              consultation to discuss your specific infrastructure needs.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
            <Link
              href="/start-project"
              className="px-6 py-3 bg-white text-background-dark font-bold rounded-lg hover:bg-slate-200 transition-all text-center text-sm"
            >
              Book a Technical Call
            </Link>
            <Link
              href="/start-project"
              className="px-6 py-3 bg-white/5 border border-border-white-10 font-bold rounded-lg hover:bg-white/10 transition-all text-center text-sm"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery/Resources */}
      <Resource />
    </div>
  );
}
