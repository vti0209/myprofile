export function ServicesComponent(profile, lang) {
  const isVi = lang === 'vi';
  
  const subtitleText = isVi ? "Dịch vụ" : "Services";
  const descText = isVi 
    ? "Những lĩnh vực tôi tập trung phát triển và mong muốn mang lại giá trị tốt nhất cho người dùng." 
    : "Areas I focus on developing and aim to provide the best value to users.";

  const ctaTitle = isVi ? "Sẵn sàng cho những thử thách mới" : "Ready for New Challenges";
  const ctaDesc = isVi 
    ? "Hãy cùng nhau tạo ra những sản phẩm công nghệ tuyệt vời và có giá trị." 
    : "Let's create great and valuable technology products together.";
  const ctaButton = isVi ? "Hợp tác ngay" : "Partner Now";

  const servicesHTML = profile.services.map(s => {
    const title = isVi ? s.title.vi : s.title.en;
    const desc = isVi ? s.description.vi : s.description.en;
    const contactLabel = isVi ? "Liên hệ" : "Contact";
    
    return `
      <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
        <div class="service-item ${s.featured ? 'featured' : ''}">
          ${s.featured ? `<div class="featured-tag">${isVi ? 'Nổi bật' : 'Featured'}</div>` : ''}
          <div class="icon-wrapper">
            <i class="bi ${s.icon}"></i>
          </div>
          <h4 data-vi="${s.title.vi}" data-en="${s.title.en}">${title}</h4>
          <p data-vi="${s.description.vi}" data-en="${s.description.en}">${desc}</p>
          <a href="#contact" class="read-more">
            <span data-vi="Liên hệ" data-en="Contact">${contactLabel}</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
  }).join('');

  return `
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span class="subtitle" data-vi="Dịch vụ" data-en="Services">${subtitleText}</span>
      <p data-vi="Những lĩnh vực tôi tập trung phát triển và mong muốn mang lại giá trị tốt nhất cho người dùng." data-en="Areas I focus on developing and aim to provide the best value to users.">${descText}</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">
        ${servicesHTML}
      </div>

      <div class="row mt-5">
        <div class="col-12" data-aos="fade-up" data-aos-delay="200">
          <div class="cta-box">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 data-vi="Sẵn sàng cho những thử thách mới" data-en="Ready for New Challenges">${ctaTitle}</h3>
                <p data-vi="Hãy cùng nhau tạo ra những sản phẩm công nghệ tuyệt vời và có giá trị." data-en="Let's create great and valuable technology products together.">${ctaDesc}</p>
              </div>
              <div class="col-lg-4 text-lg-end text-center">
                <a href="#contact" class="cta-btn" data-vi="Hợp tác ngay" data-en="Partner Now">${ctaButton}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}
