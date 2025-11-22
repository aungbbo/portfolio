"use client";

import { useState } from "react";
import { ExternalLink, Minus, Plus } from "lucide-react";

const experiences = [
  {
    period: "Oct 2025 - Present",
    role: "Software Engineer Intern",
    company: "Xtatic",
    logo: "/images/xtatic-logo.jpg",
    link: "https://www.xtatic.org",
    description:
      "Led the rebuild and modernization of the company website using modern web technologies, integrating a CRM system, and optimizing performance to enhance client engagement while aligning technical solutions with business goals in collaboration with the CEO.",
    tools: ["Next.js", "TypeScript", "Tailwind", "GraphQL"],
  },
  {
    period: "Mar 2025 - Sep 2025",
    role: "Backend Developer",
    company: "Trekteria",
    logo: "/images/trekteria-logo.jpg",
    link: "https://trekteria.com",
    description:
      "Built the backend system for an AI camping planner app using Supabase to scale the MVP for a 5× increase in user load, integrated 10+ RESTful APIs to enhance core features and reliability, implemented a SQLite cache for 99.9% uptime and offline access, and successfully published the app on the App Store.",
    tools: ["React", "Node.js", "Supabase", "Storybook"],
  },
  {
    period: "Nov 2023 - Dec 2024",
    role: "Student Ambassador",
    company: "San Jose State University",
    logo: "/images/sjsu-logo.jpg",
    link: "https://sjsu.edu/soar",
    description:
      "Delivered engaging campus tours and presentations for over 5,000 prospective students, families, and school groups while providing personalized application support to diverse populations, including freshmen, transfer, and international applicants, across multiple channels.",
    tools: ["React", "Node.js", "Supabase", "Storybook"],
  },
];

export function ExperiencesSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };
  5;
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

      <div className="space-y-4">
        {experiences.map((exp, index) => {
          const isOpen = openItems.includes(index);
          return (
            <div key={exp.role}>
              <button
                type="button"
                className="group border-primary/30 bg-alternate-background/80 dark:border-primary/40 dark:bg-ab-color/55 hover:bg-alternate-background-hover/90 dark:hover:bg-alternate-background-hover/90 flex w-full items-center justify-between gap-6 rounded-2xl border px-6 py-8 text-left font-semibold text-black/70 shadow-md transition dark:text-white"
                onClick={() => toggleItem(index)}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-lg">
                    {exp.role} @ {exp.company}
                  </p>
                  {/* <p className="text-sm text-white/80">{exp.company}</p> */}
                </div>
                <div className="flex items-center gap-3 text-right">
                  <p className="pr-2 text-xs tracking-[0.3em] uppercase">
                    {exp.period}
                  </p>
                  {isOpen ? (
                    <Minus className="size-4 text-black/80 transition group-hover:text-black/80 dark:text-white/80 dark:group-hover:text-white/80" />
                  ) : (
                    <Plus className="size-4 text-black/80 transition group-hover:text-black/80 dark:text-white/80 dark:group-hover:text-white/80" />
                  )}
                </div>
              </button>
              {isOpen && (
                <div className="border-border/40 bg-background/95 dark:bg-card/70 mt-3 space-y-4 rounded-3xl border p-6 shadow-inner shadow-black/10">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex size-28 items-center justify-center rounded-2xl p-3">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="h-full w-full rounded-xl object-cover"
                        />
                      </div>
                    </div>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm/6 lowercase underline-offset-4"
                    >
                      <ExternalLink className="text-primary size-4" />
                      {exp.link
                        .replace(/^https?:\/\//, "")
                        .replace(/^www\./, "")}
                    </a>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
