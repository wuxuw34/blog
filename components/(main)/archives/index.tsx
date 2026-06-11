import Button from "@/components/common/button/Button";
import getAllPosts from "@/utils/post";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ArchiveCard from "./ArchiveCard";

export default function Archives() {
  const posts = getAllPosts(true);
  const handledPosts = new Map<number, Post[]>();

  posts.forEach((post) => {
    const year = new Date(post.createAt).getFullYear();
    if (!handledPosts.has(year)) {
      handledPosts.set(year, []);
    }
    handledPosts.get(year)?.push(post);
  });

  console.log(handledPosts);

  return (
    <div>
      <Link
        href="/blog"
        className="col-span-12 "
      >
        <Button>
          <Icon icon="mdi:arrow-left" /> Back
        </Button>
      </Link>
      <div className="flex flex-col gap-3">
        {
          handledPosts.keys().map((year) => (
            <ArchiveCard key={year} year={year} posts={handledPosts.get(year)!} />
          ))
        }
      </div>
    </div>
  );
}
