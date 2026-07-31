export class MainLayout {
  static getSkeletonHTML() {
    return `
      <header id="header" class="header d-flex align-items-center fixed-top"></header>
      
      <main class="main">
        <section id="hero" class="hero section dark-background"></section>
        <section id="about" class="about section"></section>
        <section id="resume" class="resume section"></section>
        <section id="services" class="services section"></section>
        <section id="portfolio" class="portfolio section"></section>
        <section id="contact" class="contact section"></section>
      </main>

      <footer id="footer" class="footer"></footer>

      <!-- Mobile Bottom Navigation -->
      <nav class="mobile-bottom-nav d-md-none">
        <a href="#hero" class="nav-item active">
          <i class="bi bi-house-door"></i>
          <span data-vi="Trang Chủ" data-en="Home">Trang Chủ</span>
        </a>
        <a href="#about" class="nav-item">
          <i class="bi bi-person"></i>
          <span data-vi="Về Tôi" data-en="About">Về Tôi</span>
        </a>
        <a href="#resume" class="nav-item">
          <i class="bi bi-journal-text"></i>
          <span data-vi="Hành Trình" data-en="Journey">Hành Trình</span>
        </a>
        <a href="#portfolio" class="nav-item">
          <i class="bi bi-grid"></i>
          <span data-vi="Dự Án" data-en="Projects">Dự Án</span>
        </a>
        <a href="#contact" class="nav-item">
          <i class="bi bi-envelope"></i>
          <span data-vi="Liên Hệ" data-en="Contact">Liên Hệ</span>
        </a>
      </nav>

      <!-- Scroll Top -->
      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

      <!-- Preloader -->
      <div id="preloader"></div>

      <!-- Project Details Modal -->
      <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content project-modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="projectModalLabel" data-vi="Chi tiết dự án" data-en="Project Details">Chi tiết dự án</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4">
              <div class="col-12 text-center py-5">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3 text-secondary" data-vi="Đang tải thông tin dự án..." data-en="Loading project details...">Đang tải thông tin dự án...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
