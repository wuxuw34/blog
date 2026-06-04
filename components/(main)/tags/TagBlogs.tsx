import Button from "@/components/common/button/Button";
import PostCard from "@/components/common/card/PostCard";
import getAllPosts from "@/utils/post";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import Link from "next/link";

interface TagBlogsProps {
  tag: string;
}

export default function TagBlogs({ tag }: TagBlogsProps) {
  const page = 1;
  const pageSize = 10;
  const total = 23;
  const posts = getAllPosts();

  return (
    <div>
      <Link href="/blog">
        <Button>
          <Icon icon="mdi:arrow-left" /> Back
        </Button>
      </Link>
      <h1 className="mt-12 mb-6 text-3xl font-medium">Tag: #{tag}</h1>
      <ul className="flex flex-col w-full">
        {posts.map((post) => (
          <li
            key={post.id}
            className="w-full h-fit"
          >
            <PostCard
              post={post}
              type="large"
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-row items-center justify-between mt-6">
        <Button
          className={clsx("outline-0 border-none", {
            invisible: page === 1,
          })}
          transparent
        >
          <Icon icon="mdi:arrow-left" />
          Previous
        </Button>
        <Button
          className={clsx("outline-0 border-none", {
            invisible: Math.ceil(total / pageSize) === page,
          })}
          transparent
        >
          Next
          <Icon icon="mdi:arrow-right" />
        </Button>
      </div>
    </div>
  );
}
