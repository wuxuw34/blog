import Button from "@/components/common/button/Button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import markdownComponents from "../blog/markdown";
import Toc from "../blog/Toc";
import siteConfig from "@/config/site-config";
import Changelog from "./Changelog";
import CommonCard from "@/components/common/card/CommonCard";
import moment from "moment";
import Skills from "./Skills";
import Tools from "./Tools";
import Comment from "@/components/common/comment";

export default function About() {
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
      <h1 className="my-6 text-3xl font-medium animate">About</h1>
      <div className="md:grid grid-cols-12 mt-6 gap-x-6">
        <article className="col-span-9 ">
          <markdownComponents.p>前端开发工程师</markdownComponents.p>
          <markdownComponents.p>
            闲着没事写了这个博客，分享一下自己的学习和经验，记录一下生活。
          </markdownComponents.p>
          <markdownComponents.h1 id="Hobbies">Hobbies</markdownComponents.h1>
          <markdownComponents.ul>
            <markdownComponents.li>宅在家中</markdownComponents.li>
            <markdownComponents.li>游戏</markdownComponents.li>
          </markdownComponents.ul>
          <markdownComponents.h1 id="Education">
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
          <markdownComponents.h1 id="Skills">Skills</markdownComponents.h1>
          <Skills />
          <markdownComponents.h1 id="Tools">Tools</markdownComponents.h1>
          <Tools />
          <markdownComponents.h1 id="About blog">
            About blog
          </markdownComponents.h1>
          <markdownComponents.p>
            这个部分是介绍网站的，包括网站的变更日志，使用的技术栈，以及一些其他信息。
          </markdownComponents.p>
          <markdownComponents.h2 id="Changelog">
            Changelog
          </markdownComponents.h2>
          <Changelog />
          <markdownComponents.h2 id="Technology stack">
            Technology stack
          </markdownComponents.h2>
          <markdownComponents.ul>
            <markdownComponents.li>
              <markdownComponents.strong>Domain: </markdownComponents.strong>
              Aliyun
            </markdownComponents.li>
            <markdownComponents.li>
              <markdownComponents.strong>Hosting: </markdownComponents.strong>
              Vercel
            </markdownComponents.li>
            <markdownComponents.li>
              <markdownComponents.strong>Framework: </markdownComponents.strong>
              Next.js
            </markdownComponents.li>
            <markdownComponents.li>
              <markdownComponents.strong>Language: </markdownComponents.strong>
              Typescript
            </markdownComponents.li>
            <markdownComponents.li>
              <markdownComponents.strong>
                UI Framework:{" "}
              </markdownComponents.strong>
              Tailwind CSS
            </markdownComponents.li>
            <markdownComponents.li>
              <markdownComponents.strong>
                Comment:{" "}
              </markdownComponents.strong>
              Gitalk
            </markdownComponents.li>
          </markdownComponents.ul>
          <h1
            id="article-end"
            className="invisible"
          ></h1>
          <Comment />
        </article>
        <div className="col-span-3 hidden md:block">
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
                  name: "Education",
                  level: 1,
                  children: [],
                },
                {
                  name: "Skills",
                  level: 1,
                  children: [],
                },
                {
                  name: "Tools",
                  level: 1,
                  children: [],
                },
                {
                  name: "About blog",
                  level: 1,
                  children: [
                    { name: "Changelog", level: 2, children: [] },
                    { name: "Technology stack", level: 2, children: [] },
                  ],
                },
              ]}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
