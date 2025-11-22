"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isSubmitting = status === "loading";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: (formData.get("name") || "").toString(),
      email: (formData.get("email") || "").toString(),
      message: (formData.get("message") || "").toString(),
      honeypot: (formData.get("company") || "").toString(),
    };

    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your message.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  };

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

      <form
        className="bg-background/80 mx-auto grid w-full max-w-3xl gap-4 rounded-3xl py-6 pt-3 text-left sm:px-16 md:px-20 lg:px-24"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />
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
            rows={8}
            placeholder="Your message..."
            className="border-border bg-background/60 focus:border-primary focus:ring-primary/20 rounded-2xl border px-4 py-3 text-sm transition outline-none focus:ring-2"
            required
          />
        </div>
        <div className="space-y-2 pt-2 text-center">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="mt-4 w-full rounded-2xl py-6 disabled:pointer-events-none disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          <p className="text-muted-foreground text-sm" aria-live="polite">
            {status === "success" && "Message sent! I’ll reply soon."}
            {status === "error" && errorMessage}
          </p>
        </div>
      </form>
    </section>
  );
}
