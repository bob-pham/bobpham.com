import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjects, loadProject } from "@/lib/projects";
import { useMDXComponents } from "@/mdx-components";
import remarkGfm from "remark-gfm";
import ProjectHeader from "@/components/ProjectHeader";
import DemoCarousel from "@/components/DemoCarousel";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = await loadProject(slug);
  console.log(project)
  return (
    <>
      <ProjectHeader
        name={project.data.title}
        logo={project.data.logo}
        tech={project.data.tech}
        gitLink={project.data.gitLink}
        demo={project.data.demoVideo}
        />
      <MDXRemote
        source={project.content}
        components={useMDXComponents()}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
      <DemoCarousel images={project.data.demoImages} />
    </>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project: any) => ({ slug: project.slug }));
}

export const dynamicParams = false;
