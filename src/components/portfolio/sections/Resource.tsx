import { Routes } from '@/lib/routes';
import Image from 'next/image';
import Link from 'next/link';

const Resource = () => {
  const RESOURCE_CARDS = [
    {
      tag: "Architecture",
      tagColor: "text-cyber-blue",
      title: "View our Stack",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPgAWnlyy3mJZ19CYKfbEgI5GalOIIbSuzbvSE5uZTTjTC9G4XtNAA8O74k8NlBPh_i9eXgcmGwo0_ov3pmZKl9UhbXAiQcz4PMg51AYYcXt67brYYcUaGt_Yylg9ocR1X0ACmvlPJhyxcztoBrijIh-sxmgW-15n5fOr-c5J5zWBwr8PfYLXrFEajQ4H_GHM6CNzRVi17fdVvucoKGPDsUkx5udK0EJWmJu9sFCZRA_p5JgceobefnGJqakkOjdR6YcSHLi5gtnnJ",
      href: Routes.techStack.systemArchitecture,
    },
    {
      tag: "Infrastructure",
      tagColor: "text-electric-violet",
      title: "DevOps Standards",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkpfgMQUgMoaLBPyY8v6IAq2FR67FIjB0VO5XzBEW-9tEwFGtHy9-lmOwKFa9IU9CKIDbsLT2yV2A56_QRICsQxCrljLp3KePY_sNNietCOhWiQMxJsYRuuJZtO6SxnQfi9FMdop7pj0qBWV6__GSi93m8u_brxXV7s0balIBkDEboWsh0SAbCFOLWKpbXrRA9j40v-APrbirUJP9jAD1swx92D7hEnKwIybsooIZVcVeODxb6hofPOzLkt94mgq2ByPDKtZRzCZsa",
      href: Routes.techStack.devOps,
    },
    {
      tag: "Security",
      tagColor: "text-cyber-blue",
      title: "Protocol Overview",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBaHhl5hRL1GhYi9fBJs_yhESg3WNfsDjIkN1gtbdZEDfPOz4aUhUfokm6jY0m-kmCRDTzETL0dmqHEvY7i0i65DyyQNZ8AN0ubwdID-DPmk60T8mOiZLh1qLmxd1ZvI1bOQ7WD-xmNQj_WHLM6Cg3Bn39_IqMl97qp_uopcBBn01H6vLVmFofQ-ZL2YkdNqFgl7_Bs6dzM4rdcFbsv5umM4giKPOVkHpahRc_lJonv0J4rXhDUB2xwOvb3i5GuFkQaYox5rOa6eLm2",
      href: Routes.techStack.securityProtocols,
    },
  ];
  return (
    <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {RESOURCE_CARDS.map((card) => (
          <Link
            key={card.tag}
            href={card.href}
            className="group relative rounded-xl overflow-hidden h-48 border border-border-white-10 backdrop-blur-xl bg-white/3"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background-dark to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p
                className={`text-xs font-bold uppercase tracking-widest ${card.tagColor} mb-1`}
              >
                {card.tag}
              </p>
              <p className="text-sm font-medium">{card.title}</p>
            </div>
          </Link>
        ))}
      </section>  
  )
}

export default Resource