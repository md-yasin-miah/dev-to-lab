"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE_CONFIG } from "@/lib/constants";
import { MAIN_NAV_LINKS } from "@/lib/menu";
import { Routes } from "@/lib/routes";

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
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex flex-col gap-4 mt-8">
                {MAIN_NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative whitespace-nowrap text-lg font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
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
                    </Link>
                  );
                })}
                <Button asChild className="mt-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Book a Discovery Call
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
