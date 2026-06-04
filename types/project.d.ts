

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
  urls?: {
    icon: string;
    url: string;
  }[]
}