import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import ProjectHeader from "./components/ProjectHeader";
import DemoCarousel from "./components/DemoCarousel";
import { Button } from "./components/ui/button";

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
    p: ({ children }) => <p className="text-md grid">{children}</p>,
    th: ({ children }) => <th className="text-white font-bold">{children}</th>,
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
    button: ({ children }) => <Button>{children}</Button>,
    a: ({ children }) => <a className="text-white" target="_blank">{children}</a>,
    code: ({ children }) => <code className="text-white">{children}</code>,
    img: (props) => (
        <Image
          width={800}
          height={800}
          className="w-1/2 place-self-center"
          {...(props as ImageProps)}
        />
    ),
    iframe: ({ children }) => <iframe className="text-white">{children}</iframe>,
    ProjectHeader,
    DemoCarousel,
    Image,
    ...components,
  };
}
