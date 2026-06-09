import markdownComponents from "../blog/markdown";
import Toc from "../blog/Toc";
import LinkCard from "./LinkCard";

const links: {
  name: string;
  description: string;
  image: string;
  createdAt: string;
  url: string;
}[] = [];

export default function Links() {
  return (
    <div>
      <h1 className="my-6 text-3xl font-medium animate">Links</h1>
      <div className="md:grid md:grid-cols-12 gap-6">
        <article className="col-span-9">
          <markdownComponents.h1 id="外链列表">外链列表</markdownComponents.h1>
          {links.length === 0 ? (
            <p className="text-muted-foreground text-sm py-8 text-center">暂无外链</p>
          ) : (
            <div className="grid grid-cols-3 ">
              {links.map((link, index) => (
                <LinkCard
                  key={index}
                  data={link}
                />
              ))}
            </div>
          )}
          <markdownComponents.h1 id="申请">申请</markdownComponents.h1>
          <markdownComponents.p>
            本站信息:
            <markdownComponents.blockquote>
              
            </markdownComponents.blockquote>
          </markdownComponents.p>
          <h1
            id="article-end"
            className="invisible"
          ></h1>
        </article>
        <aside className="col-span-3">
          <h2 className="text-xl font-medium">TABLE OF CONTENTS</h2>
          <Toc
            headings={[
              {
                name: "外链列表",
                level: 1,
                children: [],
              },
              {
                name: "申请",
                level: 1,
                children: [],
              },
            ]}
          />
        </aside>
      </div>
    </div>
  );
}
