import PostCard from "@/components/common/card/PostCard";

const posts: Post[] = [
  {
    id: "1",
    title: "Post 1",  
    description: "This is post 1",
    content: "This is post 1",
    date: 1780456906139,
    tags: ["tag1", "tag2"],
    cover: { href: "https://picsum.photos/200/300", color: "" },
  },
  {
    id: "2",
    title: "Post 2",
    description: "This is post 2",
    content: "This is post 2",
    date: 1780456906139,
    tags: ["tag2", "tag3"],
    cover: { href: "https://picsum.photos/200/300", color: "" },
  },
];

export default function Posts() {
  return (
    <div className="flex flex-col gap-1">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}
