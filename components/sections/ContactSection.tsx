import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full space-y-8 text-center">
      <div className="space-y-3 text-center">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
          Contact
        </p>
        <h2 className="text-4xl font-semibold tracking-tight">
          When can we talk?
        </h2>
      </div>
      <p className="text-muted-foreground mx-auto max-w-2xl">
        Have a project, collaboration, or role in mind? I&apos;m a message away.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <Button
          asChild
          variant="outline"
          size="icon-lg"
          className="border-border/60 hover:border-primary hover:dark:border-primary/60 hover:bg-primary/5 h-12 w-12 rounded-full transition hover:-translate-y-1"
        >
          <a href="mailto:aungbbo48@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="icon-lg"
          className="border-border/60 hover:border-primary hover:dark:border-primary/60 hover:bg-primary/5 h-12 w-12 rounded-full transition hover:-translate-y-1"
        >
          <a
            href="https://www.linkedin.com/in/aungbbo"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="icon-lg"
          className="border-border/60 hover:border-primary hover:dark:border-primary/60 hover:bg-primary/5 h-12 w-12 rounded-full transition hover:-translate-y-1"
        >
          <a
            href="https://github.com/aungbbo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </div>

      <form className="bg-background/80 mx-auto grid w-full max-w-3xl gap-4 rounded-3xl px-24 py-6 pt-3 text-left">
        {" "}
        <div className="grid gap-2">
          <label
            htmlFor="name"
            className="text-muted-foreground text-xs tracking-[0.3em] uppercase"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="border-border bg-background/60 focus:border-primary focus:ring-primary/20 rounded-2xl border px-4 py-3 text-sm transition outline-none focus:ring-2"
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="email"
            className="text-muted-foreground text-xs tracking-[0.3em] uppercase"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="border-border bg-background/60 focus:border-primary focus:ring-primary/20 rounded-2xl border px-4 py-3 text-sm transition outline-none focus:ring-2"
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="message"
            className="text-muted-foreground text-xs tracking-[0.3em] uppercase"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Your message..."
            className="border-border bg-background/60 focus:border-primary focus:ring-primary/20 rounded-2xl border px-4 py-3 text-sm transition outline-none focus:ring-2"
          />
        </div>
        <Button type="submit" size="lg" className="w-full rounded-2xl">
          Send message
        </Button>
      </form>
    </section>
  );
}
