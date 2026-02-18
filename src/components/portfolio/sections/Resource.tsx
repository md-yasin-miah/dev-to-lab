"use client";

import { Routes } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Resource = () => {
  const pathname = usePathname() ?? "";

  const RESOURCE_CARDS = [
    {
      tag: "Architecture",
      tagColor: "text-cyber-blue",
      title: "System Architecture Overview",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPgAWnlyy3mJZ19CYKfbEgI5GalOIIbSuzbvSE5uZTTjTC9G4XtNAA8O74k8NlBPh_i9eXgcmGwo0_ov3pmZKl9UhbXAiQcz4PMg51AYYcXt67brYYcUaGt_Yylg9ocR1X0ACmvlPJhyxcztoBrijIh-sxmgW-15n5fOr-c5J5zWBwr8PfYLXrFEajQ4H_GHM6CNzRVi17fdVvucoKGPDsUkx5udK0EJWmJu9sFCZRA_p5JgceobefnGJqakkOjdR6YcSHLi5gtnnJ",
      href: Routes.techStack.systemArchitecture,
    },
    {
      tag: "Infrastructure",
      tagColor: "text-electric-violet",
      title: "DevOps & Infrastructure Overview",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkpfgMQUgMoaLBPyY8v6IAq2FR67FIjB0VO5XzBEW-9tEwFGtHy9-lmOwKFa9IU9CKIDbsLT2yV2A56_QRICsQxCrljLp3KePY_sNNietCOhWiQMxJsYRuuJZtO6SxnQfi9FMdop7pj0qBWV6__GSi93m8u_brxXV7s0balIBkDEboWsh0SAbCFOLWKpbXrRA9j40v-APrbirUJP9jAD1swx92D7hEnKwIybsooIZVcVeODxb6hofPOzLkt94mgq2ByPDKtZRzCZsa",
      href: Routes.techStack.devOps,
    },
    {
      tag: "Security",
      tagColor: "text-emerald-500",
      title: "Protocol Overview",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBaHhl5hRL1GhYi9fBJs_yhESg3WNfsDjIkN1gtbdZEDfPOz4aUhUfokm6jY0m-kmCRDTzETL0dmqHEvY7i0i65DyyQNZ8AN0ubwdID-DPmk60T8mOiZLh1qLmxd1ZvI1bOQ7WD-xmNQj_WHLM6Cg3Bn39_IqMl97qp_uopcBBn01H6vLVmFofQ-ZL2YkdNqFgl7_Bs6dzM4rdcFbsv5umM4giKPOVkHpahRc_lJonv0J4rXhDUB2xwOvb3i5GuFkQaYox5rOa6eLm2",
      href: Routes.techStack.securityProtocols,
    },
  ];
  return (
    <section className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
      {RESOURCE_CARDS.map((card) => {
        const isActive = pathname === card.href || pathname.startsWith(`${card.href}/`);
        return (
          <Link
            key={card.tag}
            href={card.href}
            className={`group relative h-48 overflow-hidden rounded-xl border backdrop-blur-xl transition-all duration-300 ${
              isActive
                ? "border-cyber-blue bg-cyber-blue/5 ring-2 ring-cyber-blue/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                : "border-border-white-10 bg-white/3 hover:border-white/20"
            }`}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className={`object-cover transition-transform duration-700 group-hover:scale-110 ${isActive ? "opacity-60" : "opacity-50"}`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-background-dark to-transparent" />
            {isActive && (
              <span className="absolute right-4 top-4 rounded-full border border-cyber-blue/50 bg-cyber-blue/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cyber-blue">
                Active
              </span>
            )}
            <div className="absolute bottom-4 left-4">
              <p className={`mb-1 text-xs font-bold uppercase tracking-widest ${card.tagColor}`}>
                {card.tag}
              </p>
              <p className="text-sm font-medium">{card.title}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Resource