export function renderRichDetails(project, lang) {
  const isVi = lang === 'vi';
  const det = project.details;
  if (!det) return '';

  const overviewTitle = isVi ? "Tổng quan dự án" : "Project Overview";
  const overviewHtml = isVi ? det.overview.vi : det.overview.en;

  const targetTitle = isVi ? det.targetUsers.titleVi : det.targetUsers.titleEn;
  const targetItemsHtml = det.targetUsers.items.map(item => `
    <li><i class="bi ${item.icon}"></i> ${isVi ? item.vi : item.en}</li>
  `).join('');

  const featuresTitle = isVi ? det.keyFeatures.titleVi : det.keyFeatures.titleEn;
  const featureItemsHtml = det.keyFeatures.items.map(item => `
    <li><i class="bi ${item.icon}"></i> ${isVi ? item.vi : item.en}</li>
  `).join('');

  const flowTitle = isVi ? det.userFlow.titleVi : det.userFlow.titleEn;
  const flowPath = isVi ? det.userFlow.flowVi : det.userFlow.flowEn;
  const flowNote = isVi ? det.userFlow.noteVi : det.userFlow.noteEn;

  const designTitle = isVi ? det.uiUxDesign.titleVi : det.uiUxDesign.titleEn;
  const designLeftHtml = det.uiUxDesign.leftItems.map(item => `
    <li><i class="bi ${item.icon}"></i> ${isVi ? item.vi : item.en}</li>
  `).join('');
  const designRightHtml = det.uiUxDesign.rightItems.map(item => `
    <li><i class="bi ${item.icon}"></i> ${isVi ? item.vi : item.en}</li>
  `).join('');

  const toolsTitle = isVi ? "Công cụ sử dụng" : "Tools Used";
  const toolsHtml = det.tools.map(tool => `
    <span class="skill-tag"><i class="bi ${tool.icon} me-1"></i> ${tool.label}</span>
  `).join('');

  const liveTitle = isVi ? "Xem dự án trên Figma" : "View Project on Figma";
  const openFigmaText = isVi ? "Mở trong Figma" : "Open in Figma";

  const imagesHtml = det.showcaseImages.map(img => `
    <img src="${img}" class="img-fluid" alt="Project detail"/>
  `).join('');

  return `
    <div class="project-cs-hero">
      <div class="container">
        <h1 class="heading-primary">${det.title}</h1>
        <div class="mt-4">
          <a href="${project.demo}" class="btn-gradient" target="_blank" rel="noopener">
            <i class="bi bi-box-arrow-up-right me-2"></i> ${det.demoText}
          </a>
        </div>
      </div>
    </div>

    <section class="project-details">
      <div class="main-container">
        <hr>
        <div class="project-showcase">
          ${imagesHtml}
        </div>
        <hr>
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-stars me-2" style="color:#e65c1e;"></i> ${overviewTitle}</h3>
              <p class="text-secondary">${overviewHtml}</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-people me-2" style="color:#e65c1e;"></i> ${targetTitle}</h3>
              <ul class="feature-list">
                ${targetItemsHtml}
              </ul>
            </div>
          </div>

          <div class="col-md-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-gear-wide-connected me-2"></i> ${featuresTitle}</h3>
              <ul class="feature-list">
                ${featureItemsHtml}
              </ul>
            </div>
          </div>

          <div class="col-md-6">
            <div class="info-card h-100">
              <h3 class="section-title"><i class="bi bi-arrow-repeat me-2"></i> ${flowTitle}</h3>
              <p class="text-secondary fw-semibold">${flowPath}</p>
              <p class="text-secondary mt-2 mb-0">${flowNote}</p>
            </div>
          </div>

          <div class="col-12">
            <div class="info-card">
              <h3 class="section-title"><i class="bi bi-brush me-2"></i> ${designTitle}</h3>
              <div class="row">
                <div class="col-md-6">
                  <ul class="feature-list">
                    ${designLeftHtml}
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="feature-list">
                    ${designRightHtml}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="info-card">
              <h3 class="section-title"><i class="bi bi-tools me-2"></i> ${toolsTitle}</h3>
              <div class="d-flex flex-wrap gap-2 mt-2">
                ${toolsHtml}
              </div>
            </div>
          </div>

          <div class="col-12 text-center mt-4">
            <div class="info-card d-inline-block w-auto mx-auto" style="background: transparent; box-shadow: none; border: none;">
              <h3 class="section-title" style="text-align:center;"><i class="bi bi-rocket-takeoff-fill me-2"></i> ${liveTitle}</h3>
              <a href="${project.demo}" class="btn-outline-dark-custom mt-2" target="_blank" rel="noopener">
                <i class="bi bi-figma fs-5"></i> ${openFigmaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderDefaultDetails(project, lang) {
  const isVi = lang === 'vi';
  const labelTech = isVi ? "Công nghệ sử dụng:" : "Technologies used:";
  const labelRepo = isVi ? "GitHub Repository" : "GitHub Repository";
  const labelDemo = isVi ? "Live Demo / Figma" : "Live Demo / Figma";
  
  const techBadges = project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
  const githubBtn = (project.github && project.github !== '#') 
    ? `<a href="${project.github}" target="_blank" class="btn btn-github mb-2 w-100"><i class="bi bi-github me-2"></i> ${labelRepo}</a>` 
    : '';
  const demoBtn = (project.demo && project.demo !== '#') 
    ? `<a href="${project.demo}" target="_blank" class="btn btn-demo mb-2 w-100"><i class="bi bi-display me-2"></i> ${labelDemo}</a>` 
    : '';

  return `
    <div class="row gy-4">
      <div class="col-lg-7">
        <div class="modal-img-container">
          <img src="${project.image}" id="modalImage" class="img-fluid rounded" alt="${project.getTitle(lang)}" style="width:100%; height:auto; object-fit:cover;">
        </div>
      </div>
      <div class="col-lg-5">
        <div class="project-info-box">
          <h3 id="modalTitle" class="mb-3" style="color: var(--heading-color); font-weight:700;">${project.getTitle(lang)}</h3>
          <p id="modalDescription" class="mb-4" style="color: var(--default-color); opacity: 0.8;">${project.getDescription(lang)}</p>
          <div class="info-list mb-4">
            <div class="info-item mb-3">
              <strong class="d-block mb-2 text-white-50">${labelTech}</strong>
              <div id="modalTech" class="project-tech-stack">${techBadges}</div>
            </div>
          </div>
          <div class="project-links pt-3 border-top border-secondary">
            ${githubBtn}
            ${demoBtn}
          </div>
        </div>
      </div>
    </div>
  `;
}
