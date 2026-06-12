import getAllPosts from "@/utils/post";


export default async function sitemap() {
  const posts = getAllPosts(false)
  const baseURL = 'https://kagerou.fun'

  return [
    {
      url: `${baseURL}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/links`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/blog`,
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `${baseURL}/blog/${post.id}`,
      lastModified: new Date(post.createAt),
    }))
  ]
}