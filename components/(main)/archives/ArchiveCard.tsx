import PostCard from "@/components/common/card/PostCard";

interface ArchiveCardProps {
  year: number;
  posts: Post[];
}

export default function ArchiveCard({ year, posts }: ArchiveCardProps) {
  return (
    <div className="mt-20 relative">
      <h2
        className="absolute -top-8 left-0 text-8xl text-transparent z-0 select-none"
        style={
          {
            WebkitTextStrokeWidth: 2,
            WebkitTextStrokeColor: "var(--color-border)",
          } as React.CSSProperties
        }
      >
        {year}
      </h2>
      <span className="z-1 relative select-none">{posts.length} posts</span>
      <ul className="relative z-1 flex-col flex gap-3 mt-3">
        {posts.map((post) => (
          <li key={post.id} >
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
