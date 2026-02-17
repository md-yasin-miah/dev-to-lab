import React from "react";

interface SidebarLink {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface AsideProps {
  sidebar: SidebarLink[];
  sidebarExtra: React.ReactNode;
}

export function Aside({ sidebar, sidebarExtra }: AsideProps) {
  return (
    <aside className="w-full shrink-0 md:w-64">
      <div className="sticky top-36 flex flex-col gap-8">
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-cyber-blue">
            Sections
          </h3>
          <nav className="flex flex-col gap-1">
            {sidebar.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition-all hover:bg-white/5 hover:text-white"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
        {sidebarExtra}
      </div>
    </aside>
  );
}
