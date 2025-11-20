const aboutHighlights = [
  {
    title: "What drives me",
    description:
      "Human-friendly interfaces that connect brand, craft, and business value.",
  },
  {
    title: "Current focus",
    description:
      "Creative coding, AI-assisted workflows, and resilient design systems.",
  },
  {
    title: "Stacks I love",
    description:
      "Next.js, Typescript, shadcn/ui, Framer Motion, Radix, Supabase.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-border/70 grid w-full gap-10 md:grid-cols-2 lg:py-6"
    >
      <div className="space-y-2 text-center md:col-span-2">
        <p className="text-muted-foreground text-sm tracking-[0.4em] uppercase">
          About
        </p>
        <h2 className="text-4xl font-semibold tracking-tight">Who am I?</h2>
      </div>

      <div className="text-muted-foreground grid gap-4 text-sm">
        {aboutHighlights.map((item) => (
          <div
            key={item.title}
            className="bg-card/70 rounded-2xl border p-4 shadow-sm"
          >
            <p className="text-foreground text-base font-medium">
              {item.title}
            </p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6 text-center">
        <h3 className="text-4xl font-semibold tracking-tight">
          Curious, detail-oriented, calm
        </h3>
        <p className="text-muted-foreground text-lg">
          I obsess over micro-interactions, performance budgets, and the
          narrative of a product. When I&apos;m not prototyping, I&apos;m
          sketching motion systems, studying typography, or tweaking my dev
          tooling to stay fast.
        </p>
      </div>
    </section>
  );
}
