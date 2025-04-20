import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjects, loadProject } from "@/lib/projects";
import { useMDXComponents } from "@/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeStarryNight from "rehype-starry-night";
import ProjectHeader from "@/components/ProjectHeader";
import DemoCarousel from "@/components/DemoCarousel";

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
  const project = await loadProject(slug);

  return (
    <>
      <ProjectHeader
        name={project.data.title}
        logo={project.data.logo}
        tech={project.data.tech}
        gitLink={project.data.gitLink}
        demo={project.data.demoVideo}
        startDate={project.data.startDate}
        endDate={project.data.endDate}
      />
      <RenderMDX content={project.content} />
      {project.data.demoImages && (
        <DemoCarousel images={project.data.demoImages} />
      )}
    </>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = await params;
  const project = await loadProject(slug.slug);

  return {
    title: `Bob Pham - ${project.data.title}`,
    description: project.data.description ?? "A project on my site",
  };
}

export const dynamicParams = false;
