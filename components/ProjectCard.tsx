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
    <Card className="overflow-hidden border border-gray-200 transition-shadow hover:shadow-md dark:border-gray-800">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="h-48 w-full object-cover"
      />
      <CardHeader>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-muted rounded-md px-2 py-1 text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="text-muted-foreground flex items-center justify-between text-sm">
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
        {project.notes && (
          <span className="text-xs italic">{project.notes}</span>
        )}
      </CardFooter>
    </Card>
  );
}
