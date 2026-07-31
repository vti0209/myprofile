export function FooterComponent(profile, socials, lang) {
  const isVi = lang === 'vi';

  const footerAboutVi = "Portfolio cá nhân của Hồ Văn Tiết - Sinh viên năm hai Công nghệ Thông tin, định hướng Frontend Developer & Business Analyst.";
  const footerAboutEn = "Personal portfolio of Ho Van Tiet - Software Engineering student, oriented as a Frontend Developer & Business Analyst.";
  const footerAbout = isVi ? footerAboutVi : footerAboutEn;

  const labelLinks = isVi ? "Liên kết" : "Links";
  const labelServices = isVi ? "Dịch vụ" : "Services";
  const labelInfo = isVi ? "Thông tin" : "Information";

  const linkHome = isVi ? "Trang chủ" : "Home";
  const linkAbout = isVi ? "Về Tôi" : "About";
  const linkServices = isVi ? "Dịch vụ" : "Services";
  const linkProjects = isVi ? "Dự án" : "Projects";
  const linkContact = isVi ? "Liên hệ" : "Contact";

  const svcWebDesign = isVi ? "Thiết kế Web" : "Web Design";
  const svcFrontend = isVi ? "Phát triển Frontend" : "Frontend Dev";
  const svcBA = isVi ? "Phân tích nghiệp vụ" : "Business Analysis";
  const svcUIUX = isVi ? "Thiết kế UI/UX" : "UI/UX Design";
  const svcMobile = isVi ? "Phát triển Mobile" : "Mobile Dev";

  const labelCopyright = isVi ? "Bản quyền" : "Copyright";
  const addressVal = isVi ? profile.details.location.vi : profile.details.location.en;

  const socialsHTML = socials.map(s => `
    <a href="${s.url}" target="_blank"><i class="bi ${s.icon}"></i></a>
  `).join('');

  return `
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="${profile.logo}" alt="VTi Logo">
          </a>
          <p>${footerAbout}</p>
          <div class="social-links d-flex mt-4">
            ${socialsHTML}
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4 data-vi="Liên kết" data-en="Links">${labelLinks}</h4>
          <ul>
            <li><a href="#hero" data-vi="Trang chủ" data-en="Home">${linkHome}</a></li>
            <li><a href="#about" data-vi="Về Tôi" data-en="About">${linkAbout}</a></li>
            <li><a href="#services" data-vi="Dịch vụ" data-en="Services">${linkServices}</a></li>
            <li><a href="#portfolio" data-vi="Dự án" data-en="Projects">${linkProjects}</a></li>
            <li><a href="#contact" data-vi="Liên hệ" data-en="Contact">${linkContact}</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4 data-vi="Dịch vụ" data-en="Services">${labelServices}</h4>
          <ul>
            <li><a href="#" data-vi="Thiết kế Web" data-en="Web Design">${svcWebDesign}</a></li>
            <li><a href="#" data-vi="Phát triển Frontend" data-en="Frontend Dev">${svcFrontend}</a></li>
            <li><a href="#" data-vi="Phân tích nghiệp vụ" data-en="Business Analysis">${svcBA}</a></li>
            <li><a href="#" data-vi="Thiết kế UI/UX" data-en="UI/UX Design">${svcUIUX}</a></li>
            <li><a href="#" data-vi="Phát triển Mobile" data-en="Mobile Dev">${svcMobile}</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4 data-vi="Thông tin" data-en="Information">${labelInfo}</h4>
          <p data-vi="${profile.details.location.vi}" data-en="${profile.details.location.en}">${addressVal}</p>
          <p class="mt-4"><strong>Phone:</strong> <span>${profile.details.phone}</span></p>
          <p><strong>Email:</strong> <span>${profile.details.email}</span></p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span data-vi="Bản quyền" data-en="Copyright">${labelCopyright}</span> <strong class="px-1 sitename">VanTiet</strong> <span>2026 | Information Technology Student</span></p>
      <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">Ho Van Tiet</a> | <a href="https://bootstrapmade.com/tools/">Dev74</a>
      </div>
    </div>
  `;
}
