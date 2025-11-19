import React from "react";
import { Button } from "./ui/button";
// import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b px-4 py-2">
      <div className="text-lg font-semibold">Header</div>
      <div className="flex items-center gap-2">
        <Button variant="default">shadcn Button</Button>
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
