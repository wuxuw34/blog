import siteConfig from "@/config/site-config";
import moment from "moment";

export interface TimelineItem {
  date: string;
  // title: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function TimeLine({ items }: TimelineProps) {
  if (!items.length) return null;

  return (
    <div className="relative ml-1">
      <div className="absolute left-[5px] top-1 bottom-1 w-px bg-border" />
      <div className="">
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start gap-3 group pl-4 group"
            >
              <span className="absolute left-0 top-1.5 z-10 border-[2px] border-muted-foreground size-[12px] rounded-full group-hover:scale-120 transition-transform duration-200" />
              <span className="shrink-0 w-28 text-sm text-muted-foreground pt-0.5 transition-colors duration-200 group-hover:text-foreground">
                {moment(item.date).format(siteConfig.settings.timeFormat)}
              </span>
              <div className="flex flex-col gap-0.5 transition-colors duration-200 text-md">
                {/* <span className="text-sm font-medium">{item.title}</span> */}
                {item.description && (
                  <p className="text-md text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
