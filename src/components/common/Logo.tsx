import { SITE_CONFIG } from "@/lib/constants";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { Routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const Logo = ({ size = "normal" }: { size?: "normal" | "small" | "large" }) => {
  const sizeClass =
    size === "normal" ? "h-6 w-6" : size === "small" ? "h-4 w-4" : "md:h-10 md:w-10 h-8 w-8";
  const textClass =
    size === "normal" ? "text-base" : size === "small" ? "text-sm" : "md:text-2xl text-xl";
  const containerClass =
    size === "normal" ? "gap-2" : size === "small" ? "gap-1" : "gap-4";
  return (
      <Link href={Routes.home} className={cn("flex items-center font-bold", containerClass)}>
        <div className="bg-linear-to-r from-blue-500 to-violet-600 dark:from-blue-400 dark:to-violet-500 px-1 rounded">
          <Terminal className={cn(sizeClass, "w-auto text-white")} />
        </div>
        <span className={textClass}>{SITE_CONFIG.name}</span>
      </Link>
  );
};

export default Logo;
