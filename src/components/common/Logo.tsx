import { SITE_CONFIG } from "@/lib/constants";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { Routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const Logo = ({
  size = "normal",
  theme,
}: {
  size?: "normal" | "small" | "large";
  theme: string | null;
}) => {
  const sizeClass =
    size === "normal"
      ? "h-6 w-6"
      : size === "small"
        ? "h-4 w-4"
        : "md:h-10 md:w-10 h-8 w-8";
  const textClass =
    size === "normal"
      ? "text-base"
      : size === "small"
        ? "text-sm"
        : "md:text-2xl text-xl";
  const containerClass =
    size === "normal" ? "gap-2" : size === "small" ? "gap-1" : "gap-4";
  return (
    <Link
      href={Routes.home}
      className={cn("flex items-center font-bold", containerClass)}
    >
      <div
        className={`px-1 rounded bg-linear-to-r transition-all duration-300 ${
          theme ||
          "from-blue-500 to-violet-600 dark:from-blue-400 dark:to-violet-500"
        }`}
      >
        <Terminal className={cn(sizeClass, "w-auto text-white")} />
      </div>
      <span className={textClass}>
        {SITE_CONFIG.namePrefix}
        <span
          className={cn(
            theme ||
            "dark:from-white dark:to-white from-black to-black",
              // "from-blue-500 to-violet-600 dark:from-blue-400 dark:to-violet-500",
            "bg-clip-text bg-linear-to-r text-transparent transition-all duration-300",
          )}
        >
          {SITE_CONFIG.nameSuffix}
        </span>
      </span>
    </Link>
  );
};

export default Logo;
