export function ExperienceComponent(experience, lang) {
  const isVi = lang === 'vi';

  const eduBadge = isVi ? "Học vấn" : "Education";
  const eduHeader = isVi ? "Học vấn & Bằng cấp" : "Education & Diploma";
  const certBadge = isVi ? "Chứng chỉ" : "Certificates";
  const certHeader = isVi ? "Chứng chỉ" : "Certificates";

  const timelineHTML = experience.education.map(edu => {
    const desc = isVi ? edu.descriptionVi : edu.descriptionEn;
    return `
      <div class="timeline-item">
        <div class="timeline-marker">
          <i class="bi bi-mortarboard-fill"></i>
        </div>
        <div class="timeline-content">
          <div class="education-meta">
            <span class="year-range">${edu.period}</span>
          </div>
          <h4>${edu.degree}</h4>
          <p class="institution">${edu.institution}</p>
          <p class="description" data-vi="${edu.descriptionVi}" data-en="${edu.descriptionEn}">${desc}</p>
        </div>
      </div>
    `;
  }).join('');

  const certsHTML = experience.certificates.map(c => `
    <div class="cert-item it-glow">
      <i class="bi bi-patch-check"></i>
      <span>${c.name}</span>
    </div>
  `).join('');

  return `
    <div class="experience-section">
      <div class="section-header" data-aos="fade-right" data-aos-delay="200">
        <div class="header-content">
          <span class="section-badge" data-vi="Học vấn" data-en="Education">${eduBadge}</span>
          <h2 data-vi="Học vấn & Bằng cấp" data-en="Education & Diploma">${eduHeader}</h2>
        </div>
      </div>

      <div class="education-timeline" data-aos="fade-up" data-aos-delay="300">
        <div class="timeline-track">
          ${timelineHTML}
        </div>
      </div>

      <div class="section-header mt-5" data-aos="fade-right" data-aos-delay="200">
        <div class="header-content">
          <span class="section-badge" data-vi="Chứng chỉ" data-en="Certificates">${certBadge}</span>
          <h2 data-vi="Chứng chỉ" data-en="Certificates">${certHeader}</h2>
        </div>
      </div>
      <div class="certificates-list" data-aos="fade-up" data-aos-delay="400">
        ${certsHTML}
      </div>
    </div>
  `;
}
