export interface Tag {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  repoUrl: string;
  tags: Tag[];
}
