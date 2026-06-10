import PostPreview from "@/components/(main)/blog/Preview";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <PostPreview id={id} />;
}
