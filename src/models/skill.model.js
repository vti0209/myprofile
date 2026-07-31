export class SkillModel {
  constructor(data) {
    this.nameVi = data.vi || data.name || "";
    this.nameEn = data.en || data.name || "";
    this.icon = data.icon || null;
  }

  getName(lang) {
    return lang === 'en' ? this.nameEn : this.nameVi;
  }
}
