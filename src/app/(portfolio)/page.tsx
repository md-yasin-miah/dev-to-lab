import { Hero } from "@/components/portfolio/sections/Hero";
import { TrustedBy } from "@/components/portfolio/sections/TrustedBy";
import { Services } from "@/components/portfolio/sections/Services";
import { TechStack } from "@/components/portfolio/sections/TechStack";
import { Metrics } from "@/components/portfolio/sections/Metrics";
import { Testimonials } from "@/components/portfolio/sections/Testimonials";
import { CaseStudies } from "@/components/portfolio/sections/CaseStudies";
import { LabInsights } from "@/components/portfolio/sections/LabInsights";
import { CTA } from "@/components/portfolio/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustedBy />
      <Services />
      <TechStack />
      <Metrics />
      <Testimonials />
      <CaseStudies />
      <LabInsights />
      <CTA />
    </div>
  );
}
