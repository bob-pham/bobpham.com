"use server";
import { loadMetadata } from "@/lib/projects";
import ClientNavbar from "./ClientNavBar";

export default async function NavBar({ className }: { className?: string }) {
  const projects = await loadMetadata();
  return (
      <ClientNavbar className={className} projects={projects} />
  );
}

