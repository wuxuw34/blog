"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import siteConfig from "@/config/site-config";

export default function Profile() {
  return (
    <section className="animate flex flex-col items-center justify-center">
      <Image
        src="/img/avatar.webp"
        alt="头像"
        width={128}
        height={128}
        loading="eager"
        className="rounded-full  outline-primary outline-4 aspect-square outline-offset-2 bg-white hover:rotate-[-5deg] hover:shadow-2xl transition-all duration-300"
      />
      <h1 className="text-4xl font-medium mt-7">Wuxuw</h1>
      <div className="flex flex-row items-center justify-between mt-4 gap-7">
        {siteConfig.profile.socials.map((info) => {
          return (
            <div
              key={info.name}
              className={`flex select-none flex-row gap-3 items-center flex-nowrap ${info.href && "hover:text-primary cursor-pointer"}`}
            >
              <Icon
                icon={info.icon}
                className="size-[20px]"
              />
              <a
                className=""
                href={info.href}
              >
                {info.name}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
