import TagBlogs from "@/components/(main)/tags/TagBlogs";

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  console.log(tag);
  return <TagBlogs tag={tag} />;
}
