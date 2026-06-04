import Button from "@/components/common/button/Button";
import siteConfig from "@/config/site-config";
import { getPostById } from "@/utils/post";
import { Icon } from "@iconify/react";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import markdownComponents from "./markdown";
import Toc from "./Toc";

interface PostPreviewProps {
  id: string;
}

export default function PostPreview({ id }: PostPreviewProps) {
  const post = getPostById(id);

  if (!post) return <div>Post not found</div>;

  const infos: { icon: string; text: string; type?: string }[] = [
    {
      icon: "mdi:calendar",
      text: moment(post.date).format(siteConfig.settings.timeFormat),
    },
    {
      icon: "ri:time-line",
      text: "5min",
    },
    ...post.tags.map((tag) => ({
      icon: "mdi:tag",
      text: tag,
      type: "tag",
    })),
  ];

  const tagClass =
    "hover:text-primary bg-linear-to-r from-primary to-primary bg-size-[0px_0px] origin-bottom hover:bg-size-[100%_2px] bg-no-repeat bg-bottom transition-all cursor-pointer";

  return (
    <div
      className="grid grid-cols-12 gap-x-6 animate"
      style={
        {
          "--color-bg": post.cover.color,
          "--color": post.cover.color,
        } as React.CSSProperties
      }
    >
      <Link
        href="/blog"
        className="col-span-12 "
      >
        <Button>
          <Icon icon="mdi:arrow-left" /> Back
        </Button>
      </Link>
      <div className="col-span-12 md:col-span-9">
        <Image
          src={post.cover.href}
          alt={post.title}
          width={100}
          height={60}
          className="w-full h-86 object-cover rounded-xl shadow-xl mt-6"
        />
        <ul className="flex flex-row gap-3 mt-3 text-sm text-muted-foreground/80">
          {infos.map((info, index) => {
            return (
              <li
                key={index}
                className="flex flex-row gap-1 items-center"
              >
                <Icon icon={info.icon} />
                {info.type === "tag" ? (
                  <Link
                    className={tagClass}
                    href={`/tags/${info.text}`}
                  >
                    {info.text}
                  </Link>
                ) : (
                  <span>{info.text}</span>
                )}
              </li>
            );
          })}
        </ul>
        <h1 className="mt-6 mb-4 text-3xl font-medium">{post.title}</h1>
        <p>&quot;{post.description}&quot;</p>
        <article className="mt-12 ">
          <ReactMarkdown components={markdownComponents}>
            {post.content}
          </ReactMarkdown>
          <h6
            className="invisible"
            id="article-end"
          ></h6>
        </article>
      </div>
      <div className="hidden md:block col-span-3">
        <aside className=" animate sticky top-24">
          <h2 className="text-xl font-medium">TABLE OF CONTENTS</h2>
          <Toc post={post} />
        </aside>
      </div>
    </div>
  );
}
