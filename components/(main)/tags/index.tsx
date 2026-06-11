import Button from "@/components/common/button/Button";
import getAllPosts from "@/utils/post";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Tags() {
  const posts = getAllPosts(true);
  const tags: {
    name: string;
    value: number;
  }[] = [];

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        tags.push({
          name: tag,
          value: (tags.find((t) => t.name === tag)?.value || 0) + 1,
        });
      });
    }
  });

  return (
    <div>
      <Link href="/blog">
        <Button>
          <Icon icon="mdi:arrow-left" /> back
        </Button>
      </Link>
      <h1 className="mt-10 mb-6 text-3xl font-medium">Tags</h1>
      <ul className="flex flex-row items-center gap-x-3 gap-y-3">
        {tags.map((tag) => (
          <li key={tag.name}>
            <Link href={`/tags/${tag.name}`}>
              <Button className="text-lg font-medium">
                {tag.name} {tag.value}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
