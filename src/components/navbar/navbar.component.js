export function NavbarComponent(profile, socials, lang) {
  const isVi = lang === 'vi';
  const labelHome = isVi ? "Trang chủ" : "Home";
  const labelAbout = isVi ? "Về Tôi" : "About";
  const labelJourney = isVi ? "Hành trình" : "Journey";
  const labelServices = isVi ? "Dịch vụ" : "Services";
  const labelProjects = isVi ? "Dự án" : "Projects";
  const labelContact = isVi ? "Liên hệ" : "Contact";
  const labelDiscover = isVi ? "Khám phá" : "Discover";
  const labelDownload = isVi ? "Tải CV" : "Download CV";
  const toggleText = isVi ? "EN" : "VI";

  return `
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" class="logo d-flex align-items-center me-auto">
        <img src="${profile.logo}" alt="VTi Logo">
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active" data-vi="Trang chủ" data-en="Home">${labelHome}</a></li>
          <li><a href="#about" data-vi="Về Tôi" data-en="About">${labelAbout}</a></li>
          <li><a href="#resume" data-vi="Hành trình" data-en="Journey">${labelJourney}</a></li>
          <li><a href="#services" data-vi="Dịch vụ" data-en="Services">${labelServices}</a></li>
          <li><a href="#portfolio" data-vi="Dự án" data-en="Projects">${labelProjects}</a></li>
          <li><a href="#contact" data-vi="Liên hệ" data-en="Contact">${labelContact}</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div class="header-actions d-flex align-items-center">
        <a class="btn-getstarted it-glow" href="#about" data-vi="Khám phá" data-en="Discover">${labelDiscover}</a>
        <a class="btn-cv ms-2 it-glow" href="${profile.cvUrl}" download><i class="bi bi-download"></i> <span data-vi="Tải CV" data-en="Download CV">${labelDownload}</span></a>
        <div class="lang-switcher ms-3">
          <button id="lang-toggle" class="btn btn-sm btn-outline-light">
            <span class="lang-text">${toggleText}</span>
          </button>
        </div>
      </div>

    </div>
  `;
}
