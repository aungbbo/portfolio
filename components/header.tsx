import Link from "next/link";

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

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:px-8">
      <div className="supports-[backdrop-filter]:bg-background/50 border-primary/30 from-secondary/35 via-secondary/20 to-secondary/35 shadow-primary/5 dark:border-primary/40 dark:from-card/70 dark:via-card/60 dark:to-card/70 flex w-full items-center justify-between rounded-full border bg-gradient-to-r px-6 py-3 shadow-inner backdrop-blur-2xl">
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
              className="text-muted-foreground hover:bg-muted/60 hover:text-foreground rounded-full px-3 py-1.5 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="hidden md:inline-flex"
          ></Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
