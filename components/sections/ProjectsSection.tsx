import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="w-full space-y-8">
      <div className="space-y-3 text-center">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
          Projects
        </p>
        <h2 className="text-4xl font-semibold tracking-tight">
          What I've built
        </h2>
      </div>
      <div className="grid gap-12 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
