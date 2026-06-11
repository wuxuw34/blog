import { Icon } from "@iconify/react";
import moment from "moment";
import Image from "next/image";
import ArrowRight from "../svg/ArrowRight";
import Link from "next/link";

interface PostCardProps {
  post: Post;
  type?: "mini" | "large";
}

export default async function PostCard({ post, type = "mini" }: PostCardProps) {
  if (type === "large") {
    return (
      <div
        className="group rounded-xl overflow-hidden border-border border relative hover:bg-(--color-bg) transition-colors px-5 py-3 cursor-pointer shadow-sm pt-24 md:py-6"
        style={
          {
            "--color": `color-mix(in srgb, ${post.cover.color} 40%, var(---color-primary) 60%)`,
            "--color-bg": `hsl(from ${post.cover.color} h s l / 20%)`,
          } as React.CSSProperties
        }
      >
        <Link href={`/blog/${post.id}`}>
          <Image
            src={post.cover.href}
            alt={post.title}
            width={100}
            height={100}
            className="absolute right-0 top-0 md:bottom-0 w-full md:w-3/5 object-cover max-md:mask-b-from-0% max-md:mask-b-to-100%  md:mask-l-from-0% md:mask-l-to-100% max-md:h-2/3 md:h-full "
          />
          <div className="relative w-full flex flex-col justify-between gap-1">
            <span className="text-muted-foreground/80 text-sm">
              {moment(post.createAt).format("MMM yy, YYYY")}
            </span>
            <div className="flex flex-row items-center justify-between ">
              <span className="text-lg group-hover:text-(--color)">
                {post.title}
              </span>
              <ArrowRight className="font-bold text-lg stroke-[4px] group-hover:stroke-(--color)" />
            </div>
            <span className="text-muted-foreground/90 line-clamp-1 me-24">
              {post.description}
            </span>
            <div className="py-2">
              <Icon icon="mingcute:time-line" />
            </div>
            <ul className="flex flex-row items-center gap-1">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <div className="px-2 py-1 text-sm text-muted-foreground/80 bg-muted border border-border rounded-lg group-hover:bg-(--color-bg) transition-colors">
                    {tag}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <Link
      href={`/blog/${post.id}`}
      className={`group px-2 rounded-xl flex flex-row justify-between items-center border bg-muted/40 text-muted-foreground/80 border-border text-sm py-1 hover:text-primary/60 cursor-pointer hover:bg-muted transition-all duration-150 gap-1 h-12 `}
    >
      <div className="flex flex-row items-center">
        <div className="min-w-26">
          {moment(post.createAt).format("MMM yy, YYYY")}
        </div>
        <span className="text-muted-foreground/70 font-bold group-hover:text-primary/90">
          {post.title}
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-muted-foreground group-hover:stroke-primary"
      >
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          className="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"
        ></line>
        <polyline
          points="12 5 19 12 12 19"
          className="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"
        ></polyline>
      </svg>
    </Link>
  );
}
