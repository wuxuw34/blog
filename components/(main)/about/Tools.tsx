import ListCard from "@/components/common/card/ListCard";

export default function Tools() {
  return (
    <div className="flex flex-col gap-3">
      <ListCard
        title="Productive"
        list={[
          {
            icon: "devicon:chrome",
            name: "Chrome",
            description: "Web browser",
          },
          {
            icon: "/img/typora.png",
            name: "Typora",
            description: "Markdown editor",
          },
        ]}
      />
      <ListCard
        title="Development"
        list={[
          {
            icon: "devicon:vscode",
            name: "VSCode",
            description: "Code editor",
          },
          {
            icon: "simple-icons:cursor",
            name: "Cursor",
            description: "AI Code editor",
          },
          {
            icon: "/img/uniapp.png",
            name: "UniApp",
            description: "Cross-platform development framework",
          },
          {
            icon: "devicon:webstorm",
            name: "WebStorm",
            description: "JavaScript IDE",
          }
        ]}
      />
    </div>
  );
}
