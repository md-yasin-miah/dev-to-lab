import { Footer } from "@/components/sections/Footer";
import { NavBar } from "@/components/sections/NavBar";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-slate-200 antialiased selection:bg-cyber-blue/30">
      {/* Top Navigation */}
      <NavBar />
      {children}
      {/* Page footer */}
      <Footer />
    </div>
  );
}
