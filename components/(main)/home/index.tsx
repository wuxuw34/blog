import MoreInfoCard from "@/components/common/card/MoreInfoCard";
import Profile from "./Profile";
import Posts from "./Posts";
import Projects from "./Projects";



export default function MainHome() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 个人信息区 */}
      <Profile />
      <div className="mx-auto w-5/6 mt-7 flex flex-col gap-7">
        <MoreInfoCard
          title="About"
          bntText="More about me"
        >
          <div className="flex flex-col gap-3">
            <p>一名前端开发工程师</p>
            <p>闲着没事干，瞎写写代码</p>
          </div>
        </MoreInfoCard>
        <MoreInfoCard
          title="Post"
          bntText="More posts"
        >
          <Posts />
        </MoreInfoCard>
        <MoreInfoCard
          title="Projects"
          bntText="More projects"
        >
          <Projects />
        </MoreInfoCard>
      </div>
    </div>
  );
}
