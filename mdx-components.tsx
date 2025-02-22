import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import ProjectHeader from "./components/ProjectHeader";
import DemoCarousel from "./components/DemoCarousel";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-center my-2 text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-center my-2 text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-center my-2 text-white">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-center my-2 text-white">
        {children}
      </h4>
    ),
    p: ({ children }) => <p className="text-md">{children}</p>,
    th: ({ children }) => (
      <th className="text-white font-bold">{children}</th>
    ),
    strong: ({ children }) => (
      <strong className="text-white font-bold">{children}</strong>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-white pl-6">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-disc list-inside text-white pl-6">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="list-item text-white list-disc list-inside">{children}</li>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ProjectHeader,
    DemoCarousel,
    Image,
    ...components,
  };
}
