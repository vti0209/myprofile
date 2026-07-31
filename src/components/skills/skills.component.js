export function SkillsComponent(skills, lang) {
  const isVi = lang === 'vi';

  const techHeader = isVi ? "Kỹ năng công nghệ" : "Technical Skills";
  const softHeader = isVi ? "Kỹ năng mềm" : "Soft Skills";
  const langHeader = isVi ? "Ngôn ngữ" : "Languages";
  const interestHeader = isVi ? "Sở thích" : "Interests";

  const techHTML = skills.technical.map(s => `
    <div class="skill-tag it-glow">${s.getName(lang)}</div>
  `).join('');

  const softHTML = skills.soft.map(s => `
    <div class="skill-tag it-glow" data-vi="${s.nameVi}" data-en="${s.nameEn}">${s.getName(lang)}</div>
  `).join('');

  const langHTML = skills.languages.map(s => `
    <li><i class="bi bi-check2-circle text-primary"></i> <span data-vi="${s.nameVi}" data-en="${s.nameEn}">${s.getName(lang)}</span></li>
  `).join('');

  const interestHTML = skills.interests.map(s => `
    <li><i class="bi ${s.icon} text-primary"></i> <span data-vi="${s.nameVi}" data-en="${s.nameEn}">${s.getName(lang)}</span></li>
  `).join('');

  return `
    <div class="skills-section">
      <div class="section-header" data-aos="fade-left" data-aos-delay="200">
        <div class="header-content">
          <span class="section-badge" data-vi="Kỹ năng" data-en="Skills">${isVi ? 'Kỹ năng' : 'Skills'}</span>
          <h2 data-vi="Kỹ năng công nghệ" data-en="Technical Skills">${techHeader}</h2>
        </div>
      </div>

      <div class="skills-grid mt-4">
        ${techHTML}
      </div>

      <div class="section-header mt-5" data-aos="fade-left" data-aos-delay="200">
        <div class="header-content">
          <h2 data-vi="Kỹ năng mềm" data-en="Soft Skills">${softHeader}</h2>
        </div>
      </div>
      <div class="skills-grid mt-4">
        ${softHTML}
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <h4 data-vi="Ngôn ngữ" data-en="Languages">${langHeader}</h4>
          <ul class="list-unstyled">
            ${langHTML}
          </ul>
        </div>
        <div class="col-md-6">
          <h4 data-vi="Sở thích" data-en="Interests">${interestHeader}</h4>
          <ul class="list-unstyled">
            ${interestHTML}
          </ul>
        </div>
      </div>
    </div>
  `;
}
