import { readFile } from "fs/promises";
import { loadFiles } from "@/lib/server-util"
import matter from "gray-matter";
import path from "path";

const dir = path.join(process.cwd(), "content/projects");

export async function getProjects() {
  const names = await loadFiles(dir);
  return names.map((name) => {
    return { slug: path.basename(name, ".md") };
  });
}

export async function loadMetadata() {
  const names = await loadFiles(dir);
  const files = await Promise.all(
    names.map((name) => readFile(path.join(dir, name)))
  );
  return files
    .map((file) => matter(file).data)
    .sort((f1, f2) => {
      const d1 = new Date(f1.date);
      const d2 = new Date(f2.date);
      return Number(d2) - Number(d1);
    });
}

export async function loadProject(slug: string) {
  const file = await readFile(path.join(dir, slug + ".md"), "utf8");
  return matter(file);
}
