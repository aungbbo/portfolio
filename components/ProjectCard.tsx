import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Github, Crown, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const isWinner = project.winner;

  return (
    <Card className="animated-border-card border-border/40 dark:border-border/20 relative flex h-full flex-col overflow-hidden rounded-xl border transition-shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="aspect-[16/9] w-full object-cover object-center"
        />
      </div>

      <CardHeader className="space-y-2 px-4 py-3">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold tracking-tight">
            {project.title}
          </h3>
          {isWinner && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100/90 px-2 py-0.5 text-[11px] font-semibold text-amber-800 dark:bg-amber-300/20 dark:text-amber-200">
              {/* <Crown
                size={14}
                strokeWidth={1.5}
                className="text-amber-600 dark:text-amber-200"
              /> */}
              🏆
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="flex-1 px-4 pt-0 pb-3">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-muted rounded-full px-2 py-0.5 text-[10px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="text-muted-foreground border-border/40 flex items-center justify-between border-t px-4 py-2 text-xs">
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
            <ExternalLink className="h-4 w-4" /> Link
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
