"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  CheckCircle,
  MessageCircle,
  MapPin,
  Send,
  ChevronDown,
} from "lucide-react";
import { Routes } from "@/lib/routes";

const BUDGET_OPTIONS = ["< $5k", "$5k-$20k", "$20k-$50k", "$50k+"];

const PROJECT_TYPES = [
  { value: "web", label: "Web Application" },
  { value: "mobile", label: "Mobile Application" },
  { value: "ai", label: "AI / Machine Learning" },
  { value: "cloud", label: "Cloud Infrastructure" },
  { value: "other", label: "Other Engineering Task" },
];

const MEETING_BENEFITS = [
  "Direct access to engineering leads",
  "Project feasibility assessment",
  "Rough cost & timeline estimate",
];

export default function StartProjectPage() {
  const [selectedBudget, setSelectedBudget] = useState("$20k-$50k");

  return (
    <div className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Hero heading */}
        <div className="mb-16 max-w-3xl">
          <h1 className="mb-6 bg-linear-to-r from-foreground via-foreground to-electric-violet bg-clip-text text-5xl font-extrabold tracking-tighter text-transparent lg:text-7xl">
            Ready to build something amazing?
          </h1>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Fill out the form below or book a direct technical consultation with
            our engineering team in Dhaka. Typical response time:{" "}
            <span className="font-bold text-cyan-400">&lt; 12 hours</span>.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left column — sidecards */}
          <div className="space-y-8 lg:col-span-5">
            {/* Book a Meeting */}
            <div className="rounded-2xl border border-white/10 bg-white/3 p-8 backdrop-blur-2xl dark:border-white/10 dark:bg-white/3">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-foreground">
                    Book a Meeting
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule a 30-minute discovery call with our solutions
                    architect.
                  </p>
                </div>
                <Calendar className="h-9 w-9 text-cyan-400" />
              </div>
              <div className="mb-8 space-y-4">
                {MEETING_BENEFITS.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <CheckCircle className="h-4 w-4 text-cyan-400" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 py-4 font-bold text-foreground transition-all hover:border-cyan-400 hover:bg-cyan-400/10">
                Open Scheduling Assistant
              </button>
            </div>

            {/* WhatsApp */}
            <Link
              href="#"
              className="glass-panel group flex items-center gap-4 rounded-xl p-6 transition-all hover:border-green-500/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white transition-transform group-hover:scale-105">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground">
                  Chat on WhatsApp
                </h4>
                <p className="text-sm text-muted-foreground">
                  Quick questions? Message us now.
                </p>
              </div>
            </Link>

            {/* Headquarters */}
            <div className="glass-panel relative overflow-hidden rounded-xl p-8">
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-electric-violet" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Headquarters
                  </span>
                </div>
                <h4 className="mb-1 text-xl font-bold text-foreground">
                  Dhaka, Bangladesh
                </h4>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  Banani, Block E, Road 11
                  <br />
                  Dhaka 1213, Bangladesh
                </p>
                <div className="relative h-32 overflow-hidden rounded-lg bg-neutral-900">
                  <Image
                    alt="Map of Dhaka Bangladesh"
                    className="object-cover opacity-40 grayscale transition-all duration-500 hover:opacity-70 hover:grayscale-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvd9Ib1c8N06WyUSbb-Yu4MyLs71iASMlJCR5Br2DADg_VDkna4sqJIPhzIsuBAXyuC3b23uVaJEqRdoxXzB2Eo0KXEng9xLWgchOlw82Pm9NE_SdRp1oipp8M0zt5wQ-20EzVSgdnS2OByO6o1pVBN9QwZm49q2pcN309mS-InFuu_44Rjnex44TOsr0FG21mrQMhMGsxm4FBTBBNjEP0NGRmrMyYZIXynvdLfDu63KQrqICxeqXucWslmS-bhKC9B229AcCEp4dW"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-7">
            <form className="glass-panel space-y-8 rounded-2xl p-8 lg:p-12">
              {/* Name + Email */}
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-foreground outline-none transition-all placeholder:text-neutral-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 dark:border-neutral-800 dark:bg-surface-dark dark:placeholder:text-neutral-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-foreground outline-none transition-all placeholder:text-neutral-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 dark:border-neutral-800 dark:bg-surface-dark dark:placeholder:text-neutral-600"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Project Type
                </label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-xl border border-neutral-300 bg-white px-4 py-3 text-foreground outline-none transition-all focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 dark:border-neutral-800 dark:bg-surface-dark">
                    {PROJECT_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              {/* Budget Range */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Budget Range (USD)
                </label>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {BUDGET_OPTIONS.map((budget) => (
                    <label key={budget} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value={budget}
                        checked={selectedBudget === budget}
                        onChange={() => setSelectedBudget(budget)}
                        className="peer sr-only"
                      />
                      <div className="rounded-xl border border-neutral-300 bg-white p-3 text-center text-sm font-bold text-muted-foreground transition-all peer-checked:border-cyan-400 peer-checked:bg-cyan-400/10 peer-checked:text-foreground dark:border-neutral-800 dark:bg-surface-dark">
                        {budget}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Project Description
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project requirements, goals, and any specific technologies you're considering..."
                  className="w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-3 text-foreground outline-none transition-all placeholder:text-neutral-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 dark:border-neutral-800 dark:bg-surface-dark dark:placeholder:text-neutral-600"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-br from-electric-violet to-indigo-500 py-5 text-lg font-extrabold text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all hover:shadow-[0_0_35px_rgba(139,92,246,0.7)]"
                >
                  Send Proposal
                  <Send className="h-5 w-5" />
                </button>
                <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
                  By clicking &quot;Send Proposal&quot;, you agree to our{" "}
                  <Link
                    href={Routes.privacyPolicy}
                    className="underline transition-colors hover:text-foreground"
                  >
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Trust logos */}
        <div className="mt-24 border-t border-border pt-12">
          <p className="mb-12 text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by industry leaders worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-20 grayscale md:gap-16">
            {[32, 24, 36, 28, 32].map((w, i) => (
              <div
                key={i}
                className="rounded-full bg-slate-500"
                style={{ height: 24, width: w * 4 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
