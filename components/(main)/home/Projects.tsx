"use client"
import ProjectCard from "@/components/common/card/CommonCard";

const projects: Project[] = [
  {
    id: "1",
    name: "博客",
    description: "这个是一个博客网站项目",
    url: "https://www.kagerou.fun",
    image: "/img/blog.jpg",
  },
];

export default function Projects() {
  function handleClick(url: string) {
    window.open(url);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          data={project}
          onClick={() => handleClick(project.url)}
        />
      ))}
    </div>
  );
}
