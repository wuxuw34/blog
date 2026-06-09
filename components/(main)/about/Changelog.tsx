import TimeLine, { type TimelineItem } from "@/components/common/timeline";

const changelogs: TimelineItem[] = [
  {
    date: "2025-01",
    description: "Built with Next.js and Tailwind CSS.",
  },
  {
    date: "2025-01-01",
    description: "Built with Next.js and Tailwind CSS."
  },
];

export default function Changelog() {
  return <TimeLine items={changelogs} />;
}
