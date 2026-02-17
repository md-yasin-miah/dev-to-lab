"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CaseStudies() {
  return (
    <section id="work" className="container mx-auto py-12 md:py-24">
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Featured Work
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          See how we transform complex problems into elegant solutions.
        </p>
      </div>

      <div className="space-y-24">
        {CASE_STUDIES.map((study, index) => (
          <div
            key={study.id}
            className={`flex flex-col gap-8 md:items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted/50 shadow-xl">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-muted to-muted/50 text-muted-foreground">
                  <span className="text-lg font-medium">Project Preview</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 space-y-4"
            >
              <Badge variant="outline" className="w-fit">
                {study.category}
              </Badge>
              <h3 className="text-3xl font-bold">{study.title}</h3>
              <p className="text-xl text-muted-foreground">
                {study.description}
              </p>
              <Button variant="link" className="px-0">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
