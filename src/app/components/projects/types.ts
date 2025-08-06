export interface ProjectTag {
  name: string;
  color: string;
  icon: string;
}

export interface ProjectImplementation {
  title: string;
  description: string;
  technologies: string[];
  challenges?: string[];
  achievements?: string[];
}

export interface ProjectChallenge {
  description: string;
  solution: string;
  impact: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  liveUrl: string;
  githubUrl: string;
  techStack: string[];
  status: string;
  teamSize: string;
  developmentPeriod: string;
  metrics: Record<string, string | undefined>;
  keyFeatures: string[];
  implementation: ProjectImplementation[];
  architecture: string;
  challenges: ProjectChallenge[];
  lessonsLearned?: string[];
  tags: ProjectTag[];
  futureImprovements?: string[];
}
