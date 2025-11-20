"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="grid items-center gap-10 p-6 md:p-0 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              Aung Bo Bo
            </h1>
            <p className="text-primary/90 dark:text-primary text-lg font-medium tracking-[0.4em] uppercase">
              Software Engineer
            </p>
          </div>
          <p className="text-muted-foreground text-lg">
            Building immersive digital products with a blend of engineering
            precision and design intuition. I translate complex ideas into
            interfaces that feel effortless, inclusive, and fast.
          </p>
          <p className="text-primary/90 dark:text-primary text-base tracking-wide italic">
            — Progress over perfection.
          </p>
          <hr className="border-border/60" />
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              variant="ghost"
              className="border-border/70 hover:bg-border/30 rounded-full border px-5 py-2 text-base"
            >
              <a
                href="https://linkedin.com/in/yourname"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="border-border/70 hover:bg-border/30 rounded-full border px-5 py-2 text-base"
            >
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="relative mx-auto w-full max-w-sm"
      >
        <div className="from-primary/25 to-primary/5 relative aspect-[4/5] w-full overflow-hidden rounded-[32px] bg-gradient-to-br via-transparent p-1">
          <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
            <div className="from-primary/40 h-full w-full rounded-[32px] bg-gradient-to-br via-pink-400/20 to-transparent opacity-70" />
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-[28px]">
            <Image
              src="/images/me.jpg"
              alt="Portrait of Aung Bo Bo"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 420px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
