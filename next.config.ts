import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeStarryNight from 'rehype-starry-night'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    mdxRs: false,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeStarryNight],
  },
});

export default withMDX(nextConfig);
