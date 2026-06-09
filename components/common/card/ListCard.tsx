import { Icon } from "@iconify/react";
import Image from "next/image";

interface ListCardProps {
  title?: string;
  list: {
    icon: string;
    name: string;
    description: string;
    onClick?: () => void;
  }[];
}

export default function ListCard({ title, list = [] }: ListCardProps) {
  function isURL(url: string) {
    return (
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("/")
    );
  }

  return (
    <div className="flex flex-col rounded-xl border border-border py-3 px-3 gap-y-3 sm:gap-y-4 mb-5">
      {title && <div className="m-0 px-2 text-lg font-medium">{title}</div>}
      <div className="grid grid-cols-2">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-3 border border-transparent hover:border-border px-2 py-1 rounded-md cursor-pointer hover:bg-muted/30"
            onClick={item.onClick}
          >
            {isURL(item.icon) ? (
              <Image
                src={item.icon}
                alt={item.name}
                width={32}
                height={32}
                className="size-12 p-2 bg-muted rounded-xl"
              ></Image>
            ) : (
              <Icon
                icon={item.icon}
                className="size-12 bg-muted rounded-xl p-2"
              />
            )}
            <div className="flex flex-col h-full gap-1 ">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="text-sm text-muted-foreground line-clamp-1">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
