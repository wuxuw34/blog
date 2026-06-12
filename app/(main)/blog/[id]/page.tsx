import PostPreview from "@/components/(main)/blog/Preview";
import { getAllPostPaths, getPostById } from "@/utils/post";

export async function generateStaticParams() {
  const paths = getAllPostPaths();

  return paths.map((path) => {
    return {
      id: path,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostById(decodeURIComponent(id));

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <PostPreview id={decodeURIComponent(id)} />;
}
