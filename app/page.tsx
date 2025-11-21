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
        <div className="mx-auto w-full max-w-5xl px-6 pt-10 pb-16 sm:px-10 sm:pt-16 md:px-16 md:pt-20 lg:px-20 lg:pb-24">
          <HeroSection />
        </div>

        <div className="bg-alternate-background py-16">
          <div className="mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-20">
            <AboutSection />
          </div>
        </div>

        <div className="py-16">
          <div className="mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-20">
            <ExperiencesSection />
          </div>
        </div>

        <div className="bg-alternate-background py-16">
          <div className="mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-28">
            <ProjectsSection projects={projects} />
          </div>
        </div>

        <div className="py-16">
          <div className="mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-20">
            <ContactSection />
          </div>
        </div>

        <div className="bg-alternate-background py-16">
          <div className="mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-20">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
