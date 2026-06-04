import Button from "@/components/common/button/Button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import markdownComponents from "../blog/markdown";
import Toc from "../blog/Toc";
import siteConfig from "@/config/site-config";
import Changelog from "./Changelog";
import CommonCard from "@/components/common/card/CommonCard";
import moment from "moment";

export default function About() {
  return (
    <div>
      <Link
        href="/blog"
        className="col-span-12 "
      >
        <Button>
          <Icon icon="mdi:arrow-left" /> Back
        </Button>
      </Link>
      <h1 className="my-6 text-3xl font-medium animate">About</h1>
      <div className="grid grid-cols-12 mt-6 gap-x-6">
        <article className="col-span-9">
          <markdownComponents.p>前端开发工程师</markdownComponents.p>
          <markdownComponents.p>
            闲着没事写了这个博客，分享一下自己的学习和经验，记录一下生活。
          </markdownComponents.p>
          <markdownComponents.h1 id="Hobbies">Hobbies</markdownComponents.h1>
          <markdownComponents.ul>
            <markdownComponents.li>宅在家中</markdownComponents.li>
            <markdownComponents.li>游戏</markdownComponents.li>
          </markdownComponents.ul>
          <markdownComponents.h1 id="education">
            Education
          </markdownComponents.h1>
          <div className="grid grid-cols-2">
            {siteConfig.profile.educations.map((edu) => (
              <CommonCard
                key={edu.name}
                data={{
                  ...edu,
                  description:
                    edu.location +
                    "\n" +
                    moment(edu.start).format("YYYY") +
                    " - " +
                    moment(edu.end).format("YYYY"),
                  image: edu.image,
                }}
              />
            ))}
          </div>
          <markdownComponents.h1 id="skills">
            Skills
          </markdownComponents.h1>
          
          <markdownComponents.h1 id="About blog">
            About blog
          </markdownComponents.h1>
          <markdownComponents.p>
            这个部分是介绍网站的，包括网站的变更日志，使用的技术栈，以及一些其他信息。
          </markdownComponents.p>
          <markdownComponents.h2>Changelog</markdownComponents.h2>
          <Changelog />
          <h1
            id="article-end"
            className="invisible"
          ></h1>
        </article>
        <div className="col-span-3">
          <aside className=" animate sticky top-24">
            <h2 className="text-xl font-medium">TABLE OF CONTENTS</h2>
            <Toc
              headings={[
                {
                  name: "Hobbies",
                  level: 1,
                  children: [],
                },
                {
                  name: "education",
                  level: 1,
                  children: [],
                },
                {
                  name: "skills",
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
