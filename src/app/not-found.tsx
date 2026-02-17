import Link from "next/link";
import { Home, Bug, FlaskConical } from "lucide-react";
import { Routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden bg-background-dark text-slate-200">
      {/* Tech Grid Background */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* Center Glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-blue/10 rounded-full blur-[120px] z-0" />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 text-center py-8">
        {/* Header Badge */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="flex items-center space-x-2 bg-cyber-blue/10 px-4 py-2 rounded-full border border-cyber-blue/20">
            <FlaskConical className="h-4 w-4 text-cyber-blue" />
            <span className="text-xs font-bold tracking-widest uppercase text-cyber-blue">
              DevToLab Engineering
            </span>
          </div>
        </div>

        {/* Central Visual: Broken Flask SVG */}
        <div className="relative h-36 md:h-48 flex items-center justify-center mb-6 md:mb-8">
          {/* Particle Effects */}
          <div className="absolute top-4 left-1/2 -translate-x-24 md:-translate-x-32 w-2 h-2 bg-cyber-blue rounded-full opacity-60 animate-pulse" />
          <div className="absolute top-10 right-1/2 translate-x-28 md:translate-x-40 w-1.5 h-1.5 bg-electric-violet rounded-full opacity-40 animate-pulse" />
          <div className="absolute bottom-4 left-1/2 -translate-x-16 md:-translate-x-20 w-1 h-1 bg-cyber-blue rounded-full opacity-50 animate-pulse" />

          <div className="relative drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <svg
              className="mx-auto h-32 w-32 md:h-48 md:w-48"
              fill="none"
              viewBox="0 0 240 240"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Base Flask Shape */}
              <path
                className="opacity-30"
                d="M80 40H160L160 80L180 120L180 200C180 211.046 171.046 220 160 220H80C68.9543 220 60 211.046 60 200L60 120L80 80L80 40Z"
                stroke="url(#paint0_linear_404)"
                strokeDasharray="4 4"
                strokeWidth="2"
              />
              {/* Liquid/Data */}
              <path
                d="M65 160C65 160 90 145 120 160C150 175 175 160 175 160V195C175 203.284 168.284 210 160 210H80C71.7157 210 65 203.284 65 195V160Z"
                fill="url(#paint1_linear_404)"
                fillOpacity="0.2"
              />
              {/* Glitch Lines */}
              <rect
                className="opacity-80"
                fill="#3B82F6"
                height="2"
                width="140"
                x="50"
                y="140"
              />
              <rect
                className="opacity-60"
                fill="#8B5CF6"
                height="1"
                width="100"
                x="70"
                y="145"
              />
              {/* Circuitry Details */}
              <circle cx="120" cy="60" fill="#3B82F6" r="3" />
              <path d="M120 63V80" stroke="#3B82F6" strokeWidth="1.5" />
              <path d="M100 120L85 140" stroke="#3B82F6" strokeWidth="1.5" />
              <path d="M140 120L155 140" stroke="#3B82F6" strokeWidth="1.5" />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_404"
                  x1="120"
                  x2="120"
                  y1="40"
                  y2="220"
                >
                  <stop stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint1_linear_404"
                  x1="120"
                  x2="120"
                  y1="140"
                  y2="210"
                >
                  <stop stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Typography */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 gradient-text leading-tight">
          404: Lab Experiment Not Found
        </h1>
        <p className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
          The resource you are looking for has been decommissioned, encrypted,
          or moved to a new sector in our high-performance cloud infrastructure.
        </p>

        {/* Search & Actions */}
        <div className="max-w-md w-full mx-auto space-y-6">
          {/* Search Bar */}
          {/* <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-cyber-blue to-electric-violet rounded-full blur opacity-20 group-focus-within:opacity-40 transition duration-500" />
            <div className="relative flex items-center glass-panel rounded-full px-6 py-3.5">
              <Search className="h-5 w-5 text-cyber-blue mr-3 shrink-0" />
              <input
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-white w-full placeholder:text-slate-600 text-sm"
                placeholder="Search the database..."
                type="text"
              />
            </div>
          </div> */}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white bg-cyber-blue rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Return to Base
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link
              href={Routes.reportBug}
              className="px-8 py-3.5 font-medium text-slate-400 hover:text-cyber-blue transition-colors flex items-center"
            >
              <Bug className="h-4 w-4 mr-2" />
              Report a Bug
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Utility Links - pinned to bottom */}
      <footer className="relative z-10 pb-6 pt-6 border-t border-cyber-blue/10 flex flex-wrap justify-center gap-8 text-xs font-medium uppercase tracking-widest text-slate-600">
        <Link href="/" className="hover:text-cyber-blue transition-colors">
          Documentation
        </Link>
        <Link href="/" className="hover:text-cyber-blue transition-colors">
          API Status
        </Link>
        <Link href="/" className="hover:text-cyber-blue transition-colors">
          Contact Support
        </Link>
      </footer>

      {/* Visual Accents - Bottom Left */}
      <div className="fixed bottom-10 left-0 p-8 opacity-20 pointer-events-none hidden lg:block z-10">
        <div className="text-[10px] font-mono space-y-1">
          <p>&gt; ERROR_CODE: 0xDE7701AB</p>
          <p>&gt; SYSTEM_STATUS: ANOMALY_DETECTED</p>
          <p>&gt; TRACE_ID: 882-911-LAB</p>
          <p>&gt; LATENCY: 0.002ms</p>
        </div>
      </div>

      {/* Visual Accents - Top Right */}
      <div className="fixed top-0 right-0 p-8 opacity-20 pointer-events-none hidden lg:block z-10">
        <div className="text-[10px] font-mono text-right space-y-1">
          <p>DEVTOLAB_OS v4.0.4</p>
          <p>SECTOR_7G_ACCESS: DENIED</p>
          <p>KERNEL_PANIC: NULL_POINTER</p>
        </div>
      </div>
    </div>
  );
}
