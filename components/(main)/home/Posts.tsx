import PostCard from "@/components/common/card/PostCard";
import getAllPosts from "@/utils/post";


export default function Posts() {
  const posts = getAllPosts(true).sort((a, b) => b.createAt - a.createAt);

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
