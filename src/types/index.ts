export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'core';
  icon: string; // lucide icon identifier or custom svg type
  description: string;
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: 'full-stack' | 'frontend' | 'backend' | 'ai' | 'tool';
  metrics?: string;
  highlights?: string[];
  year: string;
}

export interface LearningItem {
  topic: string;
  category: string;
  description: string;
  currentFocus: string;
  progress: number; // 0 to 100 percentage
  tags: string[];
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    location: string;
    timezone?: string;
    availability: string;
    availableForHire: boolean;
    headline: string;
    bio: string[];
    philosophy: string;
    interests: string[];
    resumeUrl?: string;
    email: string;
  };
  socials: SocialLink[];
  techStack: TechItem[];
  projects: Project[];
  learning: LearningItem[];
}
