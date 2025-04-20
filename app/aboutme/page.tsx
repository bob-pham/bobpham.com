import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeStarryNight from "rehype-starry-night";
import { loadTopLevel } from "@/lib/top-level";

function RenderMDX({ content }: { content: string }) {
  const components = useMDXComponents();
  try {
  return (
    <MDXRemote
      source={content}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeStarryNight],
        },
      }}
    />
  );
  } catch (e) {
    console.error(e);
  }
}

export default async function Page() {
  const project = await loadTopLevel("aboutme");

  return <RenderMDX content={project.content} />;
}

