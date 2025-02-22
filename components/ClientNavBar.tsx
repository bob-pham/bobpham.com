"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function ClientNavbar({
  className,
  projects,
}: {
  className?: string;
  projects: any;
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu>
        <a href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </a>
        <a href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Me"
          ></MenuItem>
        </a>
        <a href="/" className="p-4">
          <Button className="bg-zinc-900 border-white border rounded-3xl">
            Download CV
          </Button>
        </a>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm p-4">
            {projects.map((project: any, i: number) => (
              <HoveredLink href={`/projects/${project.link}`} key={i}>
                {project.title}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
        <a href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Blog"
          ></MenuItem>
        </a>
      </Menu>
    </div>
  );
}
