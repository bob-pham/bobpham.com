import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeStarryNight from "rehype-starry-night";
import ProjectHeader from "@/components/ProjectHeader";
import { getBlog, loadBlog } from "@/lib/blog";

function RenderMDX({ content }: { content: string }) {
  const components = useMDXComponents();
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
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await loadBlog(slug);

  return (
    <>
      <ProjectHeader
        name={blog.data.title}
        logo={blog.data.logo}
        tech={blog.data.tech}
        gitLink={blog.data.gitLink}
        demo={blog.data.demoVideo}
        startDate={blog.data.startDate}
        endDate={blog.data.endDate}
      />
      <RenderMDX content={blog.content} />
    </>
  );
}

export async function generateStaticParams() {
  const projects = await getBlog();
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;
