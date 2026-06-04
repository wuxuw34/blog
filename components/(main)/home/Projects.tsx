import ProjectCard from "@/components/common/card/CommonCard";

const projects: Project[] = [
  {
    id: "1",
    name: "Project 1",
    description: "This is project 1",
    url: "https://project1.com",
    image: "/img/blog.jpg",
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          data={project}
        />
      ))}
    </div>
  );
}
