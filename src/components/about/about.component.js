export function AboutComponent(profile, lang) {
  const isVi = lang === 'vi';

  const titleText = isVi ? profile.about.title.vi : profile.about.title.en;
  const introText = isVi ? profile.about.intro.vi : profile.about.intro.en;
  const subtitleText = isVi ? profile.about.subtitle.vi : profile.about.subtitle.en;
  
  const statsProj = isVi ? "Dự án" : "Projects";
  const statsYears = isVi ? "Năm" : "Years";
  const statsSkills = isVi ? "Kỹ năng" : "Skills";

  const labelContact = isVi ? "Liên hệ" : "Contact";
  const labelCV = "CV";

  const labelStudying = isVi ? "Học tại" : "Studying at";
  const labelPath = isVi ? "Định hướng" : "Career Path";
  const labelLocation = isVi ? "Địa điểm" : "Location";
  const labelEmail = "Email";
  const labelPhone = isVi ? "Điện thoại" : "Phone";
  const labelStatus = isVi ? "Trạng thái" : "Status";

  const locationVal = isVi ? profile.details.location.vi : profile.details.location.en;
  const statusVal = isVi ? profile.details.status.vi : profile.details.status.en;

  const paragraphsHTML = profile.about.paragraphs.map(p => `
    <p data-vi="${p.vi}" data-en="${p.en}">${isVi ? p.vi : p.en}</p>
  `).join('');

  return `
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span class="subtitle" data-vi="Về Tôi" data-en="About Me">${titleText}</span>
      <p data-vi="${profile.about.intro.vi}" data-en="${profile.about.intro.en}">${introText}</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-5">
        <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="150">
          <div class="profile-card">
            <div class="profile-header">
              <div class="profile-avatar">
                <img src="${profile.avatar}" class="img-fluid" alt="${profile.name}">
                <div class="status-indicator"></div>
              </div>
              <h3>${profile.name}</h3>
              <span class="role">${profile.role}</span>
              <div class="rating">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
                <span>4.8</span>
              </div>
            </div>

            <div class="profile-stats">
              <div class="stat-item">
                <h4>${profile.stats.projects}</h4>
                <p data-vi="Dự án" data-en="Projects">${statsProj}</p>
              </div>
              <div class="stat-item">
                <h4>${profile.stats.years}</h4>
                <p data-vi="Năm" data-en="Years">${statsYears}</p>
              </div>
              <div class="stat-item">
                <h4>${profile.stats.skills}</h4>
                <p data-vi="Kỹ năng" data-en="Skills">${statsSkills}</p>
              </div>
            </div>

            <div class="profile-actions">
              <a href="#contact" class="btn-primary it-glow" data-vi="Liên hệ" data-en="Contact"><i class="bi bi-envelope"></i> ${labelContact}</a>
              <a href="${profile.cvUrl}" class="btn-secondary it-glow" download><i class="bi bi-download"></i> ${labelCV}</a>
            </div>

            <div class="social-connect">
              <a href="https://www.linkedin.com/in/ho-van-tiet" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a href="https://github.com/vti0209" target="_blank"><i class="bi bi-github"></i></a>
              <a href="mailto:${profile.details.email}"><i class="bi bi-envelope"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-8" data-aos="fade-left" data-aos-delay="200">
          <div class="content-wrapper">
            <div class="bio-section">
              <div class="section-tag" data-vi="Về Tôi" data-en="About Me">${titleText}</div>
              <h2 data-vi="Hãy cùng tìm hiểu!" data-en="Let's find out!">${subtitleText}</h2>
              ${paragraphsHTML}
            </div>

            <div class="details-grid">
              <div class="detail-item">
                <i class="bi bi-mortarboard"></i>
                <div class="detail-content">
                  <span data-vi="Học tại" data-en="Studying at">${labelStudying}</span>
                  <strong>${profile.details.studyingAt}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-laptop"></i>
                <div class="detail-content">
                  <span data-vi="Định hướng" data-en="Career Path">${labelPath}</span>
                  <strong>${profile.details.careerPath}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-geo-alt"></i>
                <div class="detail-content">
                  <span data-vi="Địa điểm" data-en="Location">${labelLocation}</span>
                  <strong data-vi="${profile.details.location.vi}" data-en="${profile.details.location.en}">${locationVal}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-envelope"></i>
                <div class="detail-content">
                  <span data-vi="Email" data-en="Email">${labelEmail}</span>
                  <strong>${profile.details.email}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-phone"></i>
                <div class="detail-content">
                  <span data-vi="Điện thoại" data-en="Phone">${labelPhone}</span>
                  <strong>${profile.details.phone}</strong>
                </div>
              </div>

              <div class="detail-item">
                <i class="bi bi-calendar-check"></i>
                <div class="detail-content">
                  <span data-vi="Trạng thái" data-en="Status">${labelStatus}</span>
                  <strong data-vi="${profile.details.status.vi}" data-en="${profile.details.status.en}">${statusVal}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}
