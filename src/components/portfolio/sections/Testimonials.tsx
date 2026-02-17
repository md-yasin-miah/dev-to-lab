"use client";

const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    title: "CTO, Nexus Labs",
    quote:
      "The engineering standards at DevToLab are unmatched. They didn't just build our app; they built a scalable infrastructure that handled 1M users on launch day.",
    gradient: "from-cyber-blue to-electric-violet",
  },
  {
    name: "Sarah Chen",
    title: "Product Lead, Velocity",
    quote:
      "Zero bundle bloat, perfect Core Web Vitals, and a backend that just works. Their laboratory approach to development is exactly what startups need.",
    gradient: "from-pink-500 to-orange-500",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-10 border-y border-border-white-10/50">
      <div className="flex animate-marquee whitespace-nowrap gap-8">
        {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map(
          (testimonial, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl min-w-[400px] shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full bg-linear-to-tr ${testimonial.gradient}`}
                />
                <div>
                  <div className="text-sm font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase">
                    {testimonial.title}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm whitespace-normal">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
