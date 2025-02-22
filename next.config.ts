import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    mdxRs: false,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
