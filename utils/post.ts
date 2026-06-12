import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')

export default function getAllPosts(removeContent = false) {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR)
  }
  const posts: Post[] = []
  fs.readdirSync(POSTS_DIR).forEach(fileName => {
    const filePath = path.join(POSTS_DIR, fileName)
    if (fs.existsSync(filePath)) {
      const text = fs.readFileSync(filePath, 'utf-8')
      const md = matter(text)
      if (removeContent) {
        posts.push({
          ...md.data as Post,
          readingTime: calculateReadingTime(md.content),
          id: fileName
        })
      } else {
        posts.push({
          ...md.data as Post,
          content: md.content,
          readingTime: calculateReadingTime(md.content),
          id: fileName
        })
      }
    }
  })
  return posts
}

export function getAllPostPaths() {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR)
  }
  const paths: string[] = []
  fs.readdirSync(POSTS_DIR).forEach(fileName => {
    const filePath = path.join(POSTS_DIR, fileName)
    if (fs.existsSync(filePath)) {
      paths.push(fileName)
    }
  })
  return paths
}

export function getPostById(id: string) {
  const posts = getAllPosts(false)
  return posts.find(post => post.id === id)
}

/**
 * 计算文章阅读时间
 * @param {string} content - 文章内容
 * @param {number} wordsPerMinute - 每分钟阅读字数，默认 300
 * @returns {number} 阅读时间（分钟）
 */
function calculateReadingTime(content: string, wordsPerMinute = 300) {
  // 移除 HTML 标签（如果内容包含 HTML）
  const text = content.replace(/<[^>]*>/g, '');

  // 统计中文字符和英文单词
  const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;

  // 总字数估算：中文每个字算1，英文每个单词算1
  const totalWords = chineseChars + englishWords;

  // 计算阅读分钟数
  const minutes = Math.ceil(totalWords / wordsPerMinute);

  // 至少返回 1 分钟
  return Math.max(1, minutes);
}
