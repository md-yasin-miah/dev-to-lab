"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Terminal,
  ArrowRight,
  Layers,
  Cpu,
  Briefcase,
  HelpCircle,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE_CONFIG } from "@/lib/constants";
import { MAIN_NAV_LINKS } from "@/lib/menu";
import { Routes } from "@/lib/routes";

const NAV_ICONS: Record<string, React.ElementType> = {
  [Routes.services]: Briefcase,
  [Routes.techStack]: Cpu,
  [Routes.caseStudies]: Layers,
  [Routes.faq]: HelpCircle,
};

export function NavBar() {
  const pathname = usePathname() ?? "";
  const [isOpen, setIsOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY.current && currentY > 80);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur transition-transform duration-600 ease-in-out supports-backdrop-filter:bg-background/60 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* this site is under construction */}
      <div className="bg-red-500/10 text-red-500 dark:text-red-300 text-base font-semibold text-center p-2">
        This site is under construction
      </div>
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <div className="bg-linear-to-r from-blue-500 to-violet-600 dark:from-blue-400 dark:to-violet-500 px-1 rounded">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            <span>{SITE_CONFIG.name}</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {MAIN_NAV_LINKS.map((link, index) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link key={index} href={link.href} className="group relative whitespace-nowrap font-semibold">
                {/* Base text — fades out when active */}
                <span
                  className={`transition-opacity duration-300 ${
                    isActive ? "opacity-0" : "opacity-100 text-muted-foreground group-hover:text-primary"
                  }`}
                >
                  {link.label}
                </span>
                {/* Gradient text — fades in when active */}
                <span
                  aria-hidden
                  className={`absolute inset-0 whitespace-nowrap bg-linear-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent transition-opacity duration-300 dark:from-blue-400 dark:to-violet-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href={Routes.startProject}>Start a Project</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          <Button asChild size="sm">
            <Link href={Routes.startProject}>Start a Project</Link>
          </Button>
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="flex w-[85%] max-w-xs flex-col overflow-hidden border-l border-border/40 bg-background p-0"
            >
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>

              {/* Header — Logo + Close */}
              <div className="flex items-center justify-between border-b border-border/40 px-6 py-5">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="rounded bg-linear-to-r from-blue-500 to-violet-600 px-1 dark:from-blue-400 dark:to-violet-500">
                    <Terminal className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm">{SITE_CONFIG.name}</span>
                </Link>
                <SheetClose className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  <X className="h-4 w-4" />
                </SheetClose>
              </div>

              {/* Nav links */}
              <nav className="flex-1 space-y-1 px-4 py-4">
                {MAIN_NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  const Icon = NAV_ICONS[link.href] ?? Layers;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center gap-3 rounded-lg px-4 py-3 text-[15px] font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-linear-to-r from-blue-500/10 to-violet-600/10 dark:from-blue-500/15 dark:to-violet-600/15"
                          : "hover:bg-muted/60"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors duration-200 ${
                          isActive
                            ? "bg-linear-to-br from-blue-500 to-violet-600 text-white shadow-md shadow-blue-500/20 dark:from-blue-400 dark:to-violet-500"
                            : "bg-muted text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="relative whitespace-nowrap font-semibold">
                        <span
                          className={`transition-opacity duration-300 ${
                            isActive ? "opacity-0" : "opacity-100 text-foreground"
                          }`}
                        >
                          {link.label}
                        </span>
                        <span
                          aria-hidden
                          className={`absolute inset-0 whitespace-nowrap bg-linear-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent transition-opacity duration-300 dark:from-blue-400 dark:to-violet-500 ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {link.label}
                        </span>
                      </span>
                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Footer — CTA + accent */}
              <div className="mt-auto border-t border-border/40 px-4 py-5 space-y-4">
                <Button
                  asChild
                  className="w-full gap-2 rounded-xl bg-linear-to-r from-blue-500 to-violet-600 py-5 font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/30 dark:from-blue-400 dark:to-violet-500"
                >
                  <Link href={Routes.startProject} onClick={() => setIsOpen(false)}>
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">
                  {SITE_CONFIG.name} Engineering
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
