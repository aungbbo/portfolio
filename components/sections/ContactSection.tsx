import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="w-full space-y-4 py-8 text-center">
      <p className="text-primary text-sm tracking-[0.3em] uppercase">Contact</p>
      <h2 className="text-4xl font-semibold tracking-tight">Let&apos;s make something together</h2>
      <p className="text-muted-foreground mx-auto max-w-2xl">
        Have a project, collaboration, or role in mind? I&apos;m a message away.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg">
          <a href="mailto:hello@aungbobo.dev">Email me</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="https://github.com/yourname" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}

