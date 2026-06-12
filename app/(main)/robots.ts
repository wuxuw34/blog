import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseURL = 'https://kagerou.fun'

  return {
    rules: {
      userAgent: '*',  // 适用所有爬虫
      allow: '/',      // 允许爬取所有路径
      disallow: ['/admin/', '/api/'], // 禁止爬取的路径
    },
    sitemap: `${baseURL}/sitemap.xml`,
    host: baseURL,
  }
}