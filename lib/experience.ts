import { readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { loadFiles } from "@/lib/server-util";

const dir = path.join(process.cwd(), "content/experience");

export async function loadExperience(slug: string) {
  const file = await readFile(path.join(dir, slug + ".md"), "utf8");
  return matter(file);
}

export async function getExperience() {
  const names = await loadFiles(dir);
  return names.map((name) => {
    return { slug: path.basename(name, ".md") };
  });
}
