export class ProjectModel {
  constructor(data) {
    this.id = data.id || "";
    this.title = data.title || "";
    this.category = data.category || "";
    this.image = data.image || "";
    this.github = data.github || "#";
    this.demo = data.demo || "#";
    this.tech = Array.isArray(data.tech) ? data.tech : [];
    this.year = data.year || new Date().getFullYear();
    
    // Localization supports
    this.categoryVi = data.categoryVi || "";
    this.categoryEn = data.categoryEn || "";
    this.titleVi = data.titleVi || this.title;
    this.titleEn = data.titleEn || this.title;
    this.descriptionVi = data.descriptionVi || "";
    this.descriptionEn = data.descriptionEn || "";
    
    this.hasRichDetails = !!data.hasRichDetails;
    this.details = data.details || null;
  }

  getCategory(lang) {
    return lang === 'en' ? (this.categoryEn || this.categoryVi) : (this.categoryVi || this.categoryEn);
  }

  getTitle(lang) {
    return lang === 'en' ? this.titleEn : this.titleVi;
  }

  getDescription(lang) {
    return lang === 'en' ? this.descriptionEn : this.descriptionVi;
  }
}
