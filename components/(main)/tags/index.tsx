import Button from "@/components/common/button/Button";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Tags() {
  const tags = [
    {
      name: "Next.js",
      value: 10,
    },
    {
      name: "React",
      value: 15,
    },
    {
      name: "JavaScript",
      value: 8,
    },
    {
      name: "TypeScript",
      value: 12,
    },
    {
      name: "CSS",
      value: 10,
    },
    {
      name: "HTML",
      value: 12,
    },
  ];

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
          <li
            key={tag.name}
            className="text-xl font-medium"
          >
            <Link href={`/tags/${tag.name}`}>
              <Button >
                {tag.name} {tag.value}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
