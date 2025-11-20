export function ExperiencesSection() {
  return (
    <section id="experiences" className="w-full space-y-6">
      <div className="space-y-3 text-center">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
          Experiences
        </p>
        <h2 className="text-4xl font-semibold tracking-tight">
          Where I&apos;ve worked
        </h2>
      </div>
      <div className="bg-card/60 space-y-3 rounded-3xl border p-6 shadow-sm shadow-black/5">
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">2023 — Present</p>
          <p className="text-lg font-medium">Freelance Frontend Engineer</p>
          <p className="text-muted-foreground">
            Partnered with startups to build brand-new landing pages, SaaS
            dashboards, and marketing experiments on short timelines.
          </p>
        </div>
        <div className="border-border/50 flex flex-col gap-1 border-t pt-4">
          <p className="text-muted-foreground text-sm">2021 — 2023</p>
          <p className="text-lg font-medium">
            Full-stack Engineer @ Remote Studio
          </p>
          <p className="text-muted-foreground">
            Led design system adoption, shipped multi-step onboarding flows, and
            automated deployments across environments.
          </p>
        </div>
      </div>
    </section>
  );
}
