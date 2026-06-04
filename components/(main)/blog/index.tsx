import Button from "@/components/common/button/Button";
import PostCard from "@/components/common/card/PostCard";
import ArrowRight from "@/components/common/svg/ArrowRight";
import getAllPosts from "@/utils/post";
import { faker } from "@faker-js/faker";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import Link from "next/link";

const generateMockPostsWithFaker = (count: number): Post[] => {
  const tags = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "GraphQL",
    "Prisma",
    "Docker",
    "Vercel",
    "AI",
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: faker.string.uuid(),
    title: faker.lorem.sentence({ min: 3, max: 8 }).replace(/\.$/, ""),
    date: faker.date.past({ years: 1 }).getTime(),
    description: faker.lorem.sentence({ min: 10, max: 20 }),
    content: faker.lorem.paragraphs({ min: 2, max: 4 }),
    tags: faker.helpers.arrayElements(tags, { min: 2, max: 4 }),
    cover: { href: "/img/blog.jpg", color: "#d3c7b7" },
  }));
};

export default function Blog() {
  const page = 1;
  const pageSize = 10;
  const total = 23;
  const posts = getAllPosts();
  const tags = ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"];

  console.log(posts);

  return (
    <div>
      <h1 className="my-6 text-3xl font-medium animate">Blog</h1>
      <div className="md:grid md:grid-cols-12 gap-6">
        <div className="col-span-8 ">
          <div className="flex flex-row items-center justify-between  text-sm animate">
            <span className="text-muted-foreground/80">
              Page {page} - Showing {pageSize} of {total} posts
            </span>
            <Button
              className="outline-0 border-none"
              transparent
            >
              View all posts by years
              <ArrowRight />
            </Button>
          </div>
          <div className="flex flex-col gap-3 mt-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                type="large"
              />
            ))}
          </div>
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
        <aside className="col-span-4">
          <h2 className="flex flex-row gap-2 items-center font-medium">
            <Icon icon="mdi:tag" />
            Tags
          </h2>
          <ul className="flex flex-row flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <li
                key={tag}
                className="text-xs font-medium"
              >
                <Link href={`/tags/${tag}`}>
                  <Button>{tag}</Button>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-end mt-4">
            <Link href="/tags">
              <Button
                className="outline-0 border-none"
                transparent
              >
                View all
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
