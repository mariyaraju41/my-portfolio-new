
export interface Project {
  title: string;
  tech: string[];
  date: string;
  description: string[];
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  points: string[];
}

export interface Education {
    degree: string;
    institution: string;
    date: string;
    cgpa?: string;
}

export interface Certification {
    name: string;
    issuer: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}