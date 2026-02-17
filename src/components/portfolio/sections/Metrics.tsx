"use client";

import { METRICS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export function Metrics() {
  return (
    <section className="container mx-auto py-12 md:py-24">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {METRICS.map((metric) => (
          <Card
            key={metric.id}
            className="border-primary/10 bg-background/50 backdrop-blur transition-all hover:border-primary/50"
          >
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <metric.icon className="bg-linear-to-br from-blue-500 to-violet-500 bg-clip-text mb-4 h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold tracking-tighter">
                {metric.value}
              </h3>
              <p className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
