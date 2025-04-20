"use client";

import {
  Navbar,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
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
  return (
    <>
      <DesktopNav className={className} projects={projects} />
      <MobileNavBar />
    </>
  );
}

function DesktopNav({
  className,
  projects,
}: {
  className?: string;
  projects: ProjectMetadata[];
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "top-10 inset-x-0 max-w-2xl mx-auto z-50 hidden fixed md:flex",
        className,
      )}
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

export function MobileNavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Me",
      link: "/aboutme",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Download CV",
      link: "/Bob_Pham_Resume.pdf",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full top-10 inset-x-0 max-w-2xl mx-auto z-50 rounded-full border bg-zinc-900 text-white border-white/[0.2] shadow-input flex justify-center space-x-12 px-4 md:hidden">
      <Navbar className="top-10 inset-x-0 max-w-2xl mx-auto z-50">
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Button className="bg-white w-full">
                <Link
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-black font-bold no-underline"
                >
                  <span className="block">{item.name}</span>
                </Link>
              </Button>
            ))}
            <div className="flex w-full flex-col gap-4"></div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}
