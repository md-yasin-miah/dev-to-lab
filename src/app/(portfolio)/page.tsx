import { Hero } from "@/components/portfolio/sections/Hero";
import { Metrics } from "@/components/portfolio/sections/Metrics";
import { Services } from "@/components/portfolio/sections/Services";
import { TechStack } from "@/components/portfolio/sections/TechStack";
import { CaseStudies } from "@/components/portfolio/sections/CaseStudies";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Metrics />
      <Services />
      <TechStack />
      <CaseStudies />
    </div>
  );
}
