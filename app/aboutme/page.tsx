import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeStarryNight from 'rehype-starry-night'
import { loadTopLevel } from "@/lib/top-level"

export default async function Page() {
  const project = await loadTopLevel("aboutme");
  return (
    <>
      <MDXRemote
        source={project.content}
        components={useMDXComponents()}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeStarryNight] } }}
      />
    </>
  );
}


