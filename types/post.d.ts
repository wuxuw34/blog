
interface Post {
  id: string;
  title: string;
  createAt: number;
  content: string;
  tags: string[];
  description: string;
  readingTime: number;
  cover: {
    href: string,
    color: string
  };
}

interface TocItem {
  name: string;
  level: number;
  children: TocItem[];
}