import { DataService } from '../services/data.service.js';
import { ProjectView } from '../views/project.view.js';
import { initGLightbox, refreshAOS } from '../utils/animation.js';

export class ProjectController {
  constructor(lang) {
    this.lang = lang;
    this.initIsotope = null;
    this.itemsPerPage = 3;
    this.currentPage = 1;
    this.filteredItems = [];
    this.currentFilter = '.filter-web';
  }

  init() {
    this.setupIsotope();
    this.setupModalListener();
  }

  setupIsotope() {
    const isotopeLayoutEl = document.querySelector('.isotope-layout');
    if (!isotopeLayoutEl) return;

    const layout = isotopeLayoutEl.getAttribute('data-layout') ?? 'masonry';
    const sort = isotopeLayoutEl.getAttribute('data-sort') ?? 'original-order';
    const container = isotopeLayoutEl.querySelector('.isotope-container');
    const paginationContainer = document.getElementById('portfolio-pagination');

    if (!container) return;

    const applyPagination = () => {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;

      this.initIsotope.arrange({
        filter: (itemElem) => {
          const isFilterMatch = this.currentFilter === '*' || itemElem.classList.contains(this.currentFilter.replace('.', ''));
          if (!isFilterMatch) return false;
          
          const index = this.filteredItems.indexOf(itemElem);
          return index >= startIndex && index < endIndex;
        }
      });

      refreshAOS();
    };

    const updatePaginationUI = () => {
      if (!paginationContainer) return;
      paginationContainer.innerHTML = '';
      
      const totalPages = Math.ceil(this.filteredItems.length / this.itemsPerPage);
      if (totalPages <= 1) return;

      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === this.currentPage ? 'active' : ''}`;
        btn.innerText = i;
        btn.addEventListener('click', () => {
          this.currentPage = i;
          applyPagination();
          updatePaginationUI();
        });
        paginationContainer.appendChild(btn);
      }
    };

    // Use imagesLoaded (from index.html vendor) to initialize isotope
    if (typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
      imagesLoaded(container, () => {
        this.initIsotope = new Isotope(container, {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: this.currentFilter,
          sortBy: sort
        });

        this.filteredItems = this.initIsotope.getFilteredItemElements();
        updatePaginationUI();
        applyPagination();
        initGLightbox(); // Re-init lightbox
      });
    }

    // Filter selectors
    isotopeLayoutEl.querySelectorAll('.isotope-filters li').forEach(filterBtn => {
      filterBtn.addEventListener('click', () => {
        const activeClass = isotopeLayoutEl.querySelector('.isotope-filters .filter-active');
        if (activeClass) activeClass.classList.remove('filter-active');
        
        filterBtn.classList.add('filter-active');
        this.currentFilter = filterBtn.getAttribute('data-filter');
        this.currentPage = 1;

        if (this.initIsotope) {
          this.initIsotope.arrange({ filter: this.currentFilter });
          this.filteredItems = this.initIsotope.getFilteredItemElements();
          applyPagination();
          updatePaginationUI();
        }
      });
    });
  }

  setupModalListener() {
    const projectModal = document.getElementById('projectModal');
    if (!projectModal) return;

    projectModal.addEventListener('show.bs.modal', (event) => {
      const button = event.relatedTarget.closest('.portfolio-details');
      if (!button) return;

      const detailsId = button.getAttribute('data-details-id');
      
      if (detailsId && detailsId.startsWith('details-')) {
        const id = detailsId.replace('details-', '');
        const project = DataService.getProjectById(id);
        ProjectView.renderModalContent(projectModal, project, this.lang);
      } else {
        // Fallback or read attributes direct
        const tempProject = {
          title: button.getAttribute('data-title'),
          image: button.getAttribute('data-image'),
          github: button.getAttribute('data-github'),
          demo: button.getAttribute('data-demo'),
          tech: (button.getAttribute('data-tech') || '').split(',').map(t => t.trim()),
          descriptionVi: button.getAttribute('data-description'),
          descriptionEn: button.getAttribute('data-description'),
          hasRichDetails: false,
          getTitle: function(l) { return this.title; },
          getDescription: function(l) { return this.descriptionVi; }
        };
        ProjectView.renderModalContent(projectModal, tempProject, this.lang);
      }
    });
  }

  updateLanguage(lang) {
    this.lang = lang;
    this.currentPage = 1;
    this.setupIsotope();
  }
}
