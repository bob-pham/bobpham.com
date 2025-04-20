import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { loadAllPosts } from "@/lib/blog";
import { BlogMetadata } from "@/types/Blog";

function BlogRow({ blog }: { blog: BlogMetadata }) {
  const { title, description, date, link } = blog;

  return (
    <Card className="w-10/12 bg-zinc-900 text-white my-4 max-w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2">
          <CardDescription className="col-span-1 grid place-items-center">
            {description}
          </CardDescription>
        </div>
        {link ? (
          <Button>
            <Link href={link} target="_blank" className="text-white">
              Read More
            </Link>
          </Button>
        ) : (
          <></>
        )}
      </CardContent>
    </Card>
  );
}

export default async function Blog() {
  const blogPosts = await loadAllPosts();

  return (
    <div className="w-full min-w-full grid place-items-center">
      <h1 className="text-4xl text-blue-500">Blog</h1>
      <div className="my-2">
        {blogPosts.length < 1 ? <p>No posts yet!</p> : blogPosts.map((post, idx) => (
          <BlogRow key={idx} blog={post} />
        ))}
      </div>
    </div>
  );
}
