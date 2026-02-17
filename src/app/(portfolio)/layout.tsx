import { Footer } from "@/components/common/Footer";
import { NavBar } from "@/components/common/NavBar";
import React from "react";

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default PortfolioLayout;
