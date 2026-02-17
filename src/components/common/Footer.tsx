"use client";

import Link from "next/link";
import { FlaskConical, Github, Twitter } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_RESOURCE_LINKS,
  FOOTER_BOTTOM_MENU_LINKS,
} from "@/lib/menu";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-32 pb-16 dark:border-border-white-10 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top grid */}
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyber-blue to-electric-violet shadow-lg shadow-cyber-blue/10">
                <FlaskConical className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold uppercase tracking-tighter text-slate-900 dark:text-white">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-500">
              High-performance engineering for ambitious startups and enterprise
              labs. Building the future of digital products.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 className="mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
              Company
            </h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-500">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-cyber-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
              Resources
            </h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-500">
              {FOOTER_RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-cyber-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
              Connect
            </h5>
            <div className="mb-8 flex gap-4">
              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-all hover:border-cyber-blue/50 hover:bg-cyber-blue/5 dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
              >
                <Twitter className="h-5 w-5 text-slate-400" />
              </Link>
              <Link
                href="https://github.com/md-yasin-miah/dev-to-lab"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-all hover:border-cyber-blue/50 hover:bg-cyber-blue/5 dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl"
              >
                <Github className="h-5 w-5 text-slate-400" />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                Systems: Nominal
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-200 pt-12 dark:border-border-white-10 md:flex-row">
          <p className="text-xs font-medium text-slate-400 dark:text-slate-600">
            &copy; {new Date().getFullYear()} DEVTOLAB SOFTWARE SYSTEMS. ALL
            RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
            {FOOTER_BOTTOM_MENU_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-cyber-blue"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
