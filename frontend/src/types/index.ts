export interface Idea {
  id: string;
  title: string;
  description: string;
  field: string;
  noveltyScore: number;
  feasibilityScore: number;
  confidenceScore: number;
  citations: Citation[];
  createdAt: string;
}

export interface Citation {
  title: string;
  authors: string[];
  source: string;
  url: string;
  year: number;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  field: string;
  institution: string;
  publications: number;
  hIndex: number;
  avatar: string;
  bio: string;
}

export interface Field {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface UserPreferences {
  role: "seeker" | "mentor";
  fields: string[];
  noveltyLevel: number;
  mode: "ai" | "expert";
}

export type UserRole = "seeker" | "mentor";
