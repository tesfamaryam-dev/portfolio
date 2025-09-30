export enum ProjectCategory {
  Personal = "Personal",
  RealWorld = "Real-World",
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  image: string;
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
  category: ProjectCategory;
  technologies?: string[];
  status?: "under development" | "recently completed";
}
