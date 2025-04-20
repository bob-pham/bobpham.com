import { readdir } from "fs/promises";

export async function loadFiles(dir: string) {
  return (await readdir(dir)).filter((file) => file.endsWith(".md"));
}
