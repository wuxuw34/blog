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
          id: fileName
        })
      } else {
        posts.push({
          ...md.data as Post,
          content: md.content,
          id: fileName
        })
      }
    }
  })
  return posts
}

export function getPostById(id: string) {
  const posts = getAllPosts(false)
  return posts.find(post => post.id === id)
}


