"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

type NavItem = {
  label: string;
  href: string;
  newTab?: boolean;
  download?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume", newTab: true },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleNavigate = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 sm:px-16 md:px-20 lg:px-36">
      <div className="supports-[backdrop-filter]:bg-background/10 border-primary/30 from-secondary/35 via-secondary/20 to-secondary/35 shadow-primary/5 dark:border-primary/40 dark:from-card/70 dark:via-card/60 dark:to-card/70 flex w-full items-center justify-between rounded-full border bg-gradient-to-r px-4 py-3 shadow-inner backdrop-blur-2xl sm:px-6">
        <Link
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-normal uppercase"
        >
          <span className="bg-primary/20 text-primary mx-auto flex size-9 items-center justify-center rounded-full">
            AB
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noreferrer" : undefined}
              className="group text-muted-foreground hover:text-foreground relative rounded-full px-3 py-1.5 transition"
              onClick={handleNavigate}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="bg-primary pointer-events-none absolute inset-x-2 bottom-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-[calc(100%-1rem)]" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation"
            className="border-border/60 text-muted-foreground hover:text-foreground rounded-full border p-2 transition md:hidden"
            onClick={handleToggle}
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-border/60 bg-background/95 mt-3 flex flex-col gap-2 rounded-2xl border p-4 text-sm shadow-xl shadow-black/10 backdrop-blur md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noreferrer" : undefined}
              className="text-muted-foreground hover:bg-muted/40 hover:text-foreground rounded-xl px-3 py-2 transition"
              onClick={handleNavigate}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
