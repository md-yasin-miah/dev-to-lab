import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { CaseStudies } from "@/components/sections/CaseStudies";

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
