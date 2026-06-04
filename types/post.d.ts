
interface Post {
  id: string;
  title: string;
  date: number;
  content: string;
  tags: string[];
  description: string;
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