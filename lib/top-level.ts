import { readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";

const dir = path.join(process.cwd(), "content/");

export async function loadTopLevel(slug: string) {
  const file = await readFile(path.join(dir, slug + ".md"), "utf8");
  return matter(file);
}
