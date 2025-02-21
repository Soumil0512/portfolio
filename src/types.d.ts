import { Document } from "mongoose";

export interface Skill {
  name: string;
  icon: string;
}

export type Skills = Skill[];

export interface Role {
  role: string;
  startDate: string;
  endDate: string | null;
  description: string[];
}

export interface Employment {
  company: string;
  roles: Role[];
}

export type EmploymentHistory = Employment[];

export interface Education {
  institute: string;
  degree: string;
  startDate: string;
  endDate: string | null;
}

export type EducationHistory = Education[];

export interface SocialMediaLink {
  link: string;
  name: string;
}

export type SocialMediaLinks = SocialMediaLink[];

export type Portfolio = {
  name: string;
  email: string;
  phone: string;
  bio: string[];
  role: string;
  skills: Skills;
  employmentHistory: EmploymentHistory;
  educationHistory: EducationHistory;
  socialMediaLinks: SocialMediaLinks;
};

export interface PortfolioDocument extends Portfolio, Document {}

export type PortfolioProps = {
  portfolio: Portfolio;
};

export type OnClickEventProps = MouseEvent<HTMLAllCollection | HTMLButtonElement>;