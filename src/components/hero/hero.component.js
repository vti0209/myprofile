export function HeroComponent(profile, socials, lang) {
  const isVi = lang === 'vi';
  const welcome = isVi ? "Xin chào, Tôi là " + profile.name : "Hi, I'm " + profile.name;
  const iam = isVi ? "Tôi là " : "I am a ";

  const socialsHTML = socials.map(s => `
    <a href="${s.url}" target="_blank" class="it-glow"><i class="bi ${s.icon}"></i></a>
  `).join('');

  return `
    <img src="assets/img/profile/add.jpg" alt="" data-aos="fade-in">

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 data-vi="Xin chào, Tôi là Hồ Văn Tiết" data-en="Hi, I'm Ho Van Tiet">${welcome}</h2>
          <p><span data-vi="Tôi là " data-en="I am a ">${iam}</span><span class="typed" data-typed-items="${profile.role}"></span><span class="typed-cursor" aria-hidden="true"></span></p>
          <div class="social-links">
            ${socialsHTML}
          </div>
        </div>
      </div>
    </div>
  `;
}
