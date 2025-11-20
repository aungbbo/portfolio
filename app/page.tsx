import Header from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div id="top" className="bg-background text-foreground min-h-screen w-full">
      <Header />

      <main className="flex w-full flex-col gap-24 px-6 pt-32 pb-24 sm:px-12 md:px-16 lg:px-32">
        <HeroSection />
        <AboutSection />
        <ExperiencesSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
    </div>
  );
}
