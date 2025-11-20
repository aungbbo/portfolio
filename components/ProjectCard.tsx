import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-border/40 dark:border-border/20 flex h-full flex-col overflow-hidden border transition-shadow hover:-translate-y-1 hover:shadow-lg">
      <div className="relative w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>
      <CardHeader className="space-y-2 px-4 py-3.5">
        <h3 className="text-base font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
      </CardHeader>
      <CardContent className="flex-1 px-4 pt-0 pb-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-muted rounded-full px-2.5 py-0.5 text-[11px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="text-muted-foreground border-border/40 flex items-center justify-between border-t px-4 py-2.5 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            className="hover:text-foreground flex items-center gap-1"
          >
            <Github className="h-4 w-4" /> Code
          </a>
          <a
            href={project.link}
            target="_blank"
            className="hover:text-foreground flex items-center gap-1"
          >
            <ExternalLink className="h-4 w-4" /> Live
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
