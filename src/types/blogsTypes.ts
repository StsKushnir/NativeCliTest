export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  blogContent: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostPreview {
  id: string;
  title: string;
  image: string;
}