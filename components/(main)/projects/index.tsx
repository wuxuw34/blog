import Button from "@/components/common/button/Button";
import GithubCard from "@/components/common/card/github";
import { Icon } from "@iconify/react";
import Link from "next/link";
import markdownComponents from "../blog/markdown";
import Toc from "../blog/Toc";
import siteConfig from "@/config/site-config";

export default function Projects() {
  return (
    <div>
      {/* <Link
        href="/blog"
        className="col-span-12 "
      >
        <Button>
          <Icon icon="mdi:arrow-left" /> Back
        </Button>
      </Link> */}
      <h1 className="my-6 text-3xl font-medium animate">Projects</h1>
      <div className="md:grid grid-cols-12 mt-6 gap-x-6">
        <article className="col-span-9">
          <markdownComponents.h1>Github</markdownComponents.h1>
          <div>
            <GithubCard />
          </div>
          <markdownComponents.h1>Projects</markdownComponents.h1>
          <div className="grid md:grid-cols-2 ">
            {siteConfig.projects.map((project) => (
              <div
                key={project.name}
                className="border border-border relative z-10 col-span-1 flex flex-col gap-y-1 px-2 py-1.5 sm:px-3 sm:py-2 select-none rounded-xl"
              >
                <Link
                  className="line-clamp-1 font-medium text-foreground no-underline transition-colors"
                  href="/projects/test"
                >
                  {project.name}
                </Link>
                <div className="line-clamp-2 leading-snug text-muted-foreground sm:h-12">
                  {project.description}
                </div>
                <div className="flex flex-row gap-1">
                  {project.urls?.map((url) => (
                    <button
                      key={url.url}
                      className="bg-muted size-6 flex items-center justify-center rounded-full hover:text-primary cursor-pointer"
                    >
                      <Icon icon={url.icon} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <markdownComponents.h1>Others</markdownComponents.h1>
          <h1
            id="article-end"
            className="invisible"
          ></h1>
        </article>
        <div className="col-span-3 hidden md:block">
          <aside className=" animate sticky top-24">
            <h2 className="text-xl font-medium">TABLE OF CONTENTS</h2>
            <Toc
              headings={[
                {
                  name: "Github",
                  level: 1,
                  children: [],
                },
                {
                  name: "Projects",
                  level: 1,
                  children: [],
                },
                {
                  name: "Others",
                  level: 1,
                  children: [],
                },
              ]}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
