"use client";

import { TECH_STACK } from "@/lib/constants";
import { Card } from "@/components/ui/card";

export function TechStack() {
  return (
    <section id="stack" className="w-full bg-muted/50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Our Laboratory
          </h2>
          <p className="text-muted-foreground">
            Built with the world's most advanced technologies.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl border border-border/50">
          <div className="flex w-full overflow-hidden py-10">
            <div className="flex animate-marquee gap-12 whitespace-nowrap px-12">
              {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                <div key={index} className="flex items-center gap-2">
                  <tech.icon className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                  <span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
