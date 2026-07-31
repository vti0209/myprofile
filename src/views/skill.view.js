import { SkillsComponent } from '../components/skills/skills.component.js';

export class SkillView {
  static render(containerEl, skills, lang) {
    if (containerEl) {
      containerEl.innerHTML = SkillsComponent(skills, lang);
    }
  }
}
