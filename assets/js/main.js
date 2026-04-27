/**
* Template Name: Craftivo
* Template URL: https://bootstrapmade.com/craftivo-bootstrap-portfolio-template/
* Updated: Oct 04 2025 with Bootstrap v5.3.8
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      smartBackspace: true,
      cursorChar: '|'
    });
  }

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    let itemsPerPage = 3;
    let currentPage = 1;
    let filteredItems = [];

    const paginationContainer = document.getElementById('portfolio-pagination');

    function updatePaginationUI() {
      if (!paginationContainer) return;
      paginationContainer.innerHTML = '';
      
      const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
      if (totalPages <= 1) return;

      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.innerText = i;
        btn.addEventListener('click', () => {
          currentPage = i;
          applyPagination();
          updatePaginationUI();
        });
        paginationContainer.appendChild(btn);
      }
    }

    function applyPagination() {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      initIsotope.arrange({
        filter: function(itemElem) {
          const isFilterMatch = filter === '*' || itemElem.classList.contains(filter.replace('.', ''));
          if (!isFilterMatch) return false;
          
          const index = filteredItems.indexOf(itemElem);
          return index >= startIndex && index < endIndex;
        }
      });

      if (typeof aosInit === 'function') {
        aosInit();
      }
    }

    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });

      // Initial filtered items
      filteredItems = initIsotope.getFilteredItemElements();
      updatePaginationUI();
      applyPagination();
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        filter = this.getAttribute('data-filter');
        
        // Reset to first page on filter change
        currentPage = 1;
        
        // Temporarily set filter to get total matches
        initIsotope.arrange({ filter: filter });
        filteredItems = initIsotope.getFilteredItemElements();
        
        applyPagination();
        updatePaginationUI();
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * SPA-style Tabbed Navigation
   */
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navmenu a, .btn-getstarted, .btn-cv, .profile-actions a, .footer-links a');

  function switchSection(hash) {
    const targetId = hash || '#hero';
    const targetSection = document.querySelector(targetId);

    if (targetSection && targetSection.tagName === 'SECTION') {
      // Hide all sections
      sections.forEach(s => s.classList.remove('active-section'));
      
      // Show target section
      targetSection.classList.add('active-section');
      
      // Update Nav active state
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.navmenu a[href*="${targetId}"]`);
      if (activeLink) activeLink.classList.add('active');

      // Scroll to top of the new section/page
      window.scrollTo(0, 0);

      // Refresh Isotope layout if target is portfolio
      if (targetId === '#portfolio' && typeof Isotope !== 'undefined') {
        const iso = Isotope.data(document.querySelector('.isotope-layout .isotope-container'));
        if (iso) {
          setTimeout(() => iso.layout(), 100);
        }
      }

      // Refresh AOS animations
      if (typeof AOS !== 'undefined') {
        setTimeout(() => AOS.refresh(), 200);
      }
    }
  }

  // Handle hash change
  window.addEventListener('hashchange', () => {
    switchSection(window.location.hash);
  });

  // Handle initial load
  window.addEventListener('load', () => {
    switchSection(window.location.hash);
  });

  // Intercept link clicks for internal hash links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.hash && link.hash.startsWith('#')) {
      const target = document.querySelector(link.hash);
      if (target && target.tagName === 'SECTION') {
        // Only prevent default if it's a section on the same page
        // e.preventDefault(); // Let hashchange handle it
      }
    }
  });

  // Project Modal Population
  const projectModal = document.getElementById('projectModal');
  if (projectModal) {
    projectModal.addEventListener('show.bs.modal', function(event) {
      const button = event.relatedTarget.closest('.portfolio-details');
      if (!button) return;
      
      const detailsId = button.getAttribute('data-details-id');
      const modalBody = projectModal.querySelector('.modal-body');
      const modalHeader = projectModal.querySelector('.modal-header');
      const modalContent = projectModal.querySelector('.modal-content');
      const modalDialog = projectModal.querySelector('.modal-dialog');
      
      if (detailsId) {
        // Rich Content Mode
        const detailedContent = document.getElementById(detailsId);
        if (detailedContent) {
          modalBody.innerHTML = detailedContent.innerHTML;
          modalHeader.classList.add('d-none');
          modalContent.classList.add('p-0');
          modalDialog.classList.remove('modal-lg');
          modalDialog.classList.add('modal-xl');
          return;
        }
      }

      // Default Mode
      modalHeader.classList.remove('d-none');
      modalContent.classList.remove('p-0');
      modalDialog.classList.remove('modal-xl');
      modalDialog.classList.add('modal-lg');
      
      modalBody.innerHTML = `
        <div class="row gy-4">
          <div class="col-lg-7">
            <div class="modal-img-container">
              <img src="" id="modalImage" class="img-fluid rounded" alt="" style="width:100%; height:auto; object-fit:cover;">
            </div>
          </div>
          <div class="col-lg-5">
            <div class="project-info-box">
              <h3 id="modalTitle" class="mb-3" style="color: var(--heading-color); font-weight:700;"></h3>
              <p id="modalDescription" class="mb-4" style="color: var(--default-color); opacity: 0.8;"></p>
              <div class="info-list mb-4">
                <div class="info-item mb-3">
                  <strong class="d-block mb-2 text-white-50">Công nghệ sử dụng:</strong>
                  <div id="modalTech" class="project-tech-stack"></div>
                </div>
              </div>
              <div class="project-links pt-3 border-top border-secondary">
                <a href="#" id="modalGithub" target="_blank" class="btn btn-github mb-2 w-100"><i class="bi bi-github me-2"></i> GitHub Repository</a>
                <a href="#" id="modalDemo" target="_blank" class="btn btn-demo mb-2 w-100"><i class="bi bi-display me-2"></i> Live Demo / Figma</a>
              </div>
            </div>
          </div>
        </div>
      `;

      const title = button.getAttribute('data-title') || 'Project Title';
      const description = button.getAttribute('data-description') || 'No description available.';
      const tech = button.getAttribute('data-tech');
      const github = button.getAttribute('data-github');
      const demo = button.getAttribute('data-demo');
      const image = button.getAttribute('data-image');

      projectModal.querySelector('#modalTitle').textContent = title;
      projectModal.querySelector('#modalImage').src = image || '';
      projectModal.querySelector('#modalDescription').innerHTML = description;
      
      const techContainer = projectModal.querySelector('#modalTech');
      techContainer.innerHTML = '';
      if (tech) {
        tech.split(',').forEach(t => {
          const badge = document.createElement('span');
          badge.className = 'tech-badge';
          badge.textContent = t.trim();
          techContainer.appendChild(badge);
        });
      }

      const githubBtn = projectModal.querySelector('#modalGithub');
      const demoBtn = projectModal.querySelector('#modalDemo');

      if (github && github !== '#') {
        githubBtn.href = github;
        githubBtn.classList.remove('d-none');
      } else {
        githubBtn.classList.add('d-none');
      }

      if (demo && demo !== '#') {
        demoBtn.href = demo;
        demoBtn.classList.remove('d-none');
      } else {
        demoBtn.classList.add('d-none');
      }
    });
  }
})();