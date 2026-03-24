// Core TypeScript interfaces for AI Job Recommendation Dashboard

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  skills: string[];
  experienceYears: number;
  experienceLevel: 'entry' | 'mid' | 'senior' | 'lead';
  preferredRole: string;
  preferredLocation: string;
  resumeText?: string;
  bio?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  locationType: 'remote' | 'hybrid' | 'onsite';
  experienceLevel: 'entry' | 'mid' | 'senior' | 'lead';
  requiredSkills: string[];
  niceToHaveSkills: string[];
  description: string;
  responsibilities: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  jobType: 'full-time' | 'part-time' | 'contract' | 'internship';
  postedAt: string;
  applyUrl: string;
  tags: string[];
}

export interface JobMatch extends Job {
  matchScore: number; // 0-100
  matchedSkills: string[];
  missingSkills: string[];
  reasoning: string;
  isBookmarked?: boolean;
}

export interface FilterState {
  searchQuery: string;
  locationFilter: string;
  experienceLevel: string;
  skillsFilter: string[];
  locationTypeFilter: string;
  jobTypeFilter: string;
  sortBy: 'bestMatch' | 'newest' | 'salary';
}

export interface DashboardStats {
  totalMatches: number;
  averageMatchScore: number;
  topSkillsInDemand: { skill: string; count: number }[];
  matchScoreDistribution: { range: string; count: number }[];
  locationBreakdown: { location: string; count: number }[];
}

export interface AsyncState {
  loading: boolean;
  error: string | null;
}

export type SortOption = 'bestMatch' | 'newest' | 'salary';
export type ExperienceLevel = 'all' | 'entry' | 'mid' | 'senior' | 'lead';
export type LocationType = 'all' | 'remote' | 'hybrid' | 'onsite';
