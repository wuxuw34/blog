import Comment from "@/components/common/comment";
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
        <div className="col-span-9">
          <article>
            <markdownComponents.h1 id="外链列表">
              外链列表
            </markdownComponents.h1>
            {links.length === 0 ? (
              <p className="text-muted-foreground text-sm py-8 text-center">
                暂无外链
              </p>
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
            <markdownComponents.p>本站信息:</markdownComponents.p>
            <markdownComponents.blockquote>
              <markdownComponents.p>
                名称: Wuxuw <br />
                简介: 随便写写 <br />
                链接: <br />
                头像: https://wuxuw.cn/favicon.ico
              </markdownComponents.p>
            </markdownComponents.blockquote>
            <markdownComponents.p>请发送电子邮件申请友链:</markdownComponents.p>
            <markdownComponents.ul>
              <markdownComponents.li>推荐了本站</markdownComponents.li>
              <markdownComponents.li>
                站点活着且有正式域名
              </markdownComponents.li>
              <markdownComponents.li>内容不违反国家法律</markdownComponents.li>
            </markdownComponents.ul>
            <h1
              id="article-end"
              className="invisible"
            ></h1>
          </article>
          <Comment />
        </div>
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
