"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Lock, Zap } from "lucide-react";
import { Routes } from "@/lib/routes";

const STORAGE_KEY = "devtolab-cookie-consent";

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [analytical, setAnalytical] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const id = setTimeout(() => {
      if (cancelled) return;
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        setIsOpen(!stored);
      } catch {
        setIsOpen(true);
      }
    }, 0);
    return () => {
      cancelled = true;
      clearTimeout(id);
    };
  }, []);

  const saveAndClose = (payload: { analytical: boolean; marketing: boolean }) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...payload, at: Date.now() }));
      setIsOpen(false);
    } catch {
      setIsOpen(false);
    }
  };

  const acceptAll = () => saveAndClose({ analytical: true, marketing: true });
  const savePreferences = () => saveAndClose({ analytical, marketing });

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" aria-hidden />
      <div
        className="fixed bottom-8 left-1/2 z-50 w-full max-w-2xl -translate-x-1/2 px-4"
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-desc"
      >
        <div
          className="flex flex-col gap-6 rounded-xl border border-white/10 p-8 shadow-2xl"
          style={{
            background: "rgba(23, 23, 23, 0.8)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyber-blue/20">
                  <Shield className="h-5 w-5 text-cyber-blue" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-cyber-blue/80">
                  DevToLab Core
                </span>
              </div>
              <h2 id="cookie-consent-title" className="text-2xl font-bold tracking-tight text-white">
                Trust & Transparency
              </h2>
              <p id="cookie-consent-desc" className="mt-2 max-w-lg text-sm leading-relaxed text-slate-400">
                The Lab utilizes advanced data protocols to optimize engineering performance and streamline development
                workflows. Customize your preference to balance performance with privacy.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Essential - always on, disabled */}
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4">
              <div className="flex flex-col">
                <span className="flex items-center gap-2 font-medium text-white">
                  Essential
                  <Lock className="h-3 w-3 text-slate-500" />
                </span>
                <span className="mt-1 text-xs text-slate-500">
                  Required for the site to function. Cannot be disabled.
                </span>
              </div>
              <div className="relative inline-flex cursor-not-allowed items-center">
                <div className="h-6 w-11 rounded-full bg-cyber-blue/40" />
                <div className="absolute left-6 top-1 h-4 w-4 rounded-full bg-white" />
              </div>
            </div>

            {/* Analytical */}
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4">
              <div className="flex flex-col">
                <span className="font-medium text-white">Analytical</span>
                <span className="mt-1 text-xs text-slate-500">
                  Help us understand how you interact with our engineering tools.
                </span>
              </div>
              <label className="group relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={analytical}
                  onChange={(e) => setAnalytical(e.target.checked)}
                  className="sr-only"
                />
                <div className="relative h-6 w-11 rounded-full bg-slate-700 transition-colors group-has-checked:bg-cyber-blue">
                  <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 group-has-checked:translate-x-5" />
                </div>
              </label>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4">
              <div className="flex flex-col">
                <span className="font-medium text-white">Marketing</span>
                <span className="mt-1 text-xs text-slate-500">
                  Personalized updates regarding new Lab features and services.
                </span>
              </div>
              <label className="group relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="sr-only"
                />
                <div className="relative h-6 w-11 rounded-full bg-slate-700 transition-colors group-has-checked:bg-cyber-blue">
                  <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 group-has-checked:translate-x-5" />
                </div>
              </label>
            </div>
          </div>

          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={acceptAll}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyber-blue to-electric-violet px-8 py-3 font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] sm:w-auto"
            >
              Accept All
              <Zap className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={savePreferences}
              className="w-full rounded-full border border-white/10 bg-white/5 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
            >
              Save Preferences
            </button>
            <Link
              href={Routes.privacyPolicy}
              className="ml-auto text-xs text-slate-500 underline decoration-slate-500/30 underline-offset-4 transition-colors hover:text-cyber-blue"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
