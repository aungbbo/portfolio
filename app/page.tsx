import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div id="top" className="bg-background text-foreground min-h-screen w-full">
      <Header />

      <main className="flex w-full flex-col gap-24 px-6 pt-32 pb-24 sm:px-10 lg:px-16">
        <Hero />

        <section
          id="about"
          className="border-border/70 grid w-full gap-10 md:grid-cols-2 lg:py-6"
        >
          <div className="space-y-6 text-center">
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm tracking-[0.4em] uppercase">
                About
              </p>
              <h2 className="text-4xl font-semibold tracking-tight">
                Curious, detail-oriented, calm
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              I obsess over micro-interactions, performance budgets, and the
              narrative of a product. When I&apos;m not prototyping, I&apos;m
              sketching motion systems, studying typography, or tweaking my dev
              tooling to stay fast.
            </p>
          </div>
          <div className="text-muted-foreground grid gap-4 text-sm">
            <div className="bg-card/70 rounded-2xl border p-4 shadow-sm">
              <p className="text-foreground text-base font-medium">
                What drives me
              </p>
              <p>
                Human-friendly interfaces that connect brand, craft, and
                business value.
              </p>
            </div>
            <div className="bg-card/70 rounded-2xl border p-4 shadow-sm">
              <p className="text-foreground text-base font-medium">
                Current focus
              </p>
              <p>
                Creative coding, AI-assisted workflows, and resilient design
                systems.
              </p>
            </div>
            <div className="bg-card/70 rounded-2xl border p-4 shadow-sm">
              <p className="text-foreground text-base font-medium">
                Stacks I love
              </p>
              <p>
                Next.js, Typescript, shadcn/ui, Framer Motion, Radix, Supabase.
              </p>
            </div>
          </div>
        </section>

        <section id="experiences" className="w-full space-y-6">
          <div className="space-y-3 text-center">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
              Experiences
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Where I&apos;ve built
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
                Led design system adoption, shipped multi-step onboarding flows,
                and automated deployments across environments.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
              Projects
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Selected work
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="w-full space-y-4 py-8 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase">
            Contact
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Let&apos;s make something together
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Have a project, collaboration, or role in mind? I&apos;m a message
            away.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:hello@aungbobo.dev">Email me</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a
                href="https://www.linkedin.com/in/yourname"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
