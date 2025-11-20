import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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

      <main className="flex w-full flex-col pt-24">
        <div className="px-6 pb-28 sm:px-28 sm:pt-12 md:px-24 md:pt-16 lg:px-48 lg:pt-24">
          <HeroSection />
        </div>

        <div className="bg-alternate-background px-6 py-16 pt-16 sm:px-16 md:px-24 lg:px-48">
          <AboutSection />
        </div>

        <div className="px-6 py-16 sm:px-16 md:px-24 lg:px-48">
          <ExperiencesSection />
        </div>

        <div className="bg-alternate-background px-6 py-16 pb-24 sm:px-16 md:px-20 lg:px-36">
          <ProjectsSection projects={projects} />
        </div>

        <div className="px-6 py-16 sm:px-16 md:px-24 lg:px-48">
          <ContactSection />
        </div>

        <div className="bg-alternate-background px-6 py-16 sm:px-16 md:px-24 lg:px-48">
          <Footer />
        </div>
      </main>
    </div>
  );
}
