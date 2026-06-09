import { Icon } from "@iconify/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface LinkCardProps {
  data: {
    name: string;
    description: string;
    image: string;
    createdAt: string;
    url: string;
  };
}

export default function LinkCard({ data }: LinkCardProps) {
  return (
    <Link href={data.url}>
      <div className="flex flex-row gap-3 border border-border px-3 py-2 rounded-xl bg-muted/20 hover:bg-muted transition-all group">
        <div className="rounded-full w-15 h-15 aspect-square bg-white relative overflow-hidden shrink-0">
          <Image
            src={data.image}
            alt={data.name}
            width={32}
            height={32}
            className="rounded-full w-15 h-15 aspect-square object-cover"
          />
          <div className="absolute size-15 top-0 left-0 flex items-center justify-center p-2 bg-black opacity-0 group-hover:opacity-50 transition-opacity">
            <Icon
              icon="majesticons:open"
              className="rounded-full size-15 aspect-square text-white"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <p className="my-0 line-clamp-1 text-sm">{data.name}</p>
          <p className="text-sm line-clamp-1 text-muted-foreground/80">
            {data.description}
          </p>
          <div className="text-xs self-end">
            {moment(data.createdAt).format("YYYY-MM-DD")}
          </div>
        </div>
      </div>
    </Link>
  );
}
