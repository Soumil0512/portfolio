import {
  Education,
  Employment,
  PortfolioDocument,
  Role,
  Skill,
  SocialMediaLink,
} from "@/types";
import { model, models, Schema } from "mongoose";

const SkillSchema = new Schema<Skill>({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const RoleSchema = new Schema<Role>({
  role: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    default: null,
  },
  description: {
    type: [String],
    default: null,
  },
});

const EmploymentSchema = new Schema<Employment>({
  company: {
    type: String,
    required: true,
  },
  roles: {
    type: [RoleSchema],
    required: true,
  },
});

const EducationSchema = new Schema<Education>({
  institute: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    default: null,
  },
});

const SocialMediaLinkSchema = new Schema<SocialMediaLink>({
  link: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const PortfolioSchema = new Schema<PortfolioDocument>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  bio: {
    type: [String],
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  skills: {
    type: [SkillSchema],
    required: true,
  },
  employmentHistory: {
    type: [EmploymentSchema],
    required: true,
  },
  educationHistory: {
    type: [EducationSchema],
    required: true,
  },
  socialMediaLinks: {
    type: [SocialMediaLinkSchema],
    required: true,
  },
});

export default models.PortfolioModel ||
  model("PortfolioModel", PortfolioSchema);
