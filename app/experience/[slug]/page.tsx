import { MDXRemote } from "next-mdx-remote/rsc";
import { getExperience, loadExperience } from "@/lib/experience";
import { useMDXComponents } from "@/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeStarryNight from "rehype-starry-night";

function RenderMDX({ content }: { content: string }) {
  const components = useMDXComponents();
  return (
    <>
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
    </>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const params2 = await params;
  const experience = await loadExperience(params2.slug);
  return <RenderMDX content={experience.content} />;
}


export async function generateStaticParams() {
  const jobs = await getExperience();
  return jobs.map((job) => ({ slug: job.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = await params;
  const experience = await loadExperience(slug.slug);

  return {
    title: `Bob Pham - ${experience.data.title}`,
  };
}
