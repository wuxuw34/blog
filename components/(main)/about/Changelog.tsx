import TimeLine, { type TimelineItem } from "@/components/common/timeline";

const changelogs: TimelineItem[] = [
  {
    date: "2026-06-11",
    description: "网站第一版上线👏",
  },
];

export default function Changelog() {
  return <TimeLine items={changelogs} />;
}
