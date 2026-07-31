import profileData from '../data/profile.js';
import projectsData from '../data/projects.js';
import skillsData from '../data/skills.js';
import experienceData from '../data/experience.js';
import socialsData from '../data/socials.js';

import { ProjectModel } from '../models/project.model.js';
import { SkillModel } from '../models/skill.model.js';
import { SocialModel } from '../models/social.model.js';

export class DataService {
  static getProfile() {
    return profileData;
  }

  static getProjects() {
    return projectsData.map(proj => new ProjectModel(proj));
  }

  static getProjectById(id) {
    const raw = projectsData.find(p => p.id === id);
    return raw ? new ProjectModel(raw) : null;
  }

  static getSkills() {
    return {
      technical: skillsData.technical.map(s => new SkillModel(s)),
      soft: skillsData.soft.map(s => new SkillModel(s)),
      languages: skillsData.languages.map(s => new SkillModel(s)),
      interests: skillsData.interests.map(s => new SkillModel(s))
    };
  }

  static getExperience() {
    return experienceData;
  }

  static getSocials() {
    return socialsData.map(soc => new SocialModel(soc));
  }
}
