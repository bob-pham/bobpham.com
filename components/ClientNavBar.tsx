"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ProjectMetadata } from "@/types/Project";
import Link from "next/link";

export default function ClientNavbar({
  className,
  projects,
}: {
  className?: string;
  projects: ProjectMetadata[];
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href="/aboutme">
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Me"
          ></MenuItem>
        </Link>
        <Link href="/Bob_Pham_Resume.pdf" target="_" className="p-4">
          <Button className="bg-zinc-900 border-white border rounded-3xl">
            Download CV
          </Button>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm p-4">
            {projects.map((project: ProjectMetadata, i: number) => (
              <HoveredLink href={`/projects/${project.link}`} key={i}>
                {project.title}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
        <Link href="/blog">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Blog"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
